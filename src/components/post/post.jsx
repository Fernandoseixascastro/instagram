import './post.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FiHeart , FiSend} from 'react-icons/fi'
import { BsChat , BsBookmark, BsEmojiSmile } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'


export function Post() {
    return (
        <>

            <header className='header-post'>

                <div className='info-post'>

                    <img className='img-perfil' src="https://netshare.com.br/wp-content/uploads/2018/01/quem-inventou-o-facebook-1.jpg" />

                    <p style={{ cursor: 'pointer' }}>

                        markzuckerberg

                    </p>
                </div>

                <FiMoreHorizontal style={{ cursor: 'pointer' }} />

            </header>

            <div className='image-post'>
                <img src='https://netshare.com.br/wp-content/uploads/2018/01/quem-inventou-o-facebook-1.jpg' />
            </div>

            <div className='footer-post'>
                <IconContext.Provider value={{size:'26px'}}>  
                {/* PERGUNTAR PARA O PROFESSOR PORQUE O IMPORT DO PROVIDER NÃO ESTÁ FUNCIONANDO NO APP.JSX COM OS ICONES DO POST */}
                    <section className='engagement-post'>
                        <div className='icons-1'>

                            <div className='icon'> < BsChat /> </div>
                            <div className='icon'> < FiSend /></div>
                            <div className='icon'> < FiHeart /> </div>

                        </div>
                        <div className='icon'> < BsBookmark /> </div>
                    </section>
                </IconContext.Provider>

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
                    <div className=''>
                        <IconContext.Provider value={{size:'25px'}}>
                            <div className='icon'>
                                <BsEmojiSmile/>
                            </div>
                        </IconContext.Provider> 

                        <input placeholder='adicione um comentário...' />
                        <button> Publicar </button>
                    </div>
                </div>
            

            </div>

        </>
    )
}