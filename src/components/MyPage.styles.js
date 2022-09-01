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
position:fixed;
height:70%;
width:45%;
top:15%;
left:10%;
vertical-align: middle;
background-color:blue;
@media ${devices.desktop} {
    Immg{
        max-width: 1500px;
        display:none;}
    
}`;
