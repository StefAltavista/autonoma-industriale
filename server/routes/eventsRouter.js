const express = require("express");
const router = express.Router();
const db = require("../../database/eventsQueries");

router.post("/api/events", async () => {
    try {
        const data = await db.getEvents();
        console.log("events", data.rows);
        res.json(data.rows);
    } catch (err) {
        console.log("DB ERROR", err);
        res.json({ success: false });
    }
});

router.post("/api/newevent", async () => {
    try {
        const data = await db.newEvent(req.body.event);
        console.log("New event", data.rows);
        res.json(data.rows);
    } catch (err) {
        console.log("DB ERROR", err);
        res.json({ success: false });
    }
});
