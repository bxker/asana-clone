require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');

//controllers
const {getUser, register, login, logout} = require('./controllers/authController.ts');
const {getTasks, addTask, editTask, deleteTask, getTaskById} = require('./controllers/tasksController.ts');

//dotenv
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}))

//database connection
massive(CONNECTION_STRING)
.then((db) => {
    app.set('db', db);
    console.log('Database Connected :D')
})

//auth endpoints
app.get('/auth/user', getUser)
app.post('/auth/register', register)
app.post('/auth/login', login)
app.post('/auth/logout', logout)

//task endpoints
app.get('/api/tasks', getTasks)
app.get('/api/task/:task_id', getTaskById)
app.post('/api/task', addTask)
app.put('/api/task/:task_id', editTask)
app.delete('/api/task/:task_id', deleteTask)

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}.`));