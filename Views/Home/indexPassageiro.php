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
        .card{
            border-radius: 1rem;
        }
    </style>
</head>

<body>
    <section class="vh-100">
        <div class="container-fluid h-100">
            <div class="d-flex flex-column justify-content-center">
                <div class="card mt-4 bg-secondary">
                    <div class="card-body">
                        <form action="#" method="post">
                            <div class="d-flex flex-row justify-content-evenly">
                                <div class="mb-2">
                                    <input type="text" class="form-control" id="cityOrigin" placeholder="Digite a cidade de saída" name="cityOrigin">
                                </div>
                                <div class="mb-2">
                                    <input type="text" class="form-control" id="cityDestiny" placeholder="Digite a cidade destino" name="cityOrigin">
                                </div>
                                <div class="mb-2 me-5">
                                    <button type="submit" class="btn btn-primary rounded-pill">Pesquisar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card mt-5">
                    
                </div>
            </div>
        </div>
    </section>

</body>

</html>