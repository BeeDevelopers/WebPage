import React, { Component } from 'react';
import Titulo from './Titulo'
import Noticia from './Noticia'
import Separador from './Separador'
import style from './css/noticias.module.css'

export default class Noticias extends Component {
    state = {  }
    render() {
        return (
            <div className={style.noticias}>
                <Titulo pre_titulo="print(" titulo="Hola Mundo" post_titulo=")" leyenda="Buscando impactar."/>
                <div className={style.contenedor}>
                    <p>
                    <h2>Nuestra Comunidad Activa.</h2>
                    Sé parte de esta gran comunidad donde aprenderás desde el lenguaje más básico de programación hasta el uso de los frameworks más modernos.</p>
                    <img alt="ilustracion" src="/img/undraw_investment.svg"/>
                </div>

                <Separador titulo="Nuevos Miembros"/>
                <Noticia
                ubicacion="DICIS Salamanca, Gto."
                imagen="https://lh3.googleusercontent.com/WPbAiaibLYELZPNkG9pSxTRqfCdgaigqWp9-2Y9-dbREqMOxiKya7sRAc9ErPEXrq96z6YvTst9XyGIxukM_mYUTyXgBa6_4VH6AzJpo-iIBtmGY1qyUoA9ZrGZBIb0w0Mq1F3Axis0F8IGHF2UCs7SEatQgwvoQUFjZfILgEA_LaEkeZnl2DSu4Hk2C12VgfNQRaumO7USvd_2TGO-Zqo-b2ATu_eYVkr8F-nUhtt0yUR6qssCroep6-R3fkwUk6Mv6VA1djf3O0cbdskn5bdu7oBwD3s5CvcY4kDYPn3h_B-puz8ZoZi7E1qr6d2f-G4cVH9DH_m7T1GQTgFvmn50KsP5JJFXFobQol3NtRffJimV594NF9ICNNsHrhAokjoE2LYzJFwHVFv8kiVq-2Qq8wE2xWQ5cJLdP1OKVD3G6xsSVO34qpuO-i6LlOnJSTUmr0X_m2xUoobkav2iBQhhLJVGHQKiQ7Kokf-iH023k6_mZ0q9T7bEcAJ5JcN48_CLnMNPZsirn9UtO6cYZ-4z2bXYEdvIX6YAk69nYvfOldgVCassdRNrsKGSj41PTLBRzWm0ClirUisT17mrAT-RNa5rq3wUrfw5MCrz09sHAmdhSJ9vFlu9MqJvBdhLF5R8m6BdUmJ7qEVx0yCU-OXICnZ8j4XSPCix2Oa7kEZI-Ff0vSwOIzflTe1qolP0feMKaaoc7qI_RsMggjlEN3bGTJpxnAZn8VN7Sio37pTLSLjEQ=w1003-h752-no"
                img_descr="Nuevos Integrantes"
                titulo="Nuestra comunidad, creciendo"
                texto="Con más de 25 miembros nuevos, BeeDevelopers sigue creciendo demostrando que podemos ser más que un simple grupo organizado. Queremos lograr mucho más y esperamos hacerlo con todo el nuevo apoyo. ¡Gracias!."
                facebook="#"
                instagram="#"
                twitter="#"
                ></Noticia>
                <Separador titulo="Somos Comunidad TalentLand 2020"/>
                <Noticia
                ubicacion="Guadalajara Jalisco, 2020."
                imagen="/img/talentland2020.jpg"
                img_descr="Flayer de Hackathon"
                titulo="Nos vemos en TalentLand 2020"
                texto="Somos parte de las comunidades de talento de la próxima edición de Jalisco Talent Land 2020. Esperamos contar con tu participación en este evento para demostrar que BeeDevelopers está lleno de talentos.
                Recibimos entradas patrocinadas por TalentNetwork (no incluyen camping), que serán otorgadas como premio a los miembros más activos de nuestra comunidad. ¿Quieres ganarte una?, ¡Demuestra que eres un talento!."
                facebook="https://www.facebook.com/BeeDevelopersUG/"
                instagram="https://www.instagram.com/beedevelopers/"
                twitter="https://twitter.com/BeeDevelopers"
                ></Noticia>

                <Separador titulo="LinceHack 2019"/>
                <Noticia
                ubicacion="Instituto Tecnológico de Celaya. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/XlrucayvsllC4O2xWivmobTsNx9PVnzNsL8384TBApL-Uih0WqBAxVUoFj26I4o8cSaG_V4ggoR4Ij8Ue4AnbqGrRqoWR5899n3KeVTyxv-So8bfesazJbaPrM_G1a_UxWePWBL3C9U=w960-h640-no"
                img_descr="Flayer de Hackathon"
                titulo="Primer Lugar"
                texto="Miembros de BeeDevelopers junto con Apolo UG obtuvieron el primer lugar en el hackathon LinceHack realizada por el Tecnológico de Celaya con la presentación de la plataforma educativa 'Ludoverso'."
                facebook="#"
                instagram="#"
                twitter="#"
                ></Noticia>

                <Separador titulo="Hackathon BBVA"/>
                <Noticia
                ubicacion="Ciudad de México. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/EKz-ALKrGjJWfhXsXCj3vxGGcKWancHePXzLNJbhUv2v0LDuDpwMSjam0rUeE_eJ1hYpIEJqPE8vRTKxL-g4RQtOsbhTJLigGL9KZYQFtG00Q4ojUbjo-0r6VhWUHh4s2zuStV61=w1149-h862-no"
                img_descr="Flayer de Hackathon"
                titulo="Quinto Lugar"
                texto="Un equipo conformado por miebros de BeeDevelopers concursaron el el Hackathon BBVA 2019 en la Cuidad de México y obtuvieron el quinto lugar."
                facebook="https://www.facebook.com/BeeDevelopersUG/"
                instagram="https://www.instagram.com/beedevelopers/"
                twitter="https://twitter.com/BeeDevelopers"
                ></Noticia>

                <Separador titulo="Festividad Mexicana y prevención del suicidio"/>
                <Noticia
                ubicacion="División de Ingenierías Campus Irapuato Salamanca. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/Fe-nHdAXtPr4R9irQu15nQXMG6dfdy0z9C63B5vg0hn5N1xtnbpfbHX-0t9lpz4I4uB5mDOTh0bVOxIzM-h0MupwJDW3KFZSeOdIn-VIJokjFO5keDP10yZJeB9uckutY_UsSFNlPw=w1297-h862-no"
                img_descr="Flayer de Hackathon"
                titulo="Festejo del día de la Independencia"
                texto="BeeDevelopers festejó en DICIS el día de la Independencia con frescas rusas y ricos buñuelos."
                facebook="https://www.facebook.com/BeeDevelopersUG/"
                instagram="https://www.instagram.com/beedevelopers/"
                twitter="https://twitter.com/BeeDevelopers"
                ></Noticia>
            </div>
        );
    }
}