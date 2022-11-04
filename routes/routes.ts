import { Router } from "https://deno.land/x/oak/mod.ts";
import * as path from "https://deno.land/std@0.146.0/path/mod.ts";
import {
  getTodoItem,
  getTodos,
  saveTodo,
  updateTodoItem,
  deleteTodoItem,
} from "../controllers/todos.ts";

import { getArticles } from "../controllers/articles.ts";

import { getRecommendationsSuggestions } from "../controllers/suggestions.ts";

// A helper function to get the file contents
// of a specific file path in the public directory
function getPublicFile(...filePath: string[]): Promise<Uint8Array> {
  return Deno.readFile(path.join("./public", ...filePath));
}

const router = new Router();

router.get("/", async (ctx, next) => {
  // Set the contents of the "index.html" file to the response body
  ctx.response.body = await getPublicFile("index.html");

  // Set the appropriate resopnse type for HTML
  ctx.response.type = "text/html";

  // This isn't technically needed here, but it's good practice
  // because other middleware might need to run in more complicated routes
  await next();
});

router
  .get("/todo", getTodos)
  .get("/todo/:id", getTodoItem)
  .post("/todo", saveTodo)
  .put("/todo/:id", updateTodoItem)
  .delete("/todo/:id", deleteTodoItem)
  .get("/articles", getArticles)
  .get("/suggestions", getRecommendationsSuggestions);

export default router;
