# 💰 API Financeira - Clean Architecture

## 📌 Descrição

Esta é uma API REST simples para controle financeiro, desenvolvida com foco em boas práticas de arquitetura utilizando **Clean Architecture**.

Ela permite:

* Criar transações (entrada e saída)
* Listar transações
* Calcular saldo total (income, expense, total)

O objetivo do projeto é servir como base de aprendizado e demonstração de:

* Organização de código
* Separação de responsabilidades
* Testes unitários
* Integração com banco (Supabase)

---

## 🧠 Arquitetura

O projeto segue o padrão **Clean Architecture**, dividido em camadas:

```
src/
 ├── domain/           # regras de negócio puras
 ├── application/      # casos de uso
 ├── infrastructure/   # banco (Supabase)
 ├── interfaces/       # controllers, rotas, middlewares
 └── main/             # inicialização da aplicação
```

### 📌 Fluxo da aplicação

```
Request → Controller → UseCase → Repository → Banco (Supabase)
```

---

## 🚀 Tecnologias utilizadas

* Node.js
* TypeScript
* Express
* Supabase
* Jest (testes)

---

## 📦 Instalação

### 1. Clone o projeto

```bash
git clone <url-do-repositorio>
cd api-financas
```

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_KEY=sua-chave-aqui
```

---

### 4. Configure o banco (Supabase)

Execute o seguinte SQL no Supabase:

```sql
create table transactions (
  id uuid primary key,
  title text,
  amount numeric,
  type text,
  category text,
  "createdAt" timestamp
);
```

---

## ▶️ Executando o projeto

```bash
npm run dev
```

A API estará disponível em:

```
http://localhost:3000
```

---

## 📡 Rotas da API

### 🔹 Criar transação

**POST /transactions**

```json
{
  "title": "Salário",
  "amount": 5000,
  "type": "income",
  "category": "job"
}
```

---

### 🔹 Listar transações

**GET /transactions**

---

### 🔹 Obter saldo

**GET /balance**

Resposta:

```json
{
  "income": 6000,
  "expense": 2000,
  "total": 4000
}
```

---

## 🧪 Testes

### Rodar testes

```bash
npm test
```

---

### Testes implementados

* CreateTransaction
* GetBalance
* ListTransactions

---

## 📁 Estrutura de testes

Os testes ficam próximos aos arquivos:

```
CreateTransaction.ts
CreateTransaction.spec.ts
```

---

## ⚠️ Observações importantes

* O arquivo `.env` NÃO deve ser versionado
* Use `.env.example` para referência
* O projeto utiliza repositórios (Repository Pattern) para desacoplar o banco

---

## 🔒 Boas práticas aplicadas

* Separação de camadas (Clean Architecture)
* Inversão de dependência
* Testes unitários isolados
* Validação de variáveis de ambiente

---

## 📌 Próximos passos (melhorias)

* Autenticação de usuários
* Validação de dados (Zod)
* Middlewares globais (erro, auth)
* Integração com automações (ex: notificações)

---

## 👨‍💻 Objetivo do projeto

Este projeto foi desenvolvido com foco em:

* Aprendizado de arquitetura limpa
* Construção de APIs escaláveis
* Preparação para projetos reais

---

## 📄 Licença

Este projeto é open-source e pode ser utilizado para estudos e melhorias.
