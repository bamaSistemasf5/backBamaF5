import  express  from "express";
import { LoginUsers } from "../controllers/loginControllers.js";

const routes = express.Router()

routes.get("/",LoginUsers)

export default routes;