import { serve } from "bun";

serve({
  fetch(reuest) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hey guuurl", { status: 200 });
    } else if (url.pathname === "/dude") {
      return new Response("Duuuude", { status: 200 });
    } else {
      return new Response("404 Not found", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
