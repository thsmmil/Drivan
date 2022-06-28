<?php include('../Shared/layoutHeader.php'); ?>
<?php 
    $ApiEndpoint = "http://localhost:3030/passageiro/1313131313";
    $ch = curl_init($ApiEndpoint);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $user = json_decode(curl_exec($ch));
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil - Drivan</title>
</head>

<body>
    
    <section class="vh-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="card gutter-b mx-4 mt-4 shadow" style="border-radius: 1rem;">
                        <div class="card-header">
                            <div class="card-title">
                                <h3 class="card-label">
                                    Usuário
                                </h3>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="col-md-6">
                                <form>
                                    <!-- Email
                                    Senha
                                    Nome
                                    Telefone -->
                                    <h5>Alterar informações do usuário</h5>
                                    <div class="m-3 row">
                                        <label for="cpf" class="col-sm-4 col-form-label">CPF</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control-plaintext" id="cpf" value="<?="$user->CPF"?>" name="cpf" readonly />
                                        </div>

                                    </div>
                                    <div class="m-3 row">
                                        <label for="email" class="col-sm-4 col-form-label">E-mail</label>
                                        <div class="col-sm-8">
                                            <input type="email" class="form-control" id="email" value="<?= $user->Email ?>" name="email" required>
                                        </div>
                                    </div>
                                    <div class="m-3 row">
                                        <label for="nome" class="col-sm-4 col-form-label">Nome</label>
                                        <div class="col-sm-8">
                                            <input type="text" class="form-control" id="nome" value="<?= $user->Nome ?>" name="nome" required>
                                        </div>
                                    </div>
                                    <div class="m-3 row">
                                        <label for="phone" class="col-sm-4 col-form-label">Telefone</label>
                                        <div class="col-sm-8">
                                            <input type="tel" class="form-control" id="phone" value="<?= $user->Telefone ?>" name="phone" required>
                                        </div>
                                    </div>
                                    <div class="m-3 row">
                                        <label for="pwd" class="col-sm-4 col-form-label">Senha</label>
                                        <div class="col-sm-8">
                                            <input type="password" class="form-control" id="pwd" name="pwd" required>
                                        </div>
                                    </div>
                                    <div class="m-3 row">
                                        <label for="inputPassword" class="col-sm-4 col-form-label">Confirmar Senha</label>
                                        <div class="col-sm-8">
                                            <input type="password" class="form-control" id="pwdConfirm" name="pwdConfirm" required>
                                        </div>
                                    </div>
                                    <div class="ms-3">
                                        <button type="submit" class="btn btn-primary rounded-pill">Adicionar</button>
                                        <a class="btn btn-warning rounded-pill" href="./index.php">Voltar a Listagem</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</body>

</html>