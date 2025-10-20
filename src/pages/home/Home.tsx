import {  FaGithubSquare, FaLinkedin } from 'react-icons/fa'


function Home() {
  return (

    <main id='inicio' className=' text-gray-100 md:flex items-center  justify-center h-screen'>
            <div className='text-center lg:p-32  font-extrabold'>
          <span className='text-2xl  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500' >Desenvolvedor de Software</span>
          <div className='flex flex-col items-center gap-8'>
          <h1 className='text-4xl md:text-7xl font-mono' >
            Olá, Eu sou<br /> <span className=' bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 '>Leonardo Gobetti</span>
          </h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 '>
                <a href="https://github.com/Leogb2014"><button className='border border-gray-600 rounded-xl shadow-lg flex items-center 
               hover:shadow-green-400 gap-1 cursor-pointer w-40 h-10 justify-center 
                font-semibold'>GitHub <FaGithubSquare className='text-green-400  w-6 h-6'/></button></a>
               
               <a href="http://www.linkedin.com/in/leonardo-gobetti"><button className='border border-gray-600 rounded-xl shadow-lg flex items-center 
               hover:shadow-green-400 gap-1 cursor-pointer w-40 h-10 justify-center 
                font-semibold'>LinkedIn <FaLinkedin size={24}  className='text-green-400'/>
                
                </button></a>
                
               
             </div> 


          </div>
        
          
        </div>
       
    
    </main>
  )
}

export default Home