
export interface IRoutes {
    key: string;
    name?: string;
    path: string;
    icon?: any;
    isPrivateLink?: boolean;
    children?: IRoutes[];
    element?: any;
}