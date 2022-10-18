var computador="piedrs";
var persona="piedra";

if (persona=="tijeras" && computador=="tijeras"){
    console.log("empataron");
} else if(persona=="piedra" && computador=="tijeras"){
    console.log("Ganó la persona");
} else{
    console.log("Todos perdieron");
}
