<template>
  <div id="home-page">
    <div id="formalization">

    </div>
    <div id="total-formalizations">
      <h1>Total formalizações</h1>
      <Card
        v-for="(info, key) in allSessionValues"
        :key="key"
        :title="info.title"
        :valuePF="info.valuePF"
        :valuePJ="info.valuePJ"
        :totalValue="info.totalValue"
      ></Card>
    </div>
    <div id="table">
      <Table
        :labelColumns="labelColumns"
        :rows="rows"
      ></Table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import Card from '../shared/Card.vue'
import Table from '../shared/Table.vue'

export default {
  name: 'Home',
  data: () => ({
    labelColumns: [
      'Nome do cliente',
      'Valor financiado',
      'Valor bruto',
      'Valor de aquisição',
      'Prazo',
      'N.º CCB'
    ],
  }),
  components: {
    Card,
    Table,
  },
  mounted() {
    this.getInfosFormalization()
  },
  computed: {
    ...mapState('formalization', ['session', 'details']),
    ...mapGetters('formalization', ['allSessionValues']),
    rows() {
      return this.details.map(item => ({
        clientName: `${item.fullName}<br/>${item.cpf}`,
        financedValue: `R$ ${item.financedValue.toLocaleString('pt-BR')}`,
        grossValue: `R$ ${item.grossValue.toLocaleString('pt-BR')}`,
        acquisitionValue: `R$ ${item.acquisitionValue.toLocaleString('pt-BR')}`,
        negotiation: `${item.installments}x<br/>${item.cet === 'POS_FIXADO' ? 'Pós-Fixado' : 'Pré-fixado'}`,
        ccbNumber: item.ccbNumber 
      }))
    },
  },
  methods: {
    ...mapActions('formalization', ['getInfosFormalization'])
  }
}
</script>

<style scoped>
</style>
