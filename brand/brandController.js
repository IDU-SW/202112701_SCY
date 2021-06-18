const {Cafe} = require('../model');
const {Brand} = require('../model');

exports.BrandList = async (req, res) => {
    try {
      const result = await Brand.findAll({});
      res.json(result);
    } catch (e) {
      res.status(404).send("브랜드 리스트가 없습니다.");
    }
  }

exports.BrandCafeList = async (req, res) => {
  try {
    const { brandId } = req.params;
    const result = await Cafe.findAll({ where: { brandId: brandId }});
    res.json(result);
  } catch (e) {
    res.status(404).send("해당 브랜드의 카페리스트가 없습니다.");
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
        throw "브랜드 아이디가 입력되지 않았습니다.";
    }
    const { brandId } = req.params;
    const { brand } = req.body;
    const ret = await Brand.update(
        {brand: brand},
        {where: { id: brandId }});
        console.log('Modify success :', brand);
        res.send("브랜드 이름 수정 성공");
  }
  catch (error) {
    console.log('Error : ', error);
    res.json("브랜드 update 실패사유 : "+ error);
  }
}