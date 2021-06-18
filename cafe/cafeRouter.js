const express = require('express');
const CafeRouter = express.Router();
const {CafeList,CafeDetail,CafeOpenList,CafeInsert,CafeStatusUpdate,CafeDelete} = require('./cafeController');

//전체 카페 보기
CafeRouter.get('/cafeList', CafeList);

//카페 상세보기
CafeRouter.get('/cafeDetail/:cafeName', CafeDetail);

//현재 오픈한 카페 보기
CafeRouter.get('/cafeOpenList', CafeOpenList);

//카페 추가 하기
CafeRouter.post('/cafeInsert/:brandId', CafeInsert);

//카페 상태(status) 수정
CafeRouter.put('/cafeStatusUpdate/:cafeName', CafeStatusUpdate);

//카페 삭제
CafeRouter.delete('/cafeDelete/:cafeName', CafeDelete);

module.exports = CafeRouter;