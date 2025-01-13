const express = require('express');
const ownerModel = require("../models/owner-model"); // Fixed typo
const router = express.Router();

router.get('/admin', (req, res) => {
    let success = req.flash("success");
    res.render("createproducts", { success });
});

if (process.env.NODE_ENV === "development") {
    router.post('/create', async (req, res) => {
        try {
            let owners = await ownerModel.find();
            if (owners.length > 0) {
                return res.status(503).send("You don't have permission to create a new owner");
            }

            let { fullname, email, password } = req.body;

            let createdOwner = await ownerModel.create({
                fullname,
                email,
                password,
            });
            req.flash("success", "Created owner successfully.");
            res.status(201).send("Created owner");
        } catch (error) {
            console.log(error);
            req.flash("error", "Failed to create owner.");
            res.status(500).send("Internal Server Error");
        }
    });
}

module.exports = router;