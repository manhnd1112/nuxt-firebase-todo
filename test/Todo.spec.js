import { mount } from '@vue/test-utils'
import Todo from '~/components/Todo'
import Vuetify from 'vuetify'
import Vue from 'vue'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

Vue.use(Vuetify);

describe('Todo.vue', () => {
	let wrapper
	beforeAll(async function(){
  		wrapper = mount(Todo)
	});
	test('Setup correctly', () => {
		expect(true).toBe(true)
	})
	test('Test render View', async () => {
		expect(wrapper.text()).toContain('TODO')
	})
})