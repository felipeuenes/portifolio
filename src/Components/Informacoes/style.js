import styled from "styled-components";


export const Container = styled.div`

    
    display: flex;
    width: 90%;
    margin: 0 auto;
    gap: 15.0rem;
    text-align: center;
    margin: 0 auto;
    
    @media screen and (max-width: 1000px) {
        flex-direction: column;
       

    }

    p{
        width: 18.0rem;
        font-size: 2.2rem;
        font-weight: 100;
    }

    h1{
        margin-top: 0;
        font-size: 2.2rem;
    }
    section{
        display: flex;
        flex-direction: column;
        width: 17.0rem;
        margin: 0 auto;
        text-align: center;          
    }

    img{
        width: 3.0rem;
        margin: 0 auto;
    }

   .email{
        width: 30.0rem;
    }

    .email p{
        margin-left: 0;
    }
`;