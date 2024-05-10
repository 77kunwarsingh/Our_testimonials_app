import React from 'react'
import reviews from './Data'
import Testimonials from './components/Testimonials'
function App() {
  return (
    <div className='Main'>
      <div className='content'>
      <h1 className='heading'>
        Our Testimonials
      </h1>
      <div className='line'>

      </div>
      <Testimonials reviews={reviews}></Testimonials>
      </div>
    </div>
  )
}

export default App;
