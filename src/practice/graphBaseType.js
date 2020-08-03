const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHtpp = require('express-graphql');
const { static } = require('express');

// 定义schema、查询和类型
// Account属于复杂类型，使用type单独定义
const schema = buildSchema(`
  type Account {
    name: String
    age: Int,
    departmrnt: String,
    salary(city: String): Float
  }
  type Query {
    getClassMetes(classNo: Int!): [String]
    account(userName: String): Account
  }
`)

// 定义查询对应的处理器
const root = {
  getClassMetes( {classNo} ){
    const obj = {
      1:["张三","李四"],
      2:["小红","小绿"],
      3:["王梅","李雷"],
    }
    return obj[classNo];
  },
  account({userName}) {
    const name = userName;
    const age = 23;
    const departmrnt = "开发部";
    const salary = ({ city }) => {
      if(city === "北京" || city === "上海" || city === "深圳"){
        return 10000;
      }else {
        return 5000;
      }
    }
    return {
      name, age, departmrnt, salary
    }
  }
}

const app = express();
// 解决跨域
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', "true");
  next();
});
app.use((req, res, next) => {
  if (req.method && req.method.toLowerCase() === 'options') {
    return res.send(true);
  }
  next();
});

app.use('/graphql',graphqlHtpp({
  schema: schema,
  rootValue: root,
  graphiql: true
})) 
// 公开文件夹， 供用户访问静态资源
app.use(express.static('public'));
app.listen(3001)