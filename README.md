# Todo List
### Marco Túlio de Pinho
--------------------------

Uma lista de lembretes em React e .Net.

## Especificações
-------------------
Programa desenvolvido utilizando .Net SDK 8.0.0; Microsoft.AspNetCore.App 8.0.1; NodeJs 18.16.0.

Utilizamos do SqlServer para a implementação do banco de dados, utilizando do servidor local.

## Componentes
--------------------
### Todo
Representa um lembrete. Possui um corpo com **id**, **conteúdo** e **data**, e uma função responsável por remover o lembrete ao ser concluído.
### TodoForm
Representa o formulário de criação de um novo lembrete. Possui o **conteúdo do lembrete** e **data** para criação do lembrete, **loading** para captar se o formulário está em carregamento, e as funções para 
cuidar de alterações no caompo do conteúdo, da data ou no caso do envio do formulário.
### TodoList
Se encarrega da renderização da lista de conteúdos, de acordo com os requerimentos do projeto.
### App
Possui a lógica para a execução da funcionalidade dos demais componentes.

Separamos funções auxiliares para o diretório **helpers** para maior organização do projeto.

## API
---------------------
A API possui um controlador, que trata dos requerimentos de GET, POST, PUT e DELETE de *Todo*s do banco de dados.

O *Todo* é um modelo que possui um **id**, um **conteúdo** e uma **data**. Definimos uma interface chamada **ITodoRepository** e uma classe que a implementa (**TodoRepository**) para extrair lógica do controlador,
melhorando a organização do código e a separação de funções.

## Como Utilizar
---------------------
Como foi utilizado um servidor local para executar o programa, é necessário alterar as chaves que ligam ao mesmo. Primeiramente, modifique a string de conexão no arquivo /api/appsettings.json. Descomente a linha (remove os dois "//") e substitua
{PCNAME} e {DATABASENAME} de acordo com sua configuração.
Após isso, em /frontend/source/api.tsx, edite a linha "axios.defaults.baseURL = " e substitua a URL que se segue pela URL da porta que a API está usando.

Para iniciar a API, vá ao diretório /api e use o comando **dotnet watch run**. Através do Swagger, é possível obter a URL da porta. Para iniciar o frontend, vá ao diretório /frontend e use o comando **npm start**.
