'use client'

import { AuthProvider } from '@/hooks/auth'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            <AuthProvider>{children}</AuthProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
