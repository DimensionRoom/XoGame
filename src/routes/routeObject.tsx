import { Outlet, Navigate } from "react-router-dom";
import { IRoutes } from "./route.interface";

//page
import {Home} from "../pages/home";
import {Game} from "../pages/game";

export const routes: IRoutes[] = [
    {
        key: "OUTLET",
        name: "Menu",
        path: "",
        element: <Outlet />,
        children: [
            {
                key: "HOME",
                name: "START PAGE",
                path: "",
                element: <Home/>
            },
            {
                key: "GAME",
                name: "GAME",
                path: "/game",
                element: <Outlet />,
                children: [
                    {
                        key: "GAME",
                        name: "GAME",
                        path: ":gamemode",
                        element: <Game />
                    }
                ]
            }
        ]
    }
];
