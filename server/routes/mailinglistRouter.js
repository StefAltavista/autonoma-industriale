const express = require("express");
const router = express.Router();
const db = require("../../database/mailinglistQueries");

router.post("/api/subscribe", async (req, res) => {
    console.log(req.body);
    try {
        const data = await db.subscribe(req.body.email);
        console.log(data);
        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.json({ success: false });
    }
});

router.post("/api/unsubscribe", async (req, res) => {
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
            console.log("user not found");
        }
    } catch (err) {
        console.log("DB ERROR", err);
        res.json({ success: false });
    }
});

router.post("/api/mailinglist", async (req, res) => {
    try {
        const data = await db.mailinglist();
        console.log(data.rows);
        res.json(data.rows);
    } catch (err) {
        console.log("DB ERROR", err);
        res.json({ success: false });
    }
});

module.exports = router;
