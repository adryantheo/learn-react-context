import React from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import Home from './Login/view/Home';

export default function Root(){
    return(
        <>
            <HashRouter>
                <Switch>
                    <CookiesProvider>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    </CookiesProvider>
                </Switch>
            </HashRouter>
        </>
    );
}