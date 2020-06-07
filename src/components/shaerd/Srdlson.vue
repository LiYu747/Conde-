<template>
 <div>
      <div  class="box pos-abs m-t2">
       <el-card class="box-card">
   <div class=" fz-14">CNode：Node.js专业中文社区</div>
             <div class=" fz-14 m-t1 flex">您可以 <div class="login" @click="login">登录</div>  或 <div class="login" @click="login">注册</div>  , 也可以</div>
               <el-button type="primary" style="margin-top:4px">通过 Git Hub 登录</el-button>
</el-card>
            
       
           <div class="one-b flex-d al-center m-t2">
           <div><img src="//static.cnodejs.org/FgIok2ZlDer2QOb8sJ20S9Y8T2Jq" class="img"></div>  
           <div><img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" class="img"></div>
           <div><img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" class="img"></div>
           </div>

 <el-card class="box-card el-box-padding m-t2 el__box__back">
  <div slot="header" class="clearfix ">
       <div class="fz-12">无人回复的话题</div>  
  </div>
  <div class=" fz-14">
  <div class="text">使用 Nodejs 开发的 SpaceX-API 开源了！</div>
     <div class="text">我招了个程序员:他什么都好,就是不太会写程序</div>
     <div class="text">CabloyJS V3.2.0支持Socket IO</div>
     <div class="text">从零到部署：用 Vue 和 Express 实现迷你全</div>
     <div class="text">Linux 主机在线文件管理工具</div>
     <br>
   
  </div>
</el-card>

 <el-card class="box-card el-box-padding m-t2 el__box__back">
  <div slot="header" class="clearfix ">
       <div class="fz-12">积分榜 TOP 100>></div>  
  </div>
  <div class=" fz-14">
  <div class="m-t1 flex">22250 <div class=" m-l1">i5ting</div></div>
     <div class="m-t1 flex">15810 <div class=" m-l1">alsotang</div></div>
     <div class="m-t1 flex">9700 <div class=" m-l1">atian25</div></div>
     <div class="m-t1 flex">9350 <div class=" m-l1">leapon</div></div>
     <div class="m-t1 flex">8780 <div class=" m-l1">jiyinyiyong</div></div>
     <div class="m-t1 flex">7480 <div class=" m-l1">yakczh</div></div>
     <div class="m-t1 flex">6855 <div class=" m-l1">im-here</div></div>
     <div class="m-t1 flex">6115 <div class=" m-l1">DevinXian</div></div>
     <div class="m-t1 flex">5815 <div class=" m-l1">chapgaga</div></div>
     <div class="m-t1 flex">5370 <div class=" m-l1">magicdawn</div></div>
     <br>
   
  </div>
</el-card>

<el-card class="box-card el-box-padding m-t2 el__box__back">
  <div slot="header" class="clearfix ">
       <div class="fz-12">友情社区</div>  
  </div>
      <div><img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png" class="st-img"></div>
      <div><img src="//static2.cnodejs.org/public/images/phphub-logo.png" class="st-img"></div>
     
</el-card>

<el-card class="box-card el-box-padding m-t2 el__box__back">
  <div slot="header" class="clearfix ">
       <div class="fz-12">客户端二维码</div>  
  </div>
      <div class="flex-d al-center"><img width="200" src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
       <div class="fz-14 m-t1">客户端源码地址</div>
      </div>
     
</el-card>

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
     login(){
       this.$router.push('/Sign-in')
     }
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
.box{
    width: 300px;
    height: 600px;
    top: 0;
    right: 0;
}
.one-b{
    width: 100%;
    height: 310px;
    background: white;
   
}
.img{
    width: 280px;
    height: 85px;
    margin-top: 10px;
}
.va-box{
  width: 100%;
  height: 120px;

}
  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 300px;
  }
 .text{
   white-space: nowrap;
   margin-top: 5px;
 }
 .st-img{
   width: 180px;
   height: 60px;
 }
 .login:hover{
 text-decoration: underline;
 }
</style>