import { Button, Scrollbar } from '@kool-kool/kool-ui'
import React, { useState } from 'react'

let key = 5

const App = () => {
  const [contents, setContents] = useState([1, 2, 3, 4])
  const add = () => {
    setContents([...contents, key++])
  }
  const remove = () => {
    setContents(contents.filter((_, index) => index !== contents.length - 1))
  }
  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button onClick={add}>Add Item</Button>
        <Button onClick={remove}>Remove Item</Button>
      </div>
      <Scrollbar maxHeight={400}>
        {contents.map((item) => (
          <div
            key={item}
            style={{
              display: 'flex',
              borderRadius: '0.25rem',
              margin: '1rem',
              padding: '1rem',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'var(--koo-blue-1)',
              color: 'var(--koo-blue-6)'
            }}
          >
            {item}
          </div>
        ))}
      </Scrollbar>
    </div>
  )
}

export default App
