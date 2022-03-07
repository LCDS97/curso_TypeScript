# Criando e configurando TSconfig
---
## Iniciando o TS Config

Iremos agora utilizar o TsConfig, porque no caso no primeira aula, somente era necessário  compilar um arquivo

Para um projeto é necessário ter o arquivo de configuração para informar alguns detalhes:
- Compilar varios arquivos
- Definir a pasta aonde vai ser compilado
- Regras do TypeScript para seguir

> Para iniciar a configuração do TypeScript
>> `tsc --init`;

tsconfig.json é o arquivo onde define todas essas configurações

Ele possuí varias opções que você pode habilitar no seu TypeScript

- "Target" - Desde de compatibilidade com browsers definindo qual ECMA vai ser utilizado
- "Module" - A montagem dos módulos do Projeto
- "OutDir" - Diretório aonde vai ser compilado

A próprio json deixa todos comentários de cada comando para voce verificar o que a opção/regra afeta no projeto

### Observação / Correção

No arquivo do index.ts, o TypeScript identifica que o botão possilvemente pode ser nulo, nesse caso ele não compila, até ser resolvido o erro

No código para definir que temos certeza que temos o botão, então podemos colocar a exclamação no final do button
```js
const button = document.getElementById("button")!;
```

Após isso é compilado normalmente o projeto

