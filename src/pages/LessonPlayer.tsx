import { useParams, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  ChevronLeft,
  CheckCircle,
  Circle,
  ListVideo,
  Loader2,
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { LessonSidebar } from '@/components/LessonSidebar'
import { LessonVideoPlayer } from '@/components/LessonVideoPlayer'
import { supabase } from '@/lib/supabase/client'
import { useAuth } from '@/hooks/use-auth'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface Course {
  id: string
  title: string
  description: string
  instructor_name: string
  instructor_avatar: string
  duration_text: string
  image_query: string
  image_color: string | null
  label: string
  rating: number
  reviews: number
}

interface Module {
  id: string
  title: string
  lessons: Lesson[]
}

interface Lesson {
  id: string
  title: string
  duration: string
  is_test: boolean
  is_locked: boolean
  order_index: number
  is_completed?: boolean
  video_url: string | null
  content: string | null
  pdf_url: string | null
}

export default function LessonPlayer() {
  const { courseId, lessonId } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [course, setCourse] = useState<Course | null>(null)
  const [modules, setModules] = useState<Module[]>([])
  const [loading, setLoading] = useState(true)
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null)
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null)
  const [progressMap, setProgressMap] = useState<Record<string, boolean>>({})
  const [sidebarOpen, setSidebarOpen] = useState(false) // For mobile

  useEffect(() => {
    async function fetchData() {
      if (!courseId || !user) return
      setLoading(true)

      const { data: courseData, error: courseError } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single()

      if (courseError) {
        toast.error('Failed to load course')
        setLoading(false)
        return
      }

      setCourse(courseData)

      const { data: modulesData, error: modulesError } = await supabase
        .from('modules')
        .select(
          `
          id,
          title,
          lessons (
            id, title, duration, is_test, is_locked, order_index, video_url, content, pdf_url
          )
        `,
        )
        .eq('course_id', courseId)
        .order('order_index')

      if (modulesError) {
        toast.error('Failed to load modules')
        setLoading(false)
        return
      }

      const processedModules = modulesData.map((m: any) => ({
        ...m,
        lessons: m.lessons.sort(
          (a: any, b: any) => a.order_index - b.order_index,
        ),
      }))

      setModules(processedModules)

      const { data: progressData } = await supabase
        .from('user_progress')
        .select('lesson_id, is_completed')
        .eq('profile_id', user.id)

      const pMap: Record<string, boolean> = {}
      progressData?.forEach((p) => {
        pMap[p.lesson_id] = p.is_completed
      })
      setProgressMap(pMap)

      setLoading(false)
    }

    fetchData()
  }, [courseId, user])

  useEffect(() => {
    if (lessonId && modules.length > 0) {
      for (const mod of modules) {
        const lesson = mod.lessons.find((l) => l.id === lessonId)
        if (lesson) {
          setActiveLesson(lesson)
          setActiveModuleId(mod.id)
          break
        }
      }
    } else if (modules.length > 0 && modules[0].lessons.length > 0) {
      setActiveModuleId(modules[0].id)
      setActiveLesson(modules[0].lessons[0])
    }
  }, [lessonId, modules])

  const handleToggleComplete = async () => {
    if (!activeLesson || !user) return

    const newStatus = !progressMap[activeLesson.id]
    setProgressMap((prev) => ({ ...prev, [activeLesson.id]: newStatus }))

    const { error } = await supabase.from('user_progress').upsert(
      {
        profile_id: user.id,
        lesson_id: activeLesson.id,
        is_completed: newStatus,
        last_watched_at: new Date().toISOString(),
      },
      { onConflict: 'profile_id,lesson_id' },
    )

    if (error) {
      toast.error('Failed to save progress')
      setProgressMap((prev) => ({ ...prev, [activeLesson.id]: !newStatus }))
    } else {
      if (newStatus) toast.success('Lesson marked as completed')
    }
  }

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 z-50">
        <Loader2 className="w-10 h-10 animate-spin text-red-600" />
      </div>
    )
  }

  if (!course)
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        Course not found
      </div>
    )

  const modulesWithProgress = modules.map((m) => ({
    ...m,
    lessons: m.lessons.map((l) => ({
      ...l,
      is_completed: progressMap[l.id],
    })),
  }))

  const completedCount = Object.values(progressMap).filter(Boolean).length
  const totalCount = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const currentModuleTitle = modules.find((m) => m.id === activeModuleId)?.title

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-zinc-950 text-white font-sans overflow-hidden">
      {/* Top Navigation Bar */}
      <header className="h-16 flex-shrink-0 flex items-center justify-between px-4 lg:px-8 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 z-10 relative">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            className="text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 font-medium tracking-wider uppercase hidden sm:block">
              {course.title}
            </span>
            <h1 className="text-sm sm:text-base font-semibold text-zinc-100 line-clamp-1">
              {currentModuleTitle ? `${currentModuleTitle} ` : ''}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 text-sm text-zinc-400">
            <span className="font-medium text-zinc-300">
              {Math.round((completedCount / totalCount) * 100 || 0)}% completed
            </span>
          </div>

          {/* Mobile Sidebar Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-zinc-400 hover:text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <ListVideo className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left/Main Content: Video Player */}
        <main className="flex-1 flex flex-col overflow-y-auto dark-scrollbar scroll-smooth">
          <div className="w-full max-w-[1600px] mx-auto flex flex-col min-h-full">
            <LessonVideoPlayer
              courseDescription={course.description}
              videoUrl={activeLesson?.video_url}
              pdfUrl={activeLesson?.pdf_url}
              content={activeLesson?.content}
              title={activeLesson?.title}
              isCompleted={progressMap[activeLesson?.id || '']}
              onToggleComplete={handleToggleComplete}
            />
          </div>
        </main>

        {/* Right Sidebar: Modules & Lessons */}
        <aside
          className={cn(
            'absolute inset-y-0 right-0 w-full sm:w-[400px] bg-zinc-950 border-l border-zinc-800/50 transform transition-transform duration-300 ease-in-out z-20 flex flex-col',
            'lg:relative lg:transform-none lg:w-[400px] xl:w-[450px]',
            sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
          )}
        >
          <LessonSidebar
            courseTitle={course.title}
            modules={modulesWithProgress}
            activeModuleId={activeModuleId}
            activeLessonId={lessonId || null}
            completedLessons={completedCount}
            totalLessons={totalCount}
            courseId={course.id}
            onClose={() => setSidebarOpen(false)}
          />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  )
}
