CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id)
)

INSERT INTO posts(title, content, category_id) VALUES('Curry', 'Spicy, Meaty', 4);
INSERT INTO posts(title, content, category_id) VALUES('Coastal Areas', 'Somewhere near the beach ', 5);
INSERT INTO posts(title, content, category_id) VALUES('Warn and Quiet', 'Not a big city fan', 6);
