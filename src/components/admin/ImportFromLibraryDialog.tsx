import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useOrganization } from '@/context/OrganizationContext'
import { Library, Plus, Loader2 } from 'lucide-react'

export function ImportFromLibraryDialog({
  courseId,
  open,
  onOpenChange,
  onImportComplete,
}: {
  courseId: string
  open: boolean
  onOpenChange: (open: boolean) => void
  onImportComplete: () => void
}) {
  const { organization } = useOrganization()
  const [libraryModules, setLibraryModules] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open && organization) {
      supabase
        .from('library_modules')
        .select('*, library_lessons(*)')
        .eq('organization_id', organization.id)
        .order('order_index')
        .then(({ data }) => setLibraryModules(data || []))
    }
  }, [open, organization])

  const importModule = async (mod: any) => {
    setLoading(true)

    const { data: currentMods } = await supabase
      .from('modules')
      .select('id')
      .eq('course_id', courseId)
    const orderIndex = currentMods ? currentMods.length : 0

    const { data: newMod } = await supabase
      .from('modules')
      .insert({
        course_id: courseId,
        title: mod.title,
        order_index: orderIndex,
      })
      .select('id')
      .single()

    if (newMod && mod.library_lessons?.length > 0) {
      const lessonsToInsert = mod.library_lessons.map(
        (l: any, idx: number) => ({
          module_id: newMod.id,
          title: l.title,
          duration: l.duration,
          video_url: l.video_url,
          is_test: l.is_test,
          content: l.content,
          pdf_url: l.pdf_url,
          order_index: idx,
        }),
      )

      await supabase.from('lessons').insert(lessonsToInsert)
    }

    setLoading(false)
    onOpenChange(false)
    onImportComplete()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Library className="w-5 h-5" /> Import from Content Library
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 mt-4">
          {libraryModules.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-8 bg-gray-50 rounded-lg">
              Your library is empty. Add reusable content in the "Content
              Library" tab on the dashboard.
            </p>
          ) : (
            libraryModules.map((mod) => (
              <div
                key={mod.id}
                className="border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-gray-300 transition-colors"
              >
                <div>
                  <h4 className="font-medium text-[#111111]">{mod.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {mod.library_lessons?.length || 0} lessons included
                  </p>
                </div>
                <Button
                  size="sm"
                  onClick={() => importModule(mod)}
                  disabled={loading}
                  className="bg-gray-100 hover:bg-gray-200 text-black border-0"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Plus className="w-4 h-4 mr-2" />
                  )}{' '}
                  Import Module
                </Button>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
