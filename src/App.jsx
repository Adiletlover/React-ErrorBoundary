import { useEffect } from 'react';

function App() {

  useEffect(() => {
    throw new Error()
  }, [])

  return (
    <h1>hello world</h1>
  )
}

export default App;