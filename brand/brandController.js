const {Cafe} = require('../model');
const {Brand} = require('../model');

exports.BrandList = async (req, res) => {
    try {
      const result = await Brand.findAll({
        order:[
          ['id','ASC']
        ],
        raw: true
      });
      // res.json(result);
      res.render('brand/list', {data : result});
    } catch (e) {
      res.status(404).send("브랜드 리스트가 없습니다.");
    }
  }

exports.BrandCafeList = async (req, res) => {
  try {
    const { brandId } = req.params;
    const result = await Cafe.findAll({ 
      where: { brandId: brandId },
      order:[
        ['id','ASC']
      ]});
      res.render('brand/cafelist', {id : brandId , data : result});
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
    const reqBody = req.body;
    const ret = await Brand.create({
       brand: reqBody.brand
    }, {logging: false});
    const newData = ret.dataValues;
    console.log('Create success',newData);
    res.redirect('/brand/brandlist');
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
        res.redirect('/brand/brandlist');
  }
  catch (error) {
    console.log('Error : ', error);
    res.json("브랜드 update 실패사유 : "+ error);
  }
}


exports.BrandDelete = async (req, res) => {
  try {
    if(!req.body)
    {
        throw "브랜드 아이디가 입력되지 않았습니다.";
    }
    const { brandId } = req.params;
    const ret = await Brand.destroy(
        {where: { id: brandId }});
        console.log('delete sucess :', ret);
        res.redirect('/brand/brandlist');
  }
  catch (error) {
    console.log('Error : ', error);
    res.json("브랜드 update 실패사유 : "+ error);
  }
}
