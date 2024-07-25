import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function LoginPage(){
    const [input, setInput] =  useState("")
    const navigate = useNavigate();
    return(
        <div className="flex flex-col justify-center items-center h-dvh gap-1">
            <div className="text-white font-bold text-xl">Enter Phone Number to Login</div>
            <div className="flex gap-3">
            <select disabled className="select-none mt-2 text-white border text-sm rounded-lg block p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none" name="dropdown" id="">
                <option>+91</option>
            </select>
            <input
            type="number"
            onChange={(event)=>{
                setInput(event.target.value)
            }}
            placeholder="Enter mobile number"
            className="mt-2 text-white border text-sm rounded-lg block w-full max-w-80 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500"/>
            </div>
            <div className="mt-2">
            <button onClick={()=>{
                if(input.length<10){
                    return
                }
                navigate("/otp")
            }} type="button" className="mt-2 w-28 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 hover:text-white hover:bg-gray-700">GET OTP</button>
            </div>
        </div>
    )
}