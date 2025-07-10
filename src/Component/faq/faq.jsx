import { useState } from "react";
import { questions } from "../../assets/assests";
import './faq.css'
const Faq = ()=>{
    const [isclicked,setisclicked]=useState(null);

    function handleclick(classval){
        setisclicked(classval)
    }
console.log(isclicked);
    return(
        <div className='entire-faq'>
            {questions.map((quesval,index)=>(
                <div className = {`quesvalue`} key={quesval.quesid}>
                    
                    <h2 onClick={()=>handleclick(quesval.class)}>{quesval.qusetion}</h2>
                    <div className={`answerval ${isclicked === quesval.class?`show-${quesval.class}`:'close'}`}>
                        {quesval.answer}
                    </div>
                </div>
            )

            )}
        </div>
    );
}
export default Faq;