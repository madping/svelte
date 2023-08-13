<script>
  import { page } from '$app/stores';

   //console.log($page.params.slug);

  const slugArr = $page.params.slug.split('/');
  console.log(slugArr);

  const { lang = 'ko'} = $page.params;

</script>

{#if lang === 'ko'}
  <h1>안녕</h1>
{:else if lang === 'en'}
<h1>Hello</h1>
{:else if lang === 'ja'}
   <h1>こんにちは</h1>
{/if}
<hr/>

<h1>docs page</h1>

{#if slugArr.length === 1}
<h1>Docs page --- 주제 1 {slugArr[0]}</h1><br><br>
{:else if slugArr.length === 2}
<h1>Docs page --- 주제 2 {slugArr[1]}</h1><br><br>
{/if}