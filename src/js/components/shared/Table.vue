<template>
  <table id="shared-table">
    <thead>
      <tr>
        <th
          v-for="(label, key) in labelColumns"
          :key="key"
        >{{ label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, keyRow) in rows"
        :key="keyRow"
      >
        <td
          v-for="(value, key) in row"
          :key="key"
          v-html="value"
        ></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    labelColumns: {
      type: String,
      required: true,
    },
    rows: {
      type: [Array, Number],
      required: true,
    },
    columns: {
      type: [Array, Number],
      required: false,
    }
  },
};
</script>


<style scoped>
</style>