import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { VimeoPlayer } from '@/components/VimeoPlayer'
import { Button } from '@/components/ui/button'
import { CheckCircle, Circle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LessonVideoPlayerProps {
  courseDescription?: string
  videoUrl?: string | null
  pdfUrl?: string | null
  content?: string | null
  title?: string
  isCompleted?: boolean
  onToggleComplete?: () => void
}

export function LessonVideoPlayer({
  courseDescription,
  videoUrl,
  pdfUrl,
  content,
  title,
  isCompleted,
  onToggleComplete,
}: LessonVideoPlayerProps) {
  return (
    <div className="flex-1 flex flex-col w-full pb-20">
      {/* Video Section - Full Width inside container */}
      <div className="w-full bg-black shrink-0 relative shadow-2xl shadow-black/50">
        {videoUrl ? (
          <div className="w-full aspect-video max-h-[70vh] flex items-center justify-center bg-black mx-auto overflow-hidden">
            <VimeoPlayer
              videoUrl={videoUrl}
              title={title}
              className="w-full h-full"
            />
          </div>
        ) : !pdfUrl && !content ? (
          <div className="w-full aspect-video flex flex-col items-center justify-center bg-zinc-900 border-b border-zinc-800 text-zinc-500">
            <span className="text-lg font-medium mb-2">
              No Content Available
            </span>
            <span className="text-sm">
              This lesson doesn't have a video yet.
            </span>
          </div>
        ) : null}
      </div>

      {/* Content Section Below Video */}
      <div className="w-full max-w-[1200px] mx-auto px-6 py-8 md:px-10 md:py-10">
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
              {title || 'Untitled Lesson'}
            </h1>
          </div>

          {onToggleComplete && (
            <div className="shrink-0">
              <Button
                onClick={onToggleComplete}
                variant={isCompleted ? 'secondary' : 'default'}
                size="lg"
                className={cn(
                  'w-full md:w-auto h-12 px-6 rounded-full font-semibold transition-all shadow-lg',
                  isCompleted
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white',
                )}
              >
                {isCompleted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Completed
                  </>
                ) : (
                  <>
                    <Circle className="w-5 h-5 mr-2" />
                    Mark as Complete
                  </>
                )}
              </Button>
            </div>
          )}
        </div>

        {/* PDF Viewer */}
        {pdfUrl && (
          <div className="mb-12 w-full flex flex-col">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              Attached Resource
            </h3>
            <div className="w-full aspect-[16/9] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-xl">
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                title="PDF Viewer"
              />
            </div>
          </div>
        )}

        {/* Rich Text Content */}
        {content && (
          <div className="mb-12 flex flex-col">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
              Lesson Notes
            </h3>
            <div className="prose prose-invert prose-zinc max-w-none bg-zinc-900/50 p-6 md:p-8 rounded-xl border border-zinc-800/50">
              {content}
            </div>
          </div>
        )}

        {/* Tabs for Metadata */}
        <div className="mt-8 border-t border-zinc-800/50 pt-8">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="bg-transparent border-b border-zinc-800 w-full justify-start h-auto p-0 rounded-none mb-8">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-1 mr-8 text-zinc-400 hover:text-zinc-200 data-[state=active]:text-white font-semibold text-base transition-colors"
              >
                About this Course
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-1 text-zinc-400 hover:text-zinc-200 data-[state=active]:text-white font-semibold text-base transition-colors"
              >
                Downloads
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-0 outline-none">
              <div className="prose prose-invert prose-zinc max-w-none text-zinc-300 leading-relaxed">
                <p className="text-lg leading-relaxed">
                  {courseDescription ||
                    'No description provided for this course.'}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-0 outline-none">
              <div className="text-zinc-400 bg-zinc-900/30 border border-zinc-800 rounded-xl p-8 text-center flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
                  <span className="text-xl">📁</span>
                </div>
                <h4 className="text-zinc-200 font-medium mb-1">
                  No additional downloads
                </h4>
                <p className="text-sm">
                  Any downloadable resources for this specific lesson will
                  appear here.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
