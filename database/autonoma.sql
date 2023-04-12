--DROP TABLE IF EXISTS subscribers;

CREATE TABLE subscribers(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE events(
     id                  SERIAL PRIMARY KEY,
     evt_name            VARCHAR,
     start_date          VARCHAR,
     start_time          TIME,
     end_date            VARCHAR,
     end_time            TIME,
     evt_location        VARCHAR,
     evt_poster          VARCHAR,
     evt_description     VARCHAR,
     collaborators       VARCHAR,
     published           BOOLEAN,
     created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);