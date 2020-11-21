import React from 'react'

import Card from 'animated-3d-card'
import 'animated-3d-card/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        marginLeft: '500px',
        marginTop: '500px'
      }}
    >
      <Card
        layers={[
          'https://images.unsplash.com/photo-1600804145194-c89e4d43f14f?ixlib=rb-1.2.1&w=1000&q=80',
          'https://static.wixstatic.com/media/2cd43b_474c5a222ffb4983948e9918b8acdc8e~mv2.png/v1/fill/w_375,h_236,fp_0.50_0.50/2cd43b_474c5a222ffb4983948e9918b8acdc8e~mv2.png',
          'https://pngimg.com/uploads/triangle/triangle_PNG30.png'
        ]}
      />
    </div>
  )
}

export default App
