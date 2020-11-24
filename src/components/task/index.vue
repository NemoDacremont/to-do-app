<template>
	<div class="task">
		<div class="task__name">
			<input type="checkbox">
			{{ taskName }}
		</div>
		<button v-if="showDelete">delete</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'task',
	props: [

	],
	data () {
		return {
			taskName: 'bonjour',
			showDelete: false
		}
	}
})
</script>

<style lang="scss" scoped>

</style>