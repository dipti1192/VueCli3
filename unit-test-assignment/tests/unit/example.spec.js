import { expect } from 'chai';
import { shallowMount, createLocalVue, mount  } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import store from '../../src/store.js';
import Vuetify from "vuetify";

it('Component should contain created hook', () =>{
  expect(typeof HelloWorld.created).to.equal('function')
})

it('Sets the correct default data in Component', () => {
  expect(typeof HelloWorld.data).to.equal('function')
  const defaultData = HelloWorld.data();
  console.log("Default component data ------>", defaultData);
  expect(defaultData.testText).to.equal('Hello');
  expect(defaultData.ecosystem).to.have.lengthOf(1);
})

it('Trigger Click event and check component data value incremented by 2', () => {
  const wrapper = shallowMount(HelloWorld, {
    store,
  });
  expect(wrapper.vm.clickValue).to.equal(0);
  const button = wrapper.find('button');
  button.trigger('click');
  console.log("Trigger button click and check component data ---->", wrapper.vm.clickValue);
  console.log("Trigger button click and check Dom Value ---->", wrapper.find('div').text());
  expect(wrapper.vm.clickValue).to.equal(2);
  expect(wrapper.find('div').text()).to.equal('I am clicked');
})

describe('HelloWorld.vue', () => {
  it('Compare Computed properties from store with dom value', () => {
    const msg = 'new message';
    const localVue = createLocalVue();
    localVue.use(Vuetify);
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      store,
      localVue,
    });
    console.log("Find Particular DOM element Value ---->",wrapper.find('h2').text())
    console.log("Find Computed property value ---->",wrapper.vm.name);
    console.log("Find Store and its values in states ---->",wrapper.vm.$store.state.text);
    console.log("Find element by classname ---->",wrapper.find('.headline').text());
    console.log("Find Vuetify tags ---->",wrapper.find('v-flex'), wrapper.contains('v-flex'),wrapper.vm.$el.textContent);
    expect(wrapper.find('h2').text()).to.equal(wrapper.vm.name);
  });
});


