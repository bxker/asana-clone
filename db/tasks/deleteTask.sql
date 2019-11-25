DELETE FROM user_tasks
WHERE user_id = $1 AND task_id = $2;