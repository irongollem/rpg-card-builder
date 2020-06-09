<template>
  <form class="npcForm" @submit.prevent="submit" novalidate>
      <c-input v-model="npc.name" label="Name"/>
      <c-input v-model="npc.img" label="Image URL"/>

    <div class="chars-holder">
        <c-input v-model="npc.brn" label="Brawn" />
        <c-input v-model="npc.agi" label="Agility" />
        <c-input v-model="npc.int" label="Intelligence" />
        <c-input v-model="npc.cun" label="Cunning" />
        <c-input v-model="npc.wil" label="Will" />
        <c-input v-model="npc.pre" label="Prescence" />
    </div>

    <div>
        {{npc.skills && npc.skills.join(', ')}}
        <c-input v-model="skill" label="Skills" />
        <button type="button" @click="addSkill">Add</button>
    </div>

      <div class="personality-holder">
        <c-input area v-model="npc.strength" label="Strength" />
        <c-input area v-model="npc.flaw" label="Flaw" />
        <c-input area v-model="npc.desire" label="Desire" />
        <c-input area v-model="npc.fear" label="Fear" />
      </div>
      <button>Save</button>
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import CInput from '@/components/input.vue'
import { vxm } from '@/store'
import { Npc } from '../store/types'

@Component({
    components: {
        'c-input': CInput
    }
})
export default class NPCForm extends Vue {
    skill = ''
    npc: Npc = {
        name: '',
        flaw: '',
        strength: '',
        desire: '',
        fear: '',
        img: '',
        skills: []
    }

    addSkill () {
        if (!this.npc.skills) this.npc.skills = []
        this.npc.skills.push(this.skill)
        this.skill = ''
    }

    submit(): void {
       vxm.NpcStore.addNpc(this.npc)
       this.npc = {}
    }

}
</script>

<style>
.npcForm {
    display: flex;
    flex-direction: column;
}
.personality-holder {
    display: grid;
    grid-template-columns: 50% 50%;
}

.chars-holder {
    display: grid;
    grid-template-columns: 33% 33% 33%;
}
</style>