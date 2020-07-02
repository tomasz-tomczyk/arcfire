<template>
  <div id="app" class="bg-gray-200">
    <div class="bg-gray-800 text-blue-200 h-48">
      <div class="container mx-auto px-2 py-4">
        <div class="flex my-2">
          <svg class="fill-current w-8 h-8 items-center mr-2 -mt-1" viewBox="0 0 855.492 855.492">
            <path
              d="M270.436,853.938c8.801,5.399,19.101-4.301,14-13.301c-13.399-23.8-21-51.199-21-80.5c0-62,34.301-111.6,84.801-144.6
		c44.699-29.2,32.5-66.9,39.899-111.8c4.4-26.601,21-50.8,34.9-66.9c5.6-6.5,16.1-3.399,17.5,5c8.2,50.4,73.6,136.2,111.3,192.2
		c43.4,64.6,40.6,121.5,40.3,125.8c0,0.2,0,0.4,0,0.601c-0.1,29.1-7.7,56.399-21,80c-5.1,9,5.2,18.8,14,13.3
		c69.4-42.9,119.4-113.7,136.101-193.601c13.3-63.6,5.8-129.3-15.7-190.1c-12.7-35.9-30.2-70-51.5-101.6
		c-68.9-102.5-188.8-259.601-203.2-351.5c-2.7-16.9-24.1-22.9-35.2-9.9c-0.2,0.2-20.6,22.7-33.399,47.6
		c-10.9,21.3-19.801,43.6-24.9,66.9c-9.6,43.9-7.9,90.9,3.1,134.4c3.601,14.2,8.2,28.1,13.801,41.6
		c5.399,13,11.199,26.1,12.199,40.3c1.601,26.5-22.399,49.4-48.399,49.4c-23.3,0-42.601-14-47.601-40.4
		c-1.3-6.8-8.899-10.399-14.899-6.899c-88.5,52.1-147.9,148.399-147.9,258.5C127.836,706.438,184.836,801.137,270.436,853.938z"
            />
          </svg>

          <h1 class="font-bold text-blue-300 text-2xl leading-tight mb-4 mr-4">Arcfire</h1>

          <div>
            <a
              href
              class="bg-gray-900 px-4 py-2 text-gray-200 rounded-md mx-2 inline-block text-xs leading-normal"
            >Installed</a>
            <a
              href
              class="px-4 py-2 text-gray-200 rounded-md mx-2 inline-block text-xs leading-normal hover:bg-gray-900"
            >Categories</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto bg-white -mt-10 pb-6 shadow rounded-lg">
      <div class="mx-2 px-6 py-4">
        <h1 class="font-bold text-gray-800 text-2xl leading-tight mb-2">My addons</h1>
      </div>
      <table class="w-full">
        <thead class="text-gray-500 border-b-2 border-gray-200 font-bold text-sm uppercase">
          <tr>
            <td></td>
            <td class="px-4 pb-4">Addon</td>
            <td class="px-4 pb-4">Status</td>
            <td class="px-4 pb-4">Category</td>
            <td class="px-4 pb-4">Author</td>
          </tr>
        </thead>
        <tbody>
          <addon v-for="addon in addons" :addon="addon" :key="addon.id" />
        </tbody>
      </table>
    </div>

    <div class="container mx-auto pt-2">
      <div class="flex pb-5 m-2 pt-5 border-t text-gray-800 text-sm flex-col md:flex-row">
        <div class="mt-2">&copy; Copyright 2020. All Rights Reserved.</div>
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="/#" class="mx-1 flex text-gray hover:text-blue-600 hover:underline">
            <svg
              class="fill-current h-6 w-6 mr-1"
              aria-labelledby="simpleicons-github-icon"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="simpleicons-github-icon">GitHub icon</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Addon from "./components/Addon.vue";

export default {
  name: "App",
  components: {
    Addon
  },
  data: function() {
    return {
      addons: [
        {
          id: "123",
          title: "Raider.IO Mythic Plus and Raid Progress",
          image:
            "https://media.forgecdn.net/avatars/187/538/636839904831361729.png",
          description:
            "This is a companion addon to go along with the Raid and Mythic+ Rankings site, Raider.IO: https://raider.io. With this addon installed, you'll gain access to an easy way to view the Mythic Keystone scores and Raid Progress for players-- all without leaving the game!",
          author: "TheFakeJah",
          created_at: "Oct 3, 2017",
          updated_at: "Jun 24, 2020",
          categories: ["Guild", "Chat"]
        },
        {
          id: "124",
          title: "Details! Damage Meter",
          image:
            "https://media.forgecdn.net/avatars/109/996/636383851490858804.png",
          description:
            "Most powerful, reliable, handsome, damage meter for World of Warcraft.",
          author: "Terciob",
          created_at: "Oct 3, 2017",
          updated_at: "Jun 24, 2020",
          categories: ["Guild", "Chat"]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
