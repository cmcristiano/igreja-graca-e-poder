/**
 * Configuração Centralizada da Igreja
 * Altere apenas este arquivo para atualizar dados de endereço, horários, Pix, redes sociais, etc.
 */
const IGREJA_CONFIG = {
  nome: "[INSERIR NOME OFICIAL DA IGREJA]",
  fraseHero: "[INSERIR FRASE PRINCIPAL DA IGREJA]",
  subtituloHero: "Um lugar de fé, acolhimento, comunhão e esperança para toda a família.",
  
  contato: {
    endereco: "[INSERIR ENDEREÇO COMPLETO DA IGREJA]",
    bairro: "[INSERIR BAIRRO]",
    cidadeEstado: "[INSERIR CIDADE/ESTADO]",
    telefone: "[INSERIR TELEFONE]",
    whatsapp: "[INSERIR NUMERO WHATSAPP]", // Exemplo: "5511999999999"
    email: "[INSERIR E-MAIL OFICIAL]",
    horarioAtendimento: "[INSERIR HORÁRIO DE ATENDIMENTO DA SECRETARIA]"
  },

  redesSociais: {
    youtube: "[INSERIR LINK DO YOUTUBE]",
    instagram: "[INSERIR LINK DO INSTAGRAM]",
    facebook: "[INSERIR LINK DO FACEBOOK]",
    spotify: "[INSERIR LINK DO SPOTIFY]"
  },

  transmissao: {
    linkAoVivo: "[INSERIR LINK DE TRANSMISSÃO AO VIVO - YOUTUBE/FACEBOOK]",
    estaAoVivo: false, // Alterar para true quando estiver ao vivo
    ultimaMensagem: {
      titulo: "[INSERIR TÍTULO DA ÚLTIMA PREGAÇÃO]",
      pregador: "[INSERIR NOME DO PREGADOR]",
      data: "[INSERIR DATA DA PREGAÇÃO]",
      embedUrl: "[INSERIR LINK DE EMBED DO VÍDEO]"
    }
  },

  contribuicao: {
    explicacao: "[INSERIR TEXTO EXPLICATIVO SOBRE DÍZIMOS E OFERTAS]",
    chavePix: "[INSERIR CHAVE PIX]",
    favorecido: "[INSERIR NOME DO FAVORECIDO DO PIX]",
    banco: "[INSERIR BANCO E AGÊNCIA/CONTA]",
    qrCodeImg: "" // Deixe vazio se não enviado; exibe placeholder visual
  },

  institucional: {
    quemSomos: "[INSERIR QUEM SOMOS DA IGREJA]",
    historia: "[INSERIR HISTÓRIA DA IGREJA]",
    missao: "[INSERIR MISSÃO DA IGREJA]",
    visao: "[INSERIR VISÃO DA IGREJA]",
    valores: "[INSERIR VALORES DA IGREJA]",
    lideranca: [
      {
        nome: "[INSERIR NOME DO PASTOR PRINCIPAL]",
        cargo: "[INSERIR CARGO/FUNÇÃO]",
        bio: "[INSERIR BREVE BIOGRAFIA]",
        foto: "" // URL da foto enviada
      }
    ]
  },

  cultos: [
    {
      id: 1,
      nome: "[INSERIR NOME DO CULTO PRINCIPAL]",
      dia: "[INSERIR DIA DA SEMANA]",
      horario: "[INSERIR HORÁRIO]",
      descricao: "[INSERIR PEQUENA DESCRIÇÃO DO CULTO]",
      publico: "[INSERIR PÚBLICO INDICADO]",
      principal: true,
      foto: ""
    },
    {
      id: 2,
      nome: "[INSERIR NOME DO SEGUNDO CULTO]",
      dia: "[INSERIR DIA DA SEMANA]",
      horario: "[INSERIR HORÁRIO]",
      descricao: "[INSERIR PEQUENA DESCRIÇÃO DO CULTO]",
      publico: "[INSERIR PÚBLICO INDICADO]",
      principal: false,
      foto: ""
    }
  ],

  ministerios: [
    {
      id: 1,
      nome: "[INSERIR NOME DO MINISTÉRIO 1]",
      descricao: "[INSERIR DESCRIÇÃO DO MINISTÉRIO]",
      responsavel: "[INSERIR NOME DO RESPONSÁVEL]",
      dias: "[INSERIR DIAS DE ATIVIDADE]",
      icone: "fa-users"
    }
  ],

  eventos: [
    {
      id: 1,
      nome: "[INSERIR NOME DO PRÓXIMO EVENTO]",
      data: "[INSERIR DATA DO EVENTO]",
      horario: "[INSERIR HORÁRIO DO EVENTO]",
      local: "[INSERIR LOCAL DO EVENTO]",
      descricao: "[INSERIR DESCRIÇÃO DO EVENTO]",
      linkInscricao: "[INSERIR LINK DE INSCRIÇÃO]",
      encerrado: false
    }
  ],

  mensagens: [
    {
      id: 1,
      titulo: "[INSERIR TÍTULO DA MENSAGEM 1]",
      pregador: "[INSERIR PREGADOR]",
      data: "[INSERIR DATA]",
      tema: "[INSERIR TEMA]",
      textoBiblico: "[INSERIR TEXTO BÍBLICO]",
      descricao: "[INSERIR BREVE DESCRIÇÃO]",
      videoUrl: "[INSERIR LINK DO VÍDEO YOUTUBE]"
    }
  ]
};
