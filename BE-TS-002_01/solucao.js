class Triangulo{
    constructor(ladoA, ladoB, ladoC){
        this.A = ladoA;
        this.B = ladoB;
        this.C = ladoC;
    }
    
    tipo(){
        if (!Triangulo.validar(this)) {
            return "invalido";
        }
        if (this.A === this.B && this.A === this.C) {
            return "equilatero";                
        } else if(this.A === this.B || this.B  === this.C  || this.A  === this.C){
            return "isoceles";
        } else return "escaleno";
    }

    static validar(triangulo){
        let A = triangulo.A
        let B = triangulo.B
        let C = triangulo.C
        if (A <= 0 || B <= 0 || C <= 0) {
            return false
        }
        if (A + B < C || B + C < A || C + B < A) {
            return false
        }
        return true
    }
}

//Teste
const triangulo1 = new Triangulo(1, 1, 1);
const triangulo2 = new Triangulo(2, 3, 2);
const triangulo3 = new Triangulo(3, 4, 5);
const triangulo4 = new Triangulo(0, 0, 0);

console.log(triangulo1.tipo())
console.log(triangulo2.tipo())
console.log(triangulo3.tipo())
console.log(triangulo4.tipo())
