SELECT * FROM students
INNER JOIN projects
ON students.id = projects.student_id
ORDER BY first_name;

SELECT students.id, first_name, last_name, title FROM students
INNER JOIN projects
ON students.id = projects.student_id
ORDER BY title;

SELECT s.id, first_name, last_name, title FROM students AS s
INNER JOIN projects AS p
ON s.id = p.student_id
ORDER BY title;

SELECT * FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id
INNER JOIN courses    ON courses.id  = enrolments.course_id
WHERE title ILIKE '%hybrid matrix%';

SELECT title, first_name, last_name, score 
FROM courses
INNER JOIN enrolments ON enrolments.course_id = courses.id
INNER JOIN students ON students.id = enrolments.student_id
WHERE first_name ILIKE 'jo%' OR last_name ILIKE 'jo%';

