<template>
  <div class="container">
    <div class="Register-newUser">
      <h3>
        注册新用户
        <span>我有账号，去<router-link to="/login"> 登录</router-link></span>
      </h3>
    </div>
    <div class="Register-content">
      <form @submit.prevent='submit'>
        <div class="Register-input">
          <label>手机号:</label>
          <ValidationProvider
            rules="required|phoneLength|phoneStandard"
            v-slot="{ errors }"
          >
            <input
              type="text"
              placeholder="请输入您的手机号"
              v-model="user.phone"
            />
            <p class="error-msg">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>
        <div class="Register-input">
          <label>验证码:</label>
          <ValidationProvider rules="code|codeLength" v-slot="{ errors }">
            <input type="text" placeholder="请输入验证码" v-model="user.code" />
            <p class="error-msg">{{ errors[0] }}</p>
          </ValidationProvider>
          <img
            @click="updateCode"
            ref="code"
            src="http://182.92.128.115/api/user/passport/code"
            alt="code"
          />
        </div>

        <div class="Register-input">
          <label>登录密码:</label>
          <ValidationProvider rules="password" v-slot="{ errors }">
            <input
              type="password"
              placeholder="请输入您的登录密码"
              v-model="user.password"
            />
            <p class="error-msg">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>
        <div class="Register-input">
          <label>确认密码:</label>
          <ValidationProvider rules="password" v-slot="{ errors }">
            <input
              type="password"
              placeholder="请输入确认密码"
              v-model="user.rePassword"
            />
            <p class="errors-msg">{{ errors[0] }}</p>
          </ValidationProvider>
        </div>
        <div class="Register-radio">
            <input
              type="checkbox"
              v-model="user.isChecked"
            />同意协议并注册《尚品汇用户协议》
        </div>
        <button class="Register-btn" type="submit">完成注册</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
// 手机号验证
extend("required", {
  ...required,
  message: "手机号不能为空",
});
// 手机号长度
extend("phoneLength", {
  validate(value) {
    return value.length === 11;
  },
  message: "请输入11位手机号",
});
// 手机号规范
extend("phoneStandard", {
  validate(value) {
    return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "手机号不符合规范",
});
// 验证码验证
extend("code", {
  ...required,
  message: "验证码不能为空",
});
extend("codeLength", {
  validate(value) {
    return value.length === 4;
  },
  message: "请输入4位验证码",
});

// 密码验证
extend("password", {
  ...required,
  message: "密码不能为空",
});

export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "",
        code: "",
        password: "",
        rePassword: "",
        isChecked: false,
      },
    };
  },
  methods: {
    // 注册
    async submit(){
      let {phone,code,isChecked,password,rePassword} = this.user
      try{
        if(password !== rePassword ){
        this.$message.error("两次输入密码不一致")
        return
      }
      if(!isChecked){
        this.$message.error("请同意用户协议")
        return
      }
      await this.$store.dispatch("register",{phone,password,code})
      this.$router.push('/login')
      }catch{
        this.user.phone = "",
        this.user.code="",
        this.user.isChecked = false,
        this.user.password = "",
        this.user.rePassword = ""
      }
    },
    // 手动刷新验证码
    updateCode(e) {
      e.target.src = "http://182.92.128.115/api/user/passport/code";
    },
  },
  components: {
    ValidationProvider,
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  height: 445px;
  border: 1px solid #dfdfdf;
  margin: 0 auto;
}
.Register-newUser {
  h3 {
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;
    margin-bottom: 40px;
    span {
      font-size: 14px;
      float: right;
      a {
        color: red;
      }
    }
  }
}
.Register-content form {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  .Register-input {
    padding-left: 390px;
    margin-bottom: 18px;
    label {
      font-size: 14px;
      width: 96px;
      text-align: right;
      display: inline-block;
    }
    input {
      width: 270px;
      height: 38px;
      padding-left: 8px;
      box-sizing: border-box;
      margin-left: 5px;
      outline: none;
      border: 1px solid #999;
    }
    p {
      position: absolute;
      left: 495px;
      color: red;
    }
  }
}
.Register-radio {
  text-align: center;
  position: relative;
  p {
    position: relative;
    left: -70px;
    color: red;
  }
}
.Register-btn {
  outline: none;
  width: 270px;
  height: 36px;
  background: #e1251b;
  color: #fff !important;
  display: inline-block;
  font-size: 16px;
  border: 1px solid #dfdfdf;
  transform: translate(182%);
}
// 隐藏错误信息
.Register-error-msg {
  display: block;
}
</style>