"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var data_1 = require("./data/data");
var app = express_1.default();
// console.log(JSON.parse(JSON.stringify(DataStore.tours)));
app.get("/", function (req, res, next) {
    res.send("Tour Booking API");
});
app.get("/tours", function (req, res, next) {
    res.json(data_1.DataStore.tours);
});
app.post("/tours", function (req, res, next) {
    res.send("Add a new tour...");
});
app.listen(process.env.PORT || 8091, function () { console.log("Server started..."); });
