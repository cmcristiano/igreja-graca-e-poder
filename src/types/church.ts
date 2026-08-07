export interface Culto {
  id: string;
  nome: string;
  dia: string;
  horario: string;
  descricao: string;
  versiculo?: string;
  referenciaBiblica?: string;
  imagemUrl: string;
  endereco: string;
  destaque?: boolean;
}

export interface Ministerio {
  id: string;
  nome: string;
  faixaEtaria?: string;
  diasAtividades: string;
  horario: string;
  descricao: string;
  responsavel: string;
  imagemUrl: string;
  icone: string;
}

export interface Evento {
  id: string;
  nome: string;
  data: string;
  horario: string;
  local: string;
  investimento?: string;
  observacao?: string;
  descricao: string;
  imagemUrl: string;
  encerrado: boolean;
  linkInscricao?: string;
}

export interface Mensagem {
  id: string;
  titulo: string;
  pregador: string;
  data: string;
  tema: string;
  textoBiblico: string;
  descricao: string;
  videoEmbedUrl?: string;
  imagemCapa: string;
}

export interface Lideranca {
  id: string;
  nome: string;
  cargo: string;
  bio: string;
  fotoUrl: string;
}

export interface ChurchConfig {
  nomeOficial: string;
  subtituloHero: string;
  frasePrincipal: string;
  logoUrl: string;
  contato: {
    enderecoCompleto: string;
    ruaNumero: string;
    bairro: string;
    cidadeEstado: string;
    cep: string;
    telefone: string;
    whatsapp: string;
    email: string;
    horarioAtendimento: string;
    googleMapsEmbedUrl?: string;
    googleMapsDirectLink: string;
  };
  redesSociais: {
    youtube: string;
    instagram: string;
    facebook: string;
    spotify: string;
  };
  transmissao: {
    estaAoVivo: boolean;
    linkAoVivo: string;
    canalYoutube: string;
    ultimaMensagem: {
      titulo: string;
      pregador: string;
      data: string;
      videoEmbedUrl: string;
    };
  };
  contribuicao: {
    explicacao: string;
    chavePix: string;
    favorecido: string;
    banco: string;
    agenciaConta: string;
    qrCodeImgUrl: string;
  };
  institucional: {
    quemSomos: string;
    historia: string;
    missao: string;
    visao: string;
    valores: string[];
    lideranca: Lideranca[];
  };
  cultos: Culto[];
  ministerios: Ministerio[];
  eventos: Evento[];
  mensagens: Mensagem[];
}
