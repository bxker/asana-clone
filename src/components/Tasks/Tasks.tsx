import React from 'react';
import {connect} from 'react-redux';
import {getTasks, addTask, deleteTask, editTask} from '../../redux/reducers/taskReducer';
import NavTop from '../Main/Nav-top/NavTop';
import Nav from '../Nav/Nav';
import './styles/Tasks.css';
import TaskInformation from './TaskInformation/TaskInformation';
import Task from './Task/Task';

const Tasks: React.FC<{tasks: Array<any>, getTasks: Function, addTask: Function, deleteTask: Function, editTask: Function}> = (props) => {

  const [taskOpen, setTaskOpen] = React.useState(false)
  const [taskInput, setTaskInput] = React.useState('')
  const [editTaskStatus, setEditTaskStatus ] = React.useState(false)
  const [editTaskInput, setEditTaskInput] = React.useState('')
  const [showTaskInfo, setShowTaskInfo] = React.useState(false)
  const [currentTaskId, setCurrentTaskId] = React.useState(0)
  
  React.useEffect(() => {
  if(props.getTasks) {
      props.getTasks();
    }
  }, [props.tasks, props.tasks])

  
  let addTaskToRedux = (task: any) => {
    props.addTask(task)
    if(taskInput){
      setTaskInput('')
    }
  }

  let deleteTaskRedux = (task: any) => {
    props.deleteTask(task)
  }

  let editTaskRedux = (task: any, task_id: any) => {
    props.editTask(task, task_id)
  }


  let date = new Date().toJSON()
  
  let tasksMapped = props.tasks.map((el, i) => {
    return (
      <Task 
        index={i}
        task_id={el.task_id}
        task_content ={el.task_content}
        editTaskStatus={editTaskStatus}
        editTaskInput={editTaskInput}
        setEditTaskStatus={setEditTaskStatus}
        deleteTaskRedux={deleteTaskRedux}
        setShowTaskInfo={setShowTaskInfo}
        setCurrentTaskId={setCurrentTaskId}
        setEditTaskInput={setEditTaskInput}
        editTaskRedux={editTaskRedux}
      />
    )
  })
  return (
    <div className="tasks-parent">
      <Nav />
      <div className="tasks-main">
        <NavTop />
        <div className="tasks-main-background">
          <section className="tasks-main-content">
            <div className="tasks-top-section">
              <button onClick={() => setTaskOpen(true)}>Add Task</button>
              <button>^</button>
            </div>
            <div className="task-sections">
              <h1>Recently Assigned</h1>
              {taskOpen ? (
                <div>
                  <input onChange={e => setTaskInput(e.target.value)}></input>
                  <button onClick={() => addTaskToRedux({taskInput, date})}>Add</button>
                  <button onClick={() => setTaskOpen(false)}>X</button>
                </div>
              ): null}
              {tasksMapped}
            </div>
          </section>
          {showTaskInfo ? 
            <TaskInformation setShowTaskInfo={setShowTaskInfo} task_id={currentTaskId}/>
          : null}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState: any)=> {
  return {
      tasks: reduxState.taskReducer.tasks
  }
}

export default connect(mapStateToProps, {
  getTasks,
  addTask,
  deleteTask,
  editTask
})(Tasks)