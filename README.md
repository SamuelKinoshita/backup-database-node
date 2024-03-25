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

##　日本語
===

## プロジェクト：Node.jsを使用したデータベースバックアップ

これは、Node.jsを使用してMySQLデータベースの自動バックアップを実行するためのシンプルなプロジェクトです。

## 必要なもの

* マシンにインストールされたNode.js
* アクセス可能で設定されたMySQLデータベース

## インストール

1. このリポジトリをローカルマシンに複製します:

```
git clone https://github.com/SamuelKinoshita/backup-database-node.git
```

2. プロジェクトディレクトリに移動します:

```
cd backup-database-node
```

3. プロジェクトの依存関係をインストールします:

```
npm install
```

## 設定

プロジェクトのルートに.envファイルを作成し、次の環境変数を追加します:

```
Host=YOUR_DATABASE_HOST
User=YOUR_DATABASE_USERNAME
Password=YOUR_DATABASE_PASSWORD
Database=YOUR_DATABASE_NAME
```

YOUR_DATABASE_HOST、YOUR_DATABASE_USERNAME、YOUR_DATABASE_PASSWORD、YOUR_DATABASE_NAMEを、MySQLデータベースの対応する値に置き換えます。

## 使用方法

バックアップスクリプトを実行するには、ターミナルで次のコマンドを使用します:

```
node backup.js "TIME_1" "TIME_2"
```

TIME_1とTIME_2を、バックアップをスケジュールしたい時間に置き換えます。引数として最大2つのバックアップ時間を指定できます。

例：

```
node backup.js "0 2 * * *" "0 6 * * *"
```

これは、毎日午前2時と午前6時にバックアップをスケジュールします。

時間帯が指定されていない場合は、警告が表示され、バックアップはスケジュールされません。
