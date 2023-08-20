<script>
  import FlexMain from '$lib/components/flexMain.svelte';
import Icon from '@iconify/svelte';
</script>
<FlexMain>
  <main class=" w-[30rem] p-4">
    <button class=" w-full h-10 rounded-md bg-transparent border flex justify-center items-center mt-24">
      <Icon icon="devicon:google" class="w-5 h-5" />
      <span class="ml-2 text-sm font-semibold">Sign in with Google</span>
    </button>
    <div class=" flex items-center justify-center mt-6 gap-4">
      <div class=" w-1/2 h-px bg-gray-300/10"></div>
      <p class=" text-white/80">or</p>
      <div class=" w-1/2 h-px bg-gray-300/10"></div>
    </div>
    <input type="text" placeholder="Email" class=" w-full h-10 rounded-md bg-transparent border mt-6 text-center" />
    <input type="password" placeholder="Password" class=" w-full h-10 rounded-md bg-transparent border mt-4 text-center" />
    <div class=" flex items-center justify-between mt-4">
      <div class=" flex items-center">
        <input id="remember" type="checkbox" class=" w-4 h-4 rounded-md bg-transparent border" />
        <label for="remember" class=" text-white/80 ml-2">Remember me</label>
      </div>
      <a href="/forgot-password" class=" text-primary">Forgot password?</a>
    </div>
    <button class=" w-full h-10 rounded-md bg-primary border flex justify-center items-center mt-8">
      <span class="ml-2 text-sm font-semibold">Sign in</span>
    </button>
    <p class=" text-white/80 mt-4">Don't have an account? <a href="/signup" class=" text-primary">Sign up</a></p>
  </main>
</FlexMain>