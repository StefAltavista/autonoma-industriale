let env_vars = require("../env_vars.json");

const { Client } = require("pg");
const client = new Client({
    user: env_vars.db_user,
    host: env_vars.db_host,
    database: env_vars.db_database,
    password: env_vars.db_user_password,
    port: env_vars.port,
});
client.connect((error) => {
    if (error) throw error;
    console.log("connected to Database Autonoma at softwarenoise");
});

const subscription = (email) => {
    return db.query(
        `
    INSERT INTO subscribers 
    (email) VALUES ($1)`,
        [email]
    );
};

const getList = () => {
    return db.query(`
    SELECT * FROM subscribers
    `);
};

const checkUser = (email) => {
    return db.query(
        `
    SELECT id, email FROM subscribers
    WHERE email = $1
    `,
        [email]
    );
};

const unsubscribe = (email) => {
    return db.query(
        `
    DELETE FROM subscribers
    WHERE email = $1`,
        [email]
    );
};

module.exports = { subscription, getList, checkUser, unsubscribe };
