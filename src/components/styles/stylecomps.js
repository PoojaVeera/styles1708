import styling from "styled-components";

export const HEAD = styling.header`
    height: 60px;
    color: white;
    position:relative;
    padding: 20px;
    background-color:#F25022 ;
    font-family: Times New Roman;
    img{
      width: 90px;
      height: 60px;
      left:5%;
      position: absolute;
    }
  `;
export const BAR = styling.div`
  background: transparent;`;

export const Immg = styling.img`
    position:fixed;
    height:70%;
    width:40%;
    top:100px;
    left:10px;
`;

export const SIN = styling.div`
text-align:left;
font-size:20px;
text-shadow: 5px 5px 5px grey;
`;
export const FORM = styling.div`
    color: black;
    position:fixed;
    left: 60%;
    top: 20%;
    bottom:15%;    
    right:20%;
    text-align:justify;
    font-size: 12px;
    font-family:sans serif;
    `;
export const BUTTONG = styling.div`
    color: purple;
    border: 1px solid purple;
    text-align:center;
    padding:10px;
    font-size:15px;
    `;
export const BUTTONF = styling.div`
    color:blue;
    border: 1px solid blue;
    text-align:center;
    padding:10px;
    font-size:15px;`;

export const BUTTONSI = styling.div`
    background-color:blue;
    border: 1px solid blue;
    color:white;
    text-align:center;
    padding:10px;
    font-size:15px;`;
export const FOOT = styling.footer`
color:black;
position : fixed;
left: 0;
bottom: 0;
width: 100%;
background-color:#F25022 ;
text-align:left;
`;
