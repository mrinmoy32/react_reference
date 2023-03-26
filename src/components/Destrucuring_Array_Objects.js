import React from 'react'

//We can use destructuring to grab properties from props object be their key
function Destrucuring_Array_Objects(props) {

    // const cities = ["Tokyo", "Kolkata", "Bend"];
    const [firstCity, second, thirdCity] = ["Tokyo", "Kolkata", "Bend"]; //we are giving name to each
    // console.log(cities[0]);
    console.log(firstCity);
    console.log(second);
    console.log(thirdCity);
    //This is called Array destructuring

  return (
    <div>Destrucuring_Array_Objects in {props.library}</div>
  )
}

export default Destrucuring_Array_Objects;