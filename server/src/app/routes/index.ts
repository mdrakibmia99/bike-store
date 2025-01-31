import { Router } from "express";
import authRouter from "../modules/Auth/auth.router";
import adminRouter from "../modules/Admin/admin.router";
import bikeRoutes from "../modules/bikes/bike.route";
import orderRoutes from "../modules/orders/order.route";


const router= Router()
const moduleRoutes=[
    {
        path:"/auth",
        route:authRouter
    },
    {
        path:"/admin",
        route:adminRouter
    },
    {
        path:"/products",
        route:bikeRoutes
    },
    {
        path:"/orders",
        route:orderRoutes
    },

]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;