SELECT * FROM user_tasks
WHERE user_id = $1
ORDER BY task_id ASC;