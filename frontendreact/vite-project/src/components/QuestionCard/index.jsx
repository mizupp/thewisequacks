import React from "react";
import MyModal from "../Modal";
import QComp from "../QuestionComponent";

const QuestionCard = ({QuestionData, Winner=false}) => {

    const [show, setShow] = React.useState(false);

    const handleClick = () => {
        setShow(true);
    }

    const renderQuestion = (text) => {
        return text.length > 100 ? `${text.slice(0, 100).trim()}...` : text    
    }

    return (
        
            <div onClick={handleClick} className = "hover:cursor-pointer min-h-[10rem] max-w-[16rem] h-full p-2 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                {
                    <div className="h-full flex flex-col justify-between">
                        <div className="flex flex-col justify-between">
                            <h5 className="mb-1 text-md font-bold tracking-tight text-gray-900 dark:text-white">{Winner ? renderQuestion(QuestionData.question) : QuestionData.category}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{Winner ? renderQuestion(QuestionData.correctAnswer) : QuestionData.difficulty}</p>
                        </div>
                        {Winner ? 
                        <p className="font-normal text-gray-700 dark:text-gray-400 ">{Winner}</p> 
                        : 
                        null
                        // <button onClick={HandleClick} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Click to Reveal</button>
                        }
                    </div>
                }
                <MyModal onClose={() => setShow(false)} dismissable={false} Component={<QComp data={QuestionData} onClose={() => setShow(false)}/>} setOpen={show} />
            </div>
       
    )

}


export default QuestionCard
