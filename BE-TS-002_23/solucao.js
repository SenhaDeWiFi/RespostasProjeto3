class Analisador{
    mesclados = []

    mesclar(names = [], emails){
        this.mesclados = names.map((element, index) => {
            return { email: emails[index], name : element}
        });
    }

    listarMesclados(){
        return this.mesclados
    }
}

//Teste
const names = ["João", "Mário"];
const emails = ["joao@gmail.com", "mario@msn.com"];

const analisador = new Analisador();
analisador.mesclar(names, emails);
console.log(analisador.listarMesclados())