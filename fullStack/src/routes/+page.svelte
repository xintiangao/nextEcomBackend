<script>
    import { isAuthenticated, getUserId } from "../utils/auth";
  
    let showModal = false;
  
    function toggleModal(){
      showModal = true
    }
  
    async function postPhoto(evt) {
        evt.preventDefault()
        
        const photoData = {

            // user: getUserId(),
            // file: 'test',
            // price: '300000',
            // title: '500000',
            // description: 'testtesttesttest',

            user: getUserId(),
            file: evt.target['file'].value,
            price: evt.target['price'].value,
            title: evt.target['title'].value,
            description: evt.target['description'].value,
        };

        const response = await fetch(PUBLIC_BACKEND_BASE_URL + '/photos', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData)
        });

        if (response.status == 200) {
        goto (`/photos/${photoData.id}`)
        } else {
            console.error('Failed to create photo:', error);
        }
}
  </script>
  
  
  {#if $isAuthenticated}
      <div class="flex justify-end" >
          <div class="btn btn-ghost gap-2"> 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
              </svg>
          <button on:click={toggleModal}>
              Upload Image
          </button>
          </div>
      </div>
  {/if}
  
  {#if showModal}
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
    <div class="z-10 fixed rounded-xl flex justify-center w-[80%] bg-base-100 p-10">
      <div class="w-full rounded-xl">
        <form on:submit={postPhoto} class="w-full">
          <div class="flex flex-col lg:flex-row">
            <div class="form-control  w-full mt-2">
              <input class="file-input max-w-xs rounded-xl" type="file" name="file">
            </div>
            <div class="w-full"></div>
          </div>
          <div class="form-control w-full">
            <label class="label" for="price">
              <span class="label-text">Price</span>
            </label>
            <input type="text" name="price" placeholder="99.99" class="input input-bordered w-full rounded-xl">
          </div>
          <div class="form-control w-full">
            <label class="label" for="title">
              <span class="label-text">Title</span>
            </label>
            <input type="text" name="title" placeholder="Beautiful Mountains" class="input input-bordered w-full rounded-xl">
          </div>
          <div class="form-control w-full">
            <label class="label" for="description">
              <span class="label-text">Description</span>
            </label>
            <textarea name="description" class="textarea textarea-bordered rounded-xl" placeholder="Mountains are awesome"></textarea>
          </div>
          <div class="form-control w-full mt-4">
            <button type="submit" class="btn btn-md rounded-xl">Upload</button>
          </div>
        </form>
      </div>
  </div>
  </div>
  {/if}
  
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