const { client } = require("./db");

const subscribe = (email) => {
    return client.query(
        `
    INSERT INTO subscribers 
    (email) VALUES ($1)`,
        [email]
    );
};

const mailinglist = () => {
    return client.query(`
    SELECT * FROM subscribers
    `);
};

const checkUser = (email) => {
    return client.query(
        `
    SELECT id, email FROM subscribers
    WHERE email = $1
    `,
        [email]
    );
};

const unsubscribe = (email) => {
    return client.query(
        `
    DELETE FROM subscribers
    WHERE email = $1`,
        [email]
    );
};

module.exports = { subscribe, mailinglist, checkUser, unsubscribe };
