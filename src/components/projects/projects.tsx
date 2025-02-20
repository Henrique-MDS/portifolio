import Card from "../cards/card";

export default function Projects() {
  return (
    <div className="p-12 flex flex-col gap-4" id="projects">
      <h2 className="text-7xl text-center">Projects</h2>
      <p className="text-center">Veja alguns dos meus projetos!</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Card 
            title="Calculadora" 
            description="Calculadora funcional com JavaScript, design feito com HTML e css responsivo." 
            className="calculator"
            link="https://henrique-mds.github.io/treinos-front-end/calculator-app-JS/index.html"
        />
        <Card 
            title="Aplicativo de Banco" 
            description="Website de um banco totalmente responsivo e com menu feito com JavaScript." 
            className="easy"
            link="https://henrique-mds.github.io/treinos-front-end/easyBank-JS/index.html"
        />
        <Card 
            title="pokedex" 
            description="Projeto para uso de APIs" 
            className="pokedex"
            link="https://henrique-mds.github.io/treinos-front-end/pokedex/index.html"
        />
        <Card 
            title="Guardiões da Galaxia" 
            description="Website com interações e animações usando css html e JavaScript" 
            className="guardioes"
            link="https://henrique-mds.github.io/treinos-front-end/project-gdg-JS/index.html"
        />
        <Card 
            title="To-Do App" 
            description="Lista de afazeres feita com javascript e modo noturno." 
            className="todo"
            link="https://henrique-mds.github.io/treinos-front-end/Todo-app-JS/index.html"
        />
        <Card 
            title="LoopStudio Site" 
            description="Site totalmente resposivo com o uso de flexbox" 
            className="loopstudio"
            link="https://henrique-mds.github.io/treinos-front-end/loopstudios-JS/index.html"
        />
      </div>
    </div>
  )
}
