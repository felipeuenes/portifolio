import { Container } from "./style";
import iconReact from '../../Images/React-icon.png'
import iconCSS from '../../Images/css.png'
import iconJS from '../../Images/js.png'
import iconNode from '../../Images/node-js.png'
import iconFigma from '../../Images/figma.png'
import iconHTML from '../../Images/html.png'


export function Habilidades() {
    
    return(
        <Container>

            <h1>Habilidades</h1>

            <div className="hab">
                <section><img src={iconReact} alt="react" /></section>
                <section><img src={iconCSS} alt="react" /></section>
                <section><img src={iconJS} alt="react" /></section>
                <section><img src={iconNode} alt="react" /></section>
                <section><img src={iconFigma} alt="react" /></section>
                <section><img src={iconHTML} alt="react" /></section>
            </div>

        </Container>
    )
}