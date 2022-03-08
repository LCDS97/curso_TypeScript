// boolean
// Ele somente retorna true or false

let isOpen: boolean
isOpen = true

// string
let message: string
message = `foo ${isOpen}`;

// number
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ['blz', 'ok']

// Outra forma de Declarar o tipo do Array
let values: Array<number>
values = [1,2,3]

// tuple
let title: [number, string]
title = [1, "foo"]

// enum
enum Colors {
    white = '#ffffff',
    black = '#000'
}

// any
let coisa: any;
coisa = [1];

// void (vazio)
function logger(): void {
    console.log('ok')
}

// null | undefined
type Bla = string | undefined

// never
function error(): never {
    throw new Error("error");
}

// Object
let cart: object

cart = {
    key: "card"
}

