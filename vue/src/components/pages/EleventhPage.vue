<template>
  <PageLayout>
    <div>
      <EleventhButton type="successful">SUCCESSFUL</EleventhButton>
      <EleventhButton type="info">INFO</EleventhButton>
      <EleventhButton type="warning">WARNING</EleventhButton>
      <EleventhButton type="danger">DANGER</EleventhButton>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout';
import EleventhButton from "@/components/ui/buttons/EleventhButton.vue";

export default {
  components: {
    PageLayout,
    EleventhButton
  },
}
</script>

<style>
.title {
  margin-top: 20px;
  margin-bottom: 20px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 20px;
}
</style>