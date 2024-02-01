const projects = require("../Models/projectModel");

// addproject
exports.addProjects = (req, res) => {
    console.log("Inside Add Project API");
    res.status(200).json("add project request received")
}
