<template>
  <div>
    <div>
      <VEmojiPicker :customEmojis="emojis" :customCategories="categories" :continuousList="false" @select="selectEmoji"  v-if="visible" :dark="false" />
    </div>
    <button @click="changeEmojis">Change</button>
    <button @click="changeVisibleEmojis">Toogle View</button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

import VEmojiPicker, { emojisDefault, categoriesDefault } from "./index";
// import { VEmojiPicker, emojisDefault } from "./index";

Vue.use(VEmojiPicker);

@Component({
  name: "AppTestUI",
  components: {
    // VEmojiPicker
  }
})
export default class AppTestUi extends Vue {
  private emojis = emojisDefault;
  private categories = categoriesDefault;

  private visible = true;

  changeEmojis() {
    this.emojis = emojisDefault.slice(0, 8);
  }

  changeVisibleEmojis() {
    this.visible = !this.visible;
  }
selectEmoji(emoji){
    console.log('select emoji', emoji.data);
}
}
</script>

<style lang='scss' scoped>
</style>
