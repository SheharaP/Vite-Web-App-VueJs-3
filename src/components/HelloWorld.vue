<template>
  <div class="hello">
      <h1 class="text-3xl font-bold underline">{{ msg }}</h1>
   </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
