import React from 'react'
import { useMoralisQuery } from 'react-moralis';

export default function DbCall() {

    const { fetch } = useMoralisQuery(
        "Monster",
        (query) => query.equalTo("ownerName","Aegon"),
        [],
        {autofetch: false}
      );
    
        const basicQuery = async () => {
          const results = await fetch();
          alert("Successfully retrieved " + results.length + " monsters.");
          // Do something with the returned Moralis.Object values
          for (let i = 0; i < results.length; i++) {
            const object = results[i];
            alert(object.id + " - " + object.get("ownerName"));
          }
        };


  return (
    <>
    <button onClick={basicQuery}>Query Object</button>
    </>
  )
}

