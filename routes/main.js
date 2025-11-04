// Create a new router
const express = require("express");
const router = express.Router();

// Data to be sent to templates
var shopData = {
    shop_name: "The Thirsty Student",
    product_categories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
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
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {
    res.send(' Hello ' + req.body.first + ' ' + req.body.last + ' you are now registered!' + ' We will send an email to you at ' + req.body.email);
});

router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
});

router.post("/survey_result", (req, res) => {
    res.render("survey_result.ejs", {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        age: req.body.age,
        consumed_categories: req.body.consumed_categories,
        is_student: req.body.is_student,
        shop_name: shopData.shop_name
    });
});

// Export the router object so index.js can access it
module.exports = router;

