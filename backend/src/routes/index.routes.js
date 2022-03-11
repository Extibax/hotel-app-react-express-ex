/* Modules */
import { Router } from "express";

/* Routes */
import hotel_routes from "./hotel.routes";

/* Initialization */
const router = Router();

/* External routes */
router.use("/hotel", hotel_routes);

/* Routes */
router.get("/", (req, res) => {
  res.status(200).send({
    message: "Index route",
  });
});

export default router;
