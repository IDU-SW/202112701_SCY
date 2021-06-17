const express = require('express');
const BrandRouter = express.Router();
const {BrandList,BrandCafeList,BrandInsert,BrandUpdate} = require('./brandController');

//전체 그룹 보기
BrandRouter.get('/brandList', BrandList);

//그룹 내 할일 보기
BrandRouter.get('/brandTodoList/:brandId', BrandCafeList);

//그룹 추가 하기
BrandRouter.post('/brandInsert', BrandInsert);

//그룹 수정 하기
BrandRouter.post('/brandUpdate/:brandOg', BrandUpdate);

module.exports = BrandRouter;