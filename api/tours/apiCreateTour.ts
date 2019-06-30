import { RequestHandler } from 'express';

export const apiCreateTour: RequestHandler = (req, res, next) => {
    const newTour = {
        id: req.body.id,
        location: req.body.location || "",
        tourTitle: req.body.tourTitle || "",
        tourCategory: req.body.tourCategory || "",
        tourDescription: req.body.tourDescription || "",
        price: req.body.price || "",
        currency: req.body.currency || ""


    }
};