class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes;
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._inputData = document.querySelector('#data'); //acessando o elemento com ID data do Dom
        this._inputQuantidade = document.querySelector('#quantidade'); //acessando o elemento com ID quantidade do Dom
        this._inputValor = document.querySelector('#valor'); //acessando o elemento com ID valor do Dom
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
    }
}
