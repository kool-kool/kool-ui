import { Scrollbar } from '@kool-kool/kool-ui'
import React from 'react'

const contents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const App = () => {
  return (
    <div>
      <Scrollbar height={400}>
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
