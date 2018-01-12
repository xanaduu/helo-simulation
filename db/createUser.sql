INSERT INTO users 
( 
  auth0_id, firstname, lastname, gender, hair_color,
  eye_color, hobby, birth_day, birth_month, birth_year 
)
VALUES
( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10 )
RETURNING *;