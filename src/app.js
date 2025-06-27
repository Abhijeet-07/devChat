const express = require("express");

const app = express();
app.use("/test", (req, res) => {
  res.send("Hello from serversss");
});

app.listen(3000, () => {
  console.log("server is listening on PORT 3000");
});
