INSERT INTO user_tasks
(user_id, date_info, task_content, due_date, task_complete)
VALUES
($1, $2, $3, $4, true);


SELECT * FROM user_tasks
WHERE user_id = $1
ORDER BY task_id ASC;