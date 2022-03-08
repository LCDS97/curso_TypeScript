# Types do TS
---
## :bulb: Conhecendo os tipos básicos do TS :bulb:

:mailbox_with_mail: *As tipagens das variáveis são feitas após a declaração da mesma, especificando seu tipo e retorno*
```js
let variavel : (seu tipo)
```

---

### :diamonds: Boolean :diamonds:

- Podemos definir se uma varíavel tera seu retorno como:
    - True:  Verdadeiro
    - False: False

```js
let isOpen: boolean
isOpen = true
```

> A varíavel somente aceita receber o valor boolean ( True or False ), qualquer valor diferente disso, o TypeScript ira apontar o erro
>> Mesmo que o valor seja como "true" ou "false", ira ocorrer o erro, pois dentro das aspas é considerado como String

---

### :diamonds: String :diamonds:

*Ela pode ser representada de 3 formas:*

:red_circle: Exemplo de string: foo

:black_circle: Aspas Simples - 'foo'

:black_circle: Aspas Duplas  - "foo"

:black_circle: Backsticks - `foo`

---

### :diamonds: Number :diamonds:
:diamonds: A declaração de número pode ser tanto inteiro, hexadecimal, binário ou float, qualquer valor de número é aceito nesse caso

---

### :diamonds: Array :diamonds:

:diamonds: O array funciona de uma forma um pouco diferente, nesse caso você antes do array vazio define seu tipo

:flags: Existe duas formas de Tipar o Array

> array (type[])

```js
let items: string[]
items = ['foo', 'blz']
```

> let var: Array<type>

```js
let total: Array<number>
total = [3,4,5]
```

---

### :diamonds: Tuple / Tupla :diamonds:

:lock: É um array que aonde ja sabe o número de elementos de dentro do array e seu tipo :unlock:
Nesse caso ja sabemos exatamente como o array deve se comportar, esse tipo é bem popular em outras linguagens

> Nesse exemplo, sabemos que o array é composto por dois valores, primeiro tipo é number e o segundo é o string
```js
let title: [number, string]
title = [1, "foo"]
```

---

### :diamonds: Enum :diamonds:

:interrobang: Enum é enumerator serve para criar um conjunto de chave e valor :trident:

> Nesse exemplo, o usuário sabe somente o nome da cor, ao ser chamado a chave dele é pelo nome da cor e seu value é o hexadecimal do mesmo

```js
enum Colors {
    white = '#ffffff',
    black = '#000'
}
```

---

### :diamonds: Any :diamonds:

:x: O any é literalmente qualquer tipo, ele tanto pode ser uma string, number, boolean, etc.
:x: Ele não é recomendado pelo fato de varíavel não ser tipada não sabe se a confiança do retorno dela

```js
let coisa: any;
coisa = [1];
```
> Existe até uma opção ( noImplicitAny ) que voce tem disponível no TSconfig para forçar nenhuma varíavel ser any

---

### :diamonds: Void ( Vazio ) :diamonds:

:white_square_button: Serve para tipar funções que não retornam nada

```js
function logger(): void {
    console.log('ok')
}
```

---

### :diamonds: Null | Undefined :diamonds:

> São afirmações de false para condições e retorno sem conteúdo

```js
type Bla = string | undefined
```
> Não se atribui esse tipo para uma varíavel, pois ira se tornar inutilizavel pois não irá conseguir alterar seu valor

### :diamonds: Never :diamonds:

> É o tipo que nunca vai retornar, um exemplo o throw new Error ele não retorna um erro, ele joga uma excessão, nesse caso tem uma função que nunca vai retornar
```js
function error(): never {
    throw new Error("error");
}
```
--- 

### :diamonds: Object :diamonds:

> É um tipo que não é string, não é array, o objeto é qualquer coisa que não seja um desses tipos acima, ou seja, ele é um objeto

```js
let cart: object

cart = {
    key: "card"
}
```




