const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Route imports
const modelRoutes = require("./routes/modelRoutes");
const variantRoutes = require("./routes/variantRoutes");
const colorRoutes = require("./routes/colorRoutes");
const accessoryRoutes = require("./routes/accessoryRoutes");
const featureRoutes = require("./routes/featureRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: "*", // Allow all origins
    credentials: false, // Disable credentials since we're allowing all origins
  })
);
// Routes
app.use("/api/models", modelRoutes);
app.use("/api/variants", variantRoutes);
app.use("/api/colors", colorRoutes);
app.use("/api/accessories", accessoryRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/categories", categoryRoutes);

// Error handler middleware
const { errorHandler } = require("./middleware/errorHandler");
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
