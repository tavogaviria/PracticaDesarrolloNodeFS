const fs = require('fs');

const pedidos = require('./reto_node_gustavo.json');
for (let step = 0; step < pedidos.length; step++) {
    let nombre = pedidos[step].pedido_nro+"-"+pedidos[step].cliente;
    let name = nombre.replace(/ /g,"-");

    fs.writeFile(name+'.json','aaa', (err) => {
        if(err){
            throw err
        }else{
            console.log('Pedido Creado');
        }
    });
}

fs.writeFile('inventario.json','items', (err) => {
    if(err){
        throw err;
    }else{
        for (let step = 0; step < pedidos.length; step++) {
            for(let step1 = 0; step1 < pedidos[step].items.length; step1++){
                let producto = pedidos[step].items[step1].codigo_barras+"-"+pedidos[step].items[step1].descripcion;
                fs.appendFile('inventario.json','\n'+producto,(err) => {
                    if(err){
                        throw err;
                    }else{
                        console.log("Inventario actualizado");
                    }
                });                
            }
        }
    }
});