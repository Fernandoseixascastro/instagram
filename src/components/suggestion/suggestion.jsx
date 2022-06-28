import { useEffect, useState } from 'react'
import './suggestion.css'
export function Suggestion() {


    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers ] = useState(5)

    const limit = suggestions.slice(0, limitUsers)
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
                <span>Ver tudo</span>
            </div>

            <div className='user-suggestion'>

                {limit.map((suggestion, key) => (
                    <div className='info-suggestion' key={key}>
                        <img className='suggestion-img' src={`https://github.com/${suggestion.login}.png`} />
                        <div>
                            <span> {suggestion.login} </span>
                            <p>Seguido por fernandoseixasc_</p>
                        </div>
                        <button className='Follow'>Seguir</button>
                </div>))}


            </div>

            <footer className='footer-suggestion'>
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>

    )
}