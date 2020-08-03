<template>
  <div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sex: "男 ",
      text:"hello word!",
      isRed:false,
      isBlack: true,
      dataList:["冰雪奇缘","葫芦娃","小黄人","超人"],
      ispink: false,
      temp:null,
      firstName:"艾丽萨",
      lastName: "买米当卡",
      bookList:[
        {
          num: 1,
          name: "算法导论",
          date: "2020-02-03",
          price: 102,
          count: 1
        },
        {
          num: 2,
          name: "计算机组成原理",
          date: "2020-02-03",
          price: 102,
          count: 1
        },
        {
          num: 3,
          name: "数据结构",
          date: "2020-02-03",
          price: 102,
          count: 1
        }
      ],
      headers:[
        { text: "序号", sortable: false, value:"num", align: "center"},
        { text: "书籍名称", sortable: false, value:"name", align: "center"},
        { text: "出版日期", sortable: false, value:"date", align: "center"},
        { text: "价格", sortable: false, value:"price", align: "center"},
        { text: "数量", sortable: false, value:"count", align: "center"},
        { text: "操作", value:"action", align: "center"}
      ]
    }
  },
  computed:{
    endName(){
      return this.firstName + " " + this.lastName;
    }
  },
  methods: {
    changeStyle(i){
      this.temp = i;
      console.log(i);
    },
    changeColor(){
      this.isRed = !this.isRed;
      this.isBlack = !this.isBlack;
    },
    addFile(e){
      // 创建表单数据对象
      let formData = new FormData();
      console.log(e.target.files[0],3333333);
      // 追加文件,以键值对的形式保存
      formData.append("uploadImg",e.target.files[0]);
    },
    logon(){
      console.log(11111);
      return false
    }
  }
}
</script>

<style>
.style1{
  color: pink;
}
.box1{
  color: red;
}
.box2{
  color: black;
}
</style>