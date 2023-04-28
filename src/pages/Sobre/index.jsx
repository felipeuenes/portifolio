import { Container } from "./style";
import iconFeliz from '../../Images/feliz.png'
import { Informacoes } from "../../Components/Informacoes";



export function Sobre(){


    return(
        <Container>
            <section>

            <h1>Sobre</h1>
            </section>
            <section>
                <p>
                Sou Designer Gráfico com atividades em programas do pacote Adobe (Photoshop, After Effects, Abobe Premiere) e fiz um curso de desenvolvimento Web, com as tecnologias REACT (Front-End) e NodeJS (Back-End) no CVT de Jucás/CE (CENTEC). Me encontro apto a desenvolver WEBSITES e trabalhar na criação de sistemas WEB HTML, CSS, JavaScript, Banco de Dados (SQL)
                </p>
            </section>
            
            <Informacoes/>

        </Container>
    )
}