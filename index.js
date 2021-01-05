// Criar um programa que calcula a média
// das das turmas de alunos e envia
// mensagem do calculo da média


const AlunosdaturmaA = [
    {
        Nome: "Jean",
        Nota: 9.4
    },
    {
        Nome: "Camila",
        Nota: 10
    },
    {
        Nome: "Mateus",
        Nota: 9.5
    },
    {
        Nome: "Arys",
        Nota: 10
    },
    {
        Nome: "George",
        Nota: 0
    },
]

const AlunosdaturmaB = [
    {
        Nome: "Carlos",
        Nota: 2
    },
    {
        Nome: "Magali",
        Nota: 8.5
    },
    {
        Nome: "Henrique",
        Nota: 2
    },
    {
        Nome: "Lane",
        Nota: 7
    },
]

function CalculaMedia(Alunos) {
    let soma = 0;
    for (let i = 0; i < Alunos.length; i++) {
        soma = soma + Alunos[i].Nota
    }
    const Media = soma / Alunos.length
    return Media
}


const Media1 = CalculaMedia(AlunosdaturmaA)

const Media2 = CalculaMedia(AlunosdaturmaB)



function EnviaMensagem(Media, turma){
    // Se a média for maior que 5, parabenizar a turma
if (Media > 5) {
    console.log(`A média da ${turma} foi de ${Media}! Parabéns!`)
} else{
    console.log(`A média da ${turma} foi menor que 5`)
}
//console.log(Media)
}

EnviaMensagem(Media1, `turmaA`)
EnviaMensagem(Media2, `turmaB`)

