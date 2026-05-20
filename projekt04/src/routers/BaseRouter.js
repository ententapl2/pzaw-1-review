import express from "express";

export default class BaseRouter {

    #router;

    constructor() {
        this.#router = express.Router();
    }

    getRouter() {
        return this.#router;
    }

}