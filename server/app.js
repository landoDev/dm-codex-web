const express = require("express")

const app = express();

const PORT = process.env.PORT || 8080;
const API_PREFIX = "/api/v1";

app.listen(PORT, () => console.log("NAT 20! Server is running..."));


