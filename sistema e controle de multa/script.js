document.getElementById('multaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    
    // Coleta os dados do formulário
    var motorista = document.getElementById('motorista').value;
    var placa = document.getElementById('placa').value;
    var valor = document.getElementById('valor').value;

    // Cria um objeto com os dados da multa
    var multa = {
        motorista: motorista,
        placa: placa,
        valor: valor
    };

    // Adiciona a multa à lista de multas
    adicionarMulta(multa);

    // Limpa o formulário
    document.getElementById('multaForm').reset();
});

function adicionarMulta(multa) {
    var multasList = document.getElementById('multasList');
    var multaItem = document.createElement('div');
    multaItem.innerHTML = 'Motorista: ' + multa.motorista + ', Placa: ' + multa.placa + ', Valor: ' + multa.valor;
    multasList.appendChild(multaItem);
}