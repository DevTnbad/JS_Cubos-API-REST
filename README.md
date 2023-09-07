![](https://i.imgur.com/xG74tOh.png)

# 3 API's desenvolvidas em JavaScript com Node.js como Exercicios no curso Back-end da Cubus Academy. 

### Pré-requisitos:
- Node.js
- insomnia ou postman ou similares (para testar as requisições)

### Instalação:
1. Clone este repositório:
```
git clone https://github.com/DevTnbad/JS_Cubos-API-REST
```
2. Navegue até o diretório do projeto: 
```
cd JS_Cubos-API-REST
```
3. instale as dependências:
```
npm install
```

---
### 1. Cadastro de alunos:

- O que é: 
API para realização de cadastro, busca de aluno por id, atualizacao dos dados, e exclusao de alunos.
<br>

- Como executar:
```
npm run exe1
```
Listando Alunos: localhost:3000/alunos/?senha=cubos123 
<p>
<img width="300" src=prints/listaAlunos.png>
</p>
OBS:
 
- Em todos endpoint's a senha(cubos123) deverá ser passada por parâmetro do tipo query chamado 
**senha** conforme exemplo acima.

- Ao Utilizar o Patch para atualizar o curso, sera feita uma verificação se o curso é válido (Se existe na lista de cursos do arquivo ./dados/cursos.js), caso contrario a atualizacao nao sera efetuada.

Exemplo para utilizar os Endpoints:
```
GET Listar alunos: localhost:3000/alunos/?senha=cubos123
GET Listar Aluno por id: localhost:3000/alunos/1?senha=cubos123
POST Cadastrar aluno: localhost:3000/alunos?senha=cubos123
PUT Atualizar Aluno: localhost:3000/alunos/1?senha=cubos123
PATCH Atualizar Nome: localhost:3000/alunos/1/nome?senha=cubos123
PATCH Atualizar Sobrenome: localhost:3000/alunos/1/sobrenome?senha=cubos123
PATCH Atualizar idade: localhost:3000/alunos/1/idade?senha=cubos123
PATCH Atualizar curso: localhost:3000/alunos/1/curso?senha=cubos123
DELETE Excluir aluno: localhost:3000/alunos/5?senha=cubos123

OBS: Nos metodos POST, PUT e PATCH os dados devem ser passados no body (corpo) da requisição em formato json.

Exemplo de POST e PUT:
 {
	"nome": "Toddy Simas",
  "sobrenome": "cruz",
	"idade": 19,
	"curso": "Css"
 }

 Exemplo de PATCH:
{
	"curso": "HTML"
}
```

<hr>

### 2. Lista de convidados:

- O que é: 
API para controle de convidados de evento, onde é possivel listar todos os convidados, consultar um convidado pelo nome, adicionar e excluir.
<br>

- Como executar:
```
npm run exe2
```
Listando Convidados: localhost:3000/convidados
<p>
<img width="300" src=prints/listaConvidados.png>
</p>

Exemplo para utilizar os Endpoints:
```
GET Listar convidados: localhost:3000/convidados
GET Consultar convidado: localhost:3000/convidados/Amanda
POST Adicionar convidado: localhost:3000/convidados 
DELETE Excluir convidado: localhost:3000/convidados/Amanda

Obs: para adicionar um convidado e nome deve ser passado no body (corpo) da requisição em formato json. conforme exemplo: 
{
	"nome": "Kiara"
}
```

---
### 3. Biblioteca Online:

- O que é: 
API de um sistema para controle de livros em uma biblioteca. Possibilitando listar todos os livros, listar por id, Substituir, atualizar e excluir.
<br>

- Como executar:
```
npm run exe3
```
Listando Livros: localhost:3000/livros/
<p>
<img width="300" src=prints/listaLivros.png> 
</p>

Exemplo para utilizar os Endpoints:
```
GET Listar Livros: localhost:3000/livros/
GET Listar Livro Por Id: localhost:3000/livros/3
POST Adicionar livro: localhost:3000/livros
PUT Substituir livro: localhost:3000/livros/5
PATCH Atualizar livro: localhost:3000/livros/1
DELETE Excluir livro: localhost:3000/livros/1

OBS: Nos métodos POST, PUT e PATCH os dados devem ser passados no body (corpo) da requisição em formato json. 

Exemplo de POST e PUT: 
{
	"titulo": "Jonas e a pedra sentimental",
	"autor": "Clarice Crawling",
	"ano": "2015",
	"numPaginas": 184
}

Exemplo de Patch: 
{
	"titulo": "Jonas, o Guerreiro"
}
```
---
