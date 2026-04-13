CREATE TABLE IF NOT EXISTS public.mentoring_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    role TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.mentoring_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can insert mentoring leads" ON public.mentoring_leads;
CREATE POLICY "Public can insert mentoring leads" ON public.mentoring_leads 
    FOR INSERT TO public WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can read mentoring leads" ON public.mentoring_leads;
CREATE POLICY "Admins can read mentoring leads" ON public.mentoring_leads 
    FOR SELECT TO authenticated USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
        )
    );
