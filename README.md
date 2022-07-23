# Nesta atividade praticando bastante o uso de callbacks reproduzindo os métodos mais utilizados do JS


O JavaScript fornece vários "métodos de iteração" baseados no mesmo tipo de padrão de callback que você viu no caso do forEach() na aula sobre Funções Callback. Essencialmente, eles são loops prontos, com alguns comportamentos adicionados para ter um pouco de variação do padrão.

1. [forEach()]
3. [map()]
3. [filter()]
4. [find()]
5. [findIndex()]
6. [reduce()]
7. [some()]
8. [every()]
9. [fill()]
10. [includes()]
11. [indexOf()]
12. [concat()]
13. [join()]




## Sua Tarefa [18 pontos]

Sua tarefa será reproduzir o comportamento desses métodos de Array com suas funções callback, incluindo os parametros opcionais e _sem usar as versões incorporadas do JavaScript_. A intenção é que qualquer desenvolvedor que for utilizar seu código consiga obter o mesmo resultado que teria utilizando os métodos de iteração portanto, não "chumbe" variáveis em suas funções reprodutoras. Os métodos que deverão ser reproduzidos são:

1. [forEach()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
3. [map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
3. [filter()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro) 
4. [find()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
5. [findIndex()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
6. [reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
7. [some()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
8. [every()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
9. [fill()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
10. [includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains)
11. [indexOf()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
12. [concat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
13. [join()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

### EXTRA [3 pontos]

1. [slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
2. [flat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
3. [flatMap()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

Dê os seguintes nomes a cada uma das funções: newForEach, newMap, newFilter, newFind, newFindIndex, newReduce, newSome, newEvery, newFill, newIncludes, newIndexOf, newConcat, newJoin. Sua implementação de cada um dos métodos de iteração acima deve resultar nos _mesmos argumentos e valores de retorno_.

IMPORTANTE: Para propósitos de teste/avaliação, é importante que o nome das funções seja igual ao padrão mencionado acima.

## Por exemplo:

```js
function myCallback(value) {
    return `${value} é muito bom!`
};
let myArr = ["maçã", "uva", "pera"];
let retornoMap = myArr.map(myCallback);
let retornoNewMap = newMap(myArr, myCallback);
retornoMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
retornoNewMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
myArr // Deve retornar ["maçã", "uva", "pera"];
```

__Note que possuem o mesmo retorno e o array original não foi modificado, conforme a documentação do Array.prototype.map()__.

### Dica:

Nem todos os métodos precisam de callback. Para saber se um método necessita, consulte a documentação do mdn, de seu respectivo método e veja a sintaxe. Por exemplo, do forEach:

<figure>
          <img
            src="https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint1/img//entrega-katas-de-javascript-7/foreach-sintaxe.png"
            alt="Torre de hanoi example."
            rel="noopener noreferrer"
          />
          <figcaption>Exemplo: método forEach.</figcaption>
        </figure>



# Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/reproduzindo-metodos) e envie o link do seu repositório nos comentários.  Não se esqueça de deixar o repositório com a privacidade Internal.
