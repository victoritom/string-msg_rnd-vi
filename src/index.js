const messages = [
    "Estuviste a mi lado, pero nunca a mi nivel",
    "Aquel que intente superarme conocerá sus límites",
    "Moral alta, Mente fria, Mala fama y buena vida",
    "Un día las personas que no creyeron en ti le contarán a todos cómo te conocieron",
    "Soy como quiero, frió pero alegre, grosero pero caballeroso ese soy yo",
    "la obsesión vence al talento siempre, tienes todo el talento del mundo ¿pero te obsesiona?",
    "No importa lo duro que el mundo empuje en contra mia. Dentro de mi, hay algo más fuerte, algo mejor, empujando de vuelta",
    "Haz los que puedas donde estes con lo que tienes y no te preocupes por el resto",
    "Tienes un corazon muy grande y piensas que todo el mundo es como tu",
    "No puedes evitar que los pájaros de la tristeza vuelen sobre tu cabeza, peor puedes evitar que hagan nido en tu cabello",
    "Nunca en tu vida aceptes menos de lo que te mereces",
    "Si algún hombre me odia ese es su problema, mi única preocupación es no hacer o de decir nada que merezca ese hombre",
  ];
  
const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}
  
module.exports = {
    funnyCommit
};