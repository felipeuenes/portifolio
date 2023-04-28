import styled from "styled-components";


export const Container = styled.div`



    margin-top: 15.0rem;


    h1{
        color: white;
        text-align: center;
    }

    .hab{
        
        margin-top: 5.0rem;
        color: #fff;
        display: grid;
        grid-template-columns: 18.0rem 18.0rem 18.0rem;
        gap: 6.0rem;

        justify-content: center;
        align-items: center;
    }

    .hab section{
        background-color: #444;
        border-radius: 1.6rem;
        width: 18.0rem;
        height: 18.0rem;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .hab section img{
            width: 13.0rem;
           
            
    }

    .hab section:hover{
        scale: 1.05;
        transition: 0.5s;
    }
`;