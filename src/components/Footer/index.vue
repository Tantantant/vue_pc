<template>
  <div class="container">
    <div class="Footer-footerList">
      <dl>
        <dt><h4>购物指南</h4></dt>
        <dd>购物流程</dd>
        <dd>会员介绍</dd>
        <dd>生活旅行/团购</dd>
        <dd>常见问题</dd>
        <dd>购物指南</dd>
      </dl>
      <dl>
        <dt><h4>配送方式</h4></dt>
        <dd>上门自提</dd>
        <dd>211限时达</dd>
        <dd>配送服务查询</dd>
        <dd>配送收费标准</dd>
        <dd>海外配送</dd>
      </dl>
      <dl>
        <dt><h4>支付方式</h4></dt>
        <dd>货到付款</dd>
        <dd>在线支付</dd>
        <dd>分期付款</dd>
        <dd>邮局汇款</dd>
        <dd>公司转账</dd>
      </dl>
      <dl>
        <dt><h4>售后服务</h4></dt>
        <dd>售后代理</dd>
        <dd>价格保护</dd>
        <dd>退款说明</dd>
        <dd>返修/退换货</dd>
        <dd>取消订单</dd>
      </dl>
      <dl>
        <dt><h4>特色服务</h4></dt>
        <dd>夺宝岛</dd>
        <dd>DIY装机</dd>
        <dd>延保服务</dd>
        <dd>尚品汇E卡</dd>
        <dd>尚品汇通信</dd>
      </dl>
      <dl>
        <dt><h4>帮助中心</h4></dt>
        <dd>
          <img src="./images/wx_cz.jpg" alt="" />
        </dd>
      </dl>
    </div>
    <div class="Footer-footer">
      <div class="Footer-footerInfo">
        <ul class="Footer-footerInfo_Nav">
          <li>关于我们</li>
          <li>联系我们</li>
          <li>关于我们</li>
          <li>商家入驻</li>
          <li>营销中心</li>
          <li>友情链接</li>
          <li>关于我们</li>
          <li>营销中心</li>
          <li>友情链接</li>
          <li class="clear-border">关于我们</li>
        </ul>
        <p>地址：北京市昌平区宏福科技园综合楼6层</p>
        <p>京ICP备19006430号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.container {
  background-color: #eaeaea;
}
.Footer-footerList {
  width: 1200px;
  height: 208px;
  margin: 0 auto;
  display: flex;
  padding: 20px 20px 20px 40px;
  dl {
    width: 200px;
    dd {
      height: 18px;
    }
  }
  h4 {
    font-size: 14px;
  }
}
.Footer-footer {
  width: 1200px;
  margin: 0 auto;
  border-top: 1px solid #e4e1e1;
  padding: 20px;
  p {
    margin: 10px 0;
  }
}
.Footer-footerInfo {
  text-align: center;
  width: 1200px;
}
.Footer-footerInfo_Nav {
  li {
    display: inline;
    border-right: 1px solid #333;
    padding: 0 10px;
  }
  .clear-border {
    border: none;
  }
}
</style>