$(document).ready(function(){

    // Monitorar o click com o botão salvar

    $('.btn-delete').click(function(e){
        e.preventDefault()

        let dados = 'ID='+$(this).attr('id')

        $.ajax({
        dataType: 'JSON', // 
        type: 'POST',  // Como vai ser o envio e retorno
        assync: true, // Como eu vou tratar essa requisição (não e ao mesmo tempo que vai carregar essa requisição)
        data: dados,
        url: 'api/contato/model/delete.php', 
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