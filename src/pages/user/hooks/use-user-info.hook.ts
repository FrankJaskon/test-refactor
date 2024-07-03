import { MouseEvent, useCallback, useState } from 'react'
import { User } from '../../../globals'
import { receiveRandomUser } from '../../../fragments'
import { UseUserInfoProps } from './use-user-info.interfaces'

export const UseUserInfo: UseUserInfoProps = () => {
  const [item, setItem] = useState<User | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const handleGetUserClick = useCallback(async (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation()
    try {
      setLoading(true)
      const user = await receiveRandomUser()
      setItem(user)
    } catch (e) {
      console.error('Error occurred while fetching user: ', e)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    user: item,
    handleGetUserClick,
    loading,
  }
}