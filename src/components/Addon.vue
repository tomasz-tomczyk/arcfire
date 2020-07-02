<template>
  <tr class="addon border-b-2 border-gray-200">
    <td class="p-4 w-24">
      <img class="w-24" :src="addon.image" alt />
    </td>
    <td class="p-4">
      <h2 class="text-gray-700 font-bold">{{ addon.title }}</h2>
    </td>
    <td class="p-4 text-green-600">
      <div class="flex items-center">
        <svg class="fill-current w-4 h-4 mr-1" viewBox="0 0 20 20">
          <path
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"
          />
        </svg>
        Up to date
      </div>
    </td>
    <td class="p-4">Guild</td>
    <td class="p-4">{{ addon.author }}</td>
  </tr>
</template>

<script>
export default {
  name: "Addon",
  props: {
    addon: Object
  }
};
</script>

<style scoped lang="scss">
</style>
