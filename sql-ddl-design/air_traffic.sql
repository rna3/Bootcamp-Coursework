-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

-- CREATE TABLE tickets
-- (
--   id SERIAL PRIMARY KEY,
--   first_name TEXT NOT NULL,
--   last_name TEXT NOT NULL,
--   seat TEXT NOT NULL,
--   departure TIMESTAMP NOT NULL,
--   arrival TIMESTAMP NOT NULL,
--   airline TEXT NOT NULL,
--   from_city TEXT NOT NULL,
--   from_country TEXT NOT NULL,
--   to_city TEXT NOT NULL,
--   to_country TEXT NOT NULL
-- );

-- INSERT INTO tickets
--   (first_name, last_name, seat, departure, arrival, airline, from_city, from_country, to_city, to_country)
-- VALUES
--   ('Jennifer', 'Finch', '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', 'United', 'Washington DC', 'United States', 'Seattle', 'United States'),
--   ('Thadeus', 'Gathercoal', '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', 'British Airways', 'Tokyo', 'Japan', 'London', 'United Kingdom'),
--   ('Sonja', 'Pauley', '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', 'Delta', 'Los Angeles', 'United States', 'Las Vegas', 'United States'),
--   ('Jennifer', 'Finch', '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', 'Delta', 'Seattle', 'United States', 'Mexico City', 'Mexico'),
--   ('Waneta', 'Skeleton', '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', 'TUI Fly Belgium', 'Paris', 'France', 'Casablanca', 'Morocco'),
--   ('Thadeus', 'Gathercoal', '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', 'Air China', 'Dubai', 'UAE', 'Beijing', 'China'),
--   ('Berkie', 'Wycliff', '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', 'United', 'New York', 'United States', 'Charlotte', 'United States'),
--   ('Alvin', 'Leathes', '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', 'American Airlines', 'Cedar Rapids', 'United States', 'Chicago', 'United States'),
--   ('Berkie', 'Wycliff', '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', 'American Airlines', 'Charlotte', 'United States', 'New Orleans', 'United States'),
--   ('Cory', 'Squibbes', '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', 'Avianca Brasil', 'Sao Paolo', 'Brazil', 'Santiago', 'Chile');

CREATE TABLE passengers (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);

CREATE TABLE airlines (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE locations (
  id SERIAL PRIMARY KEY,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  UNIQUE (city, country)
);

CREATE TABLE tickets (
  id SERIAL PRIMARY KEY,
  passenger_id INT REFERENCES passengers(id),
  seat TEXT NOT NULL,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline_id INT REFERENCES airlines(id),      
  from_location_id INT REFERENCES locations(id),
  to_location_id INT REFERENCES locations(id)   
);

INSERT INTO passengers (first_name, last_name) 
VALUES
  ('Jennifer', 'Finch'),
  ('Thadeus', 'Gathercoal'),
  ('Sonja', 'Pauley'),
  ('Waneta', 'Skeleton'),
  ('Berkie', 'Wycliff'),
  ('Alvin', 'Leathes'),
  ('Cory', 'Squibbes');

INSERT INTO airlines (name) 
VALUES
  ('United'),
  ('British Airways'),
  ('Delta'),
  ('TUI Fly Belgium'),
  ('Air China'),
  ('American Airlines'),
  ('Avianca Brasil');

INSERT INTO locations (city, country) 
VALUES
  ('Washington DC', 'United States'),
  ('Seattle', 'United States'),
  ('Tokyo', 'Japan'),
  ('London', 'United Kingdom'),
  ('Los Angeles', 'United States'),
  ('Las Vegas', 'United States'),
  ('Mexico City', 'Mexico'),
  ('Paris', 'France'),
  ('Casablanca', 'Morocco'),
  ('Dubai', 'UAE'),
  ('Beijing', 'China'),
  ('New York', 'United States'),
  ('Charlotte', 'United States'),
  ('Cedar Rapids', 'United States'),
  ('Chicago', 'United States'),
  ('New Orleans', 'United States'),
  ('Sao Paolo', 'Brazil'),
  ('Santiago', 'Chile');

INSERT INTO tickets (passenger_id, seat, departure, arrival, airline_id, from_location_id, to_location_id) VALUES
  ((SELECT id FROM passengers WHERE first_name = 'Jennifer' AND last_name = 'Finch'), '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', 
    (SELECT id FROM airlines WHERE name = 'United'), 
    (SELECT id FROM locations WHERE city = 'Washington DC' AND country = 'United States'), 
    (SELECT id FROM locations WHERE city = 'Seattle' AND country = 'United States')),
    
  ((SELECT id FROM passengers WHERE first_name = 'Thadeus' AND last_name = 'Gathercoal'), '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', 
    (SELECT id FROM airlines WHERE name = 'British Airways'), 
    (SELECT id FROM locations WHERE city = 'Tokyo' AND country = 'Japan'), 
    (SELECT id FROM locations WHERE city = 'London' AND country = 'United Kingdom')),
  
  ((SELECT id FROM passengers WHERE first_name = 'Sonja' AND last_name = 'Pauley'), '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', 
    (SELECT id FROM airlines WHERE name = 'Delta'), 
    (SELECT id FROM locations WHERE city = 'Los Angeles' AND country = 'United States'), 
    (SELECT id FROM locations WHERE city = 'Las Vegas' AND country = 'United States')),
    
  ((SELECT id FROM passengers WHERE first_name = 'Jennifer' AND last_name = 'Finch'), '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', 
    (SELECT id FROM airlines WHERE name = 'Delta'), 
    (SELECT id FROM locations WHERE city = 'Seattle' AND country = 'United States'), 
    (SELECT id FROM locations WHERE city = 'Mexico City' AND country = 'Mexico')),
    
  ((SELECT id FROM passengers WHERE first_name = 'Waneta' AND last_name = 'Skeleton'), '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', 
    (SELECT id FROM airlines WHERE name = 'TUI Fly Belgium'), 
    (SELECT id FROM locations WHERE city = 'Paris' AND country = 'France'), 
    (SELECT id FROM locations WHERE city = 'Casablanca' AND country = 'Morocco')),
    
  ((SELECT id FROM passengers WHERE first_name = 'Thadeus' AND last_name = 'Gathercoal'), '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', 
    (SELECT id FROM airlines WHERE name = 'Air China'), 
    (SELECT id FROM locations WHERE city = 'Dubai' AND country = 'UAE'), 
    (SELECT id FROM locations WHERE city = 'Beijing' AND country = 'China')),
    
  ((SELECT id FROM passengers WHERE first_name = 'Berkie' AND last_name = 'Wycliff'), '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', 
    (SELECT id FROM airlines WHERE name = 'United'), 
    (SELECT id FROM locations WHERE city = 'New York' AND country = 'United States'), 
    (SELECT id FROM locations WHERE city = 'Charlotte' AND country = 'United States')),
    
  ((SELECT id FROM passengers WHERE first_name = 'Alvin' AND last_name = 'Leathes'), '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', 
    (SELECT id FROM airlines WHERE name = 'American Airlines'), 
    (SELECT id FROM locations WHERE city = 'Cedar Rapids' AND country = 'United States'), 
    (SELECT id FROM locations WHERE city = 'Chicago' AND country = 'United States')),
    
  ((SELECT id FROM passengers WHERE first_name = 'Berkie' AND last_name = 'Wycliff'), '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', 
    (SELECT id FROM airlines WHERE name = 'American Airlines'), 
    (SELECT id FROM locations WHERE city = 'Charlotte' AND country = 'United States'), 
    (SELECT id FROM locations WHERE city = 'New Orleans' AND country = 'United States')),
    
  ((SELECT id FROM passengers WHERE first_name = 'Cory' AND last_name = 'Squibbes'), '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', 
    (SELECT id FROM airlines WHERE name = 'Avianca Brasil'), 
    (SELECT id FROM locations WHERE city = 'Sao Paolo' AND country = 'Brazil'), 
    (SELECT id FROM locations WHERE city = 'Santiago' AND country = 'Chile'));