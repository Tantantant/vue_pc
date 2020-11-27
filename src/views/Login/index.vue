<template>
  <div class="container">
    <div class="Login-logo">
      <div class="Login-login-Outter">
        <div class="Login-login-Inner">
          <ul class="Login-login">
            <li>扫描登陆</li>
            <li>账户登录</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="less" scoped>
.container {
  
  height: 487px;
  background-color: #e93854;
}
.Login-logo {
  width: 1200px;
  height: 487px;
  margin: 0 auto;
  background: url("./images/loginbg.png") no-repeat;
}
.Login-login-Outter {
  position: relative;
  float: right;
  width: 380px;
  height: 366px;
  top: 40px;
  padding: 20px;
  background-color: #fff;
}
.Login-login-Inner{
  width: 380px;
  height: 370px;
  border: 1px solid #ccc;
}
.Login-login{
  display: flex;
  width: 380px;
  height: 50px;
  li{
    width: 190px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    :nth-child(1){
      border-bottom: 1px solid #ccc;
    }
  };
}
</style>