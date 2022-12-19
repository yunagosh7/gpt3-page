import React from 'react'
import './possibility.css'
import image from '../../assets/possibility.png'

export const Possibility = () => {
  return (
    <div className='possibility section-padding' id='possibility'>
      <div className="possibility-image">
<img src={image} alt="possibility" />
      </div>
      <div className="possibility-container">
        <a href="#getstarted">Request Early Access to Get Started</a>
        <h2 className='gradient-text'>The possibilities are beyond your imagination</h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
      </div>
    </div>
  )
}
