
<template>
	<div class="completed">

		<TaskList />
	</div>
</template>

<script lang="ts">
import TaskList from '@/components/taskList';
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Completed',
	components: {
		TaskList
	}
})
</script>

<style lang="scss" scoped>

</style>
