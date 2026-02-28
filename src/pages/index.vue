<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import {
  useDashboard,
  LoadingStatus,
  type ChainConfig,
} from '@/stores/useDashboard';
import ChainSummary from '@/components/ChainSummary.vue';
import { computed, ref } from 'vue';
import { useBlockchain } from '@/stores';
const dashboard = useDashboard();
const keywords = ref('');
const chains = computed(() => {
  if (keywords.value) {
    const lowercaseKeywords = keywords.value.toLowerCase();
    return Object.values(dashboard.chains).filter(
      (x: ChainConfig) =>
        x.chainName.toLowerCase().indexOf(lowercaseKeywords) > -1 ||
        x.prettyName.toLowerCase().indexOf(lowercaseKeywords) > -1
    );
  } else {
    return Object.values(dashboard.chains);
  }
});
const featured = computed(() => {
  const names = [
    'cosmos',
    'osmosis',
    'akash',
    'celestia',
    'evmos',
    'injective',
    'dydx',
    'irisnet',
  ];
  return chains.value
    .filter((x) => names.includes(x.chainName))
    .sort((a, b) => names.indexOf(a.chainName) - names.indexOf(b.chainName));
});
const chainStore = useBlockchain();
</script>
<template>
  <div class="">
    <div
      class="flex md:!flex-row flex-col items-center justify-center mb-6 mt-14 gap-2"
    >
      <div class="flex items-center gap-4 justify-center">
        <img src="/zeyca-logo.svg" alt="ZeycaNode" class="w-16 h-16 md:w-24 md:h-24" />
        <h1 class="text-black dark:text-white text-3xl md:!text-6xl font-bold">
          {{ $t('pages.title') }}
        </h1>
      </div>
    </div>
    <div
      v-if="dashboard.status !== LoadingStatus.Loaded"
      class="flex justify-center"
    >
      <progress class="progress progress-info w-80 h-1"></progress>
    </div>
    <div
      v-if="featured.length > 0"
      class="text-center text-base mt-6 text-primary"
    >
      <h2 class="mb-6"> We monitor your networks for you :) </h2>
    </div>
    <div
      v-if="featured.length > 0"
      class="grid grid-cols-1 gap-4 mt-6 md:!grid-cols-3 lg:!grid-cols-4 2xl:!grid-cols-5"
    >
      <ChainSummary
        v-for="(chain, index) in featured"
