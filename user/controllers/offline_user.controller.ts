const config = require('../../config/config');

const address = `http://127.0.0.1:${config.server.mobilePort}`;
var aboutAcademic = (req, res)=>{
    res.status(200).json( [
        {
            title: "BasketBall",
            imageUrl: `${process.env.Address || address}/public/img008.png`
        },
        {
            title: "FootBall",
            imageUrl: `${process.env.Address || address}/public/img0010.png`
        },
        {
            title: "Running",
            imageUrl: `${process.env.Address || address}/public/img0013.png`
        }
    ]);
}
var aboutSport = (req, res)=>{
    res.status(200).json( [
        {
            title: "Students competitions",
            imageUrl: `${process.env.Address || address}/public/img001.png`
        },
        {
            title: "FootBall",
            imageUrl: `${process.env.Address || address}/public/img002.png`
        },
        {
            title: "Running",
            imageUrl: `${process.env.Address || address}/public/img003.png`
        }
    ]);
}

var homeNews = (req, res)=>{
    res.status(200).json( [
        {
            title: "Resumption PostPoned",
            imageUrl: `${process.env.Address || address}/public/img006.png`,
            details: "Resumption has been postponed till further notice"
        },
        {
            title: "FootBall Competition",
            imageUrl: `${process.env.Address || address}/public/img007.png`,
            details: "Football competition will hold on _/_/_"
        },
        {
            title: "Running",
            imageUrl: `${process.env.Address || address}/public/img012.png`,
            details: "Running competition will hold on _/_/_"
        }
    ]);
}

module.exports = {
    homeNews: homeNews,
    aboutAcademic: aboutAcademic,
    aboutSport: aboutSport,
};