<script lang="ts">
    import type { PageData } from "./$types";
    
    export let data: PageData;
    console.log(data);
</script>

<h1> HIHIHI </h1>
<h2>{ data.page }</h2>
<h3>{ data.sqlQuery[0].ID }</h3>

<style lang="scss">
</style>
