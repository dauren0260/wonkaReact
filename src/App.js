import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './containers/header/header'
import Main from './containers/main/main'
import Paletchoco from './containers/product_paletchoco/product_paletchoco'
import ProductDetail from './containers/product_detail/product_detail';
import Workshops from './containers/workshops/workshops';
import Footer from './components/footer/footer';
import { connect } from 'react-redux';
import {
    showDetail
} from './redux/actions';

class App extends Component {

    render() {
        return (
        <div>
            <Header />
            <Switch>
                <Route path="/paletchoco" component={Paletchoco} />
                <Route path={`/product/${this.props.productDetail.path}`} component={ProductDetail} />
                <Route path="/workshops" component={Workshops} />
                <Route component={Main} />
            </Switch>
            <Footer/>
        </div>
        )
    }
}

export default connect(
    state => ({
        productDetail: state.showDetailReducer
    }),
    {showDetail}
)(App)


