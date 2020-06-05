<template>
 <div class="box flex">
    <div class="box-card pos-rel">
      
        <div class="nav flex al-center">
          <div class="text m-l1">主页</div>
          <div class="text1">/</div>
          <div class="text1">登录</div>
        </div>

        <div class="poss pos-rel">
          <div class="flex al-center">
            <div class="fz-14">用户名</div>
            <input type="text" v-model="value" class="ipt" />
          </div>
          <div class="flex al-center m-t2 pwd">
            <div class="fz-14">密码</div>
            <input type="text" v-model="password" class="ipt" />
          </div>

                <div class="flex"> 
    <el-button type="primary" class="lng pos-rel">登录</el-button>
    <el-button type="primary" class="lng pos-rel">通过 GitHub 登录</el-button>
    <div>忘了密码？</div>
        </div>
        </div>
      
   
    </div>
  </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  height: 600px;
  background: rgb(225, 225, 225);
}
.text {
  color: rgb(143, 189, 1);
}
.text1 {
  color: rgb(153, 153, 153);
  margin: 0 5px;
}

.box-card {
  width: 1000px;
  height: 300px;
  top: 150px;
  left: 100px;
  background: white;
}
.nav {
  width: 100%;
  height: 40px;
  background: rgb(246, 246, 246);
}
.el-card__body {
  padding: 0;
}
.ipt {
  width: 300px;
  height: 30px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  margin-left: 20px;
}
.ipt:focus {
  outline: none;
  border: 1px solid rgb(101, 215, 186);
  box-shadow: 0 0 10px #9ecaed;
}
.poss {
  top: 50px;
  left: 140px;
}
.pwd {
  margin-left: 14px;
}
.lng{
  top: 20px;
  left: 20px;
}
</style>