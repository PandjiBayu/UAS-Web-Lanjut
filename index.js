const express = require("express");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Import routes
const watchRoutes = require("./routes/watchRoutes");

// Use the routes
app.use("/watch", watchRoutes);

app.listen(3000, () => console.log(`Server is running on port 3000....`));
