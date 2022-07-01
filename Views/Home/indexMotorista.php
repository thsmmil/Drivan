<?php include '../Shared/layoutHeader.php'; ?>
<?php 
$ch = curl_init("http://localhost:3030/motorista/1313131311");
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$person = json_decode(curl_exec($ch));
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Inicial - Drivan</title>
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../../wwwroot/js/table.js"></script>
    <style>
        .card {
            border-radius: 1rem;
        }
    </style>
</head>

<body>
    <section class="vh-100">
        <div class="container-fluid">
            <div class="d-flex flex-column justify-content-center">
                <div class="d-flex flex-column mt-5">
                    <div class="row">
                        <div class="col-3">
                            <div class="card my-2 ms-1 shadow">
                                <div class="card-body text-center">
                                    <h5 class="card-title ">Meus Carros</h5>
                                    <p class="card-text">Visualize os seus carros.</p>
                                    <a href="../Car/index.php" class="btn btn-primary rounded-pill">Visualizar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card my-2 ms-1 shadow">
                                <div class="card-body text-center">
                                <h5 class="card-title ">Minhas Viagens</h5>
                                    <p class="card-text">Visualize aqui as suas viagens.</p>
                                    <a href="../Trip/index.php" class="btn btn-primary rounded-pill">Visualizar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card my-2 ms-1 shadow">
                                <div class="card-body text-center">
                                <h5 class="card-title ">Registrar Novo Carro</h5>
                                    <p class="card-text">Adicione aqui o seu carro.</p>
                                    <a href="../Car/upsertCar.php?action=I" class="btn btn-primary rounded-pill">Adicionar</a>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card my-2 ms-1 shadow">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Editar Informaçoes</h5>
                                    <p class="card-text">Visualize suas informações de perfil.</p>
                                    <a href="../User/Edit.php" class="btn btn-primary rounded-pill">Visualizar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="card my-2 ms-1 shadow">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Endereços</h5>
                                    <p class="card-text">Visualize suas informações associadas aos endereços de viagens.</p>
                                    <a href="../Address/index.php" class="btn btn-primary rounded-pill">Visualizar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</body>

</html>