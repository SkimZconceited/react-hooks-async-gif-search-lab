import React, { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  function handleResults(results) {
    // console.log(results, "where I want it");
    setGifs(results);
  }

  // console.log(gifs, "added successful");
  return (
    <div>
      <h2>GifListContainer</h2>
      <GifSearch onSubmit={handleResults} />

      {gifs.map((gif, index) => (
        <ul key={index}>
          <GifList
            gifUrl={gif.images.original.url}
            gifTitle={gif.title}
            gifID={gif.id}
          />
        </ul>
      ))}
    </div>
  );
}

export default GifListContainer;
