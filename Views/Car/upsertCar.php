<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criar Carro - Drivan</title>
    <?php
    $Year = date('Y');
    ?>
</head>

<body>
    <?php include '../Shared/layoutHeader.php'; ?>
    <section class="vh-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-12">
                    <div class="card gutter-b mx-4 mt-4 shadow" style="border-radius: 1rem;">
                        <div class="card-header">
                            <div class="card-title">
                                <h3 class="card-label">
                                    Novo Carro
                                </h3>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="col-md-4">
                                <form>
                                <h4>Informações do carro</h4>
                                    <div class="m-3">
                                        <input type="text" class="form-control" id="modelCar" placeholder="Modelo do Carro" name="modelCar" />
                                    </div>
                                    <div class="m-3">
                                        <input type="text" class="form-control" id="brandCar" placeholder="Marca do Carro" name="brandCar">
                                    </div>
                                    <div class="m-3">
                                        <input type="text" class="form-control" id="plateCar" placeholder="Placa do Carro" name="plateCar">
                                    </div>
                                    <div class="m-3">
                                        <input type="number" class="form-control" id="yearCar" min="1950" step="1" placeholder="Ano do Carro" <?php echo "max='" . $Year + 2 . "'"; ?> />
                                    </div>
                                    <div class="m-3">
                                        <input type="text" class="form-control" id="colorCar" placeholder="Cor do Carro" name="colorCar">
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