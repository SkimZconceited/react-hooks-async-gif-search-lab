import React from 'react'

function GifList({ gifUrl, gifTitle, gifID}) {

  console.log(gifUrl, '<= url', gifTitle, '<= title', gifID, '<= id')
  return (
    <div>
      <div key={gifID}>
        <img src={gifUrl} alt={gifTitle} />
      </div>
    </div>
  )
}

export default GifList