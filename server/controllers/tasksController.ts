
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
    const {date_info, task_content, due_date} = req.body;
    const {task_id} = req.params;

    const editedTask = await db.tasks.editTask(user_id, date_info, task_content, due_date, task_id);
    res.status(200).json(editedTask);
}

const deleteTask = async (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.session.user;
    const {task_id} = req.params;

    const deletedTask = await db.tasks.deleteTask(user_id, task_id);
    res.status(200).json(deletedTask)
}

module.exports = {
    getTasks,
    addTask,
    editTask,
    deleteTask
}