/* Primero se genera el objeto, rover, donde se le asignan las propiedades de direction,coordenadas x e y y posteriormente se le añade travelLog, que nos dará el recorrido que realiza rover.*/

var rover = {
    direction:"N",
    x:0,
    y:0,
    travelLog: []
}

/* Se crean variables "x","y" y "obsOK",que utilizaremos para saber si en la matriz se encuentra algún obstáculo "O". */

var x=0;
var y=0;
var obsOK=0;

/* A continuación se crean las funciones "turnleft" y "turnright",que en función de la variable direction,nos darán una direccción final según se haya realizado el giro a un lado u otro.*/

function turnright(rover) {
    switch (rover.direction) {
        case "N":
        rover.direction= "E";
        break;
    
        case "S":
        rover.direction ="W";
        break;
    
        case "E":
        rover.direction="S";
        break;
    
        case "W":
        rover.direction= "N";
        break;
    }
    console.log(rover.direction);
}
function turnleft(rover) {
    switch (rover.direction) {
        case "N":
        rover.direction= "W";
        break;
    
        case "S":
        rover.direction ="E";
        break;
    
        case "E":
        rover.direction="N";
        break;
    
        case "W":
        rover.direction= "S";
        break;
    }
    console.log(rover.direction);
}

/* La siguiente función moveForward, generará el equivalente a un movimiento hacia adelante en la dirección en la que esté orientado Rover. 
Se tendrán en cuenta una serie de límites para cada una de las orientaciones, marcando el espacio en una malla de 10x10,y dando un aviso en el caso de superar estos límites.
Se tendrá en cuenta también si existen obstáculos en la matriz, con la función "obs" definida en el último apartado.
Por defecto la matriz "obstacles" no tiene obstaculo alguno,pero si cambiamos a la matriz siguiente, que se encuentra comentario, quitándole la condición del mismo y dandosela a la matriz por defecto,veremos como reconocerá los "O" existentes en esta matriz (esto se verá más abajo).*/ 

function moveForward(rover){
   switch(rover.direction){
    case "N":
        if (-1<rover.x<10 & rover.y>0){
            rover.y=rover.y-1;
	    obs(rover.x,rover.y);
            if (obsOK==1){
            rover.y=rover.y+1;
            console.log(rover.x +"," + rover.y);
            console.log("stop");
            }
            else{
            console.log(rover.x +"," + rover.y);
            rover.travelLog.push(rover.x + "," + rover.y);
            }
         }
            else{
            console.log("out of map, turn robot!");
            }
        break;
    case "S":
        if (-1<rover.x<10 & rover.y<9){
        rover.y=rover.y+1;
	    obs(rover.x,rover.y);
            if (obsOK==1){
            rover.y=rover.y-1;
            console.log(rover.x +"," + rover.y);
            console.log("stop");
            }
            else{
            console.log(rover.x +"," + rover.y);
            rover.travelLog.push(rover.x + "," + rover.y);
            }
         }
            else{
            console.log("out of map, turn robot!");
        }
        break;
    
    case "E":
        if (-1<rover.y<10 & rover.x<9){
        rover.x=rover.x+1;
	    obs(rover.x,rover.y);
            if (obsOK==1){
            rover.x=rover.x-1;
            console.log(rover.x +"," + rover.y);
            console.log("stop");
            }
            else{
            console.log(rover.x +"," + rover.y);
            rover.travelLog.push(rover.x + "," + rover.y);
            }
         }
            else{
            console.log("out of map, turn robot!");  
        }
        break;
     
    case "W":
        if (-1<rover.y<10 & rover.x>0){
        rover.x=rover.x-1;
	    obs(rover.x,rover.y);
            if (obsOK==1){
            rover.x=rover.x+1;
            console.log(rover.x +"," + rover.y);
            console.log("stop");
            }
            else{
            console.log(rover.x +"," + rover.y);
            rover.travelLog.push(rover.x + "," + rover.y);
            }
         }
            else{
            console.log("out of map, turn robot!");
        }
        break;
    }
    if(rover.x===rover2.x & rover.y === rover2.y){
        console.log("be careful or crash!!.Turn and move again")
        moveBackforward(rover);
        }  
}

/* La función Commnands, hará una llamadas a las funciones generadas anteriormente de manera automática leyendo una cadena de valores que indicarán a cual de las mismas se está llamando.
Vemos que aparece la opcion de llamar a la opción moveBackforward, la cual está generada más adelante,que funcionará de igual manera que moveForward,pero en este caso el movimiento en vez de hacia adelante será hacia atras. 
La función Commands,solo se hará efectiva con los parametros indicados, no siendo llamada ninguna función con un parametro diferente  */

function Commands(list){
  for(var i = 0; i < list.length; i++){
      var string = list[i];
    switch(string){
        case "f":
            moveForward(rover);
            break;
        case "r":
            turnright(rover);
            break;
        case "l":
            turnleft(rover);
            break;
        case "b":
            moveBackforward(rover);
            break;
    }
  }
}
/* La función track nos daŕa la trayectoria que ha realizado Rover desde la coordenada inicial hasta el último movimiento generado por alguna de las funciones.*/

function track(rover){
    console.log(rover.travelLog);
}

/*Como ya se ha mencionado anteriormente,esta función será similar a moveForward,pero con un movimiento hacia atras en función de la dirección que tenga en ese momento Rover y considerando los límites de la malla marcados.*/

function moveBackforward(rover){
   switch(rover.direction){
    case "N":
        if (-1<rover.x<10 & rover.y<9){
            rover.y=rover.y+1;
        obs(rover.x,rover.y);
            if (obsOK==1){
            rover.y=rover.y-1;
            console.log(rover.x +"," + rover.y);
            console.log("stop");
            }
        else{
            console.log(rover.x +"," + rover.y);
            rover.travelLog.push(rover.x + "," + rover.y);
            }
        }
        else{
            console.log("out of map, turn robot!");
            }
        break;
    case "S":
        if (-1<rover.x<10 & rover.y>0){
        rover.y=rover.y-1;
        obs(rover.x,rover.y);
            if (obsOK==1){
            rover.y=rover.y+1;
            console.log(rover.x +"," + rover.y);
            console.log("stop");
            }
        else{
            console.log(rover.x +"," + rover.y);
            rover.travelLog.push(rover.x + "," + rover.y);
            }
        }
        else{
            console.log("out of map, turn robot!");
        }
        break;
    
    case "E":
        if (-1<rover.y<10 & rover.x>0){
        rover.x=rover.x-1;
        obs(rover.x,rover.y);
            if (obsOK==1){
            rover.x=rover.x+1;
            console.log(rover.x +"," + rover.y);
            console.log("stop");
            }
        else{
            console.log(rover.x +"," + rover.y);
            rover.travelLog.push(rover.x + "," + rover.y);
            }
        }

        else{
            console.log("out of map, turn robot!");  
        }
        break;
     
    case "W":
        if (-1<rover.y<10 & rover.x<9){
        rover.x=rover.x+1;
        obs(rover.x,rover.y);
            if (obsOK==1){
            rover.x=rover.x-1;
            console.log(rover.x +"," + rover.y);
            console.log("stop");
            }
        else{
            console.log(rover.x +"," + rover.y);
            rover.travelLog.push(rover.x + "," + rover.y);
            }
        }
        else{
            console.log("out of map, turn robot!");
        }
        break;
    } 
    if(rover.x===rover2.x & rover.y === rover2.y){
        console.log("be careful or crash!!.Turn and move again");
        moveForward(rover);
        } 
}

/* Esta función de reset, aunque no se pide en el ejercicio, se ha creado para reiniciar los valores iniciales de posición y orientación del robot */

function reset(rover){
    rover.x=0;
    rover.y=0;
    rover.direction="N";
    rover.travelLog=[];
}


/* A partir de esta línea de comando generamos un robot diferente,rover2, al que le damos las mismas características y funciones que a rover, cambiando unicamente su posición inicial.
A partir de ahí y en una cadena de movimientos alternativos de ambos robots, se le añade, tanto a rover2 como a rover, un aviso de que si se encuentran en la misma coordenada chocarán y por lo tanto el robot deshará el último paso realizado.*/

 var rover2={
     direction:"N",
     x:9,
     y:9,
     travelLog:[],
 }

function turnright2(rover2) {
    switch (rover2.direction) {
        case "N":
        rover2.direction= "E";
        break;
    
        case "S":
        rover2.direction ="W";
        break;
    
        case "E":
        rover2.direction="S";
        break;
    
        case "W":
        rover2.direction= "N";
        break;
    }
    console.log(rover2.direction);
}

function turnleft2(rover2) {
    switch (rover2.direction) {
        case "N":
        rover2.direction= "W";
        break;
    
        case "S":
        rover2.direction ="E";
        break;
    
        case "E":
        rover2.direction="N";
        break;
    
        case "W":
        rover2.direction= "S";
        break;
    }
    console.log(rover2.direction);
}


function moveForward2(rover2){
   switch(rover2.direction){
    case "N":
        if (-1<rover2.x<10 & rover2.y>0){
            rover2.y=rover2.y-1;
	    obs(rover2.x,rover2.y);
            if (obsOK==1){
            rover2.y=rover2.y+1;
            console.log(rover2.x +"," + rover2.y);
            console.log("stop");
            }
        else{
            console.log(rover2.x +"," + rover2.y);
            rover2.travelLog.push(rover2.x + "," + rover2.y);
            }
         }
        else{
            console.log("out of map, turn robot!");
            }
        break;
    case "S":
        if (-1<rover2.x<10 & rover2.y<9){
        rover2.y=rover2.y+1;
	    obs(rover2.x,rover2.y);
            if (obsOK==1){
            rover2.y=rover2.y-1;
            console.log(rover2.x +"," + rover2.y);
            console.log("stop");
            }
        else{
            console.log(rover2.x +"," + rover2.y);
            rover2.travelLog.push(rover2.x + "," + rover2.y);
            }
         }
        else{
            console.log("out of map, turn robot!");
        }
        break;
    
    case "E":
        if (-1<rover2.y<10 & rover2.x<9){
        rover2.x=rover2.x+1;
	    obs(rover2.x,rover2.y);
            if (obsOK==1){
            rover2.x=rover2.x-1;
            console.log(rover2.x +"," + rover2.y);
            console.log("stop");
            }
        else{
            console.log(rover2.x +"," + rover2.y);
            rover2.travelLog.push(rover2.x + "," + rover2.y);
            }
         }
        else{
            console.log("out of map, turn robot!");  
        }
        break;
     
    case "W":
        if (-1<rover2.y<10 & rover2.x>0){
        rover2.x=rover2.x-1;
	    obs(rover2.x,rover2.y);
            if (obsOK==1){
            rover2.x=rover2.x+1;
            console.log(rover2.x +"," + rover2.y);
            console.log("stop");
            }
            else{
            console.log(rover2.x +"," + rover2.y);
            rover2.travelLog.push(rover2.x + "," + rover2.y);
            }
         }
            else{
            console.log("out of map, turn robot!");
        }
        break;
    } 
    if(rover.x===rover2.x & rover.y === rover2.y){
        console.log("be careful or crash!!.Turn and move again");
        moveBackforward2(rover2);
        } 
}

function Commands2(list){
  for(var i = 0; i < list.length; i++){
      var string = list[i];
    switch(string){
        case "f":
            moveForward2(rover2);
            break;
        case "r":
            turnright2(rover2);
            break;
        case "l":
            turnleft2(rover2);
            break;
        case "b":
            moveBackforward2(rover2);
            break;
    }
  }
}

function track2(rover2){
    console.log(rover2.travelLog);
}

function moveBackforward2(rover2){
   switch(rover2.direction){
    case "N":
        if (-1<rover2.x<10 & rover2.y<9){
            rover2.y=rover2.y+1;
        obs(rover2.x,rover2.y);
            if (obsOK==1){
            rover2.y=rover2.y-1;
            console.log(rover2.x +"," + rover2.y);
            console.log("stop");
            }
            else{
            console.log(rover2.x +"," + rover2.y);
            rover2.travelLog.push(rover2.x + "," + rover2.y);
            }
        }
            else{
            console.log("out of map, turn robot!");
            }
        break;
    case "S":
        if (-1<rover2.x<10 & rover2.y>0){
        rover2.y=rover2.y-1;
        obs(rover2.x,rover2.y);
            if (obsOK==1){
            rover2.y=rover2.y+1;
            console.log(rover2.x +"," + rover2.y);
            console.log("stop");
            }
        else{
            console.log(rover2.x +"," + rover2.y);
            rover.travelLog.push(rover2.x + "," + rover2.y);
            }
        }
        else{
            console.log("out of map, turn robot!");
        }
        break;
    case "E":
        if (-1<rover2.y<10 & rover2.x>0){
        rover2.x=rover2.x-1;
        obs(rover2.x,rover2.y);
            if (obsOK==1){
            rover2.x=rover2.x+1;
            console.log(rover2.x +"," + rover2.y);
            console.log("stop");
            }
        else{
            console.log(rover2.x +"," + rover2.y);
            rover2.travelLog.push(rover2.x + "," + rover2.y);
            }
        }
        else{
            console.log("out of map, turn robot!");  
        }
        break;
    case "W":
        if (-1<rover2.y<10 & rover2.x<9){
        rover2.x=rover2.x+1;
        obs(rover2.x,rover2.y);
            if (obsOK==1){
            rover2.x=rover2.x-1;
            console.log(rover2.x +"," + rover2.y);
            console.log("stop");
            }
        else{
            console.log(rover2.x +"," + rover2.y);
            rover2.travelLog.push(rover2.x + "," + rover2.y);
            }
        }
        else{
            console.log("out of map, turn robot!");
        }
        break;
    } 
        if(rover.x===rover2.x & rover.y === rover2.y){
        console.log("be careful or crash!!.Turn and move again");
        moveForward2(rover2);
        } 
}

function reset2(rover2){
    rover2.x=9;
    rover2.y=9;
    rover2.direction="N";
    rover2.travelLog=[];
}

/* Por defecto se dispone de una malla "obstacle" 10x10 sin obstaculo alguno.Debajo de la misma y definida como comentario,para que no se tenga en cuenta al ejecutar el código,tenemos una matriz del mismo nombre,pero ya con obstáculos "O".  Se realiza un rastreo de la malla y allá donde se encuentra uno de estos "O", se avisa al usuario de que cambie la dirección y mueva de nuevo al robot, deshaciendo su último paso realizado.

Para que esta matriz sea tenida en cuenta a la hora de ejecutar el programa deben quitarse los atributos que la marcan como comentario de texto (/*) y añadirselos a primera matriz sin obstaculos. */

var obstacles = [
[null, null, null, null, null, null,null, null, null, null],
[null, null, null, null, null, null,null, null, null, null],
[null, null, null, null, null, null,null, null, null, null],
[null, null, null, null, null, null,null, null, null, null],
[null, null, null, null, null, null,null, null, null, null],
[null, null, null, null, null, null,null, null, null, null],
[null, null, null, null, null, null,null, null, null, null],
[null, null, null, null, null, null,null, null, null, null],
[null, null, null, null, null, null,null, null, null, null],
[null, null, null, null, null, null,null, null, null, null]
 ]

/*var obstacles = [
[null, null, null, null, null, null,null, null, null, null],
[null, null, "O", null, null, null, null, null, null, null],
[null, null, "O", null, null, null, "O", "O", "O", null],
[null, null, "O", null, null, null, null, null, "O", null],
[null, null, "O", "O", "O", null, null, null, "O", null],
[null, null, null, null, "O", null, null, null, null, null],
[null, null, null, null, "O", null, null, null, null, null],
[null, null, null, null, "O", null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null],
[null, null, null, null, null, null, null, null, null, null]
 ]*/



for (var i = 0; i < obstacles.length; i++){
    var row = obstacles[i];
    for (var j = 0; j < row.length; j++){
        var column = row[j];
    if (column === "O"){
      console.log("Obstacle Found at: " + i + ", " + j+ ", turn and  move rover!");
    }
}
}

/*La funcion "obs",simplemente hará un recorrido por las coordenadas y nos dará una condición de encontrar un obstáculo. En el caso de que se cumpla,nos devuelve el valor de 1 y si no de 0, estos valores los utlizamos en las funciones de movimiento hacia delante y hacia atras. */

function obs(x,y){
     if (obstacles[x][y] == "O"){
	  obsOK = 1;
     }
     else{
	  obsOK = 0;
}
}
