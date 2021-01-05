const  Nome = 'Camila'
const  Sexo = "F"   
const  Idade = 55
const  Contribuição = 25

const ContTotal = Idade + Contribuição;

if (Sexo == "M" && Contribuição >= 35){
    if (ContTotal >= 95){
        console.log (`${Nome}, Você pode se aposentar!`)
    } else { 
        console.log (`${Nome}, Você ainda não pode se aposentar!`) }

} else { 
    if ( Contribuição >=30 && ContTotal >= 85 ){ 
    console.log (`${Nome}, Você pode se aposentar!`) }
     else { 
    console.log (`${Nome}, Você ainda não pode se aposentar!`)
    }
}   