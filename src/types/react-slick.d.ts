declare module "react-slick" {
    import * as React from "react";

    export interface Settings {
        [key: string]: any;
    }

    const Slider: React.ComponentType<any>;
    export default Slider;
}
