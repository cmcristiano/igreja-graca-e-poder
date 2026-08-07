# Arquitetura e Plano de Implementação do Painel Administrativo

Este documento detalha o planejamento arquitetural e a infraestrutura recomendada para a futura integração do backend e painel administrativo do **Ministério Internacional Graça e Poder**.

---

## 🛠️ 1. Banco de Dados e Backend Recomendados

Recomendamos a adoção do **Supabase** (ou **Firebase**) por oferecerem:
- Autenticação pronta por E-mail/Senha com suporte a 2FA.
- PostgreSQL com suporte a **Row Level Security (RLS)** para proteção rigorosa de dados confidenciais (pedidos de oração).
- Storage de objetos para fotos de eventos, cultos e liderança com CDN integrada.
- APIs REST e GraphQL geradas automaticamente com tipagem TypeScript nativa.

---

## 🔒 2. Autenticação e Perfis de Usuários (RBAC)

A autenticação será feita via JWT no Supabase Auth. Definiremos 3 níveis de acesso:

| Perfil | Permissões |
|---|---|
| **Administrador (Pastor / Secretário Principal)** | Acesso total a todas as tabelas, configurações financeiras, gestão de eventos, mensagens e orações. |
| **Equipe de Intercessão (Pastoral / Oração)** | Leitura exclusiva dos **Pedidos de Oração** (para responder e interceder), sem acesso a dados financeiros ou edição da marca. |
| **Editor de Mídia (Comunicação / Som)** | Permissão para cadastrar e editar mensagens do YouTube, imagens de eventos e avisos de cultos. |

---

## 🛡️ 3. Gestão Segura de Pedidos de Oração

Pedidos de oração contêm dados pessoais sensíveis e devem respeitar estritamente a privacidade:
- **Tabela no Supabase**: `pedidos_oracao`
- **Políticas de Segurança (RLS)**:
  - `INSERT`: Aberto ao público (`anon`), permitindo envios sem necessidade de login.
  - `SELECT / UPDATE / DELETE`: Bloqueado estritamente para usuários logados pertencentes à `role: intercessao` ou `role: admin`.
- NENHUM pedido de oração será retornado em queries públicas da aplicação.

---

## 📁 4. Gestão de Conteúdos (Cultos, Eventos e Mensagens)

### Módulos do Painel
1. **Gestão de Cultos (`cultos`)**: Edição dos horários, versículos e imagens de capa dos cultos (Fé e Poder, Reunião de Oração).
2. **Gestão de Eventos (`eventos`)**: Cadastro de retiros (Retiro da Família), batismos e conferências com link de inscrição, valor do investimento e flag `encerrado`.
3. **Gestão de Mensagens (`mensagens`)**: Inclusão de pregações gravadas com link do YouTube, pregador, texto bíblico e tema.
4. **Dados de Contribuição (`config_financeira`)**: Edição da chave Pix e dados bancários com restrição exclusiva a Administradores da tesouraria.

---

## 🖼️ 5. Armazenamento de Imagens (Storage)

Criação de Buckets públicos no Supabase Storage:
- `images-cultos/`
- `images-eventos/`
- `images-ministerios/`
- `images-lideranca/`

Políticas de gravação: Upload permitido apenas para usuários autenticados com papéis de mídia ou administração.

---

## 📐 6. Esquema Simplificado do Banco de Dados (PostgreSQL / Supabase)

```sql
-- Tabela de Pedidos de Oração
CREATE TABLE pedidos_oracao (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT,
  contato TEXT,
  pedido TEXT NOT NULL,
  confidencial BOOLEAN DEFAULT true,
  atendido BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Habilitar RLS no Pedido de Oração
ALTER TABLE pedidos_oracao ENABLE ROW LEVEL SECURITY;

-- Política de Inserção Pública
CREATE POLICY "Permitir envio publico de oracao" ON pedidos_oracao
  FOR INSERT WITH CHECK (true);

-- Política de Leitura Restrita a Liderança
CREATE POLICY "Permitir leitura apenas para equipe autorizada" ON pedidos_oracao
  FOR SELECT USING (auth.role() = 'authenticated');
```
