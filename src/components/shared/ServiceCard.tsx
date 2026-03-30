import React from 'react';

// 1. Definição da interface para as propriedades do card
interface ServiceCardProps {
  icon: React.ReactNode; // Aceita qualquer elemento React (ícone, emoji, etc.)
  title: string;
  description: string;
  price: string;
}

// 2. Componente ServiceCard atualizado com os novos estilos
export const ServiceCard = ({ icon, title, description, price }: ServiceCardProps) => {
  return (
    <div
      className="bg-[#1C1C1C] border border-[#2A2A2A] rounded-2xl p-8 
      hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-1 
      hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.1)] group flex flex-col"
    >
      {/* Container do Ícone - fundo escuro com ícone dourado */}
      <div
        className="w-14 h-14 rounded-xl bg-[#2A2A2A] flex items-center justify-center 
        group-hover:bg-[#D4AF37]/10 transition-colors duration-300 text-3xl 
        text-[#D4AF37] mb-8"
      >
        {icon}
      </div>
      
      {/* Área de Textos */}
      <div className="flex flex-col grow gap-2">
        <h3 className="text-white text-3xl font-bold tracking-tight mb-2">
          {title}
        </h3>
        
        <p className="text-neutral-400 text-lg leading-relaxed mb-6 grow">
          {description}
        </p>
        
        {/* Linha divisória sutil acima do preço */}
        <div className="border-t border-[#2A2A2A] pt-6 mt-auto">
          <span className="text-[#D4AF37] font-bold text-2xl">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};