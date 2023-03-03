'use client'

import { useAuth } from '@/hooks/auth'
import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Page() {
  const { user } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (!user?.uid) {
      router.push('/auth/signin')
    }
  }, [router, user])
  return (
    <Flex>
      <Text>Hello world</Text>
    </Flex>
  )
}
