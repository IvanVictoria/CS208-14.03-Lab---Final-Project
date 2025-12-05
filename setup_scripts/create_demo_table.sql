
CREATE DATABASE IF NOT EXISTS cs208demo;

USE cs208demo;

DROP TABLE IF EXISTS todos;
DROP TABLE IF EXISTS comments;

CREATE TABLE IF NOT EXISTS comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO comments (customer_name, message) VALUES 
('Homer', 'Donuts = good'),
('Police Chief', 'Best coffee');