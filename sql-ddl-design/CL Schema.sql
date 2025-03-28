CREATE TABLE "Regions" (
  "id" SERIAL PRIMARY KEY,
  "region_name" TEXT UNIQUE
);

CREATE TABLE "Users" (
  "id" SERIAL PRIMARY KEY,
  "user_name" TEXT UNIQUE,
  "email" TEXT UNIQUE,
  "preferred_region_id" INT
);

CREATE TABLE "Posts" (
  "id" SERIAL PRIMARY KEY,
  "title" TEXT,
  "content" TEXT,
  "user_id" int,
  "region_id" int,
  "location" TEXT,
  "category_id" TEXT
);

CREATE TABLE "Categories" (
  "id" SERIAL PRIMARY KEY,
  "category" TEXT UNIQUE
);

CREATE TABLE "category_posts" (
  "post_id" int,
  "category_id" int,
  "Primary" KEY(post_id,category_id)
);

ALTER TABLE "Regions" ADD FOREIGN KEY ("id") REFERENCES "Users" ("preferred_region_id");

ALTER TABLE "category_posts" ADD FOREIGN KEY ("post_id") REFERENCES "Posts" ("id");

ALTER TABLE "category_posts" ADD FOREIGN KEY ("category_id") REFERENCES "Categories" ("id");

ALTER TABLE "Posts" ADD FOREIGN KEY ("user_id") REFERENCES "Users" ("id");

ALTER TABLE "Posts" ADD FOREIGN KEY ("region_id") REFERENCES "Regions" ("id");
