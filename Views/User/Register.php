<?php session_start();
echo session_id();
 ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php
    $user = $_GET["typeUser"];
    echo "<title>Cadastro - $user</title>"
    ?>
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../../wwwroot/js/maskInput.js"></script>
    <style>
        .card {
            border-radius: 1rem;
        }
    </style>
</head>

<body>
    <div class="container-fluid min-vh-100">
        <div class="row vh-100">
            <div class="col-5 bg-secondary">
                <div class="d-flex flex-column justify-content-center h-100 w-100">
                    <div class="d-flex flex-column justify-content-center">
                        <div class="text-center">
                            <img src="../../wwwroot/images/icon.png" class="img-fluid" width="350" height="250">
                            <h1 class="text-white">Drivan</h1>
                        </div>
                        <p class="text-white fs-5 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus
                            saepe eum ipsa soluta eveniet voluptatem suscipit animi voluptates.</p>
                    </div>
                </div>
            </div>
            <div class="col-7 h-100">
                <div class="d-flex flex-column justify-content-center h-100">
                    <div class="card py-3 px-4 mx-2 shadow">
                        <div class="card-body text-black">
                            <h5 class="fw-normal mb-3" style="letter-spacing: 1px;"><?php echo "Cadastro $user" ?></h5>
                            <?= "<form action='../Home/index$user.php' method='POST'>"; ?>
                                <div class="mb-3">
                                    <input type="hidden" name="user" value= <?php echo "'$user'"; ?>>
                                    <input type="hidden" name="from" value="RegisterP">
                                    <input type="text" class="form-control" id="cpf" placeholder="CPF" name="cpf">
                                </div>
                                <div class="mb-3">

                                    <input type="text" class="form-control" id="nome" placeholder="Nome" name="nome">
                                </div>
                                <div class="mb-3">

                                    <input type="email" class="form-control" id="email" placeholder="E-mail" name="email">
                                </div>
                                <div class="mb-3">

                                    <input type="tel" class="form-control" id="phone" placeholder="Telefone" name="phone" maxlength="11">
                                </div>
                                <div class="mb-3">

                                    <input type="password" class="form-control" id="pwd" placeholder="Senha" name="pswd">
                                </div>
                                <div class="mb-3">

                                    <input type="password" class="form-control" id="pwdConfirm" placeholder="Confirmar senha" name="pwdConfirm">
                                </div>
                                <div class="d-grid gap-2 d-md-flex col-6 pt-2 me-auto">
                                    <button type="submit" class="btn btn-primary rounded-pill">Cadastrar</button>
                                    <a class="btn btn-warning rounded-pill" href="../index.php">Voltar a Tela de Login</a>
                                </div>

                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
</body>

</html>