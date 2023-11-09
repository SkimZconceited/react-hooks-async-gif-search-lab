import React, { useState } from "react";

function GifSearch({ onSubmit }) {
  const api_key = "Lj2DZuhkGH7sjtwexSvVPD2HBJsCz1Xf";
  const [searchTerm, setSearchTerm] = useState("");

  function handleInput(event) {
    // console.log(event.target.value)
    return setSearchTerm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${api_key}&rating=g`
    )
      .then((res) => res.json())
      .then((gifs) => onSubmit(gifs.data));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="position-absolute top-0 start-100" id="form-sub">
        <input
          type="text"
          placeholder="Enter GIF you want"
          onChange={handleInput}
        />
        <button type="submit" className="btn btn-success" >Find Gif</button>
        {/* <Button>Find Gif</Button> */}
      </form>
    </div>
  );
}

export default GifSearch;
