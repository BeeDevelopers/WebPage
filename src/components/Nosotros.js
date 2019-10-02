import React, { Component } from 'react';
import Titulo from './Titulo';
import Separador from './Separador';
import Miembro from './Miembro';

import style from './css/nosotros.module.css';

export default class Nosotros extends Component {
    state = {  }
    render() {
        return (
            <div className={style.nosotros}>
                <Titulo pre_titulo="npm install " titulo="BeeDevelopers" post_titulo="" leyenda="Innovadores."/>
                <div className={style.container}>
                    <img alt="grupo2" src="/img/grupo2.jpeg"/>
                    <p>
                    <h2>Desarrolla tus conocimientos. </h2>
                    Sé parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.
                    </p>
                </div>
                <div className={style.mision}>
                    <h1>Misión</h1>
                    <p>
                    Organizar actividades académicas, de difusión y de vinculación, enfocadas a complementar el perfil de egreso de los estudiantes de la Licenciatura en Ingeniería en Sistemas Computacionales (LISC) de la DICIS-UG, con la finalidad de generar una cohesión estudiantil que ayude a que la LISC tenga una identidad propia dentro de la división y la universidad. Lo anterior en colaboración con otras organizaciones estudiantiles, académicas y profesionales, dentro y fuera de la universidad, fomentando siempre el aprendizaje mutuo y la convivencia entre estudiantes.
                    </p>
                </div>
                <div className={style.vision}>
                    <h1>Visión</h1>
                    <p>
                    Consolidar una comunidad de estudiantes y egresados de la LISC para el desarrollo de proyectos y actividades académicas, de difusión y de vinculación, que permitan que la esencia de la LISC y de la UG se extienda hacia la sociedad.
                    </p>
                </div>

                <Titulo pre_titulo="" titulo="Nuestro Equipo" post_titulo="" leyenda="Compromiso y liderazgo."/>
                <div className={style.miembro_container}>
                    <Miembro
                        img="/img/alan.jpg"
                        nombre="Alan Álvarez"
                        cargo="Presidente"
                        descripcion="Desarrollo Web. React.js. Vue.js. JavaScript. Node. Python. C++. Java."
                    />
                    <Miembro
                        img="/img/valeria.png"
                        nombre="Valeria Cortés"
                        cargo="Vicepresidente"
                        descripcion="Desarrollo Web. React.js. Vue.js. JavaScript. Node. Python. C++. Java."
                    />
                    <Miembro
                        img="/img/manuel.jpeg"
                        nombre="Manuel Espinoza"
                        cargo="Secretario"
                        descripcion="Desarrollo Web. React.js. Vue.js. JavaScript. Node. Python. C++. Java."
                    />
                    <Miembro
                        img="/img/idalid.png"
                        nombre="Idalid Ávila"
                        cargo="Tesorero"
                        descripcion="Desarrollo Web. React.js. Vue.js. JavaScript. Node. Python. C++. Java."
                    />
                </div>

                <p className={style.leyenda}>Además de nuestro comité, BeeDevelopers cuenta con más de 25 miembros activos. Todos unidos por el gusto de desarrollar. </p>

                <Separador titulo="Nosotros somos BeeDevelopers"/>
                <div className={style.img_container}>
                    <img alt="img" src="https://lh3.googleusercontent.com/pauaEWe86lQUF8fWGGGf5zVyDVWQ2-GTVVPKnh81o_2-kwXhr7P5oRZ8VBylQ1vcJDhhAWSN0_466aWmNZO6ZR4jjuCiZAiq_HTDMsLyUUyU7XfsUO0nG5dpTb3nmuKAJCpQV2y0=w647-h862-no">
                    </img>
                    <img alt="img" src="https://lh3.googleusercontent.com/_M6Ktkz3PA_iKFS7MRy8bZzUvkSyi8fYaiHFVFocZYGPD5_Jy2QbInUEsKXCx6vr34E_jcTGHdz9MKUa-Hbzx4tPnJ_b6fVpUy9IOzavyAaF4JwE-UB1NgZLwgd7ob4_LYQMMnCLFQ=w1297-h862-no">
                    </img>
                    <img alt="img" src="https://lh3.googleusercontent.com/-XcS5U9J9SM_uVicVb1pilnpN15Hv4oed4pe-LPXkKzyJbdT25qUKXrGv-Qk-SGD2SDCUUKTr4VW6LiWOpNe0Su0Lpb_CseF3Y9otnyfP8zN3VwPzhb1cB0rYTrLKohIYhOUwV9odgY=w988-h862-no">
                    </img>
                    <img alt="img" src="https://lh3.googleusercontent.com/LaS6TiRz0EtaBrcU1ZStB03r-a6KGKj87Ek5WScAvjIPadtdq9zKN7Fxqx-7Dmbo-VfcPjTgzfQd4phMF1jcoFaJZcaBRaWo9QiyIx8-QhBii7KK3gEeDuHUuLRDk878XPNLwTixPwU=w1149-h862-no">
                    </img>
                    <img alt="img" src="https://lh3.googleusercontent.com/HdUtLe86FOhdszej3jvPuBwnK-FxfamtvV8-6M2xq7PyXCJfnFb4poFH-YhIN0NOSl--FpcU1F1kZXDqPM8exXvasIPdfcCkIutUZxJCgbgWDVBBEh_nTm1KClq4j96RoH9QsQd3jCQ=w1149-h862-no">
                    </img>
                    <img alt="img" src="https://lh3.googleusercontent.com/CeYN3T1nbgvBi6ggfQ5WGYpWXWPAoMHss3zCPgNBP2_pFwQvlHMUfKG9OXAhSAksK99UUyuTHo20xdbFI9ryLVp6OypIMYuLA1f6sJ6R8RNar_qpVBwsrSXHhaqv8tbfQcnkIpwcDIY=w1149-h862-no">
                    </img>
                    <img alt="img" src="https://lh3.googleusercontent.com/HpIy3FrDFjsThdy1--OogDm2ZU6XxBmW3Rp_HmU8JiAxoPektuRFKsn-UZIYET3Kz4UPzH8AVSCzaPUOnJFn-ghfeHCUcDld1L-RPejDISFSaeXyzTuaI632lOAMCi4clWgmmEk_cg=w1297-h862-no">
                    </img>
                </div>
            </div>
        );
    }
}