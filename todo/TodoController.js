const {Todo} = require('../model');
const {Group} = require('../model');

exports.TodoList = async (req, res) => {
    try {
      const result = await Todo.findAll({});
      res.json(result);
    } catch (e) {
      //console.log(e);
      res.status(404).send("not found");
    }
  }

exports.TodoDoneList = async (req, res) => {
  try {
    const result = await Todo.findAll({ where: { status: 'DONE' }});
    res.json(result);
  } catch (e) {
    //console.log(e);
    res.status(404).send("not found");
  }
}

exports.TodoAdd = async (req, res) => {
  try {
    const { title, status, groupId } = req.body;
    const group = await Group.findByPk(groupId);
    //없는 그룹의 번호면 할일 추가 안함
    if(!group)
    {
      throw new Error("Error");
    }
    const ret = await Todo.create({
        title: title,
        status: status
    }, {logging: false});

    await group.addTodo(ret);
    const newData = ret.dataValues;
    console.log(newData);
    console.log('Create success');
    res.send(newData);
  }
  catch (error) {
    console.log('Error : ', error);
    res.json("할일 add 실패");
  }
}

exports.TodoDone = async (req, res) => {
  try {
    const { title } = req.body;
    let result = await Todo.update(
        { status: 'DONE' },
        { where: { title: title }});
    console.log('Modify success :', title , "noDONE -> DONE");
    res.send("업데이트 성공");
  }
  catch (error) {
    console.log('Error :', error);
    res.json("끝낸 일로 업데이트 실패");
  }
}