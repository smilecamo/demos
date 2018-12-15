<template>
  <VCard>
    <VCardText>
      <p class="text-xs-center title">
        appName:{{ appName }}
      </p>
      <p class="text-xs-center title">
        version:{{ appNameVersion }}
      </p>
      <VTextField
        v-model="Value"
        label="Value"
        required
      />
      <p class="text-xs-center title">
        {{ Value }}最后一个值是 ==> {{ ValueLast }}
      </p>
    </VCardText>
    <VBtn
      @click="changeAppName"
    >
      修改appName
    </VBtn>
  </VCard>
</template>

<script>
import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex';

export default {
  data() {
    return {
      Value: '',
    };
  },
  computed: {
    // ************state******************
    // 第一种获取state的方法
    // appName() {
    //   return this.$store.state.appName;
    // },
    // 第二种获取state的方法
    ...mapState([
      'appName',
    ]),
    // 第三种
    // ...mapState({
    //   appName: state => state.appName,
    // }),
    ValueLast() {
      return this.Value.substr(-1, 1);
    },
    // **************getters****************
    // 第一种获取getters state的计算属性
    // appNameVersion() {
    //   return this.$store.getters.appNameVersion;
    // },
    //  第二种获取getters的方法
    ...mapGetters([
      'appNameVersion',
    ]),
  },
  methods: {
    // ***********同步修改state(mutation)
    // 第一种修改state的值
    // changeAppName() {
    //   this.$store.commit('SET_APP_NAME', '直接修改');
    // },
    // 第二种传对象修改
    // changeAppName() {
    //   this.$store.commit('SET_APP', {
    //     appName: '对象修改',
    //   });
    // 第三种传对象修改
    // changeAppName() {
    //   this.$store.commit({
    //     type: 'SET_APP',
    //     appName: '通过type&对象修改',
    //   });
    // },
    // 第四种 mapMutation
    ...mapMutations([
      'SET_APP',
    ]),
    ...mapActions([
      'updateAppName',
    ]),
    // changeAppName() {
    //   this.SET_APP({
    //     appName: '通过mapMutations修改',
    //   });
    // },
    //* ***** actions 异步修改
    changeAppName() {
      this.updateAppName();
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
