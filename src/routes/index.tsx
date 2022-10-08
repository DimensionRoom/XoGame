import { useRoutes } from "react-router-dom";
import { routes } from "./routeObject";


export default function RenderRoute() {
    return useRoutes(routes)
}