import { useEffect, useState } from 'react'
import './suggestion.css'
export function Suggestion() {


    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers ] = useState(5)
    const [followers, setFollow] = useState('Seguindo')

    
    const limit = suggestions.slice(0, limitUsers)
    const [dados, setDados] = useState([]) //criar uma funcao que vai receber os dados da api para que eu possa colocar para seguir ou não;

    // ou criar um um usestate no json(a parte que ele vai receber o json do link "https://api.github.com/users/gabrieldiasss/followers") que vai receber os dados e caso os que estiverem realmente seguindo ele vai retornar true or false;

    
    useEffect (() => {
        
        fetch(`https://api.github.com/users/gabrieldiasss/followers`)
        .then((response) =>{
            return response.json()
        })
        .then((result) => {
            setSuggestions(result)
        })
        .catch((err) => {
            throw new Error(err)
        })
    }, [])
    
    const followSuggestion = () => {

        if(followers == 'Seguindo'){
        setFollow('Seguir')
    }
        else{
            setFollow('Seguindo')
        }
    }
// console.log(suggestions)
    


{limit.map((suggestion, key) => (
    <div className='info-suggestion' key={key}>
        <img className='suggestion-img' src={`https://github.com/${suggestion.login}.png`} />
        <div>
            <span> {suggestion.login} </span>
            <p>Seguido por fernandoseixasc_</p>
        </div>
        <button className='Follow'>Seguir</button>
</div>))}


    return (
        <div className='container-suggestion'>
            <div className="header-suggestion">
                <img className='header-img' src="https://github.com/gabrieldiasss.png" />

                <div className="suggestion-info">
                    <div className="infos">
                        <span>
                            markzuckerberg
                        </span>
                        <p>Mark Zuckerberg</p>
                    </div>
                    <button className='change'>
                        Mudar

                    </button>
                </div>
            </div>

            <div className='header-main-suggestion'>
                <p>Sugestão para você</p>
                <span>Ver tudo</span>                {limit.map((suggestion, key) => (
                    <div className='info-suggestion' key={key}>
                        <img className='suggestion-img' src={`https://github.com/${suggestion.login}.png`} />
                        <div>
                            <span> {suggestion.login} </span>
                            <p>Seguido por fernandoseixasc_</p>
                        </div>
                        <button className='Follow'>Seguir</button>
                </div>))}

            </div>

            <div className='user-suggestion'>



            </div>

            <footer className='footer-suggestion'>
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>

    )
}
