import type { ReactNode } from 'react'

type Props = {
  label: ReactNode
}

export function Button ({ label }: Props) {
  return (
    <button 
      style={{
        
      }}>
      {label}
    </button>
  )
}

