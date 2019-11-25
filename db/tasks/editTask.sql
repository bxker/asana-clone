UPDATE user_tasks
SET date_info = $2,
    due_date = $4,
    task_content = $3
WHERE user_id = $1 AND task_id = $5;

