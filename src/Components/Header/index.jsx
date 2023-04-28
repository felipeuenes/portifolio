import { Container } from "./style";
import menuIcon from '../../images/menu.png'

export function Header(){


    return(

        <Container>
            
            <section>
            <h2 id="titulo">Portifólio</h2>

            


            </section>
            <section>
            <ul>
                <li><a href="">Home</a></li>
                <li>Sobre</li>
                <li>Habilidades</li>
                <li>Projetos</li>
                <li>Cursos</li>
            </ul>
            </section>
            {/* <section>
                <img src={menuIcon} alt="" srcset="" id="menuIcon"/>
            </section> */}


        </Container>
    )
}