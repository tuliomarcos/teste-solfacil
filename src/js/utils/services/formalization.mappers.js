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
    valuePF: Number(pf.financiado).toLocaleString('pt-BR'),
    valuePJ: Number(pj.financiado).toLocaleString('pt-BR'),
    totalValue: Number(total.financiado).toLocaleString('pt-BR')
  },
  gross: {
    title: 'Valor bruto',
    valuePF: Number(pf.bruto).toLocaleString('pt-BR'),
    valuePJ: Number(pj.bruto).toLocaleString('pt-BR'),
    totalValue: Number(total.bruto).toLocaleString('pt-BR')
  },
  acquisition: {
    title: 'Valor de aquisição',
    valuePF: Number(pf.aquisicao).toLocaleString('pt-BR'),
    valuePJ: Number(pj.aquisicao).toLocaleString('pt-BR'),
    totalValue: Number(total.aquisicao).toLocaleString('pt-BR')
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