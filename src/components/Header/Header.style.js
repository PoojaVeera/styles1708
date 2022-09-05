import styling from "styled-components";
export const HEAD = styling.header`
position: fixed;
top:0;
right:0;
left:0;
align-items: center;
height: 10%;
display:flex;
justify-content:space-between;
box-sizing:border-box;  
border-bottom: 1px solid rgba(72, 94, 144, 0.16);
vertical-align: middle;
font-family: "IBM Plex Sans", sans-serif;

`;
export const Do = styling.div`
font-weight: 800;
font-size: 23px;
color: rgb(3, 26, 97);
padding: 10px 10px;
`;
export const Ar = styling.div`
display: inline-block;
font-weight: 300;
font-size: 22px;
color: rgb(1, 104, 250);
padding: 10px 0px;
`;
export const DOAR = styling.div`
font-weight: 700;
font-size: 22px;
letter-spacing: -1px;
display: flex;
padding:20px;
align-items: center;
position: relative;
color: rgb(3, 26, 97);
margin-top: -4px;
`;
export const UL = styling.ul`
list-style-type: none`;

export const LI = styling.li`
display:inline-block;
padding:10px;
`;
export const NAVBAR = styling.nav`
color: rgb(0, 23, 55);`;
export const ICON = styling.div`
padding:8px;
`;
export const ICONS = styling.div`
display:flex;
padding:20px;
`;
