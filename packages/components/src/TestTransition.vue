<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
  MotionConfig,
} from 'motion-v'
import { ref } from 'vue'

import Icon from '@/components/icon/Icon.vue'
import Spinner from '@/components/spinner/Spinner.vue'

type State = 'analyzing' | 'safe' | 'warning'

const STATES: State[] = [
  'safe',
  'analyzing',
  // 'warning',
  // 'analyzing',
]

const BG: Record<State, string> = {
  analyzing: '#DDF1FF',
  safe: '#DAF4E2',
  warning: '#FFE2DE',
}
const FG: Record<State, string> = {
  analyzing: '#00A8F8',
  safe: '#43C479',
  warning: '#FF003E',
}

const stateIndex = ref<number>(0)

function nextState(): void {
  stateIndex.value = (stateIndex.value + 1) % STATES.length
}
</script>

<template>
  <div class="flex">
    <MotionConfig
      :transition="{
        scale: {
          duration: 6,
          type: 'spring',
          bounce: 0.3,
        },
        opacity: {
          duration: 0.3,
        },
        layout: {
          duration: 7,
          bounce: 0.3,
          type: 'spring',
        },
      }"
    >
      <Motion
        :layout="true"
        :animate="{
          backgroundColor: BG[STATES[stateIndex]],
          color: FG[STATES[stateIndex]],
        }"
        class="relative will-change-transform flex items-center p-md rounded-md overflow-clip"
        @click="nextState"
      >
        <Motion
          layout="position"
          class="will-change-transform size-4 mr-lg"
        >
          <AnimatePresence
            :initial="false"
            mode="popLayout"
          >
            <Motion
              v-if="stateIndex === 0"
              :initial="{ scale: 0.5, opacity: 0 }"
              :animate="{ scale: 1, opacity: 1 }"
              :exit="{ scale: 0.5, opacity: 0 }"
            >
              <Spinner />
            </Motion>

            <Motion
              v-else-if="stateIndex === 1"
              :initial="{ scale: 0.5, opacity: 0 }"
              :animate="{ scale: 1, opacity: 1 }"
              :exit="{ scale: 0.5, opacity: 0 }"
            >
              <Icon icon="alertCircle" />
            </Motion>

            <Motion
              v-else-if="stateIndex === 2"
              :initial="{ scale: 0.5, opacity: 0 }"
              :animate="{ scale: 1, opacity: 1 }"
              :exit="{ scale: 0.5, opacity: 0 }"
            >
              <Icon icon="infoCircle" />
            </Motion>

            <Motion
              v-else-if="stateIndex === 3"
              :initial="{ scale: 0.5, opacity: 0 }"
              :animate="{ scale: 1, opacity: 1 }"
              :exit="{ scale: 0.5, opacity: 0 }"
            >
              <Icon icon="check" />
            </Motion>
          </AnimatePresence>
        </Motion>

        <Motion
          :initial="false"
          :animate="{
            opacity: stateIndex === 0 ? 1 : 0,
            transition: {
              duration: stateIndex === 0 ? 0.175 : 0.125,
              delay: stateIndex === 0 ? 0.1 : 0,
            },
          }"
          :style="{
            width: stateIndex === 0 ? 'auto' : 0,
          }"
          layout="position"
          class="will-change-transform inline-flex flex-start"
          as="span"
        >
          <Motion
            as="span"
            layout="position"
            class="inline-block will-change-transform"
          >
            Analyzing
          </Motion>
        </Motion>
        <!--
        <Motion
          layout="position"
          class="will-change-transform inline-block"
          as="span"
        >
          Altijd
        </Motion> -->

        <Motion
          :initial="false"
          :animate="{
            opacity: stateIndex === 1 ? 1 : 0,
            transition: {
              duration: stateIndex === 1 ? 0.175 : 0.125,
              delay: stateIndex === 1 ? 0.1 : 0,
            },
          }"
          :style="{
            width: stateIndex === 1 ? 'auto' : 0,
          }"
          layout="position"
          class="will-change-transform inline-block"
          as="span"
        >
          <Motion
            as="span"
            layout="position"
            class="inline-block will-change-transform"
          >
            LaermansLaermans
          </Motion>
        </Motion>
      </Motion>
    </MotionConfig>
  </div>
</template>
