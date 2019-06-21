import express from "express";
import swaggerUI from 'swagger-ui-express';
import * as swaggerDocument from './src/swagger.json';
const app = express();

import { apiGetTours } from './api/tours/apiGetTours';
import { apiGetTourDetail } from './api/tours/apiGetTourDetail';

app.get("/", (req, res, next) => {
    res.send('TourBooking API')
});

app.get("/tours", apiGetTours);

app.get("/tours/:id", apiGetTourDetail);

app.use(
  "/swagger",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocument)
);

app.listen(process.env.PORT || 5500, () => {
    console.log("Server started...");
});