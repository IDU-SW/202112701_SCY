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
|[전체 브랜드 보기](#전체-브랜드-보기)      |        /brand/brandlist        |  GET   |
|[브랜드 내 카페목록 보기](#브랜드-내-카페목록-보기)|      /brand/brandcafelist/:brandId      |  GET   |
|[브랜드 추가](#브랜드-추가)          |      /brand/brandinsert       |  POST   |
|[브랜드 수정](#브랜드-수정)       |    /brand/brandupdate/:brandId    |  PUT   |
|[전체 카페 보기](#전체-카페-보기)        |    /cafe/cafelist     |  GET   |
|[카페 상세보기](#카페-상세보기)          | /cafe/cafedetail/:cafeId |  GET   |
|[현재 오픈한 카페 보기](#현재-오픈한-카페-보기)  |        /cafe/cafeopenList       |  GET  |
|[카페 추가](#카페-추가)             |   /cafe/cafeinsert/:brandId    |  POST  |
|[카페 상태 수정](#카페-상태-수정)|   /cafe/cafestatusupdate/:cafeId    |  PUT  |
|[카페 삭제](#카페-삭제)              |   /cafe/cafedelete/:cafeId     |  DELETE  |


---

### 📄전체 브랜드 보기

#### example URL

```
http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/brand/brandlist
```

#### 요청

|      항목   |  설명|
| :---------: | ---------------- |
|     URL     | /brand/brandlist        |
|   URL 예    | /brand/brandlist         |
| 요청 메소드 | GET              |

##### Response 메세지 예

```
[
    {
        "id": 1,
        "brand": "텐퍼센트"
    },
    {
        "id": 2,
        "brand": "할리스"
    },
    {
        "id": 3,
        "brand": "투썸"
    }
]
```

---

### 📄브랜드 내 카페목록 보기

#### example URL

```
http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/brand/brandcafelist/3
```

#### 요청

|      항목   |  설명|
| :---------: | ---------------- |
|     URL     | /brand/brandcafelist/:brandId        |
|   URL 예    | /brand/brandcafelist/3         |
| 요청 메소드 | GET              |

##### Response 메세지 예

```
[
    {
        "id": 1,
        "location": "서울",
        "name": "투썸 하계점",
        "operatingtimeS": 9,
        "operatingtimeE": 22,
        "content": "내용내용",
        "status": "OPEN",
        "createdAt": "2021-06-20T14:34:22.000Z",
        "updatedAt": "2021-06-20T14:34:22.000Z",
        "brandId": 3
    }
]
```

---

### 📄브랜드 추가

#### example URL

```
http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/brand/brandinsert
```

#### 요청

|      항목   |  설명|
| :---------: | ---------------- |
|     URL     | /brand/brandinsert        |
|   URL 예    | /brand/brandinsert         |
| 요청 메소드 | POST              |

##### Request 예(메세지 타입 : JSON)

```
{
    "brand":"스타벅스"
}
```

##### Response 메세지 예

```
브랜드 이름 추가 성공
```

---

### 📄브랜드 수정

#### example URL

```
http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/brand/brandupdate/3
```

#### 요청

|      항목   |  설명|
| :---------: | ---------------- |
|     URL     | /brand/brandupdate/:brandId        |
|   URL 예    | /brand/brandupdate/3         |
| 요청 메소드 | PUT              |

##### Request 예(메세지 타입 : JSON)

```
{
    "brand":"투썸플레이스"
}
```

##### Response 메세지 예

```
브랜드 이름 수정 성공
```

---

### 📄전체 카페 보기

#### example URL

```
http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/cafe/cafelist
```

#### 요청

|      항목   |  설명|
| :---------: | ---------------- |
|     URL     | /cafe/cafelist        |
|   URL 예    | /cafe/cafelist         |
| 요청 메소드 | GET              |

##### Response 메세지 예

```
[
    {
        "id": 1,
        "location": "서울",
        "name": "투썸 하계점",
        "operatingtimeS": 9,
        "operatingtimeE": 22,
        "content": "내용내용",
        "status": "OPEN",
        "createdAt": "2021-06-20T14:34:22.000Z",
        "updatedAt": "2021-06-20T14:34:22.000Z",
        "brandId": 3
    },
    {
        "id": 2,
        "location": "서울",
        "name": "투썸 노원점",
        "operatingtimeS": 9,
        "operatingtimeE": 22,
        "content": "내용내용",
        "status": "CLOSE",
        "createdAt": "2021-06-20T14:49:38.000Z",
        "updatedAt": "2021-06-20T14:49:38.000Z",
        "brandId": 3
    }
]
```

---
### 📄카페 상세보기

#### example URL

```
http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/cafe/cafedetail/1
```

#### 요청

|      항목   |  설명|
| :---------: | ---------------- |
|     URL     | /cafe/cafedetail/:cafeId       |
|   URL 예    | /cafe/cafedetail/1        |
| 요청 메소드 | GET              |

##### Response 메세지 예

```
[
    {
        "id": 1,
        "location": "서울",
        "name": "투썸 하계점",
        "operatingtimeS": 9,
        "operatingtimeE": 22,
        "content": "내용내용",
        "status": "OPEN",
        "createdAt": "2021-06-20T14:34:22.000Z",
        "updatedAt": "2021-06-20T14:34:22.000Z",
        "brandId": 3
    }
]
```

---
### 📄현재 오픈한 카페 보기

#### example URL

```
http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/cafe/cafeopenlist
```

#### 요청

|      항목   |  설명|
| :---------: | ---------------- |
|     URL     | /cafe/cafeopenlist       |
|   URL 예    | /cafe/cafeopenlist       |
| 요청 메소드 | GET              |

##### Response 메세지 예

```
[
    {
        "id": 1,
        "location": "서울",
        "name": "투썸 하계점",
        "operatingtimeS": 9,
        "operatingtimeE": 22,
        "content": "내용내용",
        "status": "OPEN",
        "createdAt": "2021-06-20T14:34:22.000Z",
        "updatedAt": "2021-06-20T14:34:22.000Z",
        "brandId": 3
    }
]
```

---
### 📄카페 추가

#### example URL

```
http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/cafe/cafeinsert/2
```

#### 요청

|      항목   |  설명|
| :---------: | ---------------- |
|     URL     | /cafe/cafeinsert/:brandId       |
|   URL 예    | /cafe/cafeinsert/2       |
| 요청 메소드 | POST              |

##### Request 예(메세지 타입 : JSON)

```
{
    "location" : "서울",
    "name" : "할리스 미아점",
    "operatingtimeS" : 9,
    "operatingtimeE" : 22,
    "content" : "공부하기 아주 좋음",
    "status" : "CLOSE"
}
```

##### Response 메세지 예

```
{
    "location" : "서울",
    "name" : "할리스 미아점",
    "operatingtimeS" : 9,
    "operatingtimeE" : 22,
    "content" : "공부하기 아주 좋음",
    "status" : "CLOSE"
}
```

---
### 📄카페 상태 수정

#### example URL

```
http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/cafe/cafestatusupdate/2
```

#### 요청

|      항목   |  설명|
| :---------: | ---------------- |
|     URL     | /cafe/cafestatusupdate/:cafeId       |
|   URL 예    | /cafe/cafestatusupdate/2       |
| 요청 메소드 | PUT              |

##### Request 예(메세지 타입 : JSON)

```
{
    "status":"CLOSE"
}
```

##### Response 메세지 예

```
카페 상태 수정 성공
```

---
### 📄카페 삭제

#### example URL

```
http://ec2-54-180-68-123.ap-northeast-2.compute.amazonaws.com:3000/cafe/cafedelete/1
```

#### 요청

|      항목   |  설명|
| :---------: | ---------------- |
|     URL     | /cafe/cafedelete/:cafeId       |
|   URL 예    | /cafe/cafedelete/1       |
| 요청 메소드 | DELETE              |

##### Response 메세지 예

```
카페 삭제 성공
```

- - -
- - -
- - -

##### 데이터베이스 설계

###### Table name

Brands

###### Column

id / INT(11) / primary Key, Auto Increment
brand / VARCHAR(100) / unique key

- - -

###### Table name

Cafes

###### Column

id / INT(11) / primary Key, Auto Increment
location / VARCHAR(100)
name / VARCHAR(100)
operatingtimeS / INT(11)
operatingtimeE / INT(11)
content / VARCHAR(100)
status / VARCHAR(100)
createAt / DATETIME
updatedAt / DATETIME
brandId / INT(11) / foreign Key

Brands : Cafes => 1:N 관계