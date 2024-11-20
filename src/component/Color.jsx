 import React from "react"

import { useState } from "react"

function Color(){
    let [chColor,setChColor] = useState("blue");
    console.log(chColor);

    const addYellow = () => {
         setChColor("yellow")
    }

    const addPink = () => {
         setChColor("pink");
    }
    const addPurpal = () => {
         setChColor("purple");
    }
    const addGreen = () => {
         setChColor("green");
    }
    const addRed = () => {
         setChColor("red");
    }

    return (
      <div className={`bg-${chColor}-500  h-screen`}>
        {/* <div className ="pl-96 pt-96"> */}
        <div className="pl-[520px] pt-[620px]">
          <button
            onClick={addYellow}
            //   className="bg-yellow-500 px-4 py-2 text-center text-md rounded-md"
            className="bg-yellow-500 px-4 py-2 text-center text-md rounded-md border"
          >
            yellow
          </button>
          <button
            onClick={addPink}
            className="bg-pink-500 px-4 py-2 text-center text-md rounded-md border "
          >
            {" "}
            pink
          </button>
          <button
            onClick={addGreen}
            className="bg-green-500 px-4 py-2 text-center text-md rounded-md border"
          >
            green
          </button>
          <button
            onClick={addPurpal}
            className="bg-purple-500 px-4 py-2 text-center text-md rounded-md border"
          >
            purple
          </button>
          <button
            onClick={addRed}
            className="bg-red-500 px-6 py-2 text-center text-md rounded-md border "
          >
            red
          </button>
        </div>
      </div>
    );
}

export default Color;