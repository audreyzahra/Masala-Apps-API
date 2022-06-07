const Summarize = require("../Model/SummarizeModel");

const addSummarize =  async(req, res, next) => {
    try {
        const createdDate = new Date().toISOString();
        const {
            userID,
            username,
            caption,
            location,
            summarize,
            typeSummarize,
            category
            // createdBy
        } = req.body

        const newSummarize = new Summarize ({
            userID,
            username,
            caption,
            location,
            summarize,
            typeSummarize,
            category,
            createdDate,
            // createdBy
        })

        await newSummarize.save();
        res.json({
            status:'true',
            message: 'success', 
            newSummarize
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status:'false',
            message: 'Internal Server Error'
        });
    }
}

const getSummarize = async(req, res, next) => {
    try {
        const getAllSummarize = await Summarize.findAll({});

        const {
            userID,
            username,
            caption,
            location,
            summarize,
            typeSummarize,
            category
            // createdBy
        } = req.body

        const getSummmarizeLocation = await Summarize.findAll({
            where: {location: location}
        })

        if (location !== undefined) {
            res.json({
                status:'true',
                message: 'success', 
                getSummmarizeLocation
            });
        }
        else {
            res.json({
                status:'true',
                message: 'success', 
                getAllSummarize
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status:'false',
            message: 'Internal Server Error'
        });
    }
}

const getSummarizeByID =  async(req, res, next) => {
    try {
        const id = req.params.id;

        const getSummarize = await Summarize.findOne({
            where: { userID:id }
        });

        if (id !== undefined) {
            res.json({
                status: 'true',
                message: 'success',
                getSummarize
            });
        }

        else {
            res.status(404).json({
                status: 'false',
                message: "Summarize doesn't found"
            });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            status:'false',
            message: 'Internal Server Error'
        });
    }
}

module.exports = {
    addSummarize,
    getSummarize,
    getSummarizeByID
}