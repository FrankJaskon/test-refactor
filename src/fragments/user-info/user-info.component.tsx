import React from 'react'
import { memo } from 'react'
import { IUserInfoProps } from './user-info.interfaces'

export const UserInfo = memo(
  function UserInfo({ user, loading }: IUserInfoProps) {
    if (!user) return null
    if (loading) return <div>Loading...</div>

    return (
      <table>
        <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{user.name}</td>
          <td>{user.phone}</td>
        </tr>
        </tbody>
      </table>
    )
}, (prevProps, nextProps) => prevProps.loading === nextProps.loading)