import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function Button ({ children }: Props) {
  return (
    <button 
      style={{
        background: 'rgb(236,87,133)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '8px'
      }}>
      {children}
    </button>
  )
}

