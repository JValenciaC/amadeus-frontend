import styled from "styled-components";

export const PriceInfoCardContainer = styled.div`
    display: flex;  
    flex-direction: column; 
    align-items: center;    
    justify-content: center;    
    width: 100%;    
    height: 100%;   
    background-color: #fff; 
    border-radius: 5px; 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const PriceInfoCardTitle = styled.h1`
    font-size: 1.5rem;  
    font-weight: bold;  
    color: #000;    
    margin-bottom: 10px;    
    @media (max-width: 768px) {
        font-size: 1.2rem;  
    }
`;

export const PriceInfoCardSubTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: bold;  
    color: #000;    
    margin-bottom: 10px;    
    @media (max-width: 768px) { 
        font-size: 1rem;
    }
`;

export const PriceInfoCardDescription = styled.p`
    font-size: 1rem;    
    color: #000;    
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;    
    background-color: #000; 
    margin-bottom: 10px;    
    @media (max-width: 768px) { 
        height: 1px;    
    }
`;

export const PriceInfoCardPrice = styled.p` 
    font-size: 1.5rem;
    font-weight: bold;  
    color: #000;    
    margin-bottom: 10px;    
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;  

export const PriceInfoCardButton = styled.button`   
    font-size: 1rem;    
    color: #fff;    
    background-color: #000; 
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
    @media (max-width: 768px) { 
        font-size: 0.8rem;
    }
`;
