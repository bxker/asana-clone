import React from "react";
import { connect } from "react-redux";
import {
    deleteTask,
    editTask,
    setTaskCompleted,
    setTaskNotCompleted
} from "../../../redux/reducers/taskReducer";
import "./styles/Task.css";

const Task: React.FC<{
    index: number;
    task_id: number;
    task_content: string;
    task_complete: boolean;
    setTaskCompleted: Function;
    setTaskNotCompleted: Function;
    deleteTask: Function;
    editTask: Function;
    setCurrentTaskId: Function;
    setShowTaskInfo: Function;
    showTaskInfo: any;
}> = props => {
    const [editTaskStatus, setEditTaskStatus] = React.useState(false);
    const [editTaskInput, setEditTaskInput] = React.useState("");

    let deleteTaskRedux = (task: any) => {
        props.deleteTask(task);
    };

    let editTaskRedux = (task: any, task_id: any) => {
        props.editTask(task, task_id);
    };

    console.log(props.task_complete);
    return (
        <div key={props.task_id} className="task-container">
            {!props.task_complete ? (
                <h1
                    onClick={() => props.setTaskCompleted(props.task_id)}
                    style={{ textDecoration: "line-through", cursor: "pointer" }}>
                    <span style={{color: "red"}}>&#x25A0;</span>{props.task_content}
                </h1>
            ) : (
                    <h1
                        onClick={() => props.setTaskNotCompleted(props.task_id)}
                        style={{ cursor: "pointer" }}>
                        <span style={{color: "limegreen"}}>&#x25A0;</span>{props.task_content}{" "}
                    </h1>
                )}
            <div className="task-edit-delete">
                <button
                    className="task-edit-button"
                    onClick={() => {
                        props.setShowTaskInfo(true);
                        props.setCurrentTaskId(props.task_id)
                    }}>
                    Edit
                </button>
                {/* {editTaskStatus ? (
                    <div>
                        <input onChange={e => setEditTaskInput(e.target.value)}></input>
                        <button
                            onClick={() => {
                                editTaskRedux(editTaskInput, props.task_id);
                                setEditTaskStatus(false);
                            }}>
                            Update
                        </button>
                        <button
                            onClick={() => {
                                setEditTaskStatus(false);
                            }}>
                            Cancel
                        </button>
                    </div>
                ) : null} */}
                <button
                    className="task-delete-button"
                    onClick={() => deleteTaskRedux(props.task_id)}>
                    Delete
                </button>
                <button
                    className="task-info-button"
                    onClick={() => {
                        props.setShowTaskInfo(true);
                        props.setCurrentTaskId(props.task_id);
                    }}>
                    Task Info
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (reduxState: any) => {
    return {
        task: reduxState.taskReducer.task
    };
};

export default connect(mapStateToProps, {
    deleteTask,
    editTask,
    setTaskCompleted,
    setTaskNotCompleted
})(Task);
