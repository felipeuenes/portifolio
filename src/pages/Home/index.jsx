import { Container } from "./style";
import github from '../../Images/github.png'
import linkedn from '../../Images/linkedn.png'
import fundo from  '../../Images/fundo.jpg'
import './style.css'

export function Home() {
    return(
        <Container>
            {/* <img src={fundo} alt="" id="fundo"/> */}
                <article id="text">
                    <section>
                        <h2>OLÁ, EU SOU</h2>
                        <h1>FELIPE UENES</h1>
                        <h2>DESENVOLVEDOR FULL STACK <br/>E DESIGNER GRÁFICO<br/><br/></h2>                    
                
                    
                    </section>
                    <section className="buttons">
                        <button id="bt"> <a href="https://www.linkedin.com/in/felipeuenes/" target="_blank"> <img src={linkedn} alt="" /> Linkedn </a></button>
                        <button id="bt"> <a href="https://github.com/felipeuenes" target="_blank"> <img src={github} alt="" /> GitHub</a></button>
                    </section>
                </article>


        </Container>
    )
}