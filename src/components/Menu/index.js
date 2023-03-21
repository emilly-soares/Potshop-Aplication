import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import icon from "../Menu/user.png";
import logo from "../../assets/logo.png";
import { logout, userLocal } from '../../services/auth';
import { Container } from './style';

export default function Menu() {
   const TOKEN_KEY = "@POTSHOP/token";
   const USER = "@POTSHOP:user";
   const [userLogin, setUserLogin] = useState([]);
   useEffect(() => {
      async function loadList() {
         let recebeUser = JSON.parse(localStorage.getItem(USER));
         recebeUser.name = recebeUser.name.substring(0, 10) + "...";
         setUserLogin(recebeUser);
      }
      loadList();
   },[]);

   function logoutMenu() {
      if (JSON.parse(localStorage.getItem(TOKEN_KEY) != null)) {
         logout();
         window.location.reload();
      }
   }
   const receber = JSON.parse(localStorage.getItem(USER));
   if (receber == null) {
      return (
         <Container>
            <header className="menuHeader">
               <ul className="menu">
                  <Link to="/login">
                     <li className="topicMenu" style={{ float: "right" }} type="submit" onClick={logoutMenu}>Entrar</li>
                  </Link>
               </ul>
            </header>
         </Container>
      );
   } else

      return (

         <Container>
            <header className="menuHeader">
               <ul className="menu">

                  <Link to="/">
                     <li className="topicMenu"> Inicio </li>
                  </Link>

                  <Link className="topicMenu" to="/products">
                     <li> Produtos </li>
                  </Link>
                  <Link to="/">
                     <li className="topicMenu" type="submit" onClick={logoutMenu}>Sair</li>
                  </Link>
                  <Link to="/profile">
                     <li className="topicMenu"><img src={icon}></img>{userLogin.name}</li>
                  </Link>
               </ul>
            </header>
         </Container>
      );
}