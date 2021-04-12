<template>
  <div v-if="isAemoji" :class="['emoji', { 'border': withBorder } ]" :style="styleSize" v-html="aemoji(emoji.data)"></div>
  <span v-else :class="['emoji', { 'border': withBorder } ]" :style="styleSize" v-html="emoji.data" />
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import {IEmoji} from "@/models/Emoji";
// import '../aemoji-path.js';
import unifiedToHTML from "aemoji";

@Component({})
export default class EmojiItem extends Vue {
  @Prop({}) emoji!: IEmoji;
  @Prop({}) size!: number;
  @Prop({}) withBorder!: boolean;

  get styleSize() {
    return {
      fontSize: `${this.size - 5}px`,
      lineHeight: `${this.size}px`,
      height: `${this.size}px`,
      width: `${this.size}px`
    };
  }

  isAemoji(){
    return window.hasOwnProperty('__aemoji_url__');
  }

  aemoji(data){
    if(this.isAemoji()){
      return unifiedToHTML(data);
    }else {
      return data;
    }
  }
}
</script>

<style lang="scss" scoped>
.emoji {
  text-align: center;
  padding: 3px;
  box-sizing: content-box;
  overflow: hidden;
  transition: transform 0.2s;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
}

.border:hover {
  background: #00000010;
  border-radius: 8px;
}
</style>
