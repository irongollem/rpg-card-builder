<template>
    <label>
      <span><slot>{{label}}</slot></span>
      <input 
        v-if="!area"
        :value="value"
        @change="onInputChange"
        class="input"/>
      <textarea
        v-else
        :value="value"
        @change="onInputChange"
        rows="6"
        cols="50"
        maxlength="300"
        class="input"/>
    </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
    @Prop({ type: Boolean, default: false }) readonly area!: boolean;
    @Prop(String) private value: string | undefined;
    @Prop(String) private label: string | undefined;

    @Emit('input')
    onInputChange (event: InputEvent): string {
        if (event.target === null) return '';
        return (event.target as HTMLInputElement).value;
    }
}
</script>

<style lang="scss" scoped>
.input {
    -webkit-appearance: none;
    border: none;
    border-radius: .5em;
    background: beige;
    padding: .75em;
    margin: .75em;
    resize: none;
    flex: 4;
    &:focus {
        outline: none;
        background: darken(beige, 10%);
    }
}
label {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    & span {
        flex: 1;
    }
}
</style>