import React from 'react';
import {connect} from 'react-redux';
import {getTasks, addTask, deleteTask} from '../../redux/reducers/taskReducer';
import NavTop from '../Main/Nav-top/NavTop';
import Nav from '../Nav/Nav';
import './styles/Tasks.css';

const Tasks: React.FC<{tasks: Array<any>, getTasks: Function, addTask: Function, deleteTask: Function}> = (props) => {

  const [taskOpen, setTaskOpen] = React.useState(false)
  const [taskInput, setTaskInput] = React.useState('')
  const [addButtonClicked, setButtonClicked] = React.useState(false)
  
  React.useEffect(() => {
  if(props.getTasks) {
      props.getTasks();
    }
  }, [addButtonClicked])

  
  let addTaskToRedux = (task: any) => {
    props.addTask(task)
    if(addButtonClicked == false){
      setButtonClicked(true)
    }else{
      setButtonClicked(false)
    }
    if(taskInput){
      setTaskInput('')
    }
  }

  let deleteTaskRedux = (task: any) => {
    props.deleteTask(task)
    if(addButtonClicked == false){
      setButtonClicked(true)
    }else{
      setButtonClicked(false)
    }
  }
  
  let today = new Date().toJSON()
  function formatDate(date: any) {
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    
    if (month.length < 2) 
    month = '0' + month;
    if (day.length < 2) 
    day = '0' + day;
    
    return [year, month, day].join('/');
  }
  
  let date = formatDate(today)
  
  let tasksMapped = props.tasks.map((el, i) => {
    return (
      <div key={i}>
        <h1>{el.task_content}</h1>
        <button onClick={() => deleteTaskRedux(el.task_id)}>x</button>
      </div>
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
  deleteTask
})(Tasks)