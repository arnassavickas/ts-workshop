import { useState } from 'react'

const HighlightWrapper = ({ children }) => {
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


