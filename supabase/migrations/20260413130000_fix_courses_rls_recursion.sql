-- Function to safely check if current user is admin of the course without triggering RLS
CREATE OR REPLACE FUNCTION public.is_course_admin(check_course_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
SET search_path TO 'public'
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 
    FROM public.profiles p
    JOIN public.courses c ON c.organization_id = p.organization_id
    WHERE p.id = auth.uid() 
      AND p.role = 'admin'
      AND c.id = check_course_id
  );
$$;

-- Drop problematic policies
DROP POLICY IF EXISTS "Users can read courses of their organization" ON public.courses;
DROP POLICY IF EXISTS "Admins can manage course_enrollments" ON public.course_enrollments;
DROP POLICY IF EXISTS "Admins can read courses of their organization" ON public.courses;
DROP POLICY IF EXISTS "Students can read courses of their organization" ON public.courses;

-- Update course_enrollments policy to use the function (breaks recursion)
CREATE POLICY "Admins can manage course_enrollments" ON public.course_enrollments
  FOR ALL TO public
  USING ( public.is_course_admin(course_id) );

-- Separate courses SELECT policies for admins and students
CREATE POLICY "Admins can read courses of their organization" ON public.courses
  FOR SELECT TO public
  USING (
    organization_id IN ( 
      SELECT organization_id FROM profiles WHERE id = auth.uid() AND role = 'admin' 
    )
  );

CREATE POLICY "Students can read courses of their organization" ON public.courses
  FOR SELECT TO public
  USING (
    organization_id IN ( 
      SELECT organization_id FROM profiles WHERE id = auth.uid() AND (role = 'student' OR role IS NULL) 
    )
    AND
    (
      is_private = false
      OR
      id IN ( SELECT course_id FROM public.course_enrollments WHERE profile_id = auth.uid() )
    )
  );
