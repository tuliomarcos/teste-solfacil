<template>
  <div id="shared-card" class="bg-gray-primary p-4 rounded">
    <h3 class="text-white text-sm font-semibold mb-1.5">{{ title }}</h3>
    <div class="flex xl:flex-row md:flex-col sm:flex-row xs:flex-col mb-1">
      <span class="w-full text-white xl:mr-1 md:mr-0 sm:mr-1 px-3 mb-1 border border-solid border-white rounded">PF R$ {{ valuePF }}</span>
      <span class="w-full text-white xl:ml-1 md:ml-0 sm:ml-1 px-3 mb-1 border border-solid border-white rounded">PJ R$ {{ valuePJ }}</span>
    </div>
    <span class="orange-primary font-bold">Total R$ <span class="text-xl">{{ totalValue }}</span></span>
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