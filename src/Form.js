import React from 'react';

export default function Form () {

  return (
    <>
    <form>
      <h2>form</h2>
      <input
        type="text"
        placeholder="searchsplosion"
      ></input>
      <button
        type="submit"
        onClick={()=> setPosters([])}
      >Search</button>
      <button>Reset</button>
    </form>
    </>
  )
}


