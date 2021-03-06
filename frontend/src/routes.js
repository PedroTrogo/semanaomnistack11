import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon/Logon";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import CrateIncidents from "./pages/Incidents/CreateIncidents";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={CrateIncidents} />
            </Switch>
        </BrowserRouter>
    );
}

