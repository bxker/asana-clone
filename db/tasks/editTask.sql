UPDATE user_tasks
SET due_date = $3,
    task_content = $2
WHERE user_id = $1 AND task_id = $4;

SELECT * FROM user_tasks
WHERE user_id = $1
ORDER BY task_id ASC;

