import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { createContext, useContext, useState, useEffect } from 'react'
import { AuthContextProps, AuthProviderProps, User } from './types'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'

const AuthContext = createContext({} as AuthContextProps)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  const provider = new GoogleAuthProvider()

  const router = useRouter()

  function loginWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        setUser(user)

        router.push('/dashboard')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
