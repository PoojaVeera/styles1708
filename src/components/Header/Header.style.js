import styling from "styled-components";
export const HEAD = styling.header`
position: fixed;
top:0;
right:0;
left:0;
align-items: center;
height: 10%;
display:block;
padding: 0px;
justify-content: flex-start;
box-sizing:border-box;  
border-bottom: 1px solid rgba(72, 94, 144, 0.16);
vertical-align: middle;
`;
export const UL = styling.ul`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
position:fixed;
width:100%;`;
export const LI = styling.li`
display:inline-block;
padding:10px;
text-align:center;
float:left;`;
export const NAVBAR = styling.nav`
position:fixed;
top:2%;
left:22%;
`;
export const ICONS = styling.div`
position: fixed;
right:1%;
top:2%;
padding:10px;
`;
export const DOAR = styling.div`;
    font-weight: 300;
   letter-spacing: -1px;
   position:fixed;
  color: rgb(3, 26, 97);
  left:2%;
  top:0%;
  padding:5px;
  `;
