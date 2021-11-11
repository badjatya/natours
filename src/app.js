const express = require("express");
const fs = require("fs");
const { stringify } = require("querystring");
const app = express();

// express middlewares
app.use(express.json())

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`));

app.get("/api/v1/tours", (req,res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    })
});

app.post("/api/v1/tours", (req,res) => {
    try {
        const newTour = {
            id: tours.length + 1,
            ...req.body
        }
    
        tours.push(newTour);
        fs.writeFileSync(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours))
    
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    } catch (error) {
        res.send(error)
    }
});

app.get("/api/v1/tours/:id", (req,res) => {

    const tour = tours.find(tour => tour.id === parseInt(req.params.id));

    if(!tour) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid id"
        })
    }

    res.status(200).json({
        status: "success",
        data: {
            tour
        }
    })
});


app.listen(5000, () => {
    console.log(`Listening at http://localhost:${5000}`);
})