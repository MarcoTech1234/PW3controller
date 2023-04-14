$(document).ready(function(){

    // Monitorar o click com o botão salvar

    $('.btn-update').click(function(e){
        e.preventDefault()

        let dados = $('#form-contato').serialize() //dados armazenas de forma array associativa, que serão tranferindos num fluxo de dados, indo para php

        $.ajax({
        dataType: 'JSON', // 
        type: 'POST',  // Como vai ser o envio e retorno
        assync: true, // Como eu vou tratar essa requisição (não e ao mesmo tempo que vai carregar essa requisição)
        data: dados,
        url: 'api/contato/model/update.php', 
        success: function(dados){
            
            if(dados.type == "success"){
                alert(dados.mensagem);
                $('#content').empty()
                $('#content').load('assets/contato/view/list.html')
            } else {
                alert(dados.mensagem);
            }
        }
    })
})
})