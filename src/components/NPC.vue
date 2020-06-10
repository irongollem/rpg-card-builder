<template>
<article class="npc">
    <!-- Battle side -->
    <div>
        <section :id="`front_${npc.name}`" class="npc__card">
            <img src="../assets/grunge.svg" class="splotch"/>
            <header class="npc__card__header">{{npc.name || 'Unnamed'}}</header>
            <section class="npc__card__properties">
                <section class="npc__card__characteristics">
                    <characteristic :value="npc.brn">BRN</characteristic>
                    <characteristic :value="npc.agi">AGI</characteristic>
                    <characteristic :value="npc.int">INT</characteristic>
                    <characteristic :value="npc.cun">CUN</characteristic>
                    <characteristic :value="npc.wil">WIL</characteristic>
                    <characteristic :value="npc.pre">PRE</characteristic>
                </section>

                <section class="npc__card__skills">
                    Skills: 
                    <span v-if="npc.skills && npc.skills.length">{{skills}}</span>
                    <span v-else>None</span>
                </section>

                <section class="npc__personality">
                    <article class="npc__personality__trait npc__personality__trait--left">
                        <header>Strength</header>
                        <section>
                            {{npc.strength}}
                        </section>
                    </article>
                    <article class="npc__personality__trait npc__personality__trait--right">
                        <header>Flaw</header>
                        <section>
                            {{npc.flaw}}
                        </section>
                    </article>
                    <article class="npc__personality__trait npc__personality__trait--left">
                        <header>Desire</header>
                        <section>
                            {{npc.desire}}
                        </section>
                    </article>
                    <article class="npc__personality__trait npc__personality__trait--right">
                        <header>Fear</header>
                        <section>
                            {{npc.fear}}
                        </section>
                    </article>
                </section>
            </section>
            <footer></footer>
        </section> 
        <button class="noprint" type="button" @click="saveCard('front', npc.name)">save</button>
    </div>

    <div class="divider"></div>

    <!-- NPC side -->
    <div>
        <section :id="`back_${npc.name}`" class="npc__card" :style="{'background-image': `url('${npc.img}')`}">
            <img src="../assets/grunge.svg" class="splotch"/>
            <header  class="npc__card__header">
                {{npc.name || 'Unnamed'}}
            </header>
            <section>
                <!-- <img v-if="npc.img" :src="npc.img" class="image--large" />> -->
            </section>
            <footer></footer>
        </section>
        <button class="noprint" type="button" @click="saveCard('back', npc.name)">save</button>
    </div>
</article>
</template>

<script lang="ts">
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import { Vue, Component , Prop } from 'vue-property-decorator'
import Characteristic from '@/components/characteristic.vue'
import { Npc } from '@/store/types'


@Component({
    components: {
        'characteristic': Characteristic
    }
})
export default class NPC extends Vue {
    @Prop({ type: Object as  () => Npc, required: true }) private npc!: Npc

    get skills (): string {
        if (!this.npc.skills) return ''
        return this.npc.skills.join(', ')
    }

    async saveCard(face: string, name: string): Promise<void> {
        const el = document.getElementById(`${face}_${name}`)
        const blob = await domtoimage.toBlob(el, { bgcolor: 'rgba(255,255,255,0)' })
        saveAs(blob, `${face}_face_${name}.png`)
    }
}
</script>

<style lang="scss" scoped>
$cardWidth: 63mm;
$cardHeight: 88mm;
$cardBorderWidth: 2mm;

.npc {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 95mm;
    padding: 0 1em;
    &__card {
        position: relative;
        overflow: hidden;
        border: $cardBorderWidth solid  black;
        border-bottom: 6mm solid  black;
        border-radius: 3mm;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
       background-color: #000000;
        background-image: linear-gradient(315deg, #000000 0%, #b82e1f 74%);
        background-size: cover;
        margin-bottom: .2em;
        width: $cardWidth;
        height: $cardHeight;

        &__header {
            display: flex;
            justify-content: space-between;
            padding: 0 .5em;
            margin-bottom: 2mm;
            filter: invert(1) grayscale(1) contrast(9)
        }
        &__properties  {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__skills {
            text-align: left;
            width: 100%;
            font-family: 'EB Garamond', sans-serif;
            color: #d2d8d6;
            font-size: 10pt;;
            padding: 1mm;
        }

        &__characteristics {
                display: flex;
                width: 100%;
                padding: 0 1mm;
                justify-content: space-around;
                z-index: 2;
        }
    }

    &__personality {
        display: grid;
        column-gap: 3mm;
        row-gap: 3mm;
        grid-template-columns: 28mm 28mm;
        grid-template-rows: 20mm 20mm;

        &__trait  {
            background-color: #f5d3c8;
            background-image: linear-gradient(315deg, #f5d3c8 0%, #c08552 74%);
            box-shadow:  0mm .1mm .5mm #000000;
            overflow: hidden;
            padding: .5mm;
            &--left  {
                border-radius: 0 2mm 2mm 0;
                padding-left: 0;
                & section {
                    border-radius: 0 1mm 1mm 0;
                }
            }
            &--right  {
                border-radius: 2mm 0 0 2mm;
                padding-right: 0;
                & section {
                    border-radius: 1mm 0 0 1mm;
                }
             }
            & header {
                height: 3mm;
                font-size: 8pt;
                line-height: 8pt;
            }
            & section {
                opacity: .8;
                font-family: Journal;
                background-color: #d2d8d6;
                background-image: linear-gradient(315deg, #d2d8d6 0%, #dce8e0 74%);
                -moz-box-shadow:    inset -.1mm -.1mm 1mm #000000;
                -webkit-box-shadow: inset -.1mm -.1mm 1mm #000000;
                box-shadow:         inset 0mm .1mm 1mm #000000;
                font-size: 11pt;
                line-height: 9pt;
                height: 15mm;
                text-align: left;
                padding: .5mm;
            }
        }
    }
}
.image {
    &--large  {
      width: $cardWidth - (2 * $cardBorderWidth);
      height: $cardHeight - (2 * $cardBorderWidth);
      object-fit: cover;
    }
}
.divider {
    height: 100%;
    margin: 0 1em;
}
@media print {
    .divider {
    border-left: 1px dashed black;
    }
}

.splotch {
    position: absolute;
    top: 0mm;
    left: 0mm;
    width: 59mm;
}
</style>