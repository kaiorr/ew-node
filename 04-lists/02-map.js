const service = require('./service');

async function main() {
  try {
    
    const results = await service.obterPessoas('a')
    // const names = []
    
    // results.results.forEach(function(item) {
    //   names.push(item.name)
    // })

    // const names = results.results.map(function(pessoa) {
    //   return pessoa.name
    // })

    const names = results.results.map((pessoa) => pessoa.name)

    console.log('names', names)
  } catch (error) {
    console.log('Deu Ruim ', error)
  }
}

main()