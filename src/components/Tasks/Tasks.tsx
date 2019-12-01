import React from 'react';
import {connect} from 'react-redux';
import {getTasks} from '../../redux/reducers/taskReducer';
import NavTop from '../Main/Nav-top/NavTop';
import Nav from '../Nav/Nav';
import './styles/Tasks.css';

const Tasks: React.FC<{tasks: Array<any>, getTasks: Function}> = (props) => {
  
  React.useEffect(() => {
  if(props.getTasks) {
      props.getTasks();
    }
  }, [])

  let tasksMapped = props.tasks.map((el, i) => {
    console.log(el)
    return (
      <div key={i}>
        <h1>{el.task_content}</h1>
      </div>
    )
  })

  return (
    <div className="tasks-parent">
      <Nav />
      <div className="tasks-main">
        <NavTop />
        <h1>Tasks</h1>
        {tasksMapped}
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
  getTasks
})(Tasks)