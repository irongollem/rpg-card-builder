import Vue from 'vue'
import Vuex from 'vuex'
import { createModule, mutation, extractVuexModule, createProxy } from "vuex-class-component";
import { Npc } from './types'

Vue.use(Vuex)

const VuexModule = createModule({
  namespaced: 'npc',
  strict: false,
})

export class NpcStore extends VuexModule {
  npcs: Npc[] = [];

  @mutation
  addNpc (npc: Npc) {
    this.npcs.push(npc)
    console.log(this.npcs);
  }
}

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule( NpcStore )
  }
})

export const vxm = {
  NpcStore: createProxy( store, NpcStore)
}