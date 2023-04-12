const express = require("express");
const router = express.Router();
const auth = require("../utils/jwt");

const env_vars = process.env.DATABASE_URL
    ? process.env
    : require("../../env_vars.json");

router.post("/api/authorize", function (req, res) {
    console.log(req.body);
    const password = req.body.password;
    if (password === env_vars.admin) {
        const token = auth.createToken(password);
        req.session.access = token;
        res.json({ success: true, token });
    } else {
        res.json({ success: false });
    }
});

router.get("/api/validate", (req, res) => {
    const response = auth.verification(req.session.access);
    console.log(...response);
    return res.json({ ...response });
});

module.exports = router;
