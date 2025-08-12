<template lang="pug">
#dividers
  .large-space
  h4
    span Dividers
    button.chip.circle(
      @click="domain.showSamples(data, '#dividers #divider', 'Dividers', null, 'https://github.com/beercss/beercss/blob/main/docs/DIVIDER.md')"
    )
      i code
  nav.wrap
    label.radio
      input(type="radio", name="divider-dividers", checked, @click="domain.updateDivider('#divider hr.divider', '')")
      span default
    label.radio
      input(type="radio", name="divider-dividers", @click="domain.updateDivider('#divider hr.divider', 'small')")
      span small
    label.radio
      input(type="radio", name="divider-dividers", @click="domain.updateDivider('#divider hr.divider', 'medium')")
      span medium
    label.radio
      input(type="radio", name="divider-dividers", @click="domain.updateDivider('#divider hr.divider', 'large')")
      span large
  .space
  #divider
    div Some text here
    hr.divider
    div Some text here
    hr.divider
    div Some text here

</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
