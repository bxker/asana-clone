SELECT * FROM user_tasks
WHERE user_id = $1 AND task_complete = true
ORDER BY task_id ASC;