import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom"

import AmericanoComponent from "../Coffee/AmericanoComponent"

export default function () {
    return (
        <Route path="/menu/hotcoffee/americano">
            <AmericanoComponent />
        </Route>
    )
}
