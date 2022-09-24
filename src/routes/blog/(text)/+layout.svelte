<script lang="ts">
  export let metadata;
  export let title: string;

  console.log({ metadata });
</script>

<h1>{title}</h1>

<slot><!-- optional fallback --></slot>
