import { useState } from "react";

export function FileExplorer({folderData}){
    console.log(folderData);
    const [children, setChildren] = useState(false)
    function handleClick(){
        setChildren(!children)
    }
    return(
        <div className="container">
            <h5>{folderData.type === 'folder' ? (children?"📂":"📁") : '🖹' }
                <span onClick={()=>{handleClick()}} style={{margin:"0.5rem", cursor:"pointer"}}>{folderData.name}</span></h5>
            {children && folderData && folderData.children && folderData.children.map((childrenData, index) =>{
                return <FileExplorer key={index} folderData={childrenData}></FileExplorer>
            })}
        </div>
    )
}