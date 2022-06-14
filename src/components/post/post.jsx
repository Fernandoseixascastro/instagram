import './post.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'

export function Post(){
    return(
        <> 
        
            <header>

                <div className='info-post'>
                    
                    <img className= 'img-perfil' src="https://pps.whatsapp.net/v/t61.24694-24/247399656_753766799121341_8843168939025380055_n.jpg?ccb=11-4&oh=01_AVxOLm2Jz58XFj69hkhnaXfbjr22T35GEgGF3v50fF0uzQ&oe=62B3304E" />

                    <p>

                        fernandoseixasc_

                    </p>

                        <FiMoreHorizontal style={{cursor:'pointer'}}/>
                </div>

                <div className='image-post'>
                    <img src='https://pps.whatsapp.net/v/t61.24694-24/247399656_753766799121341_8843168939025380055_n.jpg?ccb=11-4&oh=01_AVxOLm2Jz58XFj69hkhnaXfbjr22T35GEgGF3v50fF0uzQ&oe=62B3304E' />
                </div> 

                <div className='footer-post'>

                    < FiHeart />

                </div>


            </header>
        
        </>    
    )
}