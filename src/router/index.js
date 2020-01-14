import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const memberIndex = r => require.ensure([], () => r(require('@/view/member/index'), 'memberIndex'))
const memberRightList = r => require.ensure([], () => r(require('@/view/member/memberRights'), 'memberRight'))
const addMemberRights = r => require.ensure([], () => r(require('@/view/member/addRights'), 'addRights'))
const codeList = r => require.ensure([], () => r(require('@/view/member/redeemCodeList'), 'codeList'))
const ownerRes = r => require.ensure([], () => r(require('@/view/member/carOwnerRes'), 'ownerRes'))
const gasCard = r => require.ensure([], () => r(require('@/view/member/gasCardSettings'), 'gasCard'))
const carInsurance = r => require.ensure([], () => r(require('@/view/member/carInsurance'), 'carInsurance'))

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: memberIndex,
    children: [{
      path: '/',
      redirect: 'member/index'
    }, {
      path: 'member/index',
      name: 'list',
      component: memberRightList
    }, {
      path: 'member/addRights',
      name: 'add',
      component: addMemberRights
    }, {
      path: 'member/codeList',
      name: 'codeList',
      component: codeList
    }, {
      path: 'member/ownerRes',
      name: 'ownerRes',
      component: ownerRes
    }, {
      path: 'member/gasCard',
      name: 'gasCard',
      component: gasCard
    }, {
      path: 'member/carInsurance',
      name: 'carInsurance',
      component: carInsurance
    }
    ]
  }]
})
