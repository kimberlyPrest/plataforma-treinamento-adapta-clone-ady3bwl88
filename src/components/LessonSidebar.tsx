import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Play, Lock, CheckCircle2, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from './ui/button'

interface Lesson {
  id: string
  title: string
  duration: string
  is_test: boolean
  is_locked: boolean
  is_completed?: boolean
}

interface Module {
  id: string
  title: string
  lessons: Lesson[]
}

interface LessonSidebarProps {
  courseTitle: string
  modules: Module[]
  activeModuleId: string | null
  activeLessonId: string | null
  completedLessons: number
  totalLessons: number
  courseId: string
  onClose?: () => void
}

export function LessonSidebar({
  courseTitle,
  modules,
  activeModuleId,
  activeLessonId,
  completedLessons,
  totalLessons,
  courseId,
  onClose,
}: LessonSidebarProps) {
  const progressPercentage =
    Math.round((completedLessons / totalLessons) * 100) || 0

  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 text-zinc-100">
      {/* Mobile Header with Close Button */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-zinc-800/50">
        <span className="font-semibold text-sm">Course Content</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-zinc-400 hover:text-white hover:bg-zinc-800"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Progress Header */}
      <div className="p-6 border-b border-zinc-800/50 shrink-0">
        <h3 className="font-bold text-white text-lg line-clamp-2 mb-4">
          {courseTitle}
        </h3>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-zinc-400">
              {completedLessons} of {totalLessons} lessons completed
            </span>
            <span className="text-red-500">{progressPercentage}%</span>
          </div>
          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Modules List */}
      <ScrollArea className="flex-1 dark-scrollbar">
        <div className="p-4">
          <Accordion
            type="multiple"
            defaultValue={activeModuleId ? [activeModuleId] : []}
            className="w-full space-y-3"
          >
            {modules.map((module, mIndex) => (
              <AccordionItem
                key={module.id}
                value={module.id}
                className="border border-zinc-800/50 rounded-lg bg-zinc-900/30 overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 hover:bg-zinc-800/30 hover:no-underline group transition-colors">
                  <div className="flex flex-col items-start gap-1 text-left">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500">
                      Module {mIndex + 1}
                    </span>
                    <span
                      className={cn(
                        'font-semibold text-sm',
                        activeModuleId === module.id
                          ? 'text-white'
                          : 'text-zinc-300 group-hover:text-white',
                      )}
                    >
                      {module.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-0">
                  <div className="flex flex-col bg-zinc-900/50 divide-y divide-zinc-800/30">
                    {module.lessons.map((lesson, lIndex) => {
                      const isActive = lesson.id === activeLessonId
                      return (
                        <Link
                          key={lesson.id}
                          to={`/course/${courseId}/lesson/${lesson.id}`}
                          onClick={onClose}
                          className={cn(
                            'flex items-center gap-4 px-5 py-3 transition-colors relative group',
                            isActive
                              ? 'bg-zinc-800/80'
                              : 'hover:bg-zinc-800/40',
                          )}
                        >
                          {/* Active Indicator */}
                          {isActive && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />
                          )}

                          {/* Index / Status Icon */}
                          <div className="w-6 flex justify-center shrink-0">
                            {lesson.is_completed ? (
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                            ) : isActive ? (
                              <Play className="w-4 h-4 fill-red-600 text-red-600" />
                            ) : (
                              <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-400">
                                {lIndex + 1}
                              </span>
                            )}
                          </div>

                          {/* Lesson Info */}
                          <div className="flex-1 min-w-0 flex flex-col">
                            <h4
                              className={cn(
                                'text-sm font-medium truncate',
                                isActive
                                  ? 'text-white'
                                  : 'text-zinc-400 group-hover:text-zinc-200',
                              )}
                            >
                              {lesson.title}
                            </h4>
                            <span className="text-xs text-zinc-600 mt-0.5 flex items-center gap-1.5">
                              {lesson.is_test ? (
                                <span className="px-1.5 py-[1px] rounded bg-red-600/20 text-red-400 text-[10px] font-bold uppercase tracking-wider">
                                  Quiz
                                </span>
                              ) : null}
                              {lesson.duration || '0:00'}
                            </span>
                          </div>

                          {/* Lock Icon */}
                          {lesson.is_locked && (
                            <div className="shrink-0">
                              <Lock className="w-3.5 h-3.5 text-zinc-600" />
                            </div>
                          )}
                        </Link>
                      )
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  )
}
