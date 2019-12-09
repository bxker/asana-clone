import axios from 'axios';

//initial state
const initialState: any = {
    tasks: [],
    task: [],
    completedTasks: []
};

//const strings
const GET_TASKS = "GET_TASKS";
const ADD_TASK = "ADD_TASK";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK = "DELETE_TASK";
const GET_TASK_BY_ID = "GET_TASK_BY_ID";
const SET_TASK_COMPLETED = "SET_TASK_COMPLETED"
const SET_TASK_NOT_COMPLETED = "SET_TASK_NOT_COMPLETED"
const GET_COMPLETED_TASKS = "GET_COMPLETED_TASKS"

//functions
export function getTasks() {
    return {
        type: GET_TASKS,
        payload: axios.get(`/api/tasks`)
    };
}

export function addTask(task: any) {
    return {
        type: ADD_TASK,
        payload: axios.post(`/api/task`, {task_content: task.taskInput, date_info: task.date})
    };
}

export function editTask(task_content: string, task_id: number) {
    return {
        type: EDIT_TASK,
        payload: axios.put(`/api/task/${task_id}`, {task_content})
    };
}

export function deleteTask(task_id: number) {
  console.log(task_id)
    return {
        type: DELETE_TASK,
        payload: axios.delete(`/api/task/${task_id}`)
    };
}

export function getTaskById(task_id: number){
  return{
    type: GET_TASK_BY_ID,
    payload: axios.get(`/api/task/${task_id}`)
  }
}

export function setTaskCompleted(task_id: number){
  console.log('hit')
  return {
    type: SET_TASK_COMPLETED,
    payload: axios.put(`/api/task/completeTask/${task_id}`)
  }
}

export function setTaskNotCompleted(task_id: number){
  return {
    type: SET_TASK_NOT_COMPLETED,
    payload: axios.put(`/api/task/unCompleteTask/${task_id}`)
  }
}

export function getCompletedTasks(){
  return{
    type: GET_COMPLETED_TASKS,
    payload: axios.get('/api/tasks/completedTasks')
  }
}

//reducer
export default function reducer(state = initialState, action: any) {
    const { type, payload } = action;
  
    switch (type) {
      case `${GET_TASKS}_FULFILLED`:
        return {
          ...state,
          tasks: payload.data
        };
      case `${ADD_TASK}_FULFILLED`:
        return {
          ...state,
          tasks: payload.data
        };
      case `${EDIT_TASK}_FULFILLED`:
        return {
          ...state,
          tasks: payload.data
        };
      case `${DELETE_TASK}_FULFILLED`:
        return {
          ...state,
          tasks: payload.data
        };
      case `${GET_TASK_BY_ID}_FULFILLED`:
        return {
          ...state,
          task: payload.data
        };
      case `${SET_TASK_COMPLETED}_FULFILLED`:
        return {
          ...state
        };
      case `${SET_TASK_NOT_COMPLETED}_FULFILLED`:
        return {
          ...state
        };
      case `${GET_COMPLETED_TASKS}_FULFILLED`:
        return {
          ...state,
          completedTasks: payload.data
        };
      default:
        return state;
    }
  }
