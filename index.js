// 1. Cadastro do aluno
const nome = "Pedro Cavani";
const idade = 17;
const curso = "Desenvolvimento de Sistemas";
const nota1 = 8;
const nota2 = 8.5;
const nota3 = 9;
const faltas = 5;
const matriculado = true;

// Exibindo os dados cadastrados
console.log("=== CADASTRO DO ALUNO ===");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Primeira nota:", nota1);
console.log("Segunda nota:", nota2);
console.log("Terceira nota:", nota3);
console.log("Quantidade de faltas:", faltas);
console.log("Matriculado:", matriculado);

// 2. Cálculo da média
const media = (nota1 + nota2 + nota3) / 3;

console.log("\n=== CÁLCULO DA MÉDIA ===");
console.log("Média:", media.toFixed(2));

// 3. Situação acadêmica
let situacao;

if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Situação acadêmica:", situacao);

// 4. Verificação de frequência
const totalAulas = 40;
const aulasFrequentadas = totalAulas - faltas;
const frequencia = (aulasFrequentadas / totalAulas) * 100;

console.log("\n=== FREQUÊNCIA ===");
console.log("Aulas frequentadas:", aulasFrequentadas);
console.log("Percentual de frequência:", frequencia.toFixed(2) + "%");

if (frequencia >= 75) {
    console.log("Frequência mínima atingida.");
} else {
    console.log("Frequência mínima não atingida.");
}

// 5. Verificação final
const aprovadoFinal = media >= 7 && frequencia >= 75 && matriculado;

console.log("\n=== RESULTADO FINAL ===");

if (aprovadoFinal) {
    console.log("Aluno aprovado nos critérios finais!");
} else {
    console.log("Aluno não aprovado nos critérios finais.");
}

// 6. Relatório final
console.log("\n=== RELATÓRIO FINAL ===");
console.log("Nome do aluno:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Média calculada:", media.toFixed(2));
console.log("Frequência:", frequencia.toFixed(2) + "%");
console.log("Situação acadêmica:", situacao);
console.log("Resultado final:", aprovadoFinal ? "Aprovado" : "Não aprovado");