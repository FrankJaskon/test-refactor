import { MouseEvent } from 'react'
import { User } from '../../../globals'

type UseUserInfoReturnedType = {
  user?: User
  handleGetUserClick: (event: MouseEvent<HTMLButtonElement>) => void
  loading: boolean
}

export type UseUserInfoProps = () => UseUserInfoReturnedType