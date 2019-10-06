import React, { Component } from 'react';

import Separador from './Separador';
import Titulo from './Titulo';
import Evento from './Evento';
import EventoRegistro from './EventoRegistro';

import style from './css/eventos.module.css';

export default class Eventos extends Component {
    render() {
        return (
            <div>
                <Titulo pre_titulo="git init" titulo="Eventos" leyenda="Todo para ti."/>
                <div className={style.seccion} >
                    <div className={style.seccion_texto}>
                        <h2>Aquí es donde todo sucede.</h2>
                        <p>Se parte de los eventos que tenemos preparados para ti. Comparte nuevas experiencias y profundiza en los temas que te gustan. Desde talleres y curso, pasando por conferencias y llegando hasta convivios y viajes. Todo para ti.</p>
                    </div>
                    <img src="/img/computer_gift.svg" alt="Code review" />
                </div>


                <Separador titulo="Próximamente" />
                
                <Evento 
                    imagen="/img/hackflayer.png"
                    img_descr="Flayer de Hackathon"
                    titulo="HackDevelopers"
                    texto="Próximanente en DICIS el hackathon que estabas buscando. Ánimate a participar y vivir esta gran experiencia."
                    facebook="https://www.facebook.com/BeeDevelopersUG/"
                    instagram="https://www.instagram.com/beedevelopers/?hl=es-la"
                    twitter="https://twitter.com/BeeDevelopers"
                />

                <Separador titulo="Talleres Internos" />
                
                <EventoRegistro
                    imagen="https://lh3.googleusercontent.com/6ImOGaS1WuXdcWYDAY4kyAzPc7KUl7dxG3zXly0gJ45QdcRB1LtFM1tjUsCNAg-4nRZeyiQnB-d1Z9B7OCJjKGmE1jwIKmQWyhKxc25Rxjb1PQocL0Q5jahuls2g8F9fTwc-Cen8N6duXA9g6r9cRm0L-dyuife1sGMb6wPFU4C8GtjeGg_N04NG6jloeAYAV_TiPfGjHdkFtuXFkZZg8NLcYjqkN0-XEFAFLPEgypV1QeQGkKR6GRPQb-1Udy5zdLSqwkqn0UMiK5AvDQKN4F82Nsh63q6bkABMKPfp3AbrehM_MvPUIT0tM-W05SbwlBM7CBTTgL0BGonxPQS5UlRwOhu43vQMFA7qp2hPiMKWv1iAeyuWhRkXgP-OEQVVBiy716Xwg9O5kNdmUJ07maBL9mp0IJi15_pr62zPlqFOl7lZ5Lo736tDxzQx7QDyoT6VAyjj41w0HXKJA8X8zmSCUgFOFKwv8czIVjQD74z6B3gX-R3HNnQL4cBsFRauXmO_nNRv3hm9iIbBF-_icpVe97R7hreS5_P4XrRDdtu-qcPmun0TfTiNoQUBPQCIjMAQHAEjckec2qDbqsH-9pY0Aarp8X7IdY7b1R3BpxRuOrkT1DsTcZrg2CXTBOA4Dt9KnIHhw-X6yz3QO1GOvDTIuYvJyWyD1LXzc1wI4897WQ=s752-no"
                    img_descr="C logo"
                    titulo="Programación en C"
                    texto="Fecha: Martes 15 de Octube de 14:00 - 16:00 hrs. C es para muchos el primer lenguaje con el que entran en contacto con el mundo de la programación."
                    linkRegistro="https://forms.gle/CmLa9tmhSL1c6evZ7"
                />
                <EventoRegistro
                    imagen="https://lh3.googleusercontent.com/qu0WZy6c_x4C90cp1JCQRmMF21VtwR6KwSyKI92P2QT7VyHG6a58oGr723IkW4PWNliu1d9nu5ixwpbapcMXLGduPfUMpB0Dy8o_SLCjPPJBQ1v3Dpq2Vl0oUTndx-gb3zYAl2Be45g5Ad4fyw1ZNmSvFq4Nk4lO5YEzFPi_v216xxSbueikuA-q_p0SqIsHPMgbrzJU84F2y8VVV5-JC9CdRGEn3crx01RUY47k9_wC0AOL6tT3I-R9_D2tUgK13_AvFi2ajLWDYWSVwmRRQObBmKIjFsWic2Lttix5W2FT3nL4ozgE7F7uXa13rlZFBPGHgvrMhg9QLMe_rEFIpIFVm8DR7mF2OCjPk-_hxjrjCj_l7EdaYRKAI-zu-c8i_Rbzp762LJD5deDQBJ-IKqPoRhJ0mgQWWTfgi3NVmO-T-Pj4ZWzHxuznAWoYdYJEDnGK1Ccgp-GGGRryCoojRHDrnJidChJ-HckLU7ufHlRD6sE6FyV_eoO8I-dBs6aOPDCJSHGwUd3pYW7WPLOBTRBcER_Y7XTxZt1HAWawdrkbV_LHZZW3df2uC_r74NcRohxNE1H8vlEoLuWbpNg8WBq-MMsoPO730B0gYMjCMD_nknbgjQL2ilB1vcXqz4TIpk9LLs4-wCoDd11YVre3KE5fbk_GFtoowFxqytJmXlfD7A=s490-no"
                    img_descr="C++ logo"
                    titulo="Programación en C++"
                    texto="Fecha: Miércoles 16 de Octube de 12:00 - 14:00 hrs. C++ es el lenguaje apropiado para comenzar a aprender el paradigma de la programación orientada a objetos."
                    linkRegistro="https://forms.gle/zP8LeK6Y1xkEsCgh6"
                />
                <EventoRegistro
                    imagen="https://lh3.googleusercontent.com/PCem41fSFmWL3EhpnVAxFg9dDSpQEBBO9eJwH6iQGbNqerHrOatryK-dNFH0PkzgBRcDw3XyTw7oRLfLZIdehBuQAj3o3TGc_pvScxQYsSCKHgQexJLiFtcm6k7F5KGpJkDtayExu5RCyf5c_-0rJDOc7ZEkCaHjnk6jJejAcMy2dRkfl-o5DeQ4ZKPUNjgZLHxKObrCsGXmttkvkHTeGDE0IhIBot8YhTmICvQL7t8gZJ7_dwd07rkCtoSrvRpNZjWz1CIYsUh3omxqY8IeW2hHvxWmfhtEBDgYXHfxLn3ZFDluwEwZdUdpV94h4iVq7VNhmPB8ZwAsOCdIN3QdaD-wcnkv5ygaOQaLhOxeXbTJj_eIEtNDDhVgiOOO-bVk2h3b7rQD4KILt7Jl4ZJDGpJsMw5DkIt76Jaisc1_QYEtJwBBLaYo2WQoLc4KVbhD_ZhEw--T_F5CBokRV1w92A4uewBckRqkRWAX7lhjp06U0FQVCwqQFZtNB5A0t8LsRWLPOoscNS-Ew0lU87zzOjdilxSkdlv5Z2Qx9KA_0BTUNtM-yQsZE5JFDlG4a1kc8MBGHDL8xf0iSqZh9evJxM5P5W-rDSHRspuH2OYgxUny2XrkOAj_co7hXGfBJZV-DCIODHsVQ2zhjLaGOSytnSjdCJw80hMgiQHqSt5ad5fAHw=s512-no"
                    img_descr="React.js logo"
                    titulo="Desarrollo Web con React.js"
                    texto="Fecha: Miércoles 16 de Octube de 14:00 - 16:00 hrs. Aprenderas el uso básico de terminal, editor de textos, uso de AdobeXD para hacer el diseño de tus aplicaciones y React.js."
                    linkRegistro="https://forms.gle/Fd7jD45moVU97epJ7"
                />

            </div>
        );
    }
}