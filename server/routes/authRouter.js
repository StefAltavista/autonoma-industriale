const express = require("express");
const router = express.Router();
let env_vars;

if (process.env.DATABASE_URL) {
    env_vars = process.env;
} else {
    env_vars = require("../../env_vars.json");
}

router.post("/api/authorize", function (req, res) {
    console.log(req.body);
    if (req.body.password === env_vars.admin) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

module.exports = router;
