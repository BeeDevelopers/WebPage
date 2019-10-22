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

                <Separador titulo="Top 10 NASA Space App Challenge Gto."/>
                <Noticia
                ubicacion="Poliforum León, León, Guanajuato. Octubre de 2020."
                imagen="https://lh3.googleusercontent.com/-czNCz1QRKznLFcl7XBieku8r4JHWxWB5bnXYswhAhelqLnkWWvbxPQJAsO0Ou88PfprPeAae2AFj74uNdyiBVMnSTFyh_-_sz6nQO9mau7tJtaXp3mOGC3_COHt4TgIXKxZopopXF1Lu15vrgFCzAkor6DkWs7J9OoH2MFwT7SLThM4ltab4L-qAa6HBszcYBMblssA6dFdqf5_2sSbcQodUUw4yTg5BFO54Zjz1_JcW1vSgc7pHarzQDRgeArQJQPbQFm3vD8kqhpa_PkmnMrBRdqdW6fq3tOHUPiX-xATjghutXx-LoPlXlGcO0Dw-SmwMyI1MfWZdyc2aPLOSragKtISA6g0h6CDfmVIR5ovriuZOwLRh-q_f74lM93SVV8yDa-M4tNom-wxNe3jevsNiCupfggq8T8J9iZpKKPm7rQZU11kX-4Fxr9JTCWFBy83KHM6EMQjFEXxI7M4A4QzqBwm-Vd_IRotR6NQOWNrtC4Sr2-W79tLzw48SAnWzd2LRrfKdhQVkdFZIfkIy1qmKVpZ-_l_8ah-Zb1kCqQSMmq-X0dziiE8y7NUBvzAmIfPQzvJ3WgMXItWrcgYIbh5QumCRzY6pZD-D4hQ357IoAdJGErF698hCVI-JHNMAawLgp4cBGiqhcvJqwt-5071-KF-YpxA29SHzTXjQ7Zl9At9RL4MXz8=w565-h752-no"
                img_descr="NASA SAC Gto2"
                titulo="Dos equipos de BeeDevelopers en Top 10 ganadores."
                texto="Felicitamos a nuestros miembros de BeeDevelopers finalistas en el evento. Alcanzaron un merecido top 10 gracias a su esfuerzo y dedicación. ¡Felicidades!."
                ></Noticia>

                <Separador titulo="NASA Space App Chalenge Guanajuato"/>
                <Noticia
                ubicacion="Poliforum León, León, Guanajuato. Octubre de 2020."
                imagen="https://lh3.googleusercontent.com/g_KJTNSMmXLIZBILVRwY22WpiL_xHZ4Dwa8liK1NfYhpLENECaj3TSh5igKX0f1Q0UwYweQoRw5vWhHLq_IBtv78s8ZKOIA_sZzBHLrvcZ7AJhfAjd6LbKajJEmFpCxrICF9LyTKUNGa47pEZ7eZtAW61Sse5p4BJX0JVySPBni8kmLvnCXnEagm7ksun14w-4zvIT2-29iT7PZFFOopxD88jXygsfF4Et2uG36j98-HmHNsMC5av3o9qhGNawugqf7QWrIqIBbVxnCXUhtsG97ZHujMqaemkSptWT_j2tdng-5tQ2ZVGvDM4HUlu9lFeW7V4rdLYxVbu-BsaiggK5igvDk54sltJaQjP-mMXnFBjz5YdGqa7M9pTXLd54NKYQqaWpoN9Ry8twpvp5ShUNz4OkFh5rfzfq4WLwRo10WxpEPepRHoTerAd0y9xeBH2HZErmTt10C6O2ZpFUf-8V33TwzPJKc56rreLPV03tlWPVSCpI-MJ1C8gaZYC4m6u8WV75LnWyh5l9azjXOqsEb2-0E7LU_ZS9OW05239DW_YqLulVCiw_Lp5P9zCqGOWqwFWfVzcDiUSqZvajkoStkJKL-TTvuSujSwtWdIuAUsd0vgNgkwBbJghbkvG4Z97ts_X0aRFCpCdp9RoWzPrs9Yiqe3FYz9K39nn4HWBdMPw4t5YCC3CrXiWIKeCo_e4Y99LSv5ZA4XQGZYvAwpu2w3LVOe0PakEW8Jp5LRT46uP7c=w1003-h752-no"
                img_descr="NASA SAC Gto"
                titulo="Seis equipos participantes y miembros organizadores de BeeDevelopers"
                texto="Seis equipos integrados con miembros de BeeDevelopers participarón en el NASA SAC Gto. Tmabién participamos como miembros organizadores y de apoyo lógistico del mismo. Sin duda un evento muy divertido y de mucho aprendizaje para nosotros."
                ></Noticia>

                <Separador titulo="Hannover Messe"/>
                <Noticia
                ubicacion="Poliforum León, León, Guanajuato. Octubre de 2020."
                imagen="https://lh3.googleusercontent.com/XxS96BukyYi_Wvm-Ln1rYRRDSsTbA53M53HShNNN9vHYSFJuPH7VCPC9d9i97SjvlSw0OBacPIlWbTH2SxNOyQa53UaLpbAj2vxkB5uVdEWI65qMrV5idlOobVpt7TMiCIa25G6gkxLDbFnDPZZUsrXNxTRS7uUsz1XAPuqiF0EP78RaENf6QXtnG-otGxb-MSpsPyXmL8RJ77ogLCr2ZrGyzukm2DcxdQfvhffXlMbkGtuVFZjS2kqWILt9DSlTPgqtI70ecXPqnemGVCpVnaVOUlTKCqbKebcNeOwFhOnrbPRQx3fyeB7IH4qlLa-7DLh3L2Fr8SaqyAD9H1rjli1fPMf1Wna3gt_VekMKvibi5JAPlRR0ItuRK27p97mvUMHbX7IEgSRrk8W6CdZV98WFrY8B8jUQ3FLy29DWIXuj524k29bUPTXBFQ2d2Vj2v7d0dYb7lRTBggVVBXadY-6Qrm53YBHgdqnPSDpv8pzZ1J6_o1CEFv9miJR2K7bilFvZax1poc2SQb35bQGTrL4_YaHxeAxgLGLuo2Ek8CP08Y-ziFI3dQsNgrLFPTpcnWGRDp7aXffIdK0edTtHnXXvfV8j4_6uzaX-L_FW6JZcpremYBXs6al7n0xZgIrccCDUWJgZVf9g7JW7dJWbM0WWcKisrz1WGWA6L0_XcpAapSap98g_w-AjynPCE8LGlr_ivwUkxZb8F27-cgzhauAMkB64gIlNm01Hop1ZTFH-TIZS=w1003-h752-no"
                img_descr="Hannover Messe"
                titulo="Asistimos a la Hannover Messe"
                texto="BeeDevelopers fue invitado a asistir a la Hannover Messe por parte de Desarrollo Ecónomico del municipio de Irapuato en colaboración con DICIS."
                ></Noticia>

                <Separador titulo="XXI Foro Regional de Vinculación ANUIES"/>
                <Noticia
                ubicacion="UTEG Americas. Guadalajara, Jalisco. Octubre 2019"
                imagen="https://scontent.fcyw3-1.fna.fbcdn.net/v/t1.0-9/71800513_2587578461292537_7159535771752333312_n.jpg?_nc_cat=110&_nc_oc=AQmJS1b-_gMJj2himrCHKyDGJbmeebHQvMnD1NB93wJK9Ob-OY4rwtWLeOXFT-w724Y&_nc_ht=scontent.fcyw3-1.fna&oh=f8a7618d3c62b0c3255bf4a9334cc621&oe=5E20B3B0"
                img_descr="UTEG America"
                titulo="Representando a la Universidad de Guanajuato"
                texto="Agradecemos a nuestros miembros que participaron en los retos propuestos en la XXI edición del Foro Regional de Vinvulación ANUIES. Agradecemos también a Javier Sánchez, compañero de Artes Digitales, que de igual manera participó en este evento. ¡Felicidades!."
                ></Noticia>

                <Separador titulo="Nuevos Miembros"/>
                <Noticia
                ubicacion="DICIS Salamanca, Gto."
                imagen="https://lh3.googleusercontent.com/WPbAiaibLYELZPNkG9pSxTRqfCdgaigqWp9-2Y9-dbREqMOxiKya7sRAc9ErPEXrq96z6YvTst9XyGIxukM_mYUTyXgBa6_4VH6AzJpo-iIBtmGY1qyUoA9ZrGZBIb0w0Mq1F3Axis0F8IGHF2UCs7SEatQgwvoQUFjZfILgEA_LaEkeZnl2DSu4Hk2C12VgfNQRaumO7USvd_2TGO-Zqo-b2ATu_eYVkr8F-nUhtt0yUR6qssCroep6-R3fkwUk6Mv6VA1djf3O0cbdskn5bdu7oBwD3s5CvcY4kDYPn3h_B-puz8ZoZi7E1qr6d2f-G4cVH9DH_m7T1GQTgFvmn50KsP5JJFXFobQol3NtRffJimV594NF9ICNNsHrhAokjoE2LYzJFwHVFv8kiVq-2Qq8wE2xWQ5cJLdP1OKVD3G6xsSVO34qpuO-i6LlOnJSTUmr0X_m2xUoobkav2iBQhhLJVGHQKiQ7Kokf-iH023k6_mZ0q9T7bEcAJ5JcN48_CLnMNPZsirn9UtO6cYZ-4z2bXYEdvIX6YAk69nYvfOldgVCassdRNrsKGSj41PTLBRzWm0ClirUisT17mrAT-RNa5rq3wUrfw5MCrz09sHAmdhSJ9vFlu9MqJvBdhLF5R8m6BdUmJ7qEVx0yCU-OXICnZ8j4XSPCix2Oa7kEZI-Ff0vSwOIzflTe1qolP0feMKaaoc7qI_RsMggjlEN3bGTJpxnAZn8VN7Sio37pTLSLjEQ=w1003-h752-no"
                img_descr="Nuevos Integrantes"
                titulo="Nuestra comunidad, creciendo"
                texto="Con más de 25 miembros nuevos, BeeDevelopers sigue creciendo demostrando que podemos ser más que un simple grupo organizado. Queremos lograr mucho más y esperamos hacerlo con todo el nuevo apoyo. ¡Gracias!."
                ></Noticia>

                <Separador titulo="Somos Comunidad TalentLand 2020"/>
                <Noticia
                ubicacion="Guadalajara Jalisco, 2020."
                imagen="/img/talentland2020.jpg"
                img_descr="Flayer de Hackathon"
                titulo="Nos vemos en TalentLand 2020"
                texto="Somos parte de las comunidades de talento de la próxima edición de Jalisco Talent Land 2020. Esperamos contar con tu participación en este evento para demostrar que BeeDevelopers está lleno de talentos.
                Recibimos entradas patrocinadas por TalentNetwork (no incluyen camping), que serán otorgadas como premio a los miembros más activos de nuestra comunidad. ¿Quieres ganarte una?, ¡Demuestra que eres un talento!."
                ></Noticia>

                <Separador titulo="LinceHack 2019"/>
                <Noticia
                ubicacion="Instituto Tecnológico de Celaya. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/XlrucayvsllC4O2xWivmobTsNx9PVnzNsL8384TBApL-Uih0WqBAxVUoFj26I4o8cSaG_V4ggoR4Ij8Ue4AnbqGrRqoWR5899n3KeVTyxv-So8bfesazJbaPrM_G1a_UxWePWBL3C9U=w960-h640-no"
                img_descr="Flayer de Hackathon"
                titulo="Primer Lugar"
                texto="Miembros de BeeDevelopers junto con Apolo UG obtuvieron el primer lugar en el hackathon LinceHack realizada por el Tecnológico de Celaya con la presentación de la plataforma educativa 'Ludoverso'."
                ></Noticia>

                <Separador titulo="Hackathon BBVA"/>
                <Noticia
                ubicacion="Ciudad de México. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/EKz-ALKrGjJWfhXsXCj3vxGGcKWancHePXzLNJbhUv2v0LDuDpwMSjam0rUeE_eJ1hYpIEJqPE8vRTKxL-g4RQtOsbhTJLigGL9KZYQFtG00Q4ojUbjo-0r6VhWUHh4s2zuStV61=w1149-h862-no"
                img_descr="Flayer de Hackathon"
                titulo="Quinto Lugar"
                texto="Un equipo conformado por miebros de BeeDevelopers concursaron el el Hackathon BBVA 2019 en la Cuidad de México y obtuvieron el quinto lugar."
                ></Noticia>

                <Separador titulo="Open DevWeek"/>

                <Noticia 
                    ubicacion="División de Ingenierías Campus Irapuato-Salamanca"
                    imagen="https://lh3.googleusercontent.com/NO-LGcpcKEIDoTMFkTV3or33asDSveb5wciDKh-QV-v6ScuAo3-5R8epkKwVUoBJyXG9xd1d8-fHAmygDL1KY47Oi5DrNPeV6yX1zUipudpiauqmBd71APUPGY-qrpW7nNln0RIr0c19Z-3XOpxWBErEQrTentM8jcPmB1FU_L6KfaNZ0PaP7YJ3xliWyh6cAyhXr90miroE19JoX5UsMNSjTW2LnGCvyiLaLcKOHitsa3TCtN_3vlk3iGMzM98Yw1OPx1lKM9QJ1wrQ_wPjbbXW4iCMv_L4Lq-ezP4_G2QT6a_3nYx3vzF1_E-h6TJybVJtpUQhTBgDP24ehbxHyuK81RYLQGQQdHYeB-l0Fu-ULaip3ALtwrHysMueg_333WpeaR_j7NslXcIgpInft2hXNECzrdZzjE1G4U8G7TfCAySA-LNoaiJDXNKBIcb3TeFW7Eg3EX98IPxNFG31rl0R_7MKCNY3Vu3pj9YcFyb_4j05KwpisllZdyhMrpaga3zha80fTc1XtYONQ8GU0BTHbjMrOSxJ_1WvgND4CFyw72IsCRykGqdaW88hNiqNdchV0sY4BR4jLErqxMQ7BmLn-4euVuWMTDiZ5eDNLTUoFX2j4lGZ5kus1HeKjhwjE8is9WEkueCaTttWNNUoFpdsotS6SeSj29emSq6oUqDCFg0dWNQUFvM=s752-no"
                    img_descr="OpenDevWeek"
                    titulo="Presentación de BeeDevelopers como nuevo grupo organizado"
                    texto="Organizamos una semana de talleres selectos de programación. Dichos talleres fueron: Desarollo de aplicaciones móviles en Kotlin, uso de básico de la terminal de computadora, introducción al desarrollo web e introducción de React.js. ¡Generamos un buen recibimiento en nuestra comunidad!."
                />

                <Separador titulo="Festividad Mexicana y prevención del suicidio"/>
                <Noticia
                ubicacion="División de Ingenierías Campus Irapuato Salamanca. Septiembre 2019"
                imagen="https://lh3.googleusercontent.com/Fe-nHdAXtPr4R9irQu15nQXMG6dfdy0z9C63B5vg0hn5N1xtnbpfbHX-0t9lpz4I4uB5mDOTh0bVOxIzM-h0MupwJDW3KFZSeOdIn-VIJokjFO5keDP10yZJeB9uckutY_UsSFNlPw=w1297-h862-no"
                img_descr="Flayer de Hackathon"
                titulo="Festejo del día de la Independencia"
                texto="BeeDevelopers festejó en DICIS el día de la Independencia con frescas rusas y ricos buñuelos."
                ></Noticia>

                <Separador titulo="Día del Estudiante"/>
                <Noticia
                ubicacion="División de Ingenierías Campus Irapuato Salamanca. Mayo 2019"
                imagen="https://lh3.googleusercontent.com/Nxh0utpk4cvASZlCyY23607W0NFzOA8gXzSfc6G-aoVDqNx45xi-tntSsvmXf7RYpYsORjT5e1phewkyAvprke8OqI3Px2NYyJCP4sDuYjzG9hx9D8C-O3EyUMhRZn6Xb4EGEmQgNGdgZRjMsOQV6MHXIEwBW1d-IFHxxNztjsVq155t2tvncpRPWRib9YRwoY8jW2ESgIN7UOLWSu-aeZ2Sq0PVTXhjxBXaCkP8xx15_IUaTaWRrVcaWzRGLZmv1ArSluP08G7igfMC-tBI11sN34EgEWQsWqLuvzP4-aVmCbNFvOnnUXl0JlsIIcVRiqQu3aI3cT5dg6IUSBGfwVizPJZIhSBj-pFko0S4tJStLpzyCJhOIUWqVFJ39uVAMDG_Mb_JlQzsKzv33p1VZF9KFGgYONXcdnMzgLiNfEQQsf2UhACBCgoph0cpPcQ9mKV8qEBGoQu1nbdxT5XdxKLON02V6nlah3Wx7rJ2cv3zHHdEnWCzW7F-0fByVDNHv2UrjnnW8fDSfG8HsbWhtMry-GI-XzvL0FZ8kB3Q6xvsR9q20BzoGWCDr43rGb2JcAcizN9Tv2C4ChPe0v_I8gG-e3FyjIt39IB2dLIIqMA2FmEgdyCejwskAxNhS7u69-n9Ws6v93FKM5KMAbUxIPIbLxvNfR-bW_TosnBPMLm8--KYtleay1lPNXIHNVepSuDIG2QPPKfre0fNypAUNfPgBjDo46ILZcdnhiaLOFyVh6I=w1132-h752-no"
                img_descr="DiaDE"
                titulo="Torneo de Super Smash Bros"
                texto="BeeDevelopers festejó el Día del Estudiante Universitario organizando un torneo de el popular juego Super Smash Bros, el primer lugar se llevaró un premio. Además se dieron stickers y dulces a los participantes."
                ></Noticia>

                <Separador titulo="Talent Hackathon"/>
                <Noticia
                ubicacion="Guadalajara Talent Land, 2019"
                imagen="https://lh3.googleusercontent.com/A5DvxsusfFw4KjQAxA5yCYtHqekIkDIpoXhAKJ3WYShs3-FIQ7vc25Sd6J8sfoPt-CWkxF-AKzA9oHiVO6k18xf59nEqDeVCnU5DQselDSEndWUr5S9aqIN4AjJxucef36cTpHKjn3Qt1uEhYKlffsii7Sx4RX5TS63hB28tA86MH48oicCmWkTXZT9A5-Dfv5StZOkX4RokDX0Temig8gToyY6cSLoDrHTlmmtKC1CnVljycA7OZoubpXwsxh8qMwjg-w9KaOkDHb5SI9-J0AmWELxcU3c9emYsOJa4F9hifJYfc_Um0gjj5O272RQqv0KMoiUHfQO1Z9DwxJj74jXGSdVEEfoVL3659y94QNilBm4qPYCfTWN2IPwG72-MQUxz8nhz8r7TOhAvUQTiTX97FL898AF9JVqDIlP-mLCCsDot899dtjegUWRXArhHsPYbElHDcoetUQE79LGxzvcgxuwSP2hlfhO-0S4SYvc4FxDYqhllMVO6uEm5LM-m6YULxvSfpcu1QfjcVIdiUtf1vzBwA9gPrMI91Hv34gzsfTToAgnUmsnSZXNHrcnLCHKUUwXdPNVdjjRsGipPdjHEz0eaOsDWZCdgaMdbYqaKh6nGb2vvXQ6Asgr-pcGfg_Dwjh-s64SWm6ld5HYgsyIaHys_LDgYCw9F81WdteEQdjrqlj4Er59nVrTHHXgCYkjNPJfaF-4Byso-Sjmyux7ax2za_2vbWwpSbdvL2jHRo54=w1080-h718-no"
                img_descr="Talent Hackathon"
                titulo="Participación en el TalentHackathon 2019"
                texto="Agradecemos la participación de nuestros compañeros de BeeDevelopers en este Hacktahon, demostrando que nuestro grupo está lleno de talentos. ¡Muchas felicidades!. "
                ></Noticia>
            </div>
        );
    }
}