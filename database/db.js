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

module.exports = { client };
