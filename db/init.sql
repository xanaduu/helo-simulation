CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  auth0_id TEXT,
  firstname VARCHAR(40),
  lastname VARCHAR(80),
  gender VARCHAR(10),
  hair_color VARCHAR(10),
  eye_color VARCHAR(10),
  hobby VARCHAR(20),
  birth_day INTEGER,
  birth_month VARCHAR(10),
  birth_year INTEGER
);