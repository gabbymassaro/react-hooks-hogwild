import React from "react";

function Form() {
  return (
    <div class="container">
     <form>
        <input type="text" id="name" name="pigname" placeholder="Pig's name..."></input>
        <input type="text" id="specialty" name="specialty" placeholder="Specialty.."></input>
        <input type="text" id="greased" name="greased" placeholder="Greased.."></input>
        <input type="text" id="weight" name="weight" placeholder="Weight.."></input>
        <input type="text" id="highestmedal" name="highestmedal" placeholder="Highest Medal Achieved.."></input>
        <input type="text" id="image" name="imge" placeholder="Image.."></input>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Form