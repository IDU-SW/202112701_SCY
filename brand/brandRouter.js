const express = require('express');
const BrandRouter = express.Router();
const {BrandList,BrandCafeList,BrandInsert,BrandUpdate,BrandDelete} = require('./brandController');

//전체 브랜드 보기
BrandRouter.get('/brandlist', BrandList);

//브랜드 내 카페목록 보기
BrandRouter.get('/brandcafelist/:brandId', BrandCafeList);

//브랜드 추가 하기
BrandRouter.post('/brandinsert', BrandInsert);

//브랜드 수정 하기
BrandRouter.put('/brandupdate/:brandId', BrandUpdate);

//브랜드 삭제 하기
BrandRouter.delete('/branddelete/:brandId', BrandDelete);

module.exports = BrandRouter;