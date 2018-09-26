SELECT course_title, student_count
FROM (
  SELECT title AS course_title, COUNT(student_id) AS student_count
  FROM courses
  INNER JOIN enrolments ON courses.id  = enrolments.course_id 
  GROUP BY course_title
) AS course_with_counts
WHERE student_count > 2
ORDER BY student_count DESC;