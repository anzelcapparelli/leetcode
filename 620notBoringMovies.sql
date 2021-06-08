DROP DATABASE IF EXISTS not_boring;

CREATE DATABASE not_boring;

USE not_boring;

CREATE TABLE Cinema (
id int AUTO_INCREMENT,
movie VARCHAR(255),
description VARCHAR(255),
rating DECIMAL(2,1),
PRIMARY KEY(id)
);

INSERT INTO Cinema (movie, description, rating) VALUES
('War', 'great 3D', 8.9),
('Science', 'fiction', 8.5),
('irish', 'boring', 6.2),
('Ice song', 'Fantacy', 8.6),
('House card', 'Interesting', 9.1);
