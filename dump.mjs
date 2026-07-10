import { createServer } from "http";

const d = () => `[${new Date().toISOString().slice(0, 23).replace('T', ' ')}]`;

async function dump(req, res) {
  console.log(d(), req.method, req.url);
  console.log(req.headers);

  req.on('data', c => {
    process.stdout.write(c);
  });

  req.on('end', c => {
    console.log(d(), '-- end --', req.method, req.url);
    res.writeHead(200).end('');
  });
}

createServer(dump).listen(process.env.PORT || 5000);
