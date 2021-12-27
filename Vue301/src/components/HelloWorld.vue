<template>
  <h1>{{ msg }}</h1>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>{{ counter }}</p>
  <p>{{ doubleCounter }}</p>
  <p ref="desc"></p>
  <teleportVue></teleportVue>

  <!-- emits 选项 -->
  <Emits @click="onClick"></Emits>

  <!-- vmodal -->
  <VmodalTestVue v-model:modelValue="modelValue"></VmodalTestVue>
  <!-- 编程方式发送和监听事件 -->
  <button @click="sendMes">emit event</button>
</template>

<script>
import teleportVue from "./teleport.vue";
import Emits from "./emits.vue";
import VmodalTestVue from "./VmodalTest.vue";
//事件派发和监听
import mitt from "mitt";
export const emitter = mitt();
import {
  reactive,
  computed,
  onUnmounted,
  onMounted,
  ref,
  toRefs,
  watch,
} from "vue";
export default {
  components: {
    teleportVue,
    Emits,
    VmodalTestVue,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      modelValue: 1,
    };
  },
  methods: {
    onClick() {
      console.log("click me!!");
      console.log("object");
    },
    sendMes() {
      emitter.emit("someEvent", "foooo");
    },
  },
  setup() {
    const { counter, doubleCounter } = useCounter();
    const msg2 = ref("some message");
    //使用元素的引用
    const desc = ref(null);
    //侦听器
    watch(counter, (val, oldval) => {
      const p = desc.value;
      p.textContent = `counter change from ${oldval} to ${val}`;
    });
    return { counter, doubleCounter, msg2, desc };
  },
};

function useCounter() {
  const data = reactive({
    counter: 1,
    doubleCounter: computed(() => data.counter * 2),
  });
  let timer;
  onMounted(() => {
    timer = setInterval(() => {
      data.counter++;
    }, 1000);
  });
  onUnmounted(() => {
    clearInterval(timer);
  });
  return toRefs(data);
}
</script>
