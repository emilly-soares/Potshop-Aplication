import styled from "styled-components";
import capa from "../Menu/capa.png";

export const Container = styled.div`

.menuHeader{   
  width:100% ;
  height: 400px;
  background: #fff;
  background-image: url(${capa});
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 4px -2px #e0e0e0;
  -moz-box-shadow: 0 4px 4px -2px #e0e0e0;
  -webkit-box-shadow: 0 4px 4px -2px #e0e0e0;
  position: relative;
}
.menu{
   float:right;
   width:40%;
   height: 30px;
   margin-top:365px;
}
.topicMenu{
   float:left;
   color:white;
   width:20%;
   margin-left:5%;
   list-style:none;
}
.topicMenu-btn{
   width: 100px;
   height: 20px;
}
@media screen and (min-width: 100px) and (max-width:600px) {
.menuHeader{
  background-image:linear-gradient();
  background-color: violet;
}
 .menu{
   float:center;
   width:90%;
   height: 30px;
   margin-top:55px;
}
.topicMenu{
   width:20%;
   margin-left:2%;
}
}
@media screen and (min-width: 601px) and (max-width: 950px) {
   .menu{
   float:center;
   width:100%;
   height: 30px;
   margin-top:365px;
}
.menuHeader{
  background-position: center;
}
}





`;