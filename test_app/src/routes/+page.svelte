<script>
  export let data;
</script>


<h1>home</h1>


<a href = "/create">
  <button>글쓰기</button>
</a>



<ul>
  {#each data.posts as post}
   <li>
      <a href={post.id}> {post.title}</a>
   </li>
   {/each}
</ul>