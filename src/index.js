import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from "./components/globalStyles/globalStyles";
import store from "./store/store";
import {Provider} from "react-redux";
import ThemeProviderConnected from "./components/themeProviderConnected/themeProviderConnected";
import Appbar from "./components/appbar/appbar";
import {BrowserRouter as Router} from "react-router-dom";
import TopLevelRoutes from "./routes/topLevelRoutes";
import Footer from "./components/footer/footer";
import StickyAppbar from "./components/appbar/stickyAppbar/stickyAppbar";
import AuthCheck from "./components/authCheck/authCheck";
import MobileAppbar from "./components/mobileAppbar/mobileAppbar";
import Cart from "./components/cart/cart";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProviderConnected>
            <Router>
                <div>
                    <GlobalStyles/>
                    <Appbar/>
                    <StickyAppbar/>
                    <MobileAppbar/>
                    <AuthCheck>
                        <TopLevelRoutes/>
                    </AuthCheck>
                    <Footer/>
                    <Cart/>
                </div>
            </Router>
        </ThemeProviderConnected>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
