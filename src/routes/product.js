import express from "express";
import {
  create,
  findNodesByName,
  get,
  getAll,
  remove,
  updatePatch,
} from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", get);
router.get("/search/:name", findNodesByName);
router.post("/", create);
router.patch("/:id", updatePatch);
router.delete("/:id", remove);
// , checkPermission
export default router;
