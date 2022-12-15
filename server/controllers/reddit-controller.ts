import { reddit_api } from "../config/axios";
import { Request, Response, NextFunction } from "express";
import { SEARCH_POSTS_EXCEPTION_MESSAGE } from "../messages/reddit";

/**
* Coin Controller
*/

export class RedditController {
    constructor() { }

    async searchPosts(req: Request, res: Response, next: NextFunction) {
        try {
            let last = req.body.last, size = req.body.size, search = req.body.search?.trim(), sort = req.body.sortBy;

            const response = await reddit_api.get(`/search.json?q=${search}&limit=${size}&after=${last}&sort=${sort}`);

            res.status(200).json(response.data);
        }

        catch (error) {
            console.log(error);
            res.status(500).json({ error: SEARCH_POSTS_EXCEPTION_MESSAGE })
        }
    }

}