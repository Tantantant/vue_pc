<template>
  <div class="container">
    <div class="Register-newUser">
      <h3>
        注册新用户
        <span>我有账号，去<router-link to="/login"> 登录</router-link></span>
      </h3>
    </div>
    <div class="Register-content">
      <form action="#">
        <div class="Register-input">
          <label>手机号:</label>
          <input type="text" placeholder="请输入您的手机号" />
          <p class="Register-error-msg">错误提示信息</p>
        </div>
        <div class="Register-input">
          <label>验证码:</label>
          <input type="text" placeholder="请输入验证码" />
          <p class="Register-error-msg">错误提示信息</p>
        </div>

        <div class="Register-input">
          <label>登录密码:</label>
          <input type="text" placeholder="请输入您的登录密码" />
          <p class="Register-error-msg">错误提示信息</p>
        </div>
        <div class="Register-input">
          <label>确认密码:</label>
          <input type="text" placeholder="请输入确认密码" />
          <p class="Register-error-msg">错误提示信息</p>
        </div>
        <div class="Register-radio">
          <input type="radio" />同意协议并注册《尚品汇用户协议》
          <p class="Register-error-msg">错误提示信息</p>
        </div>
        <button class="Register-btn">完成注册</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
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
  p{
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
.Register-error-msg{
  display: none;
}
</style>