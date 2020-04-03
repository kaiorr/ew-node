const { deepEqual, ok } = require('assert')

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'Flash',
  pode: 'Speed',
  id: 1
}

describe('Suite de manipulação de heróis', () => {
  it('deve pesquisar um heroi usando arquivos', async() =>{
    const expected= DEFAULT_ITEM_CADASTRAR

    ok(null, expected)
  })

  // it('deve cadastrar um herói, usando arquivos', async() => {
  //   const expected = DEFAULT_ITEM_CADASTRAR

  //   ok(null, expected)

  // })
})