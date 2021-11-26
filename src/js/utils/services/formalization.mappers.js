export const mapInfosFormalization = ({
  cessao,
  detalhes
}) => ({
  session: mapSession(cessao),
  details: detalhes
})

export const mapSession = ({
  criadoEm,
  id,
  pf,
  pj,
  total
}) => ({
  id,
  createAt: criadoEm,
  financed: {
    title: 'Valor financiado',
    valuePF: pf.financiado,
    valuePJ: pj.financiado,
    totalValue: total.financiado
  },
  gross: {
    title: 'Valor bruto',
    valuePF: pf.bruto,
    valuePJ: pj.bruto,
    totalValue: total.bruto
  },
  acquisition: {
    title: 'Valor de aquisição',
    valuePF: pf.aquisicao,
    valuePJ: pj.aquisicao,
    totalValue: total.aquisicao
  }

})

export const mapDetails = () => ({

})