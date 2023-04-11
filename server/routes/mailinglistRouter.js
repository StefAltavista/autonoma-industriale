const express = require("express");
const router = express.Router();
const db = require("../../database/db");

router.post("/api/subscribe", async function (req, res) {
    console.log(req.body);
    try {
        const data = await db.subscription(req.body.email);
        console.log(data);
        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

router.post("/api/unsubscribe", async function (req, res) {
    try {
        const data = await db.checkUser(req.body.mail);
        console.log(data);
        if (data.rows.length > 0) {
            console.log("still here? ", req.body);
            try {
                const data = await db.unsubscribe(req.body.mail);
                console.log("unsubscribe data ", data);
                res.json({ success: true });
                console.log("deleted");
            } catch (err) {
                console.log("error deleting", err);
                res.json({ success: false });
            }
        } else {
            res.json({ success: false });
            console.log("no check");
        }
    } catch (err) {
        console.log("error checking", err);
        res.json({ success: false });
    }
});

router.post("/api/mailinglist", async function (req, res) {
    try {
        const data = await db.getList();
        console.log(data);
        res.json(data.rows);
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

module.exports = router;
