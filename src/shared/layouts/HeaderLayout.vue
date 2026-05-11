<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const currentTime = ref<string>('');
let intervalId: ReturnType<typeof setInterval>;

const updateTime = (): void => {
  const date = new Date();

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  const dateFormatted = new Intl.DateTimeFormat('pt-BR', dateOptions).format(date);

  const hoursOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  const hourFormatted = new Intl.DateTimeFormat('pt-BR', hoursOptions).format(date);

  currentTime.value = `${dateFormatted} • ${hourFormatted}`;
};
onMounted(() => {
  updateTime();
  intervalId = setInterval(updateTime, 1000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});

</script>
<template>
  <header class="flex justify-between items-center px-6 py-4 w-full bg-blue-950  flex-shrink-0">

    <div class="flex items-center gap-3">
      <img src="/src/assets/image/logo.png"
        class="w-[60px] h-[60px] rounded-[10px] object-cover object-center flex-shrink-0"
        alt="Logo Rick and Morty Explorer">
      <h1 class="text-xl font-extrabold text-[#F0EBD8]">Rick and Morty Explorer</h1>
    </div>

    <div class="text-[17px] font-bold text-[#F0EBD8]">
      {{ currentTime }}
    </div>

  </header>
</template>
