import { useEffect, useRef, useState } from "react";
export function Shape({size}){
    const[grid,setGrid] = useState(Array.from({length: size},()=>{
        return Array(size).fill(false);
    }))
    const queue = useRef([])
    const timerId = useRef([])
    const handleClick = (rowIndex,colIndex,flag) => {
        if(timerId.current.length>0 && flag){
            return;
        }
        if(grid[rowIndex][colIndex] && flag){
            return;
        }
        // const deepcopy = JSON.parse(JSON.stringify(grid));
        setGrid((prevGrid) => {
            const deepcopy = prevGrid.map((row)=>[...row])
            deepcopy[rowIndex][colIndex] = flag;
            if(flag){
                queue.current.push([rowIndex,colIndex])
            }
            return deepcopy;
        })
    }

    useEffect(()=>{
        if(queue.current.length == 9){
            queue.current.forEach(([rowIndex,colIndex],queueIndex)=>{
               timerId.current[queueIndex] = setTimeout(()=>{handleClick(rowIndex,colIndex,false)
               if(queueIndex === timerId.current.length - 1){
                timerId.current = []
               }} 
               ,1000*(queueIndex + 1))
            })  
            queue.current = [];          
        }
    },[grid])
    
    return(
        <div className="flex justify-center">
             <div className="grid gap-1 m-2" style={{gridTemplateColumns:`repeat(${size},50px)`}}>
            {grid.map((row,rowIndex)=>{
                return row.map((cell,colIndex)=>{
                    return(
                    <div key={`${rowIndex}-${colIndex}`}  className={`h-12 w-12 border-2 border-white ${cell ? 'active' : ''}`}
                    onClick={()=>handleClick(rowIndex,colIndex,true)}>{cell}</div>
                )})
            })}  
        </div>
        </div>
    )
}