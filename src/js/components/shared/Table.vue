<template>
  <div id="shared-table" class="overflow-auto">
    <table class="table w-full">
      <thead>
        <tr class="bg-gray-terciary border-b border-yellow-500 rounded">
          <th
            v-for="(col, key) in labelColumns"
            :key="key"
            class="table__th-columns p-4 text-left"
            @click="emitClick(col.key)"
          >{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, keyRow) in rows"
          :key="keyRow"
          class="border border-gray-300 md:text-sm xs:text-xs rounded"
        >
          <td
            v-for="(col, key) in columns"
            :key="key"
            v-html="row[col]"
            class="table__td-columns p-4 text-left"
          ></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    labelColumns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: [Array, Number],
      required: false,
    }
  },
  methods: {
    emitClick(label) {
      return this.$emit('click', label)
    }
  }
};
</script>


<style scoped>
table {
  border-collapse: separate; 
  border: none;
  border-spacing: 0 8px;
  overflow-x: scroll;
}

td, th {       
  border-width: 1px 0;
  border-style: solid;
  border-color: #E0E0E0;
  padding: 1rem;
  min-width: 140px;
}

th {
	background: #E0E0E0;
	border-bottom: 1px solid #FFB600;
  cursor: pointer;
}

th:last-child,
th:nth-last-child(2) {
  cursor: not-allowed;
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