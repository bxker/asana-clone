
const getTasks = async (req, res) => {    
    const db = req.app.get('db');
    const {user_id} = req.session.user;

    const tasks = await db.tasks.getTasks(user_id);
    res.status(200).json(tasks);
}

const addTask = async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user;
    const {date_info, task_content, due_date} = req.body

    const newTask = await db.tasks.addTask(user_id, date_info, task_content, due_date);
    res.status(200).json(newTask);
}

const editTask = async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user;
    const {task_content, due_date} = req.body;
    const {task_id} = req.params;

    const editedTask = await db.tasks.editTask(user_id, task_content, due_date, task_id);
    res.status(200).json(editedTask);
}

const deleteTask = async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user;
    const {task_id} = req.params;

    const deletedTask = await db.tasks.deleteTask(user_id, task_id);
    res.status(200).json(deletedTask)
}

const getTaskById = async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user;
    const {task_id} = req.params;

    const task = await db.tasks.getTaskById(user_id, task_id);
    res.status(200).json(task)
}

const completeTask = async (req, res) => {
    console.log('hit')
    const db = req.app.get('db');
    const {user_id} = req.session.user;
    const {task_id} = req.params;
    console.log(user_id, task_id)

    const completedTask = await db.tasks.completeTask(+user_id, +task_id)
    console.log(completedTask)
    res.status(200).json(completedTask)
}

const unCompleteTask = async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user;
    const {task_id} = req.params;

    const unCompletedTask = await db.tasks.unCompleteTask(+user_id, +task_id)
    res.status(200).json(unCompletedTask)
}


const completedTasks = async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user;

    const completedTasks = await db.tasks.completedTasks(+user_id)
    res.status(200).json(completedTasks)
}

module.exports = {
    getTasks,
    addTask,
    editTask,
    deleteTask,
    getTaskById,
    completeTask,
    unCompleteTask,
    completedTasks
}