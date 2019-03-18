<style scoped>
  .typing-block {
    margin: 0 auto;
    width: 685px;
    position: relative;
  }
  .keyboard {
    top: 0;
    left: 0;
  }
  .hand {
    position: absolute;
    pointer-events: none;
    height: 363px;
    top: -10px;
    left: 0px;
    opacity: 0.8;
    transform: translateX(55px) scale(1.55);
  }
</style>


<template>
  <div class="typing-block">
    <object data="../assets/keyboard-ansi.svg" type="image/svg+xml" ref="svg" class="keyboard" width="100%"
            height="100%"></object>
    <object data="../../../static/hand-both.svg" type="image/svg+xml" ref="hand" class="hand" width="100%"
            height="100%"></object>
  </div>
</template>


<script>

  import typing from "../../lib/typing"

  export default {
    name: 'vueKeyboard',
    data() {
      return {}
    },
    mounted() {

      let svg = this.$refs.svg;
      let color = "lightblue"
      let strokeColor = "#02a8de"
      let originalColor = "#777777"
      let that = this;
      console.log("typing", typing);

      $(document.body).on("keydown keyup", function (ev) {
        console.log(`Code : \t${ev.keyCode}`);

        var items = that.getTextByKeycode(ev.keyCode);
        var list = that.getLineByKeycode(ev.keyCode);
        var k = String.fromCharCode(ev.keyCode).toLowerCase()
        if (ev.type == "keydown") {
          that.showHand(k)
        } else {
          that.hideHand(k);
        }


        items.forEach(function (item) {
          if (ev.type == "keydown") {
            item.css("fill", color)
            item.style.fill = color;
          } else {
            item.style.fill = originalColor;
          }
        });

        list.forEach(function (item) {
          if (ev.type == "keydown") {
            item.style.stroke = strokeColor;
          } else {
            item.style.stroke = originalColor;
          }
        })

      })
    },
    methods: {
      getLineByKeycode(keyCode) {
        var result = [];
        var svg = this.$refs.svg;
        var k = String.fromCharCode(keyCode)
        var item = svg.contentDocument.getElementById(k.toLowerCase())

        if (item) {
          result.push(item)
        }
        return result;
      },
      getTextByKeycode(keyCode) {
        var svg = this.$refs.svg
        var items = svg.contentDocument.querySelectorAll("text")
        var result = [];
        var k = String.fromCharCode(keyCode)

        items.forEach(function (item) {
          if (item.innerText == k) {
            result.push(item)
          }
        })

        return result

      },
      showHand(k) {
        var hand = this.$refs.hand
        var item = hand.contentDocument.getElementById(k.toLowerCase())

        item.style.display = "block";
      },
      hideHand(k) {
        var hand = this.$refs.hand
        var item = hand.contentDocument.getElementById(k.toLowerCase())

        item.style.display = "none";
      }
    }
  }
</script>

