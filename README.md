## Projeto de Backup de Banco de Dados com Node.js

Este é um projeto simples para realizar backups automatizados de um banco de dados MySQL utilizando Node.js.

## Pré-requisitos

- Node.js instalado na máquina
- Banco de dados MySQL acessível e configurado

## Instalação

1. Clone este repositório para sua máquina local:

git clone https://github.com/SamuelKinoshita/backup-database-node.git

2. Navegue até o diretório do projeto:
cd backup-database-node

3.Instale as dependências do projeto:
npm install


## Configuração
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
Host=SEU_HOST_DO_BANCO_DE_DADOS
User=SEU_USUARIO_DO_BANCO_DE_DADOS
Password=SUA_SENHA_DO_BANCO_DE_DADOS
Database=SEU_NOME_DE_BANCO_DE_DADOS

Substitua SEU_HOST_DO_BANCO_DE_DADOS, SEU_USUARIO_DO_BANCO_DE_DADOS, SUA_SENHA_DO_BANCO_DE_DADOS e SEU_NOME_DE_BANCO_DE_DADOS pelos valores correspondentes do seu banco de dados MySQL.

## Uso
Para executar o script de backup, você pode usar o seguinte comando no terminal:
node backup.js "HORARIO_1" "HORARIO_2"

Substitua HORARIO_1 e HORARIO_2 pelos horários nos quais você deseja agendar os backups. Você pode fornecer até dois horários de backup como argumentos.

node backup.js "0 2 * * *" "0 6 * * *"

Isso agendará backups para as 2 da manhã e as 6 da manhã todos os dias.
Se nenhum horário for fornecido, um aviso será exibido e nenhum backup será agendado.