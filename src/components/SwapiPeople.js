import React, {useEffect , useState} from 'react'



function SwapiPeople() {

  useEffect( () => {
    
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json)
      .then(data => {
        const fetchData = data.results.map(people => {
          
          return {

            
          }
        })
      })
    });

  return (
    <div>SwapiPeople</div>
  )
}

export default SwapiPeople