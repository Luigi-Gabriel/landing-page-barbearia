import logoBarbearia from '../../assets/logo-barbearia.jpg'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0A0A0A] backdrop-blur-sm border-b border-[rgba(212,175,55,0.2)] z-50">
      
      {/* 1. Adicionei px-6 py-3 para dar um respiro interno (padding) */}
      {/* 2. justify-between empurra o grupo do Logo para a esquerda e o Nav para a direita */}
      <div className='flex items-center justify-between px-6 py-3'>
        
        {/* Agrupamos o Logo e o Nome em uma div separada com um gap-3 */}
        <div className='flex items-center gap-3'>
          <img src={logoBarbearia} alt="Logo Barbearia" className='w-10 h-10 object-cover rounded-md' />
          <span className='text-white font-semibold text-lg'>Barbearia Navalha</span>
        </div>
        
        <nav className='flex items-center'>
          {/* Corrigi "itens-start" para "items-start" e "md : items-center" para "md:items-center" */}
          <ul className='flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 w-full md:w-auto'>
            {/* Adicionei as transições no Início também para manter o padrão */}
            <li className='text-white hover:text-[#D4AF37] cursor-pointer transition-colors duration-300'>Início</li>
            <li className='text-white hover:text-[#D4AF37] cursor-pointer transition-colors duration-300 text-left md:text-center'>Serviços</li>
            <li className='text-white hover:text-[#D4AF37] cursor-pointer transition-colors duration-300'>Sobre</li>
            <li className='text-white hover:text-[#D4AF37] cursor-pointer transition-colors duration-300'>Contato</li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header