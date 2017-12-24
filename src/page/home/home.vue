<template>
    <div>
        <head-top signin-up ='home'>
            <span slot="logo" class="head_logo" @click="reload">ele.me</span>
        </head-top>
        <nav class="city_nav">
            <div class="city_tip">
                <span>当前定位城市：</span>
                <span>定位不准时，请在城市列表中选择</span>
            </div>
            <router-link :to="'/city/'+ guessCityId" class="guess_city">
                <span>{{guessCity}}</span>
                <svg class="arrow_right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
                </svg>
            </router-link>
        </nav>
        <section id="hot_city_container">
            <h4 class="city_title">热门城市</h4>
            <ul class="citylistul clear">
                <router-link tag="li" v-for="item in hotCity" :key="item.id" :to="'/city/' + item.id"></router-link>
            </ul>
        </section>
        <section class="group_city_container">
            <ul class="lettter_classify">
                <li class="letter_classify_id" v-for="(value, key, index) in sortGroupCity" :key="key">
                    <h4 class="city_title">{{key}}
                        <span v-if="index == 0">（按字母排序）</span>
                    </h4>
                    <ul class="groupcity_name_container citylistul clear">
                        <router-link tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
                            {{item.name}}
                        </router-link>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import headTop from "../../components/header/head";
import { cityGuess, hotCity, groupCity } from "../../service/getData";

export default {
  components: { headTop },
  data() {
    return {
      guessCityId: "",
      guessCity: "",
      hotCity: [],
      groupCity: {}
    };
  },
  methods: {
    reload() {
      window.location.reload();
    }
  },
  mounted() {
    cityGuess().then(res => {
      this.guessCity = res.name;
      this.guessCityId = res.id;
    })
    hotCity().then(res => {
        this.hotCity = res;
    })
    groupCity().then(res => {
        this.groupCity = res
    })
  },
  computed: {
      sortGroupCity(){
          let sortObj = {};
          for (let i=65;i<=90;i++){
              if(this.groupCity[String.fromCharCode(i)]){
                  sortObj[String.fromCharCode(i)] = this.groupCity[String.fromCharCode(i)];
              }
          }
          return sortObj;
      }
  }
};
</script>
