-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

-- CREATE TABLE songs
-- (
--   id SERIAL PRIMARY KEY,
--   title TEXT NOT NULL,
--   duration_in_seconds INTEGER NOT NULL,
--   release_date DATE NOT NULL,
--   artists TEXT[] NOT NULL,
--   album TEXT NOT NULL,
--   producers TEXT[] NOT NULL
-- );

-- INSERT INTO songs
--   (title, duration_in_seconds, release_date, artists, album, producers)
-- VALUES
--   ('MMMBop', 238, '04-15-1997', '{"Hanson"}', 'Middle of Nowhere', '{"Dust Brothers", "Stephen Lironi"}'),
--   ('Bohemian Rhapsody', 355, '10-31-1975', '{"Queen"}', 'A Night at the Opera', '{"Roy Thomas Baker"}'),
--   ('One Sweet Day', 282, '11-14-1995', '{"Mariah Cary", "Boyz II Men"}', 'Daydream', '{"Walter Afanasieff"}'),
--   ('Shallow', 216, '09-27-2018', '{"Lady Gaga", "Bradley Cooper"}', 'A Star Is Born', '{"Benjamin Rice"}'),
--   ('How You Remind Me', 223, '08-21-2001', '{"Nickelback"}', 'Silver Side Up', '{"Rick Parashar"}'),
--   ('New York State of Mind', 276, '10-20-2009', '{"Jay Z", "Alicia Keys"}', 'The Blueprint 3', '{"Al Shux"}'),
--   ('Dark Horse', 215, '12-17-2013', '{"Katy Perry", "Juicy J"}', 'Prism', '{"Max Martin", "Cirkut"}'),
--   ('Moves Like Jagger', 201, '06-21-2011', '{"Maroon 5", "Christina Aguilera"}', 'Hands All Over', '{"Shellback", "Benny Blanco"}'),
--   ('Complicated', 244, '05-14-2002', '{"Avril Lavigne"}', 'Let Go', '{"The Matrix"}'),
--   ('Say My Name', 240, '11-07-1999', '{"Destiny''s Child"}', 'The Writing''s on the Wall', '{"Darkchild"}');

CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE producers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL UNIQUE,
  release_date DATE NOT NULL
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  album_id INT REFERENCES albums(id)  -- Foreign key to albums table
);

CREATE TABLE song_artists (
  song_id INT REFERENCES songs(id),
  artist_id INT REFERENCES artists(id),
  PRIMARY KEY (song_id, artist_id)
);

CREATE TABLE song_producers (
  song_id INT REFERENCES songs(id),
  producer_id INT REFERENCES producers(id),
  PRIMARY KEY (song_id, producer_id)
);

INSERT INTO albums (title, release_date) 
VALUES
  ('Middle of Nowhere', '1997-04-15'),
  ('A Night at the Opera', '1975-10-31'),
  ('Daydream', '1995-11-14'),
  ('A Star Is Born', '2018-09-27'),
  ('Silver Side Up', '2001-08-21'),
  ('The Blueprint 3', '2009-10-20'),
  ('Prism', '2013-12-17'),
  ('Hands All Over', '2011-06-21'),
  ('Let Go', '2002-05-14'),
  ('The Writing''s on the Wall', '1999-11-07');

INSERT INTO artists (name) 
VALUES
  ('Hanson'),
  ('Queen'),
  ('Mariah Cary'),
  ('Boyz II Men'),
  ('Lady Gaga'),
  ('Bradley Cooper'),
  ('Nickelback'),
  ('Jay Z'),
  ('Alicia Keys'),
  ('Katy Perry'),
  ('Juicy J'),
  ('Maroon 5'),
  ('Christina Aguilera'),
  ('Avril Lavigne'),
  ('Destiny''s Child');

INSERT INTO producers (name) VALUES
  ('Dust Brothers'),
  ('Stephen Lironi'),
  ('Roy Thomas Baker'),
  ('Walter Afanasieff'),
  ('Benjamin Rice'),
  ('Rick Parashar'),
  ('Al Shux'),
  ('Max Martin'),
  ('Cirkut'),
  ('Shellback'),
  ('Benny Blanco'),
  ('The Matrix'),
  ('Darkchild');

INSERT INTO songs (title, duration_in_seconds, album_id) 
VALUES
  ('MMMBop', 238, (SELECT id FROM albums WHERE title = 'Middle of Nowhere')),
  ('Bohemian Rhapsody', 355, (SELECT id FROM albums WHERE title = 'A Night at the Opera')),
  ('One Sweet Day', 282, (SELECT id FROM albums WHERE title = 'Daydream')),
  ('Shallow', 216, (SELECT id FROM albums WHERE title = 'A Star Is Born')),
  ('How You Remind Me', 223, (SELECT id FROM albums WHERE title = 'Silver Side Up')),
  ('New York State of Mind', 276, (SELECT id FROM albums WHERE title = 'The Blueprint 3')),
  ('Dark Horse', 215, (SELECT id FROM albums WHERE title = 'Prism')),
  ('Moves Like Jagger', 201, (SELECT id FROM albums WHERE title = 'Hands All Over')),
  ('Complicated', 244, (SELECT id FROM albums WHERE title = 'Let Go')),
  ('Say My Name', 240, (SELECT id FROM albums WHERE title = 'The Writing''s on the Wall'));

INSERT INTO song_artists (song_id, artist_id) 
VALUES
  ((SELECT id FROM songs WHERE title = 'MMMBop'), (SELECT id FROM artists WHERE name = 'Hanson')),
  ((SELECT id FROM songs WHERE title = 'Bohemian Rhapsody'), (SELECT id FROM artists WHERE name = 'Queen')),
  ((SELECT id FROM songs WHERE title = 'One Sweet Day'), (SELECT id FROM artists WHERE name = 'Mariah Cary')),
  ((SELECT id FROM songs WHERE title = 'One Sweet Day'), (SELECT id FROM artists WHERE name = 'Boyz II Men')),
  ((SELECT id FROM songs WHERE title = 'Shallow'), (SELECT id FROM artists WHERE name = 'Lady Gaga')),
  ((SELECT id FROM songs WHERE title = 'Shallow'), (SELECT id FROM artists WHERE name = 'Bradley Cooper')),
  ((SELECT id FROM songs WHERE title = 'How You Remind Me'), (SELECT id FROM artists WHERE name = 'Nickelback')),
  ((SELECT id FROM songs WHERE title = 'New York State of Mind'), (SELECT id FROM artists WHERE name = 'Jay Z')),
  ((SELECT id FROM songs WHERE title = 'New York State of Mind'), (SELECT id FROM artists WHERE name = 'Alicia Keys')),
  ((SELECT id FROM songs WHERE title = 'Dark Horse'), (SELECT id FROM artists WHERE name = 'Katy Perry')),
  ((SELECT id FROM songs WHERE title = 'Dark Horse'), (SELECT id FROM artists WHERE name = 'Juicy J')),
  ((SELECT id FROM songs WHERE title = 'Moves Like Jagger'), (SELECT id FROM artists WHERE name = 'Maroon 5')),
  ((SELECT id FROM songs WHERE title = 'Moves Like Jagger'), (SELECT id FROM artists WHERE name = 'Christina Aguilera')),
  ((SELECT id FROM songs WHERE title = 'Complicated'), (SELECT id FROM artists WHERE name = 'Avril Lavigne')),
  ((SELECT id FROM songs WHERE title = 'Say My Name'), (SELECT id FROM artists WHERE name = 'Destiny''s Child'));

INSERT INTO song_producers (song_id, producer_id) VALUES
  ((SELECT id FROM songs WHERE title = 'MMMBop'), (SELECT id FROM producers WHERE name = 'Dust Brothers')),
  ((SELECT id FROM songs WHERE title = 'MMMBop'), (SELECT id FROM producers WHERE name = 'Stephen Lironi')),
  ((SELECT id FROM songs WHERE title = 'Bohemian Rhapsody'), (SELECT id FROM producers WHERE name = 'Roy Thomas Baker')),
  ((SELECT id FROM songs WHERE title = 'One Sweet Day'), (SELECT id FROM producers WHERE name = 'Walter Afanasieff')),
  ((SELECT id FROM songs WHERE title = 'Shallow'), (SELECT id FROM producers WHERE name = 'Benjamin Rice')),
  ((SELECT id FROM songs WHERE title = 'How You Remind Me'), (SELECT id FROM producers WHERE name = 'Rick Parashar')),
  ((SELECT id FROM songs WHERE title = 'New York State of Mind'), (SELECT id FROM producers WHERE name = 'Al Shux')),
  ((SELECT id FROM songs WHERE title = 'Dark Horse'), (SELECT id FROM producers WHERE name = 'Max Martin')),
  ((SELECT id FROM songs WHERE title = 'Dark Horse'), (SELECT id FROM producers WHERE name = 'Cirkut')),
  ((SELECT id FROM songs WHERE title = 'Moves Like Jagger'), (SELECT id FROM producers WHERE name = 'Shellback')),
  ((SELECT id FROM songs WHERE title = 'Moves Like Jagger'), (SELECT id FROM producers WHERE name = 'Benny Blanco')),
  ((SELECT id FROM songs WHERE title = 'Complicated'), (SELECT id FROM producers WHERE name = 'The Matrix')),
  ((SELECT id FROM songs WHERE title = 'Say My Name'), (SELECT id FROM producers WHERE name = 'Darkchild'));
