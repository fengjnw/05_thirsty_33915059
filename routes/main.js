// Create a new router
const express = require("express");
const router = express.Router();

// Data to be sent to templates
const shop_data = {
    shop_name: "The Thirsty Student",
    product_categories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shops: [
        { location: "Lewisham", manager: "Anna Smith", address: "123 Main Street" },
        { location: "Greenwich", manager: "John Doe", address: "456 Elm Street" },
        { location: "New Cross", manager: "Karen Johnson", address: "789 Oak Street" }
    ]
};

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shop_data);
});

// About page route
router.get("/about", (req, res) => {
    res.render("about.ejs", shop_data);
});

// Search page route
router.get("/search", (req, res) => {
    res.render("search.ejs", shop_data);
});

// Search result route
router.get('/search_result', (req, res) => {
    // Display the search parameters
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

// Register page route
router.get("/register", (req, res) => {
    res.render("register.ejs", shop_data);
});

// Registered feedback route
router.post("/registered", (req, res) => {
    // Display the form data
    res.send(' Hello ' + req.body.first + ' ' + req.body.last + ' you are now registered!' + ' We will send an email to you at ' + req.body.email);
});

// Survey page route
router.get("/survey", (req, res) => {
    res.render("survey.ejs", shop_data);
});

// Survey result page route
router.post("/survey_result", (req, res) => {
    // Combine form data with shop data and render the result page
    res.render("survey_result.ejs", { ...req.body, ...shop_data, is_student: req.body.is_student });
});

// Export the router object so index.js can access it
module.exports = router;