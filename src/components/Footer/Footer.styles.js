import styling from "styled-components";

export const FOOT = styling.footer`
font-size:13px; 
display:flex; 
align-items: center;
flex-direction:row;
justify-content:space-between;
border-top: 1px solid rgba(72, 94, 144, 0.16);
color: rgb(99, 115, 136);
line-height: 1.5;
position:fixed;
top:93%;
left:0;
right:0;
font-size:12px;
`;
export const A = styling.a`
text-decoration:none;
color:black;
padding:10px;
`;
export const UL = styling.div`
display: inline-flex;
padding-left: 0px;
margin-bottom: 0px;
list-style: none;`;
export const PP = styling.div`
display:inline-block;
padding:10px;
`;
