import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { useOrganization } from '@/context/OrganizationContext'
import { Loader2, Users, ShieldAlert } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'

export function CourseAccessManager({ courseId }: { courseId: string }) {
  const { organization } = useOrganization()
  const [isPrivate, setIsPrivate] = useState(false)
  const [students, setStudents] = useState<any[]>([])
  const [enrolledIds, setEnrolledIds] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const fetchData = async () => {
    if (!organization) return

    const { data: course } = await supabase
      .from('courses')
      .select('is_private')
      .eq('id', courseId)
      .single()
    if (course) setIsPrivate(course.is_private || false)

    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, full_name, role')
      .eq('organization_id', organization.id)
      .order('full_name')

    const { data: enrollments } = await supabase
      .from('course_enrollments')
      .select('profile_id')
      .eq('course_id', courseId)

    if (profiles) setStudents(profiles.filter((p) => p.role !== 'admin'))
    if (enrollments)
      setEnrolledIds(new Set(enrollments.map((e) => e.profile_id)))

    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [courseId, organization])

  const togglePrivacy = async (checked: boolean) => {
    setIsPrivate(checked)
    await supabase
      .from('courses')
      .update({ is_private: checked })
      .eq('id', courseId)
  }

  const toggleEnrollment = async (profileId: string, enroll: boolean) => {
    setSaving(true)
    if (enroll) {
      const newSet = new Set(enrolledIds)
      newSet.add(profileId)
      setEnrolledIds(newSet)
      await supabase
        .from('course_enrollments')
        .insert({ course_id: courseId, profile_id: profileId })
    } else {
      const newSet = new Set(enrolledIds)
      newSet.delete(profileId)
      setEnrolledIds(newSet)
      await supabase
        .from('course_enrollments')
        .delete()
        .eq('course_id', courseId)
        .eq('profile_id', profileId)
    }
    setSaving(false)
  }

  const enrollAll = async () => {
    setSaving(true)
    const newEnrolls = students.map((s) => s.id)
    setEnrolledIds(new Set(newEnrolls))

    const inserts = newEnrolls.map((id) => ({
      course_id: courseId,
      profile_id: id,
    }))
    await supabase.from('course_enrollments').delete().eq('course_id', courseId)
    if (inserts.length > 0) {
      await supabase.from('course_enrollments').insert(inserts)
    }
    setSaving(false)
  }

  if (loading)
    return (
      <div className="py-10 flex justify-center">
        <Loader2 className="animate-spin text-gray-400" />
      </div>
    )

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="space-y-1">
          <h3 className="font-medium text-[#111111] flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-orange-500" />
            Private Course
          </h3>
          <p className="text-sm text-gray-500">
            If enabled, only enrolled students and admins will be able to see
            and access this course.
          </p>
        </div>
        <Switch checked={isPrivate} onCheckedChange={togglePrivacy} />
      </div>

      {isPrivate && (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <h4 className="font-medium text-sm uppercase tracking-wide text-gray-600 flex items-center gap-2">
              <Users className="w-4 h-4" /> Manage Student Access
            </h4>
            <Button
              size="sm"
              variant="outline"
              onClick={enrollAll}
              disabled={saving}
            >
              Select All
            </Button>
          </div>
          <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
            {students.length === 0 ? (
              <p className="p-6 text-center text-sm text-gray-500">
                No students found in this organization.
              </p>
            ) : (
              students.map((student) => {
                const isEnrolled = enrolledIds.has(student.id)
                return (
                  <label
                    key={student.id}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <Checkbox
                      checked={isEnrolled}
                      disabled={saving}
                      onCheckedChange={(c) => toggleEnrollment(student.id, !!c)}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#111111]">
                        {student.full_name || 'Unnamed Student'}
                      </p>
                    </div>
                    {isEnrolled && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                        Enrolled
                      </span>
                    )}
                  </label>
                )
              })
            )}
          </div>
        </div>
      )}
    </div>
  )
}
