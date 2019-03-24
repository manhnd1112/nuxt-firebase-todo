<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <Todo />
  </v-layout>
</template>

<script>
import Todo from '~/components/Todo'
export default {
  components: {
    Todo
  }
}
</script>
