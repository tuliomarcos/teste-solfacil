<template>
  <table id="shared-table" class="w-full">
    <thead>
      <tr class="bg-gray-terciary border-b border-yellow-500 rounded">
        <th
          v-for="(label, key) in labelColumns"
          :key="key"
          class="p-4 text-left"
        >{{ label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, keyRow) in rows"
        :key="keyRow"
        class="border border-gray-300 md:text-sm xs:text-xs rounded"
      >
        <td
          v-for="(value, key) in row"
          :key="key"
          v-html="value"
          class="p-4 text-left"
        ></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    labelColumns: {
      type: Array,
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
table {
  border-collapse: separate; 
  border: none;
  border-spacing: 0 8px;
}

td, th {       
  border-width: 1px 0;
  border-style: solid;
  border-color: #E0E0E0;
  padding: 1rem;
}

th {
	background: #E0E0E0;
	border-bottom: 1px solid #FFB600;
}

td:first-child,
th:first-child {  
  border-left: 1px solid #E0E0E0;
  border-radius: 4px 0 0 4px; 
}

td:last-child,
th:last-child {  
  border-right: 1px solid #E0E0E0;
  border-radius: 0 4px 4px 0; 
}
</style>