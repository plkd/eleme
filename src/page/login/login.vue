<template>
    <div class="loginContainer">
        <head-top :head-title="loginWay ? '登录':'密码登录'" goBack="true">

        </head-top>
    </div>
</template>
<script>
import headTop from "../../components/header/head";

export default {
  data() {
    return {
      loginWay: false
    };
  },
  components: {
    headTop
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/mixin";

.loginContainer {
  padding-top: 1.95rem;
  p,
  span,
  input {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
</style>
