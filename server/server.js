const express = require("express");
const app = express();
const path = require("path");

// const httpsServer = https.createServer(
//     {
//         key: fs.readFileSync(
//             "/etc/letsencrypt/live/softwarenoise.com/privkey.pem"
//         ),
//         cert: fs.readFileSync(
//             "/etc/letsencrypt/live/softwarenoise.com/fullchain.pem"
//         ),
//     },
//     app
// );
app.use(express.json());
app.use(express.static(path.join(__dirname, "../", "public")));

app.get("*", (req, res) => {
    res.redirect("/");
});

app.set("port", process.env.PORT || 3001);

var server = app.listen(app.get("port"), function () {
    console.log("listening on port ", server.address().port);
});

// httpsServer.listen(app.get("port"), function () {
//     console.log("listening on port ", server.address().port);
// });
