<template>
  <div class="container">
    <div class="Login-logo">
      <div class="Login-login-Outter">
        <div class="Login-login-Inner">
          <ul class="Login-login">
            <li>扫描登陆</li>
            <li class="clear-border">账户登录</li>
          </ul>
          <div class="Login-content">
            <form action="##">
              <div class="Login-phone">
                <i></i>
                <input type="text" placeholder="手机号" />
                <p class="Login-error-msg">错误提示信息</p>
              </div>

              <div class="Login-password">
                <i class="pwd"></i>
                <input type="text" placeholder="请输入密码" />
                <p class="Login-error-msg">错误提示信息</p>
              </div>

              <div class="Login-Button">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" checked="" />
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <button class="Login-btn">登&nbsp;&nbsp;录</button>
            </form>
            <div class="Login-foot">
                <ul>
                  <li><img src="./images/qq.png" alt=""></li>
                  <li><img src="./images/weixin.png" alt=""></li>
                  <li><img src="./images/sina.png" alt=""></li>
                  <li><img src="./images/ali.png" alt=""></li>
                </ul>
                <span>立即注册</span>
            </div>
          </div>
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
.Login-login-Inner {
  width: 380px;
  height: 370px;
  border: 1px solid #ccc;
}
.Login-login {
  display: flex;
  width: 380px;
  height: 50px;
  border-bottom: 1px solid #ccc;
  li {
    width: 190px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    border-right: 1px solid #ccc;
    :nth-child(1) {
      border-bottom: 1px solid #ccc;
    }
  }
  .clear-border {
    border-right: none;
  }
}
.Login-content {
  width: 342px;
  height: 186.6px;
  padding: 20px;

  .Login-password,
  .Login-phone {
    input {
      width: 290px;
      height: 33px;
      border:1px solid #ccc;
      display: flex;
    }
  }
  .Login-phone i {
    float: left;
    width: 37px;
    height: 35px;
    border: 1px solid #ccc;
    background: url("./images/icons.png") no-repeat -10px -201px;
    box-sizing: border-box;
    border-radius: 2px 0 0 2px;
  }
  .Login-password i {
    float: left;
    width: 37px;
    height: 35px;
    border: 1px solid #ccc;
    background: url(./images/icons.png) no-repeat -10px -201px;
    box-sizing: border-box;
    border-radius: 2px 0 0 2px;
  }
  .Login-error-msg {
    margin: 3px 40px 0;
    color: red;
  }
  i {
    float: left;
    width: 37px;
    height: 32px;
    border: 1px solid;
  }
  .Login-Button {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .forget {
      margin-right: 40px;
    }
  }
}
.Login-btn {
  background-color: rgb(225, 37, 27);
  font-size: 16px;
  font-family: 微软雅黑;
  word-spacing: 4px;
  color: rgb(255, 255, 255);
  width: 100%;
  height: 36px;
  margin-top: 25px;
  padding: 6px;
  border-radius: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 37, 27);
  border-image: initial;
  outline: none;
}
.Login-foot{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  ul{
    width:162px;
    display: flex;
    justify-content: space-between;
  }
  span{
    font-size: 16px;
  }
}
</style>