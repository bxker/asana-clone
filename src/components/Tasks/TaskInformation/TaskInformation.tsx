import React from 'react';
import {connect} from 'react-redux';
import {getTaskById} from '../../../redux/reducers/taskReducer';




const TaskInformation: React.FC<{setShowTaskInfo: Function, getTaskById: Function, task: Array<any>, task_id: Number}> = (props) => {

    React.useEffect(() => {
        props.getTaskById(props.task_id);
    }, [])

    let taskMapped = props.task.map((el, i) => {
        return (
            <div key={el.task_id}>
                <h1>{el.task_content}</h1>
            </div>
        )
    })
    
    return (
        <div className="task-information">
            <h1>Task information</h1>
            {taskMapped}
            <button onClick={() => props.setShowTaskInfo(false)}>X</button>
        </div>
    )
}

const mapStateToProps = (reduxState: any)=> {
    return {
        task: reduxState.taskReducer.task
    }
  }
  
  export default connect(mapStateToProps, {
    getTaskById
  })(TaskInformation)