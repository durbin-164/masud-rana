export default class RouteComponent {
    constructor(path, component) {
        this.path = path;
        this.component = component;
    }

    static object(path, component) {
        return new RouteComponent(path, component);
    }
}
