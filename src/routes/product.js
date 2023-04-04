import express from "express";
import {
  create,
  getAll,
  getDetail,
  remove,
  update,
} from "../controllers/product";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getDetail);
router.post("/", create);
router.patch("/:id", update);
router.delete("/:id", remove);
export default router;
