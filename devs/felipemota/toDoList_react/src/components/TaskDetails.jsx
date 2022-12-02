import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "./Button";
import './TaskDetails.css'

const TaskDetails = () => {
    // Hook
    const params = useParams()
    const history = useHistory()
    
    const handleBackButtonClick = () => {
        history.goBack()
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus dolorem eius sit repellendus dolores necessitatibus dolor aut. Mollitia esse excepturi alias quod culpa quisquam beatae, quo vel, hic, dignissimos incidunt!</p>
            </div>
        </>
    )
}

export default TaskDetails