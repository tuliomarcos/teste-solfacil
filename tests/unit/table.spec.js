import { shallowMount } from '@vue/test-utils'
import Table from '../../src/js/components/shared/Table.vue'

describe('Table tests', () => {
  const wrapper = shallowMount(Table, {
    propsData: {
      labelColumns: ['nome do cliente', 'valor bruto', 'prazo'],
      columns: 6,
      rows: [{
        'clientName': 'Solfacil Energia Solar Ltda<br/>222.851.165-00',
        'financedValue': 'R$ 400.000',
        'grossValue': 'R$ 446.422,94',
        'acquisitionValue': 'R$ 448.208,63',
        'negotiation': '60x<br/>Pós-Fixado',
        'ccbNumber': 'A0677332-000'
      }],
    }
  })
  const table = wrapper.find('.table')
  const headColumns = wrapper.find('.table__th-columns')
  const bodyColumns = wrapper.find('.table__td-columns')

  it('should have infos on table elements', () => {
    expect(table.exists()).toBe(true)
    expect(headColumns.exists()).toBe(true)
    expect(bodyColumns.exists()).toBe(true)
  })

  it('must be a array labelColumns prop', () => {
    const typesExpected = 'object'
    expect(typesExpected).toContain(typeof wrapper.props('labelColumns'))
  })

  it('must be a array rows prop', () => {
    const typesExpected = 'object'
    expect(typesExpected).toContain(typeof wrapper.props('rows'))
  })

  it('must be a array or number columns prop', () => {
    const typesExpected = ['object', 'number']
    expect(typesExpected).toContain(typeof wrapper.props('columns'))
  })
})