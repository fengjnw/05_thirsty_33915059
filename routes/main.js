// Create a new router
const express = require("express");
const router = express.Router();

// Data to be sent to templates
var shopData = {
    shopName: "The Thirsty Student",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shops: [
        { location: "Lewisham", manager: "Anna Smith", address: "123 Main Street" },
        { location: "Greenwich", manager: "John Doe", address: "456 Elm Street" },
        { location: "New Cross", manager: "Karen Johnson", address: "789 Oak Street" }
    ]
}

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {
    res.send(' Hello ' + req.body.first + ' ' + req.body.last + ' you are now registered!' + ' We will send an email to you at ' + req.body.email);
});

// Export the router object so index.js can access it
module.exports = router;

