<template>
    <div id="settings">
        <h3>開始鬧鈴</h3>
        <b-table :items="items02" :fields="fields02" @row-clicked="selectAlarm1">
            <template v-slot:cell(preview)="data">
              <audio id="player1" controls :src="'./alarms/start/'+data.item.file"></audio>
            </template>
            <template v-slot:cell(select)="data">
              <font-awesome-icon v-if="data.item.file == alarm1" :icon="['fas', 'check']">
              </font-awesome-icon>
            </template>
        </b-table>
        <h3>休息鬧鈴</h3>
        <b-table :items="items" :fields="fields" @row-clicked="selectAlarm">
            <template v-slot:cell(preview)="data">
                <audio id="player2" controls :src="'./alarms/rest/'+data.item.file"></audio>
            </template>
            <template v-slot:cell(select)="data">
              <font-awesome-icon v-if="data.item.file == alarm" :icon="['fas', 'check']">
              </font-awesome-icon>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {

          name: 'rest01',
          file: 'rest01.wav'
        },
        {

          name: 'rest02',
          file: 'rest02.mp3'
        }
      ],
      fields: [
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'preview',
          label: '預覽'
        },
        {
          key: 'select',
          label: '選擇'
        }
      ],
      items02: [
        {

          name: 'start01',
          file: 'start01.wav'
        },
        {

          name: 'start02',
          file: 'start02.mp3'
        }
      ],
      fields02: [
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'preview',
          label: '預覽'
        },
        {
          key: 'select',
          label: '選擇'
        }
      ]
    }
  },
  computed: {
    alarm () {
      return this.$store.getters.alarm
    },
    alarm1 () {
      return this.$store.getters.alarm1
    }
  },
  methods: {
    selectAlarm (item) {
      this.$store.commit('selectAlarm', item.file)
    },
    selectAlarm1 (item) {
      this.$store.commit('selectAlarm1', item.file)
    }
  }
}
</script>
