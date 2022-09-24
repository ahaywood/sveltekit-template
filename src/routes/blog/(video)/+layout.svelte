<script lang="ts">
  export let frontmatter;
  export let author: string;

  $: console.log({ frontmatter });
</script>

Author: {author}

<slot><!-- optional fallback --></slot>
