import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Plus,
  Trash,
  Edit,
  Video,
  Clock,
  CheckCircle,
  FileText,
  AlignLeft,
} from 'lucide-react'
import { useOrganization } from '@/context/OrganizationContext'

export function LibraryManager() {
  const { organization } = useOrganization()
  const [modules, setModules] = useState<any[]>([])
  const [newModuleTitle, setNewModuleTitle] = useState('')
  const [editingLesson, setEditingLesson] = useState<any | null>(null)
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null)

  const fetchLibrary = async () => {
    if (!organization) return
    const { data: mods } = await supabase
      .from('library_modules')
      .select('*, library_lessons(*)')
      .eq('organization_id', organization.id)
      .order('order_index')

    if (mods) {
      setModules(
        mods.map((m) => ({
          ...m,
          library_lessons:
            m.library_lessons?.sort(
              (a: any, b: any) => a.order_index - b.order_index,
            ) || [],
        })),
      )
    }
  }

  useEffect(() => {
    fetchLibrary()
  }, [organization])

  const addModule = async () => {
    if (!newModuleTitle || !organization) return
    await supabase.from('library_modules').insert({
      organization_id: organization.id,
      title: newModuleTitle,
      order_index: modules.length,
    })
    setNewModuleTitle('')
    fetchLibrary()
  }

  const deleteModule = async (id: string) => {
    if (!confirm('Delete template module?')) return
    await supabase.from('library_modules').delete().eq('id', id)
    fetchLibrary()
  }

  const saveLesson = async () => {
    if (!editingLesson || !activeModuleId || !organization) return
    const payload = {
      title: editingLesson.title || 'Untitled',
      duration: editingLesson.duration || '00:00',
      is_test: editingLesson.is_test || false,
      video_url: editingLesson.video_url || null,
      content: editingLesson.content || null,
      pdf_url: editingLesson.pdf_url || null,
      library_module_id: activeModuleId,
      organization_id: organization.id,
    }

    if (editingLesson.id) {
      await supabase
        .from('library_lessons')
        .update(payload)
        .eq('id', editingLesson.id)
    } else {
      const mod = modules.find((m) => m.id === activeModuleId)
      await supabase
        .from('library_lessons')
        .insert({ ...payload, order_index: mod?.library_lessons.length || 0 })
    }
    setEditingLesson(null)
    setActiveModuleId(null)
    fetchLibrary()
  }

  const deleteLesson = async (id: string) => {
    if (!confirm('Delete template lesson?')) return
    await supabase.from('library_lessons').delete().eq('id', id)
    fetchLibrary()
  }

  return (
    <div className="space-y-8">
      <div className="flex gap-4 items-end bg-gray-50 p-6 rounded-lg border border-gray-100">
        <div className="flex-1 space-y-2">
          <Label className="text-xs text-gray-500 uppercase tracking-wide">
            New Library Module
          </Label>
          <Input
            placeholder="Template Module Title"
            value={newModuleTitle}
            onChange={(e) => setNewModuleTitle(e.target.value)}
            className="bg-white"
          />
        </div>
        <Button
          onClick={addModule}
          className="bg-[#111111] hover:bg-[#333333] text-white"
        >
          <Plus className="w-4 h-4 mr-2" /> Add to Library
        </Button>
      </div>

      <div className="space-y-4">
        {modules.map((module, index) => (
          <div
            key={module.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-200 text-xs font-mono font-medium text-gray-600 flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="font-medium text-[#111111]">
                  {module.title}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteModule(module.id)}
                className="text-gray-400 hover:text-red-500 hover:bg-red-50"
              >
                <Trash className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4">
              <div className="space-y-2 mb-4">
                {module.library_lessons.map((lesson: any) => (
                  <div
                    key={lesson.id}
                    className="flex items-center justify-between group bg-white border border-gray-100 hover:border-gray-300 p-3 rounded-md transition-all"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-sm text-[#111111]">
                        {lesson.title}
                      </span>
                      <span className="text-xs text-gray-400 font-mono flex items-center gap-2">
                        <Clock className="w-3 h-3" />{' '}
                        {lesson.duration || '00:00'}
                      </span>
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => {
                          setEditingLesson(lesson)
                          setActiveModuleId(module.id)
                        }}
                      >
                        <Edit className="w-3.5 h-3.5 text-gray-600" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => deleteLesson(lesson.id)}
                      >
                        <Trash className="w-3.5 h-3.5 text-red-400" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-dashed"
                onClick={() => {
                  setEditingLesson({})
                  setActiveModuleId(module.id)
                }}
              >
                <Plus className="w-3 h-3 mr-2" /> Add Template Lesson
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={!!editingLesson}
        onOpenChange={(open) => !open && setEditingLesson(null)}
      >
        <DialogContent className="sm:max-w-[500px] bg-white border-gray-200 shadow-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Template Lesson</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={editingLesson?.title || ''}
                onChange={(e) =>
                  setEditingLesson((p: any) => ({
                    ...p,
                    title: e.target.value,
                  }))
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Duration</Label>
                <Input
                  value={editingLesson?.duration || ''}
                  onChange={(e) =>
                    setEditingLesson((p: any) => ({
                      ...p,
                      duration: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Video URL</Label>
              <Input
                value={editingLesson?.video_url || ''}
                onChange={(e) =>
                  setEditingLesson((p: any) => ({
                    ...p,
                    video_url: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label>PDF URL</Label>
              <Input
                value={editingLesson?.pdf_url || ''}
                onChange={(e) =>
                  setEditingLesson((p: any) => ({
                    ...p,
                    pdf_url: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Text Content</Label>
              <textarea
                value={editingLesson?.content || ''}
                onChange={(e) =>
                  setEditingLesson((p: any) => ({
                    ...p,
                    content: e.target.value,
                  }))
                }
                className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm"
              />
            </div>
            <Button
              onClick={saveLesson}
              className="w-full bg-[#111111] text-white hover:bg-[#333333]"
            >
              Save Template Lesson
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
