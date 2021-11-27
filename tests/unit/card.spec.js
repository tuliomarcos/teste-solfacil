import { shallowMount } from '@vue/test-utils'
import Card from '../../src/js/components/shared/Card.vue'

describe('Card tests', () => {
  const wrapper = shallowMount(Card, {
    propsData: { 
      title: 'Valor financiado',
      valuePF: '140.000',
      valuePJ: 40.000,
      totalValue: 100,
    }
  })
  const titleElement = wrapper.find('.card__title')
  const valuePfElement = wrapper.find('.card__value-pf')
  const valuePjElement = wrapper.find('.card__value-pj')
  const total = wrapper.find('.card__total')
  
  it('should have infos on elements', () => {
    expect(titleElement.exists()).toBe(true)
    expect(valuePfElement.exists()).toBe(true)
    expect(valuePjElement.exists()).toBe(true)
    expect(total.exists()).toBe(true)
  })
  
  it('values must be a number or string', () => {
    const typesExpected = ['number', 'string']
    expect(typesExpected).toContain(typeof wrapper.props('valuePF'))
    expect(typesExpected).toContain(typeof wrapper.props('valuePJ'))
    expect(typesExpected).toContain(typeof wrapper.props('totalValue'))
  })

  it('values must be start with R$ ', () => {
    expect(valuePfElement.text().startsWith("PF R$")).toBe(true);
    expect(valuePjElement.text().startsWith("PJ R$")).toBe(true);
    expect(total.text().startsWith("Total R$")).toBe(true);
  })

  it('value this prop must be a string', () => {
    const typesExpected = 'string'
    expect(typesExpected).toContain(typeof wrapper.props('title'))
  })

  it('should have prop title', () => {
    expect(wrapper.props().title).toBe('Valor financiado')
    expect(wrapper.props('title')).toBe('Valor financiado')
  })

  it('should have prop valuePF', () => {
    expect(wrapper.props().valuePF).toBe('140.000')
    expect(wrapper.props('valuePF')).toBe('140.000')
  })

  it('should have prop valuePJ', () => {
    expect(wrapper.props().valuePJ).toBe(40.000)
    expect(wrapper.props('valuePJ')).toBe(40.000)
  })

  it('should have prop totalValue', () => {
    expect(wrapper.props().totalValue).toBe(100)
    expect(wrapper.props('totalValue')).toBe(100)
  })
})