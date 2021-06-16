const {Todo} = require('../model');
const {Group} = require('../model');

exports.GroupList = async (req, res) => {
    try {
      const result = await Group.findAll({});
      res.json(result);
    } catch (e) {
      //console.log(e);
      res.status(404).send("not found");
    }
  }

exports.GroupTodoList = async (req, res) => {
  try {
    const { groupId } = req.body;
    const result = await Todo.findAll({ where: { groupId: groupId }});
    res.json(result);
  } catch (e) {
    //console.log(e);
    res.status(404).send("not found");
  }
}

exports.GroupAdd = async (req, res) => {
  try {
    const { title } = req.body;
    const ret = await Group.create({
        title: title
    }, {logging: false});
    const newData = ret.dataValues;
    console.log(newData);
    console.log('Create success');
    res.send(newData);
  }
  catch (error) {
    console.log('Error : ', error);
    res.json("그룹 add 실패");
  }
}