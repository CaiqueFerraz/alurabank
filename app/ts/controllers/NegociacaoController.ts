
class NegociacaoController {
    private _inputData : HTMLInputElement;
    private _inputQuantidade : HTMLInputElement;
    private _inputValor : HTMLInputElement;
    private _negociacoes = new Negociacoes;
    private _negociacoesView = new NegociacoesView('#negociacoesView');


    constructor (){
        this._inputData = <HTMLInputElement> document.querySelector('#data'); //acessando o elemento com ID data do Dom
        this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade'); //acessando o elemento com ID quantidade do Dom
        this._inputValor = <HTMLInputElement> document.querySelector('#valor');//acessando o elemento com ID valor do Dom
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event : Event){
        event.preventDefault();

        const negociacao = new Negociacao(
           new Date(this._inputData.value.replace(/-/g,',')),
           parseInt(this._inputQuantidade.value),
           parseFloat(this._inputValor.value)
        );
        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);

        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
    }
}

