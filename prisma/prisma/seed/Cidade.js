class Cidade {

    constructor(){}
    getCidade() {
const cidades = [
    {
        "estadoId": 22,
        "Nome": "Alta Floresta D'Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Ariquemes"
    },
    {
        "estadoId": 22,
        "Nome": "Cabixi"
    },
    {
        "estadoId": 22,
        "Nome": "Cacoal"
    },
    {
        "estadoId": 22,
        "Nome": "Cerejeiras"
    },
    {
        "estadoId": 22,
        "Nome": "Colorado do Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Corumbiara"
    },
    {
        "estadoId": 22,
        "Nome": "Costa Marques"
    },
    {
        "estadoId": 22,
        "Nome": "Espigão D'Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Guajará-Mirim"
    },
    {
        "estadoId": 22,
        "Nome": "Jaru"
    },
    {
        "estadoId": 22,
        "Nome": "Ji-Paraná"
    },
    {
        "estadoId": 22,
        "Nome": "Machadinho D'Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Nova Brasilândia D'Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Ouro Preto do Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Pimenta Bueno"
    },
    {
        "estadoId": 22,
        "Nome": "Porto Velho"
    },
    {
        "estadoId": 22,
        "Nome": "Presidente Médici"
    },
    {
        "estadoId": 22,
        "Nome": "Rio Crespo"
    },
    {
        "estadoId": 22,
        "Nome": "Rolim de Moura"
    },
    {
        "estadoId": 22,
        "Nome": "Santa Luzia D'Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Vilhena"
    },
    {
        "estadoId": 22,
        "Nome": "São Miguel do Guaporé"
    },
    {
        "estadoId": 22,
        "Nome": "Nova Mamoré"
    },
    {
        "estadoId": 22,
        "Nome": "Alvorada D'Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Alto Alegre dos Parecis"
    },
    {
        "estadoId": 22,
        "Nome": "Alto Paraíso"
    },
    {
        "estadoId": 22,
        "Nome": "Buritis"
    },
    {
        "estadoId": 22,
        "Nome": "Novo Horizonte do Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Cacaulândia"
    },
    {
        "estadoId": 22,
        "Nome": "Campo Novo de Rondônia"
    },
    {
        "estadoId": 22,
        "Nome": "Candeias do Jamari"
    },
    {
        "estadoId": 22,
        "Nome": "Castanheiras"
    },
    {
        "estadoId": 22,
        "Nome": "Chupinguaia"
    },
    {
        "estadoId": 22,
        "Nome": "Cujubim"
    },
    {
        "estadoId": 22,
        "Nome": "Governador Jorge Teixeira"
    },
    {
        "estadoId": 22,
        "Nome": "Itapuã do Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Ministro Andreazza"
    },
    {
        "estadoId": 22,
        "Nome": "Mirante da Serra"
    },
    {
        "estadoId": 22,
        "Nome": "Monte Negro"
    },
    {
        "estadoId": 22,
        "Nome": "Nova União"
    },
    {
        "estadoId": 22,
        "Nome": "Parecis"
    },
    {
        "estadoId": 22,
        "Nome": "Pimenteiras do Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "Primavera de Rondônia"
    },
    {
        "estadoId": 22,
        "Nome": "São Felipe D'Oeste"
    },
    {
        "estadoId": 22,
        "Nome": "São Francisco do Guaporé"
    },
    {
        "estadoId": 22,
        "Nome": "Seringueiras"
    },
    {
        "estadoId": 22,
        "Nome": "Teixeirópolis"
    },
    {
        "estadoId": 22,
        "Nome": "Theobroma"
    },
    {
        "estadoId": 22,
        "Nome": "Urupá"
    },
    {
        "estadoId": 22,
        "Nome": "Vale do Anari"
    },
    {
        "estadoId": 22,
        "Nome": "Vale do Paraíso"
    },
    {
        "estadoId": 1,
        "Nome": "Acrelândia"
    },
    {
        "estadoId": 1,
        "Nome": "Assis Brasil"
    },
    {
        "estadoId": 1,
        "Nome": "Brasiléia"
    },
    {
        "estadoId": 1,
        "Nome": "Bujari"
    },
    {
        "estadoId": 1,
        "Nome": "Capixaba"
    },
    {
        "estadoId": 1,
        "Nome": "Cruzeiro do Sul"
    },
    {
        "estadoId": 1,
        "Nome": "Epitaciolândia"
    },
    {
        "estadoId": 1,
        "Nome": "Feijó"
    },
    {
        "estadoId": 1,
        "Nome": "Jordão"
    },
    {
        "estadoId": 1,
        "Nome": "Mâncio Lima"
    },
    {
        "estadoId": 1,
        "Nome": "Manoel Urbano"
    },
    {
        "estadoId": 1,
        "Nome": "Marechal Thaumaturgo"
    },
    {
        "estadoId": 1,
        "Nome": "Plácido de Castro"
    },
    {
        "estadoId": 1,
        "Nome": "Porto Walter"
    },
    {
        "estadoId": 1,
        "Nome": "Rio Branco"
    },
    {
        "estadoId": 1,
        "Nome": "Rodrigues Alves"
    },
    {
        "estadoId": 1,
        "Nome": "Santa Rosa do Purus"
    },
    {
        "estadoId": 1,
        "Nome": "Senador Guiomard"
    },
    {
        "estadoId": 1,
        "Nome": "Sena Madureira"
    },
    {
        "estadoId": 1,
        "Nome": "Tarauacá"
    },
    {
        "estadoId": 1,
        "Nome": "Xapuri"
    },
    {
        "estadoId": 1,
        "Nome": "Porto Acre"
    },
    {
        "estadoId": 4,
        "Nome": "Lábrea"
    },
    {
        "estadoId": 4,
        "Nome": "Manacapuru"
    },
    {
        "estadoId": 4,
        "Nome": "Manaquiri"
    },
    {
        "estadoId": 4,
        "Nome": "Manaus"
    },
    {
        "estadoId": 4,
        "Nome": "Manicoré"
    },
    {
        "estadoId": 4,
        "Nome": "Maraã"
    },
    {
        "estadoId": 4,
        "Nome": "Maués"
    },
    {
        "estadoId": 4,
        "Nome": "Nhamundá"
    },
    {
        "estadoId": 4,
        "Nome": "Nova Olinda do Norte"
    },
    {
        "estadoId": 4,
        "Nome": "Novo Airão"
    },
    {
        "estadoId": 4,
        "Nome": "Novo Aripuanã"
    },
    {
        "estadoId": 4,
        "Nome": "Parintins"
    },
    {
        "estadoId": 4,
        "Nome": "Pauini"
    },
    {
        "estadoId": 4,
        "Nome": "Presidente Figueiredo"
    },
    {
        "estadoId": 4,
        "Nome": "Rio Preto da Eva"
    },
    {
        "estadoId": 4,
        "Nome": "Santa Isabel do Rio Negro"
    },
    {
        "estadoId": 4,
        "Nome": "Santo Antônio do Içá"
    },
    {
        "estadoId": 4,
        "Nome": "São Gabriel da Cachoeira"
    },
    {
        "estadoId": 4,
        "Nome": "São Paulo de Olivença"
    },
    {
        "estadoId": 4,
        "Nome": "São Sebastião do Uatumã"
    },
    {
        "estadoId": 4,
        "Nome": "Silves"
    },
    {
        "estadoId": 4,
        "Nome": "Tabatinga"
    },
    {
        "estadoId": 4,
        "Nome": "Tapauá"
    },
    {
        "estadoId": 4,
        "Nome": "Tefé"
    },
    {
        "estadoId": 4,
        "Nome": "Tonantins"
    },
    {
        "estadoId": 4,
        "Nome": "Uarini"
    },
    {
        "estadoId": 4,
        "Nome": "Urucará"
    },
    {
        "estadoId": 4,
        "Nome": "Urucurituba"
    },
    {
        "estadoId": 4,
        "Nome": "Jutaí"
    },
    {
        "estadoId": 4,
        "Nome": "Alvarães"
    },
    {
        "estadoId": 4,
        "Nome": "Amaturá"
    },
    {
        "estadoId": 4,
        "Nome": "Anamã"
    },
    {
        "estadoId": 4,
        "Nome": "Anori"
    },
    {
        "estadoId": 4,
        "Nome": "Apuí"
    },
    {
        "estadoId": 4,
        "Nome": "Atalaia do Norte"
    },
    {
        "estadoId": 4,
        "Nome": "Autazes"
    },
    {
        "estadoId": 4,
        "Nome": "Barcelos"
    },
    {
        "estadoId": 4,
        "Nome": "Barreirinha"
    },
    {
        "estadoId": 4,
        "Nome": "Benjamin Constant"
    },
    {
        "estadoId": 4,
        "Nome": "Beruri"
    },
    {
        "estadoId": 4,
        "Nome": "Boa Vista do Ramos"
    },
    {
        "estadoId": 4,
        "Nome": "Boca do Acre"
    },
    {
        "estadoId": 4,
        "Nome": "Borba"
    },
    {
        "estadoId": 4,
        "Nome": "Caapiranga"
    },
    {
        "estadoId": 4,
        "Nome": "Canutama"
    },
    {
        "estadoId": 4,
        "Nome": "Carauari"
    },
    {
        "estadoId": 4,
        "Nome": "Careiro"
    },
    {
        "estadoId": 4,
        "Nome": "Careiro da Várzea"
    },
    {
        "estadoId": 4,
        "Nome": "Coari"
    },
    {
        "estadoId": 4,
        "Nome": "Codajás"
    },
    {
        "estadoId": 4,
        "Nome": "Eirunepé"
    },
    {
        "estadoId": 4,
        "Nome": "Envira"
    },
    {
        "estadoId": 4,
        "Nome": "Fonte Boa"
    },
    {
        "estadoId": 4,
        "Nome": "Guajará"
    },
    {
        "estadoId": 4,
        "Nome": "Humaitá"
    },
    {
        "estadoId": 4,
        "Nome": "Ipixuna"
    },
    {
        "estadoId": 4,
        "Nome": "Iranduba"
    },
    {
        "estadoId": 4,
        "Nome": "Itacoatiara"
    },
    {
        "estadoId": 4,
        "Nome": "Itamarati"
    },
    {
        "estadoId": 4,
        "Nome": "Itapiranga"
    },
    {
        "estadoId": 4,
        "Nome": "Japurá"
    },
    {
        "estadoId": 4,
        "Nome": "Juruá"
    },
    {
        "estadoId": 23,
        "Nome": "Amajari"
    },
    {
        "estadoId": 23,
        "Nome": "Alto Alegre"
    },
    {
        "estadoId": 23,
        "Nome": "Boa Vista"
    },
    {
        "estadoId": 23,
        "Nome": "Bonfim"
    },
    {
        "estadoId": 23,
        "Nome": "Cantá"
    },
    {
        "estadoId": 23,
        "Nome": "Caracaraí"
    },
    {
        "estadoId": 23,
        "Nome": "Caroebe"
    },
    {
        "estadoId": 23,
        "Nome": "Iracema"
    },
    {
        "estadoId": 23,
        "Nome": "Mucajaí"
    },
    {
        "estadoId": 23,
        "Nome": "Normandia"
    },
    {
        "estadoId": 23,
        "Nome": "Pacaraima"
    },
    {
        "estadoId": 23,
        "Nome": "Rorainópolis"
    },
    {
        "estadoId": 23,
        "Nome": "São João da Baliza"
    },
    {
        "estadoId": 23,
        "Nome": "São Luiz"
    },
    {
        "estadoId": 23,
        "Nome": "Uiramutã"
    },
    {
        "estadoId": 14,
        "Nome": "Abaetetuba"
    },
    {
        "estadoId": 14,
        "Nome": "Abel Figueiredo"
    },
    {
        "estadoId": 14,
        "Nome": "Acará"
    },
    {
        "estadoId": 14,
        "Nome": "Afuá"
    },
    {
        "estadoId": 14,
        "Nome": "Água Azul do Norte"
    },
    {
        "estadoId": 14,
        "Nome": "Alenquer"
    },
    {
        "estadoId": 14,
        "Nome": "Almeirim"
    },
    {
        "estadoId": 14,
        "Nome": "Altamira"
    },
    {
        "estadoId": 14,
        "Nome": "Anajás"
    },
    {
        "estadoId": 14,
        "Nome": "Ananindeua"
    },
    {
        "estadoId": 14,
        "Nome": "Anapu"
    },
    {
        "estadoId": 14,
        "Nome": "Augusto Corrêa"
    },
    {
        "estadoId": 14,
        "Nome": "Aurora do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Aveiro"
    },
    {
        "estadoId": 14,
        "Nome": "Bagre"
    },
    {
        "estadoId": 14,
        "Nome": "Baião"
    },
    {
        "estadoId": 14,
        "Nome": "Bannach"
    },
    {
        "estadoId": 14,
        "Nome": "Barcarena"
    },
    {
        "estadoId": 14,
        "Nome": "Belém"
    },
    {
        "estadoId": 14,
        "Nome": "Belterra"
    },
    {
        "estadoId": 14,
        "Nome": "Benevides"
    },
    {
        "estadoId": 14,
        "Nome": "Bom Jesus do Tocantins"
    },
    {
        "estadoId": 14,
        "Nome": "Bonito"
    },
    {
        "estadoId": 14,
        "Nome": "Bragança"
    },
    {
        "estadoId": 14,
        "Nome": "Brasil Novo"
    },
    {
        "estadoId": 14,
        "Nome": "Brejo Grande do Araguaia"
    },
    {
        "estadoId": 14,
        "Nome": "Breu Branco"
    },
    {
        "estadoId": 14,
        "Nome": "Breves"
    },
    {
        "estadoId": 14,
        "Nome": "Bujaru"
    },
    {
        "estadoId": 14,
        "Nome": "Cachoeira do Piriá"
    },
    {
        "estadoId": 14,
        "Nome": "Cachoeira do Arari"
    },
    {
        "estadoId": 14,
        "Nome": "Cametá"
    },
    {
        "estadoId": 14,
        "Nome": "Canaã dos Carajás"
    },
    {
        "estadoId": 14,
        "Nome": "Capanema"
    },
    {
        "estadoId": 14,
        "Nome": "Capitão Poço"
    },
    {
        "estadoId": 14,
        "Nome": "Castanhal"
    },
    {
        "estadoId": 14,
        "Nome": "Chaves"
    },
    {
        "estadoId": 14,
        "Nome": "Colares"
    },
    {
        "estadoId": 14,
        "Nome": "Conceição do Araguaia"
    },
    {
        "estadoId": 14,
        "Nome": "Concórdia do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Cumaru do Norte"
    },
    {
        "estadoId": 14,
        "Nome": "Curionópolis"
    },
    {
        "estadoId": 14,
        "Nome": "Curralinho"
    },
    {
        "estadoId": 14,
        "Nome": "Curuá"
    },
    {
        "estadoId": 14,
        "Nome": "Curuçá"
    },
    {
        "estadoId": 14,
        "Nome": "Dom Eliseu"
    },
    {
        "estadoId": 14,
        "Nome": "Eldorado do Carajás"
    },
    {
        "estadoId": 14,
        "Nome": "Faro"
    },
    {
        "estadoId": 14,
        "Nome": "Floresta do Araguaia"
    },
    {
        "estadoId": 14,
        "Nome": "Garrafão do Norte"
    },
    {
        "estadoId": 14,
        "Nome": "Goianésia do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Gurupá"
    },
    {
        "estadoId": 14,
        "Nome": "Igarapé-Açu"
    },
    {
        "estadoId": 14,
        "Nome": "Igarapé-Miri"
    },
    {
        "estadoId": 14,
        "Nome": "Inhangapi"
    },
    {
        "estadoId": 14,
        "Nome": "Ipixuna do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Irituia"
    },
    {
        "estadoId": 14,
        "Nome": "Itaituba"
    },
    {
        "estadoId": 14,
        "Nome": "Itupiranga"
    },
    {
        "estadoId": 14,
        "Nome": "Jacareacanga"
    },
    {
        "estadoId": 14,
        "Nome": "Jacundá"
    },
    {
        "estadoId": 14,
        "Nome": "Juruti"
    },
    {
        "estadoId": 14,
        "Nome": "Limoeiro do Ajuru"
    },
    {
        "estadoId": 14,
        "Nome": "Mãe do Rio"
    },
    {
        "estadoId": 14,
        "Nome": "Magalhães Barata"
    },
    {
        "estadoId": 14,
        "Nome": "Marabá"
    },
    {
        "estadoId": 14,
        "Nome": "Maracanã"
    },
    {
        "estadoId": 14,
        "Nome": "Marapanim"
    },
    {
        "estadoId": 14,
        "Nome": "Marituba"
    },
    {
        "estadoId": 14,
        "Nome": "Medicilândia"
    },
    {
        "estadoId": 14,
        "Nome": "Melgaço"
    },
    {
        "estadoId": 14,
        "Nome": "Mocajuba"
    },
    {
        "estadoId": 14,
        "Nome": "Moju"
    },
    {
        "estadoId": 14,
        "Nome": "Mojuí dos Campos"
    },
    {
        "estadoId": 14,
        "Nome": "Monte Alegre"
    },
    {
        "estadoId": 14,
        "Nome": "Muaná"
    },
    {
        "estadoId": 14,
        "Nome": "Nova Esperança do Piriá"
    },
    {
        "estadoId": 14,
        "Nome": "Nova Ipixuna"
    },
    {
        "estadoId": 14,
        "Nome": "Nova Timboteua"
    },
    {
        "estadoId": 14,
        "Nome": "Novo Progresso"
    },
    {
        "estadoId": 14,
        "Nome": "Novo Repartimento"
    },
    {
        "estadoId": 14,
        "Nome": "Óbidos"
    },
    {
        "estadoId": 14,
        "Nome": "Oeiras do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Oriximiná"
    },
    {
        "estadoId": 14,
        "Nome": "Ourém"
    },
    {
        "estadoId": 14,
        "Nome": "Ourilândia do Norte"
    },
    {
        "estadoId": 14,
        "Nome": "Pacajá"
    },
    {
        "estadoId": 14,
        "Nome": "Palestina do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Paragominas"
    },
    {
        "estadoId": 14,
        "Nome": "Parauapebas"
    },
    {
        "estadoId": 14,
        "Nome": "Pau D'Arco"
    },
    {
        "estadoId": 14,
        "Nome": "Peixe-Boi"
    },
    {
        "estadoId": 14,
        "Nome": "Piçarra"
    },
    {
        "estadoId": 14,
        "Nome": "Placas"
    },
    {
        "estadoId": 14,
        "Nome": "Ponta de Pedras"
    },
    {
        "estadoId": 14,
        "Nome": "Portel"
    },
    {
        "estadoId": 14,
        "Nome": "Porto de Moz"
    },
    {
        "estadoId": 14,
        "Nome": "Prainha"
    },
    {
        "estadoId": 14,
        "Nome": "Primavera"
    },
    {
        "estadoId": 14,
        "Nome": "Quatipuru"
    },
    {
        "estadoId": 14,
        "Nome": "Redenção"
    },
    {
        "estadoId": 14,
        "Nome": "Rio Maria"
    },
    {
        "estadoId": 14,
        "Nome": "Rondon do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Rurópolis"
    },
    {
        "estadoId": 14,
        "Nome": "Salinópolis"
    },
    {
        "estadoId": 14,
        "Nome": "Salvaterra"
    },
    {
        "estadoId": 14,
        "Nome": "Santa Bárbara do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Santa Cruz do Arari"
    },
    {
        "estadoId": 14,
        "Nome": "Santa Izabel do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Santa Luzia do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Santa Maria das Barreiras"
    },
    {
        "estadoId": 14,
        "Nome": "Santa Maria do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "Santana do Araguaia"
    },
    {
        "estadoId": 14,
        "Nome": "Santarém"
    },
    {
        "estadoId": 14,
        "Nome": "Santarém Novo"
    },
    {
        "estadoId": 14,
        "Nome": "Santo Antônio do Tauá"
    },
    {
        "estadoId": 14,
        "Nome": "São Caetano de Odivelas"
    },
    {
        "estadoId": 14,
        "Nome": "São Domingos do Araguaia"
    },
    {
        "estadoId": 14,
        "Nome": "São Domingos do Capim"
    },
    {
        "estadoId": 14,
        "Nome": "São Félix do Xingu"
    },
    {
        "estadoId": 14,
        "Nome": "São Francisco do Pará"
    },
    {
        "estadoId": 14,
        "Nome": "São Geraldo do Araguaia"
    },
    {
        "estadoId": 14,
        "Nome": "São João da Ponta"
    },
    {
        "estadoId": 14,
        "Nome": "São João de Pirabas"
    },
    {
        "estadoId": 14,
        "Nome": "São João do Araguaia"
    },
    {
        "estadoId": 14,
        "Nome": "São Miguel do Guamá"
    },
    {
        "estadoId": 14,
        "Nome": "São Sebastião da Boa Vista"
    },
    {
        "estadoId": 14,
        "Nome": "Sapucaia"
    },
    {
        "estadoId": 14,
        "Nome": "Senador José Porfírio"
    },
    {
        "estadoId": 14,
        "Nome": "Soure"
    },
    {
        "estadoId": 14,
        "Nome": "Tailândia"
    },
    {
        "estadoId": 14,
        "Nome": "Terra Alta"
    },
    {
        "estadoId": 14,
        "Nome": "Terra Santa"
    },
    {
        "estadoId": 14,
        "Nome": "Tomé-Açu"
    },
    {
        "estadoId": 14,
        "Nome": "Tracuateua"
    },
    {
        "estadoId": 14,
        "Nome": "Trairão"
    },
    {
        "estadoId": 14,
        "Nome": "Tucumã"
    },
    {
        "estadoId": 14,
        "Nome": "Tucuruí"
    },
    {
        "estadoId": 14,
        "Nome": "Ulianópolis"
    },
    {
        "estadoId": 14,
        "Nome": "Uruará"
    },
    {
        "estadoId": 14,
        "Nome": "Vigia"
    },
    {
        "estadoId": 14,
        "Nome": "Viseu"
    },
    {
        "estadoId": 14,
        "Nome": "Vitória do Xingu"
    },
    {
        "estadoId": 14,
        "Nome": "Xinguara"
    },
    {
        "estadoId": 3,
        "Nome": "Serra do Navio"
    },
    {
        "estadoId": 3,
        "Nome": "Amapá"
    },
    {
        "estadoId": 3,
        "Nome": "Pedra Branca do Amapari"
    },
    {
        "estadoId": 3,
        "Nome": "Calçoene"
    },
    {
        "estadoId": 3,
        "Nome": "Cutias"
    },
    {
        "estadoId": 3,
        "Nome": "Ferreira Gomes"
    },
    {
        "estadoId": 3,
        "Nome": "Itaubal"
    },
    {
        "estadoId": 3,
        "Nome": "Laranjal do Jari"
    },
    {
        "estadoId": 3,
        "Nome": "Macapá"
    },
    {
        "estadoId": 3,
        "Nome": "Mazagão"
    },
    {
        "estadoId": 3,
        "Nome": "Oiapoque"
    },
    {
        "estadoId": 3,
        "Nome": "Porto Grande"
    },
    {
        "estadoId": 3,
        "Nome": "Pracuúba"
    },
    {
        "estadoId": 3,
        "Nome": "Santana"
    },
    {
        "estadoId": 3,
        "Nome": "Tartarugalzinho"
    },
    {
        "estadoId": 3,
        "Nome": "Vitória do Jari"
    },
    {
        "estadoId": 10,
        "Nome": "Açailândia"
    },
    {
        "estadoId": 10,
        "Nome": "Afonso Cunha"
    },
    {
        "estadoId": 10,
        "Nome": "Água Doce do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Alcântara"
    },
    {
        "estadoId": 10,
        "Nome": "Aldeias Altas"
    },
    {
        "estadoId": 10,
        "Nome": "Altamira do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Alto Alegre do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Alto Alegre do Pindaré"
    },
    {
        "estadoId": 10,
        "Nome": "Alto Parnaíba"
    },
    {
        "estadoId": 10,
        "Nome": "Amapá do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Amarante do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Anajatuba"
    },
    {
        "estadoId": 10,
        "Nome": "Anapurus"
    },
    {
        "estadoId": 10,
        "Nome": "Apicum-Açu"
    },
    {
        "estadoId": 10,
        "Nome": "Araguanã"
    },
    {
        "estadoId": 10,
        "Nome": "Araioses"
    },
    {
        "estadoId": 10,
        "Nome": "Arame"
    },
    {
        "estadoId": 10,
        "Nome": "Arari"
    },
    {
        "estadoId": 10,
        "Nome": "Axixá"
    },
    {
        "estadoId": 10,
        "Nome": "Bacabal"
    },
    {
        "estadoId": 10,
        "Nome": "Bacabeira"
    },
    {
        "estadoId": 10,
        "Nome": "Bacuri"
    },
    {
        "estadoId": 10,
        "Nome": "Bacurituba"
    },
    {
        "estadoId": 10,
        "Nome": "Balsas"
    },
    {
        "estadoId": 10,
        "Nome": "Barão de Grajaú"
    },
    {
        "estadoId": 10,
        "Nome": "Barra do Corda"
    },
    {
        "estadoId": 10,
        "Nome": "Barreirinhas"
    },
    {
        "estadoId": 10,
        "Nome": "Belágua"
    },
    {
        "estadoId": 10,
        "Nome": "Bela Vista do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Benedito Leite"
    },
    {
        "estadoId": 10,
        "Nome": "Bequimão"
    },
    {
        "estadoId": 10,
        "Nome": "Bernardo do Mearim"
    },
    {
        "estadoId": 10,
        "Nome": "Boa Vista do Gurupi"
    },
    {
        "estadoId": 10,
        "Nome": "Bom Jardim"
    },
    {
        "estadoId": 10,
        "Nome": "Bom Jesus das Selvas"
    },
    {
        "estadoId": 10,
        "Nome": "Bom Lugar"
    },
    {
        "estadoId": 10,
        "Nome": "Brejo"
    },
    {
        "estadoId": 10,
        "Nome": "Brejo de Areia"
    },
    {
        "estadoId": 10,
        "Nome": "Buriti"
    },
    {
        "estadoId": 10,
        "Nome": "Buriti Bravo"
    },
    {
        "estadoId": 10,
        "Nome": "Buriticupu"
    },
    {
        "estadoId": 10,
        "Nome": "Buritirana"
    },
    {
        "estadoId": 10,
        "Nome": "Cachoeira Grande"
    },
    {
        "estadoId": 10,
        "Nome": "Cajapió"
    },
    {
        "estadoId": 10,
        "Nome": "Cajari"
    },
    {
        "estadoId": 10,
        "Nome": "Campestre do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Cândido Mendes"
    },
    {
        "estadoId": 10,
        "Nome": "Cantanhede"
    },
    {
        "estadoId": 10,
        "Nome": "Capinzal do Norte"
    },
    {
        "estadoId": 10,
        "Nome": "Carolina"
    },
    {
        "estadoId": 10,
        "Nome": "Carutapera"
    },
    {
        "estadoId": 10,
        "Nome": "Caxias"
    },
    {
        "estadoId": 10,
        "Nome": "Cedral"
    },
    {
        "estadoId": 10,
        "Nome": "Central do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Centro do Guilherme"
    },
    {
        "estadoId": 10,
        "Nome": "Centro Novo do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Chapadinha"
    },
    {
        "estadoId": 10,
        "Nome": "Cidelândia"
    },
    {
        "estadoId": 10,
        "Nome": "Codó"
    },
    {
        "estadoId": 10,
        "Nome": "Coelho Neto"
    },
    {
        "estadoId": 10,
        "Nome": "Colinas"
    },
    {
        "estadoId": 10,
        "Nome": "Conceição do Lago-Açu"
    },
    {
        "estadoId": 10,
        "Nome": "Coroatá"
    },
    {
        "estadoId": 10,
        "Nome": "Cururupu"
    },
    {
        "estadoId": 10,
        "Nome": "Davinópolis"
    },
    {
        "estadoId": 10,
        "Nome": "Dom Pedro"
    },
    {
        "estadoId": 10,
        "Nome": "Duque Bacelar"
    },
    {
        "estadoId": 10,
        "Nome": "Esperantinópolis"
    },
    {
        "estadoId": 10,
        "Nome": "Estreito"
    },
    {
        "estadoId": 10,
        "Nome": "Feira Nova do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Fernando Falcão"
    },
    {
        "estadoId": 10,
        "Nome": "Formosa da Serra Negra"
    },
    {
        "estadoId": 10,
        "Nome": "Fortaleza dos Nogueiras"
    },
    {
        "estadoId": 10,
        "Nome": "Fortuna"
    },
    {
        "estadoId": 10,
        "Nome": "Godofredo Viana"
    },
    {
        "estadoId": 10,
        "Nome": "Gonçalves Dias"
    },
    {
        "estadoId": 10,
        "Nome": "Governador Archer"
    },
    {
        "estadoId": 10,
        "Nome": "Governador Edison Lobão"
    },
    {
        "estadoId": 10,
        "Nome": "Governador Eugênio Barros"
    },
    {
        "estadoId": 10,
        "Nome": "Governador Luiz Rocha"
    },
    {
        "estadoId": 10,
        "Nome": "Governador Newton Bello"
    },
    {
        "estadoId": 10,
        "Nome": "Governador Nunes Freire"
    },
    {
        "estadoId": 10,
        "Nome": "Graça Aranha"
    },
    {
        "estadoId": 10,
        "Nome": "Grajaú"
    },
    {
        "estadoId": 10,
        "Nome": "Guimarães"
    },
    {
        "estadoId": 10,
        "Nome": "Humberto de Campos"
    },
    {
        "estadoId": 10,
        "Nome": "Icatu"
    },
    {
        "estadoId": 10,
        "Nome": "Igarapé do Meio"
    },
    {
        "estadoId": 10,
        "Nome": "Igarapé Grande"
    },
    {
        "estadoId": 10,
        "Nome": "Imperatriz"
    },
    {
        "estadoId": 10,
        "Nome": "Itaipava do Grajaú"
    },
    {
        "estadoId": 10,
        "Nome": "Itapecuru Mirim"
    },
    {
        "estadoId": 10,
        "Nome": "Lago Verde"
    },
    {
        "estadoId": 10,
        "Nome": "Jenipapo dos Vieiras"
    },
    {
        "estadoId": 10,
        "Nome": "Lago da Pedra"
    },
    {
        "estadoId": 10,
        "Nome": "Lago do Junco"
    },
    {
        "estadoId": 10,
        "Nome": "Itinga do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "João Lisboa"
    },
    {
        "estadoId": 10,
        "Nome": "Jatobá"
    },
    {
        "estadoId": 10,
        "Nome": "Joselândia"
    },
    {
        "estadoId": 10,
        "Nome": "Junco do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Lagoa do Mato"
    },
    {
        "estadoId": 10,
        "Nome": "Lago dos Rodrigues"
    },
    {
        "estadoId": 10,
        "Nome": "Lagoa Grande do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Lima Campos"
    },
    {
        "estadoId": 10,
        "Nome": "Lajeado Novo"
    },
    {
        "estadoId": 10,
        "Nome": "Loreto"
    },
    {
        "estadoId": 10,
        "Nome": "Luís Domingues"
    },
    {
        "estadoId": 10,
        "Nome": "Magalhães de Almeida"
    },
    {
        "estadoId": 10,
        "Nome": "Maracaçumé"
    },
    {
        "estadoId": 10,
        "Nome": "Marajá do Sena"
    },
    {
        "estadoId": 10,
        "Nome": "Maranhãozinho"
    },
    {
        "estadoId": 10,
        "Nome": "Mata Roma"
    },
    {
        "estadoId": 10,
        "Nome": "Matinha"
    },
    {
        "estadoId": 10,
        "Nome": "Matões"
    },
    {
        "estadoId": 10,
        "Nome": "Matões do Norte"
    },
    {
        "estadoId": 10,
        "Nome": "Milagres do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Mirador"
    },
    {
        "estadoId": 10,
        "Nome": "Miranda do Norte"
    },
    {
        "estadoId": 10,
        "Nome": "Mirinzal"
    },
    {
        "estadoId": 10,
        "Nome": "Monção"
    },
    {
        "estadoId": 10,
        "Nome": "Montes Altos"
    },
    {
        "estadoId": 10,
        "Nome": "Morros"
    },
    {
        "estadoId": 10,
        "Nome": "Nina Rodrigues"
    },
    {
        "estadoId": 10,
        "Nome": "Nova Colinas"
    },
    {
        "estadoId": 10,
        "Nome": "Nova Iorque"
    },
    {
        "estadoId": 10,
        "Nome": "Nova Olinda do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Olho d'Água das Cunhãs"
    },
    {
        "estadoId": 10,
        "Nome": "Olinda Nova do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Paço do Lumiar"
    },
    {
        "estadoId": 10,
        "Nome": "Palmeirândia"
    },
    {
        "estadoId": 10,
        "Nome": "Paraibano"
    },
    {
        "estadoId": 10,
        "Nome": "Parnarama"
    },
    {
        "estadoId": 10,
        "Nome": "Passagem Franca"
    },
    {
        "estadoId": 10,
        "Nome": "Pastos Bons"
    },
    {
        "estadoId": 10,
        "Nome": "Paulino Neves"
    },
    {
        "estadoId": 10,
        "Nome": "Paulo Ramos"
    },
    {
        "estadoId": 10,
        "Nome": "Pedreiras"
    },
    {
        "estadoId": 10,
        "Nome": "Pedro do Rosário"
    },
    {
        "estadoId": 10,
        "Nome": "Penalva"
    },
    {
        "estadoId": 10,
        "Nome": "Peri Mirim"
    },
    {
        "estadoId": 10,
        "Nome": "Peritoró"
    },
    {
        "estadoId": 10,
        "Nome": "Pindaré-Mirim"
    },
    {
        "estadoId": 10,
        "Nome": "Pinheiro"
    },
    {
        "estadoId": 10,
        "Nome": "Pio XII"
    },
    {
        "estadoId": 10,
        "Nome": "Pirapemas"
    },
    {
        "estadoId": 10,
        "Nome": "Poção de Pedras"
    },
    {
        "estadoId": 10,
        "Nome": "Porto Franco"
    },
    {
        "estadoId": 10,
        "Nome": "Porto Rico do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Presidente Dutra"
    },
    {
        "estadoId": 10,
        "Nome": "Presidente Juscelino"
    },
    {
        "estadoId": 10,
        "Nome": "Presidente Médici"
    },
    {
        "estadoId": 10,
        "Nome": "Presidente Sarney"
    },
    {
        "estadoId": 10,
        "Nome": "Presidente Vargas"
    },
    {
        "estadoId": 10,
        "Nome": "Primeira Cruz"
    },
    {
        "estadoId": 10,
        "Nome": "Raposa"
    },
    {
        "estadoId": 10,
        "Nome": "Riachão"
    },
    {
        "estadoId": 10,
        "Nome": "Ribamar Fiquene"
    },
    {
        "estadoId": 10,
        "Nome": "Rosário"
    },
    {
        "estadoId": 10,
        "Nome": "Sambaíba"
    },
    {
        "estadoId": 10,
        "Nome": "Santa Filomena do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Santa Helena"
    },
    {
        "estadoId": 10,
        "Nome": "Santa Inês"
    },
    {
        "estadoId": 10,
        "Nome": "Santa Luzia"
    },
    {
        "estadoId": 10,
        "Nome": "Santa Luzia do Paruá"
    },
    {
        "estadoId": 10,
        "Nome": "Santa Quitéria do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Santa Rita"
    },
    {
        "estadoId": 10,
        "Nome": "Santana do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Santo Amaro do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Santo Antônio dos Lopes"
    },
    {
        "estadoId": 10,
        "Nome": "São Benedito do Rio Preto"
    },
    {
        "estadoId": 10,
        "Nome": "São Bento"
    },
    {
        "estadoId": 10,
        "Nome": "São Bernardo"
    },
    {
        "estadoId": 10,
        "Nome": "São Domingos do Azeitão"
    },
    {
        "estadoId": 10,
        "Nome": "São Domingos do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "São Félix de Balsas"
    },
    {
        "estadoId": 10,
        "Nome": "São Francisco do Brejão"
    },
    {
        "estadoId": 10,
        "Nome": "São Francisco do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "São João Batista"
    },
    {
        "estadoId": 10,
        "Nome": "São João do Carú"
    },
    {
        "estadoId": 10,
        "Nome": "São João do Paraíso"
    },
    {
        "estadoId": 10,
        "Nome": "São João do Soter"
    },
    {
        "estadoId": 10,
        "Nome": "São João dos Patos"
    },
    {
        "estadoId": 10,
        "Nome": "São José de Ribamar"
    },
    {
        "estadoId": 10,
        "Nome": "São José dos Basílios"
    },
    {
        "estadoId": 10,
        "Nome": "São Luís"
    },
    {
        "estadoId": 10,
        "Nome": "São Luís Gonzaga do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "São Mateus do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "São Pedro da Água Branca"
    },
    {
        "estadoId": 10,
        "Nome": "São Pedro dos Crentes"
    },
    {
        "estadoId": 10,
        "Nome": "São Raimundo das Mangabeiras"
    },
    {
        "estadoId": 10,
        "Nome": "São Raimundo do Doca Bezerra"
    },
    {
        "estadoId": 10,
        "Nome": "São Roberto"
    },
    {
        "estadoId": 10,
        "Nome": "São Vicente Ferrer"
    },
    {
        "estadoId": 10,
        "Nome": "Satubinha"
    },
    {
        "estadoId": 10,
        "Nome": "Senador Alexandre Costa"
    },
    {
        "estadoId": 10,
        "Nome": "Senador La Rocque"
    },
    {
        "estadoId": 10,
        "Nome": "Serrano do Maranhão"
    },
    {
        "estadoId": 10,
        "Nome": "Sítio Novo"
    },
    {
        "estadoId": 10,
        "Nome": "Sucupira do Norte"
    },
    {
        "estadoId": 10,
        "Nome": "Sucupira do Riachão"
    },
    {
        "estadoId": 10,
        "Nome": "Tasso Fragoso"
    },
    {
        "estadoId": 10,
        "Nome": "Timbiras"
    },
    {
        "estadoId": 10,
        "Nome": "Timon"
    },
    {
        "estadoId": 10,
        "Nome": "Trizidela do Vale"
    },
    {
        "estadoId": 10,
        "Nome": "Tufilândia"
    },
    {
        "estadoId": 10,
        "Nome": "Tuntum"
    },
    {
        "estadoId": 10,
        "Nome": "Turiaçu"
    },
    {
        "estadoId": 10,
        "Nome": "Turilândia"
    },
    {
        "estadoId": 10,
        "Nome": "Tutóia"
    },
    {
        "estadoId": 10,
        "Nome": "Urbano Santos"
    },
    {
        "estadoId": 10,
        "Nome": "Vargem Grande"
    },
    {
        "estadoId": 10,
        "Nome": "Viana"
    },
    {
        "estadoId": 10,
        "Nome": "Vila Nova dos Martírios"
    },
    {
        "estadoId": 10,
        "Nome": "Vitória do Mearim"
    },
    {
        "estadoId": 10,
        "Nome": "Vitorino Freire"
    },
    {
        "estadoId": 10,
        "Nome": "Zé Doca"
    },
    {
        "estadoId": 18,
        "Nome": "Acauã"
    },
    {
        "estadoId": 18,
        "Nome": "Agricolândia"
    },
    {
        "estadoId": 18,
        "Nome": "Água Branca"
    },
    {
        "estadoId": 18,
        "Nome": "Alagoinha do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Alegrete do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Alto Longá"
    },
    {
        "estadoId": 18,
        "Nome": "Altos"
    },
    {
        "estadoId": 18,
        "Nome": "Alvorada do Gurguéia"
    },
    {
        "estadoId": 18,
        "Nome": "Amarante"
    },
    {
        "estadoId": 18,
        "Nome": "Angical do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Anísio de Abreu"
    },
    {
        "estadoId": 18,
        "Nome": "Antônio Almeida"
    },
    {
        "estadoId": 18,
        "Nome": "Aroazes"
    },
    {
        "estadoId": 18,
        "Nome": "Aroeiras do Itaim"
    },
    {
        "estadoId": 18,
        "Nome": "Arraial"
    },
    {
        "estadoId": 18,
        "Nome": "Assunção do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Avelino Lopes"
    },
    {
        "estadoId": 18,
        "Nome": "Baixa Grande do Ribeiro"
    },
    {
        "estadoId": 18,
        "Nome": "Barra D'Alcântara"
    },
    {
        "estadoId": 18,
        "Nome": "Barras"
    },
    {
        "estadoId": 18,
        "Nome": "Barreiras do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Barro Duro"
    },
    {
        "estadoId": 18,
        "Nome": "Batalha"
    },
    {
        "estadoId": 18,
        "Nome": "Bela Vista do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Belém do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Beneditinos"
    },
    {
        "estadoId": 18,
        "Nome": "Bertolínia"
    },
    {
        "estadoId": 18,
        "Nome": "Betânia do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Boa Hora"
    },
    {
        "estadoId": 18,
        "Nome": "Bocaina"
    },
    {
        "estadoId": 18,
        "Nome": "Bom Jesus"
    },
    {
        "estadoId": 18,
        "Nome": "Bom Princípio do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Bonfim do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Boqueirão do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Brasileira"
    },
    {
        "estadoId": 18,
        "Nome": "Brejo do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Buriti dos Lopes"
    },
    {
        "estadoId": 18,
        "Nome": "Buriti dos Montes"
    },
    {
        "estadoId": 18,
        "Nome": "Cabeceiras do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Cajazeiras do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Cajueiro da Praia"
    },
    {
        "estadoId": 18,
        "Nome": "Caldeirão Grande do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Campinas do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Campo Alegre do Fidalgo"
    },
    {
        "estadoId": 18,
        "Nome": "Campo Grande do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Campo Largo do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Campo Maior"
    },
    {
        "estadoId": 18,
        "Nome": "Canavieira"
    },
    {
        "estadoId": 18,
        "Nome": "Canto do Buriti"
    },
    {
        "estadoId": 18,
        "Nome": "Capitão de Campos"
    },
    {
        "estadoId": 18,
        "Nome": "Capitão Gervásio Oliveira"
    },
    {
        "estadoId": 18,
        "Nome": "Caracol"
    },
    {
        "estadoId": 18,
        "Nome": "Caraúbas do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Caridade do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Castelo do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Caxingó"
    },
    {
        "estadoId": 18,
        "Nome": "Cocal"
    },
    {
        "estadoId": 18,
        "Nome": "Cocal de Telha"
    },
    {
        "estadoId": 18,
        "Nome": "Cocal dos Alves"
    },
    {
        "estadoId": 18,
        "Nome": "Coivaras"
    },
    {
        "estadoId": 18,
        "Nome": "Colônia do Gurguéia"
    },
    {
        "estadoId": 18,
        "Nome": "Colônia do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Conceição do Canindé"
    },
    {
        "estadoId": 18,
        "Nome": "Coronel José Dias"
    },
    {
        "estadoId": 18,
        "Nome": "Corrente"
    },
    {
        "estadoId": 18,
        "Nome": "Cristalândia do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Cristino Castro"
    },
    {
        "estadoId": 18,
        "Nome": "Curimatá"
    },
    {
        "estadoId": 18,
        "Nome": "Currais"
    },
    {
        "estadoId": 18,
        "Nome": "Curralinhos"
    },
    {
        "estadoId": 18,
        "Nome": "Curral Novo do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Demerval Lobão"
    },
    {
        "estadoId": 18,
        "Nome": "Dirceu Arcoverde"
    },
    {
        "estadoId": 18,
        "Nome": "Dom Expedito Lopes"
    },
    {
        "estadoId": 18,
        "Nome": "Domingos Mourão"
    },
    {
        "estadoId": 18,
        "Nome": "Dom Inocêncio"
    },
    {
        "estadoId": 18,
        "Nome": "Elesbão Veloso"
    },
    {
        "estadoId": 18,
        "Nome": "Eliseu Martins"
    },
    {
        "estadoId": 18,
        "Nome": "Esperantina"
    },
    {
        "estadoId": 18,
        "Nome": "Fartura do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Flores do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Floresta do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Floriano"
    },
    {
        "estadoId": 18,
        "Nome": "Francinópolis"
    },
    {
        "estadoId": 18,
        "Nome": "Francisco Ayres"
    },
    {
        "estadoId": 18,
        "Nome": "Francisco Macedo"
    },
    {
        "estadoId": 18,
        "Nome": "Francisco Santos"
    },
    {
        "estadoId": 18,
        "Nome": "Fronteiras"
    },
    {
        "estadoId": 18,
        "Nome": "Geminiano"
    },
    {
        "estadoId": 18,
        "Nome": "Gilbués"
    },
    {
        "estadoId": 18,
        "Nome": "Guadalupe"
    },
    {
        "estadoId": 18,
        "Nome": "Guaribas"
    },
    {
        "estadoId": 18,
        "Nome": "Hugo Napoleão"
    },
    {
        "estadoId": 18,
        "Nome": "Ilha Grande"
    },
    {
        "estadoId": 18,
        "Nome": "Inhuma"
    },
    {
        "estadoId": 18,
        "Nome": "Ipiranga do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Isaías Coelho"
    },
    {
        "estadoId": 18,
        "Nome": "Itainópolis"
    },
    {
        "estadoId": 18,
        "Nome": "Itaueira"
    },
    {
        "estadoId": 18,
        "Nome": "Jacobina do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Jaicós"
    },
    {
        "estadoId": 18,
        "Nome": "Jardim do Mulato"
    },
    {
        "estadoId": 18,
        "Nome": "Jatobá do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Jerumenha"
    },
    {
        "estadoId": 18,
        "Nome": "João Costa"
    },
    {
        "estadoId": 18,
        "Nome": "Joaquim Pires"
    },
    {
        "estadoId": 18,
        "Nome": "Joca Marques"
    },
    {
        "estadoId": 18,
        "Nome": "José de Freitas"
    },
    {
        "estadoId": 18,
        "Nome": "Juazeiro do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Júlio Borges"
    },
    {
        "estadoId": 18,
        "Nome": "Jurema"
    },
    {
        "estadoId": 18,
        "Nome": "Lagoinha do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Lagoa Alegre"
    },
    {
        "estadoId": 18,
        "Nome": "Lagoa do Barro do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Lagoa de São Francisco"
    },
    {
        "estadoId": 18,
        "Nome": "Lagoa do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Lagoa do Sítio"
    },
    {
        "estadoId": 18,
        "Nome": "Landri Sales"
    },
    {
        "estadoId": 18,
        "Nome": "Luís Correia"
    },
    {
        "estadoId": 18,
        "Nome": "Luzilândia"
    },
    {
        "estadoId": 18,
        "Nome": "Madeiro"
    },
    {
        "estadoId": 18,
        "Nome": "Manoel Emídio"
    },
    {
        "estadoId": 18,
        "Nome": "Marcolândia"
    },
    {
        "estadoId": 18,
        "Nome": "Marcos Parente"
    },
    {
        "estadoId": 18,
        "Nome": "Massapê do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Matias Olímpio"
    },
    {
        "estadoId": 18,
        "Nome": "Miguel Alves"
    },
    {
        "estadoId": 18,
        "Nome": "Miguel Leão"
    },
    {
        "estadoId": 18,
        "Nome": "Milton Brandão"
    },
    {
        "estadoId": 18,
        "Nome": "Monsenhor Gil"
    },
    {
        "estadoId": 18,
        "Nome": "Monsenhor Hipólito"
    },
    {
        "estadoId": 18,
        "Nome": "Monte Alegre do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Morro Cabeça no Tempo"
    },
    {
        "estadoId": 18,
        "Nome": "Morro do Chapéu do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Murici dos Portelas"
    },
    {
        "estadoId": 18,
        "Nome": "Nazaré do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Nazária"
    },
    {
        "estadoId": 18,
        "Nome": "Nossa Senhora de Nazaré"
    },
    {
        "estadoId": 18,
        "Nome": "Nossa Senhora dos Remédios"
    },
    {
        "estadoId": 18,
        "Nome": "Novo Oriente do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Novo Santo Antônio"
    },
    {
        "estadoId": 18,
        "Nome": "Oeiras"
    },
    {
        "estadoId": 18,
        "Nome": "Olho D'Água do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Padre Marcos"
    },
    {
        "estadoId": 18,
        "Nome": "Paes Landim"
    },
    {
        "estadoId": 18,
        "Nome": "Pajeú do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Palmeira do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Palmeirais"
    },
    {
        "estadoId": 18,
        "Nome": "Paquetá"
    },
    {
        "estadoId": 18,
        "Nome": "Parnaguá"
    },
    {
        "estadoId": 18,
        "Nome": "Parnaíba"
    },
    {
        "estadoId": 18,
        "Nome": "Passagem Franca do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Patos do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Pau D'Arco do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Paulistana"
    },
    {
        "estadoId": 18,
        "Nome": "Pavussu"
    },
    {
        "estadoId": 18,
        "Nome": "Pedro II"
    },
    {
        "estadoId": 18,
        "Nome": "Pedro Laurentino"
    },
    {
        "estadoId": 18,
        "Nome": "Nova Santa Rita"
    },
    {
        "estadoId": 18,
        "Nome": "Picos"
    },
    {
        "estadoId": 18,
        "Nome": "Pimenteiras"
    },
    {
        "estadoId": 18,
        "Nome": "Pio IX"
    },
    {
        "estadoId": 18,
        "Nome": "Piracuruca"
    },
    {
        "estadoId": 18,
        "Nome": "Piripiri"
    },
    {
        "estadoId": 18,
        "Nome": "Porto"
    },
    {
        "estadoId": 18,
        "Nome": "Porto Alegre do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Prata do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Queimada Nova"
    },
    {
        "estadoId": 18,
        "Nome": "Redenção do Gurguéia"
    },
    {
        "estadoId": 18,
        "Nome": "Regeneração"
    },
    {
        "estadoId": 18,
        "Nome": "Riacho Frio"
    },
    {
        "estadoId": 18,
        "Nome": "Ribeira do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Ribeiro Gonçalves"
    },
    {
        "estadoId": 18,
        "Nome": "Rio Grande do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Santa Cruz do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Santa Cruz dos Milagres"
    },
    {
        "estadoId": 18,
        "Nome": "Santa Filomena"
    },
    {
        "estadoId": 18,
        "Nome": "Santa Luz"
    },
    {
        "estadoId": 18,
        "Nome": "Santana do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Santa Rosa do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Santo Antônio de Lisboa"
    },
    {
        "estadoId": 18,
        "Nome": "Santo Antônio dos Milagres"
    },
    {
        "estadoId": 18,
        "Nome": "Santo Inácio do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São Braz do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São Félix do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São Francisco de Assis do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São Francisco do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São Gonçalo do Gurguéia"
    },
    {
        "estadoId": 18,
        "Nome": "São Gonçalo do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São João da Canabrava"
    },
    {
        "estadoId": 18,
        "Nome": "São João da Fronteira"
    },
    {
        "estadoId": 18,
        "Nome": "São João da Serra"
    },
    {
        "estadoId": 18,
        "Nome": "São João da Varjota"
    },
    {
        "estadoId": 18,
        "Nome": "São João do Arraial"
    },
    {
        "estadoId": 18,
        "Nome": "São João do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São José do Divino"
    },
    {
        "estadoId": 18,
        "Nome": "São José do Peixe"
    },
    {
        "estadoId": 18,
        "Nome": "São José do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São Julião"
    },
    {
        "estadoId": 18,
        "Nome": "São Lourenço do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São Luis do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São Miguel da Baixa Grande"
    },
    {
        "estadoId": 18,
        "Nome": "São Miguel do Fidalgo"
    },
    {
        "estadoId": 18,
        "Nome": "São Miguel do Tapuio"
    },
    {
        "estadoId": 18,
        "Nome": "São Pedro do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "São Raimundo Nonato"
    },
    {
        "estadoId": 18,
        "Nome": "Sebastião Barros"
    },
    {
        "estadoId": 18,
        "Nome": "Sebastião Leal"
    },
    {
        "estadoId": 18,
        "Nome": "Sigefredo Pacheco"
    },
    {
        "estadoId": 18,
        "Nome": "Simões"
    },
    {
        "estadoId": 18,
        "Nome": "Simplício Mendes"
    },
    {
        "estadoId": 18,
        "Nome": "Socorro do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Sussuapara"
    },
    {
        "estadoId": 18,
        "Nome": "Tamboril do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Tanque do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Teresina"
    },
    {
        "estadoId": 18,
        "Nome": "União"
    },
    {
        "estadoId": 18,
        "Nome": "Uruçuí"
    },
    {
        "estadoId": 18,
        "Nome": "Valença do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Várzea Branca"
    },
    {
        "estadoId": 18,
        "Nome": "Várzea Grande"
    },
    {
        "estadoId": 18,
        "Nome": "Vera Mendes"
    },
    {
        "estadoId": 18,
        "Nome": "Vila Nova do Piauí"
    },
    {
        "estadoId": 18,
        "Nome": "Wall Ferraz"
    },
    {
        "estadoId": 6,
        "Nome": "Abaiara"
    },
    {
        "estadoId": 6,
        "Nome": "Acarape"
    },
    {
        "estadoId": 6,
        "Nome": "Acaraú"
    },
    {
        "estadoId": 6,
        "Nome": "Acopiara"
    },
    {
        "estadoId": 6,
        "Nome": "Aiuaba"
    },
    {
        "estadoId": 6,
        "Nome": "Alcântaras"
    },
    {
        "estadoId": 6,
        "Nome": "Altaneira"
    },
    {
        "estadoId": 6,
        "Nome": "Alto Santo"
    },
    {
        "estadoId": 6,
        "Nome": "Amontada"
    },
    {
        "estadoId": 6,
        "Nome": "Antonina do Norte"
    },
    {
        "estadoId": 6,
        "Nome": "Apuiarés"
    },
    {
        "estadoId": 6,
        "Nome": "Aquiraz"
    },
    {
        "estadoId": 6,
        "Nome": "Aracati"
    },
    {
        "estadoId": 6,
        "Nome": "Aracoiaba"
    },
    {
        "estadoId": 6,
        "Nome": "Ararendá"
    },
    {
        "estadoId": 6,
        "Nome": "Araripe"
    },
    {
        "estadoId": 6,
        "Nome": "Aratuba"
    },
    {
        "estadoId": 6,
        "Nome": "Arneiroz"
    },
    {
        "estadoId": 6,
        "Nome": "Assaré"
    },
    {
        "estadoId": 6,
        "Nome": "Aurora"
    },
    {
        "estadoId": 6,
        "Nome": "Baixio"
    },
    {
        "estadoId": 6,
        "Nome": "Banabuiú"
    },
    {
        "estadoId": 6,
        "Nome": "Barbalha"
    },
    {
        "estadoId": 6,
        "Nome": "Barreira"
    },
    {
        "estadoId": 6,
        "Nome": "Barro"
    },
    {
        "estadoId": 6,
        "Nome": "Barroquinha"
    },
    {
        "estadoId": 6,
        "Nome": "Baturité"
    },
    {
        "estadoId": 6,
        "Nome": "Beberibe"
    },
    {
        "estadoId": 6,
        "Nome": "Bela Cruz"
    },
    {
        "estadoId": 6,
        "Nome": "Boa Viagem"
    },
    {
        "estadoId": 6,
        "Nome": "Brejo Santo"
    },
    {
        "estadoId": 6,
        "Nome": "Camocim"
    },
    {
        "estadoId": 6,
        "Nome": "Campos Sales"
    },
    {
        "estadoId": 6,
        "Nome": "Canindé"
    },
    {
        "estadoId": 6,
        "Nome": "Capistrano"
    },
    {
        "estadoId": 6,
        "Nome": "Caridade"
    },
    {
        "estadoId": 6,
        "Nome": "Cariré"
    },
    {
        "estadoId": 6,
        "Nome": "Caririaçu"
    },
    {
        "estadoId": 6,
        "Nome": "Cariús"
    },
    {
        "estadoId": 6,
        "Nome": "Carnaubal"
    },
    {
        "estadoId": 6,
        "Nome": "Cascavel"
    },
    {
        "estadoId": 6,
        "Nome": "Catarina"
    },
    {
        "estadoId": 6,
        "Nome": "Catunda"
    },
    {
        "estadoId": 6,
        "Nome": "Caucaia"
    },
    {
        "estadoId": 6,
        "Nome": "Cedro"
    },
    {
        "estadoId": 6,
        "Nome": "Chaval"
    },
    {
        "estadoId": 6,
        "Nome": "Choró"
    },
    {
        "estadoId": 6,
        "Nome": "Chorozinho"
    },
    {
        "estadoId": 6,
        "Nome": "Coreaú"
    },
    {
        "estadoId": 6,
        "Nome": "Crateús"
    },
    {
        "estadoId": 6,
        "Nome": "Crato"
    },
    {
        "estadoId": 6,
        "Nome": "Croatá"
    },
    {
        "estadoId": 6,
        "Nome": "Cruz"
    },
    {
        "estadoId": 6,
        "Nome": "Deputado Irapuan Pinheiro"
    },
    {
        "estadoId": 6,
        "Nome": "Ererê"
    },
    {
        "estadoId": 6,
        "Nome": "Eusébio"
    },
    {
        "estadoId": 6,
        "Nome": "Farias Brito"
    },
    {
        "estadoId": 6,
        "Nome": "Forquilha"
    },
    {
        "estadoId": 6,
        "Nome": "Fortaleza"
    },
    {
        "estadoId": 6,
        "Nome": "Fortim"
    },
    {
        "estadoId": 6,
        "Nome": "Frecheirinha"
    },
    {
        "estadoId": 6,
        "Nome": "General Sampaio"
    },
    {
        "estadoId": 6,
        "Nome": "Graça"
    },
    {
        "estadoId": 6,
        "Nome": "Granja"
    },
    {
        "estadoId": 6,
        "Nome": "Granjeiro"
    },
    {
        "estadoId": 6,
        "Nome": "Groaíras"
    },
    {
        "estadoId": 6,
        "Nome": "Guaiúba"
    },
    {
        "estadoId": 6,
        "Nome": "Guaraciaba do Norte"
    },
    {
        "estadoId": 6,
        "Nome": "Guaramiranga"
    },
    {
        "estadoId": 6,
        "Nome": "Hidrolândia"
    },
    {
        "estadoId": 6,
        "Nome": "Horizonte"
    },
    {
        "estadoId": 6,
        "Nome": "Ibaretama"
    },
    {
        "estadoId": 6,
        "Nome": "Ibiapina"
    },
    {
        "estadoId": 6,
        "Nome": "Ibicuitinga"
    },
    {
        "estadoId": 6,
        "Nome": "Icapuí"
    },
    {
        "estadoId": 6,
        "Nome": "Icó"
    },
    {
        "estadoId": 6,
        "Nome": "Iguatu"
    },
    {
        "estadoId": 6,
        "Nome": "Independência"
    },
    {
        "estadoId": 6,
        "Nome": "Ipaporanga"
    },
    {
        "estadoId": 6,
        "Nome": "Ipaumirim"
    },
    {
        "estadoId": 6,
        "Nome": "Ipu"
    },
    {
        "estadoId": 6,
        "Nome": "Ipueiras"
    },
    {
        "estadoId": 6,
        "Nome": "Iracema"
    },
    {
        "estadoId": 6,
        "Nome": "Irauçuba"
    },
    {
        "estadoId": 6,
        "Nome": "Itaiçaba"
    },
    {
        "estadoId": 6,
        "Nome": "Itaitinga"
    },
    {
        "estadoId": 6,
        "Nome": "Itapajé"
    },
    {
        "estadoId": 6,
        "Nome": "Itapipoca"
    },
    {
        "estadoId": 6,
        "Nome": "Itapiúna"
    },
    {
        "estadoId": 6,
        "Nome": "Itarema"
    },
    {
        "estadoId": 6,
        "Nome": "Itatira"
    },
    {
        "estadoId": 6,
        "Nome": "Jaguaretama"
    },
    {
        "estadoId": 6,
        "Nome": "Jaguaribara"
    },
    {
        "estadoId": 6,
        "Nome": "Jaguaribe"
    },
    {
        "estadoId": 6,
        "Nome": "Jaguaruana"
    },
    {
        "estadoId": 6,
        "Nome": "Jardim"
    },
    {
        "estadoId": 6,
        "Nome": "Jati"
    },
    {
        "estadoId": 6,
        "Nome": "Jijoca de Jericoacoara"
    },
    {
        "estadoId": 6,
        "Nome": "Juazeiro do Norte"
    },
    {
        "estadoId": 6,
        "Nome": "Jucás"
    },
    {
        "estadoId": 6,
        "Nome": "Lavras da Mangabeira"
    },
    {
        "estadoId": 6,
        "Nome": "Limoeiro do Norte"
    },
    {
        "estadoId": 6,
        "Nome": "Madalena"
    },
    {
        "estadoId": 6,
        "Nome": "Maracanaú"
    },
    {
        "estadoId": 6,
        "Nome": "Maranguape"
    },
    {
        "estadoId": 6,
        "Nome": "Marco"
    },
    {
        "estadoId": 6,
        "Nome": "Martinópole"
    },
    {
        "estadoId": 6,
        "Nome": "Massapê"
    },
    {
        "estadoId": 6,
        "Nome": "Mauriti"
    },
    {
        "estadoId": 6,
        "Nome": "Meruoca"
    },
    {
        "estadoId": 6,
        "Nome": "Milagres"
    },
    {
        "estadoId": 6,
        "Nome": "Milhã"
    },
    {
        "estadoId": 6,
        "Nome": "Miraíma"
    },
    {
        "estadoId": 6,
        "Nome": "Missão Velha"
    },
    {
        "estadoId": 6,
        "Nome": "Mombaça"
    },
    {
        "estadoId": 6,
        "Nome": "Monsenhor Tabosa"
    },
    {
        "estadoId": 6,
        "Nome": "Morada Nova"
    },
    {
        "estadoId": 6,
        "Nome": "Moraújo"
    },
    {
        "estadoId": 6,
        "Nome": "Morrinhos"
    },
    {
        "estadoId": 6,
        "Nome": "Mucambo"
    },
    {
        "estadoId": 6,
        "Nome": "Mulungu"
    },
    {
        "estadoId": 6,
        "Nome": "Nova Olinda"
    },
    {
        "estadoId": 6,
        "Nome": "Nova Russas"
    },
    {
        "estadoId": 6,
        "Nome": "Novo Oriente"
    },
    {
        "estadoId": 6,
        "Nome": "Ocara"
    },
    {
        "estadoId": 6,
        "Nome": "Orós"
    },
    {
        "estadoId": 6,
        "Nome": "Pacajus"
    },
    {
        "estadoId": 6,
        "Nome": "Pacatuba"
    },
    {
        "estadoId": 6,
        "Nome": "Pacoti"
    },
    {
        "estadoId": 6,
        "Nome": "Pacujá"
    },
    {
        "estadoId": 6,
        "Nome": "Palhano"
    },
    {
        "estadoId": 6,
        "Nome": "Palmácia"
    },
    {
        "estadoId": 6,
        "Nome": "Paracuru"
    },
    {
        "estadoId": 6,
        "Nome": "Paraipaba"
    },
    {
        "estadoId": 6,
        "Nome": "Parambu"
    },
    {
        "estadoId": 6,
        "Nome": "Paramoti"
    },
    {
        "estadoId": 6,
        "Nome": "Pedra Branca"
    },
    {
        "estadoId": 6,
        "Nome": "Penaforte"
    },
    {
        "estadoId": 6,
        "Nome": "Pentecoste"
    },
    {
        "estadoId": 6,
        "Nome": "Pereiro"
    },
    {
        "estadoId": 6,
        "Nome": "Pindoretama"
    },
    {
        "estadoId": 6,
        "Nome": "Piquet Carneiro"
    },
    {
        "estadoId": 6,
        "Nome": "Pires Ferreira"
    },
    {
        "estadoId": 6,
        "Nome": "Poranga"
    },
    {
        "estadoId": 6,
        "Nome": "Porteiras"
    },
    {
        "estadoId": 6,
        "Nome": "Potengi"
    },
    {
        "estadoId": 6,
        "Nome": "Potiretama"
    },
    {
        "estadoId": 6,
        "Nome": "Quiterianópolis"
    },
    {
        "estadoId": 6,
        "Nome": "Quixadá"
    },
    {
        "estadoId": 6,
        "Nome": "Quixelô"
    },
    {
        "estadoId": 6,
        "Nome": "Quixeramobim"
    },
    {
        "estadoId": 6,
        "Nome": "Quixeré"
    },
    {
        "estadoId": 6,
        "Nome": "Redenção"
    },
    {
        "estadoId": 6,
        "Nome": "Reriutaba"
    },
    {
        "estadoId": 6,
        "Nome": "Russas"
    },
    {
        "estadoId": 6,
        "Nome": "Saboeiro"
    },
    {
        "estadoId": 6,
        "Nome": "Salitre"
    },
    {
        "estadoId": 6,
        "Nome": "Santana do Acaraú"
    },
    {
        "estadoId": 6,
        "Nome": "Santana do Cariri"
    },
    {
        "estadoId": 6,
        "Nome": "Santa Quitéria"
    },
    {
        "estadoId": 6,
        "Nome": "São Benedito"
    },
    {
        "estadoId": 6,
        "Nome": "São Gonçalo do Amarante"
    },
    {
        "estadoId": 6,
        "Nome": "São João do Jaguaribe"
    },
    {
        "estadoId": 6,
        "Nome": "São Luís do Curu"
    },
    {
        "estadoId": 6,
        "Nome": "Senador Pompeu"
    },
    {
        "estadoId": 6,
        "Nome": "Senador Sá"
    },
    {
        "estadoId": 6,
        "Nome": "Sobral"
    },
    {
        "estadoId": 6,
        "Nome": "Solonópole"
    },
    {
        "estadoId": 6,
        "Nome": "Tabuleiro do Norte"
    },
    {
        "estadoId": 6,
        "Nome": "Tamboril"
    },
    {
        "estadoId": 6,
        "Nome": "Tarrafas"
    },
    {
        "estadoId": 6,
        "Nome": "Tauá"
    },
    {
        "estadoId": 6,
        "Nome": "Tejuçuoca"
    },
    {
        "estadoId": 6,
        "Nome": "Tianguá"
    },
    {
        "estadoId": 6,
        "Nome": "Trairi"
    },
    {
        "estadoId": 6,
        "Nome": "Tururu"
    },
    {
        "estadoId": 6,
        "Nome": "Ubajara"
    },
    {
        "estadoId": 6,
        "Nome": "Umari"
    },
    {
        "estadoId": 6,
        "Nome": "Umirim"
    },
    {
        "estadoId": 6,
        "Nome": "Uruburetama"
    },
    {
        "estadoId": 6,
        "Nome": "Uruoca"
    },
    {
        "estadoId": 6,
        "Nome": "Varjota"
    },
    {
        "estadoId": 6,
        "Nome": "Várzea Alegre"
    },
    {
        "estadoId": 6,
        "Nome": "Viçosa do Ceará"
    },
    {
        "estadoId": 20,
        "Nome": "Acari"
    },
    {
        "estadoId": 20,
        "Nome": "Açu"
    },
    {
        "estadoId": 20,
        "Nome": "Afonso Bezerra"
    },
    {
        "estadoId": 20,
        "Nome": "Água Nova"
    },
    {
        "estadoId": 20,
        "Nome": "Alexandria"
    },
    {
        "estadoId": 20,
        "Nome": "Almino Afonso"
    },
    {
        "estadoId": 20,
        "Nome": "Alto do Rodrigues"
    },
    {
        "estadoId": 20,
        "Nome": "Angicos"
    },
    {
        "estadoId": 20,
        "Nome": "Antônio Martins"
    },
    {
        "estadoId": 20,
        "Nome": "Apodi"
    },
    {
        "estadoId": 20,
        "Nome": "Areia Branca"
    },
    {
        "estadoId": 20,
        "Nome": "Arês"
    },
    {
        "estadoId": 20,
        "Nome": "Augusto Severo"
    },
    {
        "estadoId": 20,
        "Nome": "Baía Formosa"
    },
    {
        "estadoId": 20,
        "Nome": "Baraúna"
    },
    {
        "estadoId": 20,
        "Nome": "Barcelona"
    },
    {
        "estadoId": 20,
        "Nome": "Bento Fernandes"
    },
    {
        "estadoId": 20,
        "Nome": "Bodó"
    },
    {
        "estadoId": 20,
        "Nome": "Bom Jesus"
    },
    {
        "estadoId": 20,
        "Nome": "Brejinho"
    },
    {
        "estadoId": 20,
        "Nome": "Caiçara do Norte"
    },
    {
        "estadoId": 20,
        "Nome": "Caiçara do Rio do Vento"
    },
    {
        "estadoId": 20,
        "Nome": "Caicó"
    },
    {
        "estadoId": 20,
        "Nome": "Campo Redondo"
    },
    {
        "estadoId": 20,
        "Nome": "Canguaretama"
    },
    {
        "estadoId": 20,
        "Nome": "Caraúbas"
    },
    {
        "estadoId": 20,
        "Nome": "Carnaúba dos Dantas"
    },
    {
        "estadoId": 20,
        "Nome": "Carnaubais"
    },
    {
        "estadoId": 20,
        "Nome": "Ceará-Mirim"
    },
    {
        "estadoId": 20,
        "Nome": "Cerro Corá"
    },
    {
        "estadoId": 20,
        "Nome": "Coronel Ezequiel"
    },
    {
        "estadoId": 20,
        "Nome": "Coronel João Pessoa"
    },
    {
        "estadoId": 20,
        "Nome": "Cruzeta"
    },
    {
        "estadoId": 20,
        "Nome": "Currais Novos"
    },
    {
        "estadoId": 20,
        "Nome": "Doutor Severiano"
    },
    {
        "estadoId": 20,
        "Nome": "Parnamirim"
    },
    {
        "estadoId": 20,
        "Nome": "Encanto"
    },
    {
        "estadoId": 20,
        "Nome": "Equador"
    },
    {
        "estadoId": 20,
        "Nome": "Espírito Santo"
    },
    {
        "estadoId": 20,
        "Nome": "Extremoz"
    },
    {
        "estadoId": 20,
        "Nome": "Felipe Guerra"
    },
    {
        "estadoId": 20,
        "Nome": "Fernando Pedroza"
    },
    {
        "estadoId": 20,
        "Nome": "Florânia"
    },
    {
        "estadoId": 20,
        "Nome": "Francisco Dantas"
    },
    {
        "estadoId": 20,
        "Nome": "Frutuoso Gomes"
    },
    {
        "estadoId": 20,
        "Nome": "Galinhos"
    },
    {
        "estadoId": 20,
        "Nome": "Goianinha"
    },
    {
        "estadoId": 20,
        "Nome": "Governador Dix-Sept Rosado"
    },
    {
        "estadoId": 20,
        "Nome": "Grossos"
    },
    {
        "estadoId": 20,
        "Nome": "Guamaré"
    },
    {
        "estadoId": 20,
        "Nome": "Ielmo Marinho"
    },
    {
        "estadoId": 20,
        "Nome": "Ipanguaçu"
    },
    {
        "estadoId": 20,
        "Nome": "Ipueira"
    },
    {
        "estadoId": 20,
        "Nome": "Itajá"
    },
    {
        "estadoId": 20,
        "Nome": "Itaú"
    },
    {
        "estadoId": 20,
        "Nome": "Jaçanã"
    },
    {
        "estadoId": 20,
        "Nome": "Jandaíra"
    },
    {
        "estadoId": 20,
        "Nome": "Janduís"
    },
    {
        "estadoId": 20,
        "Nome": "Januário Cicco"
    },
    {
        "estadoId": 20,
        "Nome": "Japi"
    },
    {
        "estadoId": 20,
        "Nome": "Jardim de Angicos"
    },
    {
        "estadoId": 20,
        "Nome": "Jardim de Piranhas"
    },
    {
        "estadoId": 20,
        "Nome": "Jardim do Seridó"
    },
    {
        "estadoId": 20,
        "Nome": "João Câmara"
    },
    {
        "estadoId": 20,
        "Nome": "João Dias"
    },
    {
        "estadoId": 20,
        "Nome": "José da Penha"
    },
    {
        "estadoId": 20,
        "Nome": "Jucurutu"
    },
    {
        "estadoId": 20,
        "Nome": "Jundiá"
    },
    {
        "estadoId": 20,
        "Nome": "Lagoa d'Anta"
    },
    {
        "estadoId": 20,
        "Nome": "Lagoa de Pedras"
    },
    {
        "estadoId": 20,
        "Nome": "Lagoa de Velhos"
    },
    {
        "estadoId": 20,
        "Nome": "Lagoa Nova"
    },
    {
        "estadoId": 20,
        "Nome": "Lagoa Salgada"
    },
    {
        "estadoId": 20,
        "Nome": "Lajes"
    },
    {
        "estadoId": 20,
        "Nome": "Lajes Pintadas"
    },
    {
        "estadoId": 20,
        "Nome": "Lucrécia"
    },
    {
        "estadoId": 20,
        "Nome": "Luís Gomes"
    },
    {
        "estadoId": 20,
        "Nome": "Macaíba"
    },
    {
        "estadoId": 20,
        "Nome": "Macau"
    },
    {
        "estadoId": 20,
        "Nome": "Major Sales"
    },
    {
        "estadoId": 20,
        "Nome": "Marcelino Vieira"
    },
    {
        "estadoId": 20,
        "Nome": "Martins"
    },
    {
        "estadoId": 20,
        "Nome": "Maxaranguape"
    },
    {
        "estadoId": 20,
        "Nome": "Messias Targino"
    },
    {
        "estadoId": 20,
        "Nome": "Montanhas"
    },
    {
        "estadoId": 20,
        "Nome": "Monte Alegre"
    },
    {
        "estadoId": 20,
        "Nome": "Monte das Gameleiras"
    },
    {
        "estadoId": 20,
        "Nome": "Mossoró"
    },
    {
        "estadoId": 20,
        "Nome": "Natal"
    },
    {
        "estadoId": 20,
        "Nome": "Nísia Floresta"
    },
    {
        "estadoId": 20,
        "Nome": "Nova Cruz"
    },
    {
        "estadoId": 20,
        "Nome": "Olho d'Água do Borges"
    },
    {
        "estadoId": 20,
        "Nome": "Ouro Branco"
    },
    {
        "estadoId": 20,
        "Nome": "Paraná"
    },
    {
        "estadoId": 20,
        "Nome": "Paraú"
    },
    {
        "estadoId": 20,
        "Nome": "Parazinho"
    },
    {
        "estadoId": 20,
        "Nome": "Parelhas"
    },
    {
        "estadoId": 20,
        "Nome": "Rio do Fogo"
    },
    {
        "estadoId": 20,
        "Nome": "Passa e Fica"
    },
    {
        "estadoId": 20,
        "Nome": "Passagem"
    },
    {
        "estadoId": 20,
        "Nome": "Patu"
    },
    {
        "estadoId": 20,
        "Nome": "Santa Maria"
    },
    {
        "estadoId": 20,
        "Nome": "Pau dos Ferros"
    },
    {
        "estadoId": 20,
        "Nome": "Pedra Grande"
    },
    {
        "estadoId": 20,
        "Nome": "Pedra Preta"
    },
    {
        "estadoId": 20,
        "Nome": "Pedro Avelino"
    },
    {
        "estadoId": 20,
        "Nome": "Pedro Velho"
    },
    {
        "estadoId": 20,
        "Nome": "Pendências"
    },
    {
        "estadoId": 20,
        "Nome": "Pilões"
    },
    {
        "estadoId": 20,
        "Nome": "Poço Branco"
    },
    {
        "estadoId": 20,
        "Nome": "Portalegre"
    },
    {
        "estadoId": 20,
        "Nome": "Porto do Mangue"
    },
    {
        "estadoId": 20,
        "Nome": "Serra Caiada"
    },
    {
        "estadoId": 20,
        "Nome": "Pureza"
    },
    {
        "estadoId": 20,
        "Nome": "Rafael Fernandes"
    },
    {
        "estadoId": 20,
        "Nome": "Rafael Godeiro"
    },
    {
        "estadoId": 20,
        "Nome": "Riacho da Cruz"
    },
    {
        "estadoId": 20,
        "Nome": "Riacho de Santana"
    },
    {
        "estadoId": 20,
        "Nome": "Riachuelo"
    },
    {
        "estadoId": 20,
        "Nome": "Rodolfo Fernandes"
    },
    {
        "estadoId": 20,
        "Nome": "Tibau"
    },
    {
        "estadoId": 20,
        "Nome": "Ruy Barbosa"
    },
    {
        "estadoId": 20,
        "Nome": "Santa Cruz"
    },
    {
        "estadoId": 20,
        "Nome": "Santana do Matos"
    },
    {
        "estadoId": 20,
        "Nome": "Santana do Seridó"
    },
    {
        "estadoId": 20,
        "Nome": "Santo Antônio"
    },
    {
        "estadoId": 20,
        "Nome": "São Bento do Norte"
    },
    {
        "estadoId": 20,
        "Nome": "São Bento do Trairí"
    },
    {
        "estadoId": 20,
        "Nome": "São Fernando"
    },
    {
        "estadoId": 20,
        "Nome": "São Francisco do Oeste"
    },
    {
        "estadoId": 20,
        "Nome": "São Gonçalo do Amarante"
    },
    {
        "estadoId": 20,
        "Nome": "São João do Sabugi"
    },
    {
        "estadoId": 20,
        "Nome": "São José de Mipibu"
    },
    {
        "estadoId": 20,
        "Nome": "São José do Campestre"
    },
    {
        "estadoId": 20,
        "Nome": "São José do Seridó"
    },
    {
        "estadoId": 20,
        "Nome": "São Miguel"
    },
    {
        "estadoId": 20,
        "Nome": "São Miguel do Gostoso"
    },
    {
        "estadoId": 20,
        "Nome": "São Paulo do Potengi"
    },
    {
        "estadoId": 20,
        "Nome": "São Pedro"
    },
    {
        "estadoId": 20,
        "Nome": "São Rafael"
    },
    {
        "estadoId": 20,
        "Nome": "São Tomé"
    },
    {
        "estadoId": 20,
        "Nome": "São Vicente"
    },
    {
        "estadoId": 20,
        "Nome": "Senador Elói de Souza"
    },
    {
        "estadoId": 20,
        "Nome": "Senador Georgino Avelino"
    },
    {
        "estadoId": 20,
        "Nome": "Serra de São Bento"
    },
    {
        "estadoId": 20,
        "Nome": "Serra do Mel"
    },
    {
        "estadoId": 20,
        "Nome": "Serra Negra do Norte"
    },
    {
        "estadoId": 20,
        "Nome": "Serrinha"
    },
    {
        "estadoId": 20,
        "Nome": "Serrinha dos Pintos"
    },
    {
        "estadoId": 20,
        "Nome": "Severiano Melo"
    },
    {
        "estadoId": 20,
        "Nome": "Sítio Novo"
    },
    {
        "estadoId": 20,
        "Nome": "Taboleiro Grande"
    },
    {
        "estadoId": 20,
        "Nome": "Taipu"
    },
    {
        "estadoId": 20,
        "Nome": "Tangará"
    },
    {
        "estadoId": 20,
        "Nome": "Tenente Ananias"
    },
    {
        "estadoId": 20,
        "Nome": "Tenente Laurentino Cruz"
    },
    {
        "estadoId": 20,
        "Nome": "Tibau do Sul"
    },
    {
        "estadoId": 20,
        "Nome": "Timbaúba dos Batistas"
    },
    {
        "estadoId": 20,
        "Nome": "Touros"
    },
    {
        "estadoId": 20,
        "Nome": "Triunfo Potiguar"
    },
    {
        "estadoId": 20,
        "Nome": "Umarizal"
    },
    {
        "estadoId": 20,
        "Nome": "Upanema"
    },
    {
        "estadoId": 20,
        "Nome": "Várzea"
    },
    {
        "estadoId": 20,
        "Nome": "Venha-Ver"
    },
    {
        "estadoId": 20,
        "Nome": "Vera Cruz"
    },
    {
        "estadoId": 20,
        "Nome": "Viçosa"
    },
    {
        "estadoId": 20,
        "Nome": "Vila Flor"
    },
    {
        "estadoId": 27,
        "Nome": "Abreulândia"
    },
    {
        "estadoId": 27,
        "Nome": "Aguiarnópolis"
    },
    {
        "estadoId": 27,
        "Nome": "Aliança do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Almas"
    },
    {
        "estadoId": 27,
        "Nome": "Alvorada"
    },
    {
        "estadoId": 27,
        "Nome": "Ananás"
    },
    {
        "estadoId": 27,
        "Nome": "Angico"
    },
    {
        "estadoId": 27,
        "Nome": "Aparecida do Rio Negro"
    },
    {
        "estadoId": 27,
        "Nome": "Aragominas"
    },
    {
        "estadoId": 27,
        "Nome": "Araguacema"
    },
    {
        "estadoId": 27,
        "Nome": "Araguaçu"
    },
    {
        "estadoId": 27,
        "Nome": "Araguaína"
    },
    {
        "estadoId": 27,
        "Nome": "Araguanã"
    },
    {
        "estadoId": 27,
        "Nome": "Araguatins"
    },
    {
        "estadoId": 27,
        "Nome": "Arapoema"
    },
    {
        "estadoId": 27,
        "Nome": "Arraias"
    },
    {
        "estadoId": 27,
        "Nome": "Augustinópolis"
    },
    {
        "estadoId": 27,
        "Nome": "Aurora do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Axixá do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Babaçulândia"
    },
    {
        "estadoId": 27,
        "Nome": "Bandeirantes do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Barra do Ouro"
    },
    {
        "estadoId": 27,
        "Nome": "Barrolândia"
    },
    {
        "estadoId": 27,
        "Nome": "Bernardo Sayão"
    },
    {
        "estadoId": 27,
        "Nome": "Bom Jesus do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Brasilândia do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Brejinho de Nazaré"
    },
    {
        "estadoId": 27,
        "Nome": "Buriti do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Cachoeirinha"
    },
    {
        "estadoId": 27,
        "Nome": "Campos Lindos"
    },
    {
        "estadoId": 27,
        "Nome": "Cariri do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Carmolândia"
    },
    {
        "estadoId": 27,
        "Nome": "Carrasco Bonito"
    },
    {
        "estadoId": 27,
        "Nome": "Caseara"
    },
    {
        "estadoId": 27,
        "Nome": "Centenário"
    },
    {
        "estadoId": 27,
        "Nome": "Chapada de Areia"
    },
    {
        "estadoId": 27,
        "Nome": "Chapada da Natividade"
    },
    {
        "estadoId": 27,
        "Nome": "Colinas do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Combinado"
    },
    {
        "estadoId": 27,
        "Nome": "Conceição do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Couto Magalhães"
    },
    {
        "estadoId": 27,
        "Nome": "Cristalândia"
    },
    {
        "estadoId": 27,
        "Nome": "Crixás do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Darcinópolis"
    },
    {
        "estadoId": 27,
        "Nome": "Dianópolis"
    },
    {
        "estadoId": 27,
        "Nome": "Divinópolis do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Dois Irmãos do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Dueré"
    },
    {
        "estadoId": 27,
        "Nome": "Esperantina"
    },
    {
        "estadoId": 27,
        "Nome": "Fátima"
    },
    {
        "estadoId": 27,
        "Nome": "Figueirópolis"
    },
    {
        "estadoId": 27,
        "Nome": "Filadélfia"
    },
    {
        "estadoId": 27,
        "Nome": "Paranã"
    },
    {
        "estadoId": 27,
        "Nome": "Pau D'Arco"
    },
    {
        "estadoId": 27,
        "Nome": "Pedro Afonso"
    },
    {
        "estadoId": 27,
        "Nome": "Peixe"
    },
    {
        "estadoId": 27,
        "Nome": "Pequizeiro"
    },
    {
        "estadoId": 27,
        "Nome": "Colméia"
    },
    {
        "estadoId": 27,
        "Nome": "Pindorama do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Piraquê"
    },
    {
        "estadoId": 27,
        "Nome": "Pium"
    },
    {
        "estadoId": 27,
        "Nome": "Ponte Alta do Bom Jesus"
    },
    {
        "estadoId": 27,
        "Nome": "Ponte Alta do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Porto Alegre do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Porto Nacional"
    },
    {
        "estadoId": 27,
        "Nome": "Praia Norte"
    },
    {
        "estadoId": 27,
        "Nome": "Presidente Kennedy"
    },
    {
        "estadoId": 27,
        "Nome": "Pugmil"
    },
    {
        "estadoId": 27,
        "Nome": "Recursolândia"
    },
    {
        "estadoId": 27,
        "Nome": "Riachinho"
    },
    {
        "estadoId": 27,
        "Nome": "Rio da Conceição"
    },
    {
        "estadoId": 27,
        "Nome": "Rio dos Bois"
    },
    {
        "estadoId": 27,
        "Nome": "Rio Sono"
    },
    {
        "estadoId": 27,
        "Nome": "Sampaio"
    },
    {
        "estadoId": 27,
        "Nome": "Sandolândia"
    },
    {
        "estadoId": 27,
        "Nome": "Santa Fé do Araguaia"
    },
    {
        "estadoId": 27,
        "Nome": "Santa Maria do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Santa Rita do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Santa Rosa do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Santa Tereza do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Santa Terezinha do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "São Bento do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "São Félix do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "São Miguel do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "São Salvador do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "São Sebastião do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "São Valério"
    },
    {
        "estadoId": 27,
        "Nome": "Silvanópolis"
    },
    {
        "estadoId": 27,
        "Nome": "Sítio Novo do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Sucupira"
    },
    {
        "estadoId": 27,
        "Nome": "Taguatinga"
    },
    {
        "estadoId": 27,
        "Nome": "Taipas do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Talismã"
    },
    {
        "estadoId": 27,
        "Nome": "Palmas"
    },
    {
        "estadoId": 27,
        "Nome": "Tocantínia"
    },
    {
        "estadoId": 27,
        "Nome": "Tocantinópolis"
    },
    {
        "estadoId": 27,
        "Nome": "Tupirama"
    },
    {
        "estadoId": 27,
        "Nome": "Tupiratins"
    },
    {
        "estadoId": 27,
        "Nome": "Wanderlândia"
    },
    {
        "estadoId": 27,
        "Nome": "Xambioá"
    },
    {
        "estadoId": 27,
        "Nome": "Formoso do Araguaia"
    },
    {
        "estadoId": 27,
        "Nome": "Fortaleza do Tabocão"
    },
    {
        "estadoId": 27,
        "Nome": "Goianorte"
    },
    {
        "estadoId": 27,
        "Nome": "Goiatins"
    },
    {
        "estadoId": 27,
        "Nome": "Guaraí"
    },
    {
        "estadoId": 27,
        "Nome": "Gurupi"
    },
    {
        "estadoId": 27,
        "Nome": "Ipueiras"
    },
    {
        "estadoId": 27,
        "Nome": "Itacajá"
    },
    {
        "estadoId": 27,
        "Nome": "Itaguatins"
    },
    {
        "estadoId": 27,
        "Nome": "Itapiratins"
    },
    {
        "estadoId": 27,
        "Nome": "Itaporã do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Jaú do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Juarina"
    },
    {
        "estadoId": 27,
        "Nome": "Lagoa da Confusão"
    },
    {
        "estadoId": 27,
        "Nome": "Lagoa do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Lajeado"
    },
    {
        "estadoId": 27,
        "Nome": "Lavandeira"
    },
    {
        "estadoId": 27,
        "Nome": "Lizarda"
    },
    {
        "estadoId": 27,
        "Nome": "Luzinópolis"
    },
    {
        "estadoId": 27,
        "Nome": "Marianópolis do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Mateiros"
    },
    {
        "estadoId": 27,
        "Nome": "Maurilândia do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Miracema do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Miranorte"
    },
    {
        "estadoId": 27,
        "Nome": "Monte do Carmo"
    },
    {
        "estadoId": 27,
        "Nome": "Monte Santo do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Palmeiras do Tocantins"
    },
    {
        "estadoId": 27,
        "Nome": "Muricilândia"
    },
    {
        "estadoId": 27,
        "Nome": "Natividade"
    },
    {
        "estadoId": 27,
        "Nome": "Nazaré"
    },
    {
        "estadoId": 27,
        "Nome": "Nova Olinda"
    },
    {
        "estadoId": 27,
        "Nome": "Nova Rosalândia"
    },
    {
        "estadoId": 27,
        "Nome": "Novo Acordo"
    },
    {
        "estadoId": 27,
        "Nome": "Novo Alegre"
    },
    {
        "estadoId": 27,
        "Nome": "Novo Jardim"
    },
    {
        "estadoId": 27,
        "Nome": "Oliveira de Fátima"
    },
    {
        "estadoId": 27,
        "Nome": "Palmeirante"
    },
    {
        "estadoId": 27,
        "Nome": "Palmeirópolis"
    },
    {
        "estadoId": 27,
        "Nome": "Paraíso do Tocantins"
    },
    {
        "estadoId": 15,
        "Nome": "Água Branca"
    },
    {
        "estadoId": 15,
        "Nome": "Aguiar"
    },
    {
        "estadoId": 15,
        "Nome": "Alagoa Grande"
    },
    {
        "estadoId": 15,
        "Nome": "Alagoa Nova"
    },
    {
        "estadoId": 15,
        "Nome": "Alagoinha"
    },
    {
        "estadoId": 15,
        "Nome": "Alcantil"
    },
    {
        "estadoId": 15,
        "Nome": "Algodão de Jandaíra"
    },
    {
        "estadoId": 15,
        "Nome": "Alhandra"
    },
    {
        "estadoId": 15,
        "Nome": "São João do Rio do Peixe"
    },
    {
        "estadoId": 15,
        "Nome": "Amparo"
    },
    {
        "estadoId": 15,
        "Nome": "Aparecida"
    },
    {
        "estadoId": 15,
        "Nome": "Araçagi"
    },
    {
        "estadoId": 15,
        "Nome": "Arara"
    },
    {
        "estadoId": 15,
        "Nome": "Araruna"
    },
    {
        "estadoId": 15,
        "Nome": "Areia"
    },
    {
        "estadoId": 15,
        "Nome": "Areia de Baraúnas"
    },
    {
        "estadoId": 15,
        "Nome": "Areial"
    },
    {
        "estadoId": 15,
        "Nome": "Aroeiras"
    },
    {
        "estadoId": 15,
        "Nome": "Assunção"
    },
    {
        "estadoId": 15,
        "Nome": "Baía da Traição"
    },
    {
        "estadoId": 15,
        "Nome": "Bananeiras"
    },
    {
        "estadoId": 15,
        "Nome": "Baraúna"
    },
    {
        "estadoId": 15,
        "Nome": "Barra de Santana"
    },
    {
        "estadoId": 15,
        "Nome": "Barra de Santa Rosa"
    },
    {
        "estadoId": 15,
        "Nome": "Barra de São Miguel"
    },
    {
        "estadoId": 15,
        "Nome": "Bayeux"
    },
    {
        "estadoId": 15,
        "Nome": "Belém"
    },
    {
        "estadoId": 15,
        "Nome": "Belém do Brejo do Cruz"
    },
    {
        "estadoId": 15,
        "Nome": "Bernardino Batista"
    },
    {
        "estadoId": 15,
        "Nome": "Boa Ventura"
    },
    {
        "estadoId": 15,
        "Nome": "Boa Vista"
    },
    {
        "estadoId": 15,
        "Nome": "Bom Jesus"
    },
    {
        "estadoId": 15,
        "Nome": "Bom Sucesso"
    },
    {
        "estadoId": 15,
        "Nome": "Bonito de Santa Fé"
    },
    {
        "estadoId": 15,
        "Nome": "Boqueirão"
    },
    {
        "estadoId": 15,
        "Nome": "Igaracy"
    },
    {
        "estadoId": 15,
        "Nome": "Borborema"
    },
    {
        "estadoId": 15,
        "Nome": "Brejo do Cruz"
    },
    {
        "estadoId": 15,
        "Nome": "Brejo dos Santos"
    },
    {
        "estadoId": 15,
        "Nome": "Caaporã"
    },
    {
        "estadoId": 15,
        "Nome": "Cabaceiras"
    },
    {
        "estadoId": 15,
        "Nome": "Cabedelo"
    },
    {
        "estadoId": 15,
        "Nome": "Cachoeira dos Índios"
    },
    {
        "estadoId": 15,
        "Nome": "Cacimba de Areia"
    },
    {
        "estadoId": 15,
        "Nome": "Cacimba de Dentro"
    },
    {
        "estadoId": 15,
        "Nome": "Cacimbas"
    },
    {
        "estadoId": 15,
        "Nome": "Caiçara"
    },
    {
        "estadoId": 15,
        "Nome": "Cajazeiras"
    },
    {
        "estadoId": 15,
        "Nome": "Cajazeirinhas"
    },
    {
        "estadoId": 15,
        "Nome": "Caldas Brandão"
    },
    {
        "estadoId": 15,
        "Nome": "Camalaú"
    },
    {
        "estadoId": 15,
        "Nome": "Campina Grande"
    },
    {
        "estadoId": 15,
        "Nome": "Capim"
    },
    {
        "estadoId": 15,
        "Nome": "Caraúbas"
    },
    {
        "estadoId": 15,
        "Nome": "Carrapateira"
    },
    {
        "estadoId": 15,
        "Nome": "Casserengue"
    },
    {
        "estadoId": 15,
        "Nome": "Catingueira"
    },
    {
        "estadoId": 15,
        "Nome": "Catolé do Rocha"
    },
    {
        "estadoId": 15,
        "Nome": "Caturité"
    },
    {
        "estadoId": 15,
        "Nome": "Conceição"
    },
    {
        "estadoId": 15,
        "Nome": "Condado"
    },
    {
        "estadoId": 15,
        "Nome": "Conde"
    },
    {
        "estadoId": 15,
        "Nome": "Congo"
    },
    {
        "estadoId": 15,
        "Nome": "Coremas"
    },
    {
        "estadoId": 15,
        "Nome": "Coxixola"
    },
    {
        "estadoId": 15,
        "Nome": "Cruz do Espírito Santo"
    },
    {
        "estadoId": 15,
        "Nome": "Cubati"
    },
    {
        "estadoId": 15,
        "Nome": "Cuité"
    },
    {
        "estadoId": 15,
        "Nome": "Cuitegi"
    },
    {
        "estadoId": 15,
        "Nome": "Cuité de Mamanguape"
    },
    {
        "estadoId": 15,
        "Nome": "Curral de Cima"
    },
    {
        "estadoId": 15,
        "Nome": "Curral Velho"
    },
    {
        "estadoId": 15,
        "Nome": "Damião"
    },
    {
        "estadoId": 15,
        "Nome": "Desterro"
    },
    {
        "estadoId": 15,
        "Nome": "Vista Serrana"
    },
    {
        "estadoId": 15,
        "Nome": "Diamante"
    },
    {
        "estadoId": 15,
        "Nome": "Dona Inês"
    },
    {
        "estadoId": 15,
        "Nome": "Duas Estradas"
    },
    {
        "estadoId": 15,
        "Nome": "Emas"
    },
    {
        "estadoId": 15,
        "Nome": "Esperança"
    },
    {
        "estadoId": 15,
        "Nome": "Fagundes"
    },
    {
        "estadoId": 15,
        "Nome": "Frei Martinho"
    },
    {
        "estadoId": 15,
        "Nome": "Gado Bravo"
    },
    {
        "estadoId": 15,
        "Nome": "Guarabira"
    },
    {
        "estadoId": 15,
        "Nome": "Gurinhém"
    },
    {
        "estadoId": 15,
        "Nome": "Gurjão"
    },
    {
        "estadoId": 15,
        "Nome": "Ibiara"
    },
    {
        "estadoId": 15,
        "Nome": "Imaculada"
    },
    {
        "estadoId": 15,
        "Nome": "Ingá"
    },
    {
        "estadoId": 15,
        "Nome": "Itabaiana"
    },
    {
        "estadoId": 15,
        "Nome": "Itaporanga"
    },
    {
        "estadoId": 15,
        "Nome": "Itapororoca"
    },
    {
        "estadoId": 15,
        "Nome": "Itatuba"
    },
    {
        "estadoId": 15,
        "Nome": "Jacaraú"
    },
    {
        "estadoId": 15,
        "Nome": "Jericó"
    },
    {
        "estadoId": 15,
        "Nome": "João Pessoa"
    },
    {
        "estadoId": 15,
        "Nome": "Juarez Távora"
    },
    {
        "estadoId": 15,
        "Nome": "Juazeirinho"
    },
    {
        "estadoId": 15,
        "Nome": "Junco do Seridó"
    },
    {
        "estadoId": 15,
        "Nome": "Juripiranga"
    },
    {
        "estadoId": 15,
        "Nome": "Juru"
    },
    {
        "estadoId": 15,
        "Nome": "Lagoa"
    },
    {
        "estadoId": 15,
        "Nome": "Lagoa de Dentro"
    },
    {
        "estadoId": 15,
        "Nome": "Lagoa Seca"
    },
    {
        "estadoId": 15,
        "Nome": "Lastro"
    },
    {
        "estadoId": 15,
        "Nome": "Livramento"
    },
    {
        "estadoId": 15,
        "Nome": "Logradouro"
    },
    {
        "estadoId": 15,
        "Nome": "Lucena"
    },
    {
        "estadoId": 15,
        "Nome": "Mãe d'Água"
    },
    {
        "estadoId": 15,
        "Nome": "Malta"
    },
    {
        "estadoId": 15,
        "Nome": "Mamanguape"
    },
    {
        "estadoId": 15,
        "Nome": "Manaíra"
    },
    {
        "estadoId": 15,
        "Nome": "Marcação"
    },
    {
        "estadoId": 15,
        "Nome": "Mari"
    },
    {
        "estadoId": 15,
        "Nome": "Marizópolis"
    },
    {
        "estadoId": 15,
        "Nome": "Massaranduba"
    },
    {
        "estadoId": 15,
        "Nome": "Mataraca"
    },
    {
        "estadoId": 15,
        "Nome": "Matinhas"
    },
    {
        "estadoId": 15,
        "Nome": "Mato Grosso"
    },
    {
        "estadoId": 15,
        "Nome": "Maturéia"
    },
    {
        "estadoId": 15,
        "Nome": "Mogeiro"
    },
    {
        "estadoId": 15,
        "Nome": "Montadas"
    },
    {
        "estadoId": 15,
        "Nome": "Monte Horebe"
    },
    {
        "estadoId": 15,
        "Nome": "Monteiro"
    },
    {
        "estadoId": 15,
        "Nome": "Mulungu"
    },
    {
        "estadoId": 15,
        "Nome": "Natuba"
    },
    {
        "estadoId": 15,
        "Nome": "Nazarezinho"
    },
    {
        "estadoId": 15,
        "Nome": "Nova Floresta"
    },
    {
        "estadoId": 15,
        "Nome": "Nova Olinda"
    },
    {
        "estadoId": 15,
        "Nome": "Nova Palmeira"
    },
    {
        "estadoId": 15,
        "Nome": "Olho d'Água"
    },
    {
        "estadoId": 15,
        "Nome": "Olivedos"
    },
    {
        "estadoId": 15,
        "Nome": "Ouro Velho"
    },
    {
        "estadoId": 15,
        "Nome": "Parari"
    },
    {
        "estadoId": 15,
        "Nome": "Passagem"
    },
    {
        "estadoId": 15,
        "Nome": "Patos"
    },
    {
        "estadoId": 15,
        "Nome": "Paulista"
    },
    {
        "estadoId": 15,
        "Nome": "Pedra Branca"
    },
    {
        "estadoId": 15,
        "Nome": "Pedra Lavrada"
    },
    {
        "estadoId": 15,
        "Nome": "Pedras de Fogo"
    },
    {
        "estadoId": 15,
        "Nome": "Piancó"
    },
    {
        "estadoId": 15,
        "Nome": "Picuí"
    },
    {
        "estadoId": 15,
        "Nome": "Pilar"
    },
    {
        "estadoId": 15,
        "Nome": "Pilões"
    },
    {
        "estadoId": 15,
        "Nome": "Pilõezinhos"
    },
    {
        "estadoId": 15,
        "Nome": "Pirpirituba"
    },
    {
        "estadoId": 15,
        "Nome": "Pitimbu"
    },
    {
        "estadoId": 15,
        "Nome": "Pocinhos"
    },
    {
        "estadoId": 15,
        "Nome": "Poço Dantas"
    },
    {
        "estadoId": 15,
        "Nome": "Poço de José de Moura"
    },
    {
        "estadoId": 15,
        "Nome": "Pombal"
    },
    {
        "estadoId": 15,
        "Nome": "Prata"
    },
    {
        "estadoId": 15,
        "Nome": "Princesa Isabel"
    },
    {
        "estadoId": 15,
        "Nome": "Puxinanã"
    },
    {
        "estadoId": 15,
        "Nome": "Queimadas"
    },
    {
        "estadoId": 15,
        "Nome": "Quixaba"
    },
    {
        "estadoId": 15,
        "Nome": "Remígio"
    },
    {
        "estadoId": 15,
        "Nome": "Pedro Régis"
    },
    {
        "estadoId": 15,
        "Nome": "Riachão"
    },
    {
        "estadoId": 15,
        "Nome": "Riachão do Bacamarte"
    },
    {
        "estadoId": 15,
        "Nome": "Riachão do Poço"
    },
    {
        "estadoId": 15,
        "Nome": "Riacho de Santo Antônio"
    },
    {
        "estadoId": 15,
        "Nome": "Riacho dos Cavalos"
    },
    {
        "estadoId": 15,
        "Nome": "Rio Tinto"
    },
    {
        "estadoId": 15,
        "Nome": "Salgadinho"
    },
    {
        "estadoId": 15,
        "Nome": "Salgado de São Félix"
    },
    {
        "estadoId": 15,
        "Nome": "Santa Cecília"
    },
    {
        "estadoId": 15,
        "Nome": "Santa Cruz"
    },
    {
        "estadoId": 15,
        "Nome": "Santa Helena"
    },
    {
        "estadoId": 15,
        "Nome": "Santa Inês"
    },
    {
        "estadoId": 15,
        "Nome": "Santa Luzia"
    },
    {
        "estadoId": 15,
        "Nome": "Santana de Mangueira"
    },
    {
        "estadoId": 15,
        "Nome": "Santana dos Garrotes"
    },
    {
        "estadoId": 15,
        "Nome": "Joca Claudino"
    },
    {
        "estadoId": 15,
        "Nome": "Santa Rita"
    },
    {
        "estadoId": 15,
        "Nome": "Santa Teresinha"
    },
    {
        "estadoId": 15,
        "Nome": "Santo André"
    },
    {
        "estadoId": 15,
        "Nome": "São Bento"
    },
    {
        "estadoId": 15,
        "Nome": "São Bentinho"
    },
    {
        "estadoId": 15,
        "Nome": "São Domingos do Cariri"
    },
    {
        "estadoId": 15,
        "Nome": "São Domingos"
    },
    {
        "estadoId": 15,
        "Nome": "São Francisco"
    },
    {
        "estadoId": 15,
        "Nome": "São João do Cariri"
    },
    {
        "estadoId": 15,
        "Nome": "São João do Tigre"
    },
    {
        "estadoId": 15,
        "Nome": "São José da Lagoa Tapada"
    },
    {
        "estadoId": 15,
        "Nome": "São José de Caiana"
    },
    {
        "estadoId": 15,
        "Nome": "São José de Espinharas"
    },
    {
        "estadoId": 15,
        "Nome": "São José dos Ramos"
    },
    {
        "estadoId": 15,
        "Nome": "São José de Piranhas"
    },
    {
        "estadoId": 15,
        "Nome": "São José de Princesa"
    },
    {
        "estadoId": 15,
        "Nome": "São José do Bonfim"
    },
    {
        "estadoId": 15,
        "Nome": "São José do Brejo do Cruz"
    },
    {
        "estadoId": 15,
        "Nome": "São José do Sabugi"
    },
    {
        "estadoId": 15,
        "Nome": "São José dos Cordeiros"
    },
    {
        "estadoId": 15,
        "Nome": "São Mamede"
    },
    {
        "estadoId": 15,
        "Nome": "São Miguel de Taipu"
    },
    {
        "estadoId": 15,
        "Nome": "São Sebastião de Lagoa de Roça"
    },
    {
        "estadoId": 15,
        "Nome": "São Sebastião do Umbuzeiro"
    },
    {
        "estadoId": 15,
        "Nome": "Sapé"
    },
    {
        "estadoId": 15,
        "Nome": "São Vicente do Seridó"
    },
    {
        "estadoId": 15,
        "Nome": "Serra Branca"
    },
    {
        "estadoId": 15,
        "Nome": "Serra da Raiz"
    },
    {
        "estadoId": 15,
        "Nome": "Serra Grande"
    },
    {
        "estadoId": 15,
        "Nome": "Serra Redonda"
    },
    {
        "estadoId": 15,
        "Nome": "Serraria"
    },
    {
        "estadoId": 15,
        "Nome": "Sertãozinho"
    },
    {
        "estadoId": 15,
        "Nome": "Sobrado"
    },
    {
        "estadoId": 15,
        "Nome": "Solânea"
    },
    {
        "estadoId": 15,
        "Nome": "Soledade"
    },
    {
        "estadoId": 15,
        "Nome": "Sossêgo"
    },
    {
        "estadoId": 15,
        "Nome": "Sousa"
    },
    {
        "estadoId": 15,
        "Nome": "Sumé"
    },
    {
        "estadoId": 15,
        "Nome": "Tacima"
    },
    {
        "estadoId": 15,
        "Nome": "Taperoá"
    },
    {
        "estadoId": 15,
        "Nome": "Tavares"
    },
    {
        "estadoId": 15,
        "Nome": "Teixeira"
    },
    {
        "estadoId": 15,
        "Nome": "Tenório"
    },
    {
        "estadoId": 15,
        "Nome": "Triunfo"
    },
    {
        "estadoId": 15,
        "Nome": "Uiraúna"
    },
    {
        "estadoId": 15,
        "Nome": "Umbuzeiro"
    },
    {
        "estadoId": 15,
        "Nome": "Várzea"
    },
    {
        "estadoId": 15,
        "Nome": "Vieirópolis"
    },
    {
        "estadoId": 15,
        "Nome": "Zabelê"
    },
    {
        "estadoId": 17,
        "Nome": "Abreu e Lima"
    },
    {
        "estadoId": 17,
        "Nome": "Afogados da Ingazeira"
    },
    {
        "estadoId": 17,
        "Nome": "Afrânio"
    },
    {
        "estadoId": 17,
        "Nome": "Agrestina"
    },
    {
        "estadoId": 17,
        "Nome": "Água Preta"
    },
    {
        "estadoId": 17,
        "Nome": "Águas Belas"
    },
    {
        "estadoId": 17,
        "Nome": "Alagoinha"
    },
    {
        "estadoId": 17,
        "Nome": "Aliança"
    },
    {
        "estadoId": 17,
        "Nome": "Altinho"
    },
    {
        "estadoId": 17,
        "Nome": "Amaraji"
    },
    {
        "estadoId": 17,
        "Nome": "Angelim"
    },
    {
        "estadoId": 17,
        "Nome": "Araçoiaba"
    },
    {
        "estadoId": 17,
        "Nome": "Araripina"
    },
    {
        "estadoId": 17,
        "Nome": "Arcoverde"
    },
    {
        "estadoId": 17,
        "Nome": "Barra de Guabiraba"
    },
    {
        "estadoId": 17,
        "Nome": "Barreiros"
    },
    {
        "estadoId": 17,
        "Nome": "Belém de Maria"
    },
    {
        "estadoId": 17,
        "Nome": "Belém do São Francisco"
    },
    {
        "estadoId": 17,
        "Nome": "Belo Jardim"
    },
    {
        "estadoId": 17,
        "Nome": "Betânia"
    },
    {
        "estadoId": 17,
        "Nome": "Bezerros"
    },
    {
        "estadoId": 17,
        "Nome": "Bodocó"
    },
    {
        "estadoId": 17,
        "Nome": "Bom Conselho"
    },
    {
        "estadoId": 17,
        "Nome": "Bom Jardim"
    },
    {
        "estadoId": 17,
        "Nome": "Bonito"
    },
    {
        "estadoId": 17,
        "Nome": "Brejão"
    },
    {
        "estadoId": 17,
        "Nome": "Brejinho"
    },
    {
        "estadoId": 17,
        "Nome": "Brejo da Madre de Deus"
    },
    {
        "estadoId": 17,
        "Nome": "Buenos Aires"
    },
    {
        "estadoId": 17,
        "Nome": "Buíque"
    },
    {
        "estadoId": 17,
        "Nome": "Cabo de Santo Agostinho"
    },
    {
        "estadoId": 17,
        "Nome": "Cabrobó"
    },
    {
        "estadoId": 17,
        "Nome": "Cachoeirinha"
    },
    {
        "estadoId": 17,
        "Nome": "Caetés"
    },
    {
        "estadoId": 17,
        "Nome": "Calçado"
    },
    {
        "estadoId": 17,
        "Nome": "Calumbi"
    },
    {
        "estadoId": 17,
        "Nome": "Camaragibe"
    },
    {
        "estadoId": 17,
        "Nome": "Camocim de São Félix"
    },
    {
        "estadoId": 17,
        "Nome": "Camutanga"
    },
    {
        "estadoId": 17,
        "Nome": "Canhotinho"
    },
    {
        "estadoId": 17,
        "Nome": "Capoeiras"
    },
    {
        "estadoId": 17,
        "Nome": "Carnaíba"
    },
    {
        "estadoId": 17,
        "Nome": "Carnaubeira da Penha"
    },
    {
        "estadoId": 17,
        "Nome": "Carpina"
    },
    {
        "estadoId": 17,
        "Nome": "Caruaru"
    },
    {
        "estadoId": 17,
        "Nome": "Casinhas"
    },
    {
        "estadoId": 17,
        "Nome": "Catende"
    },
    {
        "estadoId": 17,
        "Nome": "Cedro"
    },
    {
        "estadoId": 17,
        "Nome": "Chã de Alegria"
    },
    {
        "estadoId": 17,
        "Nome": "Chã Grande"
    },
    {
        "estadoId": 17,
        "Nome": "Condado"
    },
    {
        "estadoId": 17,
        "Nome": "Correntes"
    },
    {
        "estadoId": 17,
        "Nome": "Cortês"
    },
    {
        "estadoId": 17,
        "Nome": "Cumaru"
    },
    {
        "estadoId": 17,
        "Nome": "Cupira"
    },
    {
        "estadoId": 17,
        "Nome": "Custódia"
    },
    {
        "estadoId": 17,
        "Nome": "Dormentes"
    },
    {
        "estadoId": 17,
        "Nome": "Escada"
    },
    {
        "estadoId": 17,
        "Nome": "Exu"
    },
    {
        "estadoId": 17,
        "Nome": "Feira Nova"
    },
    {
        "estadoId": 17,
        "Nome": "Fernando de Noronha"
    },
    {
        "estadoId": 17,
        "Nome": "Ferreiros"
    },
    {
        "estadoId": 17,
        "Nome": "Flores"
    },
    {
        "estadoId": 17,
        "Nome": "Floresta"
    },
    {
        "estadoId": 17,
        "Nome": "Frei Miguelinho"
    },
    {
        "estadoId": 17,
        "Nome": "Gameleira"
    },
    {
        "estadoId": 17,
        "Nome": "Garanhuns"
    },
    {
        "estadoId": 17,
        "Nome": "Glória do Goitá"
    },
    {
        "estadoId": 17,
        "Nome": "Goiana"
    },
    {
        "estadoId": 17,
        "Nome": "Granito"
    },
    {
        "estadoId": 17,
        "Nome": "Gravatá"
    },
    {
        "estadoId": 17,
        "Nome": "Iati"
    },
    {
        "estadoId": 17,
        "Nome": "Ibimirim"
    },
    {
        "estadoId": 17,
        "Nome": "Ibirajuba"
    },
    {
        "estadoId": 17,
        "Nome": "Igarassu"
    },
    {
        "estadoId": 17,
        "Nome": "Iguaracy"
    },
    {
        "estadoId": 17,
        "Nome": "Inajá"
    },
    {
        "estadoId": 17,
        "Nome": "Ingazeira"
    },
    {
        "estadoId": 17,
        "Nome": "Ipojuca"
    },
    {
        "estadoId": 17,
        "Nome": "Ipubi"
    },
    {
        "estadoId": 17,
        "Nome": "Itacuruba"
    },
    {
        "estadoId": 17,
        "Nome": "Itaíba"
    },
    {
        "estadoId": 17,
        "Nome": "Ilha de Itamaracá"
    },
    {
        "estadoId": 17,
        "Nome": "Itambé"
    },
    {
        "estadoId": 17,
        "Nome": "Itapetim"
    },
    {
        "estadoId": 17,
        "Nome": "Itapissuma"
    },
    {
        "estadoId": 17,
        "Nome": "Itaquitinga"
    },
    {
        "estadoId": 17,
        "Nome": "Jaboatão dos Guararapes"
    },
    {
        "estadoId": 17,
        "Nome": "Jaqueira"
    },
    {
        "estadoId": 17,
        "Nome": "Jataúba"
    },
    {
        "estadoId": 17,
        "Nome": "Jatobá"
    },
    {
        "estadoId": 17,
        "Nome": "João Alfredo"
    },
    {
        "estadoId": 17,
        "Nome": "Joaquim Nabuco"
    },
    {
        "estadoId": 17,
        "Nome": "Jucati"
    },
    {
        "estadoId": 17,
        "Nome": "Jupi"
    },
    {
        "estadoId": 17,
        "Nome": "Jurema"
    },
    {
        "estadoId": 17,
        "Nome": "Lagoa do Carro"
    },
    {
        "estadoId": 17,
        "Nome": "Lagoa de Itaenga"
    },
    {
        "estadoId": 17,
        "Nome": "Lagoa do Ouro"
    },
    {
        "estadoId": 17,
        "Nome": "Lagoa dos Gatos"
    },
    {
        "estadoId": 17,
        "Nome": "Lagoa Grande"
    },
    {
        "estadoId": 17,
        "Nome": "Lajedo"
    },
    {
        "estadoId": 17,
        "Nome": "Limoeiro"
    },
    {
        "estadoId": 17,
        "Nome": "Macaparana"
    },
    {
        "estadoId": 17,
        "Nome": "Machados"
    },
    {
        "estadoId": 17,
        "Nome": "Manari"
    },
    {
        "estadoId": 17,
        "Nome": "Maraial"
    },
    {
        "estadoId": 17,
        "Nome": "Mirandiba"
    },
    {
        "estadoId": 17,
        "Nome": "Moreno"
    },
    {
        "estadoId": 17,
        "Nome": "Nazaré da Mata"
    },
    {
        "estadoId": 17,
        "Nome": "Olinda"
    },
    {
        "estadoId": 17,
        "Nome": "Orobó"
    },
    {
        "estadoId": 17,
        "Nome": "Orocó"
    },
    {
        "estadoId": 17,
        "Nome": "Ouricuri"
    },
    {
        "estadoId": 17,
        "Nome": "Palmares"
    },
    {
        "estadoId": 17,
        "Nome": "Palmeirina"
    },
    {
        "estadoId": 17,
        "Nome": "Panelas"
    },
    {
        "estadoId": 17,
        "Nome": "Paranatama"
    },
    {
        "estadoId": 17,
        "Nome": "Parnamirim"
    },
    {
        "estadoId": 17,
        "Nome": "Passira"
    },
    {
        "estadoId": 17,
        "Nome": "Paudalho"
    },
    {
        "estadoId": 17,
        "Nome": "Paulista"
    },
    {
        "estadoId": 17,
        "Nome": "Pedra"
    },
    {
        "estadoId": 17,
        "Nome": "Pesqueira"
    },
    {
        "estadoId": 17,
        "Nome": "Petrolândia"
    },
    {
        "estadoId": 17,
        "Nome": "Petrolina"
    },
    {
        "estadoId": 17,
        "Nome": "Poção"
    },
    {
        "estadoId": 17,
        "Nome": "Pombos"
    },
    {
        "estadoId": 17,
        "Nome": "Primavera"
    },
    {
        "estadoId": 17,
        "Nome": "Quipapá"
    },
    {
        "estadoId": 17,
        "Nome": "Quixaba"
    },
    {
        "estadoId": 17,
        "Nome": "Recife"
    },
    {
        "estadoId": 17,
        "Nome": "Riacho das Almas"
    },
    {
        "estadoId": 17,
        "Nome": "Ribeirão"
    },
    {
        "estadoId": 17,
        "Nome": "Rio Formoso"
    },
    {
        "estadoId": 17,
        "Nome": "Sairé"
    },
    {
        "estadoId": 17,
        "Nome": "Salgadinho"
    },
    {
        "estadoId": 17,
        "Nome": "Salgueiro"
    },
    {
        "estadoId": 17,
        "Nome": "Saloá"
    },
    {
        "estadoId": 17,
        "Nome": "Sanharó"
    },
    {
        "estadoId": 17,
        "Nome": "Santa Cruz"
    },
    {
        "estadoId": 17,
        "Nome": "Santa Cruz da Baixa Verde"
    },
    {
        "estadoId": 17,
        "Nome": "Santa Cruz do Capibaribe"
    },
    {
        "estadoId": 17,
        "Nome": "Santa Filomena"
    },
    {
        "estadoId": 17,
        "Nome": "Santa Maria da Boa Vista"
    },
    {
        "estadoId": 17,
        "Nome": "Santa Maria do Cambucá"
    },
    {
        "estadoId": 17,
        "Nome": "Santa Terezinha"
    },
    {
        "estadoId": 17,
        "Nome": "São Benedito do Sul"
    },
    {
        "estadoId": 17,
        "Nome": "São Bento do Una"
    },
    {
        "estadoId": 17,
        "Nome": "São Caitano"
    },
    {
        "estadoId": 17,
        "Nome": "São João"
    },
    {
        "estadoId": 17,
        "Nome": "São Joaquim do Monte"
    },
    {
        "estadoId": 17,
        "Nome": "São José da Coroa Grande"
    },
    {
        "estadoId": 17,
        "Nome": "São José do Belmonte"
    },
    {
        "estadoId": 17,
        "Nome": "São José do Egito"
    },
    {
        "estadoId": 17,
        "Nome": "São Lourenço da Mata"
    },
    {
        "estadoId": 17,
        "Nome": "São Vicente Férrer"
    },
    {
        "estadoId": 17,
        "Nome": "Serra Talhada"
    },
    {
        "estadoId": 17,
        "Nome": "Serrita"
    },
    {
        "estadoId": 17,
        "Nome": "Sertânia"
    },
    {
        "estadoId": 17,
        "Nome": "Sirinhaém"
    },
    {
        "estadoId": 17,
        "Nome": "Moreilândia"
    },
    {
        "estadoId": 17,
        "Nome": "Solidão"
    },
    {
        "estadoId": 17,
        "Nome": "Surubim"
    },
    {
        "estadoId": 17,
        "Nome": "Tabira"
    },
    {
        "estadoId": 17,
        "Nome": "Tacaimbó"
    },
    {
        "estadoId": 17,
        "Nome": "Tacaratu"
    },
    {
        "estadoId": 17,
        "Nome": "Tamandaré"
    },
    {
        "estadoId": 17,
        "Nome": "Taquaritinga do Norte"
    },
    {
        "estadoId": 17,
        "Nome": "Terezinha"
    },
    {
        "estadoId": 17,
        "Nome": "Terra Nova"
    },
    {
        "estadoId": 17,
        "Nome": "Timbaúba"
    },
    {
        "estadoId": 17,
        "Nome": "Toritama"
    },
    {
        "estadoId": 17,
        "Nome": "Tracunhaém"
    },
    {
        "estadoId": 17,
        "Nome": "Trindade"
    },
    {
        "estadoId": 17,
        "Nome": "Triunfo"
    },
    {
        "estadoId": 17,
        "Nome": "Tupanatinga"
    },
    {
        "estadoId": 17,
        "Nome": "Tuparetama"
    },
    {
        "estadoId": 17,
        "Nome": "Venturosa"
    },
    {
        "estadoId": 17,
        "Nome": "Verdejante"
    },
    {
        "estadoId": 17,
        "Nome": "Vertente do Lério"
    },
    {
        "estadoId": 17,
        "Nome": "Vertentes"
    },
    {
        "estadoId": 17,
        "Nome": "Vicência"
    },
    {
        "estadoId": 17,
        "Nome": "Vitória de Santo Antão"
    },
    {
        "estadoId": 17,
        "Nome": "Xexéu"
    },
    {
        "estadoId": 2,
        "Nome": "Água Branca"
    },
    {
        "estadoId": 2,
        "Nome": "Anadia"
    },
    {
        "estadoId": 2,
        "Nome": "Arapiraca"
    },
    {
        "estadoId": 2,
        "Nome": "Atalaia"
    },
    {
        "estadoId": 2,
        "Nome": "Barra de Santo Antônio"
    },
    {
        "estadoId": 2,
        "Nome": "Barra de São Miguel"
    },
    {
        "estadoId": 2,
        "Nome": "Batalha"
    },
    {
        "estadoId": 2,
        "Nome": "Belém"
    },
    {
        "estadoId": 2,
        "Nome": "Belo Monte"
    },
    {
        "estadoId": 2,
        "Nome": "Boca da Mata"
    },
    {
        "estadoId": 2,
        "Nome": "Branquinha"
    },
    {
        "estadoId": 2,
        "Nome": "Cacimbinhas"
    },
    {
        "estadoId": 2,
        "Nome": "Cajueiro"
    },
    {
        "estadoId": 2,
        "Nome": "Campestre"
    },
    {
        "estadoId": 2,
        "Nome": "Campo Alegre"
    },
    {
        "estadoId": 2,
        "Nome": "Campo Grande"
    },
    {
        "estadoId": 2,
        "Nome": "Canapi"
    },
    {
        "estadoId": 2,
        "Nome": "Capela"
    },
    {
        "estadoId": 2,
        "Nome": "Carneiros"
    },
    {
        "estadoId": 2,
        "Nome": "Chã Preta"
    },
    {
        "estadoId": 2,
        "Nome": "Coité do Nóia"
    },
    {
        "estadoId": 2,
        "Nome": "Colônia Leopoldina"
    },
    {
        "estadoId": 2,
        "Nome": "Coqueiro Seco"
    },
    {
        "estadoId": 2,
        "Nome": "Coruripe"
    },
    {
        "estadoId": 2,
        "Nome": "Craíbas"
    },
    {
        "estadoId": 2,
        "Nome": "Delmiro Gouveia"
    },
    {
        "estadoId": 2,
        "Nome": "Dois Riachos"
    },
    {
        "estadoId": 2,
        "Nome": "Estrela de Alagoas"
    },
    {
        "estadoId": 2,
        "Nome": "Feira Grande"
    },
    {
        "estadoId": 2,
        "Nome": "Feliz Deserto"
    },
    {
        "estadoId": 2,
        "Nome": "Flexeiras"
    },
    {
        "estadoId": 2,
        "Nome": "Girau do Ponciano"
    },
    {
        "estadoId": 2,
        "Nome": "Ibateguara"
    },
    {
        "estadoId": 2,
        "Nome": "Igaci"
    },
    {
        "estadoId": 2,
        "Nome": "Igreja Nova"
    },
    {
        "estadoId": 2,
        "Nome": "Inhapi"
    },
    {
        "estadoId": 2,
        "Nome": "Jacaré dos Homens"
    },
    {
        "estadoId": 2,
        "Nome": "Jacuípe"
    },
    {
        "estadoId": 2,
        "Nome": "Japaratinga"
    },
    {
        "estadoId": 2,
        "Nome": "Jaramataia"
    },
    {
        "estadoId": 2,
        "Nome": "Jequiá da Praia"
    },
    {
        "estadoId": 2,
        "Nome": "Joaquim Gomes"
    },
    {
        "estadoId": 2,
        "Nome": "Jundiá"
    },
    {
        "estadoId": 2,
        "Nome": "Junqueiro"
    },
    {
        "estadoId": 2,
        "Nome": "Lagoa da Canoa"
    },
    {
        "estadoId": 2,
        "Nome": "Limoeiro de Anadia"
    },
    {
        "estadoId": 2,
        "Nome": "Maceió"
    },
    {
        "estadoId": 2,
        "Nome": "Major Isidoro"
    },
    {
        "estadoId": 2,
        "Nome": "Maragogi"
    },
    {
        "estadoId": 2,
        "Nome": "Maravilha"
    },
    {
        "estadoId": 2,
        "Nome": "Marechal Deodoro"
    },
    {
        "estadoId": 2,
        "Nome": "Maribondo"
    },
    {
        "estadoId": 2,
        "Nome": "Mar Vermelho"
    },
    {
        "estadoId": 2,
        "Nome": "Mata Grande"
    },
    {
        "estadoId": 2,
        "Nome": "Matriz de Camaragibe"
    },
    {
        "estadoId": 2,
        "Nome": "Messias"
    },
    {
        "estadoId": 2,
        "Nome": "Minador do Negrão"
    },
    {
        "estadoId": 2,
        "Nome": "Monteirópolis"
    },
    {
        "estadoId": 2,
        "Nome": "Murici"
    },
    {
        "estadoId": 2,
        "Nome": "Novo Lino"
    },
    {
        "estadoId": 2,
        "Nome": "Olho d'Água das Flores"
    },
    {
        "estadoId": 2,
        "Nome": "Olho d'Água do Casado"
    },
    {
        "estadoId": 2,
        "Nome": "Olho d'Água Grande"
    },
    {
        "estadoId": 2,
        "Nome": "Olivença"
    },
    {
        "estadoId": 2,
        "Nome": "Ouro Branco"
    },
    {
        "estadoId": 2,
        "Nome": "Palestina"
    },
    {
        "estadoId": 2,
        "Nome": "Palmeira dos Índios"
    },
    {
        "estadoId": 2,
        "Nome": "Pão de Açúcar"
    },
    {
        "estadoId": 2,
        "Nome": "Pariconha"
    },
    {
        "estadoId": 2,
        "Nome": "Paripueira"
    },
    {
        "estadoId": 2,
        "Nome": "Passo de Camaragibe"
    },
    {
        "estadoId": 2,
        "Nome": "Paulo Jacinto"
    },
    {
        "estadoId": 2,
        "Nome": "Penedo"
    },
    {
        "estadoId": 2,
        "Nome": "Piaçabuçu"
    },
    {
        "estadoId": 2,
        "Nome": "Pilar"
    },
    {
        "estadoId": 2,
        "Nome": "Pindoba"
    },
    {
        "estadoId": 2,
        "Nome": "Piranhas"
    },
    {
        "estadoId": 2,
        "Nome": "Poço das Trincheiras"
    },
    {
        "estadoId": 2,
        "Nome": "Porto Calvo"
    },
    {
        "estadoId": 2,
        "Nome": "Porto de Pedras"
    },
    {
        "estadoId": 2,
        "Nome": "Porto Real do Colégio"
    },
    {
        "estadoId": 2,
        "Nome": "Quebrangulo"
    },
    {
        "estadoId": 2,
        "Nome": "Rio Largo"
    },
    {
        "estadoId": 2,
        "Nome": "Roteiro"
    },
    {
        "estadoId": 2,
        "Nome": "Santa Luzia do Norte"
    },
    {
        "estadoId": 2,
        "Nome": "Santana do Ipanema"
    },
    {
        "estadoId": 2,
        "Nome": "Santana do Mundaú"
    },
    {
        "estadoId": 2,
        "Nome": "São Brás"
    },
    {
        "estadoId": 2,
        "Nome": "São José da Laje"
    },
    {
        "estadoId": 2,
        "Nome": "São José da Tapera"
    },
    {
        "estadoId": 2,
        "Nome": "São Luís do Quitunde"
    },
    {
        "estadoId": 2,
        "Nome": "São Miguel dos Campos"
    },
    {
        "estadoId": 2,
        "Nome": "São Miguel dos Milagres"
    },
    {
        "estadoId": 2,
        "Nome": "São Sebastião"
    },
    {
        "estadoId": 2,
        "Nome": "Satuba"
    },
    {
        "estadoId": 2,
        "Nome": "Senador Rui Palmeira"
    },
    {
        "estadoId": 2,
        "Nome": "Tanque d'Arca"
    },
    {
        "estadoId": 2,
        "Nome": "Taquarana"
    },
    {
        "estadoId": 2,
        "Nome": "Teotônio Vilela"
    },
    {
        "estadoId": 2,
        "Nome": "Traipu"
    },
    {
        "estadoId": 2,
        "Nome": "União dos Palmares"
    },
    {
        "estadoId": 2,
        "Nome": "Viçosa"
    },
    {
        "estadoId": 26,
        "Nome": "Amparo do São Francisco"
    },
    {
        "estadoId": 26,
        "Nome": "Aquidabã"
    },
    {
        "estadoId": 26,
        "Nome": "Aracaju"
    },
    {
        "estadoId": 26,
        "Nome": "Arauá"
    },
    {
        "estadoId": 26,
        "Nome": "Areia Branca"
    },
    {
        "estadoId": 26,
        "Nome": "Barra dos Coqueiros"
    },
    {
        "estadoId": 26,
        "Nome": "Boquim"
    },
    {
        "estadoId": 26,
        "Nome": "Brejo Grande"
    },
    {
        "estadoId": 26,
        "Nome": "Campo do Brito"
    },
    {
        "estadoId": 26,
        "Nome": "Canhoba"
    },
    {
        "estadoId": 26,
        "Nome": "Canindé de São Francisco"
    },
    {
        "estadoId": 26,
        "Nome": "Capela"
    },
    {
        "estadoId": 26,
        "Nome": "Carira"
    },
    {
        "estadoId": 26,
        "Nome": "Carmópolis"
    },
    {
        "estadoId": 26,
        "Nome": "Cedro de São João"
    },
    {
        "estadoId": 26,
        "Nome": "Cristinápolis"
    },
    {
        "estadoId": 26,
        "Nome": "Cumbe"
    },
    {
        "estadoId": 26,
        "Nome": "Divina Pastora"
    },
    {
        "estadoId": 26,
        "Nome": "Estância"
    },
    {
        "estadoId": 26,
        "Nome": "Feira Nova"
    },
    {
        "estadoId": 26,
        "Nome": "Frei Paulo"
    },
    {
        "estadoId": 26,
        "Nome": "Gararu"
    },
    {
        "estadoId": 26,
        "Nome": "General Maynard"
    },
    {
        "estadoId": 26,
        "Nome": "Gracho Cardoso"
    },
    {
        "estadoId": 26,
        "Nome": "Ilha das Flores"
    },
    {
        "estadoId": 26,
        "Nome": "Indiaroba"
    },
    {
        "estadoId": 26,
        "Nome": "Itabaiana"
    },
    {
        "estadoId": 26,
        "Nome": "Itabaianinha"
    },
    {
        "estadoId": 26,
        "Nome": "Itabi"
    },
    {
        "estadoId": 26,
        "Nome": "Itaporanga d'Ajuda"
    },
    {
        "estadoId": 26,
        "Nome": "Japaratuba"
    },
    {
        "estadoId": 26,
        "Nome": "Japoatã"
    },
    {
        "estadoId": 26,
        "Nome": "Lagarto"
    },
    {
        "estadoId": 26,
        "Nome": "Laranjeiras"
    },
    {
        "estadoId": 26,
        "Nome": "Macambira"
    },
    {
        "estadoId": 26,
        "Nome": "Malhada dos Bois"
    },
    {
        "estadoId": 26,
        "Nome": "Malhador"
    },
    {
        "estadoId": 26,
        "Nome": "Maruim"
    },
    {
        "estadoId": 26,
        "Nome": "Moita Bonita"
    },
    {
        "estadoId": 26,
        "Nome": "Monte Alegre de Sergipe"
    },
    {
        "estadoId": 26,
        "Nome": "Muribeca"
    },
    {
        "estadoId": 26,
        "Nome": "Neópolis"
    },
    {
        "estadoId": 26,
        "Nome": "Nossa Senhora Aparecida"
    },
    {
        "estadoId": 26,
        "Nome": "Nossa Senhora da Glória"
    },
    {
        "estadoId": 26,
        "Nome": "Nossa Senhora das Dores"
    },
    {
        "estadoId": 26,
        "Nome": "Nossa Senhora de Lourdes"
    },
    {
        "estadoId": 26,
        "Nome": "Nossa Senhora do Socorro"
    },
    {
        "estadoId": 26,
        "Nome": "Pacatuba"
    },
    {
        "estadoId": 26,
        "Nome": "Pedra Mole"
    },
    {
        "estadoId": 26,
        "Nome": "Pedrinhas"
    },
    {
        "estadoId": 26,
        "Nome": "Pinhão"
    },
    {
        "estadoId": 26,
        "Nome": "Pirambu"
    },
    {
        "estadoId": 26,
        "Nome": "Poço Redondo"
    },
    {
        "estadoId": 26,
        "Nome": "Poço Verde"
    },
    {
        "estadoId": 26,
        "Nome": "Porto da Folha"
    },
    {
        "estadoId": 26,
        "Nome": "Propriá"
    },
    {
        "estadoId": 26,
        "Nome": "Riachão do Dantas"
    },
    {
        "estadoId": 26,
        "Nome": "Riachuelo"
    },
    {
        "estadoId": 26,
        "Nome": "Ribeirópolis"
    },
    {
        "estadoId": 26,
        "Nome": "Rosário do Catete"
    },
    {
        "estadoId": 26,
        "Nome": "Salgado"
    },
    {
        "estadoId": 26,
        "Nome": "Santa Luzia do Itanhy"
    },
    {
        "estadoId": 26,
        "Nome": "Santana do São Francisco"
    },
    {
        "estadoId": 26,
        "Nome": "Santa Rosa de Lima"
    },
    {
        "estadoId": 26,
        "Nome": "Santo Amaro das Brotas"
    },
    {
        "estadoId": 26,
        "Nome": "São Cristóvão"
    },
    {
        "estadoId": 26,
        "Nome": "São Domingos"
    },
    {
        "estadoId": 26,
        "Nome": "São Francisco"
    },
    {
        "estadoId": 26,
        "Nome": "São Miguel do Aleixo"
    },
    {
        "estadoId": 26,
        "Nome": "Simão Dias"
    },
    {
        "estadoId": 26,
        "Nome": "Siriri"
    },
    {
        "estadoId": 26,
        "Nome": "Telha"
    },
    {
        "estadoId": 26,
        "Nome": "Tobias Barreto"
    },
    {
        "estadoId": 26,
        "Nome": "Tomar do Geru"
    },
    {
        "estadoId": 26,
        "Nome": "Umbaúba"
    },
    {
        "estadoId": 5,
        "Nome": "Abaíra"
    },
    {
        "estadoId": 5,
        "Nome": "Abaré"
    },
    {
        "estadoId": 5,
        "Nome": "Acajutiba"
    },
    {
        "estadoId": 5,
        "Nome": "Adustina"
    },
    {
        "estadoId": 5,
        "Nome": "Água Fria"
    },
    {
        "estadoId": 5,
        "Nome": "Érico Cardoso"
    },
    {
        "estadoId": 5,
        "Nome": "Aiquara"
    },
    {
        "estadoId": 5,
        "Nome": "Alagoinhas"
    },
    {
        "estadoId": 5,
        "Nome": "Alcobaça"
    },
    {
        "estadoId": 5,
        "Nome": "Almadina"
    },
    {
        "estadoId": 5,
        "Nome": "Amargosa"
    },
    {
        "estadoId": 5,
        "Nome": "Amélia Rodrigues"
    },
    {
        "estadoId": 5,
        "Nome": "América Dourada"
    },
    {
        "estadoId": 5,
        "Nome": "Anagé"
    },
    {
        "estadoId": 5,
        "Nome": "Andaraí"
    },
    {
        "estadoId": 5,
        "Nome": "Andorinha"
    },
    {
        "estadoId": 5,
        "Nome": "Angical"
    },
    {
        "estadoId": 5,
        "Nome": "Anguera"
    },
    {
        "estadoId": 5,
        "Nome": "Antas"
    },
    {
        "estadoId": 5,
        "Nome": "Antônio Cardoso"
    },
    {
        "estadoId": 5,
        "Nome": "Antônio Gonçalves"
    },
    {
        "estadoId": 5,
        "Nome": "Aporá"
    },
    {
        "estadoId": 5,
        "Nome": "Apuarema"
    },
    {
        "estadoId": 5,
        "Nome": "Aracatu"
    },
    {
        "estadoId": 5,
        "Nome": "Araçás"
    },
    {
        "estadoId": 5,
        "Nome": "Araci"
    },
    {
        "estadoId": 5,
        "Nome": "Aramari"
    },
    {
        "estadoId": 5,
        "Nome": "Arataca"
    },
    {
        "estadoId": 5,
        "Nome": "Aratuípe"
    },
    {
        "estadoId": 5,
        "Nome": "Aurelino Leal"
    },
    {
        "estadoId": 5,
        "Nome": "Baianópolis"
    },
    {
        "estadoId": 5,
        "Nome": "Baixa Grande"
    },
    {
        "estadoId": 5,
        "Nome": "Banzaê"
    },
    {
        "estadoId": 5,
        "Nome": "Barra"
    },
    {
        "estadoId": 5,
        "Nome": "Barra da Estiva"
    },
    {
        "estadoId": 5,
        "Nome": "Barra do Choça"
    },
    {
        "estadoId": 5,
        "Nome": "Barra do Mendes"
    },
    {
        "estadoId": 5,
        "Nome": "Barra do Rocha"
    },
    {
        "estadoId": 5,
        "Nome": "Barreiras"
    },
    {
        "estadoId": 5,
        "Nome": "Barro Alto"
    },
    {
        "estadoId": 5,
        "Nome": "Barrocas"
    },
    {
        "estadoId": 5,
        "Nome": "Barro Preto"
    },
    {
        "estadoId": 5,
        "Nome": "Belmonte"
    },
    {
        "estadoId": 5,
        "Nome": "Belo Campo"
    },
    {
        "estadoId": 5,
        "Nome": "Biritinga"
    },
    {
        "estadoId": 5,
        "Nome": "Boa Nova"
    },
    {
        "estadoId": 5,
        "Nome": "Boa Vista do Tupim"
    },
    {
        "estadoId": 5,
        "Nome": "Bom Jesus da Lapa"
    },
    {
        "estadoId": 5,
        "Nome": "Bom Jesus da Serra"
    },
    {
        "estadoId": 5,
        "Nome": "Boninal"
    },
    {
        "estadoId": 5,
        "Nome": "Bonito"
    },
    {
        "estadoId": 5,
        "Nome": "Boquira"
    },
    {
        "estadoId": 5,
        "Nome": "Botuporã"
    },
    {
        "estadoId": 5,
        "Nome": "Brejões"
    },
    {
        "estadoId": 5,
        "Nome": "Brejolândia"
    },
    {
        "estadoId": 5,
        "Nome": "Brotas de Macaúbas"
    },
    {
        "estadoId": 5,
        "Nome": "Brumado"
    },
    {
        "estadoId": 5,
        "Nome": "Buerarema"
    },
    {
        "estadoId": 5,
        "Nome": "Buritirama"
    },
    {
        "estadoId": 5,
        "Nome": "Caatiba"
    },
    {
        "estadoId": 5,
        "Nome": "Cabaceiras do Paraguaçu"
    },
    {
        "estadoId": 5,
        "Nome": "Cachoeira"
    },
    {
        "estadoId": 5,
        "Nome": "Caculé"
    },
    {
        "estadoId": 5,
        "Nome": "Caém"
    },
    {
        "estadoId": 5,
        "Nome": "Caetanos"
    },
    {
        "estadoId": 5,
        "Nome": "Caetité"
    },
    {
        "estadoId": 5,
        "Nome": "Cafarnaum"
    },
    {
        "estadoId": 5,
        "Nome": "Cairu"
    },
    {
        "estadoId": 5,
        "Nome": "Caldeirão Grande"
    },
    {
        "estadoId": 5,
        "Nome": "Camacan"
    },
    {
        "estadoId": 5,
        "Nome": "Camaçari"
    },
    {
        "estadoId": 5,
        "Nome": "Camamu"
    },
    {
        "estadoId": 5,
        "Nome": "Campo Alegre de Lourdes"
    },
    {
        "estadoId": 5,
        "Nome": "Campo Formoso"
    },
    {
        "estadoId": 5,
        "Nome": "Canápolis"
    },
    {
        "estadoId": 5,
        "Nome": "Canarana"
    },
    {
        "estadoId": 5,
        "Nome": "Canavieiras"
    },
    {
        "estadoId": 5,
        "Nome": "Candeal"
    },
    {
        "estadoId": 5,
        "Nome": "Candeias"
    },
    {
        "estadoId": 5,
        "Nome": "Candiba"
    },
    {
        "estadoId": 5,
        "Nome": "Cândido Sales"
    },
    {
        "estadoId": 5,
        "Nome": "Cansanção"
    },
    {
        "estadoId": 5,
        "Nome": "Canudos"
    },
    {
        "estadoId": 5,
        "Nome": "Capela do Alto Alegre"
    },
    {
        "estadoId": 5,
        "Nome": "Capim Grosso"
    },
    {
        "estadoId": 5,
        "Nome": "Caraíbas"
    },
    {
        "estadoId": 5,
        "Nome": "Caravelas"
    },
    {
        "estadoId": 5,
        "Nome": "Cardeal da Silva"
    },
    {
        "estadoId": 5,
        "Nome": "Carinhanha"
    },
    {
        "estadoId": 5,
        "Nome": "Casa Nova"
    },
    {
        "estadoId": 5,
        "Nome": "Castro Alves"
    },
    {
        "estadoId": 5,
        "Nome": "Catolândia"
    },
    {
        "estadoId": 5,
        "Nome": "Catu"
    },
    {
        "estadoId": 5,
        "Nome": "Caturama"
    },
    {
        "estadoId": 5,
        "Nome": "Central"
    },
    {
        "estadoId": 5,
        "Nome": "Chorrochó"
    },
    {
        "estadoId": 5,
        "Nome": "Cícero Dantas"
    },
    {
        "estadoId": 5,
        "Nome": "Cipó"
    },
    {
        "estadoId": 5,
        "Nome": "Coaraci"
    },
    {
        "estadoId": 5,
        "Nome": "Cocos"
    },
    {
        "estadoId": 5,
        "Nome": "Conceição da Feira"
    },
    {
        "estadoId": 5,
        "Nome": "Conceição do Almeida"
    },
    {
        "estadoId": 5,
        "Nome": "Conceição do Coité"
    },
    {
        "estadoId": 5,
        "Nome": "Conceição do Jacuípe"
    },
    {
        "estadoId": 5,
        "Nome": "Conde"
    },
    {
        "estadoId": 5,
        "Nome": "Condeúba"
    },
    {
        "estadoId": 5,
        "Nome": "Contendas do Sincorá"
    },
    {
        "estadoId": 5,
        "Nome": "Coração de Maria"
    },
    {
        "estadoId": 5,
        "Nome": "Cordeiros"
    },
    {
        "estadoId": 5,
        "Nome": "Coribe"
    },
    {
        "estadoId": 5,
        "Nome": "Coronel João Sá"
    },
    {
        "estadoId": 5,
        "Nome": "Correntina"
    },
    {
        "estadoId": 5,
        "Nome": "Cotegipe"
    },
    {
        "estadoId": 5,
        "Nome": "Cravolândia"
    },
    {
        "estadoId": 5,
        "Nome": "Crisópolis"
    },
    {
        "estadoId": 5,
        "Nome": "Cristópolis"
    },
    {
        "estadoId": 5,
        "Nome": "Cruz das Almas"
    },
    {
        "estadoId": 5,
        "Nome": "Curaçá"
    },
    {
        "estadoId": 5,
        "Nome": "Dário Meira"
    },
    {
        "estadoId": 5,
        "Nome": "Dias d'Ávila"
    },
    {
        "estadoId": 5,
        "Nome": "Dom Basílio"
    },
    {
        "estadoId": 5,
        "Nome": "Dom Macedo Costa"
    },
    {
        "estadoId": 5,
        "Nome": "Elísio Medrado"
    },
    {
        "estadoId": 5,
        "Nome": "Encruzilhada"
    },
    {
        "estadoId": 5,
        "Nome": "Entre Rios"
    },
    {
        "estadoId": 5,
        "Nome": "Esplanada"
    },
    {
        "estadoId": 5,
        "Nome": "Euclides da Cunha"
    },
    {
        "estadoId": 5,
        "Nome": "Eunápolis"
    },
    {
        "estadoId": 5,
        "Nome": "Fátima"
    },
    {
        "estadoId": 5,
        "Nome": "Feira da Mata"
    },
    {
        "estadoId": 5,
        "Nome": "Feira de Santana"
    },
    {
        "estadoId": 5,
        "Nome": "Filadélfia"
    },
    {
        "estadoId": 5,
        "Nome": "Firmino Alves"
    },
    {
        "estadoId": 5,
        "Nome": "Floresta Azul"
    },
    {
        "estadoId": 5,
        "Nome": "Formosa do Rio Preto"
    },
    {
        "estadoId": 5,
        "Nome": "Gandu"
    },
    {
        "estadoId": 5,
        "Nome": "Gavião"
    },
    {
        "estadoId": 5,
        "Nome": "Gentio do Ouro"
    },
    {
        "estadoId": 5,
        "Nome": "Glória"
    },
    {
        "estadoId": 5,
        "Nome": "Gongogi"
    },
    {
        "estadoId": 5,
        "Nome": "Governador Mangabeira"
    },
    {
        "estadoId": 5,
        "Nome": "Guajeru"
    },
    {
        "estadoId": 5,
        "Nome": "Guanambi"
    },
    {
        "estadoId": 5,
        "Nome": "Guaratinga"
    },
    {
        "estadoId": 5,
        "Nome": "Heliópolis"
    },
    {
        "estadoId": 5,
        "Nome": "Iaçu"
    },
    {
        "estadoId": 5,
        "Nome": "Ibiassucê"
    },
    {
        "estadoId": 5,
        "Nome": "Ibicaraí"
    },
    {
        "estadoId": 5,
        "Nome": "Ibicoara"
    },
    {
        "estadoId": 5,
        "Nome": "Ibicuí"
    },
    {
        "estadoId": 5,
        "Nome": "Ibipeba"
    },
    {
        "estadoId": 5,
        "Nome": "Ibipitanga"
    },
    {
        "estadoId": 5,
        "Nome": "Ibiquera"
    },
    {
        "estadoId": 5,
        "Nome": "Ibirapitanga"
    },
    {
        "estadoId": 5,
        "Nome": "Ibirapuã"
    },
    {
        "estadoId": 5,
        "Nome": "Ibirataia"
    },
    {
        "estadoId": 5,
        "Nome": "Ibitiara"
    },
    {
        "estadoId": 5,
        "Nome": "Ibititá"
    },
    {
        "estadoId": 5,
        "Nome": "Ibotirama"
    },
    {
        "estadoId": 5,
        "Nome": "Ichu"
    },
    {
        "estadoId": 5,
        "Nome": "Igaporã"
    },
    {
        "estadoId": 5,
        "Nome": "Igrapiúna"
    },
    {
        "estadoId": 5,
        "Nome": "Iguaí"
    },
    {
        "estadoId": 5,
        "Nome": "Ilhéus"
    },
    {
        "estadoId": 5,
        "Nome": "Inhambupe"
    },
    {
        "estadoId": 5,
        "Nome": "Ipecaetá"
    },
    {
        "estadoId": 5,
        "Nome": "Ipiaú"
    },
    {
        "estadoId": 5,
        "Nome": "Ipirá"
    },
    {
        "estadoId": 5,
        "Nome": "Ipupiara"
    },
    {
        "estadoId": 5,
        "Nome": "Irajuba"
    },
    {
        "estadoId": 5,
        "Nome": "Iramaia"
    },
    {
        "estadoId": 5,
        "Nome": "Iraquara"
    },
    {
        "estadoId": 5,
        "Nome": "Irará"
    },
    {
        "estadoId": 5,
        "Nome": "Irecê"
    },
    {
        "estadoId": 5,
        "Nome": "Itabela"
    },
    {
        "estadoId": 5,
        "Nome": "Itaberaba"
    },
    {
        "estadoId": 5,
        "Nome": "Itabuna"
    },
    {
        "estadoId": 5,
        "Nome": "Itacaré"
    },
    {
        "estadoId": 5,
        "Nome": "Itaeté"
    },
    {
        "estadoId": 5,
        "Nome": "Itagi"
    },
    {
        "estadoId": 5,
        "Nome": "Itagibá"
    },
    {
        "estadoId": 5,
        "Nome": "Itagimirim"
    },
    {
        "estadoId": 5,
        "Nome": "Itaguaçu da Bahia"
    },
    {
        "estadoId": 5,
        "Nome": "Itaju do Colônia"
    },
    {
        "estadoId": 5,
        "Nome": "Itajuípe"
    },
    {
        "estadoId": 5,
        "Nome": "Itamaraju"
    },
    {
        "estadoId": 5,
        "Nome": "Itamari"
    },
    {
        "estadoId": 5,
        "Nome": "Itambé"
    },
    {
        "estadoId": 5,
        "Nome": "Itanagra"
    },
    {
        "estadoId": 5,
        "Nome": "Itanhém"
    },
    {
        "estadoId": 5,
        "Nome": "Itaparica"
    },
    {
        "estadoId": 5,
        "Nome": "Itapé"
    },
    {
        "estadoId": 5,
        "Nome": "Itapebi"
    },
    {
        "estadoId": 5,
        "Nome": "Itapetinga"
    },
    {
        "estadoId": 5,
        "Nome": "Itapicuru"
    },
    {
        "estadoId": 5,
        "Nome": "Itapitanga"
    },
    {
        "estadoId": 5,
        "Nome": "Itaquara"
    },
    {
        "estadoId": 5,
        "Nome": "Itarantim"
    },
    {
        "estadoId": 5,
        "Nome": "Itatim"
    },
    {
        "estadoId": 5,
        "Nome": "Itiruçu"
    },
    {
        "estadoId": 5,
        "Nome": "Itiúba"
    },
    {
        "estadoId": 5,
        "Nome": "Itororó"
    },
    {
        "estadoId": 5,
        "Nome": "Ituaçu"
    },
    {
        "estadoId": 5,
        "Nome": "Ituberá"
    },
    {
        "estadoId": 5,
        "Nome": "Iuiu"
    },
    {
        "estadoId": 5,
        "Nome": "Jaborandi"
    },
    {
        "estadoId": 5,
        "Nome": "Jacaraci"
    },
    {
        "estadoId": 5,
        "Nome": "Jacobina"
    },
    {
        "estadoId": 5,
        "Nome": "Jaguaquara"
    },
    {
        "estadoId": 5,
        "Nome": "Jaguarari"
    },
    {
        "estadoId": 5,
        "Nome": "Jaguaripe"
    },
    {
        "estadoId": 5,
        "Nome": "Jandaíra"
    },
    {
        "estadoId": 5,
        "Nome": "Jequié"
    },
    {
        "estadoId": 5,
        "Nome": "Jeremoabo"
    },
    {
        "estadoId": 5,
        "Nome": "Jiquiriçá"
    },
    {
        "estadoId": 5,
        "Nome": "Jitaúna"
    },
    {
        "estadoId": 5,
        "Nome": "João Dourado"
    },
    {
        "estadoId": 5,
        "Nome": "Juazeiro"
    },
    {
        "estadoId": 5,
        "Nome": "Jucuruçu"
    },
    {
        "estadoId": 5,
        "Nome": "Jussara"
    },
    {
        "estadoId": 5,
        "Nome": "Jussari"
    },
    {
        "estadoId": 5,
        "Nome": "Jussiape"
    },
    {
        "estadoId": 5,
        "Nome": "Lafaiete Coutinho"
    },
    {
        "estadoId": 5,
        "Nome": "Lagoa Real"
    },
    {
        "estadoId": 5,
        "Nome": "Laje"
    },
    {
        "estadoId": 5,
        "Nome": "Lajedão"
    },
    {
        "estadoId": 5,
        "Nome": "Lajedinho"
    },
    {
        "estadoId": 5,
        "Nome": "Lajedo do Tabocal"
    },
    {
        "estadoId": 5,
        "Nome": "Lamarão"
    },
    {
        "estadoId": 5,
        "Nome": "Lapão"
    },
    {
        "estadoId": 5,
        "Nome": "Lauro de Freitas"
    },
    {
        "estadoId": 5,
        "Nome": "Lençóis"
    },
    {
        "estadoId": 5,
        "Nome": "Licínio de Almeida"
    },
    {
        "estadoId": 5,
        "Nome": "Livramento de Nossa Senhora"
    },
    {
        "estadoId": 5,
        "Nome": "Luís Eduardo Magalhães"
    },
    {
        "estadoId": 5,
        "Nome": "Macajuba"
    },
    {
        "estadoId": 5,
        "Nome": "Macarani"
    },
    {
        "estadoId": 5,
        "Nome": "Macaúbas"
    },
    {
        "estadoId": 5,
        "Nome": "Macururé"
    },
    {
        "estadoId": 5,
        "Nome": "Madre de Deus"
    },
    {
        "estadoId": 5,
        "Nome": "Maetinga"
    },
    {
        "estadoId": 5,
        "Nome": "Maiquinique"
    },
    {
        "estadoId": 5,
        "Nome": "Mairi"
    },
    {
        "estadoId": 5,
        "Nome": "Malhada"
    },
    {
        "estadoId": 5,
        "Nome": "Malhada de Pedras"
    },
    {
        "estadoId": 5,
        "Nome": "Manoel Vitorino"
    },
    {
        "estadoId": 5,
        "Nome": "Mansidão"
    },
    {
        "estadoId": 5,
        "Nome": "Maracás"
    },
    {
        "estadoId": 5,
        "Nome": "Maragogipe"
    },
    {
        "estadoId": 5,
        "Nome": "Maraú"
    },
    {
        "estadoId": 5,
        "Nome": "Marcionílio Souza"
    },
    {
        "estadoId": 5,
        "Nome": "Mascote"
    },
    {
        "estadoId": 5,
        "Nome": "Mata de São João"
    },
    {
        "estadoId": 5,
        "Nome": "Matina"
    },
    {
        "estadoId": 5,
        "Nome": "Medeiros Neto"
    },
    {
        "estadoId": 5,
        "Nome": "Miguel Calmon"
    },
    {
        "estadoId": 5,
        "Nome": "Milagres"
    },
    {
        "estadoId": 5,
        "Nome": "Mirangaba"
    },
    {
        "estadoId": 5,
        "Nome": "Mirante"
    },
    {
        "estadoId": 5,
        "Nome": "Monte Santo"
    },
    {
        "estadoId": 5,
        "Nome": "Morpará"
    },
    {
        "estadoId": 5,
        "Nome": "Morro do Chapéu"
    },
    {
        "estadoId": 5,
        "Nome": "Mortugaba"
    },
    {
        "estadoId": 5,
        "Nome": "Mucugê"
    },
    {
        "estadoId": 5,
        "Nome": "Mucuri"
    },
    {
        "estadoId": 5,
        "Nome": "Mulungu do Morro"
    },
    {
        "estadoId": 5,
        "Nome": "Mundo Novo"
    },
    {
        "estadoId": 5,
        "Nome": "Muniz Ferreira"
    },
    {
        "estadoId": 5,
        "Nome": "Muquém do São Francisco"
    },
    {
        "estadoId": 5,
        "Nome": "Muritiba"
    },
    {
        "estadoId": 5,
        "Nome": "Mutuípe"
    },
    {
        "estadoId": 5,
        "Nome": "Nazaré"
    },
    {
        "estadoId": 5,
        "Nome": "Nilo Peçanha"
    },
    {
        "estadoId": 5,
        "Nome": "Nordestina"
    },
    {
        "estadoId": 5,
        "Nome": "Nova Canaã"
    },
    {
        "estadoId": 5,
        "Nome": "Nova Fátima"
    },
    {
        "estadoId": 5,
        "Nome": "Nova Ibiá"
    },
    {
        "estadoId": 5,
        "Nome": "Nova Itarana"
    },
    {
        "estadoId": 5,
        "Nome": "Nova Redenção"
    },
    {
        "estadoId": 5,
        "Nome": "Nova Soure"
    },
    {
        "estadoId": 5,
        "Nome": "Nova Viçosa"
    },
    {
        "estadoId": 5,
        "Nome": "Novo Horizonte"
    },
    {
        "estadoId": 5,
        "Nome": "Novo Triunfo"
    },
    {
        "estadoId": 5,
        "Nome": "Olindina"
    },
    {
        "estadoId": 5,
        "Nome": "Oliveira dos Brejinhos"
    },
    {
        "estadoId": 5,
        "Nome": "Ouriçangas"
    },
    {
        "estadoId": 5,
        "Nome": "Ourolândia"
    },
    {
        "estadoId": 5,
        "Nome": "Palmas de Monte Alto"
    },
    {
        "estadoId": 5,
        "Nome": "Palmeiras"
    },
    {
        "estadoId": 5,
        "Nome": "Paramirim"
    },
    {
        "estadoId": 5,
        "Nome": "Paratinga"
    },
    {
        "estadoId": 5,
        "Nome": "Paripiranga"
    },
    {
        "estadoId": 5,
        "Nome": "Pau Brasil"
    },
    {
        "estadoId": 5,
        "Nome": "Paulo Afonso"
    },
    {
        "estadoId": 5,
        "Nome": "Pé de Serra"
    },
    {
        "estadoId": 5,
        "Nome": "Pedrão"
    },
    {
        "estadoId": 5,
        "Nome": "Pedro Alexandre"
    },
    {
        "estadoId": 5,
        "Nome": "Piatã"
    },
    {
        "estadoId": 5,
        "Nome": "Pilão Arcado"
    },
    {
        "estadoId": 5,
        "Nome": "Pindaí"
    },
    {
        "estadoId": 5,
        "Nome": "Pindobaçu"
    },
    {
        "estadoId": 5,
        "Nome": "Pintadas"
    },
    {
        "estadoId": 5,
        "Nome": "Piraí do Norte"
    },
    {
        "estadoId": 5,
        "Nome": "Piripá"
    },
    {
        "estadoId": 5,
        "Nome": "Piritiba"
    },
    {
        "estadoId": 5,
        "Nome": "Planaltino"
    },
    {
        "estadoId": 5,
        "Nome": "Planalto"
    },
    {
        "estadoId": 5,
        "Nome": "Poções"
    },
    {
        "estadoId": 5,
        "Nome": "Pojuca"
    },
    {
        "estadoId": 5,
        "Nome": "Ponto Novo"
    },
    {
        "estadoId": 5,
        "Nome": "Porto Seguro"
    },
    {
        "estadoId": 5,
        "Nome": "Potiraguá"
    },
    {
        "estadoId": 5,
        "Nome": "Prado"
    },
    {
        "estadoId": 5,
        "Nome": "Presidente Dutra"
    },
    {
        "estadoId": 5,
        "Nome": "Presidente Jânio Quadros"
    },
    {
        "estadoId": 5,
        "Nome": "Presidente Tancredo Neves"
    },
    {
        "estadoId": 5,
        "Nome": "Queimadas"
    },
    {
        "estadoId": 5,
        "Nome": "Quijingue"
    },
    {
        "estadoId": 5,
        "Nome": "Quixabeira"
    },
    {
        "estadoId": 5,
        "Nome": "Rafael Jambeiro"
    },
    {
        "estadoId": 5,
        "Nome": "Remanso"
    },
    {
        "estadoId": 5,
        "Nome": "Retirolândia"
    },
    {
        "estadoId": 5,
        "Nome": "Riachão das Neves"
    },
    {
        "estadoId": 5,
        "Nome": "Riachão do Jacuípe"
    },
    {
        "estadoId": 5,
        "Nome": "Riacho de Santana"
    },
    {
        "estadoId": 5,
        "Nome": "Ribeira do Amparo"
    },
    {
        "estadoId": 5,
        "Nome": "Ribeira do Pombal"
    },
    {
        "estadoId": 5,
        "Nome": "Ribeirão do Largo"
    },
    {
        "estadoId": 5,
        "Nome": "Rio de Contas"
    },
    {
        "estadoId": 5,
        "Nome": "Rio do Antônio"
    },
    {
        "estadoId": 5,
        "Nome": "Rio do Pires"
    },
    {
        "estadoId": 5,
        "Nome": "Rio Real"
    },
    {
        "estadoId": 5,
        "Nome": "Rodelas"
    },
    {
        "estadoId": 5,
        "Nome": "Ruy Barbosa"
    },
    {
        "estadoId": 5,
        "Nome": "Salinas da Margarida"
    },
    {
        "estadoId": 5,
        "Nome": "Salvador"
    },
    {
        "estadoId": 5,
        "Nome": "Santa Bárbara"
    },
    {
        "estadoId": 5,
        "Nome": "Santa Brígida"
    },
    {
        "estadoId": 5,
        "Nome": "Santa Cruz Cabrália"
    },
    {
        "estadoId": 5,
        "Nome": "Santa Cruz da Vitória"
    },
    {
        "estadoId": 5,
        "Nome": "Santa Inês"
    },
    {
        "estadoId": 5,
        "Nome": "Santaluz"
    },
    {
        "estadoId": 5,
        "Nome": "Santa Luzia"
    },
    {
        "estadoId": 5,
        "Nome": "Santa Maria da Vitória"
    },
    {
        "estadoId": 5,
        "Nome": "Santana"
    },
    {
        "estadoId": 5,
        "Nome": "Santanópolis"
    },
    {
        "estadoId": 5,
        "Nome": "Santa Rita de Cássia"
    },
    {
        "estadoId": 5,
        "Nome": "Santa Terezinha"
    },
    {
        "estadoId": 5,
        "Nome": "Santo Amaro"
    },
    {
        "estadoId": 5,
        "Nome": "Santo Antônio de Jesus"
    },
    {
        "estadoId": 5,
        "Nome": "Santo Estêvão"
    },
    {
        "estadoId": 5,
        "Nome": "São Desidério"
    },
    {
        "estadoId": 5,
        "Nome": "São Domingos"
    },
    {
        "estadoId": 5,
        "Nome": "São Félix"
    },
    {
        "estadoId": 5,
        "Nome": "São Félix do Coribe"
    },
    {
        "estadoId": 5,
        "Nome": "São Felipe"
    },
    {
        "estadoId": 5,
        "Nome": "São Francisco do Conde"
    },
    {
        "estadoId": 5,
        "Nome": "São Gabriel"
    },
    {
        "estadoId": 5,
        "Nome": "São Gonçalo dos Campos"
    },
    {
        "estadoId": 5,
        "Nome": "São José da Vitória"
    },
    {
        "estadoId": 5,
        "Nome": "São José do Jacuípe"
    },
    {
        "estadoId": 5,
        "Nome": "São Miguel das Matas"
    },
    {
        "estadoId": 5,
        "Nome": "São Sebastião do Passé"
    },
    {
        "estadoId": 5,
        "Nome": "Sapeaçu"
    },
    {
        "estadoId": 5,
        "Nome": "Sátiro Dias"
    },
    {
        "estadoId": 5,
        "Nome": "Saubara"
    },
    {
        "estadoId": 5,
        "Nome": "Saúde"
    },
    {
        "estadoId": 5,
        "Nome": "Seabra"
    },
    {
        "estadoId": 5,
        "Nome": "Sebastião Laranjeiras"
    },
    {
        "estadoId": 5,
        "Nome": "Senhor do Bonfim"
    },
    {
        "estadoId": 5,
        "Nome": "Serra do Ramalho"
    },
    {
        "estadoId": 5,
        "Nome": "Sento Sé"
    },
    {
        "estadoId": 5,
        "Nome": "Serra Dourada"
    },
    {
        "estadoId": 5,
        "Nome": "Serra Preta"
    },
    {
        "estadoId": 5,
        "Nome": "Serrinha"
    },
    {
        "estadoId": 5,
        "Nome": "Serrolândia"
    },
    {
        "estadoId": 5,
        "Nome": "Simões Filho"
    },
    {
        "estadoId": 5,
        "Nome": "Sítio do Mato"
    },
    {
        "estadoId": 5,
        "Nome": "Sítio do Quinto"
    },
    {
        "estadoId": 5,
        "Nome": "Sobradinho"
    },
    {
        "estadoId": 5,
        "Nome": "Souto Soares"
    },
    {
        "estadoId": 5,
        "Nome": "Tabocas do Brejo Velho"
    },
    {
        "estadoId": 5,
        "Nome": "Tanhaçu"
    },
    {
        "estadoId": 5,
        "Nome": "Tanque Novo"
    },
    {
        "estadoId": 5,
        "Nome": "Tanquinho"
    },
    {
        "estadoId": 5,
        "Nome": "Taperoá"
    },
    {
        "estadoId": 5,
        "Nome": "Tapiramutá"
    },
    {
        "estadoId": 5,
        "Nome": "Teixeira de Freitas"
    },
    {
        "estadoId": 5,
        "Nome": "Teodoro Sampaio"
    },
    {
        "estadoId": 5,
        "Nome": "Teofilândia"
    },
    {
        "estadoId": 5,
        "Nome": "Teolândia"
    },
    {
        "estadoId": 5,
        "Nome": "Terra Nova"
    },
    {
        "estadoId": 5,
        "Nome": "Tremedal"
    },
    {
        "estadoId": 5,
        "Nome": "Tucano"
    },
    {
        "estadoId": 5,
        "Nome": "Uauá"
    },
    {
        "estadoId": 5,
        "Nome": "Ubaíra"
    },
    {
        "estadoId": 5,
        "Nome": "Ubaitaba"
    },
    {
        "estadoId": 5,
        "Nome": "Ubatã"
    },
    {
        "estadoId": 5,
        "Nome": "Uibaí"
    },
    {
        "estadoId": 5,
        "Nome": "Umburanas"
    },
    {
        "estadoId": 5,
        "Nome": "Una"
    },
    {
        "estadoId": 5,
        "Nome": "Urandi"
    },
    {
        "estadoId": 5,
        "Nome": "Uruçuca"
    },
    {
        "estadoId": 5,
        "Nome": "Utinga"
    },
    {
        "estadoId": 5,
        "Nome": "Valença"
    },
    {
        "estadoId": 5,
        "Nome": "Valente"
    },
    {
        "estadoId": 5,
        "Nome": "Várzea da Roça"
    },
    {
        "estadoId": 5,
        "Nome": "Várzea do Poço"
    },
    {
        "estadoId": 5,
        "Nome": "Várzea Nova"
    },
    {
        "estadoId": 5,
        "Nome": "Varzedo"
    },
    {
        "estadoId": 5,
        "Nome": "Vera Cruz"
    },
    {
        "estadoId": 5,
        "Nome": "Vereda"
    },
    {
        "estadoId": 5,
        "Nome": "Vitória da Conquista"
    },
    {
        "estadoId": 5,
        "Nome": "Wagner"
    },
    {
        "estadoId": 5,
        "Nome": "Wanderley"
    },
    {
        "estadoId": 5,
        "Nome": "Wenceslau Guimarães"
    },
    {
        "estadoId": 5,
        "Nome": "Xique-Xique"
    },
    {
        "estadoId": 13,
        "Nome": "Abadia dos Dourados"
    },
    {
        "estadoId": 13,
        "Nome": "Abaeté"
    },
    {
        "estadoId": 13,
        "Nome": "Abre Campo"
    },
    {
        "estadoId": 13,
        "Nome": "Acaiaca"
    },
    {
        "estadoId": 13,
        "Nome": "Açucena"
    },
    {
        "estadoId": 13,
        "Nome": "Água Boa"
    },
    {
        "estadoId": 13,
        "Nome": "Água Comprida"
    },
    {
        "estadoId": 13,
        "Nome": "Aguanil"
    },
    {
        "estadoId": 13,
        "Nome": "Águas Formosas"
    },
    {
        "estadoId": 13,
        "Nome": "Águas Vermelhas"
    },
    {
        "estadoId": 13,
        "Nome": "Aimorés"
    },
    {
        "estadoId": 13,
        "Nome": "Aiuruoca"
    },
    {
        "estadoId": 13,
        "Nome": "Alagoa"
    },
    {
        "estadoId": 13,
        "Nome": "Albertina"
    },
    {
        "estadoId": 13,
        "Nome": "Além Paraíba"
    },
    {
        "estadoId": 13,
        "Nome": "Alfenas"
    },
    {
        "estadoId": 13,
        "Nome": "Alfredo Vasconcelos"
    },
    {
        "estadoId": 13,
        "Nome": "Almenara"
    },
    {
        "estadoId": 13,
        "Nome": "Alpercata"
    },
    {
        "estadoId": 13,
        "Nome": "Alpinópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Alterosa"
    },
    {
        "estadoId": 13,
        "Nome": "Alto Caparaó"
    },
    {
        "estadoId": 13,
        "Nome": "Alto Rio Doce"
    },
    {
        "estadoId": 13,
        "Nome": "Alvarenga"
    },
    {
        "estadoId": 13,
        "Nome": "Alvinópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Alvorada de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Amparo do Serra"
    },
    {
        "estadoId": 13,
        "Nome": "Andradas"
    },
    {
        "estadoId": 13,
        "Nome": "Cachoeira de Pajeú"
    },
    {
        "estadoId": 13,
        "Nome": "Andrelândia"
    },
    {
        "estadoId": 13,
        "Nome": "Angelândia"
    },
    {
        "estadoId": 13,
        "Nome": "Antônio Carlos"
    },
    {
        "estadoId": 13,
        "Nome": "Antônio Dias"
    },
    {
        "estadoId": 13,
        "Nome": "Antônio Prado de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Araçaí"
    },
    {
        "estadoId": 13,
        "Nome": "Aracitaba"
    },
    {
        "estadoId": 13,
        "Nome": "Araçuaí"
    },
    {
        "estadoId": 13,
        "Nome": "Araguari"
    },
    {
        "estadoId": 13,
        "Nome": "Arantina"
    },
    {
        "estadoId": 13,
        "Nome": "Araponga"
    },
    {
        "estadoId": 13,
        "Nome": "Araporã"
    },
    {
        "estadoId": 13,
        "Nome": "Arapuá"
    },
    {
        "estadoId": 13,
        "Nome": "Araújos"
    },
    {
        "estadoId": 13,
        "Nome": "Araxá"
    },
    {
        "estadoId": 13,
        "Nome": "Arceburgo"
    },
    {
        "estadoId": 13,
        "Nome": "Arcos"
    },
    {
        "estadoId": 13,
        "Nome": "Areado"
    },
    {
        "estadoId": 13,
        "Nome": "Argirita"
    },
    {
        "estadoId": 13,
        "Nome": "Aricanduva"
    },
    {
        "estadoId": 13,
        "Nome": "Arinos"
    },
    {
        "estadoId": 13,
        "Nome": "Astolfo Dutra"
    },
    {
        "estadoId": 13,
        "Nome": "Ataléia"
    },
    {
        "estadoId": 13,
        "Nome": "Augusto de Lima"
    },
    {
        "estadoId": 13,
        "Nome": "Baependi"
    },
    {
        "estadoId": 13,
        "Nome": "Baldim"
    },
    {
        "estadoId": 13,
        "Nome": "Bambuí"
    },
    {
        "estadoId": 13,
        "Nome": "Bandeira"
    },
    {
        "estadoId": 13,
        "Nome": "Bandeira do Sul"
    },
    {
        "estadoId": 13,
        "Nome": "Barão de Cocais"
    },
    {
        "estadoId": 13,
        "Nome": "Barão de Monte Alto"
    },
    {
        "estadoId": 13,
        "Nome": "Barbacena"
    },
    {
        "estadoId": 13,
        "Nome": "Barra Longa"
    },
    {
        "estadoId": 13,
        "Nome": "Barroso"
    },
    {
        "estadoId": 13,
        "Nome": "Bela Vista de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Belmiro Braga"
    },
    {
        "estadoId": 13,
        "Nome": "Belo Horizonte"
    },
    {
        "estadoId": 13,
        "Nome": "Belo Oriente"
    },
    {
        "estadoId": 13,
        "Nome": "Belo Vale"
    },
    {
        "estadoId": 13,
        "Nome": "Berilo"
    },
    {
        "estadoId": 13,
        "Nome": "Bertópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Berizal"
    },
    {
        "estadoId": 13,
        "Nome": "Betim"
    },
    {
        "estadoId": 13,
        "Nome": "Bias Fortes"
    },
    {
        "estadoId": 13,
        "Nome": "Bicas"
    },
    {
        "estadoId": 13,
        "Nome": "Biquinhas"
    },
    {
        "estadoId": 13,
        "Nome": "Boa Esperança"
    },
    {
        "estadoId": 13,
        "Nome": "Bocaina de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Bocaiúva"
    },
    {
        "estadoId": 13,
        "Nome": "Bom Despacho"
    },
    {
        "estadoId": 13,
        "Nome": "Bom Jardim de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Bom Jesus da Penha"
    },
    {
        "estadoId": 13,
        "Nome": "Bom Jesus do Amparo"
    },
    {
        "estadoId": 13,
        "Nome": "Bom Jesus do Galho"
    },
    {
        "estadoId": 13,
        "Nome": "Bom Repouso"
    },
    {
        "estadoId": 13,
        "Nome": "Bom Sucesso"
    },
    {
        "estadoId": 13,
        "Nome": "Bonfim"
    },
    {
        "estadoId": 13,
        "Nome": "Bonfinópolis de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Bonito de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Borda da Mata"
    },
    {
        "estadoId": 13,
        "Nome": "Botelhos"
    },
    {
        "estadoId": 13,
        "Nome": "Botumirim"
    },
    {
        "estadoId": 13,
        "Nome": "Brasilândia de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Brasília de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Brás Pires"
    },
    {
        "estadoId": 13,
        "Nome": "Braúnas"
    },
    {
        "estadoId": 13,
        "Nome": "Brazópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Brumadinho"
    },
    {
        "estadoId": 13,
        "Nome": "Bueno Brandão"
    },
    {
        "estadoId": 13,
        "Nome": "Buenópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Bugre"
    },
    {
        "estadoId": 13,
        "Nome": "Buritis"
    },
    {
        "estadoId": 13,
        "Nome": "Buritizeiro"
    },
    {
        "estadoId": 13,
        "Nome": "Cabeceira Grande"
    },
    {
        "estadoId": 13,
        "Nome": "Cabo Verde"
    },
    {
        "estadoId": 13,
        "Nome": "Cachoeira da Prata"
    },
    {
        "estadoId": 13,
        "Nome": "Cachoeira de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Cachoeira Dourada"
    },
    {
        "estadoId": 13,
        "Nome": "Caetanópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Caeté"
    },
    {
        "estadoId": 13,
        "Nome": "Caiana"
    },
    {
        "estadoId": 13,
        "Nome": "Cajuri"
    },
    {
        "estadoId": 13,
        "Nome": "Caldas"
    },
    {
        "estadoId": 13,
        "Nome": "Camacho"
    },
    {
        "estadoId": 13,
        "Nome": "Camanducaia"
    },
    {
        "estadoId": 13,
        "Nome": "Cambuí"
    },
    {
        "estadoId": 13,
        "Nome": "Cambuquira"
    },
    {
        "estadoId": 13,
        "Nome": "Campanário"
    },
    {
        "estadoId": 13,
        "Nome": "Campanha"
    },
    {
        "estadoId": 13,
        "Nome": "Campestre"
    },
    {
        "estadoId": 13,
        "Nome": "Campina Verde"
    },
    {
        "estadoId": 13,
        "Nome": "Campo Azul"
    },
    {
        "estadoId": 13,
        "Nome": "Campo Belo"
    },
    {
        "estadoId": 13,
        "Nome": "Campo do Meio"
    },
    {
        "estadoId": 13,
        "Nome": "Campo Florido"
    },
    {
        "estadoId": 13,
        "Nome": "Campos Altos"
    },
    {
        "estadoId": 13,
        "Nome": "Campos Gerais"
    },
    {
        "estadoId": 13,
        "Nome": "Canaã"
    },
    {
        "estadoId": 13,
        "Nome": "Canápolis"
    },
    {
        "estadoId": 13,
        "Nome": "Cana Verde"
    },
    {
        "estadoId": 13,
        "Nome": "Candeias"
    },
    {
        "estadoId": 13,
        "Nome": "Cantagalo"
    },
    {
        "estadoId": 13,
        "Nome": "Caparaó"
    },
    {
        "estadoId": 13,
        "Nome": "Capela Nova"
    },
    {
        "estadoId": 13,
        "Nome": "Capelinha"
    },
    {
        "estadoId": 13,
        "Nome": "Capetinga"
    },
    {
        "estadoId": 13,
        "Nome": "Capim Branco"
    },
    {
        "estadoId": 13,
        "Nome": "Capinópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Capitão Andrade"
    },
    {
        "estadoId": 13,
        "Nome": "Capitão Enéas"
    },
    {
        "estadoId": 13,
        "Nome": "Capitólio"
    },
    {
        "estadoId": 13,
        "Nome": "Caputira"
    },
    {
        "estadoId": 13,
        "Nome": "Caraí"
    },
    {
        "estadoId": 13,
        "Nome": "Caranaíba"
    },
    {
        "estadoId": 13,
        "Nome": "Carandaí"
    },
    {
        "estadoId": 13,
        "Nome": "Carangola"
    },
    {
        "estadoId": 13,
        "Nome": "Caratinga"
    },
    {
        "estadoId": 13,
        "Nome": "Carbonita"
    },
    {
        "estadoId": 13,
        "Nome": "Careaçu"
    },
    {
        "estadoId": 13,
        "Nome": "Carlos Chagas"
    },
    {
        "estadoId": 13,
        "Nome": "Carmésia"
    },
    {
        "estadoId": 13,
        "Nome": "Carmo da Cachoeira"
    },
    {
        "estadoId": 13,
        "Nome": "Carmo da Mata"
    },
    {
        "estadoId": 13,
        "Nome": "Carmo de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Carmo do Cajuru"
    },
    {
        "estadoId": 13,
        "Nome": "Carmo do Paranaíba"
    },
    {
        "estadoId": 13,
        "Nome": "Carmo do Rio Claro"
    },
    {
        "estadoId": 13,
        "Nome": "Carmópolis de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Carneirinho"
    },
    {
        "estadoId": 13,
        "Nome": "Carrancas"
    },
    {
        "estadoId": 13,
        "Nome": "Carvalhópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Carvalhos"
    },
    {
        "estadoId": 13,
        "Nome": "Casa Grande"
    },
    {
        "estadoId": 13,
        "Nome": "Cascalho Rico"
    },
    {
        "estadoId": 13,
        "Nome": "Cássia"
    },
    {
        "estadoId": 13,
        "Nome": "Conceição da Barra de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Cataguases"
    },
    {
        "estadoId": 13,
        "Nome": "Catas Altas"
    },
    {
        "estadoId": 13,
        "Nome": "Catas Altas da Noruega"
    },
    {
        "estadoId": 13,
        "Nome": "Catuji"
    },
    {
        "estadoId": 13,
        "Nome": "Catuti"
    },
    {
        "estadoId": 13,
        "Nome": "Caxambu"
    },
    {
        "estadoId": 13,
        "Nome": "Cedro do Abaeté"
    },
    {
        "estadoId": 13,
        "Nome": "Central de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Centralina"
    },
    {
        "estadoId": 13,
        "Nome": "Chácara"
    },
    {
        "estadoId": 13,
        "Nome": "Chalé"
    },
    {
        "estadoId": 13,
        "Nome": "Chapada do Norte"
    },
    {
        "estadoId": 13,
        "Nome": "Chapada Gaúcha"
    },
    {
        "estadoId": 13,
        "Nome": "Chiador"
    },
    {
        "estadoId": 13,
        "Nome": "Cipotânea"
    },
    {
        "estadoId": 13,
        "Nome": "Claraval"
    },
    {
        "estadoId": 13,
        "Nome": "Claro dos Poções"
    },
    {
        "estadoId": 13,
        "Nome": "Cláudio"
    },
    {
        "estadoId": 13,
        "Nome": "Coimbra"
    },
    {
        "estadoId": 13,
        "Nome": "Coluna"
    },
    {
        "estadoId": 13,
        "Nome": "Comendador Gomes"
    },
    {
        "estadoId": 13,
        "Nome": "Comercinho"
    },
    {
        "estadoId": 13,
        "Nome": "Conceição da Aparecida"
    },
    {
        "estadoId": 13,
        "Nome": "Conceição das Pedras"
    },
    {
        "estadoId": 13,
        "Nome": "Conceição das Alagoas"
    },
    {
        "estadoId": 13,
        "Nome": "Conceição de Ipanema"
    },
    {
        "estadoId": 13,
        "Nome": "Conceição do Mato Dentro"
    },
    {
        "estadoId": 13,
        "Nome": "Conceição do Pará"
    },
    {
        "estadoId": 13,
        "Nome": "Conceição do Rio Verde"
    },
    {
        "estadoId": 13,
        "Nome": "Conceição dos Ouros"
    },
    {
        "estadoId": 13,
        "Nome": "Cônego Marinho"
    },
    {
        "estadoId": 13,
        "Nome": "Confins"
    },
    {
        "estadoId": 13,
        "Nome": "Congonhal"
    },
    {
        "estadoId": 13,
        "Nome": "Congonhas"
    },
    {
        "estadoId": 13,
        "Nome": "Congonhas do Norte"
    },
    {
        "estadoId": 13,
        "Nome": "Conquista"
    },
    {
        "estadoId": 13,
        "Nome": "Conselheiro Lafaiete"
    },
    {
        "estadoId": 13,
        "Nome": "Conselheiro Pena"
    },
    {
        "estadoId": 13,
        "Nome": "Consolação"
    },
    {
        "estadoId": 13,
        "Nome": "Contagem"
    },
    {
        "estadoId": 13,
        "Nome": "Coqueiral"
    },
    {
        "estadoId": 13,
        "Nome": "Coração de Jesus"
    },
    {
        "estadoId": 13,
        "Nome": "Cordisburgo"
    },
    {
        "estadoId": 13,
        "Nome": "Cordislândia"
    },
    {
        "estadoId": 13,
        "Nome": "Corinto"
    },
    {
        "estadoId": 13,
        "Nome": "Coroaci"
    },
    {
        "estadoId": 13,
        "Nome": "Coromandel"
    },
    {
        "estadoId": 13,
        "Nome": "Coronel Fabriciano"
    },
    {
        "estadoId": 13,
        "Nome": "Coronel Murta"
    },
    {
        "estadoId": 13,
        "Nome": "Coronel Pacheco"
    },
    {
        "estadoId": 13,
        "Nome": "Coronel Xavier Chaves"
    },
    {
        "estadoId": 13,
        "Nome": "Córrego Danta"
    },
    {
        "estadoId": 13,
        "Nome": "Córrego do Bom Jesus"
    },
    {
        "estadoId": 13,
        "Nome": "Córrego Fundo"
    },
    {
        "estadoId": 13,
        "Nome": "Córrego Novo"
    },
    {
        "estadoId": 13,
        "Nome": "Couto de Magalhães de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Crisólita"
    },
    {
        "estadoId": 13,
        "Nome": "Cristais"
    },
    {
        "estadoId": 13,
        "Nome": "Cristália"
    },
    {
        "estadoId": 13,
        "Nome": "Cristiano Otoni"
    },
    {
        "estadoId": 13,
        "Nome": "Cristina"
    },
    {
        "estadoId": 13,
        "Nome": "Crucilândia"
    },
    {
        "estadoId": 13,
        "Nome": "Cruzeiro da Fortaleza"
    },
    {
        "estadoId": 13,
        "Nome": "Cruzília"
    },
    {
        "estadoId": 13,
        "Nome": "Cuparaque"
    },
    {
        "estadoId": 13,
        "Nome": "Curral de Dentro"
    },
    {
        "estadoId": 13,
        "Nome": "Curvelo"
    },
    {
        "estadoId": 13,
        "Nome": "Datas"
    },
    {
        "estadoId": 13,
        "Nome": "Delfim Moreira"
    },
    {
        "estadoId": 13,
        "Nome": "Delfinópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Delta"
    },
    {
        "estadoId": 13,
        "Nome": "Descoberto"
    },
    {
        "estadoId": 13,
        "Nome": "Desterro de Entre Rios"
    },
    {
        "estadoId": 13,
        "Nome": "Desterro do Melo"
    },
    {
        "estadoId": 13,
        "Nome": "Diamantina"
    },
    {
        "estadoId": 13,
        "Nome": "Diogo de Vasconcelos"
    },
    {
        "estadoId": 13,
        "Nome": "Dionísio"
    },
    {
        "estadoId": 13,
        "Nome": "Divinésia"
    },
    {
        "estadoId": 13,
        "Nome": "Divino"
    },
    {
        "estadoId": 13,
        "Nome": "Divino das Laranjeiras"
    },
    {
        "estadoId": 13,
        "Nome": "Divinolândia de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Divinópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Divisa Alegre"
    },
    {
        "estadoId": 13,
        "Nome": "Divisa Nova"
    },
    {
        "estadoId": 13,
        "Nome": "Divisópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Dom Bosco"
    },
    {
        "estadoId": 13,
        "Nome": "Dom Cavati"
    },
    {
        "estadoId": 13,
        "Nome": "Dom Joaquim"
    },
    {
        "estadoId": 13,
        "Nome": "Dom Silvério"
    },
    {
        "estadoId": 13,
        "Nome": "Dom Viçoso"
    },
    {
        "estadoId": 13,
        "Nome": "Dona Eusébia"
    },
    {
        "estadoId": 13,
        "Nome": "Dores de Campos"
    },
    {
        "estadoId": 13,
        "Nome": "Dores de Guanhães"
    },
    {
        "estadoId": 13,
        "Nome": "Dores do Indaiá"
    },
    {
        "estadoId": 13,
        "Nome": "Dores do Turvo"
    },
    {
        "estadoId": 13,
        "Nome": "Doresópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Douradoquara"
    },
    {
        "estadoId": 13,
        "Nome": "Durandé"
    },
    {
        "estadoId": 13,
        "Nome": "Elói Mendes"
    },
    {
        "estadoId": 13,
        "Nome": "Engenheiro Caldas"
    },
    {
        "estadoId": 13,
        "Nome": "Engenheiro Navarro"
    },
    {
        "estadoId": 13,
        "Nome": "Entre Folhas"
    },
    {
        "estadoId": 13,
        "Nome": "Entre Rios de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Ervália"
    },
    {
        "estadoId": 13,
        "Nome": "Esmeraldas"
    },
    {
        "estadoId": 13,
        "Nome": "Espera Feliz"
    },
    {
        "estadoId": 13,
        "Nome": "Espinosa"
    },
    {
        "estadoId": 13,
        "Nome": "Espírito Santo do Dourado"
    },
    {
        "estadoId": 13,
        "Nome": "Estiva"
    },
    {
        "estadoId": 13,
        "Nome": "Estrela Dalva"
    },
    {
        "estadoId": 13,
        "Nome": "Estrela do Indaiá"
    },
    {
        "estadoId": 13,
        "Nome": "Estrela do Sul"
    },
    {
        "estadoId": 13,
        "Nome": "Eugenópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Ewbank da Câmara"
    },
    {
        "estadoId": 13,
        "Nome": "Extrema"
    },
    {
        "estadoId": 13,
        "Nome": "Fama"
    },
    {
        "estadoId": 13,
        "Nome": "Faria Lemos"
    },
    {
        "estadoId": 13,
        "Nome": "Felício dos Santos"
    },
    {
        "estadoId": 13,
        "Nome": "São Gonçalo do Rio Preto"
    },
    {
        "estadoId": 13,
        "Nome": "Felisburgo"
    },
    {
        "estadoId": 13,
        "Nome": "Felixlândia"
    },
    {
        "estadoId": 13,
        "Nome": "Fernandes Tourinho"
    },
    {
        "estadoId": 13,
        "Nome": "Ferros"
    },
    {
        "estadoId": 13,
        "Nome": "Fervedouro"
    },
    {
        "estadoId": 13,
        "Nome": "Florestal"
    },
    {
        "estadoId": 13,
        "Nome": "Formiga"
    },
    {
        "estadoId": 13,
        "Nome": "Formoso"
    },
    {
        "estadoId": 13,
        "Nome": "Fortaleza de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Fortuna de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Francisco Badaró"
    },
    {
        "estadoId": 13,
        "Nome": "Francisco Dumont"
    },
    {
        "estadoId": 13,
        "Nome": "Francisco Sá"
    },
    {
        "estadoId": 13,
        "Nome": "Franciscópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Frei Gaspar"
    },
    {
        "estadoId": 13,
        "Nome": "Frei Inocêncio"
    },
    {
        "estadoId": 13,
        "Nome": "Frei Lagonegro"
    },
    {
        "estadoId": 13,
        "Nome": "Fronteira"
    },
    {
        "estadoId": 13,
        "Nome": "Fronteira dos Vales"
    },
    {
        "estadoId": 13,
        "Nome": "Fruta de Leite"
    },
    {
        "estadoId": 13,
        "Nome": "Frutal"
    },
    {
        "estadoId": 13,
        "Nome": "Funilândia"
    },
    {
        "estadoId": 13,
        "Nome": "Galiléia"
    },
    {
        "estadoId": 13,
        "Nome": "Gameleiras"
    },
    {
        "estadoId": 13,
        "Nome": "Glaucilândia"
    },
    {
        "estadoId": 13,
        "Nome": "Goiabeira"
    },
    {
        "estadoId": 13,
        "Nome": "Goianá"
    },
    {
        "estadoId": 13,
        "Nome": "Gonçalves"
    },
    {
        "estadoId": 13,
        "Nome": "Gonzaga"
    },
    {
        "estadoId": 13,
        "Nome": "Gouveia"
    },
    {
        "estadoId": 13,
        "Nome": "Governador Valadares"
    },
    {
        "estadoId": 13,
        "Nome": "Grão Mogol"
    },
    {
        "estadoId": 13,
        "Nome": "Grupiara"
    },
    {
        "estadoId": 13,
        "Nome": "Guanhães"
    },
    {
        "estadoId": 13,
        "Nome": "Guapé"
    },
    {
        "estadoId": 13,
        "Nome": "Guaraciaba"
    },
    {
        "estadoId": 13,
        "Nome": "Guaraciama"
    },
    {
        "estadoId": 13,
        "Nome": "Guaranésia"
    },
    {
        "estadoId": 13,
        "Nome": "Guarani"
    },
    {
        "estadoId": 13,
        "Nome": "Guarará"
    },
    {
        "estadoId": 13,
        "Nome": "Guarda-Mor"
    },
    {
        "estadoId": 13,
        "Nome": "Guaxupé"
    },
    {
        "estadoId": 13,
        "Nome": "Guidoval"
    },
    {
        "estadoId": 13,
        "Nome": "Guimarânia"
    },
    {
        "estadoId": 13,
        "Nome": "Guiricema"
    },
    {
        "estadoId": 13,
        "Nome": "Gurinhatã"
    },
    {
        "estadoId": 13,
        "Nome": "Heliodora"
    },
    {
        "estadoId": 13,
        "Nome": "Iapu"
    },
    {
        "estadoId": 13,
        "Nome": "Ibertioga"
    },
    {
        "estadoId": 13,
        "Nome": "Ibiá"
    },
    {
        "estadoId": 13,
        "Nome": "Ibiaí"
    },
    {
        "estadoId": 13,
        "Nome": "Ibiracatu"
    },
    {
        "estadoId": 13,
        "Nome": "Ibiraci"
    },
    {
        "estadoId": 13,
        "Nome": "Ibirité"
    },
    {
        "estadoId": 13,
        "Nome": "Ibitiúra de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Ibituruna"
    },
    {
        "estadoId": 13,
        "Nome": "Icaraí de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Igarapé"
    },
    {
        "estadoId": 13,
        "Nome": "Igaratinga"
    },
    {
        "estadoId": 13,
        "Nome": "Iguatama"
    },
    {
        "estadoId": 13,
        "Nome": "Ijaci"
    },
    {
        "estadoId": 13,
        "Nome": "Ilicínea"
    },
    {
        "estadoId": 13,
        "Nome": "Imbé de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Inconfidentes"
    },
    {
        "estadoId": 13,
        "Nome": "Indaiabira"
    },
    {
        "estadoId": 13,
        "Nome": "Indianópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Ingaí"
    },
    {
        "estadoId": 13,
        "Nome": "Inhapim"
    },
    {
        "estadoId": 13,
        "Nome": "Inhaúma"
    },
    {
        "estadoId": 13,
        "Nome": "Inimutaba"
    },
    {
        "estadoId": 13,
        "Nome": "Ipaba"
    },
    {
        "estadoId": 13,
        "Nome": "Ipanema"
    },
    {
        "estadoId": 13,
        "Nome": "Ipatinga"
    },
    {
        "estadoId": 13,
        "Nome": "Ipiaçu"
    },
    {
        "estadoId": 13,
        "Nome": "Ipuiúna"
    },
    {
        "estadoId": 13,
        "Nome": "Iraí de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Itabira"
    },
    {
        "estadoId": 13,
        "Nome": "Itabirinha"
    },
    {
        "estadoId": 13,
        "Nome": "Itabirito"
    },
    {
        "estadoId": 13,
        "Nome": "Itacambira"
    },
    {
        "estadoId": 13,
        "Nome": "Itacarambi"
    },
    {
        "estadoId": 13,
        "Nome": "Itaguara"
    },
    {
        "estadoId": 13,
        "Nome": "Itaipé"
    },
    {
        "estadoId": 13,
        "Nome": "Itajubá"
    },
    {
        "estadoId": 13,
        "Nome": "Itamarandiba"
    },
    {
        "estadoId": 13,
        "Nome": "Itamarati de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Itambacuri"
    },
    {
        "estadoId": 13,
        "Nome": "Itambé do Mato Dentro"
    },
    {
        "estadoId": 13,
        "Nome": "Itamogi"
    },
    {
        "estadoId": 13,
        "Nome": "Itamonte"
    },
    {
        "estadoId": 13,
        "Nome": "Itanhandu"
    },
    {
        "estadoId": 13,
        "Nome": "Itanhomi"
    },
    {
        "estadoId": 13,
        "Nome": "Itaobim"
    },
    {
        "estadoId": 13,
        "Nome": "Itapagipe"
    },
    {
        "estadoId": 13,
        "Nome": "Itapecerica"
    },
    {
        "estadoId": 13,
        "Nome": "Itapeva"
    },
    {
        "estadoId": 13,
        "Nome": "Itatiaiuçu"
    },
    {
        "estadoId": 13,
        "Nome": "Itaú de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Itaúna"
    },
    {
        "estadoId": 13,
        "Nome": "Itaverava"
    },
    {
        "estadoId": 13,
        "Nome": "Itinga"
    },
    {
        "estadoId": 13,
        "Nome": "Itueta"
    },
    {
        "estadoId": 13,
        "Nome": "Ituiutaba"
    },
    {
        "estadoId": 13,
        "Nome": "Itumirim"
    },
    {
        "estadoId": 13,
        "Nome": "Iturama"
    },
    {
        "estadoId": 13,
        "Nome": "Itutinga"
    },
    {
        "estadoId": 13,
        "Nome": "Jaboticatubas"
    },
    {
        "estadoId": 13,
        "Nome": "Jacinto"
    },
    {
        "estadoId": 13,
        "Nome": "Jacuí"
    },
    {
        "estadoId": 13,
        "Nome": "Jacutinga"
    },
    {
        "estadoId": 13,
        "Nome": "Jaguaraçu"
    },
    {
        "estadoId": 13,
        "Nome": "Jaíba"
    },
    {
        "estadoId": 13,
        "Nome": "Jampruca"
    },
    {
        "estadoId": 13,
        "Nome": "Janaúba"
    },
    {
        "estadoId": 13,
        "Nome": "Januária"
    },
    {
        "estadoId": 13,
        "Nome": "Japaraíba"
    },
    {
        "estadoId": 13,
        "Nome": "Japonvar"
    },
    {
        "estadoId": 13,
        "Nome": "Jeceaba"
    },
    {
        "estadoId": 13,
        "Nome": "Jenipapo de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Jequeri"
    },
    {
        "estadoId": 13,
        "Nome": "Jequitaí"
    },
    {
        "estadoId": 13,
        "Nome": "Jequitibá"
    },
    {
        "estadoId": 13,
        "Nome": "Jequitinhonha"
    },
    {
        "estadoId": 13,
        "Nome": "Jesuânia"
    },
    {
        "estadoId": 13,
        "Nome": "Joaíma"
    },
    {
        "estadoId": 13,
        "Nome": "Joanésia"
    },
    {
        "estadoId": 13,
        "Nome": "João Monlevade"
    },
    {
        "estadoId": 13,
        "Nome": "João Pinheiro"
    },
    {
        "estadoId": 13,
        "Nome": "Joaquim Felício"
    },
    {
        "estadoId": 13,
        "Nome": "Jordânia"
    },
    {
        "estadoId": 13,
        "Nome": "José Gonçalves de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "José Raydan"
    },
    {
        "estadoId": 13,
        "Nome": "Josenópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Nova União"
    },
    {
        "estadoId": 13,
        "Nome": "Juatuba"
    },
    {
        "estadoId": 13,
        "Nome": "Juiz de Fora"
    },
    {
        "estadoId": 13,
        "Nome": "Juramento"
    },
    {
        "estadoId": 13,
        "Nome": "Juruaia"
    },
    {
        "estadoId": 13,
        "Nome": "Juvenília"
    },
    {
        "estadoId": 13,
        "Nome": "Ladainha"
    },
    {
        "estadoId": 13,
        "Nome": "Lagamar"
    },
    {
        "estadoId": 13,
        "Nome": "Lagoa da Prata"
    },
    {
        "estadoId": 13,
        "Nome": "Lagoa dos Patos"
    },
    {
        "estadoId": 13,
        "Nome": "Lagoa Dourada"
    },
    {
        "estadoId": 13,
        "Nome": "Lagoa Formosa"
    },
    {
        "estadoId": 13,
        "Nome": "Lagoa Grande"
    },
    {
        "estadoId": 13,
        "Nome": "Lagoa Santa"
    },
    {
        "estadoId": 13,
        "Nome": "Lajinha"
    },
    {
        "estadoId": 13,
        "Nome": "Lambari"
    },
    {
        "estadoId": 13,
        "Nome": "Lamim"
    },
    {
        "estadoId": 13,
        "Nome": "Laranjal"
    },
    {
        "estadoId": 13,
        "Nome": "Lassance"
    },
    {
        "estadoId": 13,
        "Nome": "Lavras"
    },
    {
        "estadoId": 13,
        "Nome": "Leandro Ferreira"
    },
    {
        "estadoId": 13,
        "Nome": "Leme do Prado"
    },
    {
        "estadoId": 13,
        "Nome": "Leopoldina"
    },
    {
        "estadoId": 13,
        "Nome": "Liberdade"
    },
    {
        "estadoId": 13,
        "Nome": "Lima Duarte"
    },
    {
        "estadoId": 13,
        "Nome": "Limeira do Oeste"
    },
    {
        "estadoId": 13,
        "Nome": "Lontra"
    },
    {
        "estadoId": 13,
        "Nome": "Luisburgo"
    },
    {
        "estadoId": 13,
        "Nome": "Luislândia"
    },
    {
        "estadoId": 13,
        "Nome": "Luminárias"
    },
    {
        "estadoId": 13,
        "Nome": "Luz"
    },
    {
        "estadoId": 13,
        "Nome": "Machacalis"
    },
    {
        "estadoId": 13,
        "Nome": "Machado"
    },
    {
        "estadoId": 13,
        "Nome": "Madre de Deus de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Malacacheta"
    },
    {
        "estadoId": 13,
        "Nome": "Mamonas"
    },
    {
        "estadoId": 13,
        "Nome": "Manga"
    },
    {
        "estadoId": 13,
        "Nome": "Manhuaçu"
    },
    {
        "estadoId": 13,
        "Nome": "Manhumirim"
    },
    {
        "estadoId": 13,
        "Nome": "Mantena"
    },
    {
        "estadoId": 13,
        "Nome": "Maravilhas"
    },
    {
        "estadoId": 13,
        "Nome": "Mar de Espanha"
    },
    {
        "estadoId": 13,
        "Nome": "Maria da Fé"
    },
    {
        "estadoId": 13,
        "Nome": "Mariana"
    },
    {
        "estadoId": 13,
        "Nome": "Marilac"
    },
    {
        "estadoId": 13,
        "Nome": "Mário Campos"
    },
    {
        "estadoId": 13,
        "Nome": "Maripá de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Marliéria"
    },
    {
        "estadoId": 13,
        "Nome": "Marmelópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Martinho Campos"
    },
    {
        "estadoId": 13,
        "Nome": "Martins Soares"
    },
    {
        "estadoId": 13,
        "Nome": "Mata Verde"
    },
    {
        "estadoId": 13,
        "Nome": "Materlândia"
    },
    {
        "estadoId": 13,
        "Nome": "Mateus Leme"
    },
    {
        "estadoId": 13,
        "Nome": "Matias Barbosa"
    },
    {
        "estadoId": 13,
        "Nome": "Matias Cardoso"
    },
    {
        "estadoId": 13,
        "Nome": "Matipó"
    },
    {
        "estadoId": 13,
        "Nome": "Mato Verde"
    },
    {
        "estadoId": 13,
        "Nome": "Matozinhos"
    },
    {
        "estadoId": 13,
        "Nome": "Matutina"
    },
    {
        "estadoId": 13,
        "Nome": "Medeiros"
    },
    {
        "estadoId": 13,
        "Nome": "Medina"
    },
    {
        "estadoId": 13,
        "Nome": "Mendes Pimentel"
    },
    {
        "estadoId": 13,
        "Nome": "Mercês"
    },
    {
        "estadoId": 13,
        "Nome": "Mesquita"
    },
    {
        "estadoId": 13,
        "Nome": "Minas Novas"
    },
    {
        "estadoId": 13,
        "Nome": "Minduri"
    },
    {
        "estadoId": 13,
        "Nome": "Mirabela"
    },
    {
        "estadoId": 13,
        "Nome": "Miradouro"
    },
    {
        "estadoId": 13,
        "Nome": "Miraí"
    },
    {
        "estadoId": 13,
        "Nome": "Miravânia"
    },
    {
        "estadoId": 13,
        "Nome": "Moeda"
    },
    {
        "estadoId": 13,
        "Nome": "Moema"
    },
    {
        "estadoId": 13,
        "Nome": "Monjolos"
    },
    {
        "estadoId": 13,
        "Nome": "Monsenhor Paulo"
    },
    {
        "estadoId": 13,
        "Nome": "Montalvânia"
    },
    {
        "estadoId": 13,
        "Nome": "Monte Alegre de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Monte Azul"
    },
    {
        "estadoId": 13,
        "Nome": "Monte Belo"
    },
    {
        "estadoId": 13,
        "Nome": "Monte Carmelo"
    },
    {
        "estadoId": 13,
        "Nome": "Monte Formoso"
    },
    {
        "estadoId": 13,
        "Nome": "Monte Santo de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Montes Claros"
    },
    {
        "estadoId": 13,
        "Nome": "Monte Sião"
    },
    {
        "estadoId": 13,
        "Nome": "Montezuma"
    },
    {
        "estadoId": 13,
        "Nome": "Morada Nova de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Morro da Garça"
    },
    {
        "estadoId": 13,
        "Nome": "Morro do Pilar"
    },
    {
        "estadoId": 13,
        "Nome": "Munhoz"
    },
    {
        "estadoId": 13,
        "Nome": "Muriaé"
    },
    {
        "estadoId": 13,
        "Nome": "Mutum"
    },
    {
        "estadoId": 13,
        "Nome": "Muzambinho"
    },
    {
        "estadoId": 13,
        "Nome": "Nacip Raydan"
    },
    {
        "estadoId": 13,
        "Nome": "Nanuque"
    },
    {
        "estadoId": 13,
        "Nome": "Naque"
    },
    {
        "estadoId": 13,
        "Nome": "Natalândia"
    },
    {
        "estadoId": 13,
        "Nome": "Natércia"
    },
    {
        "estadoId": 13,
        "Nome": "Nazareno"
    },
    {
        "estadoId": 13,
        "Nome": "Nepomuceno"
    },
    {
        "estadoId": 13,
        "Nome": "Ninheira"
    },
    {
        "estadoId": 13,
        "Nome": "Nova Belém"
    },
    {
        "estadoId": 13,
        "Nome": "Nova Era"
    },
    {
        "estadoId": 13,
        "Nome": "Nova Lima"
    },
    {
        "estadoId": 13,
        "Nome": "Nova Módica"
    },
    {
        "estadoId": 13,
        "Nome": "Nova Ponte"
    },
    {
        "estadoId": 13,
        "Nome": "Nova Porteirinha"
    },
    {
        "estadoId": 13,
        "Nome": "Nova Resende"
    },
    {
        "estadoId": 13,
        "Nome": "Nova Serrana"
    },
    {
        "estadoId": 13,
        "Nome": "Novo Cruzeiro"
    },
    {
        "estadoId": 13,
        "Nome": "Novo Oriente de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Novorizonte"
    },
    {
        "estadoId": 13,
        "Nome": "Olaria"
    },
    {
        "estadoId": 13,
        "Nome": "Olhos-d'Água"
    },
    {
        "estadoId": 13,
        "Nome": "Olímpio Noronha"
    },
    {
        "estadoId": 13,
        "Nome": "Oliveira"
    },
    {
        "estadoId": 13,
        "Nome": "Oliveira Fortes"
    },
    {
        "estadoId": 13,
        "Nome": "Onça de Pitangui"
    },
    {
        "estadoId": 13,
        "Nome": "Oratórios"
    },
    {
        "estadoId": 13,
        "Nome": "Orizânia"
    },
    {
        "estadoId": 13,
        "Nome": "Ouro Branco"
    },
    {
        "estadoId": 13,
        "Nome": "Ouro Fino"
    },
    {
        "estadoId": 13,
        "Nome": "Ouro Preto"
    },
    {
        "estadoId": 13,
        "Nome": "Ouro Verde de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Padre Carvalho"
    },
    {
        "estadoId": 13,
        "Nome": "Padre Paraíso"
    },
    {
        "estadoId": 13,
        "Nome": "Paineiras"
    },
    {
        "estadoId": 13,
        "Nome": "Pains"
    },
    {
        "estadoId": 13,
        "Nome": "Pai Pedro"
    },
    {
        "estadoId": 13,
        "Nome": "Paiva"
    },
    {
        "estadoId": 13,
        "Nome": "Palma"
    },
    {
        "estadoId": 13,
        "Nome": "Palmópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Papagaios"
    },
    {
        "estadoId": 13,
        "Nome": "Paracatu"
    },
    {
        "estadoId": 13,
        "Nome": "Pará de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Paraguaçu"
    },
    {
        "estadoId": 13,
        "Nome": "Paraisópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Paraopeba"
    },
    {
        "estadoId": 13,
        "Nome": "Passabém"
    },
    {
        "estadoId": 13,
        "Nome": "Passa Quatro"
    },
    {
        "estadoId": 13,
        "Nome": "Passa Tempo"
    },
    {
        "estadoId": 13,
        "Nome": "Passa Vinte"
    },
    {
        "estadoId": 13,
        "Nome": "Passos"
    },
    {
        "estadoId": 13,
        "Nome": "Patis"
    },
    {
        "estadoId": 13,
        "Nome": "Patos de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Patrocínio"
    },
    {
        "estadoId": 13,
        "Nome": "Patrocínio do Muriaé"
    },
    {
        "estadoId": 13,
        "Nome": "Paula Cândido"
    },
    {
        "estadoId": 13,
        "Nome": "Paulistas"
    },
    {
        "estadoId": 13,
        "Nome": "Pavão"
    },
    {
        "estadoId": 13,
        "Nome": "Peçanha"
    },
    {
        "estadoId": 13,
        "Nome": "Pedra Azul"
    },
    {
        "estadoId": 13,
        "Nome": "Pedra Bonita"
    },
    {
        "estadoId": 13,
        "Nome": "Pedra do Anta"
    },
    {
        "estadoId": 13,
        "Nome": "Pedra do Indaiá"
    },
    {
        "estadoId": 13,
        "Nome": "Pedra Dourada"
    },
    {
        "estadoId": 13,
        "Nome": "Pedralva"
    },
    {
        "estadoId": 13,
        "Nome": "Pedras de Maria da Cruz"
    },
    {
        "estadoId": 13,
        "Nome": "Pedrinópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Pedro Leopoldo"
    },
    {
        "estadoId": 13,
        "Nome": "Pedro Teixeira"
    },
    {
        "estadoId": 13,
        "Nome": "Pequeri"
    },
    {
        "estadoId": 13,
        "Nome": "Pequi"
    },
    {
        "estadoId": 13,
        "Nome": "Perdigão"
    },
    {
        "estadoId": 13,
        "Nome": "Perdizes"
    },
    {
        "estadoId": 13,
        "Nome": "Perdões"
    },
    {
        "estadoId": 13,
        "Nome": "Periquito"
    },
    {
        "estadoId": 13,
        "Nome": "Pescador"
    },
    {
        "estadoId": 13,
        "Nome": "Piau"
    },
    {
        "estadoId": 13,
        "Nome": "Piedade de Caratinga"
    },
    {
        "estadoId": 13,
        "Nome": "Piedade de Ponte Nova"
    },
    {
        "estadoId": 13,
        "Nome": "Piedade do Rio Grande"
    },
    {
        "estadoId": 13,
        "Nome": "Piedade dos Gerais"
    },
    {
        "estadoId": 13,
        "Nome": "Pimenta"
    },
    {
        "estadoId": 13,
        "Nome": "Pingo d'Água"
    },
    {
        "estadoId": 13,
        "Nome": "Pintópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Piracema"
    },
    {
        "estadoId": 13,
        "Nome": "Pirajuba"
    },
    {
        "estadoId": 13,
        "Nome": "Piranga"
    },
    {
        "estadoId": 13,
        "Nome": "Piranguçu"
    },
    {
        "estadoId": 13,
        "Nome": "Piranguinho"
    },
    {
        "estadoId": 13,
        "Nome": "Pirapetinga"
    },
    {
        "estadoId": 13,
        "Nome": "Pirapora"
    },
    {
        "estadoId": 13,
        "Nome": "Piraúba"
    },
    {
        "estadoId": 13,
        "Nome": "Pitangui"
    },
    {
        "estadoId": 13,
        "Nome": "Piumhi"
    },
    {
        "estadoId": 13,
        "Nome": "Planura"
    },
    {
        "estadoId": 13,
        "Nome": "Poço Fundo"
    },
    {
        "estadoId": 13,
        "Nome": "Poços de Caldas"
    },
    {
        "estadoId": 13,
        "Nome": "Pocrane"
    },
    {
        "estadoId": 13,
        "Nome": "Pompéu"
    },
    {
        "estadoId": 13,
        "Nome": "Ponte Nova"
    },
    {
        "estadoId": 13,
        "Nome": "Ponto Chique"
    },
    {
        "estadoId": 13,
        "Nome": "Ponto dos Volantes"
    },
    {
        "estadoId": 13,
        "Nome": "Porteirinha"
    },
    {
        "estadoId": 13,
        "Nome": "Porto Firme"
    },
    {
        "estadoId": 13,
        "Nome": "Poté"
    },
    {
        "estadoId": 13,
        "Nome": "Pouso Alegre"
    },
    {
        "estadoId": 13,
        "Nome": "Pouso Alto"
    },
    {
        "estadoId": 13,
        "Nome": "Prados"
    },
    {
        "estadoId": 13,
        "Nome": "Prata"
    },
    {
        "estadoId": 13,
        "Nome": "Pratápolis"
    },
    {
        "estadoId": 13,
        "Nome": "Pratinha"
    },
    {
        "estadoId": 13,
        "Nome": "Presidente Bernardes"
    },
    {
        "estadoId": 13,
        "Nome": "Presidente Juscelino"
    },
    {
        "estadoId": 13,
        "Nome": "Presidente Kubitschek"
    },
    {
        "estadoId": 13,
        "Nome": "Presidente Olegário"
    },
    {
        "estadoId": 13,
        "Nome": "Alto Jequitibá"
    },
    {
        "estadoId": 13,
        "Nome": "Prudente de Morais"
    },
    {
        "estadoId": 13,
        "Nome": "Quartel Geral"
    },
    {
        "estadoId": 13,
        "Nome": "Queluzito"
    },
    {
        "estadoId": 13,
        "Nome": "Raposos"
    },
    {
        "estadoId": 13,
        "Nome": "Raul Soares"
    },
    {
        "estadoId": 13,
        "Nome": "Recreio"
    },
    {
        "estadoId": 13,
        "Nome": "Reduto"
    },
    {
        "estadoId": 13,
        "Nome": "Resende Costa"
    },
    {
        "estadoId": 13,
        "Nome": "Resplendor"
    },
    {
        "estadoId": 13,
        "Nome": "Ressaquinha"
    },
    {
        "estadoId": 13,
        "Nome": "Riachinho"
    },
    {
        "estadoId": 13,
        "Nome": "Riacho dos Machados"
    },
    {
        "estadoId": 13,
        "Nome": "Ribeirão das Neves"
    },
    {
        "estadoId": 13,
        "Nome": "Ribeirão Vermelho"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Acima"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Casca"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Doce"
    },
    {
        "estadoId": 13,
        "Nome": "Rio do Prado"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Espera"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Manso"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Novo"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Paranaíba"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Pardo de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Piracicaba"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Pomba"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Preto"
    },
    {
        "estadoId": 13,
        "Nome": "Rio Vermelho"
    },
    {
        "estadoId": 13,
        "Nome": "Ritápolis"
    },
    {
        "estadoId": 13,
        "Nome": "Rochedo de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Rodeiro"
    },
    {
        "estadoId": 13,
        "Nome": "Romaria"
    },
    {
        "estadoId": 13,
        "Nome": "Rosário da Limeira"
    },
    {
        "estadoId": 13,
        "Nome": "Rubelita"
    },
    {
        "estadoId": 13,
        "Nome": "Rubim"
    },
    {
        "estadoId": 13,
        "Nome": "Sabará"
    },
    {
        "estadoId": 13,
        "Nome": "Sabinópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Sacramento"
    },
    {
        "estadoId": 13,
        "Nome": "Salinas"
    },
    {
        "estadoId": 13,
        "Nome": "Salto da Divisa"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Bárbara"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Bárbara do Leste"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Bárbara do Monte Verde"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Bárbara do Tugúrio"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Cruz de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Cruz de Salinas"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Cruz do Escalvado"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Efigênia de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Fé de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Helena de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Juliana"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Luzia"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Margarida"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Maria de Itabira"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Maria do Salto"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Maria do Suaçuí"
    },
    {
        "estadoId": 13,
        "Nome": "Santana da Vargem"
    },
    {
        "estadoId": 13,
        "Nome": "Santana de Cataguases"
    },
    {
        "estadoId": 13,
        "Nome": "Santana de Pirapama"
    },
    {
        "estadoId": 13,
        "Nome": "Santana do Deserto"
    },
    {
        "estadoId": 13,
        "Nome": "Santana do Garambéu"
    },
    {
        "estadoId": 13,
        "Nome": "Santana do Jacaré"
    },
    {
        "estadoId": 13,
        "Nome": "Santana do Manhuaçu"
    },
    {
        "estadoId": 13,
        "Nome": "Santana do Paraíso"
    },
    {
        "estadoId": 13,
        "Nome": "Santana do Riacho"
    },
    {
        "estadoId": 13,
        "Nome": "Santana dos Montes"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Rita de Caldas"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Rita de Jacutinga"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Rita de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Rita de Ibitipoca"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Rita do Itueto"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Rita do Sapucaí"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Rosa da Serra"
    },
    {
        "estadoId": 13,
        "Nome": "Santa Vitória"
    },
    {
        "estadoId": 13,
        "Nome": "Santo Antônio do Amparo"
    },
    {
        "estadoId": 13,
        "Nome": "Santo Antônio do Aventureiro"
    },
    {
        "estadoId": 13,
        "Nome": "Santo Antônio do Grama"
    },
    {
        "estadoId": 13,
        "Nome": "Santo Antônio do Itambé"
    },
    {
        "estadoId": 13,
        "Nome": "Santo Antônio do Jacinto"
    },
    {
        "estadoId": 13,
        "Nome": "Santo Antônio do Monte"
    },
    {
        "estadoId": 13,
        "Nome": "Santo Antônio do Retiro"
    },
    {
        "estadoId": 13,
        "Nome": "Santo Antônio do Rio Abaixo"
    },
    {
        "estadoId": 13,
        "Nome": "Santo Hipólito"
    },
    {
        "estadoId": 13,
        "Nome": "Santos Dumont"
    },
    {
        "estadoId": 13,
        "Nome": "São Bento Abade"
    },
    {
        "estadoId": 13,
        "Nome": "São Brás do Suaçuí"
    },
    {
        "estadoId": 13,
        "Nome": "São Domingos das Dores"
    },
    {
        "estadoId": 13,
        "Nome": "São Domingos do Prata"
    },
    {
        "estadoId": 13,
        "Nome": "São Félix de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "São Francisco"
    },
    {
        "estadoId": 13,
        "Nome": "São Francisco de Paula"
    },
    {
        "estadoId": 13,
        "Nome": "São Francisco de Sales"
    },
    {
        "estadoId": 13,
        "Nome": "São Francisco do Glória"
    },
    {
        "estadoId": 13,
        "Nome": "São Geraldo"
    },
    {
        "estadoId": 13,
        "Nome": "São Geraldo da Piedade"
    },
    {
        "estadoId": 13,
        "Nome": "São Geraldo do Baixio"
    },
    {
        "estadoId": 13,
        "Nome": "São Gonçalo do Abaeté"
    },
    {
        "estadoId": 13,
        "Nome": "São Gonçalo do Pará"
    },
    {
        "estadoId": 13,
        "Nome": "São Gonçalo do Rio Abaixo"
    },
    {
        "estadoId": 13,
        "Nome": "São Gonçalo do Sapucaí"
    },
    {
        "estadoId": 13,
        "Nome": "São Gotardo"
    },
    {
        "estadoId": 13,
        "Nome": "São João Batista do Glória"
    },
    {
        "estadoId": 13,
        "Nome": "São João da Lagoa"
    },
    {
        "estadoId": 13,
        "Nome": "São João da Mata"
    },
    {
        "estadoId": 13,
        "Nome": "São João da Ponte"
    },
    {
        "estadoId": 13,
        "Nome": "São João das Missões"
    },
    {
        "estadoId": 13,
        "Nome": "São João del Rei"
    },
    {
        "estadoId": 13,
        "Nome": "São João do Manhuaçu"
    },
    {
        "estadoId": 13,
        "Nome": "São João do Manteninha"
    },
    {
        "estadoId": 13,
        "Nome": "São João do Oriente"
    },
    {
        "estadoId": 13,
        "Nome": "São João do Pacuí"
    },
    {
        "estadoId": 13,
        "Nome": "São João do Paraíso"
    },
    {
        "estadoId": 13,
        "Nome": "São João Evangelista"
    },
    {
        "estadoId": 13,
        "Nome": "São João Nepomuceno"
    },
    {
        "estadoId": 13,
        "Nome": "São Joaquim de Bicas"
    },
    {
        "estadoId": 13,
        "Nome": "São José da Barra"
    },
    {
        "estadoId": 13,
        "Nome": "São José da Lapa"
    },
    {
        "estadoId": 13,
        "Nome": "São José da Safira"
    },
    {
        "estadoId": 13,
        "Nome": "São José da Varginha"
    },
    {
        "estadoId": 13,
        "Nome": "São José do Alegre"
    },
    {
        "estadoId": 13,
        "Nome": "São José do Divino"
    },
    {
        "estadoId": 13,
        "Nome": "São José do Goiabal"
    },
    {
        "estadoId": 13,
        "Nome": "São José do Jacuri"
    },
    {
        "estadoId": 13,
        "Nome": "São José do Mantimento"
    },
    {
        "estadoId": 13,
        "Nome": "São Lourenço"
    },
    {
        "estadoId": 13,
        "Nome": "São Miguel do Anta"
    },
    {
        "estadoId": 13,
        "Nome": "São Pedro da União"
    },
    {
        "estadoId": 13,
        "Nome": "São Pedro dos Ferros"
    },
    {
        "estadoId": 13,
        "Nome": "São Pedro do Suaçuí"
    },
    {
        "estadoId": 13,
        "Nome": "São Romão"
    },
    {
        "estadoId": 13,
        "Nome": "São Roque de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "São Sebastião da Bela Vista"
    },
    {
        "estadoId": 13,
        "Nome": "São Sebastião da Vargem Alegre"
    },
    {
        "estadoId": 13,
        "Nome": "São Sebastião do Anta"
    },
    {
        "estadoId": 13,
        "Nome": "São Sebastião do Maranhão"
    },
    {
        "estadoId": 13,
        "Nome": "São Sebastião do Oeste"
    },
    {
        "estadoId": 13,
        "Nome": "São Sebastião do Paraíso"
    },
    {
        "estadoId": 13,
        "Nome": "São Sebastião do Rio Preto"
    },
    {
        "estadoId": 13,
        "Nome": "São Sebastião do Rio Verde"
    },
    {
        "estadoId": 13,
        "Nome": "São Tiago"
    },
    {
        "estadoId": 13,
        "Nome": "São Tomás de Aquino"
    },
    {
        "estadoId": 13,
        "Nome": "São Thomé das Letras"
    },
    {
        "estadoId": 13,
        "Nome": "São Vicente de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Sapucaí-Mirim"
    },
    {
        "estadoId": 13,
        "Nome": "Sardoá"
    },
    {
        "estadoId": 13,
        "Nome": "Sarzedo"
    },
    {
        "estadoId": 13,
        "Nome": "Setubinha"
    },
    {
        "estadoId": 13,
        "Nome": "Sem-Peixe"
    },
    {
        "estadoId": 13,
        "Nome": "Senador Amaral"
    },
    {
        "estadoId": 13,
        "Nome": "Senador Cortes"
    },
    {
        "estadoId": 13,
        "Nome": "Senador Firmino"
    },
    {
        "estadoId": 13,
        "Nome": "Senador José Bento"
    },
    {
        "estadoId": 13,
        "Nome": "Senador Modestino Gonçalves"
    },
    {
        "estadoId": 13,
        "Nome": "Senhora de Oliveira"
    },
    {
        "estadoId": 13,
        "Nome": "Senhora do Porto"
    },
    {
        "estadoId": 13,
        "Nome": "Senhora dos Remédios"
    },
    {
        "estadoId": 13,
        "Nome": "Sericita"
    },
    {
        "estadoId": 13,
        "Nome": "Seritinga"
    },
    {
        "estadoId": 13,
        "Nome": "Serra Azul de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Serra da Saudade"
    },
    {
        "estadoId": 13,
        "Nome": "Serra dos Aimorés"
    },
    {
        "estadoId": 13,
        "Nome": "Serra do Salitre"
    },
    {
        "estadoId": 13,
        "Nome": "Serrania"
    },
    {
        "estadoId": 13,
        "Nome": "Serranópolis de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Serranos"
    },
    {
        "estadoId": 13,
        "Nome": "Serro"
    },
    {
        "estadoId": 13,
        "Nome": "Sete Lagoas"
    },
    {
        "estadoId": 13,
        "Nome": "Silveirânia"
    },
    {
        "estadoId": 13,
        "Nome": "Silvianópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Simão Pereira"
    },
    {
        "estadoId": 13,
        "Nome": "Simonésia"
    },
    {
        "estadoId": 13,
        "Nome": "Sobrália"
    },
    {
        "estadoId": 13,
        "Nome": "Soledade de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Tabuleiro"
    },
    {
        "estadoId": 13,
        "Nome": "Taiobeiras"
    },
    {
        "estadoId": 13,
        "Nome": "Taparuba"
    },
    {
        "estadoId": 13,
        "Nome": "Tapira"
    },
    {
        "estadoId": 13,
        "Nome": "Tapiraí"
    },
    {
        "estadoId": 13,
        "Nome": "Taquaraçu de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Tarumirim"
    },
    {
        "estadoId": 13,
        "Nome": "Teixeiras"
    },
    {
        "estadoId": 13,
        "Nome": "Teófilo Otoni"
    },
    {
        "estadoId": 13,
        "Nome": "Timóteo"
    },
    {
        "estadoId": 13,
        "Nome": "Tiradentes"
    },
    {
        "estadoId": 13,
        "Nome": "Tiros"
    },
    {
        "estadoId": 13,
        "Nome": "Tocantins"
    },
    {
        "estadoId": 13,
        "Nome": "Tocos do Moji"
    },
    {
        "estadoId": 13,
        "Nome": "Toledo"
    },
    {
        "estadoId": 13,
        "Nome": "Tombos"
    },
    {
        "estadoId": 13,
        "Nome": "Três Corações"
    },
    {
        "estadoId": 13,
        "Nome": "Três Marias"
    },
    {
        "estadoId": 13,
        "Nome": "Três Pontas"
    },
    {
        "estadoId": 13,
        "Nome": "Tumiritinga"
    },
    {
        "estadoId": 13,
        "Nome": "Tupaciguara"
    },
    {
        "estadoId": 13,
        "Nome": "Turmalina"
    },
    {
        "estadoId": 13,
        "Nome": "Turvolândia"
    },
    {
        "estadoId": 13,
        "Nome": "Ubá"
    },
    {
        "estadoId": 13,
        "Nome": "Ubaí"
    },
    {
        "estadoId": 13,
        "Nome": "Ubaporanga"
    },
    {
        "estadoId": 13,
        "Nome": "Uberaba"
    },
    {
        "estadoId": 13,
        "Nome": "Uberlândia"
    },
    {
        "estadoId": 13,
        "Nome": "Umburatiba"
    },
    {
        "estadoId": 13,
        "Nome": "Unaí"
    },
    {
        "estadoId": 13,
        "Nome": "União de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Uruana de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Urucânia"
    },
    {
        "estadoId": 13,
        "Nome": "Urucuia"
    },
    {
        "estadoId": 13,
        "Nome": "Vargem Alegre"
    },
    {
        "estadoId": 13,
        "Nome": "Vargem Bonita"
    },
    {
        "estadoId": 13,
        "Nome": "Vargem Grande do Rio Pardo"
    },
    {
        "estadoId": 13,
        "Nome": "Varginha"
    },
    {
        "estadoId": 13,
        "Nome": "Varjão de Minas"
    },
    {
        "estadoId": 13,
        "Nome": "Várzea da Palma"
    },
    {
        "estadoId": 13,
        "Nome": "Varzelândia"
    },
    {
        "estadoId": 13,
        "Nome": "Vazante"
    },
    {
        "estadoId": 13,
        "Nome": "Verdelândia"
    },
    {
        "estadoId": 13,
        "Nome": "Veredinha"
    },
    {
        "estadoId": 13,
        "Nome": "Veríssimo"
    },
    {
        "estadoId": 13,
        "Nome": "Vermelho Novo"
    },
    {
        "estadoId": 13,
        "Nome": "Vespasiano"
    },
    {
        "estadoId": 13,
        "Nome": "Viçosa"
    },
    {
        "estadoId": 13,
        "Nome": "Vieiras"
    },
    {
        "estadoId": 13,
        "Nome": "Mathias Lobato"
    },
    {
        "estadoId": 13,
        "Nome": "Virgem da Lapa"
    },
    {
        "estadoId": 13,
        "Nome": "Virgínia"
    },
    {
        "estadoId": 13,
        "Nome": "Virginópolis"
    },
    {
        "estadoId": 13,
        "Nome": "Virgolândia"
    },
    {
        "estadoId": 13,
        "Nome": "Visconde do Rio Branco"
    },
    {
        "estadoId": 13,
        "Nome": "Volta Grande"
    },
    {
        "estadoId": 13,
        "Nome": "Wenceslau Braz"
    },
    {
        "estadoId": 8,
        "Nome": "Afonso Cláudio"
    },
    {
        "estadoId": 8,
        "Nome": "Águia Branca"
    },
    {
        "estadoId": 8,
        "Nome": "Água Doce do Norte"
    },
    {
        "estadoId": 8,
        "Nome": "Alegre"
    },
    {
        "estadoId": 8,
        "Nome": "Alfredo Chaves"
    },
    {
        "estadoId": 8,
        "Nome": "Alto Rio Novo"
    },
    {
        "estadoId": 8,
        "Nome": "Anchieta"
    },
    {
        "estadoId": 8,
        "Nome": "Apiacá"
    },
    {
        "estadoId": 8,
        "Nome": "Aracruz"
    },
    {
        "estadoId": 8,
        "Nome": "Atílio Vivácqua"
    },
    {
        "estadoId": 8,
        "Nome": "Baixo Guandu"
    },
    {
        "estadoId": 8,
        "Nome": "Barra de São Francisco"
    },
    {
        "estadoId": 8,
        "Nome": "Boa Esperança"
    },
    {
        "estadoId": 8,
        "Nome": "Bom Jesus do Norte"
    },
    {
        "estadoId": 8,
        "Nome": "Brejetuba"
    },
    {
        "estadoId": 8,
        "Nome": "Cachoeiro de Itapemirim"
    },
    {
        "estadoId": 8,
        "Nome": "Cariacica"
    },
    {
        "estadoId": 8,
        "Nome": "Castelo"
    },
    {
        "estadoId": 8,
        "Nome": "Colatina"
    },
    {
        "estadoId": 8,
        "Nome": "Conceição da Barra"
    },
    {
        "estadoId": 8,
        "Nome": "Conceição do Castelo"
    },
    {
        "estadoId": 8,
        "Nome": "Divino de São Lourenço"
    },
    {
        "estadoId": 8,
        "Nome": "Domingos Martins"
    },
    {
        "estadoId": 8,
        "Nome": "Dores do Rio Preto"
    },
    {
        "estadoId": 8,
        "Nome": "Ecoporanga"
    },
    {
        "estadoId": 8,
        "Nome": "Fundão"
    },
    {
        "estadoId": 8,
        "Nome": "Governador Lindenberg"
    },
    {
        "estadoId": 8,
        "Nome": "Guaçuí"
    },
    {
        "estadoId": 8,
        "Nome": "Guarapari"
    },
    {
        "estadoId": 8,
        "Nome": "Ibatiba"
    },
    {
        "estadoId": 8,
        "Nome": "Ibiraçu"
    },
    {
        "estadoId": 8,
        "Nome": "Ibitirama"
    },
    {
        "estadoId": 8,
        "Nome": "Iconha"
    },
    {
        "estadoId": 8,
        "Nome": "Irupi"
    },
    {
        "estadoId": 8,
        "Nome": "Itaguaçu"
    },
    {
        "estadoId": 8,
        "Nome": "Itapemirim"
    },
    {
        "estadoId": 8,
        "Nome": "Itarana"
    },
    {
        "estadoId": 8,
        "Nome": "Iúna"
    },
    {
        "estadoId": 8,
        "Nome": "Jaguaré"
    },
    {
        "estadoId": 8,
        "Nome": "Jerônimo Monteiro"
    },
    {
        "estadoId": 8,
        "Nome": "João Neiva"
    },
    {
        "estadoId": 8,
        "Nome": "Laranja da Terra"
    },
    {
        "estadoId": 8,
        "Nome": "Linhares"
    },
    {
        "estadoId": 8,
        "Nome": "Mantenópolis"
    },
    {
        "estadoId": 8,
        "Nome": "Marataízes"
    },
    {
        "estadoId": 8,
        "Nome": "Marechal Floriano"
    },
    {
        "estadoId": 8,
        "Nome": "Marilândia"
    },
    {
        "estadoId": 8,
        "Nome": "Mimoso do Sul"
    },
    {
        "estadoId": 8,
        "Nome": "Montanha"
    },
    {
        "estadoId": 8,
        "Nome": "Mucurici"
    },
    {
        "estadoId": 8,
        "Nome": "Muniz Freire"
    },
    {
        "estadoId": 8,
        "Nome": "Muqui"
    },
    {
        "estadoId": 8,
        "Nome": "Nova Venécia"
    },
    {
        "estadoId": 8,
        "Nome": "Pancas"
    },
    {
        "estadoId": 8,
        "Nome": "Pedro Canário"
    },
    {
        "estadoId": 8,
        "Nome": "Pinheiros"
    },
    {
        "estadoId": 8,
        "Nome": "Piúma"
    },
    {
        "estadoId": 8,
        "Nome": "Ponto Belo"
    },
    {
        "estadoId": 8,
        "Nome": "Presidente Kennedy"
    },
    {
        "estadoId": 8,
        "Nome": "Rio Bananal"
    },
    {
        "estadoId": 8,
        "Nome": "Rio Novo do Sul"
    },
    {
        "estadoId": 8,
        "Nome": "Santa Leopoldina"
    },
    {
        "estadoId": 8,
        "Nome": "Santa Maria de Jetibá"
    },
    {
        "estadoId": 8,
        "Nome": "Santa Teresa"
    },
    {
        "estadoId": 8,
        "Nome": "São Domingos do Norte"
    },
    {
        "estadoId": 8,
        "Nome": "São Gabriel da Palha"
    },
    {
        "estadoId": 8,
        "Nome": "São José do Calçado"
    },
    {
        "estadoId": 8,
        "Nome": "São Mateus"
    },
    {
        "estadoId": 8,
        "Nome": "São Roque do Canaã"
    },
    {
        "estadoId": 8,
        "Nome": "Serra"
    },
    {
        "estadoId": 8,
        "Nome": "Sooretama"
    },
    {
        "estadoId": 8,
        "Nome": "Vargem Alta"
    },
    {
        "estadoId": 8,
        "Nome": "Venda Nova do Imigrante"
    },
    {
        "estadoId": 8,
        "Nome": "Viana"
    },
    {
        "estadoId": 8,
        "Nome": "Vila Pavão"
    },
    {
        "estadoId": 8,
        "Nome": "Vila Valério"
    },
    {
        "estadoId": 8,
        "Nome": "Vila Velha"
    },
    {
        "estadoId": 8,
        "Nome": "Vitória"
    },
    {
        "estadoId": 19,
        "Nome": "Angra dos Reis"
    },
    {
        "estadoId": 19,
        "Nome": "Aperibé"
    },
    {
        "estadoId": 19,
        "Nome": "Araruama"
    },
    {
        "estadoId": 19,
        "Nome": "Areal"
    },
    {
        "estadoId": 19,
        "Nome": "Armação dos Búzios"
    },
    {
        "estadoId": 19,
        "Nome": "Arraial do Cabo"
    },
    {
        "estadoId": 19,
        "Nome": "Barra do Piraí"
    },
    {
        "estadoId": 19,
        "Nome": "Barra Mansa"
    },
    {
        "estadoId": 19,
        "Nome": "Belford Roxo"
    },
    {
        "estadoId": 19,
        "Nome": "Bom Jardim"
    },
    {
        "estadoId": 19,
        "Nome": "Bom Jesus do Itabapoana"
    },
    {
        "estadoId": 19,
        "Nome": "Cabo Frio"
    },
    {
        "estadoId": 19,
        "Nome": "Cachoeiras de Macacu"
    },
    {
        "estadoId": 19,
        "Nome": "Cambuci"
    },
    {
        "estadoId": 19,
        "Nome": "Carapebus"
    },
    {
        "estadoId": 19,
        "Nome": "Comendador Levy Gasparian"
    },
    {
        "estadoId": 19,
        "Nome": "Campos dos Goytacazes"
    },
    {
        "estadoId": 19,
        "Nome": "Cantagalo"
    },
    {
        "estadoId": 19,
        "Nome": "Cardoso Moreira"
    },
    {
        "estadoId": 19,
        "Nome": "Carmo"
    },
    {
        "estadoId": 19,
        "Nome": "Casimiro de Abreu"
    },
    {
        "estadoId": 19,
        "Nome": "Conceição de Macabu"
    },
    {
        "estadoId": 19,
        "Nome": "Cordeiro"
    },
    {
        "estadoId": 19,
        "Nome": "Duas Barras"
    },
    {
        "estadoId": 19,
        "Nome": "Duque de Caxias"
    },
    {
        "estadoId": 19,
        "Nome": "Engenheiro Paulo de Frontin"
    },
    {
        "estadoId": 19,
        "Nome": "Guapimirim"
    },
    {
        "estadoId": 19,
        "Nome": "Iguaba Grande"
    },
    {
        "estadoId": 19,
        "Nome": "Itaboraí"
    },
    {
        "estadoId": 19,
        "Nome": "Itaguaí"
    },
    {
        "estadoId": 19,
        "Nome": "Italva"
    },
    {
        "estadoId": 19,
        "Nome": "Itaocara"
    },
    {
        "estadoId": 19,
        "Nome": "Itaperuna"
    },
    {
        "estadoId": 19,
        "Nome": "Itatiaia"
    },
    {
        "estadoId": 19,
        "Nome": "Japeri"
    },
    {
        "estadoId": 19,
        "Nome": "Laje do Muriaé"
    },
    {
        "estadoId": 19,
        "Nome": "Macaé"
    },
    {
        "estadoId": 19,
        "Nome": "Macuco"
    },
    {
        "estadoId": 19,
        "Nome": "Magé"
    },
    {
        "estadoId": 19,
        "Nome": "Mangaratiba"
    },
    {
        "estadoId": 19,
        "Nome": "Maricá"
    },
    {
        "estadoId": 19,
        "Nome": "Mendes"
    },
    {
        "estadoId": 19,
        "Nome": "Mesquita"
    },
    {
        "estadoId": 19,
        "Nome": "Miguel Pereira"
    },
    {
        "estadoId": 19,
        "Nome": "Miracema"
    },
    {
        "estadoId": 19,
        "Nome": "Natividade"
    },
    {
        "estadoId": 19,
        "Nome": "Nilópolis"
    },
    {
        "estadoId": 19,
        "Nome": "Niterói"
    },
    {
        "estadoId": 19,
        "Nome": "Nova Friburgo"
    },
    {
        "estadoId": 19,
        "Nome": "Nova Iguaçu"
    },
    {
        "estadoId": 19,
        "Nome": "Paracambi"
    },
    {
        "estadoId": 19,
        "Nome": "Paraíba do Sul"
    },
    {
        "estadoId": 19,
        "Nome": "Paraty"
    },
    {
        "estadoId": 19,
        "Nome": "Paty do Alferes"
    },
    {
        "estadoId": 19,
        "Nome": "Petrópolis"
    },
    {
        "estadoId": 19,
        "Nome": "Pinheiral"
    },
    {
        "estadoId": 19,
        "Nome": "Piraí"
    },
    {
        "estadoId": 19,
        "Nome": "Porciúncula"
    },
    {
        "estadoId": 19,
        "Nome": "Porto Real"
    },
    {
        "estadoId": 19,
        "Nome": "Quatis"
    },
    {
        "estadoId": 19,
        "Nome": "Queimados"
    },
    {
        "estadoId": 19,
        "Nome": "Quissamã"
    },
    {
        "estadoId": 19,
        "Nome": "Resende"
    },
    {
        "estadoId": 19,
        "Nome": "Rio Bonito"
    },
    {
        "estadoId": 19,
        "Nome": "Rio Claro"
    },
    {
        "estadoId": 19,
        "Nome": "Rio das Flores"
    },
    {
        "estadoId": 19,
        "Nome": "Rio das Ostras"
    },
    {
        "estadoId": 19,
        "Nome": "Rio de Janeiro"
    },
    {
        "estadoId": 19,
        "Nome": "Santa Maria Madalena"
    },
    {
        "estadoId": 19,
        "Nome": "Santo Antônio de Pádua"
    },
    {
        "estadoId": 19,
        "Nome": "São Francisco de Itabapoana"
    },
    {
        "estadoId": 19,
        "Nome": "São Fidélis"
    },
    {
        "estadoId": 19,
        "Nome": "São Gonçalo"
    },
    {
        "estadoId": 19,
        "Nome": "São João da Barra"
    },
    {
        "estadoId": 19,
        "Nome": "São João de Meriti"
    },
    {
        "estadoId": 19,
        "Nome": "São José de Ubá"
    },
    {
        "estadoId": 19,
        "Nome": "São José do Vale do Rio Preto"
    },
    {
        "estadoId": 19,
        "Nome": "São Pedro da Aldeia"
    },
    {
        "estadoId": 19,
        "Nome": "São Sebastião do Alto"
    },
    {
        "estadoId": 19,
        "Nome": "Sapucaia"
    },
    {
        "estadoId": 19,
        "Nome": "Saquarema"
    },
    {
        "estadoId": 19,
        "Nome": "Seropédica"
    },
    {
        "estadoId": 19,
        "Nome": "Silva Jardim"
    },
    {
        "estadoId": 19,
        "Nome": "Sumidouro"
    },
    {
        "estadoId": 19,
        "Nome": "Tanguá"
    },
    {
        "estadoId": 19,
        "Nome": "Teresópolis"
    },
    {
        "estadoId": 19,
        "Nome": "Trajano de Moraes"
    },
    {
        "estadoId": 19,
        "Nome": "Três Rios"
    },
    {
        "estadoId": 19,
        "Nome": "Valença"
    },
    {
        "estadoId": 19,
        "Nome": "Varre-Sai"
    },
    {
        "estadoId": 19,
        "Nome": "Vassouras"
    },
    {
        "estadoId": 19,
        "Nome": "Volta Redonda"
    },
    {
        "estadoId": 25,
        "Nome": "Adamantina"
    },
    {
        "estadoId": 25,
        "Nome": "Adolfo"
    },
    {
        "estadoId": 25,
        "Nome": "Aguaí"
    },
    {
        "estadoId": 25,
        "Nome": "Águas da Prata"
    },
    {
        "estadoId": 25,
        "Nome": "Águas de Lindóia"
    },
    {
        "estadoId": 25,
        "Nome": "Águas de Santa Bárbara"
    },
    {
        "estadoId": 25,
        "Nome": "Águas de São Pedro"
    },
    {
        "estadoId": 25,
        "Nome": "Agudos"
    },
    {
        "estadoId": 25,
        "Nome": "Alambari"
    },
    {
        "estadoId": 25,
        "Nome": "Alfredo Marcondes"
    },
    {
        "estadoId": 25,
        "Nome": "Altair"
    },
    {
        "estadoId": 25,
        "Nome": "Altinópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Alto Alegre"
    },
    {
        "estadoId": 25,
        "Nome": "Alumínio"
    },
    {
        "estadoId": 25,
        "Nome": "Álvares Florence"
    },
    {
        "estadoId": 25,
        "Nome": "Álvares Machado"
    },
    {
        "estadoId": 25,
        "Nome": "Álvaro de Carvalho"
    },
    {
        "estadoId": 25,
        "Nome": "Alvinlândia"
    },
    {
        "estadoId": 25,
        "Nome": "Americana"
    },
    {
        "estadoId": 25,
        "Nome": "Américo Brasiliense"
    },
    {
        "estadoId": 25,
        "Nome": "Américo de Campos"
    },
    {
        "estadoId": 25,
        "Nome": "Amparo"
    },
    {
        "estadoId": 25,
        "Nome": "Analândia"
    },
    {
        "estadoId": 25,
        "Nome": "Andradina"
    },
    {
        "estadoId": 25,
        "Nome": "Angatuba"
    },
    {
        "estadoId": 25,
        "Nome": "Anhembi"
    },
    {
        "estadoId": 25,
        "Nome": "Anhumas"
    },
    {
        "estadoId": 25,
        "Nome": "Aparecida"
    },
    {
        "estadoId": 25,
        "Nome": "Aparecida d'Oeste"
    },
    {
        "estadoId": 25,
        "Nome": "Apiaí"
    },
    {
        "estadoId": 25,
        "Nome": "Araçariguama"
    },
    {
        "estadoId": 25,
        "Nome": "Araçatuba"
    },
    {
        "estadoId": 25,
        "Nome": "Araçoiaba da Serra"
    },
    {
        "estadoId": 25,
        "Nome": "Aramina"
    },
    {
        "estadoId": 25,
        "Nome": "Arandu"
    },
    {
        "estadoId": 25,
        "Nome": "Arapeí"
    },
    {
        "estadoId": 25,
        "Nome": "Araraquara"
    },
    {
        "estadoId": 25,
        "Nome": "Araras"
    },
    {
        "estadoId": 25,
        "Nome": "Arco-Íris"
    },
    {
        "estadoId": 25,
        "Nome": "Arealva"
    },
    {
        "estadoId": 25,
        "Nome": "Areias"
    },
    {
        "estadoId": 25,
        "Nome": "Areiópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Ariranha"
    },
    {
        "estadoId": 25,
        "Nome": "Artur Nogueira"
    },
    {
        "estadoId": 25,
        "Nome": "Arujá"
    },
    {
        "estadoId": 25,
        "Nome": "Aspásia"
    },
    {
        "estadoId": 25,
        "Nome": "Assis"
    },
    {
        "estadoId": 25,
        "Nome": "Atibaia"
    },
    {
        "estadoId": 25,
        "Nome": "Auriflama"
    },
    {
        "estadoId": 25,
        "Nome": "Avaí"
    },
    {
        "estadoId": 25,
        "Nome": "Avanhandava"
    },
    {
        "estadoId": 25,
        "Nome": "Avaré"
    },
    {
        "estadoId": 25,
        "Nome": "Bady Bassitt"
    },
    {
        "estadoId": 25,
        "Nome": "Balbinos"
    },
    {
        "estadoId": 25,
        "Nome": "Bálsamo"
    },
    {
        "estadoId": 25,
        "Nome": "Bananal"
    },
    {
        "estadoId": 25,
        "Nome": "Barão de Antonina"
    },
    {
        "estadoId": 25,
        "Nome": "Barbosa"
    },
    {
        "estadoId": 25,
        "Nome": "Bariri"
    },
    {
        "estadoId": 25,
        "Nome": "Barra Bonita"
    },
    {
        "estadoId": 25,
        "Nome": "Barra do Chapéu"
    },
    {
        "estadoId": 25,
        "Nome": "Barra do Turvo"
    },
    {
        "estadoId": 25,
        "Nome": "Barretos"
    },
    {
        "estadoId": 25,
        "Nome": "Barrinha"
    },
    {
        "estadoId": 25,
        "Nome": "Barueri"
    },
    {
        "estadoId": 25,
        "Nome": "Bastos"
    },
    {
        "estadoId": 25,
        "Nome": "Batatais"
    },
    {
        "estadoId": 25,
        "Nome": "Bauru"
    },
    {
        "estadoId": 25,
        "Nome": "Bebedouro"
    },
    {
        "estadoId": 25,
        "Nome": "Bento de Abreu"
    },
    {
        "estadoId": 25,
        "Nome": "Bernardino de Campos"
    },
    {
        "estadoId": 25,
        "Nome": "Bertioga"
    },
    {
        "estadoId": 25,
        "Nome": "Bilac"
    },
    {
        "estadoId": 25,
        "Nome": "Birigui"
    },
    {
        "estadoId": 25,
        "Nome": "Biritiba Mirim"
    },
    {
        "estadoId": 25,
        "Nome": "Boa Esperança do Sul"
    },
    {
        "estadoId": 25,
        "Nome": "Bocaina"
    },
    {
        "estadoId": 25,
        "Nome": "Bofete"
    },
    {
        "estadoId": 25,
        "Nome": "Boituva"
    },
    {
        "estadoId": 25,
        "Nome": "Bom Jesus dos Perdões"
    },
    {
        "estadoId": 25,
        "Nome": "Bom Sucesso de Itararé"
    },
    {
        "estadoId": 25,
        "Nome": "Borá"
    },
    {
        "estadoId": 25,
        "Nome": "Boracéia"
    },
    {
        "estadoId": 25,
        "Nome": "Borborema"
    },
    {
        "estadoId": 25,
        "Nome": "Borebi"
    },
    {
        "estadoId": 25,
        "Nome": "Botucatu"
    },
    {
        "estadoId": 25,
        "Nome": "Bragança Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Braúna"
    },
    {
        "estadoId": 25,
        "Nome": "Brejo Alegre"
    },
    {
        "estadoId": 25,
        "Nome": "Brodowski"
    },
    {
        "estadoId": 25,
        "Nome": "Brotas"
    },
    {
        "estadoId": 25,
        "Nome": "Buri"
    },
    {
        "estadoId": 25,
        "Nome": "Buritama"
    },
    {
        "estadoId": 25,
        "Nome": "Buritizal"
    },
    {
        "estadoId": 25,
        "Nome": "Cabrália Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Cabreúva"
    },
    {
        "estadoId": 25,
        "Nome": "Caçapava"
    },
    {
        "estadoId": 25,
        "Nome": "Cachoeira Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Caconde"
    },
    {
        "estadoId": 25,
        "Nome": "Cafelândia"
    },
    {
        "estadoId": 25,
        "Nome": "Caiabu"
    },
    {
        "estadoId": 25,
        "Nome": "Caieiras"
    },
    {
        "estadoId": 25,
        "Nome": "Caiuá"
    },
    {
        "estadoId": 25,
        "Nome": "Cajamar"
    },
    {
        "estadoId": 25,
        "Nome": "Cajati"
    },
    {
        "estadoId": 25,
        "Nome": "Cajobi"
    },
    {
        "estadoId": 25,
        "Nome": "Cajuru"
    },
    {
        "estadoId": 25,
        "Nome": "Campina do Monte Alegre"
    },
    {
        "estadoId": 25,
        "Nome": "Campinas"
    },
    {
        "estadoId": 25,
        "Nome": "Campo Limpo Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Campos do Jordão"
    },
    {
        "estadoId": 25,
        "Nome": "Campos Novos Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Cananéia"
    },
    {
        "estadoId": 25,
        "Nome": "Canas"
    },
    {
        "estadoId": 25,
        "Nome": "Cândido Mota"
    },
    {
        "estadoId": 25,
        "Nome": "Cândido Rodrigues"
    },
    {
        "estadoId": 25,
        "Nome": "Canitar"
    },
    {
        "estadoId": 25,
        "Nome": "Capão Bonito"
    },
    {
        "estadoId": 25,
        "Nome": "Capela do Alto"
    },
    {
        "estadoId": 25,
        "Nome": "Capivari"
    },
    {
        "estadoId": 25,
        "Nome": "Caraguatatuba"
    },
    {
        "estadoId": 25,
        "Nome": "Carapicuíba"
    },
    {
        "estadoId": 25,
        "Nome": "Cardoso"
    },
    {
        "estadoId": 25,
        "Nome": "Casa Branca"
    },
    {
        "estadoId": 25,
        "Nome": "Cássia dos Coqueiros"
    },
    {
        "estadoId": 25,
        "Nome": "Castilho"
    },
    {
        "estadoId": 25,
        "Nome": "Catanduva"
    },
    {
        "estadoId": 25,
        "Nome": "Catiguá"
    },
    {
        "estadoId": 25,
        "Nome": "Cedral"
    },
    {
        "estadoId": 25,
        "Nome": "Cerqueira César"
    },
    {
        "estadoId": 25,
        "Nome": "Cerquilho"
    },
    {
        "estadoId": 25,
        "Nome": "Cesário Lange"
    },
    {
        "estadoId": 25,
        "Nome": "Charqueada"
    },
    {
        "estadoId": 25,
        "Nome": "Clementina"
    },
    {
        "estadoId": 25,
        "Nome": "Colina"
    },
    {
        "estadoId": 25,
        "Nome": "Colômbia"
    },
    {
        "estadoId": 25,
        "Nome": "Conchal"
    },
    {
        "estadoId": 25,
        "Nome": "Conchas"
    },
    {
        "estadoId": 25,
        "Nome": "Cordeirópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Coroados"
    },
    {
        "estadoId": 25,
        "Nome": "Coronel Macedo"
    },
    {
        "estadoId": 25,
        "Nome": "Corumbataí"
    },
    {
        "estadoId": 25,
        "Nome": "Cosmópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Cosmorama"
    },
    {
        "estadoId": 25,
        "Nome": "Cotia"
    },
    {
        "estadoId": 25,
        "Nome": "Cravinhos"
    },
    {
        "estadoId": 25,
        "Nome": "Cristais Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Cruzália"
    },
    {
        "estadoId": 25,
        "Nome": "Cruzeiro"
    },
    {
        "estadoId": 25,
        "Nome": "Cubatão"
    },
    {
        "estadoId": 25,
        "Nome": "Cunha"
    },
    {
        "estadoId": 25,
        "Nome": "Descalvado"
    },
    {
        "estadoId": 25,
        "Nome": "Diadema"
    },
    {
        "estadoId": 25,
        "Nome": "Dirce Reis"
    },
    {
        "estadoId": 25,
        "Nome": "Divinolândia"
    },
    {
        "estadoId": 25,
        "Nome": "Dobrada"
    },
    {
        "estadoId": 25,
        "Nome": "Dois Córregos"
    },
    {
        "estadoId": 25,
        "Nome": "Dolcinópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Dourado"
    },
    {
        "estadoId": 25,
        "Nome": "Dracena"
    },
    {
        "estadoId": 25,
        "Nome": "Duartina"
    },
    {
        "estadoId": 25,
        "Nome": "Dumont"
    },
    {
        "estadoId": 25,
        "Nome": "Echaporã"
    },
    {
        "estadoId": 25,
        "Nome": "Eldorado"
    },
    {
        "estadoId": 25,
        "Nome": "Elias Fausto"
    },
    {
        "estadoId": 25,
        "Nome": "Elisiário"
    },
    {
        "estadoId": 25,
        "Nome": "Embaúba"
    },
    {
        "estadoId": 25,
        "Nome": "Embu das Artes"
    },
    {
        "estadoId": 25,
        "Nome": "Embu-Guaçu"
    },
    {
        "estadoId": 25,
        "Nome": "Emilianópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Engenheiro Coelho"
    },
    {
        "estadoId": 25,
        "Nome": "Espírito Santo do Pinhal"
    },
    {
        "estadoId": 25,
        "Nome": "Espírito Santo do Turvo"
    },
    {
        "estadoId": 25,
        "Nome": "Estrela d'Oeste"
    },
    {
        "estadoId": 25,
        "Nome": "Estrela do Norte"
    },
    {
        "estadoId": 25,
        "Nome": "Euclides da Cunha Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Fartura"
    },
    {
        "estadoId": 25,
        "Nome": "Fernandópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Fernando Prestes"
    },
    {
        "estadoId": 25,
        "Nome": "Fernão"
    },
    {
        "estadoId": 25,
        "Nome": "Ferraz de Vasconcelos"
    },
    {
        "estadoId": 25,
        "Nome": "Flora Rica"
    },
    {
        "estadoId": 25,
        "Nome": "Floreal"
    },
    {
        "estadoId": 25,
        "Nome": "Flórida Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Florínea"
    },
    {
        "estadoId": 25,
        "Nome": "Franca"
    },
    {
        "estadoId": 25,
        "Nome": "Francisco Morato"
    },
    {
        "estadoId": 25,
        "Nome": "Franco da Rocha"
    },
    {
        "estadoId": 25,
        "Nome": "Gabriel Monteiro"
    },
    {
        "estadoId": 25,
        "Nome": "Gália"
    },
    {
        "estadoId": 25,
        "Nome": "Garça"
    },
    {
        "estadoId": 25,
        "Nome": "Gastão Vidigal"
    },
    {
        "estadoId": 25,
        "Nome": "Gavião Peixoto"
    },
    {
        "estadoId": 25,
        "Nome": "General Salgado"
    },
    {
        "estadoId": 25,
        "Nome": "Getulina"
    },
    {
        "estadoId": 25,
        "Nome": "Glicério"
    },
    {
        "estadoId": 25,
        "Nome": "Guaiçara"
    },
    {
        "estadoId": 25,
        "Nome": "Guaimbê"
    },
    {
        "estadoId": 25,
        "Nome": "Guaíra"
    },
    {
        "estadoId": 25,
        "Nome": "Guapiaçu"
    },
    {
        "estadoId": 25,
        "Nome": "Guapiara"
    },
    {
        "estadoId": 25,
        "Nome": "Guará"
    },
    {
        "estadoId": 25,
        "Nome": "Guaraçaí"
    },
    {
        "estadoId": 25,
        "Nome": "Guaraci"
    },
    {
        "estadoId": 25,
        "Nome": "Guarani d'Oeste"
    },
    {
        "estadoId": 25,
        "Nome": "Guarantã"
    },
    {
        "estadoId": 25,
        "Nome": "Guararapes"
    },
    {
        "estadoId": 25,
        "Nome": "Guararema"
    },
    {
        "estadoId": 25,
        "Nome": "Guaratinguetá"
    },
    {
        "estadoId": 25,
        "Nome": "Guareí"
    },
    {
        "estadoId": 25,
        "Nome": "Guariba"
    },
    {
        "estadoId": 25,
        "Nome": "Guarujá"
    },
    {
        "estadoId": 25,
        "Nome": "Guarulhos"
    },
    {
        "estadoId": 25,
        "Nome": "Guatapará"
    },
    {
        "estadoId": 25,
        "Nome": "Guzolândia"
    },
    {
        "estadoId": 25,
        "Nome": "Herculândia"
    },
    {
        "estadoId": 25,
        "Nome": "Holambra"
    },
    {
        "estadoId": 25,
        "Nome": "Hortolândia"
    },
    {
        "estadoId": 25,
        "Nome": "Iacanga"
    },
    {
        "estadoId": 25,
        "Nome": "Iacri"
    },
    {
        "estadoId": 25,
        "Nome": "Iaras"
    },
    {
        "estadoId": 25,
        "Nome": "Ibaté"
    },
    {
        "estadoId": 25,
        "Nome": "Ibirá"
    },
    {
        "estadoId": 25,
        "Nome": "Ibirarema"
    },
    {
        "estadoId": 25,
        "Nome": "Ibitinga"
    },
    {
        "estadoId": 25,
        "Nome": "Ibiúna"
    },
    {
        "estadoId": 25,
        "Nome": "Icém"
    },
    {
        "estadoId": 25,
        "Nome": "Iepê"
    },
    {
        "estadoId": 25,
        "Nome": "Igaraçu do Tietê"
    },
    {
        "estadoId": 25,
        "Nome": "Igarapava"
    },
    {
        "estadoId": 25,
        "Nome": "Igaratá"
    },
    {
        "estadoId": 25,
        "Nome": "Iguape"
    },
    {
        "estadoId": 25,
        "Nome": "Ilhabela"
    },
    {
        "estadoId": 25,
        "Nome": "Ilha Comprida"
    },
    {
        "estadoId": 25,
        "Nome": "Ilha Solteira"
    },
    {
        "estadoId": 25,
        "Nome": "Indaiatuba"
    },
    {
        "estadoId": 25,
        "Nome": "Indiana"
    },
    {
        "estadoId": 25,
        "Nome": "Indiaporã"
    },
    {
        "estadoId": 25,
        "Nome": "Inúbia Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Ipaussu"
    },
    {
        "estadoId": 25,
        "Nome": "Iperó"
    },
    {
        "estadoId": 25,
        "Nome": "Ipeúna"
    },
    {
        "estadoId": 25,
        "Nome": "Ipiguá"
    },
    {
        "estadoId": 25,
        "Nome": "Iporanga"
    },
    {
        "estadoId": 25,
        "Nome": "Ipuã"
    },
    {
        "estadoId": 25,
        "Nome": "Iracemápolis"
    },
    {
        "estadoId": 25,
        "Nome": "Irapuã"
    },
    {
        "estadoId": 25,
        "Nome": "Irapuru"
    },
    {
        "estadoId": 25,
        "Nome": "Itaberá"
    },
    {
        "estadoId": 25,
        "Nome": "Itaí"
    },
    {
        "estadoId": 25,
        "Nome": "Itajobi"
    },
    {
        "estadoId": 25,
        "Nome": "Itaju"
    },
    {
        "estadoId": 25,
        "Nome": "Itanhaém"
    },
    {
        "estadoId": 25,
        "Nome": "Itaoca"
    },
    {
        "estadoId": 25,
        "Nome": "Itapecerica da Serra"
    },
    {
        "estadoId": 25,
        "Nome": "Itapetininga"
    },
    {
        "estadoId": 25,
        "Nome": "Itapeva"
    },
    {
        "estadoId": 25,
        "Nome": "Itapevi"
    },
    {
        "estadoId": 25,
        "Nome": "Itapira"
    },
    {
        "estadoId": 25,
        "Nome": "Itapirapuã Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Itápolis"
    },
    {
        "estadoId": 25,
        "Nome": "Itaporanga"
    },
    {
        "estadoId": 25,
        "Nome": "Itapuí"
    },
    {
        "estadoId": 25,
        "Nome": "Itapura"
    },
    {
        "estadoId": 25,
        "Nome": "Itaquaquecetuba"
    },
    {
        "estadoId": 25,
        "Nome": "Itararé"
    },
    {
        "estadoId": 25,
        "Nome": "Itariri"
    },
    {
        "estadoId": 25,
        "Nome": "Itatiba"
    },
    {
        "estadoId": 25,
        "Nome": "Itatinga"
    },
    {
        "estadoId": 25,
        "Nome": "Itirapina"
    },
    {
        "estadoId": 25,
        "Nome": "Itirapuã"
    },
    {
        "estadoId": 25,
        "Nome": "Itobi"
    },
    {
        "estadoId": 25,
        "Nome": "Itu"
    },
    {
        "estadoId": 25,
        "Nome": "Itupeva"
    },
    {
        "estadoId": 25,
        "Nome": "Ituverava"
    },
    {
        "estadoId": 25,
        "Nome": "Jaborandi"
    },
    {
        "estadoId": 25,
        "Nome": "Jaboticabal"
    },
    {
        "estadoId": 25,
        "Nome": "Jacareí"
    },
    {
        "estadoId": 25,
        "Nome": "Jaci"
    },
    {
        "estadoId": 25,
        "Nome": "Jacupiranga"
    },
    {
        "estadoId": 25,
        "Nome": "Jaguariúna"
    },
    {
        "estadoId": 25,
        "Nome": "Jales"
    },
    {
        "estadoId": 25,
        "Nome": "Jambeiro"
    },
    {
        "estadoId": 25,
        "Nome": "Jandira"
    },
    {
        "estadoId": 25,
        "Nome": "Jardinópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Jarinu"
    },
    {
        "estadoId": 25,
        "Nome": "Jaú"
    },
    {
        "estadoId": 25,
        "Nome": "Jeriquara"
    },
    {
        "estadoId": 25,
        "Nome": "Joanópolis"
    },
    {
        "estadoId": 25,
        "Nome": "João Ramalho"
    },
    {
        "estadoId": 25,
        "Nome": "José Bonifácio"
    },
    {
        "estadoId": 25,
        "Nome": "Júlio Mesquita"
    },
    {
        "estadoId": 25,
        "Nome": "Jumirim"
    },
    {
        "estadoId": 25,
        "Nome": "Jundiaí"
    },
    {
        "estadoId": 25,
        "Nome": "Junqueirópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Juquiá"
    },
    {
        "estadoId": 25,
        "Nome": "Juquitiba"
    },
    {
        "estadoId": 25,
        "Nome": "Lagoinha"
    },
    {
        "estadoId": 25,
        "Nome": "Laranjal Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Lavínia"
    },
    {
        "estadoId": 25,
        "Nome": "Lavrinhas"
    },
    {
        "estadoId": 25,
        "Nome": "Leme"
    },
    {
        "estadoId": 25,
        "Nome": "Lençóis Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Limeira"
    },
    {
        "estadoId": 25,
        "Nome": "Lindóia"
    },
    {
        "estadoId": 25,
        "Nome": "Lins"
    },
    {
        "estadoId": 25,
        "Nome": "Lorena"
    },
    {
        "estadoId": 25,
        "Nome": "Lourdes"
    },
    {
        "estadoId": 25,
        "Nome": "Louveira"
    },
    {
        "estadoId": 25,
        "Nome": "Lucélia"
    },
    {
        "estadoId": 25,
        "Nome": "Lucianópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Luís Antônio"
    },
    {
        "estadoId": 25,
        "Nome": "Luiziânia"
    },
    {
        "estadoId": 25,
        "Nome": "Lupércio"
    },
    {
        "estadoId": 25,
        "Nome": "Lutécia"
    },
    {
        "estadoId": 25,
        "Nome": "Macatuba"
    },
    {
        "estadoId": 25,
        "Nome": "Macaubal"
    },
    {
        "estadoId": 25,
        "Nome": "Macedônia"
    },
    {
        "estadoId": 25,
        "Nome": "Magda"
    },
    {
        "estadoId": 25,
        "Nome": "Mairinque"
    },
    {
        "estadoId": 25,
        "Nome": "Mairiporã"
    },
    {
        "estadoId": 25,
        "Nome": "Manduri"
    },
    {
        "estadoId": 25,
        "Nome": "Marabá Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Maracaí"
    },
    {
        "estadoId": 25,
        "Nome": "Marapoama"
    },
    {
        "estadoId": 25,
        "Nome": "Mariápolis"
    },
    {
        "estadoId": 25,
        "Nome": "Marília"
    },
    {
        "estadoId": 25,
        "Nome": "Marinópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Martinópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Matão"
    },
    {
        "estadoId": 25,
        "Nome": "Mauá"
    },
    {
        "estadoId": 25,
        "Nome": "Mendonça"
    },
    {
        "estadoId": 25,
        "Nome": "Meridiano"
    },
    {
        "estadoId": 25,
        "Nome": "Mesópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Miguelópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Mineiros do Tietê"
    },
    {
        "estadoId": 25,
        "Nome": "Miracatu"
    },
    {
        "estadoId": 25,
        "Nome": "Mira Estrela"
    },
    {
        "estadoId": 25,
        "Nome": "Mirandópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Mirante do Paranapanema"
    },
    {
        "estadoId": 25,
        "Nome": "Mirassol"
    },
    {
        "estadoId": 25,
        "Nome": "Mirassolândia"
    },
    {
        "estadoId": 25,
        "Nome": "Mococa"
    },
    {
        "estadoId": 25,
        "Nome": "Mogi das Cruzes"
    },
    {
        "estadoId": 25,
        "Nome": "Mogi Guaçu"
    },
    {
        "estadoId": 25,
        "Nome": "Mogi Mirim"
    },
    {
        "estadoId": 25,
        "Nome": "Mombuca"
    },
    {
        "estadoId": 25,
        "Nome": "Monções"
    },
    {
        "estadoId": 25,
        "Nome": "Mongaguá"
    },
    {
        "estadoId": 25,
        "Nome": "Monte Alegre do Sul"
    },
    {
        "estadoId": 25,
        "Nome": "Monte Alto"
    },
    {
        "estadoId": 25,
        "Nome": "Monte Aprazível"
    },
    {
        "estadoId": 25,
        "Nome": "Monte Azul Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Monte Castelo"
    },
    {
        "estadoId": 25,
        "Nome": "Monteiro Lobato"
    },
    {
        "estadoId": 25,
        "Nome": "Monte Mor"
    },
    {
        "estadoId": 25,
        "Nome": "Morro Agudo"
    },
    {
        "estadoId": 25,
        "Nome": "Morungaba"
    },
    {
        "estadoId": 25,
        "Nome": "Motuca"
    },
    {
        "estadoId": 25,
        "Nome": "Murutinga do Sul"
    },
    {
        "estadoId": 25,
        "Nome": "Nantes"
    },
    {
        "estadoId": 25,
        "Nome": "Narandiba"
    },
    {
        "estadoId": 25,
        "Nome": "Natividade da Serra"
    },
    {
        "estadoId": 25,
        "Nome": "Nazaré Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Neves Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Nhandeara"
    },
    {
        "estadoId": 25,
        "Nome": "Nipoã"
    },
    {
        "estadoId": 25,
        "Nome": "Nova Aliança"
    },
    {
        "estadoId": 25,
        "Nome": "Nova Campina"
    },
    {
        "estadoId": 25,
        "Nome": "Nova Canaã Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Nova Castilho"
    },
    {
        "estadoId": 25,
        "Nome": "Nova Europa"
    },
    {
        "estadoId": 25,
        "Nome": "Nova Granada"
    },
    {
        "estadoId": 25,
        "Nome": "Nova Guataporanga"
    },
    {
        "estadoId": 25,
        "Nome": "Nova Independência"
    },
    {
        "estadoId": 25,
        "Nome": "Novais"
    },
    {
        "estadoId": 25,
        "Nome": "Nova Luzitânia"
    },
    {
        "estadoId": 25,
        "Nome": "Nova Odessa"
    },
    {
        "estadoId": 25,
        "Nome": "Novo Horizonte"
    },
    {
        "estadoId": 25,
        "Nome": "Nuporanga"
    },
    {
        "estadoId": 25,
        "Nome": "Ocauçu"
    },
    {
        "estadoId": 25,
        "Nome": "Óleo"
    },
    {
        "estadoId": 25,
        "Nome": "Olímpia"
    },
    {
        "estadoId": 25,
        "Nome": "Onda Verde"
    },
    {
        "estadoId": 25,
        "Nome": "Oriente"
    },
    {
        "estadoId": 25,
        "Nome": "Orindiúva"
    },
    {
        "estadoId": 25,
        "Nome": "Orlândia"
    },
    {
        "estadoId": 25,
        "Nome": "Osasco"
    },
    {
        "estadoId": 25,
        "Nome": "Oscar Bressane"
    },
    {
        "estadoId": 25,
        "Nome": "Osvaldo Cruz"
    },
    {
        "estadoId": 25,
        "Nome": "Ourinhos"
    },
    {
        "estadoId": 25,
        "Nome": "Ouroeste"
    },
    {
        "estadoId": 25,
        "Nome": "Ouro Verde"
    },
    {
        "estadoId": 25,
        "Nome": "Pacaembu"
    },
    {
        "estadoId": 25,
        "Nome": "Palestina"
    },
    {
        "estadoId": 25,
        "Nome": "Palmares Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Palmeira d'Oeste"
    },
    {
        "estadoId": 25,
        "Nome": "Palmital"
    },
    {
        "estadoId": 25,
        "Nome": "Panorama"
    },
    {
        "estadoId": 25,
        "Nome": "Paraguaçu Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Paraibuna"
    },
    {
        "estadoId": 25,
        "Nome": "Paraíso"
    },
    {
        "estadoId": 25,
        "Nome": "Paranapanema"
    },
    {
        "estadoId": 25,
        "Nome": "Paranapuã"
    },
    {
        "estadoId": 25,
        "Nome": "Parapuã"
    },
    {
        "estadoId": 25,
        "Nome": "Pardinho"
    },
    {
        "estadoId": 25,
        "Nome": "Pariquera-Açu"
    },
    {
        "estadoId": 25,
        "Nome": "Parisi"
    },
    {
        "estadoId": 25,
        "Nome": "Patrocínio Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Paulicéia"
    },
    {
        "estadoId": 25,
        "Nome": "Paulínia"
    },
    {
        "estadoId": 25,
        "Nome": "Paulistânia"
    },
    {
        "estadoId": 25,
        "Nome": "Paulo de Faria"
    },
    {
        "estadoId": 25,
        "Nome": "Pederneiras"
    },
    {
        "estadoId": 25,
        "Nome": "Pedra Bela"
    },
    {
        "estadoId": 25,
        "Nome": "Pedranópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Pedregulho"
    },
    {
        "estadoId": 25,
        "Nome": "Pedreira"
    },
    {
        "estadoId": 25,
        "Nome": "Pedrinhas Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Pedro de Toledo"
    },
    {
        "estadoId": 25,
        "Nome": "Penápolis"
    },
    {
        "estadoId": 25,
        "Nome": "Pereira Barreto"
    },
    {
        "estadoId": 25,
        "Nome": "Pereiras"
    },
    {
        "estadoId": 25,
        "Nome": "Peruíbe"
    },
    {
        "estadoId": 25,
        "Nome": "Piacatu"
    },
    {
        "estadoId": 25,
        "Nome": "Piedade"
    },
    {
        "estadoId": 25,
        "Nome": "Pilar do Sul"
    },
    {
        "estadoId": 25,
        "Nome": "Pindamonhangaba"
    },
    {
        "estadoId": 25,
        "Nome": "Pindorama"
    },
    {
        "estadoId": 25,
        "Nome": "Pinhalzinho"
    },
    {
        "estadoId": 25,
        "Nome": "Piquerobi"
    },
    {
        "estadoId": 25,
        "Nome": "Piquete"
    },
    {
        "estadoId": 25,
        "Nome": "Piracaia"
    },
    {
        "estadoId": 25,
        "Nome": "Piracicaba"
    },
    {
        "estadoId": 25,
        "Nome": "Piraju"
    },
    {
        "estadoId": 25,
        "Nome": "Pirajuí"
    },
    {
        "estadoId": 25,
        "Nome": "Pirangi"
    },
    {
        "estadoId": 25,
        "Nome": "Pirapora do Bom Jesus"
    },
    {
        "estadoId": 25,
        "Nome": "Pirapozinho"
    },
    {
        "estadoId": 25,
        "Nome": "Pirassununga"
    },
    {
        "estadoId": 25,
        "Nome": "Piratininga"
    },
    {
        "estadoId": 25,
        "Nome": "Pitangueiras"
    },
    {
        "estadoId": 25,
        "Nome": "Planalto"
    },
    {
        "estadoId": 25,
        "Nome": "Platina"
    },
    {
        "estadoId": 25,
        "Nome": "Poá"
    },
    {
        "estadoId": 25,
        "Nome": "Poloni"
    },
    {
        "estadoId": 25,
        "Nome": "Pompéia"
    },
    {
        "estadoId": 25,
        "Nome": "Pongaí"
    },
    {
        "estadoId": 25,
        "Nome": "Pontal"
    },
    {
        "estadoId": 25,
        "Nome": "Pontalinda"
    },
    {
        "estadoId": 25,
        "Nome": "Pontes Gestal"
    },
    {
        "estadoId": 25,
        "Nome": "Populina"
    },
    {
        "estadoId": 25,
        "Nome": "Porangaba"
    },
    {
        "estadoId": 25,
        "Nome": "Porto Feliz"
    },
    {
        "estadoId": 25,
        "Nome": "Porto Ferreira"
    },
    {
        "estadoId": 25,
        "Nome": "Potim"
    },
    {
        "estadoId": 25,
        "Nome": "Potirendaba"
    },
    {
        "estadoId": 25,
        "Nome": "Pracinha"
    },
    {
        "estadoId": 25,
        "Nome": "Pradópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Praia Grande"
    },
    {
        "estadoId": 25,
        "Nome": "Pratânia"
    },
    {
        "estadoId": 25,
        "Nome": "Presidente Alves"
    },
    {
        "estadoId": 25,
        "Nome": "Presidente Bernardes"
    },
    {
        "estadoId": 25,
        "Nome": "Presidente Epitácio"
    },
    {
        "estadoId": 25,
        "Nome": "Presidente Prudente"
    },
    {
        "estadoId": 25,
        "Nome": "Presidente Venceslau"
    },
    {
        "estadoId": 25,
        "Nome": "Promissão"
    },
    {
        "estadoId": 25,
        "Nome": "Quadra"
    },
    {
        "estadoId": 25,
        "Nome": "Quatá"
    },
    {
        "estadoId": 25,
        "Nome": "Queiroz"
    },
    {
        "estadoId": 25,
        "Nome": "Queluz"
    },
    {
        "estadoId": 25,
        "Nome": "Quintana"
    },
    {
        "estadoId": 25,
        "Nome": "Rafard"
    },
    {
        "estadoId": 25,
        "Nome": "Rancharia"
    },
    {
        "estadoId": 25,
        "Nome": "Redenção da Serra"
    },
    {
        "estadoId": 25,
        "Nome": "Regente Feijó"
    },
    {
        "estadoId": 25,
        "Nome": "Reginópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Registro"
    },
    {
        "estadoId": 25,
        "Nome": "Restinga"
    },
    {
        "estadoId": 25,
        "Nome": "Ribeira"
    },
    {
        "estadoId": 25,
        "Nome": "Ribeirão Bonito"
    },
    {
        "estadoId": 25,
        "Nome": "Ribeirão Branco"
    },
    {
        "estadoId": 25,
        "Nome": "Ribeirão Corrente"
    },
    {
        "estadoId": 25,
        "Nome": "Ribeirão do Sul"
    },
    {
        "estadoId": 25,
        "Nome": "Ribeirão dos Índios"
    },
    {
        "estadoId": 25,
        "Nome": "Ribeirão Grande"
    },
    {
        "estadoId": 25,
        "Nome": "Ribeirão Pires"
    },
    {
        "estadoId": 25,
        "Nome": "Ribeirão Preto"
    },
    {
        "estadoId": 25,
        "Nome": "Riversul"
    },
    {
        "estadoId": 25,
        "Nome": "Rifaina"
    },
    {
        "estadoId": 25,
        "Nome": "Rincão"
    },
    {
        "estadoId": 25,
        "Nome": "Rinópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Rio Claro"
    },
    {
        "estadoId": 25,
        "Nome": "Rio das Pedras"
    },
    {
        "estadoId": 25,
        "Nome": "Rio Grande da Serra"
    },
    {
        "estadoId": 25,
        "Nome": "Riolândia"
    },
    {
        "estadoId": 25,
        "Nome": "Rosana"
    },
    {
        "estadoId": 25,
        "Nome": "Roseira"
    },
    {
        "estadoId": 25,
        "Nome": "Rubiácea"
    },
    {
        "estadoId": 25,
        "Nome": "Rubinéia"
    },
    {
        "estadoId": 25,
        "Nome": "Sabino"
    },
    {
        "estadoId": 25,
        "Nome": "Sagres"
    },
    {
        "estadoId": 25,
        "Nome": "Sales"
    },
    {
        "estadoId": 25,
        "Nome": "Sales Oliveira"
    },
    {
        "estadoId": 25,
        "Nome": "Salesópolis"
    },
    {
        "estadoId": 25,
        "Nome": "Salmourão"
    },
    {
        "estadoId": 25,
        "Nome": "Saltinho"
    },
    {
        "estadoId": 25,
        "Nome": "Salto"
    },
    {
        "estadoId": 25,
        "Nome": "Salto de Pirapora"
    },
    {
        "estadoId": 25,
        "Nome": "Salto Grande"
    },
    {
        "estadoId": 25,
        "Nome": "Sandovalina"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Adélia"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Albertina"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Bárbara d'Oeste"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Branca"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Clara d'Oeste"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Cruz da Conceição"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Cruz da Esperança"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Cruz das Palmeiras"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Cruz do Rio Pardo"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Ernestina"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Fé do Sul"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Gertrudes"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Isabel"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Lúcia"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Maria da Serra"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Mercedes"
    },
    {
        "estadoId": 25,
        "Nome": "Santana da Ponte Pensa"
    },
    {
        "estadoId": 25,
        "Nome": "Santana de Parnaíba"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Rita d'Oeste"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Rita do Passa Quatro"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Rosa de Viterbo"
    },
    {
        "estadoId": 25,
        "Nome": "Santa Salete"
    },
    {
        "estadoId": 25,
        "Nome": "Santo Anastácio"
    },
    {
        "estadoId": 25,
        "Nome": "Santo André"
    },
    {
        "estadoId": 25,
        "Nome": "Santo Antônio da Alegria"
    },
    {
        "estadoId": 25,
        "Nome": "Santo Antônio de Posse"
    },
    {
        "estadoId": 25,
        "Nome": "Santo Antônio do Aracanguá"
    },
    {
        "estadoId": 25,
        "Nome": "Santo Antônio do Jardim"
    },
    {
        "estadoId": 25,
        "Nome": "Santo Antônio do Pinhal"
    },
    {
        "estadoId": 25,
        "Nome": "Santo Expedito"
    },
    {
        "estadoId": 25,
        "Nome": "Santópolis do Aguapeí"
    },
    {
        "estadoId": 25,
        "Nome": "Santos"
    },
    {
        "estadoId": 25,
        "Nome": "São Bento do Sapucaí"
    },
    {
        "estadoId": 25,
        "Nome": "São Bernardo do Campo"
    },
    {
        "estadoId": 25,
        "Nome": "São Caetano do Sul"
    },
    {
        "estadoId": 25,
        "Nome": "São Carlos"
    },
    {
        "estadoId": 25,
        "Nome": "São Francisco"
    },
    {
        "estadoId": 25,
        "Nome": "São João da Boa Vista"
    },
    {
        "estadoId": 25,
        "Nome": "São João das Duas Pontes"
    },
    {
        "estadoId": 25,
        "Nome": "São João de Iracema"
    },
    {
        "estadoId": 25,
        "Nome": "São João do Pau d'Alho"
    },
    {
        "estadoId": 25,
        "Nome": "São Joaquim da Barra"
    },
    {
        "estadoId": 25,
        "Nome": "São José da Bela Vista"
    },
    {
        "estadoId": 25,
        "Nome": "São José do Barreiro"
    },
    {
        "estadoId": 25,
        "Nome": "São José do Rio Pardo"
    },
    {
        "estadoId": 25,
        "Nome": "São José do Rio Preto"
    },
    {
        "estadoId": 25,
        "Nome": "São José dos Campos"
    },
    {
        "estadoId": 25,
        "Nome": "São Lourenço da Serra"
    },
    {
        "estadoId": 25,
        "Nome": "São Luiz do Paraitinga"
    },
    {
        "estadoId": 25,
        "Nome": "São Manuel"
    },
    {
        "estadoId": 25,
        "Nome": "São Miguel Arcanjo"
    },
    {
        "estadoId": 25,
        "Nome": "São Paulo"
    },
    {
        "estadoId": 25,
        "Nome": "São Pedro"
    },
    {
        "estadoId": 25,
        "Nome": "São Pedro do Turvo"
    },
    {
        "estadoId": 25,
        "Nome": "São Roque"
    },
    {
        "estadoId": 25,
        "Nome": "São Sebastião"
    },
    {
        "estadoId": 25,
        "Nome": "São Sebastião da Grama"
    },
    {
        "estadoId": 25,
        "Nome": "São Simão"
    },
    {
        "estadoId": 25,
        "Nome": "São Vicente"
    },
    {
        "estadoId": 25,
        "Nome": "Sarapuí"
    },
    {
        "estadoId": 25,
        "Nome": "Sarutaiá"
    },
    {
        "estadoId": 25,
        "Nome": "Sebastianópolis do Sul"
    },
    {
        "estadoId": 25,
        "Nome": "Serra Azul"
    },
    {
        "estadoId": 25,
        "Nome": "Serrana"
    },
    {
        "estadoId": 25,
        "Nome": "Serra Negra"
    },
    {
        "estadoId": 25,
        "Nome": "Sertãozinho"
    },
    {
        "estadoId": 25,
        "Nome": "Sete Barras"
    },
    {
        "estadoId": 25,
        "Nome": "Severínia"
    },
    {
        "estadoId": 25,
        "Nome": "Silveiras"
    },
    {
        "estadoId": 25,
        "Nome": "Socorro"
    },
    {
        "estadoId": 25,
        "Nome": "Sorocaba"
    },
    {
        "estadoId": 25,
        "Nome": "Sud Mennucci"
    },
    {
        "estadoId": 25,
        "Nome": "Sumaré"
    },
    {
        "estadoId": 25,
        "Nome": "Suzano"
    },
    {
        "estadoId": 25,
        "Nome": "Suzanápolis"
    },
    {
        "estadoId": 25,
        "Nome": "Tabapuã"
    },
    {
        "estadoId": 25,
        "Nome": "Tabatinga"
    },
    {
        "estadoId": 25,
        "Nome": "Taboão da Serra"
    },
    {
        "estadoId": 25,
        "Nome": "Taciba"
    },
    {
        "estadoId": 25,
        "Nome": "Taguaí"
    },
    {
        "estadoId": 25,
        "Nome": "Taiaçu"
    },
    {
        "estadoId": 25,
        "Nome": "Taiúva"
    },
    {
        "estadoId": 25,
        "Nome": "Tambaú"
    },
    {
        "estadoId": 25,
        "Nome": "Tanabi"
    },
    {
        "estadoId": 25,
        "Nome": "Tapiraí"
    },
    {
        "estadoId": 25,
        "Nome": "Tapiratiba"
    },
    {
        "estadoId": 25,
        "Nome": "Taquaral"
    },
    {
        "estadoId": 25,
        "Nome": "Taquaritinga"
    },
    {
        "estadoId": 25,
        "Nome": "Taquarituba"
    },
    {
        "estadoId": 25,
        "Nome": "Taquarivaí"
    },
    {
        "estadoId": 25,
        "Nome": "Tarabai"
    },
    {
        "estadoId": 25,
        "Nome": "Tarumã"
    },
    {
        "estadoId": 25,
        "Nome": "Tatuí"
    },
    {
        "estadoId": 25,
        "Nome": "Taubaté"
    },
    {
        "estadoId": 25,
        "Nome": "Tejupá"
    },
    {
        "estadoId": 25,
        "Nome": "Teodoro Sampaio"
    },
    {
        "estadoId": 25,
        "Nome": "Terra Roxa"
    },
    {
        "estadoId": 25,
        "Nome": "Tietê"
    },
    {
        "estadoId": 25,
        "Nome": "Timburi"
    },
    {
        "estadoId": 25,
        "Nome": "Torre de Pedra"
    },
    {
        "estadoId": 25,
        "Nome": "Torrinha"
    },
    {
        "estadoId": 25,
        "Nome": "Trabiju"
    },
    {
        "estadoId": 25,
        "Nome": "Tremembé"
    },
    {
        "estadoId": 25,
        "Nome": "Três Fronteiras"
    },
    {
        "estadoId": 25,
        "Nome": "Tuiuti"
    },
    {
        "estadoId": 25,
        "Nome": "Tupã"
    },
    {
        "estadoId": 25,
        "Nome": "Tupi Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Turiúba"
    },
    {
        "estadoId": 25,
        "Nome": "Turmalina"
    },
    {
        "estadoId": 25,
        "Nome": "Ubarana"
    },
    {
        "estadoId": 25,
        "Nome": "Ubatuba"
    },
    {
        "estadoId": 25,
        "Nome": "Ubirajara"
    },
    {
        "estadoId": 25,
        "Nome": "Uchoa"
    },
    {
        "estadoId": 25,
        "Nome": "União Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Urânia"
    },
    {
        "estadoId": 25,
        "Nome": "Uru"
    },
    {
        "estadoId": 25,
        "Nome": "Urupês"
    },
    {
        "estadoId": 25,
        "Nome": "Valentim Gentil"
    },
    {
        "estadoId": 25,
        "Nome": "Valinhos"
    },
    {
        "estadoId": 25,
        "Nome": "Valparaíso"
    },
    {
        "estadoId": 25,
        "Nome": "Vargem"
    },
    {
        "estadoId": 25,
        "Nome": "Vargem Grande do Sul"
    },
    {
        "estadoId": 25,
        "Nome": "Vargem Grande Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Várzea Paulista"
    },
    {
        "estadoId": 25,
        "Nome": "Vera Cruz"
    },
    {
        "estadoId": 25,
        "Nome": "Vinhedo"
    },
    {
        "estadoId": 25,
        "Nome": "Viradouro"
    },
    {
        "estadoId": 25,
        "Nome": "Vista Alegre do Alto"
    },
    {
        "estadoId": 25,
        "Nome": "Vitória Brasil"
    },
    {
        "estadoId": 25,
        "Nome": "Votorantim"
    },
    {
        "estadoId": 25,
        "Nome": "Votuporanga"
    },
    {
        "estadoId": 25,
        "Nome": "Zacarias"
    },
    {
        "estadoId": 25,
        "Nome": "Chavantes"
    },
    {
        "estadoId": 25,
        "Nome": "Estiva Gerbi"
    },
    {
        "estadoId": 16,
        "Nome": "Palmas"
    },
    {
        "estadoId": 16,
        "Nome": "Palmeira"
    },
    {
        "estadoId": 16,
        "Nome": "Palmital"
    },
    {
        "estadoId": 16,
        "Nome": "Palotina"
    },
    {
        "estadoId": 16,
        "Nome": "Paraíso do Norte"
    },
    {
        "estadoId": 16,
        "Nome": "Paranacity"
    },
    {
        "estadoId": 16,
        "Nome": "Paranaguá"
    },
    {
        "estadoId": 16,
        "Nome": "Paranapoema"
    },
    {
        "estadoId": 16,
        "Nome": "Paranavaí"
    },
    {
        "estadoId": 16,
        "Nome": "Pato Bragado"
    },
    {
        "estadoId": 16,
        "Nome": "Pato Branco"
    },
    {
        "estadoId": 16,
        "Nome": "Paula Freitas"
    },
    {
        "estadoId": 16,
        "Nome": "Paulo Frontin"
    },
    {
        "estadoId": 16,
        "Nome": "Peabiru"
    },
    {
        "estadoId": 16,
        "Nome": "Perobal"
    },
    {
        "estadoId": 16,
        "Nome": "Pérola"
    },
    {
        "estadoId": 16,
        "Nome": "Pérola d'Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Piên"
    },
    {
        "estadoId": 16,
        "Nome": "Pinhais"
    },
    {
        "estadoId": 16,
        "Nome": "Pinhalão"
    },
    {
        "estadoId": 16,
        "Nome": "Pinhal de São Bento"
    },
    {
        "estadoId": 16,
        "Nome": "Pinhão"
    },
    {
        "estadoId": 16,
        "Nome": "Piraí do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Piraquara"
    },
    {
        "estadoId": 16,
        "Nome": "Pitanga"
    },
    {
        "estadoId": 16,
        "Nome": "Pitangueiras"
    },
    {
        "estadoId": 16,
        "Nome": "Planaltina do Paraná"
    },
    {
        "estadoId": 16,
        "Nome": "Planalto"
    },
    {
        "estadoId": 16,
        "Nome": "Ponta Grossa"
    },
    {
        "estadoId": 16,
        "Nome": "Pontal do Paraná"
    },
    {
        "estadoId": 16,
        "Nome": "Porecatu"
    },
    {
        "estadoId": 16,
        "Nome": "Porto Amazonas"
    },
    {
        "estadoId": 16,
        "Nome": "Porto Barreiro"
    },
    {
        "estadoId": 16,
        "Nome": "Porto Rico"
    },
    {
        "estadoId": 16,
        "Nome": "Porto Vitória"
    },
    {
        "estadoId": 16,
        "Nome": "Prado Ferreira"
    },
    {
        "estadoId": 16,
        "Nome": "Pranchita"
    },
    {
        "estadoId": 16,
        "Nome": "Presidente Castelo Branco"
    },
    {
        "estadoId": 16,
        "Nome": "Primeiro de Maio"
    },
    {
        "estadoId": 16,
        "Nome": "Prudentópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Quarto Centenário"
    },
    {
        "estadoId": 16,
        "Nome": "Quatiguá"
    },
    {
        "estadoId": 16,
        "Nome": "Quatro Barras"
    },
    {
        "estadoId": 16,
        "Nome": "Quatro Pontes"
    },
    {
        "estadoId": 16,
        "Nome": "Quedas do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Querência do Norte"
    },
    {
        "estadoId": 16,
        "Nome": "Quinta do Sol"
    },
    {
        "estadoId": 16,
        "Nome": "Quitandinha"
    },
    {
        "estadoId": 16,
        "Nome": "Ramilândia"
    },
    {
        "estadoId": 16,
        "Nome": "Rancho Alegre"
    },
    {
        "estadoId": 16,
        "Nome": "Rancho Alegre D'Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Realeza"
    },
    {
        "estadoId": 16,
        "Nome": "Rebouças"
    },
    {
        "estadoId": 16,
        "Nome": "Renascença"
    },
    {
        "estadoId": 16,
        "Nome": "Reserva"
    },
    {
        "estadoId": 16,
        "Nome": "Reserva do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Ribeirão Claro"
    },
    {
        "estadoId": 16,
        "Nome": "Ribeirão do Pinhal"
    },
    {
        "estadoId": 16,
        "Nome": "Rio Azul"
    },
    {
        "estadoId": 16,
        "Nome": "Rio Bom"
    },
    {
        "estadoId": 16,
        "Nome": "Rio Bonito do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Rio Branco do Ivaí"
    },
    {
        "estadoId": 16,
        "Nome": "Rio Branco do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Rio Negro"
    },
    {
        "estadoId": 16,
        "Nome": "Rolândia"
    },
    {
        "estadoId": 16,
        "Nome": "Roncador"
    },
    {
        "estadoId": 16,
        "Nome": "Rondon"
    },
    {
        "estadoId": 16,
        "Nome": "Rosário do Ivaí"
    },
    {
        "estadoId": 16,
        "Nome": "Sabáudia"
    },
    {
        "estadoId": 16,
        "Nome": "Salgado Filho"
    },
    {
        "estadoId": 16,
        "Nome": "Salto do Itararé"
    },
    {
        "estadoId": 16,
        "Nome": "Salto do Lontra"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Amélia"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Cecília do Pavão"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Cruz de Monte Castelo"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Fé"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Helena"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Inês"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Isabel do Ivaí"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Izabel do Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Lúcia"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Maria do Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Mariana"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Mônica"
    },
    {
        "estadoId": 16,
        "Nome": "Santana do Itararé"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Tereza do Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Santa Terezinha de Itaipu"
    },
    {
        "estadoId": 16,
        "Nome": "Santo Antônio da Platina"
    },
    {
        "estadoId": 16,
        "Nome": "Santo Antônio do Caiuá"
    },
    {
        "estadoId": 16,
        "Nome": "Santo Antônio do Paraíso"
    },
    {
        "estadoId": 16,
        "Nome": "Santo Antônio do Sudoeste"
    },
    {
        "estadoId": 16,
        "Nome": "Santo Inácio"
    },
    {
        "estadoId": 16,
        "Nome": "São Carlos do Ivaí"
    },
    {
        "estadoId": 16,
        "Nome": "São Jerônimo da Serra"
    },
    {
        "estadoId": 16,
        "Nome": "São João"
    },
    {
        "estadoId": 16,
        "Nome": "São João do Caiuá"
    },
    {
        "estadoId": 16,
        "Nome": "São João do Ivaí"
    },
    {
        "estadoId": 16,
        "Nome": "São João do Triunfo"
    },
    {
        "estadoId": 16,
        "Nome": "São Jorge d'Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "São Jorge do Ivaí"
    },
    {
        "estadoId": 16,
        "Nome": "São Jorge do Patrocínio"
    },
    {
        "estadoId": 16,
        "Nome": "São José da Boa Vista"
    },
    {
        "estadoId": 16,
        "Nome": "São José das Palmeiras"
    },
    {
        "estadoId": 16,
        "Nome": "São José dos Pinhais"
    },
    {
        "estadoId": 16,
        "Nome": "São Manoel do Paraná"
    },
    {
        "estadoId": 16,
        "Nome": "São Mateus do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "São Miguel do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "São Pedro do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "São Pedro do Ivaí"
    },
    {
        "estadoId": 16,
        "Nome": "São Pedro do Paraná"
    },
    {
        "estadoId": 16,
        "Nome": "São Sebastião da Amoreira"
    },
    {
        "estadoId": 16,
        "Nome": "São Tomé"
    },
    {
        "estadoId": 16,
        "Nome": "Sapopema"
    },
    {
        "estadoId": 16,
        "Nome": "Sarandi"
    },
    {
        "estadoId": 16,
        "Nome": "Saudade do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Sengés"
    },
    {
        "estadoId": 16,
        "Nome": "Serranópolis do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Sertaneja"
    },
    {
        "estadoId": 16,
        "Nome": "Sertanópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Siqueira Campos"
    },
    {
        "estadoId": 16,
        "Nome": "Sulina"
    },
    {
        "estadoId": 16,
        "Nome": "Tamarana"
    },
    {
        "estadoId": 16,
        "Nome": "Tamboara"
    },
    {
        "estadoId": 16,
        "Nome": "Tapejara"
    },
    {
        "estadoId": 16,
        "Nome": "Tapira"
    },
    {
        "estadoId": 16,
        "Nome": "Teixeira Soares"
    },
    {
        "estadoId": 16,
        "Nome": "Telêmaco Borba"
    },
    {
        "estadoId": 16,
        "Nome": "Terra Boa"
    },
    {
        "estadoId": 16,
        "Nome": "Terra Rica"
    },
    {
        "estadoId": 16,
        "Nome": "Terra Roxa"
    },
    {
        "estadoId": 16,
        "Nome": "Tibagi"
    },
    {
        "estadoId": 16,
        "Nome": "Tijucas do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Toledo"
    },
    {
        "estadoId": 16,
        "Nome": "Tomazina"
    },
    {
        "estadoId": 16,
        "Nome": "Três Barras do Paraná"
    },
    {
        "estadoId": 16,
        "Nome": "Tunas do Paraná"
    },
    {
        "estadoId": 16,
        "Nome": "Tuneiras do Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Tupãssi"
    },
    {
        "estadoId": 16,
        "Nome": "Turvo"
    },
    {
        "estadoId": 16,
        "Nome": "Ubiratã"
    },
    {
        "estadoId": 16,
        "Nome": "Umuarama"
    },
    {
        "estadoId": 16,
        "Nome": "União da Vitória"
    },
    {
        "estadoId": 16,
        "Nome": "Uniflor"
    },
    {
        "estadoId": 16,
        "Nome": "Uraí"
    },
    {
        "estadoId": 16,
        "Nome": "Wenceslau Braz"
    },
    {
        "estadoId": 16,
        "Nome": "Ventania"
    },
    {
        "estadoId": 16,
        "Nome": "Vera Cruz do Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Verê"
    },
    {
        "estadoId": 16,
        "Nome": "Alto Paraíso"
    },
    {
        "estadoId": 16,
        "Nome": "Doutor Ulysses"
    },
    {
        "estadoId": 16,
        "Nome": "Virmond"
    },
    {
        "estadoId": 16,
        "Nome": "Vitorino"
    },
    {
        "estadoId": 16,
        "Nome": "Xambrê"
    },
    {
        "estadoId": 16,
        "Nome": "Abatiá"
    },
    {
        "estadoId": 16,
        "Nome": "Adrianópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Agudos do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Almirante Tamandaré"
    },
    {
        "estadoId": 16,
        "Nome": "Altamira do Paraná"
    },
    {
        "estadoId": 16,
        "Nome": "Altônia"
    },
    {
        "estadoId": 16,
        "Nome": "Alto Paraná"
    },
    {
        "estadoId": 16,
        "Nome": "Alto Piquiri"
    },
    {
        "estadoId": 16,
        "Nome": "Alvorada do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Amaporã"
    },
    {
        "estadoId": 16,
        "Nome": "Ampére"
    },
    {
        "estadoId": 16,
        "Nome": "Anahy"
    },
    {
        "estadoId": 16,
        "Nome": "Andirá"
    },
    {
        "estadoId": 16,
        "Nome": "Ângulo"
    },
    {
        "estadoId": 16,
        "Nome": "Antonina"
    },
    {
        "estadoId": 16,
        "Nome": "Antônio Olinto"
    },
    {
        "estadoId": 16,
        "Nome": "Apucarana"
    },
    {
        "estadoId": 16,
        "Nome": "Arapongas"
    },
    {
        "estadoId": 16,
        "Nome": "Arapoti"
    },
    {
        "estadoId": 16,
        "Nome": "Arapuã"
    },
    {
        "estadoId": 16,
        "Nome": "Araruna"
    },
    {
        "estadoId": 16,
        "Nome": "Araucária"
    },
    {
        "estadoId": 16,
        "Nome": "Ariranha do Ivaí"
    },
    {
        "estadoId": 16,
        "Nome": "Assaí"
    },
    {
        "estadoId": 16,
        "Nome": "Assis Chateaubriand"
    },
    {
        "estadoId": 16,
        "Nome": "Astorga"
    },
    {
        "estadoId": 16,
        "Nome": "Atalaia"
    },
    {
        "estadoId": 16,
        "Nome": "Balsa Nova"
    },
    {
        "estadoId": 16,
        "Nome": "Bandeirantes"
    },
    {
        "estadoId": 16,
        "Nome": "Barbosa Ferraz"
    },
    {
        "estadoId": 16,
        "Nome": "Barracão"
    },
    {
        "estadoId": 16,
        "Nome": "Barra do Jacaré"
    },
    {
        "estadoId": 16,
        "Nome": "Bela Vista da Caroba"
    },
    {
        "estadoId": 16,
        "Nome": "Bela Vista do Paraíso"
    },
    {
        "estadoId": 16,
        "Nome": "Bituruna"
    },
    {
        "estadoId": 16,
        "Nome": "Boa Esperança"
    },
    {
        "estadoId": 16,
        "Nome": "Boa Esperança do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Boa Ventura de São Roque"
    },
    {
        "estadoId": 16,
        "Nome": "Boa Vista da Aparecida"
    },
    {
        "estadoId": 16,
        "Nome": "Bocaiúva do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Bom Jesus do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Bom Sucesso"
    },
    {
        "estadoId": 16,
        "Nome": "Bom Sucesso do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Borrazópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Braganey"
    },
    {
        "estadoId": 16,
        "Nome": "Brasilândia do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Cafeara"
    },
    {
        "estadoId": 16,
        "Nome": "Cafelândia"
    },
    {
        "estadoId": 16,
        "Nome": "Cafezal do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Califórnia"
    },
    {
        "estadoId": 16,
        "Nome": "Cambará"
    },
    {
        "estadoId": 16,
        "Nome": "Cambé"
    },
    {
        "estadoId": 16,
        "Nome": "Cambira"
    },
    {
        "estadoId": 16,
        "Nome": "Campina da Lagoa"
    },
    {
        "estadoId": 16,
        "Nome": "Campina do Simão"
    },
    {
        "estadoId": 16,
        "Nome": "Campina Grande do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Campo Bonito"
    },
    {
        "estadoId": 16,
        "Nome": "Campo do Tenente"
    },
    {
        "estadoId": 16,
        "Nome": "Campo Largo"
    },
    {
        "estadoId": 16,
        "Nome": "Campo Magro"
    },
    {
        "estadoId": 16,
        "Nome": "Campo Mourão"
    },
    {
        "estadoId": 16,
        "Nome": "Cândido de Abreu"
    },
    {
        "estadoId": 16,
        "Nome": "Candói"
    },
    {
        "estadoId": 16,
        "Nome": "Cantagalo"
    },
    {
        "estadoId": 16,
        "Nome": "Capanema"
    },
    {
        "estadoId": 16,
        "Nome": "Capitão Leônidas Marques"
    },
    {
        "estadoId": 16,
        "Nome": "Carambeí"
    },
    {
        "estadoId": 16,
        "Nome": "Carlópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Cascavel"
    },
    {
        "estadoId": 16,
        "Nome": "Castro"
    },
    {
        "estadoId": 16,
        "Nome": "Catanduvas"
    },
    {
        "estadoId": 16,
        "Nome": "Centenário do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Cerro Azul"
    },
    {
        "estadoId": 16,
        "Nome": "Céu Azul"
    },
    {
        "estadoId": 16,
        "Nome": "Chopinzinho"
    },
    {
        "estadoId": 16,
        "Nome": "Cianorte"
    },
    {
        "estadoId": 16,
        "Nome": "Cidade Gaúcha"
    },
    {
        "estadoId": 16,
        "Nome": "Clevelândia"
    },
    {
        "estadoId": 16,
        "Nome": "Colombo"
    },
    {
        "estadoId": 16,
        "Nome": "Colorado"
    },
    {
        "estadoId": 16,
        "Nome": "Congonhinhas"
    },
    {
        "estadoId": 16,
        "Nome": "Conselheiro Mairinck"
    },
    {
        "estadoId": 16,
        "Nome": "Contenda"
    },
    {
        "estadoId": 16,
        "Nome": "Corbélia"
    },
    {
        "estadoId": 16,
        "Nome": "Cornélio Procópio"
    },
    {
        "estadoId": 16,
        "Nome": "Coronel Domingos Soares"
    },
    {
        "estadoId": 16,
        "Nome": "Coronel Vivida"
    },
    {
        "estadoId": 16,
        "Nome": "Corumbataí do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Cruzeiro do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Cruzeiro do Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Cruzeiro do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Cruz Machado"
    },
    {
        "estadoId": 16,
        "Nome": "Cruzmaltina"
    },
    {
        "estadoId": 16,
        "Nome": "Curitiba"
    },
    {
        "estadoId": 16,
        "Nome": "Curiúva"
    },
    {
        "estadoId": 16,
        "Nome": "Diamante do Norte"
    },
    {
        "estadoId": 16,
        "Nome": "Diamante do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Diamante D'Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Dois Vizinhos"
    },
    {
        "estadoId": 16,
        "Nome": "Douradina"
    },
    {
        "estadoId": 16,
        "Nome": "Doutor Camargo"
    },
    {
        "estadoId": 16,
        "Nome": "Enéas Marques"
    },
    {
        "estadoId": 16,
        "Nome": "Engenheiro Beltrão"
    },
    {
        "estadoId": 16,
        "Nome": "Esperança Nova"
    },
    {
        "estadoId": 16,
        "Nome": "Entre Rios do Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Espigão Alto do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Farol"
    },
    {
        "estadoId": 16,
        "Nome": "Faxinal"
    },
    {
        "estadoId": 16,
        "Nome": "Fazenda Rio Grande"
    },
    {
        "estadoId": 16,
        "Nome": "Fênix"
    },
    {
        "estadoId": 16,
        "Nome": "Fernandes Pinheiro"
    },
    {
        "estadoId": 16,
        "Nome": "Figueira"
    },
    {
        "estadoId": 16,
        "Nome": "Floraí"
    },
    {
        "estadoId": 16,
        "Nome": "Flor da Serra do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Floresta"
    },
    {
        "estadoId": 16,
        "Nome": "Florestópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Flórida"
    },
    {
        "estadoId": 16,
        "Nome": "Formosa do Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Foz do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Francisco Alves"
    },
    {
        "estadoId": 16,
        "Nome": "Francisco Beltrão"
    },
    {
        "estadoId": 16,
        "Nome": "Foz do Jordão"
    },
    {
        "estadoId": 16,
        "Nome": "General Carneiro"
    },
    {
        "estadoId": 16,
        "Nome": "Godoy Moreira"
    },
    {
        "estadoId": 16,
        "Nome": "Goioerê"
    },
    {
        "estadoId": 16,
        "Nome": "Goioxim"
    },
    {
        "estadoId": 16,
        "Nome": "Grandes Rios"
    },
    {
        "estadoId": 16,
        "Nome": "Guaíra"
    },
    {
        "estadoId": 16,
        "Nome": "Guairaçá"
    },
    {
        "estadoId": 16,
        "Nome": "Guamiranga"
    },
    {
        "estadoId": 16,
        "Nome": "Guapirama"
    },
    {
        "estadoId": 16,
        "Nome": "Guaporema"
    },
    {
        "estadoId": 16,
        "Nome": "Guaraci"
    },
    {
        "estadoId": 16,
        "Nome": "Guaraniaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Guarapuava"
    },
    {
        "estadoId": 16,
        "Nome": "Guaraqueçaba"
    },
    {
        "estadoId": 16,
        "Nome": "Guaratuba"
    },
    {
        "estadoId": 16,
        "Nome": "Honório Serpa"
    },
    {
        "estadoId": 16,
        "Nome": "Ibaiti"
    },
    {
        "estadoId": 16,
        "Nome": "Ibema"
    },
    {
        "estadoId": 16,
        "Nome": "Ibiporã"
    },
    {
        "estadoId": 16,
        "Nome": "Icaraíma"
    },
    {
        "estadoId": 16,
        "Nome": "Iguaraçu"
    },
    {
        "estadoId": 16,
        "Nome": "Iguatu"
    },
    {
        "estadoId": 16,
        "Nome": "Imbaú"
    },
    {
        "estadoId": 16,
        "Nome": "Imbituva"
    },
    {
        "estadoId": 16,
        "Nome": "Inácio Martins"
    },
    {
        "estadoId": 16,
        "Nome": "Inajá"
    },
    {
        "estadoId": 16,
        "Nome": "Indianópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Ipiranga"
    },
    {
        "estadoId": 16,
        "Nome": "Iporã"
    },
    {
        "estadoId": 16,
        "Nome": "Iracema do Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Irati"
    },
    {
        "estadoId": 16,
        "Nome": "Iretama"
    },
    {
        "estadoId": 16,
        "Nome": "Itaguajé"
    },
    {
        "estadoId": 16,
        "Nome": "Itaipulândia"
    },
    {
        "estadoId": 16,
        "Nome": "Itambaracá"
    },
    {
        "estadoId": 16,
        "Nome": "Itambé"
    },
    {
        "estadoId": 16,
        "Nome": "Itapejara d'Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Itaperuçu"
    },
    {
        "estadoId": 16,
        "Nome": "Itaúna do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Ivaí"
    },
    {
        "estadoId": 16,
        "Nome": "Ivaiporã"
    },
    {
        "estadoId": 16,
        "Nome": "Ivaté"
    },
    {
        "estadoId": 16,
        "Nome": "Ivatuba"
    },
    {
        "estadoId": 16,
        "Nome": "Jaboti"
    },
    {
        "estadoId": 16,
        "Nome": "Jacarezinho"
    },
    {
        "estadoId": 16,
        "Nome": "Jaguapitã"
    },
    {
        "estadoId": 16,
        "Nome": "Jaguariaíva"
    },
    {
        "estadoId": 16,
        "Nome": "Jandaia do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Janiópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Japira"
    },
    {
        "estadoId": 16,
        "Nome": "Japurá"
    },
    {
        "estadoId": 16,
        "Nome": "Jardim Alegre"
    },
    {
        "estadoId": 16,
        "Nome": "Jardim Olinda"
    },
    {
        "estadoId": 16,
        "Nome": "Jataizinho"
    },
    {
        "estadoId": 16,
        "Nome": "Jesuítas"
    },
    {
        "estadoId": 16,
        "Nome": "Joaquim Távora"
    },
    {
        "estadoId": 16,
        "Nome": "Jundiaí do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Juranda"
    },
    {
        "estadoId": 16,
        "Nome": "Jussara"
    },
    {
        "estadoId": 16,
        "Nome": "Kaloré"
    },
    {
        "estadoId": 16,
        "Nome": "Lapa"
    },
    {
        "estadoId": 16,
        "Nome": "Laranjal"
    },
    {
        "estadoId": 16,
        "Nome": "Laranjeiras do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Leópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Lidianópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Lindoeste"
    },
    {
        "estadoId": 16,
        "Nome": "Loanda"
    },
    {
        "estadoId": 16,
        "Nome": "Lobato"
    },
    {
        "estadoId": 16,
        "Nome": "Londrina"
    },
    {
        "estadoId": 16,
        "Nome": "Luiziana"
    },
    {
        "estadoId": 16,
        "Nome": "Lunardelli"
    },
    {
        "estadoId": 16,
        "Nome": "Lupionópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Mallet"
    },
    {
        "estadoId": 16,
        "Nome": "Mamborê"
    },
    {
        "estadoId": 16,
        "Nome": "Mandaguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Mandaguari"
    },
    {
        "estadoId": 16,
        "Nome": "Mandirituba"
    },
    {
        "estadoId": 16,
        "Nome": "Manfrinópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Mangueirinha"
    },
    {
        "estadoId": 16,
        "Nome": "Manoel Ribas"
    },
    {
        "estadoId": 16,
        "Nome": "Marechal Cândido Rondon"
    },
    {
        "estadoId": 16,
        "Nome": "Maria Helena"
    },
    {
        "estadoId": 16,
        "Nome": "Marialva"
    },
    {
        "estadoId": 16,
        "Nome": "Marilândia do Sul"
    },
    {
        "estadoId": 16,
        "Nome": "Marilena"
    },
    {
        "estadoId": 16,
        "Nome": "Mariluz"
    },
    {
        "estadoId": 16,
        "Nome": "Maringá"
    },
    {
        "estadoId": 16,
        "Nome": "Mariópolis"
    },
    {
        "estadoId": 16,
        "Nome": "Maripá"
    },
    {
        "estadoId": 16,
        "Nome": "Marmeleiro"
    },
    {
        "estadoId": 16,
        "Nome": "Marquinho"
    },
    {
        "estadoId": 16,
        "Nome": "Marumbi"
    },
    {
        "estadoId": 16,
        "Nome": "Matelândia"
    },
    {
        "estadoId": 16,
        "Nome": "Matinhos"
    },
    {
        "estadoId": 16,
        "Nome": "Mato Rico"
    },
    {
        "estadoId": 16,
        "Nome": "Mauá da Serra"
    },
    {
        "estadoId": 16,
        "Nome": "Medianeira"
    },
    {
        "estadoId": 16,
        "Nome": "Mercedes"
    },
    {
        "estadoId": 16,
        "Nome": "Mirador"
    },
    {
        "estadoId": 16,
        "Nome": "Miraselva"
    },
    {
        "estadoId": 16,
        "Nome": "Missal"
    },
    {
        "estadoId": 16,
        "Nome": "Moreira Sales"
    },
    {
        "estadoId": 16,
        "Nome": "Morretes"
    },
    {
        "estadoId": 16,
        "Nome": "Munhoz de Melo"
    },
    {
        "estadoId": 16,
        "Nome": "Nossa Senhora das Graças"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Aliança do Ivaí"
    },
    {
        "estadoId": 16,
        "Nome": "Nova América da Colina"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Aurora"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Cantu"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Esperança"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Esperança do Sudoeste"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Fátima"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Laranjeiras"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Londrina"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Olímpia"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Santa Bárbara"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Santa Rosa"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Prata do Iguaçu"
    },
    {
        "estadoId": 16,
        "Nome": "Nova Tebas"
    },
    {
        "estadoId": 16,
        "Nome": "Novo Itacolomi"
    },
    {
        "estadoId": 16,
        "Nome": "Ortigueira"
    },
    {
        "estadoId": 16,
        "Nome": "Ourizona"
    },
    {
        "estadoId": 16,
        "Nome": "Ouro Verde do Oeste"
    },
    {
        "estadoId": 16,
        "Nome": "Paiçandu"
    },
    {
        "estadoId": 24,
        "Nome": "Abdon Batista"
    },
    {
        "estadoId": 24,
        "Nome": "Abelardo Luz"
    },
    {
        "estadoId": 24,
        "Nome": "Agrolândia"
    },
    {
        "estadoId": 24,
        "Nome": "Agronômica"
    },
    {
        "estadoId": 24,
        "Nome": "Água Doce"
    },
    {
        "estadoId": 24,
        "Nome": "Águas de Chapecó"
    },
    {
        "estadoId": 24,
        "Nome": "Águas Frias"
    },
    {
        "estadoId": 24,
        "Nome": "Águas Mornas"
    },
    {
        "estadoId": 24,
        "Nome": "Alfredo Wagner"
    },
    {
        "estadoId": 24,
        "Nome": "Alto Bela Vista"
    },
    {
        "estadoId": 24,
        "Nome": "Anchieta"
    },
    {
        "estadoId": 24,
        "Nome": "Angelina"
    },
    {
        "estadoId": 24,
        "Nome": "Anita Garibaldi"
    },
    {
        "estadoId": 24,
        "Nome": "Anitápolis"
    },
    {
        "estadoId": 24,
        "Nome": "Antônio Carlos"
    },
    {
        "estadoId": 24,
        "Nome": "Apiúna"
    },
    {
        "estadoId": 24,
        "Nome": "Arabutã"
    },
    {
        "estadoId": 24,
        "Nome": "Araquari"
    },
    {
        "estadoId": 24,
        "Nome": "Araranguá"
    },
    {
        "estadoId": 24,
        "Nome": "Armazém"
    },
    {
        "estadoId": 24,
        "Nome": "Arroio Trinta"
    },
    {
        "estadoId": 24,
        "Nome": "Arvoredo"
    },
    {
        "estadoId": 24,
        "Nome": "Ascurra"
    },
    {
        "estadoId": 24,
        "Nome": "Atalanta"
    },
    {
        "estadoId": 24,
        "Nome": "Aurora"
    },
    {
        "estadoId": 24,
        "Nome": "Balneário Arroio do Silva"
    },
    {
        "estadoId": 24,
        "Nome": "Balneário Camboriú"
    },
    {
        "estadoId": 24,
        "Nome": "Balneário Barra do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Balneário Gaivota"
    },
    {
        "estadoId": 24,
        "Nome": "Bandeirante"
    },
    {
        "estadoId": 24,
        "Nome": "Barra Bonita"
    },
    {
        "estadoId": 24,
        "Nome": "Barra Velha"
    },
    {
        "estadoId": 24,
        "Nome": "Bela Vista do Toldo"
    },
    {
        "estadoId": 24,
        "Nome": "Belmonte"
    },
    {
        "estadoId": 24,
        "Nome": "Benedito Novo"
    },
    {
        "estadoId": 24,
        "Nome": "Biguaçu"
    },
    {
        "estadoId": 24,
        "Nome": "Blumenau"
    },
    {
        "estadoId": 24,
        "Nome": "Bocaina do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Bombinhas"
    },
    {
        "estadoId": 24,
        "Nome": "Bom Jardim da Serra"
    },
    {
        "estadoId": 24,
        "Nome": "Bom Jesus"
    },
    {
        "estadoId": 24,
        "Nome": "Bom Jesus do Oeste"
    },
    {
        "estadoId": 24,
        "Nome": "Bom Retiro"
    },
    {
        "estadoId": 24,
        "Nome": "Botuverá"
    },
    {
        "estadoId": 24,
        "Nome": "Braço do Norte"
    },
    {
        "estadoId": 24,
        "Nome": "Braço do Trombudo"
    },
    {
        "estadoId": 24,
        "Nome": "Brunópolis"
    },
    {
        "estadoId": 24,
        "Nome": "Brusque"
    },
    {
        "estadoId": 24,
        "Nome": "Caçador"
    },
    {
        "estadoId": 24,
        "Nome": "Caibi"
    },
    {
        "estadoId": 24,
        "Nome": "Calmon"
    },
    {
        "estadoId": 24,
        "Nome": "Camboriú"
    },
    {
        "estadoId": 24,
        "Nome": "Capão Alto"
    },
    {
        "estadoId": 24,
        "Nome": "Campo Alegre"
    },
    {
        "estadoId": 24,
        "Nome": "Campo Belo do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Campo Erê"
    },
    {
        "estadoId": 24,
        "Nome": "Campos Novos"
    },
    {
        "estadoId": 24,
        "Nome": "Canelinha"
    },
    {
        "estadoId": 24,
        "Nome": "Canoinhas"
    },
    {
        "estadoId": 24,
        "Nome": "Capinzal"
    },
    {
        "estadoId": 24,
        "Nome": "Capivari de Baixo"
    },
    {
        "estadoId": 24,
        "Nome": "Catanduvas"
    },
    {
        "estadoId": 24,
        "Nome": "Caxambu do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Celso Ramos"
    },
    {
        "estadoId": 24,
        "Nome": "Cerro Negro"
    },
    {
        "estadoId": 24,
        "Nome": "Chapadão do Lageado"
    },
    {
        "estadoId": 24,
        "Nome": "Chapecó"
    },
    {
        "estadoId": 24,
        "Nome": "Cocal do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Concórdia"
    },
    {
        "estadoId": 24,
        "Nome": "Cordilheira Alta"
    },
    {
        "estadoId": 24,
        "Nome": "Coronel Freitas"
    },
    {
        "estadoId": 24,
        "Nome": "Coronel Martins"
    },
    {
        "estadoId": 24,
        "Nome": "Corupá"
    },
    {
        "estadoId": 24,
        "Nome": "Correia Pinto"
    },
    {
        "estadoId": 24,
        "Nome": "Criciúma"
    },
    {
        "estadoId": 24,
        "Nome": "Cunha Porã"
    },
    {
        "estadoId": 24,
        "Nome": "Cunhataí"
    },
    {
        "estadoId": 24,
        "Nome": "Curitibanos"
    },
    {
        "estadoId": 24,
        "Nome": "Descanso"
    },
    {
        "estadoId": 24,
        "Nome": "Dionísio Cerqueira"
    },
    {
        "estadoId": 24,
        "Nome": "Dona Emma"
    },
    {
        "estadoId": 24,
        "Nome": "Doutor Pedrinho"
    },
    {
        "estadoId": 24,
        "Nome": "Entre Rios"
    },
    {
        "estadoId": 24,
        "Nome": "Ermo"
    },
    {
        "estadoId": 24,
        "Nome": "Erval Velho"
    },
    {
        "estadoId": 24,
        "Nome": "Faxinal dos Guedes"
    },
    {
        "estadoId": 24,
        "Nome": "Flor do Sertão"
    },
    {
        "estadoId": 24,
        "Nome": "Florianópolis"
    },
    {
        "estadoId": 24,
        "Nome": "Formosa do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Forquilhinha"
    },
    {
        "estadoId": 24,
        "Nome": "Fraiburgo"
    },
    {
        "estadoId": 24,
        "Nome": "Frei Rogério"
    },
    {
        "estadoId": 24,
        "Nome": "Galvão"
    },
    {
        "estadoId": 24,
        "Nome": "Garopaba"
    },
    {
        "estadoId": 24,
        "Nome": "Garuva"
    },
    {
        "estadoId": 24,
        "Nome": "Gaspar"
    },
    {
        "estadoId": 24,
        "Nome": "Governador Celso Ramos"
    },
    {
        "estadoId": 24,
        "Nome": "Grão-Pará"
    },
    {
        "estadoId": 24,
        "Nome": "Gravatal"
    },
    {
        "estadoId": 24,
        "Nome": "Guabiruba"
    },
    {
        "estadoId": 24,
        "Nome": "Guaraciaba"
    },
    {
        "estadoId": 24,
        "Nome": "Guaramirim"
    },
    {
        "estadoId": 24,
        "Nome": "Guarujá do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Guatambú"
    },
    {
        "estadoId": 24,
        "Nome": "Herval d'Oeste"
    },
    {
        "estadoId": 24,
        "Nome": "Ibiam"
    },
    {
        "estadoId": 24,
        "Nome": "Ibicaré"
    },
    {
        "estadoId": 24,
        "Nome": "Ibirama"
    },
    {
        "estadoId": 24,
        "Nome": "Içara"
    },
    {
        "estadoId": 24,
        "Nome": "Ilhota"
    },
    {
        "estadoId": 24,
        "Nome": "Imaruí"
    },
    {
        "estadoId": 24,
        "Nome": "Imbituba"
    },
    {
        "estadoId": 24,
        "Nome": "Imbuia"
    },
    {
        "estadoId": 24,
        "Nome": "Indaial"
    },
    {
        "estadoId": 24,
        "Nome": "Iomerê"
    },
    {
        "estadoId": 24,
        "Nome": "Ipira"
    },
    {
        "estadoId": 24,
        "Nome": "Iporã do Oeste"
    },
    {
        "estadoId": 24,
        "Nome": "Ipuaçu"
    },
    {
        "estadoId": 24,
        "Nome": "Ipumirim"
    },
    {
        "estadoId": 24,
        "Nome": "Iraceminha"
    },
    {
        "estadoId": 24,
        "Nome": "Irani"
    },
    {
        "estadoId": 24,
        "Nome": "Irati"
    },
    {
        "estadoId": 24,
        "Nome": "Irineópolis"
    },
    {
        "estadoId": 24,
        "Nome": "Itá"
    },
    {
        "estadoId": 24,
        "Nome": "Itaiópolis"
    },
    {
        "estadoId": 24,
        "Nome": "Itajaí"
    },
    {
        "estadoId": 24,
        "Nome": "Itapema"
    },
    {
        "estadoId": 24,
        "Nome": "Itapiranga"
    },
    {
        "estadoId": 24,
        "Nome": "Itapoá"
    },
    {
        "estadoId": 24,
        "Nome": "Ituporanga"
    },
    {
        "estadoId": 24,
        "Nome": "Jaborá"
    },
    {
        "estadoId": 24,
        "Nome": "Jacinto Machado"
    },
    {
        "estadoId": 24,
        "Nome": "Jaguaruna"
    },
    {
        "estadoId": 24,
        "Nome": "Jaraguá do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Jardinópolis"
    },
    {
        "estadoId": 24,
        "Nome": "Joaçaba"
    },
    {
        "estadoId": 24,
        "Nome": "Joinville"
    },
    {
        "estadoId": 24,
        "Nome": "José Boiteux"
    },
    {
        "estadoId": 24,
        "Nome": "Jupiá"
    },
    {
        "estadoId": 24,
        "Nome": "Lacerdópolis"
    },
    {
        "estadoId": 24,
        "Nome": "Lages"
    },
    {
        "estadoId": 24,
        "Nome": "Laguna"
    },
    {
        "estadoId": 24,
        "Nome": "Lajeado Grande"
    },
    {
        "estadoId": 24,
        "Nome": "Laurentino"
    },
    {
        "estadoId": 24,
        "Nome": "Lauro Müller"
    },
    {
        "estadoId": 24,
        "Nome": "Lebon Régis"
    },
    {
        "estadoId": 24,
        "Nome": "Leoberto Leal"
    },
    {
        "estadoId": 24,
        "Nome": "Lindóia do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Lontras"
    },
    {
        "estadoId": 24,
        "Nome": "Luiz Alves"
    },
    {
        "estadoId": 24,
        "Nome": "Luzerna"
    },
    {
        "estadoId": 24,
        "Nome": "Macieira"
    },
    {
        "estadoId": 24,
        "Nome": "Mafra"
    },
    {
        "estadoId": 24,
        "Nome": "Major Gercino"
    },
    {
        "estadoId": 24,
        "Nome": "Major Vieira"
    },
    {
        "estadoId": 24,
        "Nome": "Maracajá"
    },
    {
        "estadoId": 24,
        "Nome": "Maravilha"
    },
    {
        "estadoId": 24,
        "Nome": "Marema"
    },
    {
        "estadoId": 24,
        "Nome": "Massaranduba"
    },
    {
        "estadoId": 24,
        "Nome": "Matos Costa"
    },
    {
        "estadoId": 24,
        "Nome": "Meleiro"
    },
    {
        "estadoId": 24,
        "Nome": "Mirim Doce"
    },
    {
        "estadoId": 24,
        "Nome": "Modelo"
    },
    {
        "estadoId": 24,
        "Nome": "Mondaí"
    },
    {
        "estadoId": 24,
        "Nome": "Monte Carlo"
    },
    {
        "estadoId": 24,
        "Nome": "Monte Castelo"
    },
    {
        "estadoId": 24,
        "Nome": "Morro da Fumaça"
    },
    {
        "estadoId": 24,
        "Nome": "Morro Grande"
    },
    {
        "estadoId": 24,
        "Nome": "Navegantes"
    },
    {
        "estadoId": 24,
        "Nome": "Nova Erechim"
    },
    {
        "estadoId": 24,
        "Nome": "Nova Itaberaba"
    },
    {
        "estadoId": 24,
        "Nome": "Nova Trento"
    },
    {
        "estadoId": 24,
        "Nome": "Nova Veneza"
    },
    {
        "estadoId": 24,
        "Nome": "Novo Horizonte"
    },
    {
        "estadoId": 24,
        "Nome": "Orleans"
    },
    {
        "estadoId": 24,
        "Nome": "Otacílio Costa"
    },
    {
        "estadoId": 24,
        "Nome": "Ouro"
    },
    {
        "estadoId": 24,
        "Nome": "Ouro Verde"
    },
    {
        "estadoId": 24,
        "Nome": "Paial"
    },
    {
        "estadoId": 24,
        "Nome": "Painel"
    },
    {
        "estadoId": 24,
        "Nome": "Palhoça"
    },
    {
        "estadoId": 24,
        "Nome": "Palma Sola"
    },
    {
        "estadoId": 24,
        "Nome": "Palmeira"
    },
    {
        "estadoId": 24,
        "Nome": "Palmitos"
    },
    {
        "estadoId": 24,
        "Nome": "Papanduva"
    },
    {
        "estadoId": 24,
        "Nome": "Paraíso"
    },
    {
        "estadoId": 24,
        "Nome": "Passo de Torres"
    },
    {
        "estadoId": 24,
        "Nome": "Passos Maia"
    },
    {
        "estadoId": 24,
        "Nome": "Paulo Lopes"
    },
    {
        "estadoId": 24,
        "Nome": "Pedras Grandes"
    },
    {
        "estadoId": 24,
        "Nome": "Penha"
    },
    {
        "estadoId": 24,
        "Nome": "Peritiba"
    },
    {
        "estadoId": 24,
        "Nome": "Pescaria Brava"
    },
    {
        "estadoId": 24,
        "Nome": "Petrolândia"
    },
    {
        "estadoId": 24,
        "Nome": "Balneário Piçarras"
    },
    {
        "estadoId": 24,
        "Nome": "Pinhalzinho"
    },
    {
        "estadoId": 24,
        "Nome": "Pinheiro Preto"
    },
    {
        "estadoId": 24,
        "Nome": "Piratuba"
    },
    {
        "estadoId": 24,
        "Nome": "Planalto Alegre"
    },
    {
        "estadoId": 24,
        "Nome": "Pomerode"
    },
    {
        "estadoId": 24,
        "Nome": "Ponte Alta"
    },
    {
        "estadoId": 24,
        "Nome": "Ponte Alta do Norte"
    },
    {
        "estadoId": 24,
        "Nome": "Ponte Serrada"
    },
    {
        "estadoId": 24,
        "Nome": "Porto Belo"
    },
    {
        "estadoId": 24,
        "Nome": "Porto União"
    },
    {
        "estadoId": 24,
        "Nome": "Pouso Redondo"
    },
    {
        "estadoId": 24,
        "Nome": "Praia Grande"
    },
    {
        "estadoId": 24,
        "Nome": "Presidente Castello Branco"
    },
    {
        "estadoId": 24,
        "Nome": "Presidente Getúlio"
    },
    {
        "estadoId": 24,
        "Nome": "Presidente Nereu"
    },
    {
        "estadoId": 24,
        "Nome": "Princesa"
    },
    {
        "estadoId": 24,
        "Nome": "Quilombo"
    },
    {
        "estadoId": 24,
        "Nome": "Rancho Queimado"
    },
    {
        "estadoId": 24,
        "Nome": "Rio das Antas"
    },
    {
        "estadoId": 24,
        "Nome": "Rio do Campo"
    },
    {
        "estadoId": 24,
        "Nome": "Rio do Oeste"
    },
    {
        "estadoId": 24,
        "Nome": "Rio dos Cedros"
    },
    {
        "estadoId": 24,
        "Nome": "Rio do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Rio Fortuna"
    },
    {
        "estadoId": 24,
        "Nome": "Rio Negrinho"
    },
    {
        "estadoId": 24,
        "Nome": "Rio Rufino"
    },
    {
        "estadoId": 24,
        "Nome": "Riqueza"
    },
    {
        "estadoId": 24,
        "Nome": "Rodeio"
    },
    {
        "estadoId": 24,
        "Nome": "Romelândia"
    },
    {
        "estadoId": 24,
        "Nome": "Salete"
    },
    {
        "estadoId": 24,
        "Nome": "Saltinho"
    },
    {
        "estadoId": 24,
        "Nome": "Salto Veloso"
    },
    {
        "estadoId": 24,
        "Nome": "Sangão"
    },
    {
        "estadoId": 24,
        "Nome": "Santa Cecília"
    },
    {
        "estadoId": 24,
        "Nome": "Santa Helena"
    },
    {
        "estadoId": 24,
        "Nome": "Santa Rosa de Lima"
    },
    {
        "estadoId": 24,
        "Nome": "Santa Rosa do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Santa Terezinha"
    },
    {
        "estadoId": 24,
        "Nome": "Santa Terezinha do Progresso"
    },
    {
        "estadoId": 24,
        "Nome": "Santiago do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Santo Amaro da Imperatriz"
    },
    {
        "estadoId": 24,
        "Nome": "São Bernardino"
    },
    {
        "estadoId": 24,
        "Nome": "São Bento do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "São Bonifácio"
    },
    {
        "estadoId": 24,
        "Nome": "São Carlos"
    },
    {
        "estadoId": 24,
        "Nome": "São Cristóvão do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "São Domingos"
    },
    {
        "estadoId": 24,
        "Nome": "São Francisco do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "São João do Oeste"
    },
    {
        "estadoId": 24,
        "Nome": "São João Batista"
    },
    {
        "estadoId": 24,
        "Nome": "São João do Itaperiú"
    },
    {
        "estadoId": 24,
        "Nome": "São João do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "São Joaquim"
    },
    {
        "estadoId": 24,
        "Nome": "São José"
    },
    {
        "estadoId": 24,
        "Nome": "São José do Cedro"
    },
    {
        "estadoId": 24,
        "Nome": "São José do Cerrito"
    },
    {
        "estadoId": 24,
        "Nome": "São Lourenço do Oeste"
    },
    {
        "estadoId": 24,
        "Nome": "São Ludgero"
    },
    {
        "estadoId": 24,
        "Nome": "São Martinho"
    },
    {
        "estadoId": 24,
        "Nome": "São Miguel da Boa Vista"
    },
    {
        "estadoId": 24,
        "Nome": "São Miguel do Oeste"
    },
    {
        "estadoId": 24,
        "Nome": "São Pedro de Alcântara"
    },
    {
        "estadoId": 24,
        "Nome": "Saudades"
    },
    {
        "estadoId": 24,
        "Nome": "Schroeder"
    },
    {
        "estadoId": 24,
        "Nome": "Seara"
    },
    {
        "estadoId": 24,
        "Nome": "Serra Alta"
    },
    {
        "estadoId": 24,
        "Nome": "Siderópolis"
    },
    {
        "estadoId": 24,
        "Nome": "Sombrio"
    },
    {
        "estadoId": 24,
        "Nome": "Sul Brasil"
    },
    {
        "estadoId": 24,
        "Nome": "Taió"
    },
    {
        "estadoId": 24,
        "Nome": "Tangará"
    },
    {
        "estadoId": 24,
        "Nome": "Tigrinhos"
    },
    {
        "estadoId": 24,
        "Nome": "Tijucas"
    },
    {
        "estadoId": 24,
        "Nome": "Timbé do Sul"
    },
    {
        "estadoId": 24,
        "Nome": "Timbó"
    },
    {
        "estadoId": 24,
        "Nome": "Timbó Grande"
    },
    {
        "estadoId": 24,
        "Nome": "Três Barras"
    },
    {
        "estadoId": 24,
        "Nome": "Treviso"
    },
    {
        "estadoId": 24,
        "Nome": "Treze de Maio"
    },
    {
        "estadoId": 24,
        "Nome": "Treze Tílias"
    },
    {
        "estadoId": 24,
        "Nome": "Trombudo Central"
    },
    {
        "estadoId": 24,
        "Nome": "Tubarão"
    },
    {
        "estadoId": 24,
        "Nome": "Tunápolis"
    },
    {
        "estadoId": 24,
        "Nome": "Turvo"
    },
    {
        "estadoId": 24,
        "Nome": "União do Oeste"
    },
    {
        "estadoId": 24,
        "Nome": "Urubici"
    },
    {
        "estadoId": 24,
        "Nome": "Urupema"
    },
    {
        "estadoId": 24,
        "Nome": "Urussanga"
    },
    {
        "estadoId": 24,
        "Nome": "Vargeão"
    },
    {
        "estadoId": 24,
        "Nome": "Vargem"
    },
    {
        "estadoId": 24,
        "Nome": "Vargem Bonita"
    },
    {
        "estadoId": 24,
        "Nome": "Vidal Ramos"
    },
    {
        "estadoId": 24,
        "Nome": "Videira"
    },
    {
        "estadoId": 24,
        "Nome": "Vitor Meireles"
    },
    {
        "estadoId": 24,
        "Nome": "Witmarsum"
    },
    {
        "estadoId": 24,
        "Nome": "Xanxerê"
    },
    {
        "estadoId": 24,
        "Nome": "Xavantina"
    },
    {
        "estadoId": 24,
        "Nome": "Xaxim"
    },
    {
        "estadoId": 24,
        "Nome": "Zortéa"
    },
    {
        "estadoId": 24,
        "Nome": "Balneário Rincão"
    },
    {
        "estadoId": 21,
        "Nome": "Aceguá"
    },
    {
        "estadoId": 21,
        "Nome": "Água Santa"
    },
    {
        "estadoId": 21,
        "Nome": "Agudo"
    },
    {
        "estadoId": 21,
        "Nome": "Ajuricaba"
    },
    {
        "estadoId": 21,
        "Nome": "Alecrim"
    },
    {
        "estadoId": 21,
        "Nome": "Alegrete"
    },
    {
        "estadoId": 21,
        "Nome": "Alegria"
    },
    {
        "estadoId": 21,
        "Nome": "Almirante Tamandaré do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Alpestre"
    },
    {
        "estadoId": 21,
        "Nome": "Alto Alegre"
    },
    {
        "estadoId": 21,
        "Nome": "Alto Feliz"
    },
    {
        "estadoId": 21,
        "Nome": "Alvorada"
    },
    {
        "estadoId": 21,
        "Nome": "Amaral Ferrador"
    },
    {
        "estadoId": 21,
        "Nome": "Ametista do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "André da Rocha"
    },
    {
        "estadoId": 21,
        "Nome": "Anta Gorda"
    },
    {
        "estadoId": 21,
        "Nome": "Antônio Prado"
    },
    {
        "estadoId": 21,
        "Nome": "Arambaré"
    },
    {
        "estadoId": 21,
        "Nome": "Araricá"
    },
    {
        "estadoId": 21,
        "Nome": "Aratiba"
    },
    {
        "estadoId": 21,
        "Nome": "Arroio do Meio"
    },
    {
        "estadoId": 21,
        "Nome": "Arroio do Sal"
    },
    {
        "estadoId": 21,
        "Nome": "Arroio do Padre"
    },
    {
        "estadoId": 21,
        "Nome": "Arroio dos Ratos"
    },
    {
        "estadoId": 21,
        "Nome": "Arroio do Tigre"
    },
    {
        "estadoId": 21,
        "Nome": "Arroio Grande"
    },
    {
        "estadoId": 21,
        "Nome": "Arvorezinha"
    },
    {
        "estadoId": 21,
        "Nome": "Augusto Pestana"
    },
    {
        "estadoId": 21,
        "Nome": "Áurea"
    },
    {
        "estadoId": 21,
        "Nome": "Bagé"
    },
    {
        "estadoId": 21,
        "Nome": "Balneário Pinhal"
    },
    {
        "estadoId": 21,
        "Nome": "Barão"
    },
    {
        "estadoId": 21,
        "Nome": "Barão de Cotegipe"
    },
    {
        "estadoId": 21,
        "Nome": "Barão do Triunfo"
    },
    {
        "estadoId": 21,
        "Nome": "Barracão"
    },
    {
        "estadoId": 21,
        "Nome": "Barra do Guarita"
    },
    {
        "estadoId": 21,
        "Nome": "Barra do Quaraí"
    },
    {
        "estadoId": 21,
        "Nome": "Barra do Ribeiro"
    },
    {
        "estadoId": 21,
        "Nome": "Barra do Rio Azul"
    },
    {
        "estadoId": 21,
        "Nome": "Barra Funda"
    },
    {
        "estadoId": 21,
        "Nome": "Barros Cassal"
    },
    {
        "estadoId": 21,
        "Nome": "Benjamin Constant do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Bento Gonçalves"
    },
    {
        "estadoId": 21,
        "Nome": "Boa Vista das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "Boa Vista do Buricá"
    },
    {
        "estadoId": 21,
        "Nome": "Boa Vista do Cadeado"
    },
    {
        "estadoId": 21,
        "Nome": "Boa Vista do Incra"
    },
    {
        "estadoId": 21,
        "Nome": "Boa Vista do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Bom Jesus"
    },
    {
        "estadoId": 21,
        "Nome": "Bom Princípio"
    },
    {
        "estadoId": 21,
        "Nome": "Bom Progresso"
    },
    {
        "estadoId": 21,
        "Nome": "Bom Retiro do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Boqueirão do Leão"
    },
    {
        "estadoId": 21,
        "Nome": "Bossoroca"
    },
    {
        "estadoId": 21,
        "Nome": "Bozano"
    },
    {
        "estadoId": 21,
        "Nome": "Braga"
    },
    {
        "estadoId": 21,
        "Nome": "Brochier"
    },
    {
        "estadoId": 21,
        "Nome": "Butiá"
    },
    {
        "estadoId": 21,
        "Nome": "Caçapava do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Cacequi"
    },
    {
        "estadoId": 21,
        "Nome": "Cachoeira do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Cachoeirinha"
    },
    {
        "estadoId": 21,
        "Nome": "Cacique Doble"
    },
    {
        "estadoId": 21,
        "Nome": "Caibaté"
    },
    {
        "estadoId": 21,
        "Nome": "Caiçara"
    },
    {
        "estadoId": 21,
        "Nome": "Camaquã"
    },
    {
        "estadoId": 21,
        "Nome": "Camargo"
    },
    {
        "estadoId": 21,
        "Nome": "Cambará do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Campestre da Serra"
    },
    {
        "estadoId": 21,
        "Nome": "Campina das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "Campinas do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Campo Bom"
    },
    {
        "estadoId": 21,
        "Nome": "Campo Novo"
    },
    {
        "estadoId": 21,
        "Nome": "Campos Borges"
    },
    {
        "estadoId": 21,
        "Nome": "Candelária"
    },
    {
        "estadoId": 21,
        "Nome": "Cândido Godói"
    },
    {
        "estadoId": 21,
        "Nome": "Candiota"
    },
    {
        "estadoId": 21,
        "Nome": "Canela"
    },
    {
        "estadoId": 21,
        "Nome": "Canguçu"
    },
    {
        "estadoId": 21,
        "Nome": "Canoas"
    },
    {
        "estadoId": 21,
        "Nome": "Canudos do Vale"
    },
    {
        "estadoId": 21,
        "Nome": "Capão Bonito do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Capão da Canoa"
    },
    {
        "estadoId": 21,
        "Nome": "Capão do Cipó"
    },
    {
        "estadoId": 21,
        "Nome": "Capão do Leão"
    },
    {
        "estadoId": 21,
        "Nome": "Capivari do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Capela de Santana"
    },
    {
        "estadoId": 21,
        "Nome": "Capitão"
    },
    {
        "estadoId": 21,
        "Nome": "Carazinho"
    },
    {
        "estadoId": 21,
        "Nome": "Caraá"
    },
    {
        "estadoId": 21,
        "Nome": "Carlos Barbosa"
    },
    {
        "estadoId": 21,
        "Nome": "Carlos Gomes"
    },
    {
        "estadoId": 21,
        "Nome": "Casca"
    },
    {
        "estadoId": 21,
        "Nome": "Caseiros"
    },
    {
        "estadoId": 21,
        "Nome": "Catuípe"
    },
    {
        "estadoId": 21,
        "Nome": "Caxias do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Centenário"
    },
    {
        "estadoId": 21,
        "Nome": "Cerrito"
    },
    {
        "estadoId": 21,
        "Nome": "Cerro Branco"
    },
    {
        "estadoId": 21,
        "Nome": "Cerro Grande"
    },
    {
        "estadoId": 21,
        "Nome": "Cerro Grande do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Cerro Largo"
    },
    {
        "estadoId": 21,
        "Nome": "Chapada"
    },
    {
        "estadoId": 21,
        "Nome": "Charqueadas"
    },
    {
        "estadoId": 21,
        "Nome": "Charrua"
    },
    {
        "estadoId": 21,
        "Nome": "Chiapetta"
    },
    {
        "estadoId": 21,
        "Nome": "Chuí"
    },
    {
        "estadoId": 21,
        "Nome": "Chuvisca"
    },
    {
        "estadoId": 21,
        "Nome": "Cidreira"
    },
    {
        "estadoId": 21,
        "Nome": "Ciríaco"
    },
    {
        "estadoId": 21,
        "Nome": "Colinas"
    },
    {
        "estadoId": 21,
        "Nome": "Colorado"
    },
    {
        "estadoId": 21,
        "Nome": "Condor"
    },
    {
        "estadoId": 21,
        "Nome": "Constantina"
    },
    {
        "estadoId": 21,
        "Nome": "Coqueiro Baixo"
    },
    {
        "estadoId": 21,
        "Nome": "Coqueiros do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Coronel Barros"
    },
    {
        "estadoId": 21,
        "Nome": "Coronel Bicaco"
    },
    {
        "estadoId": 21,
        "Nome": "Coronel Pilar"
    },
    {
        "estadoId": 21,
        "Nome": "Cotiporã"
    },
    {
        "estadoId": 21,
        "Nome": "Coxilha"
    },
    {
        "estadoId": 21,
        "Nome": "Crissiumal"
    },
    {
        "estadoId": 21,
        "Nome": "Cristal"
    },
    {
        "estadoId": 21,
        "Nome": "Cristal do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Cruz Alta"
    },
    {
        "estadoId": 21,
        "Nome": "Cruzaltense"
    },
    {
        "estadoId": 21,
        "Nome": "Cruzeiro do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "David Canabarro"
    },
    {
        "estadoId": 21,
        "Nome": "Derrubadas"
    },
    {
        "estadoId": 21,
        "Nome": "Dezesseis de Novembro"
    },
    {
        "estadoId": 21,
        "Nome": "Dilermando de Aguiar"
    },
    {
        "estadoId": 21,
        "Nome": "Dois Irmãos"
    },
    {
        "estadoId": 21,
        "Nome": "Dois Irmãos das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "Dois Lajeados"
    },
    {
        "estadoId": 21,
        "Nome": "Dom Feliciano"
    },
    {
        "estadoId": 21,
        "Nome": "Dom Pedro de Alcântara"
    },
    {
        "estadoId": 21,
        "Nome": "Dom Pedrito"
    },
    {
        "estadoId": 21,
        "Nome": "Dona Francisca"
    },
    {
        "estadoId": 21,
        "Nome": "Doutor Maurício Cardoso"
    },
    {
        "estadoId": 21,
        "Nome": "Doutor Ricardo"
    },
    {
        "estadoId": 21,
        "Nome": "Eldorado do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Encantado"
    },
    {
        "estadoId": 21,
        "Nome": "Encruzilhada do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Engenho Velho"
    },
    {
        "estadoId": 21,
        "Nome": "Entre-Ijuís"
    },
    {
        "estadoId": 21,
        "Nome": "Entre Rios do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Erebango"
    },
    {
        "estadoId": 21,
        "Nome": "Erechim"
    },
    {
        "estadoId": 21,
        "Nome": "Ernestina"
    },
    {
        "estadoId": 21,
        "Nome": "Herval"
    },
    {
        "estadoId": 21,
        "Nome": "Erval Grande"
    },
    {
        "estadoId": 21,
        "Nome": "Erval Seco"
    },
    {
        "estadoId": 21,
        "Nome": "Esmeralda"
    },
    {
        "estadoId": 21,
        "Nome": "Esperança do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Espumoso"
    },
    {
        "estadoId": 21,
        "Nome": "Estação"
    },
    {
        "estadoId": 21,
        "Nome": "Estância Velha"
    },
    {
        "estadoId": 21,
        "Nome": "Esteio"
    },
    {
        "estadoId": 21,
        "Nome": "Estrela"
    },
    {
        "estadoId": 21,
        "Nome": "Estrela Velha"
    },
    {
        "estadoId": 21,
        "Nome": "Eugênio de Castro"
    },
    {
        "estadoId": 21,
        "Nome": "Fagundes Varela"
    },
    {
        "estadoId": 21,
        "Nome": "Farroupilha"
    },
    {
        "estadoId": 21,
        "Nome": "Faxinal do Soturno"
    },
    {
        "estadoId": 21,
        "Nome": "Faxinalzinho"
    },
    {
        "estadoId": 21,
        "Nome": "Fazenda Vilanova"
    },
    {
        "estadoId": 21,
        "Nome": "Feliz"
    },
    {
        "estadoId": 21,
        "Nome": "Flores da Cunha"
    },
    {
        "estadoId": 21,
        "Nome": "Floriano Peixoto"
    },
    {
        "estadoId": 21,
        "Nome": "Fontoura Xavier"
    },
    {
        "estadoId": 21,
        "Nome": "Formigueiro"
    },
    {
        "estadoId": 21,
        "Nome": "Forquetinha"
    },
    {
        "estadoId": 21,
        "Nome": "Fortaleza dos Valos"
    },
    {
        "estadoId": 21,
        "Nome": "Frederico Westphalen"
    },
    {
        "estadoId": 21,
        "Nome": "Garibaldi"
    },
    {
        "estadoId": 21,
        "Nome": "Garruchos"
    },
    {
        "estadoId": 21,
        "Nome": "Gaurama"
    },
    {
        "estadoId": 21,
        "Nome": "General Câmara"
    },
    {
        "estadoId": 21,
        "Nome": "Gentil"
    },
    {
        "estadoId": 21,
        "Nome": "Getúlio Vargas"
    },
    {
        "estadoId": 21,
        "Nome": "Giruá"
    },
    {
        "estadoId": 21,
        "Nome": "Glorinha"
    },
    {
        "estadoId": 21,
        "Nome": "Gramado"
    },
    {
        "estadoId": 21,
        "Nome": "Gramado dos Loureiros"
    },
    {
        "estadoId": 21,
        "Nome": "Gramado Xavier"
    },
    {
        "estadoId": 21,
        "Nome": "Gravataí"
    },
    {
        "estadoId": 21,
        "Nome": "Guabiju"
    },
    {
        "estadoId": 21,
        "Nome": "Guaíba"
    },
    {
        "estadoId": 21,
        "Nome": "Guaporé"
    },
    {
        "estadoId": 21,
        "Nome": "Guarani das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "Harmonia"
    },
    {
        "estadoId": 21,
        "Nome": "Herveiras"
    },
    {
        "estadoId": 21,
        "Nome": "Horizontina"
    },
    {
        "estadoId": 21,
        "Nome": "Hulha Negra"
    },
    {
        "estadoId": 21,
        "Nome": "Humaitá"
    },
    {
        "estadoId": 21,
        "Nome": "Ibarama"
    },
    {
        "estadoId": 21,
        "Nome": "Ibiaçá"
    },
    {
        "estadoId": 21,
        "Nome": "Ibiraiaras"
    },
    {
        "estadoId": 21,
        "Nome": "Ibirapuitã"
    },
    {
        "estadoId": 21,
        "Nome": "Ibirubá"
    },
    {
        "estadoId": 21,
        "Nome": "Igrejinha"
    },
    {
        "estadoId": 21,
        "Nome": "Ijuí"
    },
    {
        "estadoId": 21,
        "Nome": "Ilópolis"
    },
    {
        "estadoId": 21,
        "Nome": "Imbé"
    },
    {
        "estadoId": 21,
        "Nome": "Imigrante"
    },
    {
        "estadoId": 21,
        "Nome": "Independência"
    },
    {
        "estadoId": 21,
        "Nome": "Inhacorá"
    },
    {
        "estadoId": 21,
        "Nome": "Ipê"
    },
    {
        "estadoId": 21,
        "Nome": "Ipiranga do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Iraí"
    },
    {
        "estadoId": 21,
        "Nome": "Itaara"
    },
    {
        "estadoId": 21,
        "Nome": "Itacurubi"
    },
    {
        "estadoId": 21,
        "Nome": "Itapuca"
    },
    {
        "estadoId": 21,
        "Nome": "Itaqui"
    },
    {
        "estadoId": 21,
        "Nome": "Itati"
    },
    {
        "estadoId": 21,
        "Nome": "Itatiba do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Ivorá"
    },
    {
        "estadoId": 21,
        "Nome": "Ivoti"
    },
    {
        "estadoId": 21,
        "Nome": "Jaboticaba"
    },
    {
        "estadoId": 21,
        "Nome": "Jacuizinho"
    },
    {
        "estadoId": 21,
        "Nome": "Jacutinga"
    },
    {
        "estadoId": 21,
        "Nome": "Jaguarão"
    },
    {
        "estadoId": 21,
        "Nome": "Jaguari"
    },
    {
        "estadoId": 21,
        "Nome": "Jaquirana"
    },
    {
        "estadoId": 21,
        "Nome": "Jari"
    },
    {
        "estadoId": 21,
        "Nome": "Jóia"
    },
    {
        "estadoId": 21,
        "Nome": "Júlio de Castilhos"
    },
    {
        "estadoId": 21,
        "Nome": "Lagoa Bonita do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Lagoão"
    },
    {
        "estadoId": 21,
        "Nome": "Lagoa dos Três Cantos"
    },
    {
        "estadoId": 21,
        "Nome": "Lagoa Vermelha"
    },
    {
        "estadoId": 21,
        "Nome": "Lajeado"
    },
    {
        "estadoId": 21,
        "Nome": "Lajeado do Bugre"
    },
    {
        "estadoId": 21,
        "Nome": "Lavras do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Liberato Salzano"
    },
    {
        "estadoId": 21,
        "Nome": "Lindolfo Collor"
    },
    {
        "estadoId": 21,
        "Nome": "Linha Nova"
    },
    {
        "estadoId": 21,
        "Nome": "Machadinho"
    },
    {
        "estadoId": 21,
        "Nome": "Maçambará"
    },
    {
        "estadoId": 21,
        "Nome": "Mampituba"
    },
    {
        "estadoId": 21,
        "Nome": "Manoel Viana"
    },
    {
        "estadoId": 21,
        "Nome": "Maquiné"
    },
    {
        "estadoId": 21,
        "Nome": "Maratá"
    },
    {
        "estadoId": 21,
        "Nome": "Marau"
    },
    {
        "estadoId": 21,
        "Nome": "Marcelino Ramos"
    },
    {
        "estadoId": 21,
        "Nome": "Mariana Pimentel"
    },
    {
        "estadoId": 21,
        "Nome": "Mariano Moro"
    },
    {
        "estadoId": 21,
        "Nome": "Marques de Souza"
    },
    {
        "estadoId": 21,
        "Nome": "Mata"
    },
    {
        "estadoId": 21,
        "Nome": "Mato Castelhano"
    },
    {
        "estadoId": 21,
        "Nome": "Mato Leitão"
    },
    {
        "estadoId": 21,
        "Nome": "Mato Queimado"
    },
    {
        "estadoId": 21,
        "Nome": "Maximiliano de Almeida"
    },
    {
        "estadoId": 21,
        "Nome": "Minas do Leão"
    },
    {
        "estadoId": 21,
        "Nome": "Miraguaí"
    },
    {
        "estadoId": 21,
        "Nome": "Montauri"
    },
    {
        "estadoId": 21,
        "Nome": "Monte Alegre dos Campos"
    },
    {
        "estadoId": 21,
        "Nome": "Monte Belo do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Montenegro"
    },
    {
        "estadoId": 21,
        "Nome": "Mormaço"
    },
    {
        "estadoId": 21,
        "Nome": "Morrinhos do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Morro Redondo"
    },
    {
        "estadoId": 21,
        "Nome": "Morro Reuter"
    },
    {
        "estadoId": 21,
        "Nome": "Mostardas"
    },
    {
        "estadoId": 21,
        "Nome": "Muçum"
    },
    {
        "estadoId": 21,
        "Nome": "Muitos Capões"
    },
    {
        "estadoId": 21,
        "Nome": "Muliterno"
    },
    {
        "estadoId": 21,
        "Nome": "Não-Me-Toque"
    },
    {
        "estadoId": 21,
        "Nome": "Nicolau Vergueiro"
    },
    {
        "estadoId": 21,
        "Nome": "Nonoai"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Alvorada"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Araçá"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Bassano"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Boa Vista"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Bréscia"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Candelária"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Esperança do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Hartz"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Pádua"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Palma"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Petrópolis"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Prata"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Ramada"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Roma do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Nova Santa Rita"
    },
    {
        "estadoId": 21,
        "Nome": "Novo Cabrais"
    },
    {
        "estadoId": 21,
        "Nome": "Novo Hamburgo"
    },
    {
        "estadoId": 21,
        "Nome": "Novo Machado"
    },
    {
        "estadoId": 21,
        "Nome": "Novo Tiradentes"
    },
    {
        "estadoId": 21,
        "Nome": "Novo Xingu"
    },
    {
        "estadoId": 21,
        "Nome": "Novo Barreiro"
    },
    {
        "estadoId": 21,
        "Nome": "Osório"
    },
    {
        "estadoId": 21,
        "Nome": "Paim Filho"
    },
    {
        "estadoId": 21,
        "Nome": "Palmares do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Palmeira das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "Palmitinho"
    },
    {
        "estadoId": 21,
        "Nome": "Panambi"
    },
    {
        "estadoId": 21,
        "Nome": "Pantano Grande"
    },
    {
        "estadoId": 21,
        "Nome": "Paraí"
    },
    {
        "estadoId": 21,
        "Nome": "Paraíso do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Pareci Novo"
    },
    {
        "estadoId": 21,
        "Nome": "Parobé"
    },
    {
        "estadoId": 21,
        "Nome": "Passa Sete"
    },
    {
        "estadoId": 21,
        "Nome": "Passo do Sobrado"
    },
    {
        "estadoId": 21,
        "Nome": "Passo Fundo"
    },
    {
        "estadoId": 21,
        "Nome": "Paulo Bento"
    },
    {
        "estadoId": 21,
        "Nome": "Paverama"
    },
    {
        "estadoId": 21,
        "Nome": "Pedras Altas"
    },
    {
        "estadoId": 21,
        "Nome": "Pedro Osório"
    },
    {
        "estadoId": 21,
        "Nome": "Pejuçara"
    },
    {
        "estadoId": 21,
        "Nome": "Pelotas"
    },
    {
        "estadoId": 21,
        "Nome": "Picada Café"
    },
    {
        "estadoId": 21,
        "Nome": "Pinhal"
    },
    {
        "estadoId": 21,
        "Nome": "Pinhal da Serra"
    },
    {
        "estadoId": 21,
        "Nome": "Pinhal Grande"
    },
    {
        "estadoId": 21,
        "Nome": "Pinheirinho do Vale"
    },
    {
        "estadoId": 21,
        "Nome": "Pinheiro Machado"
    },
    {
        "estadoId": 21,
        "Nome": "Pinto Bandeira"
    },
    {
        "estadoId": 21,
        "Nome": "Pirapó"
    },
    {
        "estadoId": 21,
        "Nome": "Piratini"
    },
    {
        "estadoId": 21,
        "Nome": "Planalto"
    },
    {
        "estadoId": 21,
        "Nome": "Poço das Antas"
    },
    {
        "estadoId": 21,
        "Nome": "Pontão"
    },
    {
        "estadoId": 21,
        "Nome": "Ponte Preta"
    },
    {
        "estadoId": 21,
        "Nome": "Portão"
    },
    {
        "estadoId": 21,
        "Nome": "Porto Alegre"
    },
    {
        "estadoId": 21,
        "Nome": "Porto Lucena"
    },
    {
        "estadoId": 21,
        "Nome": "Porto Mauá"
    },
    {
        "estadoId": 21,
        "Nome": "Porto Vera Cruz"
    },
    {
        "estadoId": 21,
        "Nome": "Porto Xavier"
    },
    {
        "estadoId": 21,
        "Nome": "Pouso Novo"
    },
    {
        "estadoId": 21,
        "Nome": "Presidente Lucena"
    },
    {
        "estadoId": 21,
        "Nome": "Progresso"
    },
    {
        "estadoId": 21,
        "Nome": "Protásio Alves"
    },
    {
        "estadoId": 21,
        "Nome": "Putinga"
    },
    {
        "estadoId": 21,
        "Nome": "Quaraí"
    },
    {
        "estadoId": 21,
        "Nome": "Quatro Irmãos"
    },
    {
        "estadoId": 21,
        "Nome": "Quevedos"
    },
    {
        "estadoId": 21,
        "Nome": "Quinze de Novembro"
    },
    {
        "estadoId": 21,
        "Nome": "Redentora"
    },
    {
        "estadoId": 21,
        "Nome": "Relvado"
    },
    {
        "estadoId": 21,
        "Nome": "Restinga Sêca"
    },
    {
        "estadoId": 21,
        "Nome": "Rio dos Índios"
    },
    {
        "estadoId": 21,
        "Nome": "Rio Grande"
    },
    {
        "estadoId": 21,
        "Nome": "Rio Pardo"
    },
    {
        "estadoId": 21,
        "Nome": "Riozinho"
    },
    {
        "estadoId": 21,
        "Nome": "Roca Sales"
    },
    {
        "estadoId": 21,
        "Nome": "Rodeio Bonito"
    },
    {
        "estadoId": 21,
        "Nome": "Rolador"
    },
    {
        "estadoId": 21,
        "Nome": "Rolante"
    },
    {
        "estadoId": 21,
        "Nome": "Ronda Alta"
    },
    {
        "estadoId": 21,
        "Nome": "Rondinha"
    },
    {
        "estadoId": 21,
        "Nome": "Roque Gonzales"
    },
    {
        "estadoId": 21,
        "Nome": "Rosário do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Sagrada Família"
    },
    {
        "estadoId": 21,
        "Nome": "Saldanha Marinho"
    },
    {
        "estadoId": 21,
        "Nome": "Salto do Jacuí"
    },
    {
        "estadoId": 21,
        "Nome": "Salvador das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "Salvador do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Sananduva"
    },
    {
        "estadoId": 21,
        "Nome": "Santa Bárbara do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Santa Cecília do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Santa Clara do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Santa Cruz do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Santa Maria"
    },
    {
        "estadoId": 21,
        "Nome": "Santa Maria do Herval"
    },
    {
        "estadoId": 21,
        "Nome": "Santa Margarida do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Santana da Boa Vista"
    },
    {
        "estadoId": 21,
        "Nome": "Sant'Ana do Livramento"
    },
    {
        "estadoId": 21,
        "Nome": "Santa Rosa"
    },
    {
        "estadoId": 21,
        "Nome": "Santa Tereza"
    },
    {
        "estadoId": 21,
        "Nome": "Santa Vitória do Palmar"
    },
    {
        "estadoId": 21,
        "Nome": "Santiago"
    },
    {
        "estadoId": 21,
        "Nome": "Santo Ângelo"
    },
    {
        "estadoId": 21,
        "Nome": "Santo Antônio do Palma"
    },
    {
        "estadoId": 21,
        "Nome": "Santo Antônio da Patrulha"
    },
    {
        "estadoId": 21,
        "Nome": "Santo Antônio das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "Santo Antônio do Planalto"
    },
    {
        "estadoId": 21,
        "Nome": "Santo Augusto"
    },
    {
        "estadoId": 21,
        "Nome": "Santo Cristo"
    },
    {
        "estadoId": 21,
        "Nome": "Santo Expedito do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "São Borja"
    },
    {
        "estadoId": 21,
        "Nome": "São Domingos do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "São Francisco de Assis"
    },
    {
        "estadoId": 21,
        "Nome": "São Francisco de Paula"
    },
    {
        "estadoId": 21,
        "Nome": "São Gabriel"
    },
    {
        "estadoId": 21,
        "Nome": "São Jerônimo"
    },
    {
        "estadoId": 21,
        "Nome": "São João da Urtiga"
    },
    {
        "estadoId": 21,
        "Nome": "São João do Polêsine"
    },
    {
        "estadoId": 21,
        "Nome": "São Jorge"
    },
    {
        "estadoId": 21,
        "Nome": "São José das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "São José do Herval"
    },
    {
        "estadoId": 21,
        "Nome": "São José do Hortêncio"
    },
    {
        "estadoId": 21,
        "Nome": "São José do Inhacorá"
    },
    {
        "estadoId": 21,
        "Nome": "São José do Norte"
    },
    {
        "estadoId": 21,
        "Nome": "São José do Ouro"
    },
    {
        "estadoId": 21,
        "Nome": "São José do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "São José dos Ausentes"
    },
    {
        "estadoId": 21,
        "Nome": "São Leopoldo"
    },
    {
        "estadoId": 21,
        "Nome": "São Lourenço do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "São Luiz Gonzaga"
    },
    {
        "estadoId": 21,
        "Nome": "São Marcos"
    },
    {
        "estadoId": 21,
        "Nome": "São Martinho"
    },
    {
        "estadoId": 21,
        "Nome": "São Martinho da Serra"
    },
    {
        "estadoId": 21,
        "Nome": "São Miguel das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "São Nicolau"
    },
    {
        "estadoId": 21,
        "Nome": "São Paulo das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "São Pedro da Serra"
    },
    {
        "estadoId": 21,
        "Nome": "São Pedro das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "São Pedro do Butiá"
    },
    {
        "estadoId": 21,
        "Nome": "São Pedro do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "São Sebastião do Caí"
    },
    {
        "estadoId": 21,
        "Nome": "São Sepé"
    },
    {
        "estadoId": 21,
        "Nome": "São Valentim"
    },
    {
        "estadoId": 21,
        "Nome": "São Valentim do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "São Valério do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "São Vendelino"
    },
    {
        "estadoId": 21,
        "Nome": "São Vicente do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Sapiranga"
    },
    {
        "estadoId": 21,
        "Nome": "Sapucaia do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Sarandi"
    },
    {
        "estadoId": 21,
        "Nome": "Seberi"
    },
    {
        "estadoId": 21,
        "Nome": "Sede Nova"
    },
    {
        "estadoId": 21,
        "Nome": "Segredo"
    },
    {
        "estadoId": 21,
        "Nome": "Selbach"
    },
    {
        "estadoId": 21,
        "Nome": "Senador Salgado Filho"
    },
    {
        "estadoId": 21,
        "Nome": "Sentinela do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Serafina Corrêa"
    },
    {
        "estadoId": 21,
        "Nome": "Sério"
    },
    {
        "estadoId": 21,
        "Nome": "Sertão"
    },
    {
        "estadoId": 21,
        "Nome": "Sertão Santana"
    },
    {
        "estadoId": 21,
        "Nome": "Sete de Setembro"
    },
    {
        "estadoId": 21,
        "Nome": "Severiano de Almeida"
    },
    {
        "estadoId": 21,
        "Nome": "Silveira Martins"
    },
    {
        "estadoId": 21,
        "Nome": "Sinimbu"
    },
    {
        "estadoId": 21,
        "Nome": "Sobradinho"
    },
    {
        "estadoId": 21,
        "Nome": "Soledade"
    },
    {
        "estadoId": 21,
        "Nome": "Tabaí"
    },
    {
        "estadoId": 21,
        "Nome": "Tapejara"
    },
    {
        "estadoId": 21,
        "Nome": "Tapera"
    },
    {
        "estadoId": 21,
        "Nome": "Tapes"
    },
    {
        "estadoId": 21,
        "Nome": "Taquara"
    },
    {
        "estadoId": 21,
        "Nome": "Taquari"
    },
    {
        "estadoId": 21,
        "Nome": "Taquaruçu do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Tavares"
    },
    {
        "estadoId": 21,
        "Nome": "Tenente Portela"
    },
    {
        "estadoId": 21,
        "Nome": "Terra de Areia"
    },
    {
        "estadoId": 21,
        "Nome": "Teutônia"
    },
    {
        "estadoId": 21,
        "Nome": "Tio Hugo"
    },
    {
        "estadoId": 21,
        "Nome": "Tiradentes do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Toropi"
    },
    {
        "estadoId": 21,
        "Nome": "Torres"
    },
    {
        "estadoId": 21,
        "Nome": "Tramandaí"
    },
    {
        "estadoId": 21,
        "Nome": "Travesseiro"
    },
    {
        "estadoId": 21,
        "Nome": "Três Arroios"
    },
    {
        "estadoId": 21,
        "Nome": "Três Cachoeiras"
    },
    {
        "estadoId": 21,
        "Nome": "Três Coroas"
    },
    {
        "estadoId": 21,
        "Nome": "Três de Maio"
    },
    {
        "estadoId": 21,
        "Nome": "Três Forquilhas"
    },
    {
        "estadoId": 21,
        "Nome": "Três Palmeiras"
    },
    {
        "estadoId": 21,
        "Nome": "Três Passos"
    },
    {
        "estadoId": 21,
        "Nome": "Trindade do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Triunfo"
    },
    {
        "estadoId": 21,
        "Nome": "Tucunduva"
    },
    {
        "estadoId": 21,
        "Nome": "Tunas"
    },
    {
        "estadoId": 21,
        "Nome": "Tupanci do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Tupanciretã"
    },
    {
        "estadoId": 21,
        "Nome": "Tupandi"
    },
    {
        "estadoId": 21,
        "Nome": "Tuparendi"
    },
    {
        "estadoId": 21,
        "Nome": "Turuçu"
    },
    {
        "estadoId": 21,
        "Nome": "Ubiretama"
    },
    {
        "estadoId": 21,
        "Nome": "União da Serra"
    },
    {
        "estadoId": 21,
        "Nome": "Unistalda"
    },
    {
        "estadoId": 21,
        "Nome": "Uruguaiana"
    },
    {
        "estadoId": 21,
        "Nome": "Vacaria"
    },
    {
        "estadoId": 21,
        "Nome": "Vale Verde"
    },
    {
        "estadoId": 21,
        "Nome": "Vale do Sol"
    },
    {
        "estadoId": 21,
        "Nome": "Vale Real"
    },
    {
        "estadoId": 21,
        "Nome": "Vanini"
    },
    {
        "estadoId": 21,
        "Nome": "Venâncio Aires"
    },
    {
        "estadoId": 21,
        "Nome": "Vera Cruz"
    },
    {
        "estadoId": 21,
        "Nome": "Veranópolis"
    },
    {
        "estadoId": 21,
        "Nome": "Vespasiano Corrêa"
    },
    {
        "estadoId": 21,
        "Nome": "Viadutos"
    },
    {
        "estadoId": 21,
        "Nome": "Viamão"
    },
    {
        "estadoId": 21,
        "Nome": "Vicente Dutra"
    },
    {
        "estadoId": 21,
        "Nome": "Victor Graeff"
    },
    {
        "estadoId": 21,
        "Nome": "Vila Flores"
    },
    {
        "estadoId": 21,
        "Nome": "Vila Lângaro"
    },
    {
        "estadoId": 21,
        "Nome": "Vila Maria"
    },
    {
        "estadoId": 21,
        "Nome": "Vila Nova do Sul"
    },
    {
        "estadoId": 21,
        "Nome": "Vista Alegre"
    },
    {
        "estadoId": 21,
        "Nome": "Vista Alegre do Prata"
    },
    {
        "estadoId": 21,
        "Nome": "Vista Gaúcha"
    },
    {
        "estadoId": 21,
        "Nome": "Vitória das Missões"
    },
    {
        "estadoId": 21,
        "Nome": "Westfália"
    },
    {
        "estadoId": 21,
        "Nome": "Xangri-lá"
    },
    {
        "estadoId": 11,
        "Nome": "Acorizal"
    },
    {
        "estadoId": 11,
        "Nome": "Água Boa"
    },
    {
        "estadoId": 11,
        "Nome": "Alta Floresta"
    },
    {
        "estadoId": 11,
        "Nome": "Alto Araguaia"
    },
    {
        "estadoId": 11,
        "Nome": "Alto Boa Vista"
    },
    {
        "estadoId": 11,
        "Nome": "Alto Garças"
    },
    {
        "estadoId": 11,
        "Nome": "Alto Paraguai"
    },
    {
        "estadoId": 11,
        "Nome": "Alto Taquari"
    },
    {
        "estadoId": 11,
        "Nome": "Apiacás"
    },
    {
        "estadoId": 11,
        "Nome": "Araguaiana"
    },
    {
        "estadoId": 11,
        "Nome": "Araguainha"
    },
    {
        "estadoId": 11,
        "Nome": "Araputanga"
    },
    {
        "estadoId": 11,
        "Nome": "Arenápolis"
    },
    {
        "estadoId": 11,
        "Nome": "Aripuanã"
    },
    {
        "estadoId": 11,
        "Nome": "Barão de Melgaço"
    },
    {
        "estadoId": 11,
        "Nome": "Barra do Bugres"
    },
    {
        "estadoId": 11,
        "Nome": "Barra do Garças"
    },
    {
        "estadoId": 11,
        "Nome": "Bom Jesus do Araguaia"
    },
    {
        "estadoId": 11,
        "Nome": "Brasnorte"
    },
    {
        "estadoId": 11,
        "Nome": "Cáceres"
    },
    {
        "estadoId": 11,
        "Nome": "Campinápolis"
    },
    {
        "estadoId": 11,
        "Nome": "Campo Novo do Parecis"
    },
    {
        "estadoId": 11,
        "Nome": "Campo Verde"
    },
    {
        "estadoId": 11,
        "Nome": "Campos de Júlio"
    },
    {
        "estadoId": 11,
        "Nome": "Canabrava do Norte"
    },
    {
        "estadoId": 11,
        "Nome": "Canarana"
    },
    {
        "estadoId": 11,
        "Nome": "Carlinda"
    },
    {
        "estadoId": 11,
        "Nome": "Castanheira"
    },
    {
        "estadoId": 11,
        "Nome": "Chapada dos Guimarães"
    },
    {
        "estadoId": 11,
        "Nome": "Cláudia"
    },
    {
        "estadoId": 11,
        "Nome": "Cocalinho"
    },
    {
        "estadoId": 11,
        "Nome": "Colíder"
    },
    {
        "estadoId": 11,
        "Nome": "Colniza"
    },
    {
        "estadoId": 11,
        "Nome": "Comodoro"
    },
    {
        "estadoId": 11,
        "Nome": "Confresa"
    },
    {
        "estadoId": 11,
        "Nome": "Conquista D'Oeste"
    },
    {
        "estadoId": 11,
        "Nome": "Cotriguaçu"
    },
    {
        "estadoId": 11,
        "Nome": "Cuiabá"
    },
    {
        "estadoId": 11,
        "Nome": "Curvelândia"
    },
    {
        "estadoId": 11,
        "Nome": "Denise"
    },
    {
        "estadoId": 11,
        "Nome": "Diamantino"
    },
    {
        "estadoId": 11,
        "Nome": "Dom Aquino"
    },
    {
        "estadoId": 11,
        "Nome": "Feliz Natal"
    },
    {
        "estadoId": 11,
        "Nome": "Figueirópolis D'Oeste"
    },
    {
        "estadoId": 11,
        "Nome": "Gaúcha do Norte"
    },
    {
        "estadoId": 11,
        "Nome": "General Carneiro"
    },
    {
        "estadoId": 11,
        "Nome": "Glória D'Oeste"
    },
    {
        "estadoId": 11,
        "Nome": "Guarantã do Norte"
    },
    {
        "estadoId": 11,
        "Nome": "Guiratinga"
    },
    {
        "estadoId": 11,
        "Nome": "Indiavaí"
    },
    {
        "estadoId": 11,
        "Nome": "Ipiranga do Norte"
    },
    {
        "estadoId": 11,
        "Nome": "Itanhangá"
    },
    {
        "estadoId": 11,
        "Nome": "Itaúba"
    },
    {
        "estadoId": 11,
        "Nome": "Itiquira"
    },
    {
        "estadoId": 11,
        "Nome": "Jaciara"
    },
    {
        "estadoId": 11,
        "Nome": "Jangada"
    },
    {
        "estadoId": 11,
        "Nome": "Jauru"
    },
    {
        "estadoId": 11,
        "Nome": "Juara"
    },
    {
        "estadoId": 11,
        "Nome": "Juína"
    },
    {
        "estadoId": 11,
        "Nome": "Juruena"
    },
    {
        "estadoId": 11,
        "Nome": "Juscimeira"
    },
    {
        "estadoId": 11,
        "Nome": "Lambari D'Oeste"
    },
    {
        "estadoId": 11,
        "Nome": "Lucas do Rio Verde"
    },
    {
        "estadoId": 11,
        "Nome": "Luciara"
    },
    {
        "estadoId": 11,
        "Nome": "Vila Bela da Santíssima Trindade"
    },
    {
        "estadoId": 11,
        "Nome": "Marcelândia"
    },
    {
        "estadoId": 11,
        "Nome": "Matupá"
    },
    {
        "estadoId": 11,
        "Nome": "Mirassol d'Oeste"
    },
    {
        "estadoId": 11,
        "Nome": "Nobres"
    },
    {
        "estadoId": 11,
        "Nome": "Nortelândia"
    },
    {
        "estadoId": 11,
        "Nome": "Nossa Senhora do Livramento"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Bandeirantes"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Nazaré"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Lacerda"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Santa Helena"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Brasilândia"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Canaã do Norte"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Mutum"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Olímpia"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Ubiratã"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Xavantina"
    },
    {
        "estadoId": 11,
        "Nome": "Novo Mundo"
    },
    {
        "estadoId": 11,
        "Nome": "Novo Horizonte do Norte"
    },
    {
        "estadoId": 11,
        "Nome": "Novo São Joaquim"
    },
    {
        "estadoId": 11,
        "Nome": "Paranaíta"
    },
    {
        "estadoId": 11,
        "Nome": "Paranatinga"
    },
    {
        "estadoId": 11,
        "Nome": "Novo Santo Antônio"
    },
    {
        "estadoId": 11,
        "Nome": "Pedra Preta"
    },
    {
        "estadoId": 11,
        "Nome": "Peixoto de Azevedo"
    },
    {
        "estadoId": 11,
        "Nome": "Planalto da Serra"
    },
    {
        "estadoId": 11,
        "Nome": "Poconé"
    },
    {
        "estadoId": 11,
        "Nome": "Pontal do Araguaia"
    },
    {
        "estadoId": 11,
        "Nome": "Ponte Branca"
    },
    {
        "estadoId": 11,
        "Nome": "Pontes e Lacerda"
    },
    {
        "estadoId": 11,
        "Nome": "Porto Alegre do Norte"
    },
    {
        "estadoId": 11,
        "Nome": "Porto dos Gaúchos"
    },
    {
        "estadoId": 11,
        "Nome": "Porto Esperidião"
    },
    {
        "estadoId": 11,
        "Nome": "Porto Estrela"
    },
    {
        "estadoId": 11,
        "Nome": "Poxoréu"
    },
    {
        "estadoId": 11,
        "Nome": "Primavera do Leste"
    },
    {
        "estadoId": 11,
        "Nome": "Querência"
    },
    {
        "estadoId": 11,
        "Nome": "São José dos Quatro Marcos"
    },
    {
        "estadoId": 11,
        "Nome": "Reserva do Cabaçal"
    },
    {
        "estadoId": 11,
        "Nome": "Ribeirão Cascalheira"
    },
    {
        "estadoId": 11,
        "Nome": "Ribeirãozinho"
    },
    {
        "estadoId": 11,
        "Nome": "Rio Branco"
    },
    {
        "estadoId": 11,
        "Nome": "Santa Carmem"
    },
    {
        "estadoId": 11,
        "Nome": "Santo Afonso"
    },
    {
        "estadoId": 11,
        "Nome": "São José do Povo"
    },
    {
        "estadoId": 11,
        "Nome": "São José do Rio Claro"
    },
    {
        "estadoId": 11,
        "Nome": "São José do Xingu"
    },
    {
        "estadoId": 11,
        "Nome": "São Pedro da Cipa"
    },
    {
        "estadoId": 11,
        "Nome": "Rondolândia"
    },
    {
        "estadoId": 11,
        "Nome": "Rondonópolis"
    },
    {
        "estadoId": 11,
        "Nome": "Rosário Oeste"
    },
    {
        "estadoId": 11,
        "Nome": "Santa Cruz do Xingu"
    },
    {
        "estadoId": 11,
        "Nome": "Salto do Céu"
    },
    {
        "estadoId": 11,
        "Nome": "Santa Rita do Trivelato"
    },
    {
        "estadoId": 11,
        "Nome": "Santa Terezinha"
    },
    {
        "estadoId": 11,
        "Nome": "Santo Antônio do Leste"
    },
    {
        "estadoId": 11,
        "Nome": "Santo Antônio do Leverger"
    },
    {
        "estadoId": 11,
        "Nome": "São Félix do Araguaia"
    },
    {
        "estadoId": 11,
        "Nome": "Sapezal"
    },
    {
        "estadoId": 11,
        "Nome": "Serra Nova Dourada"
    },
    {
        "estadoId": 11,
        "Nome": "Sinop"
    },
    {
        "estadoId": 11,
        "Nome": "Sorriso"
    },
    {
        "estadoId": 11,
        "Nome": "Tabaporã"
    },
    {
        "estadoId": 11,
        "Nome": "Tangará da Serra"
    },
    {
        "estadoId": 11,
        "Nome": "Tapurah"
    },
    {
        "estadoId": 11,
        "Nome": "Terra Nova do Norte"
    },
    {
        "estadoId": 11,
        "Nome": "Tesouro"
    },
    {
        "estadoId": 11,
        "Nome": "Torixoréu"
    },
    {
        "estadoId": 11,
        "Nome": "União do Sul"
    },
    {
        "estadoId": 11,
        "Nome": "Vale de São Domingos"
    },
    {
        "estadoId": 11,
        "Nome": "Várzea Grande"
    },
    {
        "estadoId": 11,
        "Nome": "Vera"
    },
    {
        "estadoId": 11,
        "Nome": "Vila Rica"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Guarita"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Marilândia"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Maringá"
    },
    {
        "estadoId": 11,
        "Nome": "Nova Monte Verde"
    },
    {
        "estadoId": 9,
        "Nome": "Abadia de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Abadiânia"
    },
    {
        "estadoId": 9,
        "Nome": "Acreúna"
    },
    {
        "estadoId": 9,
        "Nome": "Adelândia"
    },
    {
        "estadoId": 9,
        "Nome": "Água Fria de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Água Limpa"
    },
    {
        "estadoId": 9,
        "Nome": "Águas Lindas de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Alexânia"
    },
    {
        "estadoId": 9,
        "Nome": "Aloândia"
    },
    {
        "estadoId": 9,
        "Nome": "Alto Horizonte"
    },
    {
        "estadoId": 9,
        "Nome": "Alto Paraíso de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Alvorada do Norte"
    },
    {
        "estadoId": 9,
        "Nome": "Amaralina"
    },
    {
        "estadoId": 9,
        "Nome": "Americano do Brasil"
    },
    {
        "estadoId": 9,
        "Nome": "Amorinópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Anápolis"
    },
    {
        "estadoId": 9,
        "Nome": "Anhanguera"
    },
    {
        "estadoId": 9,
        "Nome": "Anicuns"
    },
    {
        "estadoId": 9,
        "Nome": "Aparecida de Goiânia"
    },
    {
        "estadoId": 9,
        "Nome": "Aparecida do Rio Doce"
    },
    {
        "estadoId": 9,
        "Nome": "Aporé"
    },
    {
        "estadoId": 9,
        "Nome": "Araçu"
    },
    {
        "estadoId": 9,
        "Nome": "Aragarças"
    },
    {
        "estadoId": 9,
        "Nome": "Aragoiânia"
    },
    {
        "estadoId": 9,
        "Nome": "Araguapaz"
    },
    {
        "estadoId": 9,
        "Nome": "Arenópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Aruanã"
    },
    {
        "estadoId": 9,
        "Nome": "Aurilândia"
    },
    {
        "estadoId": 9,
        "Nome": "Avelinópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Baliza"
    },
    {
        "estadoId": 9,
        "Nome": "Barro Alto"
    },
    {
        "estadoId": 9,
        "Nome": "Bela Vista de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Bom Jardim de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Bom Jesus de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Bonfinópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Bonópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Brazabrantes"
    },
    {
        "estadoId": 9,
        "Nome": "Britânia"
    },
    {
        "estadoId": 9,
        "Nome": "Buriti Alegre"
    },
    {
        "estadoId": 9,
        "Nome": "Buriti de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Buritinópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Cabeceiras"
    },
    {
        "estadoId": 9,
        "Nome": "Cachoeira Alta"
    },
    {
        "estadoId": 9,
        "Nome": "Cachoeira de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Cachoeira Dourada"
    },
    {
        "estadoId": 9,
        "Nome": "Caçu"
    },
    {
        "estadoId": 9,
        "Nome": "Caiapônia"
    },
    {
        "estadoId": 9,
        "Nome": "Caldas Novas"
    },
    {
        "estadoId": 9,
        "Nome": "Caldazinha"
    },
    {
        "estadoId": 9,
        "Nome": "Campestre de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Campinaçu"
    },
    {
        "estadoId": 9,
        "Nome": "Campinorte"
    },
    {
        "estadoId": 9,
        "Nome": "Campo Alegre de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Campo Limpo de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Campos Belos"
    },
    {
        "estadoId": 9,
        "Nome": "Campos Verdes"
    },
    {
        "estadoId": 9,
        "Nome": "Carmo do Rio Verde"
    },
    {
        "estadoId": 9,
        "Nome": "Castelândia"
    },
    {
        "estadoId": 9,
        "Nome": "Catalão"
    },
    {
        "estadoId": 9,
        "Nome": "Caturaí"
    },
    {
        "estadoId": 9,
        "Nome": "Cavalcante"
    },
    {
        "estadoId": 9,
        "Nome": "Ceres"
    },
    {
        "estadoId": 9,
        "Nome": "Cezarina"
    },
    {
        "estadoId": 9,
        "Nome": "Chapadão do Céu"
    },
    {
        "estadoId": 9,
        "Nome": "Cidade Ocidental"
    },
    {
        "estadoId": 9,
        "Nome": "Cocalzinho de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Colinas do Sul"
    },
    {
        "estadoId": 9,
        "Nome": "Córrego do Ouro"
    },
    {
        "estadoId": 9,
        "Nome": "Corumbá de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Corumbaíba"
    },
    {
        "estadoId": 9,
        "Nome": "Cristalina"
    },
    {
        "estadoId": 9,
        "Nome": "Cristianópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Crixás"
    },
    {
        "estadoId": 9,
        "Nome": "Cromínia"
    },
    {
        "estadoId": 9,
        "Nome": "Cumari"
    },
    {
        "estadoId": 9,
        "Nome": "Damianópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Damolândia"
    },
    {
        "estadoId": 9,
        "Nome": "Davinópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Diorama"
    },
    {
        "estadoId": 9,
        "Nome": "Doverlândia"
    },
    {
        "estadoId": 9,
        "Nome": "Edealina"
    },
    {
        "estadoId": 9,
        "Nome": "Edéia"
    },
    {
        "estadoId": 9,
        "Nome": "Estrela do Norte"
    },
    {
        "estadoId": 9,
        "Nome": "Faina"
    },
    {
        "estadoId": 9,
        "Nome": "Fazenda Nova"
    },
    {
        "estadoId": 9,
        "Nome": "Firminópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Flores de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Formosa"
    },
    {
        "estadoId": 9,
        "Nome": "Formoso"
    },
    {
        "estadoId": 9,
        "Nome": "Gameleira de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Divinópolis de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Goianápolis"
    },
    {
        "estadoId": 9,
        "Nome": "Goiandira"
    },
    {
        "estadoId": 9,
        "Nome": "Goianésia"
    },
    {
        "estadoId": 9,
        "Nome": "Goiânia"
    },
    {
        "estadoId": 9,
        "Nome": "Goianira"
    },
    {
        "estadoId": 9,
        "Nome": "Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Goiatuba"
    },
    {
        "estadoId": 9,
        "Nome": "Gouvelândia"
    },
    {
        "estadoId": 9,
        "Nome": "Guapó"
    },
    {
        "estadoId": 9,
        "Nome": "Guaraíta"
    },
    {
        "estadoId": 9,
        "Nome": "Guarani de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Guarinos"
    },
    {
        "estadoId": 9,
        "Nome": "Heitoraí"
    },
    {
        "estadoId": 9,
        "Nome": "Hidrolândia"
    },
    {
        "estadoId": 9,
        "Nome": "Hidrolina"
    },
    {
        "estadoId": 9,
        "Nome": "Iaciara"
    },
    {
        "estadoId": 9,
        "Nome": "Inaciolândia"
    },
    {
        "estadoId": 9,
        "Nome": "Indiara"
    },
    {
        "estadoId": 9,
        "Nome": "Inhumas"
    },
    {
        "estadoId": 9,
        "Nome": "Ipameri"
    },
    {
        "estadoId": 9,
        "Nome": "Ipiranga de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Iporá"
    },
    {
        "estadoId": 9,
        "Nome": "Israelândia"
    },
    {
        "estadoId": 9,
        "Nome": "Itaberaí"
    },
    {
        "estadoId": 9,
        "Nome": "Itaguari"
    },
    {
        "estadoId": 9,
        "Nome": "Itaguaru"
    },
    {
        "estadoId": 9,
        "Nome": "Itajá"
    },
    {
        "estadoId": 9,
        "Nome": "Itapaci"
    },
    {
        "estadoId": 9,
        "Nome": "Itapirapuã"
    },
    {
        "estadoId": 9,
        "Nome": "Itapuranga"
    },
    {
        "estadoId": 9,
        "Nome": "Itarumã"
    },
    {
        "estadoId": 9,
        "Nome": "Itauçu"
    },
    {
        "estadoId": 9,
        "Nome": "Itumbiara"
    },
    {
        "estadoId": 9,
        "Nome": "Ivolândia"
    },
    {
        "estadoId": 9,
        "Nome": "Jandaia"
    },
    {
        "estadoId": 9,
        "Nome": "Jaraguá"
    },
    {
        "estadoId": 9,
        "Nome": "Jataí"
    },
    {
        "estadoId": 9,
        "Nome": "Jaupaci"
    },
    {
        "estadoId": 9,
        "Nome": "Jesúpolis"
    },
    {
        "estadoId": 9,
        "Nome": "Joviânia"
    },
    {
        "estadoId": 9,
        "Nome": "Jussara"
    },
    {
        "estadoId": 9,
        "Nome": "Lagoa Santa"
    },
    {
        "estadoId": 9,
        "Nome": "Leopoldo de Bulhões"
    },
    {
        "estadoId": 9,
        "Nome": "Luziânia"
    },
    {
        "estadoId": 9,
        "Nome": "Mairipotaba"
    },
    {
        "estadoId": 9,
        "Nome": "Mambaí"
    },
    {
        "estadoId": 9,
        "Nome": "Mara Rosa"
    },
    {
        "estadoId": 9,
        "Nome": "Marzagão"
    },
    {
        "estadoId": 9,
        "Nome": "Matrinchã"
    },
    {
        "estadoId": 9,
        "Nome": "Maurilândia"
    },
    {
        "estadoId": 9,
        "Nome": "Mimoso de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Minaçu"
    },
    {
        "estadoId": 9,
        "Nome": "Mineiros"
    },
    {
        "estadoId": 9,
        "Nome": "Moiporá"
    },
    {
        "estadoId": 9,
        "Nome": "Monte Alegre de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Montes Claros de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Montividiu"
    },
    {
        "estadoId": 9,
        "Nome": "Montividiu do Norte"
    },
    {
        "estadoId": 9,
        "Nome": "Morrinhos"
    },
    {
        "estadoId": 9,
        "Nome": "Morro Agudo de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Mossâmedes"
    },
    {
        "estadoId": 9,
        "Nome": "Mozarlândia"
    },
    {
        "estadoId": 9,
        "Nome": "Mundo Novo"
    },
    {
        "estadoId": 9,
        "Nome": "Mutunópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Nazário"
    },
    {
        "estadoId": 9,
        "Nome": "Nerópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Niquelândia"
    },
    {
        "estadoId": 9,
        "Nome": "Nova América"
    },
    {
        "estadoId": 9,
        "Nome": "Nova Aurora"
    },
    {
        "estadoId": 9,
        "Nome": "Nova Crixás"
    },
    {
        "estadoId": 9,
        "Nome": "Nova Glória"
    },
    {
        "estadoId": 9,
        "Nome": "Nova Iguaçu de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Nova Roma"
    },
    {
        "estadoId": 9,
        "Nome": "Nova Veneza"
    },
    {
        "estadoId": 9,
        "Nome": "Novo Brasil"
    },
    {
        "estadoId": 9,
        "Nome": "Novo Gama"
    },
    {
        "estadoId": 9,
        "Nome": "Novo Planalto"
    },
    {
        "estadoId": 9,
        "Nome": "Orizona"
    },
    {
        "estadoId": 9,
        "Nome": "Ouro Verde de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Ouvidor"
    },
    {
        "estadoId": 9,
        "Nome": "Padre Bernardo"
    },
    {
        "estadoId": 9,
        "Nome": "Palestina de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Palmeiras de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Palmelo"
    },
    {
        "estadoId": 9,
        "Nome": "Palminópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Panamá"
    },
    {
        "estadoId": 9,
        "Nome": "Paranaiguara"
    },
    {
        "estadoId": 9,
        "Nome": "Paraúna"
    },
    {
        "estadoId": 9,
        "Nome": "Perolândia"
    },
    {
        "estadoId": 9,
        "Nome": "Petrolina de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Pilar de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Piracanjuba"
    },
    {
        "estadoId": 9,
        "Nome": "Piranhas"
    },
    {
        "estadoId": 9,
        "Nome": "Pirenópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Pires do Rio"
    },
    {
        "estadoId": 9,
        "Nome": "Planaltina"
    },
    {
        "estadoId": 9,
        "Nome": "Pontalina"
    },
    {
        "estadoId": 9,
        "Nome": "Porangatu"
    },
    {
        "estadoId": 9,
        "Nome": "Porteirão"
    },
    {
        "estadoId": 9,
        "Nome": "Portelândia"
    },
    {
        "estadoId": 9,
        "Nome": "Posse"
    },
    {
        "estadoId": 9,
        "Nome": "Professor Jamil"
    },
    {
        "estadoId": 9,
        "Nome": "Quirinópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Rialma"
    },
    {
        "estadoId": 9,
        "Nome": "Rianápolis"
    },
    {
        "estadoId": 9,
        "Nome": "Rio Quente"
    },
    {
        "estadoId": 9,
        "Nome": "Rio Verde"
    },
    {
        "estadoId": 9,
        "Nome": "Rubiataba"
    },
    {
        "estadoId": 9,
        "Nome": "Sanclerlândia"
    },
    {
        "estadoId": 9,
        "Nome": "Santa Bárbara de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Santa Cruz de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Santa Fé de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Santa Helena de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Santa Isabel"
    },
    {
        "estadoId": 9,
        "Nome": "Santa Rita do Araguaia"
    },
    {
        "estadoId": 9,
        "Nome": "Santa Rita do Novo Destino"
    },
    {
        "estadoId": 9,
        "Nome": "Santa Rosa de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Santa Tereza de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Santa Terezinha de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Santo Antônio da Barra"
    },
    {
        "estadoId": 9,
        "Nome": "Santo Antônio de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Santo Antônio do Descoberto"
    },
    {
        "estadoId": 9,
        "Nome": "São Domingos"
    },
    {
        "estadoId": 9,
        "Nome": "São Francisco de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "São João d'Aliança"
    },
    {
        "estadoId": 9,
        "Nome": "São João da Paraúna"
    },
    {
        "estadoId": 9,
        "Nome": "São Luís de Montes Belos"
    },
    {
        "estadoId": 9,
        "Nome": "São Luiz do Norte"
    },
    {
        "estadoId": 9,
        "Nome": "São Miguel do Araguaia"
    },
    {
        "estadoId": 9,
        "Nome": "São Miguel do Passa Quatro"
    },
    {
        "estadoId": 9,
        "Nome": "São Patrício"
    },
    {
        "estadoId": 9,
        "Nome": "São Simão"
    },
    {
        "estadoId": 9,
        "Nome": "Senador Canedo"
    },
    {
        "estadoId": 9,
        "Nome": "Serranópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Silvânia"
    },
    {
        "estadoId": 9,
        "Nome": "Simolândia"
    },
    {
        "estadoId": 9,
        "Nome": "Sítio d'Abadia"
    },
    {
        "estadoId": 9,
        "Nome": "Taquaral de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Teresina de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Terezópolis de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Três Ranchos"
    },
    {
        "estadoId": 9,
        "Nome": "Trindade"
    },
    {
        "estadoId": 9,
        "Nome": "Trombas"
    },
    {
        "estadoId": 9,
        "Nome": "Turvânia"
    },
    {
        "estadoId": 9,
        "Nome": "Turvelândia"
    },
    {
        "estadoId": 9,
        "Nome": "Uirapuru"
    },
    {
        "estadoId": 9,
        "Nome": "Uruaçu"
    },
    {
        "estadoId": 9,
        "Nome": "Uruana"
    },
    {
        "estadoId": 9,
        "Nome": "Urutaí"
    },
    {
        "estadoId": 9,
        "Nome": "Valparaíso de Goiás"
    },
    {
        "estadoId": 9,
        "Nome": "Varjão"
    },
    {
        "estadoId": 9,
        "Nome": "Vianópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Vicentinópolis"
    },
    {
        "estadoId": 9,
        "Nome": "Vila Boa"
    },
    {
        "estadoId": 9,
        "Nome": "Vila Propício"
    },
    {
        "estadoId": 7,
        "Nome": "Brasília"
    },
    {
        "estadoId": 12,
        "Nome": "Água Clara"
    },
    {
        "estadoId": 12,
        "Nome": "Alcinópolis"
    },
    {
        "estadoId": 12,
        "Nome": "Amambai"
    },
    {
        "estadoId": 12,
        "Nome": "Anastácio"
    },
    {
        "estadoId": 12,
        "Nome": "Anaurilândia"
    },
    {
        "estadoId": 12,
        "Nome": "Angélica"
    },
    {
        "estadoId": 12,
        "Nome": "Antônio João"
    },
    {
        "estadoId": 12,
        "Nome": "Aparecida do Taboado"
    },
    {
        "estadoId": 12,
        "Nome": "Aquidauana"
    },
    {
        "estadoId": 12,
        "Nome": "Aral Moreira"
    },
    {
        "estadoId": 12,
        "Nome": "Bandeirantes"
    },
    {
        "estadoId": 12,
        "Nome": "Bataguassu"
    },
    {
        "estadoId": 12,
        "Nome": "Batayporã"
    },
    {
        "estadoId": 12,
        "Nome": "Bela Vista"
    },
    {
        "estadoId": 12,
        "Nome": "Bodoquena"
    },
    {
        "estadoId": 12,
        "Nome": "Bonito"
    },
    {
        "estadoId": 12,
        "Nome": "Brasilândia"
    },
    {
        "estadoId": 12,
        "Nome": "Caarapó"
    },
    {
        "estadoId": 12,
        "Nome": "Camapuã"
    },
    {
        "estadoId": 12,
        "Nome": "Campo Grande"
    },
    {
        "estadoId": 12,
        "Nome": "Caracol"
    },
    {
        "estadoId": 12,
        "Nome": "Cassilândia"
    },
    {
        "estadoId": 12,
        "Nome": "Chapadão do Sul"
    },
    {
        "estadoId": 12,
        "Nome": "Corguinho"
    },
    {
        "estadoId": 12,
        "Nome": "Coronel Sapucaia"
    },
    {
        "estadoId": 12,
        "Nome": "Corumbá"
    },
    {
        "estadoId": 12,
        "Nome": "Costa Rica"
    },
    {
        "estadoId": 12,
        "Nome": "Coxim"
    },
    {
        "estadoId": 12,
        "Nome": "Deodápolis"
    },
    {
        "estadoId": 12,
        "Nome": "Dois Irmãos do Buriti"
    },
    {
        "estadoId": 12,
        "Nome": "Douradina"
    },
    {
        "estadoId": 12,
        "Nome": "Dourados"
    },
    {
        "estadoId": 12,
        "Nome": "Eldorado"
    },
    {
        "estadoId": 12,
        "Nome": "Fátima do Sul"
    },
    {
        "estadoId": 12,
        "Nome": "Figueirão"
    },
    {
        "estadoId": 12,
        "Nome": "Glória de Dourados"
    },
    {
        "estadoId": 12,
        "Nome": "Guia Lopes da Laguna"
    },
    {
        "estadoId": 12,
        "Nome": "Iguatemi"
    },
    {
        "estadoId": 12,
        "Nome": "Inocência"
    },
    {
        "estadoId": 12,
        "Nome": "Itaporã"
    },
    {
        "estadoId": 12,
        "Nome": "Itaquiraí"
    },
    {
        "estadoId": 12,
        "Nome": "Ivinhema"
    },
    {
        "estadoId": 12,
        "Nome": "Japorã"
    },
    {
        "estadoId": 12,
        "Nome": "Jaraguari"
    },
    {
        "estadoId": 12,
        "Nome": "Jardim"
    },
    {
        "estadoId": 12,
        "Nome": "Jateí"
    },
    {
        "estadoId": 12,
        "Nome": "Juti"
    },
    {
        "estadoId": 12,
        "Nome": "Ladário"
    },
    {
        "estadoId": 12,
        "Nome": "Laguna Carapã"
    },
    {
        "estadoId": 12,
        "Nome": "Maracaju"
    },
    {
        "estadoId": 12,
        "Nome": "Miranda"
    },
    {
        "estadoId": 12,
        "Nome": "Mundo Novo"
    },
    {
        "estadoId": 12,
        "Nome": "Naviraí"
    },
    {
        "estadoId": 12,
        "Nome": "Nioaque"
    },
    {
        "estadoId": 12,
        "Nome": "Nova Alvorada do Sul"
    },
    {
        "estadoId": 12,
        "Nome": "Nova Andradina"
    },
    {
        "estadoId": 12,
        "Nome": "Novo Horizonte do Sul"
    },
    {
        "estadoId": 12,
        "Nome": "Paraíso das Águas"
    },
    {
        "estadoId": 12,
        "Nome": "Paranaíba"
    },
    {
        "estadoId": 12,
        "Nome": "Paranhos"
    },
    {
        "estadoId": 12,
        "Nome": "Pedro Gomes"
    },
    {
        "estadoId": 12,
        "Nome": "Ponta Porã"
    },
    {
        "estadoId": 12,
        "Nome": "Porto Murtinho"
    },
    {
        "estadoId": 12,
        "Nome": "Ribas do Rio Pardo"
    },
    {
        "estadoId": 12,
        "Nome": "Rio Brilhante"
    },
    {
        "estadoId": 12,
        "Nome": "Rio Negro"
    },
    {
        "estadoId": 12,
        "Nome": "Rio Verde de Mato Grosso"
    },
    {
        "estadoId": 12,
        "Nome": "Rochedo"
    },
    {
        "estadoId": 12,
        "Nome": "Santa Rita do Pardo"
    },
    {
        "estadoId": 12,
        "Nome": "São Gabriel do Oeste"
    },
    {
        "estadoId": 12,
        "Nome": "Sete Quedas"
    },
    {
        "estadoId": 12,
        "Nome": "Selvíria"
    },
    {
        "estadoId": 12,
        "Nome": "Sidrolândia"
    },
    {
        "estadoId": 12,
        "Nome": "Sonora"
    },
    {
        "estadoId": 12,
        "Nome": "Tacuru"
    },
    {
        "estadoId": 12,
        "Nome": "Taquarussu"
    },
    {
        "estadoId": 12,
        "Nome": "Terenos"
    },
    {
        "estadoId": 12,
        "Nome": "Três Lagoas"
    },
    {
        "estadoId": 12,
        "Nome": "Vicentina"
    }
]
return cidades
    }
}
module.exports = Cidade