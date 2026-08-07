import { ChurchConfig } from '../types/church';

export const churchConfig: ChurchConfig = {
  nomeOficial: "Ministério Internacional Graça e Poder",
  subtituloHero: "Se creres, verás a glória de Deus.",
  frasePrincipal: "",
  logoUrl: "./images/logo/logo-graca-e-poder.png",
  
  contato: {
    enderecoCompleto: "Rua Dom Henrique, 111 - Vila Real - Balneário Camboriú / SC",
    ruaNumero: "Rua Dom Henrique, 111",
    bairro: "Vila Real",
    cidadeEstado: "Balneário Camboriú - SC",
    cep: "",
    telefone: "",
    whatsapp: "",
    email: "",
    horarioAtendimento: "",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.4983050085817!2d-48.6185!3d-27.0019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b6287c!2sRua%20Dom%20Henrique%2C%20111%20-%20Vila%20Real%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
    googleMapsDirectLink: "https://maps.google.com/?q=Rua+Dom+Henrique+111+Vila+Real+Balneário+Camboriú+SC"
  },

  redesSociais: {
    youtube: "",
    instagram: "",
    facebook: "",
    spotify: ""
  },

  transmissao: {
    estaAoVivo: false,
    linkAoVivo: "",
    canalYoutube: "",
    ultimaMensagem: {
      titulo: "",
      pregador: "",
      data: "",
      videoEmbedUrl: ""
    }
  },

  contribuicao: {
    explicacao: "",
    chavePix: "",
    favorecido: "",
    banco: "",
    agenciaConta: "",
    qrCodeImgUrl: ""
  },

  institucional: {
    quemSomos: "",
    historia: "",
    missao: "",
    visao: "",
    valores: [],
    lideranca: []
  },

  cultos: [
    {
      id: "culto-da-familia",
      nome: "Culto da Família",
      dia: "Domingo",
      horario: "19h",
      descricao: "",
      imagemUrl: "./images/cultos/culto-da-familia.jpg",
      endereco: "Rua Dom Henrique, 111 - Vila Real - Balneário Camboriú",
      destaque: true
    },
    {
      id: "culto-fe-e-poder",
      nome: "Culto Fé e Poder",
      dia: "",
      horario: "19h",
      descricao: "",
      versiculo: "Se creres, verás a glória de Deus",
      referenciaBiblica: "João 11:40",
      imagemUrl: "./images/cultos/culto-fe-e-poder.png",
      endereco: "Rua Dom Henrique, 111 - Vila Real - Balneário Camboriú",
      destaque: false
    },
    {
      id: "reuniao-de-oracao",
      nome: "Reunião de Oração",
      dia: "Terça-feira",
      horario: "20h",
      descricao: "",
      versiculo: "Nunca deixem de orar",
      referenciaBiblica: "1 Tessalonicenses 5:17",
      imagemUrl: "./images/cultos/reuniao-de-oracao.png",
      endereco: "Rua Dom Henrique, 111 - Vila Real - Balneário Camboriú",
      destaque: false
    }
  ],

  ministerios: [
    {
      id: "junad",
      nome: "JUNAD",
      faixaEtaria: "Juniores e Adolescentes de 7 a 16 anos",
      diasAtividades: "Todos os Sábados",
      horario: "15h30 às 17h30",
      descricao: "",
      responsavel: "",
      imagemUrl: "./images/ministerios/junad.jpg",
      icone: "UserGroupIcon"
    }
  ],

  eventos: [
    {
      id: "retiro-da-familia",
      nome: "Retiro da Família",
      data: "23 a 25 de outubro",
      horario: "",
      local: "",
      investimento: "R$ 150,00 por pessoa",
      observacao: "Crianças até 10 anos não pagam",
      descricao: "",
      imagemUrl: "./images/eventos/retiro-da-familia.png",
      encerrado: false,
      linkInscricao: ""
    },
    {
      id: "batismo",
      nome: "Batismo",
      data: "",
      horario: "",
      local: "",
      descricao: "",
      imagemUrl: "./images/eventos/batismo.jpg",
      encerrado: false
    }
  ],

  mensagens: []
};

/**
 * Função utilitária para verificar se uma informação está pendente/ausente
 */
export function isPending(val?: string | null): boolean {
  if (!val) return true;
  const trimmed = val.trim();
  return (
    trimmed === '' ||
    trimmed.includes('[INFORMAÇÃO PENDENTE]') ||
    trimmed.includes('[INSERIR') ||
    trimmed.startsWith('[')
  );
}
