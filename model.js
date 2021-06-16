//
// Sequelize를 이용한 관계
//
var Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize('example', 'dev', 'secret', { dialect: 'mysql', host: '127.0.0.1',port:3307 });

const Group = sequelize.define('Group', {
   title: Sequelize.STRING(100)
 }, { indexes: [
    {
        unique: true,
        fields: ['title']
    }
 ],
 timestamps: false });

const Todo = sequelize.define('Todo', {
   title: Sequelize.STRING(100),
   status : Sequelize.STRING(100)
}, { timestamps: false });

async function doOneToMany1() {
   Group.hasMany(Todo, { foreignKey: 'groupId' });
   // Memebers에 GroupId FK 생성

   try {
      await Group.sync();
      await Todo.sync();
   }
   catch (error) {
      console.log('Error :', error);
   }
}


(async () => {
   await doOneToMany1();
})();

db.Group = Group;
db.Todo = Todo;

module.exports = db;