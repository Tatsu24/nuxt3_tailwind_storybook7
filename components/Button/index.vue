<script setup lang="ts">
type ButtonColor = "green" | "red";
interface Props {
  color?: ButtonColor;
}
const props = withDefaults(defineProps<Props>(), {
  color: undefined,
});
const { color } = toRefs(props);
</script>

<template>
  <button
    class="px-4 py-2 rounded-lg transition-colors"
    :class="{
      'text-white bg-green-500 hover:bg-green-700': color === 'green',
      'text-white bg-red-500 hover:bg-red-700': color === 'red',
      'text-black bg-gray-200 hover:bg-gray-400': !color,
    }"
  >
    <slot></slot>
  </button>
</template>
