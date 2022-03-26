const fs = require("fs/promises");

const lerArquivo = async () => {
    try {
        const conteudo = await fs.readFile("./arquivo.txt");

        console.log(conteudo);
    } catch (error) {
        console.log("Deu ruim");
        enviaEmailProDev();
    } finally {}
};

lerArquivo();

console.log("Teste depois da leitura");

// await fs.readFile("./arquivo.txt").then().catch().finally()

function criarCartao(nome) {
    return new Promise(async (reject, resolve) => {
      if (nome == "vinicius") {
        return reject("Nome não é permitido");
      }
  
      await fs.appendFile("cartao-visita.txt", `Olá meu nome é ${nome}`);
      resolve();
    });
  }
  
  criarCartao("vinicius");
  