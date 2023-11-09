import React from 'react'

function GifList({ gifUrl, gifTitle, gifID}) {

  console.log(gifUrl, '<= url', gifTitle, '<= title', gifID, '<= id')
  return <li key={gifID}><img src={gifUrl} alt={gifTitle} /></li>
}

export default GifList