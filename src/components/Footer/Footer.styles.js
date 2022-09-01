import styling from "styled-components";

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
text-decoration:none;
`;
export const SUBFOOT2 = styling.div`
position:fixed;
left:0%;
right:80%;
`;
export const A = styling.a`
text-decoration:none;`;
