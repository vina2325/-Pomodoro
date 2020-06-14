<template>
  <div id="home" class="text-center">
    <template>
      <div id="radial-progress">
        <radial-progress-bar
          :diameter="300"
          :completed-steps="completedSteps"
          :start-color="startColor"
          :stop-color="stopColor"
          :total-steps="totalSteps"
          :innerStrokeColor="innerStrokeColor"
          :stroke-width="20"
          :inner-stroke-width="20"
          :isClockwise="true"
        >
          <!-- :strokeLinecap="butt" -->
          <img
            :src="'./img/giphy01.gif'"
            width="200px"
            id="tomotoimg"
            v-if="status==1"
            @click="pause"
          />
        </radial-progress-bar>
      </div>
    </template>
    <h1>{{currentText}}</h1>
    <h2>{{timetext}}</h2>
    <!-- 在不等於1的狀態下 start 鍵 都要出現 -->
    <b-btn variant="danger" v-if="status !==1" @click="start" class="btn">
      <font-awesome-icon :icon="['fas','play']"></font-awesome-icon>
    </b-btn>
    <b-btn variant="danger" v-if="status==1" @click="pause" class="btn">
      <font-awesome-icon :icon="['fas','pause']"></font-awesome-icon>
    </b-btn>
    <!-- 如果目前有東西在倒數  或是 todos裡面有東西-->
    <b-btn
      variant="danger"
      v-if="current.length > 0||todos.length > 0"
      @click="finish(true)"
      class="btn"
    >
      <font-awesome-icon :icon="['fas','step-forward']"></font-awesome-icon>
    </b-btn>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      // 使用狀態
      // 0 ==停止
      // 2 ==暫停
      // 1 ==播放
      status: 0,
      // 因為 setInterval
      timer: 0,
      startColor: 'var(--color04)',
      stopColor: 'var(--color04)',
      innerStrokeColor: 'var(--color02)'
    }
  },
  computed: {
    currentText () {
      return this.current.length > 0
        ? this.current
        : this.todos.length > 0
          ? '點擊開始'
          : '沒有事項'
    },
    timetext () {
      const m = Math.floor(this.timeleft / 60)
      const s = Math.floor(this.timeleft % 60)
      return `${m} : ${s}`
    },
    alarm () {
      return this.$store.getters.alarm
    },
    timeleft () {
      return this.$store.getters.timeleft
    },
    current () {
      return this.$store.getters.current
    },
    todos () {
      return this.$store.getters.todos
    },
    isBreak () {
      return this.$store.getters.isBreak
    },
    // 讓 totalSteps 等於全部的時間
    totalSteps () {
      return this.$store.getters.totaltime
    },
    // 讓全部的時間 減 剩餘時間 就是已完成
    completedSteps () {
      return this.totalSteps - this.timeleft
    }
  },
  methods: {
    start () {
      if (this.status === 2) {
        // 暫停後繼續
        // 2 ==暫停
        // 1 ==播放
        this.status = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= 0) {
            this.finish(false)
          }
        }, 1000)
      } else {
        // 開始新倒數
        // if (this.todos.length > 0) {
        //   this.$store.commit('start')
        //   this.status = 1
        //   this.timer = setInterval(() => {
        //     this.$store.commit('countdown')
        //     if (this.timeleft <= 0) {
        //       this.finish(false)
        //     }
        //   }, 1000)
        // }
        if (this.todos.length > 0) {
          this.status = 1
          this.timer = setInterval(() => {
            this.$store.commit('countdown')
            if (this.timeleft <= 0) {
              this.finish(false)
            }
          }, 1000)
          this.$store.commit('start')
          $('radial-progress-bar').addClass('transtion-zero')
        }
      }
    },

    finish (skip) {
      // 跳過
      clearInterval(this.timer)
      // 增加class
      setTimeout(() => {
        this.status = 0
        this.$store.commit('finish')
        // 正常結束
        if (!skip) {
          const audio = new Audio()
          audio.src = './alarms/' + this.alarm
          audio.play()
        }
        if (this.todos.length > 0) {
          this.start()
        } else {
          alert('結束')
        }
      }, 1000)
    },
    pause () {
      clearInterval(this.timer)
      this.status = 2
    }
  }
}
</script>
