<template>
  <div id="home-page" class="lg:pt-20 lg:pb-20 xl:pr-28 xl:pl-28 sm:pt-10 sm:pb-10 sm:pr-8 sm:pl-8 xs:pt-4 xs:pb-4 xs:pr-4 xs:pl-4">
    <div id="formalization" class="flex justify-between">
      <div class="flex">
        <svg class="w-16" xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
          <circle cx="32" cy="32.5" r="31" stroke="#666666" stroke-width="2"/>
          <path d="M48 33.5C48.5523 33.5 49 33.0523 49 32.5C49 31.9477 48.5523 31.5 48 31.5L48 33.5ZM15.2929 31.7929C14.9024 32.1834 14.9024 32.8166 15.2929 33.2071L21.6569 39.5711C22.0474 39.9616 22.6805 39.9616 23.0711 39.5711C23.4616 39.1805 23.4616 38.5474 23.0711 38.1569L17.4142 32.5L23.0711 26.8431C23.4616 26.4526 23.4616 25.8195 23.0711 25.4289C22.6805 25.0384 22.0474 25.0384 21.6569 25.4289L15.2929 31.7929ZM48 31.5L16 31.5L16 33.5L48 33.5L48 31.5Z" fill="#666666"/>
        </svg>
        <div class="flex flex-col ml-4">
          <h1 class="xl:text-4xl md:text-3xl">Formalizações</h1>
          <h4>APROVADAS - {{ getCurrentDay() }} - {{ getCurrentHours() }}</h4>
        </div>
      </div>
      <button>GERAR CNAB</button>
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
    <div id="back-page">
      <img src="../../../assets/logo.png" alt="Sol Fácil">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="65" viewBox="0 0 64 65" fill="none">
          <circle cx="32" cy="32.5" r="31" stroke="#666666" stroke-width="2"/>
          <path d="M48 33.5C48.5523 33.5 49 33.0523 49 32.5C49 31.9477 48.5523 31.5 48 31.5L48 33.5ZM15.2929 31.7929C14.9024 32.1834 14.9024 32.8166 15.2929 33.2071L21.6569 39.5711C22.0474 39.9616 22.6805 39.9616 23.0711 39.5711C23.4616 39.1805 23.4616 38.5474 23.0711 38.1569L17.4142 32.5L23.0711 26.8431C23.4616 26.4526 23.4616 25.8195 23.0711 25.4289C22.6805 25.0384 22.0474 25.0384 21.6569 25.4289L15.2929 31.7929ZM48 31.5L16 31.5L16 33.5L48 33.5L48 31.5Z" fill="#666666"/>
        </svg>
        <span>Voltar</span>
      </div>
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
    ...mapActions('formalization', ['getInfosFormalization']),
    getCurrentDay() {
      const date = new Date 
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    },
    getCurrentHours() {
      return new Date().toLocaleTimeString()
    }
  }
}
</script>
