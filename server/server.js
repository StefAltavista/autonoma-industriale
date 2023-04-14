const express = require("express");
const cookieSession = require("cookie-session");
const csurf = require("csurf");

const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

const authRoute = require("./routes/authRouter");
const mailinglistRoute = require("./routes/mailinglistRouter");

const env_vars = require("../env_vars.json");

const cookieSessionMiddleware = cookieSession({
    name: "AI",
    secret: env_vars.cookie_secret,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: true,
});

// server middleware
app.use(cookieSessionMiddleware);
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(express.json());
app.use(csurf());
app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

//server routes
app.use(authRoute);
app.use(mailinglistRoute);

app.get("*", (req, res) => {
    res.redirect("/");
});

//server listen
var server = app.listen(PORT, function () {
    console.log("listening on port ", server.address().port);
});
