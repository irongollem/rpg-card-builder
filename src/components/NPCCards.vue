<template>
  <section class="card-wrapper">
      <c-npc
        v-for="npc in npcs.slice().reverse()"
        :key="npc.name"
        class="npc"
        :npc="npc" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CNpc from '@/components/NPC.vue'
import { vxm } from '@/store'
import { Npc } from '../store/types'

@Component({
    components: {
        'c-npc': CNpc
    }
})
export default class NPCCards extends Vue {
    npcs: Npc[] = vxm.NpcStore.npcs

}
</script>

<style lang='scss' scoped>
.card-wrapper {
    height: 100vh;
    overflow-y: scroll;
}

@media print {
    .card-wrapper {
        overflow: visible;
        height: auto;
    }
    .npc:nth-child(3n) {
        page-break-after: always;
    }
}
</style>