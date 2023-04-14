$(document).ready(function(){

    // Monitorar o click com o botão salvar

    $('.btn-edit').click(function(e){
        e.preventDefault()

        let dados = 'ID='+$(this).attr('id')

        $.ajax({
        dataType: 'JSON', // 
        type: 'POST',  // Como vai ser o envio e retorno
        assync: true, // Como eu vou tratar essa requisição (não e ao mesmo tempo que vai carregar essa requisição)
        data: dados,
        url: 'api/contato/model/view.php', 
        success: function(dados){
            for(const result of dados){
                $('#content').empty()
                $('#content').load('assets/contato/view/form.html', function(){
                    $('h4').empty()
                    $('h4').append('Edição de contato')
                    $('#NOME').val(result.NOME)
                    $('#TELEFONE').val(result.TELEFONE)
                    $('#EMAIL').val(result.EMAIL)
                    $('#ID').val(result.ID)

                    $('.btn-outline-secondary').hide()
                    $('.btn-outline-success').empty()
                    $('.btn-outline-success').append('Atualizar')
                    $('.btn-outline-success').removeClass('btn-save')
                    $('.btn-outline-success').addClass('btn-update')
                })
            }
            $('body').append(`<script src="assets/contato/controller/update.js"></script>`)
        }
    })
})
})