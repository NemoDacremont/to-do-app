<template>
  <div class="All">
		<AddTask />

		<TaskList />
  </div>
</template>

<script lang="ts">
import AddTask from '@/components/AddTask';
import TaskList from '@/components/taskList';
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'All',
	components: {
		AddTask,
		TaskList
	}
})
</script>

<style lang="scss" scoped>

</style>
