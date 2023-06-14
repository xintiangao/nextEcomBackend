<script>
    let formErrors = {};
</script>
  
<form onsubmit="loginUser(event)" class="w-1/3">
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
    {#if 'email' in formErrors}
    <label class="label" for="email">
      <span class="label-text-alt text-red-500">{formErrors['email'].message}</span>
    </label>
    {/if}
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

  <div class="form-control w-full mt-4">
    <button class="btn btn-md">Log In</button>
  </div>

</form>
