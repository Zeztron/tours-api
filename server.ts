import express from "express";
import swaggerUI from 'swagger-ui-express';
import * as bodyParser from 'body-parser';
import * as swaggerDocument from './src/swagger.json';
const app = express();
const jsonParser = bodyParser.json();

import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';
import { apiCreateTour } from './api/tours/apiCreateTour'; 

app.get("/", (req, res, next) => {
    res.send('TourBooking API')
});

app.get("/tours", apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

app.post("/tours", jsonParser, apiCreateTour);

app.use(
  "/swagger",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocument)
);

app.listen(process.env.PORT || 5500, () => {
    console.log("Server started...");
});