/**
 * Lógica Interativa do Site Institucional da Igreja
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualizar Ano no Rodapé
  const anoAtualSpan = document.getElementById('anoAtual');
  if (anoAtualSpan) {
    anoAtualSpan.textContent = new Date().getFullYear();
  }

  // 2. Controlar Menu Responsivo (Hambúrguer)
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em qualquer link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 3. Carregar dados da configuração se preenchidos
  carregarDadosConfiguracao();

  // 4. Validação e Feedback do Formulário de Pedido de Oração
  const formOracao = document.getElementById('formOracao');
  if (formOracao) {
    formOracao.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Seu pedido de oração foi recebido com sucesso! Estaremos orando por você.');
      formOracao.reset();
    });
  }

  // 5. Validação e Feedback do Formulário de Contato
  const formContato = document.getElementById('formContato');
  if (formContato) {
    formContato.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
      formContato.reset();
    });
  }
});

/**
 * Atualiza campos da página com base na IGREJA_CONFIG se os valores forem alterados
 */
function carregarDadosConfiguracao() {
  if (typeof IGREJA_CONFIG === 'undefined') return;

  // Nome e Frase Hero
  if (IGREJA_CONFIG.nome && !IGREJA_CONFIG.nome.includes('[INSERIR')) {
    document.title = `${IGREJA_CONFIG.nome} - Site Institucional`;
    setElemText('heroNomeIgreja', IGREJA_CONFIG.nome);
    setElemText('footerNomeIgreja', IGREJA_CONFIG.nome);
    setElemText('copyNomeIgreja', IGREJA_CONFIG.nome);
  }

  if (IGREJA_CONFIG.fraseHero && !IGREJA_CONFIG.fraseHero.includes('[INSERIR')) {
    setElemText('heroFrasePrincipal', IGREJA_CONFIG.fraseHero);
  }

  // Institucional
  setElemText('txtQuemSomos', IGREJA_CONFIG.institucional.quemSomos);
  setElemText('txtHistoria', IGREJA_CONFIG.institucional.historia);
  setElemText('txtMissao', IGREJA_CONFIG.institucional.missao);
  setElemText('txtVisao', IGREJA_CONFIG.institucional.visao);
  setElemText('txtValores', IGREJA_CONFIG.institucional.valores);

  // Contato
  setElemText('valEndereco', IGREJA_CONFIG.contato.endereco);
  setElemText('valTelefone', IGREJA_CONFIG.contato.telefone);
  setElemText('valWhatsapp', IGREJA_CONFIG.contato.whatsapp);
  setElemText('valEmail', IGREJA_CONFIG.contato.email);
  setElemText('valAtendimento', IGREJA_CONFIG.contato.horarioAtendimento);
  setElemText('footerEndereco', IGREJA_CONFIG.contato.endereco);

  // WhatsApp Flutuante
  const floatWa = document.getElementById('linkWhatsappFloat');
  if (floatWa && IGREJA_CONFIG.contato.whatsapp && !IGREJA_CONFIG.contato.whatsapp.includes('[INSERIR')) {
    floatWa.href = `https://wa.me/${IGREJA_CONFIG.contato.whatsapp.replace(/\D/g, '')}`;
  }

  // Pix
  setElemText('valChavePix', IGREJA_CONFIG.contribuicao.chavePix);
  setElemText('valFavorecido', IGREJA_CONFIG.contribuicao.favorecido);
  setElemText('valBanco', IGREJA_CONFIG.contribuicao.banco);
  setElemText('txtExplicacaoPix', IGREJA_CONFIG.contribuicao.explicacao);
}

function setElemText(id, text) {
  const el = document.getElementById(id);
  if (el && text) {
    el.textContent = text;
  }
}

/**
 * Função para copiar a chave Pix com feedback
 */
function copiarPix() {
  const chavePixElem = document.getElementById('valChavePix');
  if (chavePixElem) {
    const texto = chavePixElem.textContent.trim();
    navigator.clipboard.writeText(texto).then(() => {
      alert(`Chave Pix copiada com sucesso: ${texto}`);
    }).catch(err => {
      console.error('Erro ao copiar chave pix:', err);
    });
  }
}
