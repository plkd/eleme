<template>
    <div class="profile_page">
        <head-top go-back='true' :head-title="profiletitle"></head-top>
        <section>
            <section class="profile-number">
                <router-link :to="userInfo&&userInfo.user_id ? '/profile/info' : '/login'" class="profile-link">
                    <img :src="imgBaseUrl + userInfo.avatar" class="privateImage" v-if="userInfo&&userInfo.user_id">
                    <span class="privateImage" v-else>
                        <svg class="privateImage-svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
                        </svg>
                    </span>
                    <div class="user-info">
                        <p>{{username}}</p>
                        <p>
                            <span class="user-icon">
                                <svg class="icon-mobile" fill="#fff">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use>
                                </svg>
                            </span>
                            <span class="icon-mobile-number">{{mobile}}</span>
                        </p>
                    </div>
                    <span class="arrow">
                        <svg class="arrow-svg" fill="#fff">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                        </svg>
                    </span>
                </router-link>
            </section>
        </section>
    </div>
</template>
<script>
import headTop from "src/components/header/head";
import { mapState, mapMutations } from "vuex";
import { imgBaseUrl } from "src/config/env";

export default {
  data() {
    return {
      profiletitle: "我的",
      username: "登录/注册", //用户名
      resetname: "",
      mobile: "暂无绑定手机号", //电话号码
      balance: 0, //我的余额
      count: 0, //优惠券个数
      pointNumber: 0, //积分数
      avatar: "", //头像地址
      imgBaseUrl
    };
  },
  components: {
    headTop
  },
  mounted() {
    this.initData();
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    initData() {
      if (this.userInfo && this.userInfo.user_id) {
        this.avatar = this.userInfo.avatar;
        this.username = this.userInfo.username;
        this.mobile = this.userInfo.mobile || "暂无绑定手机号";
        this.balance = this.userInfo.balance;
        this.count = this.userInfo.gift_amount;
        this.pointNumber = this.userInfo.point;
      } else {
        this.username = "登录/注册";
        this.mobile = "暂无绑定手机号";
      }
    }
  },
  watch: {
    userInfo(value) {
      this.initData();
    }
  }
};
</script>

<style lang="scss">
@import "src/style/mixin";

.profile_page {
  p,
  span {
    font-family: Helvetica Neue, Tahoma, Arial;
  }
}
.profile-number {
  padding-top: 1.95rem;
  .profile-link {
    //   display: block;
    display: flex;
    box-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: $blue;
    padding: 0.666667rem 0.6rem;
    .privateImage {
      display: inline-block;
      @include wh(2.5rem,2.5rem);
      border-radius: 50%;
      vertical-align: middle;
      .privateImage-svg {
        background: $fc;
        border-radius: 50%;
        @include wh(2.5rem,2.5rem);
      }
    }
    .user-info {
      margin-left: 0.48rem;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      p {
        font-weight: 700;
        @include sc(0.8rem,$fc);
        .user-icon {
          @include wh(0.5rem,0.75rem);
          display: inline-block;
          vertical-align: middle;
          line-height: 0.75rem;
          .icon-mobile {
            @include wh(100%,100%);
          }
        }
        .icon-mobile-number {
          display: inline-block;
          @include sc(0.57333rem,$fc);
        }
      }
    }
    .arrow {
      @include wh(0.46667rem,0.98rem);
      display: inline-block;
      svg {
        @include wh(100%,100%);
      }
    }
  }
}

</style>


