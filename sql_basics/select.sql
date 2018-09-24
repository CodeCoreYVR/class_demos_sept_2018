SELECT * FROM students;

SELECT * FROM students WHERE id=100;

SELECT id, first_name, last_name, email FROM students WHERE id=100;

SELECT id, first_name, last_name FROM students WHERE id > 100;

SELECT id, first_name, last_name, age FROM students WHERE age > 40;

SELECT * FROM students WHERE registration_date >  (now() - interval '200 days');

SELECT * FROM students WHERE id > 100 AND id < 200;

SELECT * FROM students WHERE age > 40 OR age < 20;

SELECT * FROM students WHERE age IS NULL OR age < 20;

SELECT * FROM students WHERE first_name LIKE 'Jo%';
SELECT * FROM students WHERE first_name ILIKE 'Jo%';

SELECT * FROM students WHERE first_name ILIKE '%nn%' OR last_name ILIKE '%nn%';

SELECT * FROM students WHERE age BETWEEN 20 AND 40;

SELECT * FROM students WHERE first_name ILIKE 'Jo%' ORDER BY last_name, age DESC;

SELECT * FROM students WHERE age > 30 ORDER BY first_name, last_name;

SELECT * FROM students ORDER BY id DESC LIMIT 5;

SELECT * FROM students OFFSET 20 LIMIT 10;