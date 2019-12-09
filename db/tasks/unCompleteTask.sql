UPDATE user_tasks
SET task_complete = false
WHERE
user_id = $1 AND task_id = $2;