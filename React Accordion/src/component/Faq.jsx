import { Accordion } from "./Accordion"
import data from '../data.json'

export function Faq(){
    console.log(data.faqs);
    
    return(
        <div>
            <div style={{textAlign:"center",fontWeight:"bold"}}>Frequently Asked Question`s</div>
            {
                data.faqs.map((object,index) => {
                    return <Accordion key={index} qna={object}></Accordion>
                })
            }
        </div>
    )
}