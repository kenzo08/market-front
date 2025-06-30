<script setup lang="ts">
import {useField} from 'vee-validate';

interface Props {
  name: string
  placeholder?: string
  size?: 'xs' |'sm' | 'md' | 'lg' | 'xl'
  inputType?: 'email' | 'password' | 'tel' | 'text'
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' |'link' | 'info' | 'neutral' | 'accent'
}

const props = withDefaults(defineProps<Props>(),{
  inputType: 'text',
  size: 'md',
  type: 'primary'
})

const name = toRef(props, 'name')
const emit = defineEmits(['input', 'focus', 'blur'])

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  syncVModel: true,
})

function onBlur(event: Event) {
  handleBlur(event)
  emit('blur')
}

function onInput(event: Event) {
  handleChange(event)
  emit('input', event)
}
</script>

<template>
  <div class="flex w-full flex-col gap-1">
    <input
        v-model="inputValue"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        class="input w-full focus:outline-none focus:bg-base-200"
        :class="[
            `input-${size}`,
            errorMessage ?  'input-error' :`input-${type}`
        ]"
        @focus="$emit('focus')"
        @blur="onBlur"
        @input="onInput"
    />
    <p v-if="errorMessage" class="text-m  text-error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style scoped>

</style>