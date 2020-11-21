import React from 'react'

import Card from 'animated-3d-card'
import 'animated-3d-card/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        marginLeft: '30px',
        marginTop: '30px'
      }}
    >
      <Card onClick={() => console.log('Hola')}>
        <div
          style={{ height: '900px', width: '400px', backgroundColor: 'red' }}
        />
        {/* <h1>Hola</h1>
        <h1>Hola</h1> */}
      </Card>
    </div>
  )
}

export default App
