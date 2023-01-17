import React from "react";
import MyModal from "../Modal";
import QComp from "../QuestionComponent";

const QuestionCard = ({QuestionData, Winner=false}) => {

    const [show, setShow] = React.useState(false);

    const HandleClick = () => {
        setShow(true);
    }

    return (
        <div className = "block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Winner ? QuestionData.question : QuestionData.category}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{Winner ? QuestionData.correctAnswer : QuestionData.difficulty}</p>
                    {Winner ? <p className="font-normal text-gray-700 dark:text-gray-400">{Winner}</p> : <button onClick={HandleClick} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Click to Reveal</button>}
                </div>
            }
            <MyModal onClose={() => setShow(false)} dismissable={false} Component={<QComp data={QuestionData} onClose={() => setShow(false)}/>} setOpen={show} />
        </div>
    )

}

export default QuestionCard
