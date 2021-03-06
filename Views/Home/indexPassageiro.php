<?php include '../Shared/layoutHeader.php'; ?>
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
    <section class="vh-100">
        <div class="container-fluid">
            <div class="d-flex flex-column justify-content-center">
                <div class="card mt-4 bg-secondary">
                    <div class="card-body">
                        <form action="#" method="post">
                            <div class="d-flex flex-row justify-content-evenly form-group">
                                <div class="mx-2">
                                    <input type="text" class="form-control" id="cityOrigin" placeholder="Digite a cidade de saída" name="cityOrigin">
                                </div>
                                <div class="mx-2">
                                    <input type="text" class="form-control" id="cityDestiny" placeholder="Digite a cidade destino" name="cityOrigin">
                                </div>
                                <div class="me-5">
                                    <button type="submit" class="btn btn-primary rounded-pill">Pesquisar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="d-flex flex-column mt-5">
                    <div class="row">
                        <div class="col">
                            <div class="card my-2 ms-1 shadow">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Reservar sua vaga</h5>
                                    <p class="card-text">Faça a sua reserva aqui!.</p>
                                    <a href="../Trip/index.php" class="btn btn-primary rounded-pill">Reserva</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                        <div class="card my-2 ms-1 shadow">
                                <div class="card-body text-center">
                                <h5 class="card-title ">Editar Informaçoes</h5>
                                    <p class="card-text">Visualize suas informações de perfil.</p>
                                    <a href="../User/Edit.php" class="btn btn-primary rounded-pill">Visualizar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card my-2 ms-1 shadow">
                                <div class="card-body">
                                    <h5 class="card-title text-center">Cidade A x Cidade B</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur maiores maxime quidem.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card my-2 ms-1 shadow">
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