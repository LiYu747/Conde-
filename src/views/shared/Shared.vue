<template>
  <div>
    <div class="box flex ju-center al-center">
      <div class="b-box flex al-center pos-rel">
        <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" class="img" />
        <input type="text" class="ipt" />
        <i class="iconfont icon-sousuo move pos-rel"></i>

        <div class="pos-abs t-box flex">
          <div class="text">首页</div>
          <div class="text">新手入门</div>
          <div class="text">API</div>
          <div class="text">关于</div>
          <div class="text">注册</div>
            <div class="text" @click="add" v-if="user===null">登录</div>
           <div v-else @click="out">退出</div>
        </div>
      </div>
    </div>

<div class='back-c flex-d al-center'>
<div class="middle flex pos-rel">
  <div>
    <router-view></router-view>
  </div>
   
 
</div>
</div>


    <div class="foot-box flex ju-center">
          <div class="sf-box">
           <div class="flex m-t2 al-center g-cl">
              <div class="f-hover">RSS</div> 
               <div class="vae"></div>
               <div class="f-hover">源码地址</div>
               </div>
               <div class="g-cl">CNode社区为国内最专业的Node.js开源技术社区,致力于Node.js的技术研究。</div>
               <div class="flex fe-box pos-rel">
                   <div class="boo pos-abs flex g-cl">
                       <div class="flex mov">
                       <div>服务器赞助商为</div>
                      <img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" title="ucloud" alt="ucloud" class="feimg">
                      <div>，存储赞助商为</div>
                       </div>
                 
                   <img src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" title="七牛云存储" alt="七牛云存储" width="130px">
                   
                   <div class="mov">，由</div>
                   <img src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" title="alinode" alt="alinode" height="54px" width="166px">
                   <div class="mov">提供应用性能服务。</div>
                   </div>
               </div>
               <div class="flex m-t1">
                      <div class="g-cl"> 新手搭建Node.js 服务器,推荐使用无需备案的</div>
                      <div class="color f-hover">DigitalOcean(https://www.digitalocean.com/)</div>
                      </div>
          </div>
    </div>

   
  </div>
</template>

<script>

export default {
  name: "",
  props: {},
  components: {
  
  },
  data() {
    return {
      user : '',
      sex : ''
    };
  },
  methods: {
     add(){
        this.$router.push('/Sign-in')
        this.sex = this.user
      },
      out(){
        this.$router.push('/')
          localStorage.clear()
          this.user=null
      }
  },
  mounted() {
   
     this.user = localStorage.getItem('name')
  
   
    

  },
  watch: {
    
  },
  computed: {}
};
</script>

<style scoped lang='scss'>

.box {
  width: 100%;
  height: 50px;
  background: rgb(68, 68, 68);
  cursor: pointer;
}
.img {
  width: 130px;
  height: 30px;
  margin-right: 20px;
}
.b-box {
  width: 1400px;
}
.ipt {
  width: 260px;
  height: 28px;
  border: none;
  outline: none;
  border-radius: 20px;
  background: rgb(136, 136, 136);
  text-indent: 30px;
}
.ipt:hover {
  background: white;
  transform: translate();
  transition: all 1s;
}
.move {
  left: -250px;
  color: rgb(92, 93, 92);
}
.t-box {
  right: 0;
  color: rgb(204, 204, 204);
  font-size: 13px;
}
.text {
  margin-right: 30px;
}
.text:hover {
  color: white;
}
.foot-box{
    width: 100%;
    height: 300px;
    cursor: pointer;
   
}
.sf-box{
    width: 1400px;
}
.vae{
    width: 1px;
    height: 18px;
    background: rgb(234,242,255);
    margin: 0 6px;
}
.fe-box{
    width: 1000px;
    height: 70px;
    background: white;
}
.feimg{
    width: 90px;
    height: 22px;
}
.boo{
 bottom: 0;
}
.t-boo{
    position: absolute;
    bottom: 0;
}
.mov{
    margin-top: 32px;
}
.color{
    color: rgb(0,136,214);
}
.g-cl{
    color: rgb(171,171,171);
}
.f-hover:hover{
  color: rgb(0,98,169);
}
.back-c{
  width: 100%;
   background: rgb(225,225,225);
}

.middle{
  width: 1400px;
  
}
</style>