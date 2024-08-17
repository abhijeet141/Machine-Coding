import { useState } from "react"

export function Accordion({qna}){
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }
    return(
        <div style={{border:"2px solid black",margin:"0.5rem 0",padding:"0.5rem"}}>
            <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
                <h3>{qna.question}</h3>
                <span style={{cursor:"pointer",fontSize:"20px"}} onClick={()=>{handleClick()}}>{show?"-":"+"}</span>
            </div>
            {show?<div>{qna.answer}</div>:""}
        </div>
    )
}