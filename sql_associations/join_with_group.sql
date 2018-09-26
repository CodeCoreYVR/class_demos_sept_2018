SELECT title, ROUND(AVG(score)) AS average_score
FROM courses
INNER JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY title
ORDER BY average_score DESC;

SELECT title, max(registration_date) AS max_reg_date
FROM courses
INNER JOIN enrolments ON courses.id  = enrolments.course_id 
INNER JOIN students   ON students.id = enrolments.student_id 
GROUP BY title
ORDER BY max_reg_date DESC;

SELECT title, COUNT(student_id)
FROM courses
INNER JOIN enrolments ON courses.id  = enrolments.course_id 
GROUP BY title;
 
