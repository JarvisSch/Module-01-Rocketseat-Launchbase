//Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:
//Nome: Rocketseat
//Cor: Roxo
//Foco: Programação
//Endereço:
//Rua: Rua Guilherme Gembala
//Número: 260

const Empresa = 
    {
        Nome: "Rocketseat",
        Cor: "Roxo",
        Foco: "Programação",
        Endereço:{   
            Rua: "Rua Guilherme Gembala",
            Número: "260"
        }
    }  

console.log ( `A empresa ${Empresa.Nome} esta localizada na ${Empresa.Endereço.Rua}, ${Empresa.Endereço.Número}.`)