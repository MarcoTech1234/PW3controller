
<?php

    // Instância do nosso conexão com o banco de dados
    include('../../conexao/conn.php');

    try {
        // Gerar a querie de inserção de dados no B.D.
        $sql = "UPDATE CONTATO SET NOME = ?, TELEFONE = ?, CELULAR = ?, EMAIL = ? WHERE ID = ?";
        // Iremos preparar a nossa querie para gerar o objeto de inserção ao B.D.
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $_REQUEST['NOME'],
            $_REQUEST['TELEFONE'],
            $_REQUEST['CELULAR'],
            $_REQUEST['EMAIL'],
            $_REQUEST['ID']
        ]);
        $dados = array(
            'type' => 'success',
            'mensagem' => 'Registro atualizado com sucesso!'
        );
    } catch (PDOException $e) {
        $dados = array(
            'type' => 'error',
            'mensagem' => 'Erro ao atualizar o registro: '.$e
        );
    }

    echo json_encode($dados);