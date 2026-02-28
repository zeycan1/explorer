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
    <div class="flex flex-col items-center justify-center mb-6 mt-14 gap-6">
      <img src="/zeyca-logo.svg" alt="ZeycaNode" class="w-32 h-32 md:w-48 md:h-48" />
      <h1 class="text-black dark:text-white text-3xl md:!text-6xl font-bold">
        {{ $t('pages.title') }}
      </h1>
    </div>

    <div v-if="dashboard.status !== LoadingStatus.Loaded" class="flex justify-center">
