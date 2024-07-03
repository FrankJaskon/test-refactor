import React, { memo } from 'react'
import { Button } from '../../ui'
import { UserInfo } from '../../fragments'
import { UseUserInfo } from './hooks'

export const UserPage = memo(function UserPage() {
  const { user, handleGetUserClick, loading } = UseUserInfo()

  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={handleGetUserClick} />
      <UserInfo user={user} loading={loading} />
    </div>
  )
})
