export default function Hero() {
  return (
    <section className="relative bg-[#0d0d0d] min-h-[80vh] flex items-center overflow-hidden">

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16 py-16">
        
        {/* Coluna da Esquerda (Textos e Botões) */}
        <div className="flex-1 space-y-8 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            Corte na régua, barba alinhada e atendimento de respeito.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            Transforme seu visual em nossa barbearia. Profissionais especializados, ambiente premium e serviço de excelência para o homem moderno.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-[#d4a33f] text-black font-bold px-8 py-3.5 rounded-md hover:bg-[#b88c35] transition-colors duration-300">
              Agendar no WhatsApp
            </button>
            <button className="border border-[#d4a33f] text-[#d4a33f] font-bold px-8 py-3.5 rounded-md hover:bg-[#d4a33f]/10 transition-colors duration-300">
              Ver serviços
            </button>
          </div>
        </div>

        {/* Coluna da Direita (Caixa com Ícone) */}
        <div className="flex-1 w-full lg:w-auto">
          {/* Aplicadas as correções: aspect-4/3 e bg-linear-to-tr */}
          <div className="w-full max-w-lg mx-auto aspect-4/3 rounded-2xl border border-[#d4a33f] bg-linear-to-tr from-[#000000] to-[#d4a33f]/10 backdrop-blur-sm flex items-center justify-center shadow-2xl relative">

            <svg
              className="w-28 h-28 text-[#d4a33f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-4.879-4.879l-4.242-4.242m4.242 4.242L19 9m-4.879 4.879l-4.242 4.242m-4.243-4.243a3 3 0 11-4.242-4.242 3 3 0 014.242 4.242zm8.485-8.485a3 3 0 11-4.242-4.242 3 3 0 014.242 4.242z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 4l.5 1.5L21 6l-1.5.5L19 8l-.5-1.5L17 6l1.5-.5L19 4z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 17l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5.5-1z" />
            </svg>

          </div>
        </div>
        
      </div>
    </section>
  );
}