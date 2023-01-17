import React, { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    console.log(document.title)

    console.log(document.getElementById('root'))
  }, [])

  return (
    <div id="root">
      <h2>hello world</h2>
    </div>
  )
}
