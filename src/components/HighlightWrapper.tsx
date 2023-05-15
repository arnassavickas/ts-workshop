import { useState } from 'react'

type Props = {
  children: JSX.Element
}

const HighlightWrapper = ({ children }: Props) => {
  const [isHighlighted, setIsHighlighted] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: isHighlighted ? 'yellow' : undefined
      }}
    >
      {children}
      <span onClick={() => setIsHighlighted(!isHighlighted)}>🟡</span>
    </div>
  )
}

export default HighlightWrapper


