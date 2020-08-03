const express = require('express');
const { buildSchema } = require('graphql');
const graphqlHtpp = require('express-graphql');

// 定义schema、查询和类型、mutation
// Account属于复杂类型，使用type单独定义

// input 输入类型
const schema = buildSchema(`
  input AccountInput {
    name: String
    age: Int
    department: String
  }
  type Account{
    name: String
    age: Int
    department: String
  }
  type Mutation {
    createAccount(input: AccountInput): Account
    updateAccount(id: ID! ,input: AccountInput): Account
  }
  type Query {
    accounts: [Account]
  }
`)

const db = {};

// 定义查询对应的处理器
const root = {
  accounts(){
    var arr = [];
    for(let i in db){
      arr.push(db[i])
    }
    return arr;
  },
  createAccount({input}) {
    // 相当于数据库的数据保存
    db[input.name] = input;
    return db[input.name];
  },
  updateAccount({id,input}) {
    // 数据拷贝,将第二和第三个属性拷贝到第一个上
    const uodatedAccount = Object.assign({}, db[id],input)
    db[id] = uodatedAccount
    return uodatedAccount;
  }
}

const app = express();
app.use('/graphql',graphqlHtpp({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(3001)