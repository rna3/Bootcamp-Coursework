-- -- from the terminal run:
-- -- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

-- CREATE TABLE planets
-- (
--   id SERIAL PRIMARY KEY,
--   name TEXT NOT NULL,
--   orbital_period_in_years FLOAT NOT NULL,
--   orbits_around TEXT NOT NULL,
--   galaxy TEXT NOT NULL,
--   moons TEXT[]
-- );

-- INSERT INTO planets
--   (name, orbital_period_in_years, orbits_around, galaxy, moons)
-- VALUES
--   ('Earth', 1.00, 'The Sun', 'Milky Way', '{"The Moon"}'),
--   ('Mars', 1.88, 'The Sun', 'Milky Way', '{"Phobos", "Deimos"}'),
--   ('Venus', 0.62, 'The Sun', 'Milky Way', '{}'),
--   ('Neptune', 164.8, 'The Sun', 'Milky Way', '{"Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "S/2004 N 1", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"}'),
--   ('Proxima Centauri b', 0.03, 'Proxima Centauri', 'Milky Way', '{}'),
--   ('Gliese 876 b', 0.23, 'Gliese 876', 'Milky Way', '{}');

CREATE TABLE galaxies (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE stars (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,  -- Name of the star (what planets orbt around)
  galaxy_id INT REFERENCES galaxies(id)  -- Foreign key linking to the galaxy the star is in
);

CREATE TABLE planets (
  id SERIAL PRIMARY KEY, 
  name TEXT NOT NULL UNIQUE, 
  orbital_period_in_years FLOAT NOT NULL,
  star_id int REFERENCES stars(id), 
  galaxy_id int REFERENCES galaxies(id)
);

CREATE TABLE moons (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE, 
  planet_id int REFERENCES planets(id)
);

INSERT INTO galaxies (name) 
VALUES ('Milky Way');

INSERT INTO stars (name, galaxy_id)
VALUES   
  ('The Sun', (SELECT id FROM galaxies WHERE name = 'Milky Way')),
  ('Proxima Centauri', (SELECT id FROM galaxies WHERE name = 'Milky Way')),
  ('Gliese 876', (SELECT id FROM galaxies WHERE name = 'Milky Way'));

INSERT INTO planets (name, orbital_period_in_years, star_id, galaxy_id)
VALUES
  ('Earth', 1.00, (SELECT id FROM stars WHERE name = 'The Sun'), (SELECT id FROM galaxies WHERE name = 'Milky Way')),
  ('Mars', 1.88, (SELECT id FROM stars WHERE name = 'The Sun'), (SELECT id FROM galaxies WHERE name = 'Milky Way')),
  ('Venus', 0.62, (SELECT id FROM stars WHERE name = 'The Sun'), (SELECT id FROM galaxies WHERE name = 'Milky Way')),
  ('Neptune', 164.8, (SELECT id FROM stars WHERE name = 'The Sun'), (SELECT id FROM galaxies WHERE name = 'Milky Way')),
  ('Proxima Centauri b', 0.03, (SELECT id FROM stars WHERE name = 'Proxima Centauri'), (SELECT id FROM galaxies WHERE name = 'Milky Way')),
  ('Gliese 876 b', 0.23, (SELECT id FROM stars WHERE name = 'Gliese 876'), (SELECT id FROM galaxies WHERE name = 'Milky Way'));

INSERT INTO moons (name, planet_id) 
VALUES
  ('The Moon', (SELECT id FROM planets WHERE name = 'Earth')),
  ('Phobos', (SELECT id FROM planets WHERE name = 'Mars')),
  ('Deimos', (SELECT id FROM planets WHERE name = 'Mars')),
  ('Naiad', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Thalassa', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Despina', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Galatea', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Larissa', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('S/2004 N 1', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Proteus', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Triton', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Nereid', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Halimede', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Sao', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Laomedeia', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Psamathe', (SELECT id FROM planets WHERE name = 'Neptune')),
  ('Neso', (SELECT id FROM planets WHERE name = 'Neptune'));