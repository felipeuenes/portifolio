import styled from "styled-components";


export const Container = styled.div`



        /* background-color: black; */
        width: 100%;
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
        
        /* #fundo{
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 0;
        } */

        .buttons{
            width: 27.0rem;
            display: flex;
            margin-top: 0.6rem;
            gap: .6rem;
            
            
           
            
        }
        .buttons button{
            width: 20.0rem;
            padding: .6rem;
            background-color: #FCA31100;
            color: #fff;
            border: .1rem solid #FCA311;
            border-radius: 1.0rem;
            cursor: pointer;
            
        }

        #bt:hover{
            border: .1rem solid #fca311;
            box-shadow: 2px 2px 20px #ffffff33;

            animation-name: escala;
            animation-duration: 0.5s;
            -webkit-animation-fill-mode: forwards;
        }

        @keyframes escala {
            from{
                transform: scale(1);
            }
            to{
                transform: scale(1.05);
            }
        }
       

        .buttons button img{
            width: 2.0rem;
        }

        #text{
            margin-top: 20.0rem;
            position: absolute;
            margin-left: 14.0rem;
        }
       
        section h2{
            color: white;
            font-size: 2.8rem;
            
        }
        section h1{
            color: #FCA311;
            font-size: 5.4rem;

        }

`;