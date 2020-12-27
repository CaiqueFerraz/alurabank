class Negociacoes {
    constructor() {
        this._negociacoes = []; //Criando o Array onde serão armazenados essas negociações
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao); //Incluindo no array os dados da negociação setada
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
