<template>
	<div class="task">
		<label for="task__completed" class="task__name" @click="test">
			<input type="checkbox" name="task__completed" id="task__completed" v-model="isChecked">
			<span class="name" :class="{ checked: isChecked }">
				{{ taskName }}
			</span>
		</label>
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
			showDelete: false,
			isChecked: false
		}
	},
	methods: {
		test () {
			console.log(this.$data.isChecked);
		}
	}
})
</script>

<style lang="scss" scoped>

.task {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.task__name {
	position: relative;

	input[type=checkbox] {
		width: 24px;
		height: 24px;
		visibility: hidden;
	}

	span {
		display: inline-flex;
		align-items: center;
		font-size: 18px;
		font-weight: 500;
		gap: 7px;
		position: absolute;
		left: 0;

		&.checked {
			&::before {
				background-color: var(--blue);
				border-color: var(--blue);
			}
		}

		&::before {
			content: "";
			display: inline-block;
			width: 24px;
			height: 24px;
			border: 1px solid var(--gray-3);
			border-radius: 4px;
			transition: background-color .25s, border-color .25s;
		}

		&::after {
			content: "";
			left: 8px;
			bottom: 5px;
			width: 6px;
			height: 12px;
			border: solid var(--white);
			border-width: 0 4px 4px 0;
			border-radius: 50%;
			transform: rotate(45deg);
		}
	}
}

</style>