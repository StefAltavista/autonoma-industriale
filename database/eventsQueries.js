const { client } = require("./db");

const getEvents = () => {
    return client.query(`
    SELECT * FROM events
    `);
};

const newEvent = ({
    evt_name,
    start_date,
    start_time,
    end_date,
    end_time,
    evt_location,
    evt_poster,
    evt_description,
    collaborators,
    published,
}) => {
    return client.query(
        `
    INSERT INTO events 
    (evt_name, start_date, start_time, end_date, end_time, evt_location, evt_poster, evt_description, collaborators, published)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
     RETURNING id, evt_name, start_date, start_time, end_date, end_time, evt_location, evt_poster, evt_description, collaborators, published`,
        [
            evt_name,
            start_date,
            start_time,
            end_date,
            end_time,
            evt_location,
            evt_poster,
            evt_description,
            collaborators,
            published,
        ]
    );
};

module.exports = { getEvents, newEvent };
