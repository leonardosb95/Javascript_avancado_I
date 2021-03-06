class NegociacaoController{

    constructor() {//Deixamos o acesso a document dentro do constructor, para não acessar o DOM diversas vezes =

        let $ = document.querySelector.bind(document);//Abreviando o document, parecido com jquery
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacaoView= new NegociacoesView($("#negociacaoView"));
        this._negociacaoView.update(this._listaNegociacoes);


        this._mensagem= new Mensagem();
        this._mensagemView= new MensagemView($("#MensagemView"));
        this._mensagemView.update(this._mensagem);

    }


    adiciona(event) {
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagem.texto='Negociacao adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        console.log(this._listaNegociacoes);
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();


    }


}