import express from "express";
import ENV  from './config/env';
import { globalLimiter } from "./middlewares/rateLimiter";
import { db } from "./config/db";

import adminUsersRoutes from "./routes/admin.users.routes";
import adminTransactionsRoutes from "./routes/admin.transactions.routes";
import dashboardRoutes from "./routes/dashboard.routes";
import authRoutes from "./routes/auth.routes";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(globalLimiter);


app.use("/admin", adminUsersRoutes);
app.use("/admin/transactions", adminTransactionsRoutes);
app.use("/dashboard/transactions", dashboardRoutes);
app.use("/auth", authRoutes);


app.get("/", (req, res) => {
    res.json({ status: "ok" })
})


const PORT = ENV.PORT;

const server = app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
    console.log(`check http://localhost:${PORT}`);
})

const shutdown = async () => {
    console.log("Shutting down...");

    try {
        await db.$disconnect();
        server.close(() => {
            console.log("server closed!");
            process.exit(0);
        });

    } catch (error) {
        console.error("Shutdown error:", error)
        process.exit(1);
    }
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);