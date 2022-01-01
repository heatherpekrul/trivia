import { shallowMount } from '@vue/test-utils'
import App from '../../client/App.vue'

describe('App.vue', () => {
  it('Renders', () => {
    const wrapper = shallowMount(App);
    expect(wrapper).toMatchSnapshot();
  })
})
