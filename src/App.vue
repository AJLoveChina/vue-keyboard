<template>
  <div>
    <div style="width:600px;margin:0 auto;padding:30px 0px 0px;">
      <h3>vue-keyboard</h3>
      <p>A real hand tapping keyboard</p>
      <button @click="show">I wanna a show!</button>
      <span ref="text"></span>
    </div>
    <vue-keyboard ref='keyboard' :width="600"></vue-keyboard>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    async show() {
      let text = this.$refs.text;
      text.innerHTML = "";
      let list = "I love you mona".split("");
      for (let i =0 ; i < list.length; i++) {
        text.innerHTML = text.innerHTML + list[i];
        await this.tap(list[i]);
      }
    },
    sleep(millinSeconds) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true)
          },millinSeconds)
      })
    },
    async tap(k) {
      let dom = this.$refs.keyboard;

      dom.showHand(k);
      await this.sleep(600);
      dom.hideHand(k);
    }
  }
}
</script>

<style>
  *{
    box-sizing:border-box;
  }
</style>
