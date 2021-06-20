const express = require('express');
const CafeRouter = express.Router();
const {CafeList,CafeDetail,CafeOpenList,CafeInsert,CafeStatusUpdate,CafeDelete} = require('./cafeController');

//전체 카페 보기
CafeRouter.get('/cafelist', CafeList);

//카페 상세보기
CafeRouter.get('/cafedetail/:cafeId', CafeDetail);

//현재 오픈한 카페 보기
CafeRouter.get('/cafeopenList', CafeOpenList);

//카페 추가 하기
CafeRouter.post('/cafeinsert/:brandId', CafeInsert);

//카페 상태(status) 수정
CafeRouter.put('/cafestatusupdate/:cafeId', CafeStatusUpdate);

//카페 삭제
CafeRouter.delete('/cafedelete/:cafeId', CafeDelete);

module.exports = CafeRouter;