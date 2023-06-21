<script>
    import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	  import { isAuthenticated, authenticateUser} from '../../utils/auth'; 
    import { goto } from '$app/navigation'; 

    let formErrors = {};
    let isLoading = false
    function postSignUp() {
        goto ('/users/new')
    }

    async function createUser(evt) {
      evt.preventDefault()
      if (evt.target['password'].value != evt.target['password-confirmation'].value) {
        formErrors['password'] = { message: 'Password confirmation does not match' };
        return;
      }
  
      const userData = {
        name: evt.target['name'].value,
        email: evt.target['email'].value,
        password: evt.target['password'].value,
        // passwordConfirm: evt.target['password-confirmation'].value
      };

      isLoading = true
  
      const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/users', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (resp.status == 200) {
        const res = await authenticateUser(userData.email, userData.password)
        if (res.success){
            isAuthenticated.set(true)
            postSignUp();
        } else { 
          isAuthenticated.set(false)
          alert ('sign up successful but authentication failed');
        }
    } else {
        const res = await resp.json();
        formErrors = res.data;
      }
    }
  </script>

{#if $isAuthenticated}
  <alert class="alert alert-warning flex justify-center" >
    You are already logged in, click<a class="link-hover" href="/">here</a>to return to front page
  </alert>

{:else}
  <h1 class="text-center text-xl">Create an Account</h1>
  <div class="text-center">
      <a class="link-hover italic text-xs" href="/signin"
          >Already have an account? Click here to login instead.</a>
  </div>
  <div class="flex justify-center items-center mt-8">
      <form on:submit={createUser} class="w-1/3">
          <div class="form-control w-full">
              <label class="label" for="name">
                  <span class="label-text">Name</span>
              </label>
              <input
                  type="text"
                  name="name"
                  placeholder="johndoe"
                  class="input input-bordered w-full"
              />
              {#if 'name' in formErrors}
                  <label class="label" for="name">
                      <span class="label-text-alt text-red-500">{formErrors['name'].message}</span>
                  </label>
              {/if}
          </div>
  
          <div class="form-control w-full">
              <label class="label" for="email">
                  <span class="label-text">Email</span>
              </label>
              <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  class="input input-bordered w-full"
                  required
              />
              <!-- {#if 'email' in formErrors}
                  <label class="label" for="email">
                      <span class="label-text-alt text-red-500">{formErrors['email'].message}</span>
                  </label>
              {/if} -->
          </div>
  
          <div class="form-control w-full">
              <label class="label" for="password">
                  <span class="label-text">Password</span>
              </label>
              <input
                  type="password"
                  name="password"
                  placeholder=""
                  class="input input-bordered w-full"
                  required
              />
              {#if 'password' in formErrors}
                  <label class="label" for="password">
                      <span class="label-text-alt text-red-500">{formErrors['password'].message}</span>
                  </label>
              {/if}
          </div>
  
          <div class="form-control w-full">
              <label class="label" for="password">
                  <span class="label-text">Confirm Password</span>
              </label>
              <input
                  type="password"
                  name="password-confirmation"
                  placeholder=""
                  class="input input-bordered w-full"
                  required
              />
              {#if 'password' in formErrors}
                  <label class="label" for="password">
                      <span class="label-text-alt text-red-500">{formErrors['password'].message}</span>
                  </label>
              {/if}
          </div>

        <div class="form-control w-full mt-8">
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
              <button class="btn btn-md">Create an Account</button>
              {/if}
          </div>
      </form>
  </div>
{/if}

  