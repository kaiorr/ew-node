const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'herois', //database
  'postgres', // user
  'ew-node', //senha
  {
    host: 'localhost',
    dialect: 'postgres',
    // case sensitive
    quoteIdentifiers: false,
    // deprecation warning
    operatorsAliases: false

    // dialectOptions: {
    //   ssl: true,
    // },
  },
);

(async () => {
  const Herois = sequelize.define(
    'herois',
    {
      id: {
        type: Sequelize.INTEGER,
        required: true,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        required: true,
      },
      poder: {
        type: Sequelize.STRING,
        required: true,
      },
    },
    {
      //opcoes para base existente
      tableName: 'TB_HEROIS',
      freezeTableName: false,
      timestamps: false,


    },
  );

  // force: true will drop the table if it already exists
  await Herois.sync();
  // Table created
  const result = await Herois.create({
    nome: 'John',
    poder: 'Hancock',
  });
  console.log(
    'result',
    await Herois.findAll({ raw: true, attributes: ['nome', 'poder', 'id'] }),
  );
})();