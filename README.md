MyBatis Generator
=================

## install
```bash 
sudo npm install -g git+https://git@github.com/Youmoo/mybatis-generator.git
```
## run
Add a config.json to your home  path (~) with the following content:
```json
{
  "host": "localhost",
  "database": "dbtest1",
  "user": "test",
  "password": "test",
  "connectionLimit": 10
}
```
Then run from your termial:
```bash
mybatis ~/config.json
```
Lastly , open [me](http://localhost:8888/)

## Generate text such as :

1. resultMap
2. baseColumns
3. insert
4. insertSelective
5. update
6. updateSelective
7. entity
8. dao

## Libs that are used:
1. react+flux
2. nodejs
3. mysql
4. browerify