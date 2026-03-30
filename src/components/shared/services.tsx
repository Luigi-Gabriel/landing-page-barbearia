import { ServiceCard } from "./ServiceCard";

// 1. Dados dos serviços centralizados em um array
const meusServicos = [
  {
    icon: <span>✂️</span>, // Substitua pelos seus ícones (Heroicons, FontAwesome, etc.)
    title: "Corte Masculino",
    description: "Corte personalizado com técnicas modernas e acabamento impecável.",
    price: "R$ 35",
  },
  {
    icon: <span>🧔</span>,
    title: "Barba Completa",
    description: "Design, aparação e hidratação para deixar sua barba perfeita.",
    price: "R$ 30",
  },
  {
    icon: <span>🎁</span>,
    title: "Corte + Barba",
    description: "Combo completo com corte de cabelo e barba alinhada.",
    price: "R$ 60",
  },
  {
    icon: <span>👁️</span>,
    title: "Sobrancelha",
    description: "Design e alinhamento profissional de sobrancelhas.",
    price: "R$ 15",
  },
  {
    icon: <span>🎨</span>,
    title: "Pigmentação",
    description: "Pigmentação capilar para cobertura de fios brancos.",
    price: "R$ 40",
  },
  {
    icon: <span>👣</span>,
    title: "Pezinho",
    description: "Acabamento perfeito na nuca e contornos.",
    price: "R$ 10",
  },
];

// 2. Componente Services que renderiza o título e a grade
export function Services() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        
        {/* Título da Seção com linha dourada */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <h2 className="text-white text-6xl font-extrabold tracking-tighter">
            Serviços
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] rounded-full"></div>
        </div>

        {/* Grade de Cartões - 3 colunas em telas grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meusServicos.map((servico, index) => (
            <ServiceCard 
              key={index} // Chave única obrigatória para o React
              icon={servico.icon}
              title={servico.title}
              description={servico.description}
              price={servico.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}