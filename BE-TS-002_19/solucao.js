class Imposto{
    static consultarImposto(salario){ //mudei pra static pq fazia mais sentido
        if (salario < 1903.98) {
            return 0;
        }
        if (salario < 2826.66) {
            return 7.5;
        }
        if (salario < 3751.06) {
            return 15;
        }
        if (salario < 4664.68) {
            return 22.5;
        }
        return 27.5;
    }
}

console.log(Imposto.consultarImposto(1500))
console.log(Imposto.consultarImposto(2826.65))
console.log(Imposto.consultarImposto(2826.66))
console.log(Imposto.consultarImposto(4664.67))
console.log(Imposto.consultarImposto(1000101))