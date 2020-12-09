<template>
  <div class="container">
    <div class="Login-logo">
      <div class="Login-login-Outter">
        <div class="Login-login-Inner">
          <ul class="Login-login">
            <li><a href="###">扫描登陆</a></li>
            <li class="clear-border"><a href="###">账户登录</a></li>
          </ul>
          <div class="Login-content">
            <form @submit.prevent="login"> 
              <ValidationProvider rules="phone|length" v-slot="{ errors }">
                <div class="Login-phone">
                  <i></i>
                  <input
                    type="text"
                    placeholder="手机号"
                    v-model="user.phone"
                  />
                  <p class="Login-error-msg">{{ errors[0] }}</p>
                </div>
              </ValidationProvider>

              <ValidationProvider rules="password" v-slot="{ errors }">
                <div class="Login-password">
                  <i class="pwd"></i>
                  <input
                    type="text"
                    placeholder="请输入密码"
                    v-model="user.password"
                  />
                  <p class="Login-error-msg">{{ errors[0] }}</p>
                </div>
              </ValidationProvider>

              <div class="Login-Button">
                <label class="checkbox inline">
                  <input name="m1" type="checkbox" value="2" checked="" />
                  自动登录
                </label>
                <span class="forget">忘记密码？</span>
              </div>
              <Button class="Login-btn" type="submit">登&nbsp;&nbsp;录</Button>
            </form>
            <div class="Login-foot">
              <ul>
                <li><img src="./images/qq.png" alt="" /></li>
                <li><img src="./images/weixin.png" alt="" /></li>
                <li><img src="./images/sina.png" alt="" /></li>
                <li><img src="./images/ali.png" alt="" /></li>
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
import { mapState } from "vuex";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import Button from '@comps/Button'
// 手机号验证
extend("phone", {
  ...required,
  message: "手机号不能为空",
});
extend("length", {
  validate(value) {
    return value.length === 11;
  },
  message: "请输入11位手机号码",
});
// 密码验证
extend("password", {
  ...required,
  message: "密码不能为空",
});
export default {
  name: "Login",
  data() {
    return {
      user: {
        phone: "",
        password: "",
      },
      isLogining: false, // 正在登录
      isAutoLogin: true, // 自动登录
    };
  },
  computed: {
    ...mapState({
      name: (state) => state.user.name,
      token: (state) => state.user.token,
    }),
  },
  methods: {
    async login() {
      try {
        // 防止登录多次点击
        if (this.isLogining) return;
        this.isLogining = true;
        const { phone, password } = this.user;
        // 调用方法发送请求
        await this.$store.dispatch("login", { phone, password });
        if(this.isLogining){
          // 将name 和token 存储到localStroage
          localStorage.setItem("name",this.name)
          localStorage.setItem("token",this.token)
        }
        // 登录成功后跳转到首页
        this.$router.push("/");
      } catch {
        this.isAutoLogin = false;
      }
    },
  },
  components: {
    ValidationProvider,
    Button
  },
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
      border: 1px solid #ccc;
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
.Login-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  ul {
    width: 162px;
    display: flex;
    justify-content: space-between;
  }
  span {
    font-size: 16px;
  }
}
</style>