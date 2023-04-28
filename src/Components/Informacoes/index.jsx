import { Container } from "./style";
import iconFeliz from '../../Images/feliz.png'
import iconEmail from '../../Images/email.png'
import iconIg from '../../Images/ig.png'
import iconWhats from '../../Images/wpp.png'


export function Informacoes(){


    return(
        <Container>

            <section>
                <img src={iconFeliz} alt="" />
                <h1>Meu nome</h1>
                <p>Felipe Uenes</p>
            </section>
            <section className="email">
                <img src={iconEmail} alt="" />
                <h1>E-mail</h1>
                <p>uenesdesigner@gmail.com</p>
            </section>
            <a href="https://instagram.com/felipe_ruah?igshid=YmMyMTA2M2Y=" target="_blank" >
            <section>
                <img src={iconIg} alt="" />
                <h1>Instagram</h1>
                <p>@felipe_ruah</p>
            </section>
            </a>
           <a href="https://wa.me/5588997654610?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+seu+servi%C3%A7o%21" target="_blank" >
           <section>
                <img src={iconWhats} alt="" />
                <h1>WhatsApp</h1>
                <p>(88) 99765-4610</p>
            </section>
           </a>
        </Container>
    )
}