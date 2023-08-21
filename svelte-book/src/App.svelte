<script>
  let cart = [];

  function addToCart(productId) {
    cart = [...cart, productId];
  }
</script>


<header class="header">
  <a class="header-title" href="/">svelte</a>
  <nav>
    <ul class="header-links">
      <li>안녕하세요</li>
      <li>
        <a href="/cart">카트 (0)</a>
      </li>
    </ul>
  </nav>
</header>

<article class="product">
  <div class="product-main">
    <div class="image-container">
     <img src="https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-1.png" alt="스벨트 가이드 표지" />
  </div>

  <div>
    <h2>스벨트 가이드</h2>
    <dl>
      <dt>가격</dt>
      <dd>3500원</dd>
    </dl>
    <div>
      {#if !cart.includes('svelte-book')}
      <button on:click={() => addToCart('svelte-book')}>카트에 담기</button>
      {:else}
      <button disabled>카트에 추가 완료</button>
      {/if}
      </div>
    </div>
   </div>
  
  

  <footer>
    <h3>관련상품</h3>
    <ul>
      <li>
        <a href ="products/react-book">React book</a>
        - 3500원
      </li>
      <li>
        <a href ="products/vue-book">Vue book</a>
        - 3500원
      </li>
      <li>
        <a href ="products/angular-book">Angular book</a>
        - 3500원
      </li>
    </ul>
  </footer>
</article>


<style>
  :global(body) {
    margin: 0;
    background-color: #eee;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: #fff;
    padding: 0 15px;
    width: 100%;
    max-width: 800px;
    height: 50px;
  }

  .header-title {
    font-weight: bold;
  }

  .header-links {
    display: flex;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .product {
    margin: 0 auto;
    background-color: #fff;
    padding: 15px;
    width: 100%;
    max-width: 800px;
  }

  .product-main {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .image-container {
    width: 100%;
    max-width: 400px;
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
  }
</style>