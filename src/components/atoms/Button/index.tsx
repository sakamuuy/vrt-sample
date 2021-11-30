import type { ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

export function Button ({ children }: Props) {
  return (
    <button 
      style={{
        background: 'rgb(236,87,133)',
        color: 'white',
        padding: '24px 16px',
        borderRadius: '8px',
        appearance: 'none',
        border: 'none'
      }}>
      {children}
    </button>
  )
}

