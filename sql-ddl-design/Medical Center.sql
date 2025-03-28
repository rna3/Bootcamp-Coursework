CREATE TABLE "Doctors" (
  "id" Serial PRIMARY KEY,
  "first_name" TEXT,
  "last_name" TEXT,
  "specialization" TEXT
);

CREATE TABLE "Patients" (
  "id" SERIAL PRIMARY KEY,
  "first_name" TEXT,
  "last_name" TEXT,
  "date_of_birth" DATE
);

CREATE TABLE "Diseases" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT,
  "description" TEXT
);

CREATE TABLE "Visits" (
  "id" SERIAL PRIMARY KEY,
  "doctor_id" int,
  "patient_id" int,
  "visit_date" DATE
);

CREATE TABLE "Diagnoses" (
  "visit_id" int,
  "disease_id" int,
  "PRIMARY" KEY(visit_id,disease_id)
);

ALTER TABLE "Diagnoses" ADD FOREIGN KEY ("visit_id") REFERENCES "Visits" ("id");

ALTER TABLE "Diagnoses" ADD FOREIGN KEY ("disease_id") REFERENCES "Diseases" ("id");

ALTER TABLE "Visits" ADD FOREIGN KEY ("doctor_id") REFERENCES "Doctors" ("id");

ALTER TABLE "Visits" ADD FOREIGN KEY ("patient_id") REFERENCES "Patients" ("id");
