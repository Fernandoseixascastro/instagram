import './layout.css'
import {Story} from '../story/story.jsx'
import { Post } from '../post/post.jsx'
import { Suggestion } from '../suggestion/suggestion'


export function Layout(){
    return(
        <>

            <div className='main-grid' style={{gridGap: "50px"}}>
                
                <div className='first-column' style={{gridArea:'firstColumn'}}>
                    <div className='box'> 
                        < Story />
                    </div>

                    <div className='box' style={{margin:'10px 0'}}> 
                        < Post />
                    </div>
                </div>

                <div className='second-column'>
                    <div className='suggestion-box'>
                        
                        <Suggestion/>
                    
                    </div>
                </div>
            </div>
            
        </>
    )
}