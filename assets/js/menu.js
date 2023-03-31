$(document).ready(function(){

    // Monitorar os cliques em cima dos itens do menu
    $('.nav-link').click(function(e){
        e.preventDefault()
        // Salvando o link selecionado
        let url = $(this).attr('href')
        // Limpando a div com o conteúdo existente
        $('#content').empty()
        // Inserindo o novo conteúdo na DIV do conteúdo
        $('#content').load(url)
    })
    
})