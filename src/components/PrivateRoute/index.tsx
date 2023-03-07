'use client'

/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

interface PrivateRouteProps {
  children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/auth/signin')
    }
  }, [user])

  return <>{user && children}</>
}
