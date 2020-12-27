class Negociacoes { //criando a classe Negociacoes que vai receber todas as negociacoes e armazenar
    
    private _negociacoes : Negociacao[] = []; //Criando o Array onde serão armazenados essas negociações
    
    adiciona(negociacao: Negociacao) : void{ //Método que irá receber os valores da que foram setados na classe negociacao 
        this._negociacoes.push(negociacao)//Incluindo no array os dados da negociação setada
    }
    paraArray() : Negociacao[]{
        return [].concat(this._negociacoes);
    }
}