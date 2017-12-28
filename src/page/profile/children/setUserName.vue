<template>
    <div class="rating_page">
        <head-top head-title="修改用户名" go-back="true"></head-top>
        <section class="setname">
            <section class="setname-top">
                <input type="text" placeholder="输入用户名" :class="{'setname-input':bordercolor}" @input="inputThing" v-model="inputValue">
                <div>
                    <p v-if="warn">用户名只能修改一次（5-24字符之间）</p>
                    <p class="unlikep" v-else>用户名长度在5到24位之间</p>
                </div>
            </section>
            <section class="reset">
                <button :class="{valid_button: valid}" :disabled="!valid" @click="resetName">确认修改</button>
            </section>
        </section>
    </div>
</template>
<script>
import headTop from "src/components/header/head";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      warn: true, //输入框提醒
      bordercolor: false, //输入框边框颜色
      valid: false, //字体透明度
      inputValue: "" //输入框的内容
    };
  },
  components: {
    headTop
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    ...mapMutations(["RESET_NAME"]),
    inputThing() {
      if (this.inputValue.length < 5 || this.inputValue.length > 24) {
        this.warn = false;
        this.bordercolor = true;
        this.valid = false;
      } else {
        this.warn = true;
        this.bordercolor = false;
        this.valid = true;
      }
    },
    resetName() {
      this.RESET_NAME(this.inputValue);
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
@import "src/style/mixin";

.setname {
  width: 15.2rem;
  margin: 0 auto;
  .setname-top {
    padding-top: 0.4rem;
    input {
      background: none;
      width: 15.2rem;
      border: 1px solid #ddd;
      @include borderRadius(2px);
      padding: 0.2rem 0.1rem;
      line-height: 1.2rem;
      font-size: 0.7rem;
      display: block;
    }
    .setname-input {
      border-color: #ea3106;
    }
    p {
      width: 100%;
      @include sc(0.4rem,#666);
      padding: 0.4rem 0 1rem;
    }
    .unlikep {
      @include sc(0.58rem,#ea3106);
      padding-top: 0.1rem;
    }
  }
  .reset {
    width: 100%;
    background: #3199e8;
    button {
      display: block;
      width: 100%;
      background: none;
      line-height: 2rem;
      @include sc(0.7rem,#fff);
      opacity: .6;
    }
    .valid_button{
        opacity: 1;
    }
  }
}
</style>
