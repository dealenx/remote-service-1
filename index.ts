import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const PORT = 4000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(oakCors({ origin: "*" }));

console.log(`App started and listening on ${PORT} `);

await app.listen({ port: PORT });
