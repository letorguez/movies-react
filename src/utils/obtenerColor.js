export function obtenerColor(puntuacion) {
    let color;
    switch (true) {
        case puntuacion === 10:
            color = "rgba(5,255,0,1)";
            break;
        case puntuacion >= 7.5:
            color = "rgba(168,249,0,1)";
            break;
        case puntuacion >= 5:
            color = "rgba(255,243,0,1)";
            break;
        case puntuacion >= 2.5:
            color = "rgba(255,162,0,1)";
            break;
        default: 
            color = "rgb(237, 33, 33)";
    }
    return color;
}