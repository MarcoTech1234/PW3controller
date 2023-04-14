$(document).ready(function(){

    $.ajax({
        dataType: 'JSON', // 
        type: 'POST',  // Como vai ser o envio e retorno
        assync: true, // Como eu vou tratar essa requisição (não e ao mesmo tempo que vai carregar essa requisição)
        url: 'api/contato/model/list.php', 
        success: function(dados){
            for(const result of dados){
                $('tbody').append(`
            <tr>
                <td class="text-center">${result.ID}</td>
                <td class="text-left">${result.NOME}</td>
                <td class="text-center">${result.TELEFONE}</td>
                <td class="text-left">${result.EMAIL}</td>
                <td class="text-center">
                    <button id="${result.ID}" class="btn btn-info btn-edit">Editar</button>
                    <button id="${result.ID}" class="btn btn-danger btn-delete">Excluir</button>
                </td>
            </tr>
            `)
            }
            $('body').append(`<script src="assets/contato/controller/view.js"></script>`)
            $('body').append(`<script src="assets/contato/controller/delete.js"></script>`)
        }
    })
})