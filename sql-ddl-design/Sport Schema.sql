CREATE TABLE "Teams" (
  "id" serial PRIMARY KEY,
  "team_name" TEXT UNIQUE
);

CREATE TABLE "Players" (
  "id" serial PRIMARY KEY,
  "first_name" text,
  "last_name" text,
  "team_name_id" int
);

CREATE TABLE "Referees" (
  "id" serial PRIMARY KEY,
  "fist_name" text,
  "last_name" text
);

CREATE TABLE "Matches" (
  "id" Serial PRIMARY KEY,
  "season_id" int,
  "team_1" int,
  "team_2" int,
  "referee_id" int,
  "match_date" date,
  "team_1_score" int DEFAULT 0,
  "team_2_score" int DEFAULT 0
);

CREATE TABLE "Season_Dates" (
  "id" serial PRIMARY KEY,
  "start_date" date,
  "end_date" date
);

CREATE TABLE "Goals" (
  "id" serial PRIMARY KEY,
  "match_id" int,
  "player_id" int
);

CREATE TABLE "Standings" (
  "id" serial PRIMARY KEY,
  "season_id" int,
  "team_id" int,
  "matches_played" int DEFAULT 0,
  "wins" int DEFAULT 0,
  "losses" int DEFAULT 0,
  "points" int DEFAULT 0,
  "PRIMARY" KEY(season_id,team_id)
);

ALTER TABLE "Players" ADD FOREIGN KEY ("team_name_id") REFERENCES "Teams" ("id");

ALTER TABLE "Matches" ADD FOREIGN KEY ("referee_id") REFERENCES "Referees" ("id");

ALTER TABLE "Matches" ADD FOREIGN KEY ("team_1") REFERENCES "Teams" ("id");

ALTER TABLE "Matches" ADD FOREIGN KEY ("team_2") REFERENCES "Teams" ("id");

ALTER TABLE "Goals" ADD FOREIGN KEY ("player_id") REFERENCES "Players" ("id");

ALTER TABLE "Matches" ADD FOREIGN KEY ("season_id") REFERENCES "Season_Dates" ("id");

ALTER TABLE "Goals" ADD FOREIGN KEY ("match_id") REFERENCES "Matches" ("id");

ALTER TABLE "Standings" ADD FOREIGN KEY ("season_id") REFERENCES "Season_Dates" ("id");

ALTER TABLE "Standings" ADD FOREIGN KEY ("team_id") REFERENCES "Teams" ("id");
