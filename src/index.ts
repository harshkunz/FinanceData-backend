import express from "express";
import ENV  from './config/env';
import { globalLimiter } from "./middlewares/rateLimiter";

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

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
    console.log(`check http://localhost:${PORT}`);
})