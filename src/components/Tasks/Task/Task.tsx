import React from "react";
import { connect } from "react-redux";
import { getTaskById } from "../../../redux/reducers/taskReducer";

const Task: React.FC<{ index: number, task_id: number, task_content: string, editTaskStatus: boolean, editTaskInput: string, setEditTaskStatus: Function, deleteTaskRedux: Function, setShowTaskInfo: Function, setCurrentTaskId: Function, setEditTaskInput: Function, editTaskRedux: Function}> = props => {
    return (
        <div key={props.task_id}>
            <h1>{props.task_content}</h1>
            <button onClick={() => props.setEditTaskStatus(true)}>Edit</button>
            <button onClick={() => props.deleteTaskRedux(props.task_id)}>x</button>
            <button
                onClick={() => {
                props.setShowTaskInfo(true);
                props.setCurrentTaskId(props.task_id);
                }}
            >
                task info
            </button>
            {props.editTaskStatus ? (
            <div>
                <input onChange={e => props.setEditTaskInput(e.target.value)}></input>
                <button
                onClick={() => {
                    props.editTaskRedux(props.editTaskInput, props.task_id);
                    props.setEditTaskStatus(false);
                }}
                >
                Update
                </button>
            </div>
            ) : null}
        </div>
    );
};

const mapStateToProps = (reduxState: any) => {
    return {
    task: reduxState.taskReducer.task
    };
};

export default connect(mapStateToProps, {
  getTaskById
})(Task);
