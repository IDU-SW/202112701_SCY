//
// Sequelize를 이용한 관계
//
var Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('example', 'dev', 'secret', { dialect: 'mysql', host: '127.0.0.1',port:3307 });

const Brand = sequelize.define('Brand', {
   brand: Sequelize.STRING(100)
 }, { indexes: [
    {
        unique: true,
        fields: ['brand']
    }
 ],
 timestamps: false });

const Cafe = sequelize.define('Cafes', {
   location: Sequelize.STRING(100),
   name: Sequelize.STRING(100),
   operatingtimeS: Sequelize.STRING(100),
   operatingtimeE: Sequelize.STRING(100),
   content: Sequelize.STRING(100),
   created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defalutValue: sequelize.literal('now()'),
  },
}, { 
   timestamps: false });

async function doOneToMany1() {
   Brand.hasMany(Cafe, { foreignKey: 'brandId' });
   // Memebers에 BrandId FK 생성

   try {
      await Brand.sync();
      await Cafe.sync();
   }
   catch (error) {
      console.log('Error :', error);
   }
}


(async () => {
   await doOneToMany1();
})();

db.Brand = Brand;
db.Cafe = Cafe;

module.exports = db;