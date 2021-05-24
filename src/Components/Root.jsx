import React, {Suspense} from 'react';
import {
    HashRouter,
    Switch,
    Route
} from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
// import Home from './Login/view/Home';
const Home = React.lazy(async () =>  import('./Login/view/Home'));

export default function Root(){
    return(
        <>
            <HashRouter>
                <Switch>
                    <CookiesProvider>
                    <Route exact path="/">
                       <Suspense fallback={<h2 style={{textAlign: 'center'}}>Loading</h2>}>
                            <Home />
                        </Suspense> 
                    </Route>
                    </CookiesProvider>
                </Switch>
            </HashRouter>
        </>
    );
}