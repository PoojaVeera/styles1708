import styling from "styled-components";

export const FORM = styling.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:30%;
line-height:2.0;
text-align:left;
font-family:"IBM Plex Sans", sans-serif;
font-size:small;
margin:0px;
height:100%;
`;

export const SIN = styling.div`
color:#001737;
font-size:24px;
display:inline;
margin:0px 0px 0px;
padding:0px`;

export const WELCOME = styling.div`
font-size: 16px;
color: #8392A5;
margin:0px 0px 0px;
padding:0px;
`;

export const INBOX = styling.input`
display: block;
width: 95%;
height: 15px;
line-height: 1.5;
padding:7px 15px;
color: rgb(27, 46, 75);
background-color: rgb(255, 255, 255);
background-clip: padding-box;
border: 1px solid rgb(192, 204, 218);
border-radius: 5px;
`;

export const PASSWORD = styling.div`
line-height: 1.5;
color: rgb(0, 23, 55);
display:flex;
justify-content:space-between;
`;

export const BUTTONSI = styling.div`
display: block;
align-items: center;
justify-content: center;
text-align: center;
line-height: 1.5;
border: 1px solid rgb(4, 40, 147);
color: rgb(255, 255, 255);
background-color: rgb(4, 40, 147);
padding: 7px 15px;
width: 95%;
background-clip: border-box;
border-radius: 4px;
margin-top:8px`;

export const ButtonT = styling.div`
display: block;
align-items: center;
justify-content: center;
text-align: center;
line-height: 1.5;
border: 1px solid rgb(0, 167, 230);
background: transparent;
color: rgb(0, 167, 230);
padding: 7px 15px;
width: 95%;
border-radius:4px;
margin-top: 8px;
background-clip: border-box;
 `;
export const BUTTONF = styling.div`
display: block;
align-items: center;
justify-content: center;
text-align: center;
line-height: 1.5;
border: 1px solid rgb(64, 100, 172);
background: transparent;
color: rgb(64, 100, 172);
padding: 7px 15px;
width: 95%;
border-radius: 4px;
background-clip: border-box;
`;

export const P = styling.p`
display:flex;
width:100%;
justify-content:center;
`;
export const LINE = styling.div`
display: block;
flex: 1 1 0%;
height: 1px;
background-color: rgb(229, 233, 242);
margin: 10px;  
`;
export const OR = styling.div`
position: relative;
display: flex;
align-items: center;
color: rgb(131, 146, 165);
font-size: 10px;
font-weight: 500;
letter-spacing: 0.5px;
margin: 15px 0px;
`;
