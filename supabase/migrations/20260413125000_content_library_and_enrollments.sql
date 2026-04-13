DO $$
BEGIN
  -- Library tables
  CREATE TABLE IF NOT EXISTS public.library_modules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    order_index INT NOT NULL DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS public.library_lessons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    library_module_id UUID REFERENCES public.library_modules(id) ON DELETE CASCADE,
    organization_id UUID NOT NULL REFERENCES public.organizations(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    duration TEXT,
    video_url TEXT,
    is_test BOOLEAN DEFAULT false,
    content TEXT,
    pdf_url TEXT,
    order_index INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  -- Enrollments
  CREATE TABLE IF NOT EXISTS public.course_enrollments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    profile_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(course_id, profile_id)
  );
END $$;

-- Add is_private to courses
ALTER TABLE public.courses ADD COLUMN IF NOT EXISTS is_private BOOLEAN DEFAULT false;

-- RLS for library
ALTER TABLE public.library_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.library_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admins can manage library_modules" ON public.library_modules;
CREATE POLICY "Admins can manage library_modules" ON public.library_modules
  FOR ALL TO public
  USING (organization_id IN ( SELECT profiles.organization_id FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin' ))
  WITH CHECK (organization_id IN ( SELECT profiles.organization_id FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin' ));

DROP POLICY IF EXISTS "Users can read library_modules" ON public.library_modules;
CREATE POLICY "Users can read library_modules" ON public.library_modules
  FOR SELECT TO public
  USING (organization_id IN ( SELECT profiles.organization_id FROM profiles WHERE profiles.id = auth.uid() ));

DROP POLICY IF EXISTS "Admins can manage library_lessons" ON public.library_lessons;
CREATE POLICY "Admins can manage library_lessons" ON public.library_lessons
  FOR ALL TO public
  USING (organization_id IN ( SELECT profiles.organization_id FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin' ))
  WITH CHECK (organization_id IN ( SELECT profiles.organization_id FROM profiles WHERE profiles.id = auth.uid() AND profiles.role = 'admin' ));

DROP POLICY IF EXISTS "Users can read library_lessons" ON public.library_lessons;
CREATE POLICY "Users can read library_lessons" ON public.library_lessons
  FOR SELECT TO public
  USING (organization_id IN ( SELECT profiles.organization_id FROM profiles WHERE profiles.id = auth.uid() ));

-- RLS for enrollments
DROP POLICY IF EXISTS "Admins can manage course_enrollments" ON public.course_enrollments;
CREATE POLICY "Admins can manage course_enrollments" ON public.course_enrollments
  FOR ALL TO public
  USING (
    EXISTS (
      SELECT 1 FROM courses c
      JOIN profiles p ON p.organization_id = c.organization_id
      WHERE c.id = course_id AND p.id = auth.uid() AND p.role = 'admin'
    )
  );

DROP POLICY IF EXISTS "Users can read own enrollments" ON public.course_enrollments;
CREATE POLICY "Users can read own enrollments" ON public.course_enrollments
  FOR SELECT TO public
  USING (profile_id = auth.uid());

-- Update courses RLS
DROP POLICY IF EXISTS "Users can read courses of their organization" ON public.courses;
CREATE POLICY "Users can read courses of their organization" ON public.courses
  FOR SELECT TO public
  USING (
    organization_id IN ( SELECT profiles.organization_id FROM profiles WHERE profiles.id = auth.uid() )
    AND
    (
      is_private = false
      OR
      auth.uid() IN ( SELECT profile_id FROM public.course_enrollments WHERE course_id = id )
      OR
      'admin' = ( SELECT role FROM profiles WHERE profiles.id = auth.uid() )
    )
  );
