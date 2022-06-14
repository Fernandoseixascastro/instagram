import './layout.css'
import {Story} from '../story/story.jsx'
import { Post } from '../post/post.jsx'


export function Layout(){
    return(
        <>

            <div className='main-grid' style={{gridGap: "50px"}}>
                
                <div className='first-column' style={{gridArea:'firstColumn'}}>
                    <div className='box'> 
                        < Story />
                    </div>

                    <div className='box'> 
                        < Post />
                    </div>
                </div>

                <div className='fy' style={{gridArea:'secondColumn'}}>
                    
                    sugestão
                
                </div>
            </div>
            
        </>
    )
}