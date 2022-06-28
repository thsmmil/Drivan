<?php session_start();
echo session_id();
if(isset($_SESSION["login"])){
    header("Location: /Drivan/Views/Home/index". $_SESSION["typeUser"] .".php", replace: false, response_code: 302);
    exit;
}
 ?>
<!DOCTYPE html>
<html lang="pt">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Drivan</title>
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="../wwwroot/css/indexLogin.css">
</head>

<body>
    <div class="container-fluid min-vh-100">
        <div class="row min-vh-100">
            <div class="col-5 bg-secondary">
                <div class="d-flex flex-column justify-content-center h-100 w-100">
                    <div class="d-flex flex-column justify-content-center">
                        <div class="text-center">
                            <img src="../wwwroot/images/icon.png" class="img-fluid" width="350" height="250">
                            <h1 class="text-white">Drivan</h1>
                        </div>
                        <p class="text-white fs-5 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus
                            saepe eum ipsa soluta eveniet voluptatem suscipit animi voluptates.</p>
                    </div>
                </div>
            </div>
            <div class="col-7 vh-100">
                <div class="d-flex flex-column justify-content-center h-100">
                    <div class="card py-3 px-4 mx-2" style="border-radius: 1rem;">
                        <div class="card-body text-black">
                            <h5 class="fw-normal mb-3" style="letter-spacing: 1px;">Acesse a sua conta!</h5>
                            <!-- ./../Controllers/LoginController.php -->
                            <form action="../Controllers/LoginController.php" method="POST">
                                <div class="mb-4">
                                    <label for="email" class="form-label">E-mail:</label>
                                    <input type="email" class="form-control" id="email" required placeholder="Insira seu e-mail" name="Email">
                                </div>
                                <div class="mb-4">
                                    <label for="pwd" class="form-label">Senha:</label>
                                    <input type="password" class="form-control" id="pwd" required placeholder="Insira sua senha" name="Senha">
                                </div>
                                <div class="form-check form-switch mb-3">
                                    <!-- <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="typeUser"> Passageiro
                                    </label> -->
                                        <input class="form-check-input" type="checkbox" id="typeUser" name="typeUser">
                                        <label class="form-check-label" for="typeUser">Passageiro</label>
                                    
                                </div>
                                <div class="d-grid gap-2 col-4 me-auto">
                                    <button type="submit" class="btn btn-primary rounded-pill">Login</button>
                                </div>
                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0 text-muted">OU</p>
                                </div>
                                <div class="dropdown">
                                    <button class="btn btn btn-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Novo por aqui? Cadastra-se agora
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="./User/Register.php?typeUser=Passageiro">Passageiro</a></li>
                                        <li><a class="dropdown-item" href="./User/Register.php?typeUser=Motorista">Motorista</a></li>
                                    </ul>
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