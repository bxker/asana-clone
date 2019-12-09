import React from "react";
import { connect } from "react-redux";
import {deleteTask, editTask} from '../../../redux/reducers/taskReducer'


const Task: React.FC<{ index: number, task_id: number, task_content: string, deleteTask: Function, editTask: Function, setCurrentTaskId: Function, setShowTaskInfo: Function, showTaskInfo: any}> = props => {
    const [editTaskStatus, setEditTaskStatus ] = React.useState(false)
    const [editTaskInput, setEditTaskInput] = React.useState('')

    let deleteTaskRedux = (task: any) => {
        props.deleteTask(task)
      }
    
    let editTaskRedux = (task: any, task_id: any) => {
    props.editTask(task, task_id)
    }
    
    return (
        <div key={props.task_id}>
            <h1>{props.task_content}</h1>
            <button onClick={() => setEditTaskStatus(true)}>Edit</button>
            <button onClick={() => deleteTaskRedux(props.task_id)}>x</button>
            <button
                onClick={() => {
                props.setShowTaskInfo(true);
                props.setCurrentTaskId(props.task_id);
                }}
            >
                task info
            </button>
            {editTaskStatus ? (
            <div>
                <input onChange={e => setEditTaskInput(e.target.value)}></input>
                <button
                onClick={() => {
                    editTaskRedux(editTaskInput, props.task_id);
                    setEditTaskStatus(false);
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
    deleteTask,
    editTask
})(Task);
