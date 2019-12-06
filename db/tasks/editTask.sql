UPDATE user_tasks
SET due_date = $3,
    task_content = $2
WHERE user_id = $1 AND task_id = $4;

