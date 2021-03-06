import "./header.css"
import {useState} from 'react'
import { AiOutlineSearch, AiFillHome  } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'



export function Header() {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }
    
    const alert = (e) => {
        window.alert("Funcionou")
    }

    return (

        <header className="Header">

            <div className="container">
                {/* <h1 onClick={ alert } style={{cursor: "pointer"}}> {text} </h1> */}
                <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" style={{cursor:'pointer'}}/>

            </div>

            <div style={{backgroundColor:"#eee", display: "flex", alignItems:"center", padding:"5px"}}>

   
                   
                <AiOutlineSearch />
                <input placeholder= 'Buscar'    style={{ marginLeft:'15px', 
                backgroundColor:'#eee'}} onChange={handleChange} />
                

            </div>

            <div className='icons' >

                < AiFillHome />
                < RiMessengerLine />
                < BsPlusSquare />
                < MdOutlineExplore />
                < FiHeart />

                <img src="https://netshare.com.br/wp-content/uploads/2018/01/quem-inventou-o-facebook-1.jpg"  className='img-user'/>
            </div>


        </header>
    


    )

}
