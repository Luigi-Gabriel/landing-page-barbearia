import logoBarbearia from '../../assets/logo-barbearia.jpg'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0A0A0A] backdrop-blur-sm border-b border-[rgba(212,175,55,0.2)] z-50">
      <div className='flex items-center gap -2'>
      <img src={logoBarbearia} alt="Logo Barbearia" />
      <span className='text-white'>Barberia  Navalha</span>
      </div>
      
    </header>
  )
}

export default Header