
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import Menubar from './Components/SideMenu/Menubar'

function App() {


  return (
    <>
    <div className='flex'>  
      <div className='w-[20%] absolute z-10'>
        <Menubar/>
      </div> 
      <div className='w-[80%]'>
       <NavBar/>
      </div>
      <div>
      </div>
    </div>
    </>
  )
}

export default App
