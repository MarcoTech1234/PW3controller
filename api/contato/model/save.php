
<?php

    // Instância do nosso conexão com o banco de dados
    include('../../conexao/conn.php');

    try {
        // Gerar a querie de inserção de dados no B.D.
        $sql = "INSERT INTO CONTATO (NOME, TELEFONE, CELULAR, EMAIL) VALUES (?, ?, ?, ?)";
        // Iremos preparar a nossa querie para gerar o objeto de inserção ao B.D.
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            $_REQUEST['NOME'],
            $_REQUEST['TELEFONE'],
            $_REQUEST['CELULAR'],
            $_REQUEST['EMAIL']
        ]);
        $dados = array(
            'type' => 'success',
            'mensagem' => 'Registro salvo com sucesso!'
        );
    } catch (PDOException $e) {
        $dados = array(
            'type' => 'error',
            'mensagem' => 'Erro ao salvar o registro: '.$e
        );
    }

    echo json_encode($dados);