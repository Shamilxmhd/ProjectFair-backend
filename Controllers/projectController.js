const projects = require('../Models/projectModel')

//addproject
exports.addProjects = async (req, res) => {
    console.log("Inside Add Project API");
    const { title, overview, languages, github, website } = req.body
    const projectImage = req.file.filename
    const userId = req.payload
    //console.log(title,overview,languages,github,website,projectImage,userId);
    try {
        const existingProject = await projects.findOne({ github })
        if (existingProject) {
            res.status(406).json("project Already exists in our Collection!! please upload another...")
        } else {
            const newProject = new projects({
                title, languages, overview, github, website, projectImage, userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get homepage projects 