<template>
  <div class="login">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always" class="login_card">
          <h2>登录</h2>
          <el-input
            placeholder="请输入账号"
            prefix-icon="el-icon-user-solid"
            v-model="number"
          >
          </el-input>
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-s-platform"
            v-model="answer"
            type="password"
          >
          </el-input>
          <a href="">注册账号</a>
          <el-button size="medium" type="primary" @click="login"
            >确定</el-button
          >
          <el-button size="medium" type="info" @click="reset">重置</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      number: "",
      answer: "",
    };
  },
  methods: {
    login() {
      this.$message({
        message: "恭喜你，登录成功！",
        type: "success",
      });
      this.$router.push("/home");
    },
    reset() {
      this.number="";
      this.answer="";
      this.$message({
        message: "账号密码已重置！",
        type: "warn",
      });
    },
  },
};
</script>

<style lang="css">
.login_card {
  width: calc(540em / 16);
  height: calc(350em / 16);
  margin-left: 320px;
  margin-top: 120px;

}
.login_card a {
    display: block;
    font-size: 15px;
    margin-top: 20px;
    margin-right: -280px;
    margin-bottom: 10px;
  }
.el-input {
  width: 450px;
  box-sizing: content-box;
  margin: 0px auto;
  margin-top: 30px;
}
</style>