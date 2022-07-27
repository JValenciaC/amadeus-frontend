import styled from "styled-components";

export const FlightCard = styled.div`
  width: 805px;
  height: 610px;
  margin: 100px auto;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const FlightCardHeader = styled.div`
    height: 250px;
    width: 100%;
    background: linear-gradient(to bottom, #264b76 0%, #002c5f 100%);
    padding: 30px 50px;
    border-bottom: 7px solid #6dbe47;
    position: relative;
`
export const FlightLogo = styled.img`
      height: 110px;
      width: 100%;
      img {
        width: 150px;
      }
    `;

export const FlightData = styled.div`
      height: auto;
      border-top: 2px solid #3e5177;
      padding-top: 1em;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      text-align: left;
      span {
        display: block;
      }`

export const Title = styled.h1`
        color: #838ea8;
        font-size: 14px;
      `

export const Detail = styled.div` 
        font-size: 18px;
        padding-top: 3px;
        color: white;
      `

export const FlightCardContent = styled.div`
    width: 100%;
    height: auto;
    display: inline-block;
`
export const FlightRow = styled.div`
      width: 100%;
      padding: 50px 50px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;`

export const Plane = styled.div`
        text-align: center;
        position: relative;
        img {
          width: 90px;
        }
        &:before {
          content: "";
          width: 135px;
          height: 3px;
          background: #efefef;
          position: absolute;
          top: 45px;
          left: -75px;
        }
        &:after {
          content: "";
          width: 135px;
          height: 3px;
          background-color: #efefef;
          position: absolute;
          top: 45px;
          right: -75px;
        }`


export const FlightFrom = styled.div`
      text-align: left;
      float: left;
      span {
        display: block;
      }

`

export const FlightTo = styled.div`
      text-align: right;
      float: right;
    span {
        display: block;
      }
    `
export const FromToCode = styled.div`
      font-size: 60px;
      color: #002c5f;
      font-weight: 200;`

export const City = styled.div`
        font-size: 18px;
         color: #002c5f;
         font-weight: 400;
`
export const FlightDetailsRow = styled.div`

 width:100%;
      display:grid;
      padding: 30px 50px;
      grid-template-columns: 1fr 1fr 1fr; 
text-align: center;
      span{
        display:block;
      }
      .title{
        color:#6a8597;
        font-size:16px;
        letter-spacing: 3px;
       }
      .detail{
        margin-top:.2em;
        color:#002C5F;
        font-size:18px;
      }
      .flight-operator{
        text-align:left;
        float:left;
      }
      .flight-class{
        float:right;
        text-align:right;
      }
      .flight-number{
        padding-left:80px;
      }
`;

export const FlightDetailsTitle = styled.div`
  color: #6a8597;
        font-size: 16px;
        letter-spacing: 3px;`

export const FlightDetailsText = styled.div`
  
        margin-top: 0.2em;
        color: #002c5f;
        font-size: 18px;
`
export const FlightOperatorTitle = styled.div`
        text-align: left;
        float: left;`




export const FlightOperatorText = styled.div`
        text-align: left;
        float: left;`

export const FlightClassText = styled.div`
        float: right;
        text-align: right;`

export const FlightNumberText = styled.div`
padding-left: 80px;`
