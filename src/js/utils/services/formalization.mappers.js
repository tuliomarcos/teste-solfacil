export const mapInfosFormalization = ({
  cessao,
  detalhes
}) => ({
  session: mapSession(cessao),
  details: mapDetails(detalhes)
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

export const mapDetails = (details) => details.map(({
  cet,
  cpf,
  id,
  nomeCompleto,
  numCcb,
  parcelas,
  tipo,
  valorAquisicao,
  valorBruto,
  valorFinanciado,
}) => ({
  cet,
  cpf,
  id,
  fullName: nomeCompleto,
  ccbNumber: numCcb,
  installments: parcelas,
  type: tipo,
  acquisitionValue: Number(valorAquisicao),
  grossValue: Number(valorBruto),
  financedValue: Number(valorFinanciado),
}))