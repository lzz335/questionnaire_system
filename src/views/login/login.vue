<template>
  <div class="login-container">
    <el-card class="box-card">
      <el-form ref="formRef" :model="form" :rules="rules">
        <h2 class="title">登 录</h2>
        <el-form-item prop="username">
          <!-- <el-icon :size="size" :color="color" class="svg-container">
          <Edit />
        </el-icon> -->
          <!-- 校验用户名和密码是否为必填 -->
          <el-input
              class="inputBox"
              v-model="form.username"
              placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              class="inputBox"
              type="password"
              v-model="form.password"
              placeholder="请输入密码"
              show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button class="submit" type="primary" @click="handleLogin"
          >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { login } from "@/api/login";

const store = useStore();
const form = ref({
  username: "",
  password: "",
});
// 给表单绑定规则
const rules = ref({
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
});

// 表单校验？？
const formRef = ref(null);
const handleLogin = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      console.log(form.value);
      await store.dispatch("app/login", form.value);
    } else {
      console.log("error submit!!");
      return false;
    }
  });
};
</script>
<style lang="scss">
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/bacg.jpg");
}

.submit {
  width: 100%;
  height: 45px;
  font-size: 16px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 80%;
  border-radius: 20px;

}

/* 用户登陆标题 */
.title {
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
  color: black;
  font-weight: 700;
  font-size: 24px;
  font-family: Microsoft Yahei;
}
/* 输入框 */
.inputBox {
  height: 45px;
  margin: auto;
  margin-bottom: 30px;
  width: 80%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin: auto;
  margin-top: 250px;
  width: 450px;
  color: rgb(247, 247, 247);
}
</style>
