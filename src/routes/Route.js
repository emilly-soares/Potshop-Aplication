import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function RouteWrapper({ component: Component, isPrivate = false, ...rest }) {

   const signed = !!localStorage.getItem("@POTSHOP/token");

   if (!signed && isPrivate) {
      return <Redirect to="/" />
   }
   /*
      if (signed && !isPrivate) {
         return <Redirect to="/" />
      }*/

   return <Route {...rest} component={Component} />;
};