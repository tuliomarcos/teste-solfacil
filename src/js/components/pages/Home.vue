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

    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import Card from '../shared/Card.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    Card,
  },
  mounted() {
    this.getInfosFormalization()
  },
  computed: {
    ...mapState('formalization', ['session']),
    ...mapGetters('formalization', ['allSessionValues']),
  },
  methods: {
    ...mapActions('formalization', ['getInfosFormalization'])
  }
}
</script>

<style scoped>
</style>
