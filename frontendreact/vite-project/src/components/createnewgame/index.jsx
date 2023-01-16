import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { storeSocket, changeState, storeUser, addUser, updateScore, setCompleted } from "../../actions";
import axios from "axios";


const createnewgame = () => {

    const dispatch = useDispatch();
    const socket = useSelector((state) => state.socket);

    async function getQuestions(category, difficulty) {
        const url = `https://opentdb.com/api.php?amount=8&category=${category}&difficulty=${difficulty}&type=multiple`;
        const {data} = await axios.get(url);
        console.log(data);
        return data.results;
    }


    return(
        <div>
        <button onClick={()=>getQuestions(20, "medium")} className="btn">Get data</button>		
        </div>
    )
}

export default createnewgame;