import {Header} from './components/Header/index.jsx'
import { Layout } from './components/layout'
import './components/styles/global.css'
import { IconContext } from 'react-icons'


function App() {
    
  return (
  
    <IconContext.Provider value={{size: '26px'}} >    
      <Header />
      <Layout />
    </IconContext.Provider>

    
    )

  }

export default App
