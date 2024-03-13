import  express  from "express";
import { LoginUsers } from "../controllers/loginControllers.js";

const routes = express.Router()

routes.post("/",LoginUsers)

export default routes;