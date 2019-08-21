# Auth server - Segurança
Servidor de autenticação em node js usando jwt
## Pre requisitos
- node js
- npm
- git
- git flow

## Iniciando projeto
### Baixando modulos no npm
`npm install`
### Iniciando git flow
`git flow init`
Depois é só dar Enter para nao mudar nenhum braço do git

com isso seu projeto está devidamente inicializado

## Subindo servidor localmente
`DEBUG=auth-sakaue:* npm start`

## Criando features
features sao novas implementações que serao criadas no sistema com auxilio do git flow
### Criando uma feature
`git flow feature start nomeDaFeature`
 agora um novo braço é criado 
### Finalizando uma feature
`git add ./`
`git commit -m"commit message"`
`git flow feature finish nomeDaFeature`

## Subindo alterações
Certifique que vc está no braço develop com sua feature finalizada
`git pull`
`git push`
se um erro acontecer provavelmente algumas coisas terao que ser mescladas, se isso acontecer é só me mandar mensagem que eu ajudo a fazer o merge
