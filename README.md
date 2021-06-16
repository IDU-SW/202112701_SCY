#### API 정보

할일 그룹 만들기, 할일 만들기(Todo App)

#### BASE URL

http://localhost:3000/

- - -

### GROUP

##### Method

get/ GroupList (그룹 리스트 불러오기)

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

[
    {
        "id": 1,
        "title": "공부하기"
    },
    {
        "id": 3,
        "title": "놀기"
    }
]


##### Method

post/ GroupTodoList (그룹에 있는 할일 리스트 불러오기)

##### Request 컨텐트 타입

application/json

##### Request 예시

{
   "groupId":"1"
}

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

[
    {
        "id": 1,
        "title": "noejs 공부",
        "status": "DONE",
        "groupId": 1
    },
    {
        "id": 2,
        "title": "php 공부",
        "status": "noDONE",
        "groupId": 1
    }
]


#### Method

post/ GroupAdd (그룹 추가하기)

##### Request 컨텐트 타입

application/json

##### Request 예시

{
   "title":"회사"
}

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

{
    "id": 6,
    "title": "회사"
}

- - -

### TODO

##### Method

get/ TodoList (할일 리스트 불러오기)

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

[
    {
        "id": 1,
        "title": "noejs 공부",
        "status": "DONE",
        "groupId": 1
    },
    {
        "id": 2,
        "title": "php 공부",
        "status": "noDONE",
        "groupId": 1
    }
]


##### Method

get/ TodoDoneList(다 한일 리스트 불러오기)

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

[
    {
        "id": 1,
        "title": "noejs 공부",
        "status": "DONE",
        "groupId": 1
    }
]


#### Method

post/ TodoAdd(할일 추가하기)

##### Request 컨텐트 타입

application/json

##### Request 예시

{
    "title": "아이폰13",
    "status": "DONE",
    "groupId": 4
}

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

{
    "id": 3,
    "title": "아이폰13",
    "status": "DONE"
}


#### Method

post/ TodoDone(할일 -> 완료한 일로 만들기)

##### Request 컨텐트 타입

application/json

##### Request 예시

{
    "title":"laravel 공부"
}

##### Response 컨텐트 타입

application/json

##### Response 메세지 예

업데이트 성공

- - -
- - -

##### 데이터베이스 설계

###### Table name

Groups

###### Column

id / INT(11) / primary Key, Auto Increment
title / VARCHAR(100) / unique key

###### Table name

Todos

###### Column

id / INT(11) / primary Key, Auto Increment
title / VARCHAR(100)
status / VARCHAR(100)
groupId / INT(11) / foreign Key