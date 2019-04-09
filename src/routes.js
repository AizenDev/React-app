import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './hoc/layout';
import RegisterLogin from './components/Register_login/index';
import Register from './components/Register_login/register';
import UserDashboard from './components/User';
import Auth from './hoc/auth';
import Shop from './components/Shop/index';
import AddProduct from './components/User/Admin/add_product';
import ManageCategories from './components/User/Admin/manage_categories';
import ProductPage from './components/Product/index';
import UserCart from './components/User/cart';

export default class Routes extends React.Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact component={Auth(Home, null)} />
                <Route path='/registerlogin' exact component={Auth(RegisterLogin, false)} />
                <Route path='/register' exact component={Auth(Register, false)} />
                <Route path='/user/dashboard' exact component={Auth(UserDashboard, true)} />
                <Route path='/shop' exact component={Auth(Shop, null)} />

                <Route path='/user/cart' exact component={Auth(UserCart, true)} />

                <Route path='/product_detail/:id' exact component={Auth(ProductPage, null)} />

                <Route path='/admin/add_product' exact component={Auth(AddProduct, true)} />
                <Route path='/admin/manage_categories' exact component={Auth(ManageCategories, true)} />
            </Switch>
        </Layout>
    )
  }
}
