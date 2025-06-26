export const getMensajePorEmocion = (emocion) => {
  const mensajes = {
    admiration: "Reconocer lo bueno en los demás habla bien de ti. ¡Sigue brillando!",
    amusement: "¡Qué bien que algo te ha divertido! La risa es medicina para el alma.",
    anger: "Es válido sentirse molesto. Azo te sugiere respirar hondo y liberar esa tensión.",
    annoyance: "Las pequeñas molestias también importan. Puedes escribir o caminar un poco.",
    approval: "Es genial que apruebes lo que te rodea. Tu validación es importante.",
    caring: "Tu capacidad de cuidar a otros demuestra tu gran corazón 💚",
    confusion: "Sentirse confundido es parte del aprendizaje. Tómalo con calma.",
    curiosity: "Tu curiosidad es poderosa. ¿Qué descubrimiento te interesa hoy?",
    desire: "Ese deseo puede ser una señal de motivación. Escúchalo con atención.",
    disappointment: "Lo que esperabas no salió como querías. Date permiso para sentirlo.",
    disapproval: "Tu perspectiva importa. Está bien no estar de acuerdo.",
    disgust: "Evita lo que te hace daño. Priorizar tu bienestar es esencial.",
    embarrassment: "Todos cometemos errores. Sé amable contigo mismo.",
    excitement: "¡Esa emoción es contagiosa! Comparte tu entusiasmo con el mundo.",
    fear: "Respira. Recuerda que lo que temes también puede ser enfrentado con apoyo.",
    gratitude: "Agradecer te conecta con lo positivo. ¡Gracias por compartir!",
    grief: "El dolor también forma parte de la vida. Azo está contigo en este momento.",
    joy: "¡Qué alegría saber que te sientes bien! Disfruta este momento.",
    love: "El amor es hermoso. No dudes en expresarlo a quienes te rodean.",
    nervousness: "Está bien sentirse nervioso. Haz una pausa, respira profundo.",
    optimism: "Tu actitud positiva puede inspirar a otros. ¡Sigue así!",
    pride: "Sentirte orgulloso de ti es válido. Celebra tus logros.",
    realization: "Ese momento de claridad es valioso. Aplícalo a tu crecimiento.",
    relief: "Qué bien que sientas alivio. Disfruta ese descanso emocional.",
    remorse: "Es humano cometer errores. Aprende, perdónate y sigue.",
    sadness: "Siento que te sientas así. Puedes tomarte un descanso. Azo está contigo.",
    surprise: "¡Qué inesperado! Espero que esa sorpresa te traiga algo bueno.",
    neutral: "Gracias por compartir cómo te sientes. Estoy aquí para apoyarte.",
  };

  return mensajes[emocion] || "Gracias por compartir cómo te sientes. Estoy aquí para apoyarte.";
};
