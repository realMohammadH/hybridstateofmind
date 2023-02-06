<script setup>
</script>

<template>
  <section-wrapper>
    <container>
      <card
        width="730px"
        height="273px"
        padding="50px 34px"
        background="#DCF7E7"
        radius="24px"
        :shadow="true"
        :rounded="true"
      >
        <template #title>
          <section-title margin="0 0 22px">Who is this for?</section-title>
        </template>
        <template #sub-title>
          <section-sub-title>
            Simply put, this community is for anyone who is actively engaged in
            organizing and planning events, or plans to do. So whether you are a
            CMO, CHRO, a field marketer, or an aspiring event expert, this
            community is for you.
          </section-sub-title>
        </template>
      </card>
    </container>
  </section-wrapper>
</template>

<style scoped>
:deep(.card) {
  text-align: center !important;
}
</style>