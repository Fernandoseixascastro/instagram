import './story.css'

export function Story() {
    return (

        <div className='container'>

            <div className='user-elements'>

                 <div className='border-img'>

                    <img className='img-story' src="https://pps.whatsapp.net/v/t61.24694-24/247399656_753766799121341_8843168939025380055_n.jpg?ccb=11-4&oh=01_AVxOLm2Jz58XFj69hkhnaXfbjr22T35GEgGF3v50fF0uzQ&oe=62B3304E" />
                    {/* tentar usar prop para evitar repeticões */}

                 </div>

                 <span>

                    fernandos...

                 </span>

            </div>

            <div className='user-elements'>

                <div className='border-img'>

                    <img className='img-story' src="https://pps.whatsapp.net/v/t61.24694-24/247399656_753766799121341_8843168939025380055_n.jpg?ccb=11-4&oh=01_AVxOLm2Jz58XFj69hkhnaXfbjr22T35GEgGF3v50fF0uzQ&oe=62B3304E" />
   {/* tentar usar prop para evitar repeticões */}

                </div>

                    <span>

                        fernandos...

                    </span>

                </div>
            

            </div>

    )
}