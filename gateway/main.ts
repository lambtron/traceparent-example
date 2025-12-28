import express from "npm:express";

const app = express();
// In Deno Deploy, use the actual URL of your deployed processor
const PROCESSOR_URL = Deno.env.get("PROCESSOR_URL") || "http://localhost:3001";

app.get("/", async (req, res) => {
    console.log("Gateway: Handling request...");

    // Deno's fetch automatically injects the 'traceparent' header
    const response = await fetch(`${PROCESSOR_URL}/process`);
    const result = await response.text();

    res.send(`Gateway received: ${result}`);
});

app.listen(3000, () => console.log("Gateway listening on 3000"));
