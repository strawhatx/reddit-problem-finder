import { Router } from "express";
//import { CheckAuth } from "../middleware/checkAuth";
import { RedditController } from "../controllers/reddit-controller";

const router = Router();
const routes = new RedditController();

//router.get("/", CheckAuth, routes.getUsers);


export const RedditRoutes = router;

