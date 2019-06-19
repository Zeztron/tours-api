import express from "express";
const app = express();

import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';

app.get("/", (req, res, next) => {
    res.send('TourBooking API')
});

app.get("/tours", apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

app.listen(process.env.PORT || 8091, () => {console.log("Server started...")});