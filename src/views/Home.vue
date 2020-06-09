<template>
  <div class="home">
    <npc-form class="noprint"></npc-form>
    <npc-cards></npc-cards>
  </div>
</template>

<script>
// @ is an alias to /src
import NpcForm from '@/components/NPCForm'
import NpcCards from '@/components/NPCCards'

export default {
  name: 'Home',
  components: {
    NpcForm,
    NpcCards,
  }
}
</script>

Style lang=<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media print { 
  .noprint { 
    display: none;
  } 
}
</style>
