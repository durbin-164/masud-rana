import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";

export default class RouteUtil {
    static getRouteSwitch(routes) {
        const { reactRoutes, defaultRoute } = routes;
        return (
            <Switch>
                {RouteUtil.getReactRoutes(reactRoutes)}
                <Redirect to={defaultRoute.path} />
            </Switch>
        );
    }

    static getReactRoutes(routeObj) {
        return routeObj.map((route, ind) => <Route key={ind} path={route.path} exact component={route.component} />);
    }
}
