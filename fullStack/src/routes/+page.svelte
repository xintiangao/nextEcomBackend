<script>
    import { isAuthenticated } from "../utils/auth";
</script>

{#if $isAuthenticated}
   <div class="container mt-3 lg:mt-10 mx-auto px-2 lg:px-0"> 
      <div class="grid grid-rows-1 lg:grid-cols-3 gap-4">
         <div class="card bg-base-100 shadow-xl">
            <figure class="h-60">
               <img src="https://next-ecomm-josh123.s3.amazonaws.com/mountains-55067-1280.png" alt="Shoes">
            </figure> 
            <div class="card-body">
               <h2 class="card-title">
                  Mountains 
                  <div class="badge badge-secondary">NEW</div>
               </h2>
               <p>Mountains</p> 
               <div class="card-actions items-end justify-end">
                  <h3 class="text-xl font-thin mr-4">USD 99.96</h3>
                  <button data-price="9996" data-id="1" class="btn">Buy Now</button>
               </div>
            </div> 
         </div>
         <div class="card bg-base-100 shadow-xl">
            <figure class="h-60">
               <img src="https://next-ecomm-josh123.s3.amazonaws.com/mountains-190055-1280.jpeg" alt="Shoes">
            </figure> 
            <div class="card-body">
               <h2 class="card-title">
                  Sunset over Mountains 
                  <div class="badge badge-secondary">NEW</div>
               </h2> 
               <p>Top of the world sunset!</p> 
               <div class="card-actions items-end justify-end">
                  <h3 class="text-xl font-thin mr-4">USD 56.78</h3>
                  <button data-price="5678" data-id="2" class="btn">Buy Now</button>
               </div>
            </div> 
         </div>
         <div class="card bg-base-100 shadow-xl">
            <figure class="h-60">
               <img src="https://next-ecomm-josh123.s3.amazonaws.com/road-1072823-1280.jpeg" alt="Shoes">
            </figure> 
            <div class="card-body">
               <h2 class="card-title">
                  Road to Autumn 
                  <div class="badge badge-secondary">NEW</div>
               </h2> 
               <p>Beautiful jungle road</p> 
               <div class="card-actions items-end justify-end">
                  <h3 class="text-xl font-thin mr-4">USD 183.67</h3> 
                  <button data-price="18367" data-id="3" class="btn">Buy Now</button>
               </div>
            </div> 
         </div>
         <div class="card bg-base-100 shadow-xl">
            <figure class="h-60">
               <img src="https://next-ecomm-josh123.s3.amazonaws.com/sunrise-1014712-1280.jpeg" alt="Shoes">
            </figure> 
            <div class="card-body">
               <h2 class="card-title">
                  A Day in Life of a Fisherman 
                  <div class="badge badge-secondary">NEW</div>
               </h2> 
               <p>I want to be a fisherman</p> 
               <div class="card-actions items-end justify-end">
                  <h3 class="text-xl font-thin mr-4">USD 239.99</h3>
                  <button data-price="23999" data-id="4" class="btn">Buy Now</button>
               </div>
            </div> 
         </div>
      </div>
   </div>
{/if}
