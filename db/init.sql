CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  auth0_id TEXT NOT NULL,
  firstname VARCHAR(40) NOT NULL,
  lastname VARCHAR(80) NOT NULL,
  gender VARCHAR(10),
  hair_color VARCHAR(10),
  eye_color VARCHAR(10),
  hobby VARCHAR(20),
  birth_day INTEGER,
  birth_month VARCHAR(10),
  birth_year INTEGER
);