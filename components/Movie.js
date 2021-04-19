import React from "react";

function MovieList(props) {
  return (
    <div className='flex-container'>
      <div className='flex-item'>
        <h3>
          <span id='movie'>Movie: </span> {props.name}
        </h3>
        <p>
          <span id='price'>Price: </span>
          {props.price}
        </p>
      </div>
    </div>
  );
}

export default MovieList;
