<template>
  <div>
    <button
      class="btn btn-primary"
      @click="asyncIncrement({ payload: 100, time: 500 })"
    >
      Async Increment by 100
    </button>
    <button class="btn btn-primary" @click="asyncDecrement">
      Async Decrement
    </button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapMutations(['increment', 'decrement']),
      ...mapActions(['asyncIncrement', 'asyncDecrement'])
    }
  };
</script>
