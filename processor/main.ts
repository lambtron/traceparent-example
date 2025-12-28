import express from "npm:express";

const app = express();

app.get("/process", (req, res) => {
    // Deno's OTel bridge will automatically detect the traceparent header
    const traceHeader = req.headers["traceparent"];
    console.log(`Processor: Received task. Traceparent: ${traceHeader}`);

    res.json({ status: "success", traceId: traceHeader });
});

app.listen(3001, () => console.log("Processor listening on 3001"));
