SELECT COUNT(*) FROM students;

SELECT COUNT(*) FROM students WHERE age > 25;

SELECT COUNT(*) AS student_count FROM students WHERE age > 25;

SELECT COUNT(*) AS "Student Count" FROM students WHERE age > 25;

SELECT SUM(age) FROM students;

SELECT AVG(age) FROM students;

 SELECT AVG(age) AS "Avergae Age of Students", AVG(id) AS "Average ID" FROM students;
 
 SELECT ROUND(AVG(age)) AS "Avergae Age of Students", ROUND(AVG(id)) AS "Average ID" FROM students;

SELECT MIN(age), MAX(age), AVG(age) FROM students;

SELECT first_name, COUNT(*) AS occurances
FROM students
GROUP BY first_name;

SELECT age, COUNT(*) AS occurances
FROM students
WHERE age IS NOT NULL
GROUP BY age
ORDER BY age DESC;

