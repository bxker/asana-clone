UPDATE user_tasks
SET task_complete = true
WHERE
task_id = $2 AND user_id = $1;

SELECT * FROM user_tasks
WHERE user_id = $1
ORDER BY task_id ASC;