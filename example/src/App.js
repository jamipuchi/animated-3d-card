import React from 'react'

import Card from 'animated-3d-card'
import 'animated-3d-card/dist/index.css'

const CreditCard = () => {
  return (
    <Card
      style={{
        background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
        width: '450px',
        height: '300px',
        cursor: 'pointer'
      }}
      onClick={() => console.log('Hola')}
    >
      <div>
        <img
          style={{
            position: 'absolute',
            left: '25px',
            top: '25px',
            height: '50px'
          }}
          src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png'
          class='card-item__chip'
          alt='credit card chip'
        ></img>
        <img
          style={{
            position: 'absolute',
            right: '25px',
            top: '25px',
            height: '50px'
          }}
          src='https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png'
          class='card-item__chip'
          alt='credit card chip'
        ></img>
      </div>
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            fontSize: '30px',
            fontFamily: 'Fira Code',
            color: 'white'
          }}
          onClick={console.log('prova')}
        >
          <label>1234</label>
          <label style={{ marginLeft: '30px' }}>1234</label>
          <label style={{ marginLeft: '30px' }}>1234</label>
          <label style={{ marginLeft: '30px' }}>1234</label>
        </div>
      </div>
      <div>
        <label
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '60px',
            left: '25px',
            opacity: 0.5
          }}
        >
          Card holder
        </label>
        <label
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '60px',
            right: '25px',
            opacity: 0.5
          }}
        >
          Expires
        </label>
      </div>

      <div>
        <label
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '25px',
            left: '25px',
            opacity: 1,
            fontSize: '25px'
          }}
        >
          Paul Doe
        </label>
        <label
          style={{
            color: 'white',
            position: 'absolute',
            bottom: '25px',
            right: '25px',
            opacity: 1,
            fontSize: '25px'
          }}
        >
          10/22
        </label>
      </div>
    
    </Card>
  )
}

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CreditCard />
    </div>
  )
}

export default App
