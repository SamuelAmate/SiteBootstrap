$("#calcular").click(function(){
    var valor1 = parseFloat($("#txtvalor1").val());
    var valor2 = parseFloat($("#txtvalor2").val());

    var resultado = parseFloat((valor1 + valor2) / 100);
    var moeda = resultado.toLocaleString("pt-BR", 
        {
            style: "currency",
            currency: "BRL"
        });
    
    $("#resultado")
        .text("Resultado " + moeda)
        .css({'font-weight': 'bold', 'font-size': '18pt' });

    alert(resultado);

    //msg
    if (valor1 > valor2){
        msg = "Valor 1 é maior";
    }else if (valor1 < valor2){
        msg = "Valor 2 é maior";
    } else {
        msg = "Valores iguais";
    }
    alert(msg)
});