let nome = "Kauã"
let idade = 16
let cidade  = "Apuiarés"
let profissao = "jogador de basquete"
let anoAtual = 2025

const anoNascimento = anoAtual - idade

let salario = 3000000
let bonus = 300
let salarioMes = salario + bonus 
let salarioAno = salarioMes*12
let salarioDobro = salarioAno*2

alert (` ========= RELATÓRIO DO USUÁRIO =========
    Nome: ${nome}
    Idade: ${idade}
    Ano de nascimento: ${anoNascimento}
    Cidade: ${cidade}
    Profissão: ${profissao}
    
    Salário base: U$${salario}
    Bônus: U$${bonus}
    Total mensal: U$${salarioMes}
    Total ano: U$${salarioAno}
    Total anual (salário dobrado): U$${salarioDobro}
    ===================================`)
