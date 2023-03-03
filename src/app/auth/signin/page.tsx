'use client'

import { Form } from '@/components/Form'
import { useAuth } from '@/hooks/auth'
import { Box, Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SignIn() {
  const { user, loginWithGoogle } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
      p="4"
      bg="#121214"
    >
      <Box p="4" boxShadow="md" bg="white" borderRadius="8">
        <Image src="../logo.png" alt="Logo" maxW="150px" mx="auto" />
        <Form loginWithGoogle={loginWithGoogle} />
      </Box>
    </Flex>
  )
}
