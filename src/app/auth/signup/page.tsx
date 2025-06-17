'use client';

import React from 'react';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { FaEnvelope, FaLock, FaUser, FaBirthdayCake, FaMapMarkerAlt, FaFlag, FaCamera } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Page() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    bio: '',
    interests: [] as string[]
  })
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      })

      if (authError) throw authError

      if (authData.user) {
        // Wait for session to be persisted
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Create user profile
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([{
            id: authData.user.id,
            auth_id: authData.user.id,
            email: formData.email,
            full_name: formData.fullName,
            gender: formData.gender,
            date_of_birth: new Date(formData.dateOfBirth),
            nationality: formData.nationality,
            address: formData.address,
            city: formData.city,
            country: formData.country,
            postal_code: formData.postalCode,
            bio: formData.bio,
            interests: formData.interests || [],
            is_active: true,
            is_verified: false
          }])

        if (profileError) throw profileError

        // Update auth user metadata
        const { error: updateError } = await supabase.auth.updateUser({
          data: {
            profile: {
              ...formData,
              date_of_birth: new Date(formData.dateOfBirth).toISOString(),
              interests: formData.interests || []
            }
          }
        })

        if (updateError) throw updateError
      }

      router.push('/auth/login')
    } catch (error: any) {
      setError(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl p-8 sm:p-10"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Create Your Account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Join LoveConnect Pro and find your perfect match
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Email address"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    id="confirm-password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              {/* Full Name */}
              <div>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    id="full-name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div>
                <div className="relative">
                  <FaBirthdayCake className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="date"
                    id="date-of-birth"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Nationality */}
              <div>
                <div className="relative">
                  <FaFlag className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    id="nationality"
                    value={formData.nationality}
                    onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nationality"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Street Address"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="City"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Country"
                  />
                </div>
              </div>

              {/* Postal Code */}
              <div>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    id="postal-code"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Postal Code"
                  />
                </div>
              </div>

              {/* Bio */}
              <div>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    required
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about yourself..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="checkbox"
                    id="sports"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({ ...formData, interests: [...formData.interests, 'sports'] })
                      } else {
                        setFormData({ ...formData, interests: formData.interests.filter(i => i !== 'sports') })
                      }
                    }}
                    className="mr-2"
                  />
                  <label htmlFor="sports" className="text-sm">Sports</label>

                  <input
                    type="checkbox"
                    id="music"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({ ...formData, interests: [...formData.interests, 'music'] })
                      } else {
                        setFormData({ ...formData, interests: formData.interests.filter(i => i !== 'music') })
                      }
                    }}
                    className="ml-4 mr-2"
                  />
                  <label htmlFor="music" className="text-sm">Music</label>

                  <input
                    type="checkbox"
                    id="travel"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({ ...formData, interests: [...formData.interests, 'travel'] })
                      } else {
                        setFormData({ ...formData, interests: formData.interests.filter(i => i !== 'travel') })
                      }
                    }}
                    className="ml-4 mr-2"
                  />
                  <label htmlFor="travel" className="text-sm">Travel</label>
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
              )}

              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign up
                </motion.button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
