import { Header } from "../Components/Header";
import { Container } from "./style";

import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { Habilidades } from "../pages/Habilidades";
import { Projetos } from "../pages/Projetos";


export function App(){

    return(
        <Container>
            <header>            
                <Header/>
            </header>
                <main>
                    <Home />
                    <Sobre/>
                    <Habilidades/>
                    <Projetos/>
                </main>
           



        </Container>
    )
}