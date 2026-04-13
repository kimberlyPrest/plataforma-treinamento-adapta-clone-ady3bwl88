import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { VimeoPlayer } from '@/components/VimeoPlayer'

interface LessonVideoPlayerProps {
  courseDescription?: string
  videoUrl?: string | null
  pdfUrl?: string | null
  content?: string | null
  title?: string
}

export function LessonVideoPlayer({
  courseDescription,
  videoUrl,
  pdfUrl,
  content,
  title,
}: LessonVideoPlayerProps) {
  return (
    <div className="p-6 md:p-8 flex-1 flex flex-col">
      {videoUrl && (
        <VimeoPlayer videoUrl={videoUrl} title={title} className="mb-8" />
      )}

      {pdfUrl && (
        <div className="mb-8 w-full aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <iframe src={pdfUrl} className="w-full h-full" title="PDF Viewer" />
        </div>
      )}

      {content && (
        <div className="mb-8 prose prose-sm max-w-none text-gray-800 bg-gray-50 p-6 rounded-lg border border-gray-100 whitespace-pre-wrap shadow-sm">
          {content}
        </div>
      )}

      {!videoUrl && !pdfUrl && !content && (
        <div className="mb-8 flex items-center justify-center p-12 bg-gray-50 border border-gray-200 rounded-lg text-gray-400 text-sm">
          No content has been added to this lesson yet.
        </div>
      )}

      {/* Tabs */}
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="bg-transparent border-b border-gray-100 w-full justify-start h-auto p-0 rounded-none mb-6">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-gray-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-0 mr-8 text-gray-500 data-[state=active]:text-gray-900 font-semibold text-sm"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-gray-900 data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3 px-0 text-gray-500 data-[state=active]:text-gray-900 font-semibold text-sm"
          >
            Rating and review
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-0">
          <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
            <p className="mb-4">{courseDescription}</p>
            <p>
              This immersive course is designed for aspiring developers,
              creative minds, and tech enthusiasts ready to unlock the full
              potential of the platform. You will learn to navigate the
              interface, create scalable components, and build a complete system
              from scratch.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-0">
          <div className="text-gray-500 text-sm">
            Reviews section content would appear here.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
