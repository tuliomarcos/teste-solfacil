<template>
  <div id="shared-card">
    <h3>{{ title }}</h3>
    <span>PF R$ {{ valuePF }}</span>
    <span>PJ R$ {{ valuePJ }}</span>
    <span>Total R$ {{ totalValue }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    valuePF: {
      type: [String, Number],
      dafault: '-',
    },
    valuePJ: {
      type: [String, Number],
      dafault: '-',
    },
    totalValue: {
      type: [String, Number],
      required: true,
    }
  },
};
</script>


<style scoped>
</style>