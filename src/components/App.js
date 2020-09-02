import React, {Component} from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import ImagesCollection from "./ImagesCollection";
import FormValidator from "./FormValidator";
import NavigationComponent from "./NavigationComponent";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

    /*
    * INSTALLED EXTERNAL PACKAGES:
    *
    * 1.The reason react-router-dom is installed here is necessity for navigation between pages
    * 2.reactstrap is installed for having an access to Reactstrap components
    *
    * */

    render() {
        return (
            <BrowserRouter>
                <NavigationComponent/>
                <Switch>
                    <Route path='/imagesCollection' component={() => <ImagesCollection/>}/>
                    <Route exact path='/formValidation' component={() => <FormValidator/>}/>
                    <Redirect to='/imagesCollection'/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default App;