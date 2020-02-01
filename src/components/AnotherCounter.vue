<template>
  <div>
    <button class="btn btn-primary" @click="asyncIncrement">
      Async Increment
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
