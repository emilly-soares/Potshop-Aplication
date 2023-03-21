import styled from "styled-components";

export const ContainerImg = styled.div`

      .bloco{
         height: 400px;
         width: 31.2%;
         margin: 1%;
         float: left;
        text-align: center;
        z-index: -1;
        -webkit-box-shadow: 0px 0px 8px 2px #e0e0e0;
        -moz-box-shadow: 0px 0px 8px 2px #e0e0e0;
        box-shadow: 0px 0px 8px 2px #e0e0e0;
      }

     .blocoimg{
      width:70%;
      height: 150px;
      margin-top:70px;
      }

      .cat {
        width: 100%;
        margin-top: 20px;
        font-size: 20px;
        text-align:center;
        color: black;
         cursor:pointer;
      }
     
      
@media screen and (max-width: 900px) {
	.bloco {
    height:300px;
		width:48%;
	}
  .blocoimg{
      width:50%;
      height: 70px;
      margin-left:20px;
      margin-right:20px;
      margin-top:50px;
      margin-bottom:0px;
      }
   .cat {
        font-size: 14px;
        color: black;
        cursor:pointer;
      }
}
@media screen and (max-width: 400px) {
        .bloco {
          height:300px;
		      width:90%;
          margin-left:5%;
	      }
      }
`;