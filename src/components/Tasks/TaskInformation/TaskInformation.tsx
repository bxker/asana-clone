import React from 'react';
import {connect} from 'react-redux';
import {getTaskById} from '../../../redux/reducers/taskReducer';
import './styles/TaskInformation.css';


const TaskInformation: React.FC<{setShowTaskInfo: Function, getTaskById: Function, task: Array<any>, task_id: Number}> = (props) => {

    React.useEffect(() => {
        props.getTaskById(props.task_id);
    }, [])

    let taskMapped = props.task.map((el, i) => {
        return (
            <div key={el.task_id}>
                <section>
                    <input value={el.task_content}></input>
                    <button>Update</button>
                </section>
                <section>
                    <div>
                        <img alt="avi"></img>
                        <div>
                            <h1>Assigned To</h1>
                            <h2>User</h2>
                        </div>
                    </div>
                    {!el.due_date ? <h1>No Due Date</h1> : <h1>{el.due_date}</h1>}
                </section>
                <section>
                    {el.task_description ? <input placeholder={el.task_description}></input> : <input placeholder="Description"></input>}
                    <button>Update</button>
                </section>
            </div>
        )
    })
    
    return (
        <div className="task-information">
            <section className="task-information-detailed">
                <div>
                    <div>
                        <button>Marked Complete</button>
                        <button>Attach</button>
                        <button>SubTasks</button>
                        <button>Copy Link</button>
                        <button>Like</button>
                        <button>Settings</button>
                        <button onClick={() => props.setShowTaskInfo(false)}>X</button>
                    </div>
                    <div>
                        <h1>This task is private to you. <span>Make public</span></h1>
                    </div>
                </div>
                {taskMapped}
                <div>
                    <h1>Add to Project</h1>
                </div>
            </section>
            <section className="task-information-chat-section">
                <div className="task-information-chat-user">
                    <img alt="avi"></img>
                    <h1>User created this task</h1>
                </div>
                <div className="task-information-chat-input">
                    <img alt="avi"></img>
                    <input placeholder="Ask a question or post an update..."></input>
                </div>
                <div className="task-information-task-follow">
                    <h1>Followers</h1>
                    <img alt="avi"></img>
                    <h1>Following</h1>
                </div>
            </section>
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