import { portfolioForm } from '../../Model/Portfolio.Model.js'





export const postPortfolio = async (req, res) => {
    const {
        Name,
        Email,
        ProfileImage,
        Socials,
        Location,
        Aboutme,
        Skills,
        Education,
        Internships,
        Certificates,
        Projects
    } = req.body;

    try {
        const portfolio = await portfolioForm.create({
            Name,
            Email,
            ProfileImage,
            Socials,
            Location,
            Aboutme,
            Skills,
            Education,
            Internships,
            Certificates,
            Projects
        });

        console.log("Portfolio Added:", portfolio);
        res.json({ message: "Portfolio added successfully", PortfolioData: portfolio });

    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Failed to add portfolio" });
    }

}