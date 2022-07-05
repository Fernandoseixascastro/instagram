

import './post.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FiHeart, FiSend } from 'react-icons/fi'
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { useState } from 'react';
import 'primeicons/primeicons.css';
import { useForm } from "react-hook-form";



export function Post() {
    

    const validator = (string) => { // aceita letras dígitos e espaço em branco
        const resultado = /[\w\d\s]{1,100}/.test(string) // retorna true se tiver nas condições ou false se não bater
        return resultado
    }
    const [showHeart, setShowHeart] = useState(false)
    const [showBook, setShowBook] = useState(false)
    // const [comentario, setComentario] = useState("")
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => console.log(data);
    
    const showIcon = () => {
        setShowHeart(!showHeart)
    }


    const showSave = () => {
        setShowBook(!showBook)
    }
    
    // const submit = () => {
    //     var str = document.getElementById("srting").value;
    //     var send = document.getElementById("enviar").innerHTML;
    //     send = send + "<p>" +str+ "</p>";

    //     document.getElementById("paragrafo").innerHTML = paragrafo;
    // }

    // const 
    const handleChangeInput = (event) => {
        setComentario(event.target.value);
        
    }
    return (
        <>

            
            <header className='header-post'>

                <div className='info-post'>

                    <img className='img-perfil' src="https://pps.whatsapp.net/v/t61.24694-24/291514025_457571925701690_2497527226258017271_n.jpg?ccb=11-4&oh=01_AVxib4yXdGbWpJatRfUMkBZISRMTGjzt_tbG0Kjogwf1cg&oe=62D1ADFD" />

                    <p style={{ cursor: 'pointer' }}>

                        ssamuelmorais_

                    </p>
                </div>

                <FiMoreHorizontal style={{ cursor: 'pointer' }} />

            </header>

            <div className='image-post'>
                <img src='https://pps.whatsapp.net/v/t61.24694-24/291514025_457571925701690_2497527226258017271_n.jpg?ccb=11-4&oh=01_AVxib4yXdGbWpJatRfUMkBZISRMTGjzt_tbG0Kjogwf1cg&oe=62D1ADFD' />
            </div>

            <div className='footer-post'>
                {/* PERGUNTAR PARA O PROFESSOR PORQUE O IMPORT DO PROVIDER NÃO ESTÁ FUNCIONANDO NO APP.JSX COM OS ICONES DO POST */}
                <section className='engagement-post'>
                    <div className='icons-1'>
                    
                    
                        {showHeart ? (
                        <i onClick={showIcon} className="pi pi-heart-fill" style={{'fontSize': '26px', 'color': 'red'}}></i>
                        ) : (<i onClick={showIcon} className="pi pi-heart" style={{'fontSize': '26px'}}></i>
                        )}

                        <div className='icon'> < BsChat /> </div>
                        <div className='icon'> < FiSend /></div>

             

                    </div>
                    <div className='teste'>
                        {showBook ? (
                            <i onClick={showSave} className="pi pi-bookmark" style={{'fontSize': '26px'}}> </i>
                            ) : (<i onClick={showSave} className="pi pi-bookmark-fill" style={{'fontSize': '26px'}}>  </i>)
                        }
                    {/* <div className='icon'> < BsBookmark /> </div> */}
                    </div>    
                    

                </section>

                <section className='like'>
                    <span>
                        123 curtidas
                    </span>
                </section>

                <div className='legend'>

                    <p>
                        <span> markzuckerberg </span>
                        Mais um dia aproveitando os paraisos naturais.
                    </p>

                </div>
                <div className='time-post'>
                    <time>
                        HÁ 1 HORA
                    </time>
                </div>

                <div className='comment'>
                    <div className='icon'>
                        <BsEmojiSmile />
                    </div>    
                    <input  id='string'className='comentario' placeholder='adicione um comentário...' />
                    <button type="submit" id='enviar' form="form1" value="Submit">Submit</button>

                    {/* <p id='paragrafo' >  </p> */}
                        
                </div>


            <header className='header-post'>

                <div className='info-post'>

                    <img className='img-perfil' src="https://pps.whatsapp.net/v/t61.24694-24/290758130_1092514441643740_3704723820387255799_n.jpg?ccb=11-4&oh=78102176ca955abd9cb161fab6887f19&oe=62D10E5F" />

                    <p style={{ cursor: 'pointer' }}>

                        raaissacunha_

                    </p>
                </div>

                <FiMoreHorizontal style={{ cursor: 'pointer' }} />

            </header>

            <div className='image-post'>
                <img src='https://pps.whatsapp.net/v/t61.24694-24/290758130_1092514441643740_3704723820387255799_n.jpg?ccb=11-4&oh=78102176ca955abd9cb161fab6887f19&oe=62D10E5F' />
            </div>

            <div className='footer-post'>
                {/* PERGUNTAR PARA O PROFESSOR PORQUE O IMPORT DO PROVIDER NÃO ESTÁ FUNCIONANDO NO APP.JSX COM OS ICONES DO POST */}
                <section className='engagement-post'>
                    <div className='icons-1'>
                    
                    
                        {showHeart ? (
                        <i onClick={showIcon} className="pi pi-heart-fill" style={{'fontSize': '26px', 'color': 'red'}}></i>
                        ) : (<i onClick={showIcon} className="pi pi-heart" style={{'fontSize': '26px'}}></i>
                        )}

                        <div className='icon'> < BsChat /> </div>
                        <div className='icon'> < FiSend /></div>

             

                    </div>
                    <div className='teste'>
                        {showBook ? (
                            <i onClick={showSave} className="pi pi-bookmark" style={{'fontSize': '26px'}}> </i>
                            ) : (<i onClick={showSave} className="pi pi-bookmark-fill" style={{'fontSize': '26px'}}>  </i>)
                        }
                    {/* <div className='icon'> < BsBookmark /> </div> */}
                    </div>    
                    

                </section>

                <section className='like'>
                    <span>
                        123 curtidas
                    </span>
                </section>

                <div className='legend'>

                    <p>
                        <span> markzuckerberg </span>
                        Mais um dia cheio de produtividade e alegria em nossa empresa Meta
                    </p>

                </div>
                <div className='time-post'>
                    <time>
                        HÁ 1 HORA
                    </time>
                </div>

                <div className='comment'>
                    <div className='icon'>
                        <BsEmojiSmile />
                    </div>    

                    <input   className='comentario' placeholder='adicione um comentário...' />
                    <button> Publicar </button>
                    
                </div>

                
{/*    */}

            </div>

            <header className='header-post'>

                <div className='info-post'>

                    <img className='img-perfil' src="https://pps.whatsapp.net/v/t61.24694-24/123666164_560834658719232_7438346262373302720_n.jpg?ccb=11-4&oh=110d3b4ec536ba9e40ecc158c12ca9bd&oe=62D17C7F" />

                    <p style={{ cursor: 'pointer' }}>

                        maclaudcorreia

                    </p>
                </div>

                <FiMoreHorizontal style={{ cursor: 'pointer' }} />

            </header>

            <div className='image-post'>
                <img src='https://pps.whatsapp.net/v/t61.24694-24/123666164_560834658719232_7438346262373302720_n.jpg?ccb=11-4&oh=110d3b4ec536ba9e40ecc158c12ca9bd&oe=62D17C7F' />
            </div>

            <div className='footer-post'>
                {/* PERGUNTAR PARA O PROFESSOR PORQUE O IMPORT DO PROVIDER NÃO ESTÁ FUNCIONANDO NO APP.JSX COM OS ICONES DO POST */}
                <section className='engagement-post'>
                    <div className='icons-1'>
                    
                    
                        {showHeart ? (
                        <i onClick={showIcon} className="pi pi-heart-fill" style={{'fontSize': '26px', 'color': 'red'}}></i>
                        ) : (<i onClick={showIcon} className="pi pi-heart" style={{'fontSize': '26px'}}></i>
                        )}

                        <div className='icon'> < BsChat /> </div>
                        <div className='icon'> < FiSend /></div>

             

                    </div>
                    <div className='teste'>
                        {showBook ? (
                            <i onClick={showSave} className="pi pi-bookmark" style={{'fontSize': '26px'}}> </i>
                            ) : (<i onClick={showSave} className="pi pi-bookmark-fill" style={{'fontSize': '26px'}}>  </i>)
                        }
                    {/* <div className='icon'> < BsBookmark /> </div> */}
                    </div>    
                    

                </section>

                <section className='like'>
                    <span>
                        123 curtidas
                    </span>
                </section>

                <div className='legend'>

                    <p>
                        <span> markzuckerberg </span>
                        Mais um dia cheio de produtividade e alegria em nossa empresa Meta
                    </p>

                </div>
                <div className='time-post'>
                    <time>
                        HÁ 1 HORA
                    </time>
                </div>

                <div className='comment'>
                    <div className='icon'>
                        <BsEmojiSmile />
                    </div >    
                        <input  type="text" className="form-control comentario" id="titleArea" nome="tituloarea" {...register('tituloarea', {required: "O campo precisa ter no máximo 20 caracteres.", maxLength: 20 }) }  placeholder='adicione um comentário...' />
                        <button id='enviar'> Publicar </button>
                        {/* <p id='paragrafo' >  </p> */}
                            
                    </div>

                </div>
               


            </div>


        </>
    )
}