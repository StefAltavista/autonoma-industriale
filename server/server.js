const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const path = require("path");
const authRoute = require("./routes/authRouter");
const mailinglistRoute = require("./routes/mailinglistRouter");

let env_vars;

if (process.env.DATABASE_URL) {
    env_vars = process.env;
} else {
    env_vars = require("../env_vars.json");
}

app.use(
    cookieSession({
        secret: env_vars.cookie,
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

app.use(express.json());

app.use(csurf());
app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

app.use(express.static(path.join(__dirname, "../", "public")));

//server routes
app.use(authRoute);
app.use(mailinglistRoute);

app.get("*", (req, res) => {
    res.redirect("/");
});

//server listen
app.set("port", process.env.PORT || 3001);
var server = app.listen(app.get("port"), function () {
    console.log("listening on port ", server.address().port);
});
