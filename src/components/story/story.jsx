import './story.css'

export function Story() {
    return (

        <div className='container'>

            <div className='user-elements'>

                 <div className='border-img'>

                    <img className='img-story' src="https://netshare.com.br/wp-content/uploads/2018/01/quem-inventou-o-facebook-1.jpg" />
                    {/* tentar usar prop para evitar repeticões */}

                 </div>

                 <span>

                    fernandos...

                 </span>

            </div>

            <div className='user-elements'>

                <div className='border-img'>

                    <img className='img-story' src="https://netshare.com.br/wp-content/uploads/2018/01/quem-inventou-o-facebook-1.jpg" />
   {/* tentar usar prop para evitar repeticões */}

                </div>

                    <span>

                        fernandos...

                    </span>

                </div>
            

            </div>

    )
}