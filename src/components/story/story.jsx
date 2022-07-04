import { useEffect } from 'react'
import './story.css'

export function Story() {



// criar uma lista de comentario para guardar os comentarios e depois criar list.map quando abrir os comentario



    // const [listStory, setListStory] = useState([])

    // useEffect(()=>{
    //     const history = ['', ''];
    //     setListStory(history)
    // },[setListStory])

    // const api = axios.story({
    //     baseUrl: `https://api.github.com/users/esin/following{/other_user}`
    // })
   

    // const [cardStories, setCardStories] = useState([1, 2, 3, 4, 5, 6, 7])

    // const addStory = () => {
    //     const nextItem - Math.max(1, items.lenght + 1)
    //     setCardStories([...items, nextItem])
    // }

    // const removeStories = () => {
    //     const endRange = Math.max(0, items.lenght - 1)
    //     setItems(items.slice(0, endRange))
    // }



    // class App extends Components{
    //     state ={
    //         stories:[]
    //         }
    //     }

    //     async componentStoryCarousel() => {
    //         const response = api.get('1')
    //         this.setState = ({stories: response.data})
    //     }

    //     render(){
    //         const {postStory} = this.state
    //     }

    // return (
    //     <div className='container'>  
    //         <div className='controls-wrapper'>
    //             <button onClick={addStory}> Add Story</button>
    //             <button onClick={removeStory}>Remove Story</button>
    //         </div>
    //         <hr className='separetor'> </hr>

    //         <div className='carousel-wrapper'>
    //             <Carousel breakPoints={breakPoints}>
    //                 {items.map((story) => (
    //                 <item key={story}>{story}</item>
                        
    //                 ))}

    //             </Carousel> 
    //         </div>

    //     </div>)

        // <Carousel> 
        //     {postStory.map(stories => 

        //         <div className='containerStory'> 
        //             <ul className={ul}> 
        //                 <li> 
        //                     <img src={stories.avatar_url}/>

        //                 </li>
        //             </ul>
        //         </div>
        //     )}
        // </Carousel>

    return (
        
        <div className='container'>

            <div className='user-elements'>

                <div className='border-img'>

                    <img className='img-story' src="https://pps.whatsapp.net/v/t61.24694-24/291514025_457571925701690_2497527226258017271_n.jpg?ccb=11-4&oh=01_AVxib4yXdGbWpJatRfUMkBZISRMTGjzt_tbG0Kjogwf1cg&oe=62D1ADFD" />
                    {/* tentar usar prop para evitar repeticões */}

                </div>

                <span>

                    ssamuelm...
                </span>

            </div>
            <div className='user-elements'>

                <div className='border-img'>

                    <img className='img-story' src="https://pps.whatsapp.net/v/t61.24694-24/290758130_1092514441643740_3704723820387255799_n.jpg?ccb=11-4&oh=78102176ca955abd9cb161fab6887f19&oe=62D10E5F" />
                    {/* tentar usar prop para evitar repeticões */}

                </div>

                <span>

                    raaissacu...
                </span>

            </div>
            <div className='user-elements'>

                <div className='border-img'>

                    <img className='img-story' src="https://pps.whatsapp.net/v/t61.24694-24/123666164_560834658719232_7438346262373302720_n.jpg?ccb=11-4&oh=110d3b4ec536ba9e40ecc158c12ca9bd&oe=62D17C7F" />
                    {/* tentar usar prop para evitar repeticões */}

                </div>

                <span>

                    maclaudco...
                </span>

            </div>

        </div>

        
        
        
        
        )

}

/*VERIFICAR PQ A PROPS DAQ DE BAIXO NÃO ESTÁ RENDERIZANDO*/
// export default function Story() {
//     return(
//         <>
//             < PropStory imagem="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3144161:1633433605/Mark-Zuckerberg.jpg?f=default&$p$f=daecd88" nomeUsuario="markzuckerberg" />
//         </>
//     )