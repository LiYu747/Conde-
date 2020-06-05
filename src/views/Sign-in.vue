<template>
  <div>
     <el-card class="box-card pos-rel el__box__back ">
  <div slot="header" class="clearfix flex box ">
    <div class="text m-l1">主页</div>
    <div class="text1">/</div>
    <div class="text1">登录</div>
  </div>
  <div>
  </div>

     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password" show-password></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="repwd">
    <el-input v-model="ruleForm.repwd" show-password></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="resetForm('ruleForm')">通过 GitBup 登录</el-button>
  </el-form-item>
</el-form>


</el-card>

  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
       let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
         ruleForm: {
          name: '',
          password:'',
          repwd:''
        },
         rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 2, max: 10, message: '用户名在2-10位之间', trigger: 'blur' }
          ],
           password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '密码在6-15位之间', trigger: 'blur' }
          ],
            repwd: [
           { validator: validatePass  , trigger: 'blur'}
          ],
        }
    };
  },
  methods: {
       login(){
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$message.success('登录成功');
          } else {
          this.$message.error('用户名或密码错误');
            return false;
          }
        });
      },
     
    
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
 

 

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 1000px;
    height: 300px;
    top: 50px;
    left: 150px;
  }
  .text {
  color: rgb(143, 189, 1);
}
.text1 {
  color: rgb(153, 153, 153);
  margin: 0 5px;
}

</style>