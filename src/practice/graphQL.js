const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHtpp = require('express-graphql');

// 定义schema、查询和类型
// Account属于复杂类型，使用type单独定义
const schema = buildSchema(`
  type Account{
    name: String
    age: Int
    sex: String
    department: String
  }
  type Query {
     hello: String
     account: Account
  }
`)

// 定义查询对应的处理器
const root = {
  hello: () =>{
    return "Hello word";
  },
  account: () =>{
    return {
      name: "micehlle",
      age: 19,
      sex: "woman",
      department: "developer"
    }
  }
}

const app = express();
app.use('/graphql',graphqlHtpp({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(3001)