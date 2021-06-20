//
// Sequelize를 이용한 관계
//
var Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('example', 'dev', 'secret', { dialect: 'mysql', host: 'database-2.c7oegoczl1tw.ap-northeast-2.rds.amazonaws.com',port:3306 });

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
   operatingtimeS: Sequelize.INTEGER,
   operatingtimeE: Sequelize.INTEGER,
   content: Sequelize.STRING(100),
   status: Sequelize.STRING(100)
}, { 
   timestamps: true });

async function doOneToMany1() {
   Brand.hasMany(Cafe, { foreignKey: 'brandId' });
   // Cafe에 BrandId FK 생성

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