const Programador = {
    Nome: "Jean",
    Idade: "23" 
}

const Objeto = {
    Tecnologias: [
    {
       Nome: "C++", Especialidade: "Desktop"
    },
    {
        Nome: "Python", Especialidade: "Data Science"
    },
    {
        Nome: "JavaScript", Especialidade: "Web/Mobile"
    }
]

}

console.log (`O usuario ${Programador.Nome} tem ${Programador.Idade} anos e usa a tecnologia ${Objeto.Tecnologias[2].Nome} com especialidade em ${Objeto.Tecnologias[2].Especialidade}.`)