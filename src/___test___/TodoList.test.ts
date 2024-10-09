import ToDoList from '@/components/toDo/ToDoList.vue'
import { VueWrapper, shallowMount } from '@vue/test-utils'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {describe, test, expect, beforeEach} from 'vitest'
import { nextTick } from 'vue'

const axiosMock = new MockAdapter(axios)

axiosMock.onGet('https://jsonplaceholder.typicode.com/todos').reply(200, [
    {title: 'todo 1', id: 1, completed: 'false'},
    {title: 'todo 2', id: 2, completed: 'false'},
    {title: 'todo 3', id: 3, completed: 'false'}
])

describe('ToDoList Component', () => {
    let wrapper: VueWrapper;

    beforeEach(() => {
        wrapper = shallowMount(ToDoList)
    })

    test('it fetches to do list and displays them', async () => {
        expect(axiosMock.history.get.length).toBe(1);

        await nextTick();

        expect(wrapper.findAll('[data-test="items"]').length).toEqual(3)
    })

    // test ('modal renders user name', () => {

    //     const submitButton = wrapper.find('#submit-button')

    //     expect(submitButton.exists()).toBe(true)
    // })
})