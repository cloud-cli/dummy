import { createServer } from "http";

async function dump(req, res) {
  const body = Buffer.concat(await req.toArray()).toString("utf8");
  console.log(`[${new Date().toISOString()}]`, req.method, req.url);
  console.log(req.headers, body);
  res.end(body);
}

createServer(dump).listen(process.env.PORT || 5000);
