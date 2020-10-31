<template>
  <div class="no-data-box">
    <div class="no-data-thumb">
      <img src="/notFound.png" alt />
    </div>
    <p class="no-data-text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: ["text"],
};
</script>