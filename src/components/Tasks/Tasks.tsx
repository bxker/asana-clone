import React from 'react';
import { connect } from 'react-redux';
import { getTasks, addTask } from '../../redux/reducers/taskReducer';
import NavTop from '../Main/Nav-top/NavTop';
import Nav from '../Nav/Nav';
import './styles/Tasks.css';
import TaskInformation from './TaskInformation/TaskInformation';
import Task from './Task/Task';

const Tasks: React.FC<{ tasks: Array<any>, getTasks: Function, addTask: Function, deleteTask: Function, editTask: Function }> = (props) => {

  const [taskOpen, setTaskOpen] = React.useState(false)
  const [taskInput, setTaskInput] = React.useState('')
  const [showTaskInfo, setShowTaskInfo] = React.useState(false)
  const [currentTaskId, setCurrentTaskId] = React.useState(0)
  // const mounted = React.useRef(false);


  React.useEffect(() => {
    if (props.getTasks) {
      props.getTasks();
    }
  }, [props.tasks, props.tasks])

  let addTaskToRedux = (task: any) => {
    props.addTask(task)
    if (taskInput) {
      setTaskInput('')
    }
  }

  let date = new Date().toJSON()

  let tasksMapped = props.tasks.map((el, i) => {
    // console.log(el)
    return (
      <Task
        index={i}
        task_id={el.task_id}
        task_content={el.task_content}
        task_complete={el.task_complete}
        showTaskInfo={showTaskInfo}
        setShowTaskInfo={setShowTaskInfo}
        setCurrentTaskId={setCurrentTaskId}

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
              <button className="add-task-button" onClick={() => setTaskOpen(true)}>+ Add Task</button>
              <button className="add-task-drop-down"><img className="down-arrow-nav" style={{filter: 'invert(100%)'}} src="https://www.stickpng.com/assets/images/58f8bd170ed2bdaf7c128308.png"></img></button>
            </div>
            <div className="task-sections">
              {taskOpen ? (
                <div>
                  <input onChange={e => setTaskInput(e.target.value)}></input>
                  <button onClick={() => addTaskToRedux({ taskInput, date })}>Add</button>
                  <button onClick={() => setTaskOpen(false)}>X</button>
                </div>
              ) : null}
              <section className="recently-assigned">
                <h1>Recently Assigned</h1>
                {tasksMapped}
              </section>
            </div>
          </section>
          {showTaskInfo ?
            <TaskInformation
              setShowTaskInfo={setShowTaskInfo}
              task_id={currentTaskId}
            />
            : null}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState: any) => {
  return {
    tasks: reduxState.taskReducer.tasks
  }
}

export default connect(mapStateToProps, {
  getTasks,
  addTask
})(Tasks)