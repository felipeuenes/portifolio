import styled from "styled-components";


export const Container = styled.div`

    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20.0rem;

    position: fixed;
    top: 0;
    width: 100%;
    height: 6.0rem;
    background-color: black;

    border-bottom: .1rem solid white;
    
    
   
    #titulo{
        color: #FCA311;
        font-family: 'Montserrat', sans-serif;
        font-size: 2.4rem;
    }

    #menuIcon{
        width: 3.0rem;
    }

    ul{
       display: flex;
       color: white;
       list-style: none;
       gap: 4.0rem;
       

       
    }
    
`;