<script>
    import { goto } from '$app/navigation';
    import { authenticateUser, isAuthenticated } from '../../utils/auth.js'; 
    import { onMount } from 'svelte';
  
    let isLoading = false;
    let showErrorMessage = false;
    let email = '';
    let password = '';
  
    async function signIn(evt) {
      evt.preventDefault();
  
      const userData = {
        email: evt.target['email'].value,
        password: evt.target['password'].value,
      };
  
      isLoading = true;
      email = userData.email; 
  
      const res = await authenticateUser(userData.email, userData.password);
  
      isLoading = false;
  
      if (res.success){
        goto('/');
      } else {
        showErrorMessage = true;
      }
    }
  
    // Reset the error message when the component mounts
    onMount(() => {
      showErrorMessage = false; 
      email = '';
      password = '';
    });
  </script>
  
  
  {#if $isAuthenticated}
    <div class="alert-error p-5 w-1/2 ml-auto mr-auto rounded-xl flex justify-center item-center">
      You are already logged in, go to the front page or post a job.
    </div>
  
  {:else}
    <h1 class="text-center text-xl">Log In</h1>
    {#if showErrorMessage}
      <div class="flex justify-center w-full">
        <div class="alert alert-warning shadow-lg" style="width: 90%;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span class="text-start mr-auto">Please check your email / password</span>
        </div>
      </div>
    {/if}
  
    <div class="flex justify-center items-center mt-8">
      {#if showErrorMessage}
        <div class="flex justify-center items-center">
          Hello {email}
          
        </div>
      {:else}
        <form on:submit={signIn} class="w-1/3">
          <div class="form-control w-full">
            <label class="label" for="email">
              <span class="label-text">email</span>
            </label>
            <input type="text" name="email" placeholder="example@example.com" class="input input-bordered w-full" />
          </div>
  
          <div class="form-control w-full">
            <label class="label" for="password">
              <span class="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="" class="input input-bordered w-full" required />
          </div>
  
          <div class="form-control w-full mt-4">
            <div class="form-control w-full mt-4">
              {#if isLoading}
                <div class="flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700">
                    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="4" />
                    <path fill="currentColor" d="M12 2v4m0 12v4m-4-4H2M18 2h4" />
                  </svg>
                  <span class="text-lg text-gray-700">Loading...</span>
                </div>
              {:else}
                <button class="btn btn-md">Log In</button>
              {/if}
            </div>
          </div>
        </form>
      {/if}
    </div>
  {/if}