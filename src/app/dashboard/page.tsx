'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

interface Profile {
  id: string
  full_name: string
  city: string
}

export default function Dashboard() {
  const router = useRouter()
  const [profile, setProfile] = useState<Profile | null>(null)
  const [feed, setFeed] = useState<Profile[]>([])

  useEffect(() => {
    const load = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        router.push('/auth/login')
        return
      }

      const { data: profileData } = await supabase
        .from('profiles')
        .select('id, full_name, city')
        .eq('id', user.id)
        .single()

      if (profileData) setProfile(profileData as Profile)

      const { data: feedData } = await supabase
        .from('profiles')
        .select('id, full_name, city')
        .neq('id', user.id)
        .limit(10)

      if (feedData) setFeed(feedData as Profile[])
    }

    load()
  }, [router])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {profile && (
        <div className="mb-6">
          <h2 className="text-xl">Welcome, {profile.full_name}</h2>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Feed</h3>
          <ul className="space-y-2">
            {feed.map((user) => (
              <li key={user.id} className="p-3 border rounded">
                {user.full_name} {user.city ? `- ${user.city}` : ''}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Matches</h3>
          <p className="text-gray-600">Matching feature coming soon.</p>
        </div>
      </div>
    </div>
  )
}
