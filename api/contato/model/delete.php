
<?php

    // Instância do nosso conexão com o banco de dados
    include('../../conexao/conn.php');

    try {
        // Gerar a querie de inserção de dados no B.D.
        $sql = "DELETE FROM CONTATO WHERE ID = ?";
        // Iremos preparar a nossa querie para gerar o objeto de inserção ao B.D.
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $_REQUEST['ID']
        ]);
        $dados = array(
            'type' => 'success',
            'mensagem' => 'Registro excluído com sucesso!'
        );
    } catch (PDOException $e) {
        $dados = array(
            'type' => 'error',
            'mensagem' => 'Erro ao excluir o registro: '.$e
        );
    }

    echo json_encode($dados);