import styling from "styled-components";

export const FOOT = styling.footer`
font-size:13px; 
display:flex; 
align-items: center;
justify-content:space-between;
border-top: 1px solid rgba(72, 94, 144, 0.16);
color: rgb(99, 115, 136);
line-height: 1.5;
position:fixed;
top:90%;
left:0;
right:0;
`;

export const A = styling.a`
text-decoration:none;
color:black;
padding:10px;
`;
