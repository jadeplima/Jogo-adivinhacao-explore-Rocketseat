let result = prompt("Advinhe o número que estou pensando? Está entre o 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente")
    xAttempts
}

alert(`Parabéns! O número que eu pensei foi ${ranbomNumber} e você adivinhou o número em ${xAttempts}`)