-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name FROM users ORDER BY last_name;



-- Exercise 4
SELECT id, image_url, user_id FROM posts WHERE user_id=26;



-- Exercise 5
SELECT id, image_url, user_id FROM posts WHERE user_id=26 OR user_id=12;



-- Exercise 6
SELECT COUNT(*) FROM posts;



-- Exercise 7
SELECT user_id, COUNT(*) AS "count" FROM comments GROUP BY user_id ORDER BY count DESC;



-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, users.username, users.first_name, users.last_name FROM posts 
JOIN users ON posts.user_id=users.id
WHERE users.id=26 or users.id=12;


-- Exercise 9
SELECT posts.id, posts.pub_date, following.following_id FROM posts 
JOIN following ON posts.user_id=following.following_id 
WHERE following.user_id=26 ORDER BY posts.id;



-- Exercise 10
SELECT posts.id, posts.pub_date, following.following_id, users.username FROM posts 
JOIN following ON posts.user_id=following.following_id JOIN users ON posts.user_id=users.id
WHERE following.user_id=26 ORDER BY posts.pub_date DESC;



-- Exercise 11
INSERT INTO bookmarks(user_id, post_id)
VALUES (26, 219), (26, 220), (26,221);




-- Exercise 12
DELETE FROM bookmarks
WHERE id in (501, 504);



-- Exercise 13
UPDATE users
SET email = 'cyoung2022@gmail.com'
WHERE id=26;



-- Exercise 14
SELECT posts.id, posts.user_id, COUNT(*) as "count"
FROM posts 
JOIN comments ON comments.post_id=posts.id 
WHERE posts.user_id=26 
GROUP BY posts.id
ORDER BY count DESC; 