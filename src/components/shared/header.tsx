import logoBarbearia from '../../assets/logo-barbearia.jpg'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0A0A0A] backdrop-blur-sm border-b border-[rgba(212,175,55,0.2)] z-50">
      <div className='flex items-center gap -2'>
      <img src={logoBarbearia} alt="Logo Barbearia"className='w-10 h-10 object-cover' />
      <span className='text-white'>Barberia  Navalha</span>
      <nav className='flex items-center'>
        <ul className=' flex flex-col md:flex-row itens-start md : items-center gap-4 md:gap-8 w-full md:w-auto'>
          <li className='text-white hover:text-[#D4AF37] cursor-pointer'>Inicio</li>
          <li className='text-white hover:text-[#D4AF37] cursor-pointer'>Serviços</li>
          <li className='text-white hover:text-[#D4AF37] cursor-pointer'>Sobre</li>
          <li className='text-white hover:text-[#D4AF37] cursor-pointer'>Contato</li>
        </ul>
      </nav>
      </div>
      
      
    </header>
  )
}

export default Header