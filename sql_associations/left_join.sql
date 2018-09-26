SELECT * FROM students
LEFT JOIN projects ON students.id = projects.student_id;

SELECT * FROM students
LEFT JOIN projects ON students.id = projects.student_id
WHERE projects.title IS NULL;


