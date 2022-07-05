<template>
  <view
    class="index bg-[#b5b5b5] h-screen pl-7.5"
    :class="{ 'text-[50px]': true }"
  >
    <text :class="['font-bold', 'text-[#ffffff]']">{{ data.title }}</text>
  </view>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { GET } from "../../api/index";
const data = reactive({ title: "nihao " });
onMounted(() => {
  setTimeout(() => {
    data.title = "你好";
  }, 200);
  GET('/login/getCaptcha').then(res=>{
    console.log(res);
    
  })
});
</script>

<style>
.index {
  @apply pt-[45vh];
}
</style>
