import styling from "styled-components";
const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
// export const DO = styling.div`
// font-size=22px'`;
// export const AR = styling.div`
// display: inline-block;
// font-weight: 200;
// color: rgb(1, 104, 250)`;

export const Immg = styling.img`
height:450px;
width:600px;

@media ${devices.desktop} {
    Immg{
        max-width: 1500px;
        display:none;}
    
}`;
export const ImageSec = styling.div`
display:flex;
flex-direction:column;
position:fixed;
top:10%;
left:5%;
bottom:15%;
font-size:small;
text-align:left;

`;
export const A = styling.a`
text-decoration:none;
color:rgb(1, 104, 250)`;
