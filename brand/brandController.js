const {Cafe} = require('../model');
const {Brand} = require('../model');

exports.BrandList = async (req, res) => {
    try {
      const result = await Brand.findAll({});
      res.json(result);
    } catch (e) {
      res.status(404).send("not found");
    }
  }

exports.BrandCafeList = async (req, res) => {
  try {
    const { brandId } = req.params;
    const result = await Cafe.findAll({ where: { brandId: brandId }});
    res.json(result);
  } catch (e) {
    res.status(404).send("not found");
  }
}

exports.BrandInsert = async (req, res) => {
  try {
    if(!req.body)
    {
        throw "브랜드 이름이 입력되지 않았습니다.";
    }
    const { brand } = req.body;
    const ret = await Brand.create({
        brand: brand
    }, {logging: false});
    const newData = ret.dataValues;
    console.log('Create success',newData);
    res.send("브랜드 이름 추가 성공");
  }
  catch (error) {
    console.log('Error : ', error);
    res.json("브랜드 insert 실패사유 : "+ error);
  }
}

exports.BrandUpdate = async (req, res) => {
  try {
    if(!req.body)
    {
        throw "브랜드 이름이 입력되지 않았습니다.";
    }
    const { brandOg } = req.params;
    const { brand } = req.body;
    const ret = await Brand.update(
        {brand: brand},
        {where: { brand: brandOg }});
        console.log('Modify success :', brand);
        res.send("브랜드 이름 업데이트 성공");
  }
  catch (error) {
    console.log('Error : ', error);
    res.json("브랜드 update 실패사유 : 브랜드 이름이 입력되지 않았습니다.");
  }
}