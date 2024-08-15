import { useState, useRef, useEffect } from "react"

export function Shape({size}){
    const[grid,setGrid] = useState(Array.from({length: size},()=>{
        return Array(size).fill(false)
    }))
    console.log(grid);
    const queue = useRef([]);
    const timerId = useRef([])
    console.log(queue);
    const handleClick = (rowIndex,colIndex,flag) => {
        if(grid[rowIndex][colIndex] && flag){
            return;
        }
        if(timerId.current.length>0 && flag){
            return;
        }
       setGrid((prev)=>{
        const deepcopy = prev.map((row)=>[...row])
        deepcopy[rowIndex][colIndex] = flag
        return deepcopy;
       })
       if(flag){
        queue.current.push([rowIndex,colIndex])
       }
    }


    useEffect(()=>{
        if(queue.current.length == 8){
            queue.current.reverse();
            queue.current.forEach(([rowIndex,colIndex],queueIndex) =>{
            timerId.current[queueIndex] = setTimeout(()=>{
                    handleClick(rowIndex,colIndex,false)
                    if(queueIndex == timerId.current.length - 2){
                        timerId.current = [];
                    }
                },1000*(queueIndex + 1))
            })
            queue.current = [];
        }
    },[grid])

    return(
        <div className="flex flex-col justify-center items-center h-dvh">
            <div className="grid gap-1 m-2" style={{gridTemplateColumns:`repeat(${size},50px)`}}>
             {grid.map((row,rowIndex) => {
                return row.map((cell,colIndex) =>{
                    if(!(rowIndex == 1 && colIndex == 1)){
                        return (<div className={`h-12 w-12 border-2 border-white ${cell ? 'active' : ''}`} onClick={()=>{handleClick(rowIndex,colIndex,true)}} >{cell}</div>)
                    }
                    else{
                        return (<div className="h-12 w-12"></div>)
                    }
            })
           })}
           </div>
        </div>
    )
}