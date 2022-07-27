import styled from "styled-components";

//   SearchBoxButton,
//   SearchBoxContainer,
//   SearchBoxIconImage,
// HeaderSearchText, HeaderSearchItem


export const SearchBoxContainer = styled.div`
    display: flex;
    flex-direction: row; 
    with: 100px;
    height: 400px;
    padding: 10px;
    border-radius: 10px;
    background-color: #FFFFFF;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;    
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);  
`;


export const ResultContainer = styled.div`
    display: flex;  
    flex-direction: column; 
    width: 100%;
    height: 100%; 
    padding: 10px;  
    border-radius: 10px;  
    background-color: #FFFFFF;  
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2); 
    margin: 0 auto; 
    margin-top: 100px; 
    margin-bottom: 20px;  
    overflow-y: scroll; 
    overflow-x: hidden; 
    &::-webkit-scrollbar {  
        display: none;
    }
`;  

export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderSearchText = styled.div`
  color: lightgray;
  cursor: pointer;
`;

export const DateForm = styled.div`

  position: absolute;
  top: 10px;
    right: 25%;
  z-index: 2;

`;
export const HeaderSearch = styled.div`
 height: 30px;
padding-top: 10px;
margin-top: 20px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  width: 100%;
  max-width: 1024px;
`;
export const HeaderIcon = styled.img`

  color: lightgray;
`;

export const SearchBoxButton = styled.button`  
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
 
  cursor: pointer;
  color: #FFFEFE;
  background-color: #F1A501;
  border-color: #F1A501;
  border-radius: 10%;

    &:hover {
        background-color: #cd8c01;
        border-color: #cd8c01;
        color: white;   
    }

    &:focus {   
        outline: none;  
    }

    &:active {  
        outline: none;  
    }

    &:disabled {    
        outline: none;
        background-color: #F1A501;
    }

`;

export const SearchBoxIcon = styled.div`    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
    &:hover {
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    }
`;

export const SearchBoxIconImage = styled.img`   
margin: 0 auto;

text-align: center;
order: 2;
flex-direction: row;
align-items: center;
justify-content: center;
dysplay: flex;
width: 1;
height: 100%;
`;

export const SearchBoxIconText = styled.div`    
    width: 100%;
    font-size: 1em;
    text-align: center;
`;

export const Options = styled.div`
    z-index: 2;
    flex-direction: column;
    align-items: center;    
    justify-content: center;  
    display: flex;  
    padding: 10px;
    margin-top: 150px;
    background-color: white;
    color: gray;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`;

export const  OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;

export const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;

    &:hover {   
        background-color: #cd8c01;  
        color: white;           

    }
    &:focus {   
        outline: none;  
    }
    &:active {  
        outline: none;  
    }   
    &:disabled {    
        outline: none;  
        background-color: white;    
        color: #0071c2; 
    }

`;

