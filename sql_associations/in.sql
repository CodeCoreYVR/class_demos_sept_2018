SELECT * 
FROM students
INNER JOIN projects ON projects.student_id = students.id
WHERE students.id IN (4, 6, 10, 12, 20);