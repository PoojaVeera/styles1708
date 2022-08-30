import styling from "styled-components";

export const HEAD = styling.header`position: relative;
display: flex;
flex-wrap: wrap;
align-items: stretch;
height: 10%;
display:block;
padding: 0px;
justify-content: flex-start;
box-sizing:border-box;  
background-color: rgb(255, 255, 255);
border-bottom: 1px solid rgba(72, 94, 144, 0.16);
`;

export const ICONS = styling.div`
position:fixed;
right:0;
`;
export const DOAR = styling.div`;
    font-weight: 300;
   letter-spacing: -1px;
   position:fixed;
  color: rgb(3, 26, 97);
  left:5%;
  top:0%;
  padding:5 px;

  `;

// export const DO = styling.div`
// font-size=22px'`;
// export const AR = styling.div`
// display: inline-block;
// font-weight: 200;
// color: rgb(1, 104, 250)`;

export const Immg = styling.img`
position:fixed;
height:70%;
width:45%;
top:15%;
left:10%;
vertical-align: middle;
background-color:blue;
`;

export const FOOT = styling.footer`
font-size:13px; 
display:block; 
border-top: 1px solid rgba(72, 94, 144, 0.16);
color: rgb(99, 115, 136);
line-height: 1.5;
position:fixed;
top:90%;
left:0;
right:0;
height:20%`;
export const SUBFOOT1 = styling.div`
position:fixed;
right:10%;
`;
export const SUBFOOT2 = styling.div`
position:fixed;
left:0%;
right:80%;
`;
