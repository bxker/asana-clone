import axios from 'axios';

//initial state
const initialState: Object = {
    tasks: []
};

//const strings
const GET_TASKS = "GET_TASKS";
const ADD_TASK = "ADD_TASK";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK = "DELETE_TASK";

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

export function editTask(task: any, task_id: Number) {
    return {
        type: EDIT_TASK,
        payload: axios.put(`/api/task/${task_id}`, task)
    };
}

export function deleteTask(task_id: any) {
  console.log(task_id)
    return {
        type: DELETE_TASK,
        payload: axios.delete(`/api/task/${task_id}`)
    };
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
      default:
        return state;
    }
  }
