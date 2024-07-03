import { MouseEvent } from 'react'

export interface IButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset';
}
