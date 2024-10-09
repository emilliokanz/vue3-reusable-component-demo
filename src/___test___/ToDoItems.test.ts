import ToDoItems from "@/components/toDo/ToDoItems.vue";
import { VueWrapper, shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";

describe('ToDoItems Component', () => {
    let wrapper: VueWrapper; 

    beforeEach(() => {
        wrapper = shallowMount(ToDoItems, {
            props: {
                data: {
                    id: 1,  
                    title: 'test title', 
                    completed: false
                }
            }
        })
    })

    it('displays the given data', () => {
        expect(wrapper.text()).toContain('test title')
    })

    it('should emit completed to true', () => {
        wrapper.find('button').trigger('click')
        expect(wrapper.emitted('data')).toEqual([[1]])
    })
})