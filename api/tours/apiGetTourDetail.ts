import { DataStore } from '../../data/data';
import { RequestHandler } from 'express';
import { TourDetail } from '../../model/shared/tourDetail';

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourID = req.params.id;
    const selectedTour = DataStore.tours.find((element: any) => element.id)
    if(selectedTour) {
        const selectedReview = DataStore.reviews.filter((item: any) => item.tourID == tourID);
        res.json(new TourDetail(selectedTour, selectedReview));
    } else {
        res.json({ "status": "failed", "message": "Element not found"});
    }
}