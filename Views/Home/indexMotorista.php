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
    <style>
        .card {
            border-radius: 1rem;
        }
    </style>
</head>

<body>
    <?php include '../Shared/layoutHeader.php'; ?>
    <section class="vh-100">
        <div class="container-fluid">
            <div class="d-flex flex-column justify-content-center">
                <div class="d-flex flex-column mt-5">
                    <div class="row">
                        <div class="col">
                            <div class="card my-2 ms-1 shadow-sm">
                                <div class="card-body text-center">
                                    <h5 class="card-title ">Meus Carros</h5>
                                    <p class="card-text">Visualize os seus carros.</p>
                                    <a href="../Car/index.php" class="btn btn-primary">Adicionar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card my-2 ms-1 shadow-sm">
                                <div class="card-body text-center">
                                <h5 class="card-title ">Registrar Nova Viagem</h5>
                                    <p class="card-text">Adicione aqui o seu carro.</p>
                                    <a href="../Car/index.php" class="btn btn-primary">Adicionar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card my-2 ms-1 shadow-sm">
                                <div class="card-body text-center">
                                <h5 class="card-title ">Registrar Novo Carro</h5>
                                    <p class="card-text">Adicione aqui o seu carro.</p>
                                    <a href="../Car/index.php" class="btn btn-primary">Adicionar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card my-2 ms-1 border border-5 shadow-sm">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Cidade A x Cidade B</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur maiores maxime quidem.</p>
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