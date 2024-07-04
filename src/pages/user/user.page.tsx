import React from 'react'
import { memo } from 'react'
import { Button } from '../../ui'
import { UserInfo } from '../../fragments'
import { useUserInfo } from './hooks'

export const UserPage = memo(function UserPage() {
  const { user, handleGetUserClick, loading } = useUserInfo()

  return (
    <main>
      <header>Get a random user</header>
      <Button onClick={handleGetUserClick} />
      <UserInfo user={user} loading={loading} />
    </main>
  )
})
