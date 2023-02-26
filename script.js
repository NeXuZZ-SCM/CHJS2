(function() {
    let DominiosExistentes = ['cosamandinga.com','sindominio.com','google.com','hola.com']
    //MostrarPlanes en el navegador
    let listaPlanes = completeListPlans();
    mostrarPlanesEnPantalla(listaPlanes);

    setTimeout(function() {
        // código que se debe ejecutar después de 3 segundos
        let isExist = domainIsExist(DominiosExistentes)
        if (!isExist){
            //SELECCIONAR UN PLAN
            let planElegido = prompt("Ingrese el nombre de un plan:");
            listaPlanes.forEach(element => {
                if (planElegido.toLowerCase() == element._nombre.toLowerCase()) {
                    alert(`Bienvenido al plan ${element._nombre} en breve se comunicara un asistente para finalizar el pago y activar el servicio`);
                }
            });
        }
      }, 3000);

  })();

function domainIsExist(DominiosExistentes){

    let isExist = true;
    while (isExist) {
        let dominioIngresado = prompt("Ingrese un dominio para ver su disponibilidad :)");
        DominiosExistentes.forEach(element => {
            if (element == dominioIngresado) {
                isExist = true;
            }else{
                isExist = false;
            }
        });

        if (isExist) {
            alert("El dominio ingresado ya existe por favor seleccione otro");
        }
    }
    return isExist
}

function completeListPlans(){
    let listaPlanes = []
    let planStarter = new Planes("Starter Exo", 4800)
    let planGold = new Planes("Gold", 7900)
    let planAdamantium = new Planes("Adamantium", 23000)

    listaPlanes.push(planStarter)
    listaPlanes.push(planGold)
    listaPlanes.push(planAdamantium)

    return listaPlanes
}

function mostrarPlanesEnPantalla(listaPlanes){
    for (const iterator of listaPlanes) {
        document.getElementById("planes").innerHTML += `${iterator._nombre} Valor: $${iterator._valor}<br>`
    }
}


