const users = [
    {name: 'Jean', technologies: ['HTML', 'CSS']},
    {name: 'Mateus', technologies: ['JavaScript', 'CSS']},
    {name: 'Camila', technologies: ['HTML', 'Node.js']},
]

//for (let i = 0; i < user.length; i++) {
    //console.log (`${user[i].name} trabalha com ${user[i].technologies}`)
 
//}

function useTechnology(user) {
    let result = false
    for (let i = 0; i < user.length; i++) {
        if (user[i].technologies[i] == `CSS`){
           return result = true
        }  
    }
}

function checkIfUserUseCSS(user) {
    for (let i = 0; i < user.length; i++) {
        const userUsesCSS = useTechnology(user[i]);
    
        if (userUsesCSS) {
            console.log (`O usuário ${user[i].name}, trabalha com CSS!`)
        }
    }
}
    
checkIfUserUseCSS(userUsesCSS)
