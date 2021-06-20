# 202112701 손채연
# 카페 현황 API

## BASE URL

http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/


## 😎시작

``` 
npm i
```

##  🚴 ROUTER List

|       항목            |          URL           | Method  |
| :--------------------:| :--------------------: | :----: |
| [전체 브랜드 보기](#전체-브랜드-보기)      |        /brand/brandlist        |  GET   |
|브랜드 내 카페목록 보기|      /brand/brandCafelist/:brandId      |  GET   |
|  브랜드 추가          |      /brand/brandinsert       |  POST   |
|     브랜드 수정       |    /brand/brandupdate/:brandId    |  PUT   |
|전체 카페 보기         |    /cafe/cafelist     |  GET   |
|카페 상세보기          | /cafe/cafedetail/:cafeId |  GET   |
|현재 오픈한 카페 보기  |        /cafe/cafeopenList       |  GET  |
|카페 추가              |   /cafe/cafeinsert/:brandId    |  POST  |
|카페 상태(status) 수정|   /cafe/cafestatusupdate/:cafeId    |  PUT  |
|카페 삭제              |   /cafe/cafedelete/:cafeId     |  DELETE  |


---

### 📄전체 브랜드 보기
