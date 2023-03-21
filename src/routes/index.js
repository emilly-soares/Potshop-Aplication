import React from 'react';
import Login from '../pages/Login/index';
import { BrowserRouter, Switch } from 'react-router-dom';
import RegisterUsers from '../pages/RegisterUsers/index';
import ManagementProducts from '../pages/ManagementProducts/index';
import ManagementUsers from '../pages/ManagementUsers/index';
import Home from "../pages/Home/index";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Route from './Route';
import Update from '../pages/UpdateProducts/index';
export default function Routes() {
   return (

      <BrowserRouter>
         <Switch>

            <Route path="/cadastro" component={RegisterUsers} />
            <Route path="/login" component={Login} />
            <>
               <Menu />

               <Route exact path="/" component={Home} />
               <Route path="/products" component={ManagementProducts} />
               <Route path="/profile" component={ManagementUsers} />
               <Route path="/update" component={Update} />
               <Footer />
            </>
         </Switch>
      </BrowserRouter>

   );
}