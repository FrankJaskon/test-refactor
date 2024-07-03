import { MouseEvent, useCallback, useState } from 'react'
import { User } from '../../../globals'
import { receiveRandomUser } from '../../../fragments'
import { UseUserInfo } from './use-user-info.interfaces'
import { useThrottle } from '../../../shared'

export const useUserInfo: UseUserInfo = () => {
  const [item, setItem] = useState<User | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const getUser = useCallback(async () => {
    setLoading(true)
    try {
      const user = await receiveRandomUser()
      setItem(user)
    } catch (e) {
      console.error('Error occurred while fetching user: ', e)
    } finally {
      setLoading(false)
    }
  }, [])

  const throttledReceiveRandomUser = useThrottle(getUser, 2000)

  const handleGetUserClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation()
      throttledReceiveRandomUser()
  }, [throttledReceiveRandomUser])

  return {
    user: item,
    handleGetUserClick,
    loading,
  }
}