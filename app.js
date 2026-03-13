



function falar(texto) {
  if ('speechSynthesis' in window) {
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = 'pt-BR';
    fala.rate = 1.0;
    fala.pitch = 1.0;
    speechSynthesis.speak(fala);
  } else {
    alert('Voz não disponível.');
  }
}

function ir(pagina) {
  const tela = document.getElementById('tela');
  tela.innerHTML = `<h2>${pagina.charAt(0).toUpperCase() + pagina.slice(1)}</h2>`;
  if (pagina === 'falar') {
    falar('Oi, sou XGaia. O que você precisa?');
  } else if (pagina === 'sobre') {
    falar('Sou sua IA pessoal, feita pra aprender com você.');
  } else {
    falar('Bem-vindo.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ir('inicio');
});
