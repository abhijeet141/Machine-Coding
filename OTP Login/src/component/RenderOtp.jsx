import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function RenderOtp({ lengthOTP = 6 }) {
  const ref = useRef([])
  const navigate = useNavigate()
  const [inputField, setInputField] = useState(new Array(lengthOTP).fill(""));
  console.log(ref);
  const handleKeyDown = (event,index) => {
    const fields = [...inputField]
    if(event.key === "ArrowLeft"){
      if(index>0){
        ref.current[index - 1].focus()
      }
    }
    if(event.key === "ArrowRight"){
      if(index + 1<inputField.length){
        ref.current[index + 1].focus()
      }
    }
    if(event.key === "Backspace"){
      fields[index] = ""
      setInputField(fields)
      if(index > 0)
      ref.current[index - 1].focus()
      return;
    }
    if(isNaN(event.key)){
      return;
    }
    fields[index] = event.key;
    if(index + 1<inputField.length){
      ref.current[index + 1].focus()
    }
    setInputField(fields)
  }

  const handleClick = () => {
    for(let i = 0;i<inputField.length;i++){
      if(inputField[i] == ""){
        return;
      }
    }
    navigate('/MainPage')
  }

  useEffect(()=>{
    ref.current["0"].focus()
  },[])
  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-5">
    <div className="text-white font-bold text-2xl">Login via OTP</div>
    <div className="flex gap-5">
      {inputField.map((input, index) => (
        <input
          key={index}
          ref={(currentInput)=>(ref.current[index] = currentInput)
          }
          className="outline-none p-2 m-2 text-white border-white border h-16 w-20 focus:outline-none focus:border-blue-500"
          onKeyDown={(event)=>{handleKeyDown(event,index)}}
          type="text"
          value={input}
        />
      ))}
      </div>
      <div>
      <button type="button" onClick={handleClick} className="mt-2 w-28 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 hover:text-white hover:bg-gray-700">LOGIN</button>
      </div>
    </div>
  );
}
