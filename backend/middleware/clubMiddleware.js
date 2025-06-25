const MidProjectModel = require("../models/MidProject");

const clubMiddleware = async (req, res, next) => {
    const projectId = req.params.id;
    const clubMember = req.user && req.user.isClub;
    const project = await MidProjectModel.findById(projectId);

    if (!project) {
        return res.status(404).json({ error: "Project not found" });
    }
    
    if (project.clubOnly && !clubMember) {
        return res.status(403).json({ error: "You are not a Club Member" });
    }
    console.log("User is Club Member");
    next();
};

module.exports = clubMiddleware ;