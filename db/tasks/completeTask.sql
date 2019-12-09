UPDATE user_tasks
SET task_complete = true
WHERE
user_id = $1 AND task_id = $2;