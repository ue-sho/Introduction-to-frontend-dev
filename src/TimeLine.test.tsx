jest.mock('./api')

import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import Timeline from './Timeline'

describe('<Timeline>', () => {
  test('should return <h2> element', async () => {
    /*　actでラップするのはuseEffectなどのHockを
        テスト対象のコンポーネントが使用していた時
        テストが実行できなくなる問題の回避方法 */
    await act(async () => {
      const wrapper = mount(<Timeline />)
      expect(wrapper.find('.page__title').text()).toBe('タイムライン')
    })
  })

  test('should return <ul> element', async () => {
    await act(async () => {
      const wrapper = mount(<Timeline />)
      expect(wrapper.find('ul').is('.book-list')).toBe(true)
    })
  })
})