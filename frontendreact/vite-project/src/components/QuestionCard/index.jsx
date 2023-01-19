import React, { useState, useEffect } from "react"
import MyModal from "../Modal";
import QComp from "../QuestionComponent";
import "./style.css"
const QuestionCard = ({QuestionData, Winner=false}) => {

    const [show, setShow] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [mF, setMF] = useState(false);

    //   const toggleThemeCard = () => {
    //         if (theme1 === 'style1') {
    //           setTheme1('style2');
    //         } else {
    //           setTheme1('style1');
    //         }
    //       };
    //       useEffect(() => {
    //            document.getElementById(setAns).className  = 'setAns';
    //       }, [theme1]);

    const liCkickFun = (event) => {
        //check if clicked element has active class then remove it 
        //and if don't has class then add it

      }

    const handleClick = (event) => {
        // if(event.target.classList.contains('setAns')){
        //     event.target.classList.remove('style1');
        //   } else { 
        //     event.target.classList.add('style2');         
        //   }
    
        // if(event.target.classList.contains('setAns')){
        //     event.target.classList.remove('style1');
        //   } else { 
                     
        //   }
        if (!answered) {
            setShow(true);
            // event.target.classList.add('style2');
        }
        setAnswered(true);
        
        

    }

    const renderQuestion = (text) => {
        return text.length > 100 ? `${text.slice(0, 100).trim()}...` : text    
    }

    return (
        // <div onClick={handleClick} className = "eh hover:cursor-pointer min-h-[10rem] max-w-[16rem] h-full p-2 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        // <div id="setAns" onClick={handleClick} className = "setAns active:text-blue-500 eh hover:cursor-pointer min-h-[10rem] max-w-[16rem] h-full p-2 bg-green-800 border border-green-400 rounded-lg shadow-md hover:bg-green-600 dark:bg-red-800 dark:border-yellow-700 dark:hover:bg-green-800">

             <div id="setAns" onClick={handleClick} className = "setAns active:text-blue-500 eh hover:cursor-pointer min-h-[10rem] max-w-[16rem] h-full p-2 bg-green-800 border border-green-400 rounded-lg shadow-md hover:bg-green-600 dark:bg-red-800 dark:border-yellow-700 dark:hover:bg-green-800">
                {
                    <div className="h-full flex flex-col justify-between">
                        <div className="flex flex-col justify-between">
                            <h5 className="eh2 mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">{Winner ? renderQuestion(QuestionData.question) : QuestionData.category}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{Winner ? renderQuestion(QuestionData.correctAnswer) : QuestionData.difficulty}</p>
                        </div>
                        {answered ? 
                        <p className="font-normal text-gray-700 bg-green-800 dark:text-gray-400 ">Answered</p> 
                        : 
                        null
                        }
                    </div>
                }
                <MyModal onClose={() => setShow(false)} dismissable={false} Component={<QComp data={QuestionData} onClose={() => setShow(false)}/>} setOpen={show} />
            </div>
       
    )

}


export default QuestionCard
