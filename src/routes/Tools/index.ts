import { Router } from "express";
import { ToolController } from "../../controllers/Tool";

const toolRoutes = Router();

toolRoutes.post("", ToolController.store);
toolRoutes.get("", ToolController.index);
toolRoutes.delete("/:id", ToolController.delete);

export default toolRoutes;
