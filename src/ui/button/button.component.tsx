import React from 'react'
import { memo } from 'react'
import { IButtonProps } from './button.interfaces'

export const Button = memo(
  function Button({ onClick, type = 'button' }: IButtonProps) {
    return (
      <button type={type} onClick={onClick}>
        get random user
      </button>
    )
})
