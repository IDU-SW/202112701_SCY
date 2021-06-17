const express = require('express');
const CafeRouter = express.Router();
const {CafeList,CafeDoneList,CafeAdd,CafeDone} = require('./cafeController');

//전체 할일 보기
CafeRouter.get('/CafeList', CafeList);

//완료된 할일 보기
CafeRouter.get('/CafeDoneList', CafeDoneList);

//할일 추가 하기
CafeRouter.post('/CafeAdd', CafeAdd);

//할일 완료 체크
CafeRouter.post('/CafeDone', CafeDone);

module.exports = CafeRouter;