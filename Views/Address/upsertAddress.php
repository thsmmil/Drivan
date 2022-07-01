<?php include('../Shared/layoutHeader.php'); ?>
<?php
if (isset($_SESSION["end"])) {
    $end = $_SESSION["end"];
}
if (isset($_SESSION["estados"])) {
    $cidades = $_SESSION["cidades"];
    $estados = $_SESSION["estados"];
}
$action = $_GET["action"];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
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
                                     <!-- <?php //var_dump($end); ?>  -->
                                    <div class="row justify-content-between">
                                        <div class="col-6">
                                            <?php
                                            if ($action == "U") {
                                                echo "Atualizar Endereço";
                                            } else {
                                                echo "Novo Endereço";
                                            }
                                            ?>
                                        </div>
                                        <div class="col-6 ms-auto text-end">
                                            <a href="../Address/upsertAddress.php?action=I" class="view text-decoration-none text-muted" title="Criar" data-toggle="tooltip"><i class="material-icons">&#xE148;</i>Criar Endereço</a>
                                        </div>
                                    </div>
                                </h3>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="col-md-6">

                                <?php
                                if ($action == "U") {
                                    echo "<form action='/Drivan/Controllers/AddressController.php?action=$action' method='POST'>
                                    <h4>Informações do endereço</h4>
                                    <div class='m-3 row'>
                                        <input type='hidden' name='Id' value=$end->Id>
                                        <label for='street' class='col-sm-4 col-form-label'>Logradouro</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='street' placeholder='Nome da Rua, Bairro' value='$end->Logradouro' name='Logradouro' />
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='reference' class='col-sm-4 form-label'>Ponto de Referência</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='reference' placeholder='Um Ponto de Referência' value='$end->PontoReferencia' name='PontoReferencia'>
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                            <select class='form-select col-1' id='estados'>
                                            <option value=''>Selecione o Estado</option>";
                                    foreach ($estados as $place) {
                                        echo "<option value='" . $place->Uf . "'>" . $place->Nome . "</option>";
                                        // if($place->Uf == $end->cidade->estado->Uf){
                                        // echo "<option value='" . $place->Uf . "' selected>" . $place->Nome . "</option>";                                            
                                        // }else {
                                        //     echo "<option value='" . $place->Uf . "'>" . $place->Nome . "</option>";
                                        // }

                                    }
                                    echo "
                                            </select>
                                    </div>
                                    <div class='m-3 row'>
                                            <select class='form-select col-1' id='cidades' name='cidadeId'>
                                            <option value='' selected>Selecione a Cidade</option>
                                            </select>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='numberHouse' class='col-sm-4 col-form-label'>Número da Casa</label>
                                        <div class='col-sm-8'>
                                            <input type='number' required class='form-control' id='numberHouse' min='0' name='Numero' value='$end->Numero' placeholder='Número da Casa' />
                                        </div>
                                    </div>
                                    <div class='ms-3'>
                                        <button type='submit' class='btn btn-primary rounded-pill'>Atualizar</button>
                                        <a class='btn btn-warning rounded-pill' href='./index.php'>Voltar a Listagem</a>
                                    </div>
                                </form>";
                                } else {
                                    
                                    echo "<form action='/Drivan/Controllers/AddressController.php?action=$action' method='POST'>
                                    <h4>Informações do endereço</h4>
                                    <div class='m-3 row'>
                                        <label for='street' class='col-sm-4 col-form-label'>Logradouro</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='street' placeholder='Nome da Rua, Bairro' value='' name='Logradouro' />
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='reference' class='col-sm-4 col-form-label'>Ponto de Referência</label>
                                        <div class='col-sm-8'>
                                            <input type='text' required class='form-control' id='reference' placeholder='Um Ponto de Referência' value='' name='PontoReferencia'>
                                        </div>
                                    </div>
                                    <div class='m-3 row'>
                                    <select class='form-select' id='estados'>
                                    <option value='' selected>Selecione o Estado</option>";
                                    foreach ($estados as $place) {
                                        echo "<option value='" . $place->Uf . "'>" . $place->Nome . "</option>";
                                    }
                                    echo "
                                            </select>
                                    </div>
                                    <div class='m-3 row'>
                                            <select class='form-select col-1' id='cidades' name='cidadeId'>
                                            <option value='' selected>Selecione a Cidade</option>
                                    </select>
                                    </div>
                                    <div class='m-3 row'>
                                        <label for='numberHouse' class='col-sm-4 col-form-label'>Número da Casa</label>
                                        <div class='col-sm-8'>
                                            <input type='number' required class='form-control' id='numberHouse' min='0' name='Numero' value='' placeholder='Número da Casa' />
                                        </div>
                                    </div>
                                    <div class='ms-3'>
                                        <button type='submit' class='btn btn-primary rounded-pill'>Adicionar</button>
                                        <a class='btn btn-warning rounded-pill' href='./index.php'>Voltar a Listagem</a>
                                    </div>
                                </form>";
                                }

                                ?>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <script>
        var estados = <?php echo json_encode($estados); ?>;
        var cidades = <?php echo json_encode($cidades); ?>;
        //var end = 
        document.getElementById("estados").onchange = function() {
            var selCidades = document.getElementById("cidades");
            selCidades.innerHTML = "";
            var cidadesFiltradas = cidades.filter(cidade => {
                return cidade.estado.Uf == this.value;
            });
            cidadesFiltradas.forEach(cidade => {
                var optionInc = document.createElement("OPTION");
                optionInc.innerHTML = cidade.Nome;
                optionInc.setAttribute("VALUE", cidade.Id);
                //cidade.Id == end.cidadeId ? optionInc.setAttribute("selected", "selected") : console.log(end.cidadeId)
                selCidades.appendChild(optionInc);
            });

        }
    </script>
</body>

</html>