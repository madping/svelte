<h1>Hello World</h1>

<a href="/about">about page</a><br><br>
<a href="/profile">profiel page</a><br><br>


<script>
  let count = 0;
  const callCount = () => {
    count += 1;
  }
</script>

{count}

<div>
  <button on:click={ callCount }>증가</button>
  <button on:click={ () => count -=1 }>감소</button>
  <button on:click={ () => count = 0 }>초기화</button>
</div>




