<template>
  <div class="chevron">
      <div class="chevron__number">{{value}}</div>
      <div class="chevron__label"><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class NPCForm extends Vue {
    @Prop(String) value!: string
}
</script>

<style lang="scss">
.chevron {
    font-family: 'Bolton';
    font-size: 10pt;
    background-color: #f5d3c8;
    background-image: linear-gradient(315deg, #f5d3c8 0%, #c08552 74%);
    padding: 5mm .5mm .5mm;
    border-radius: 50% 50% 1mm 1mm;
    box-shadow:  0mm .1mm .5mm #000000;
    &__number {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 8mm;
        height: 8mm;
        border-radius: 50%;
        background-color: #d2d8d6;
        background-image: linear-gradient(315deg, #d2d8d6 0%, #dce8e0 74%);
        -moz-box-shadow:    inset -.1mm -.1mm 1mm #000000;
        -webkit-box-shadow: inset -.1mm -.1mm 1mm #000000;
        box-shadow:         inset 0mm .1mm 1mm #000000;
    }
    &__label {
        padding: 1mm 0;
        font-size: 8pt;
    }
}
</style>