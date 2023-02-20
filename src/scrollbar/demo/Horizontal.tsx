import { Scrollbar } from '@kool-kool/kool-ui'
import React from 'react'

const contents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const App = () => {
  return (
    <div>
      <Scrollbar>
        <div style={{ display: 'flex' }}>
          {contents.map((item) => (
            <div
              key={item}
              style={{
                flexShrink: 0,
                width: 200,
                height: 100,
                margin: '1rem',
                lineHeight: '100px',
                borderRadius: '0.25rem',
                backgroundColor: 'var(--koo-blue-1)',
                color: 'var(--koo-blue-6)',
                textAlign: 'center'
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </Scrollbar>
    </div>
  )
}

export default App
