<script>
  import { onMount } from "svelte";

  let progress = 0;

  onMount(() => {
    const interval = setInterval(() => {
      if (progress < 80) {
        progress += Math.random() * 8;
        if (progress > 80) progress = 80;
      }
    }, 300);

    return () => clearInterval(interval);
  });
</script>

<div class="min-h-screen flex items-center justify-center ">
  <div class="w-full max-w-md px-6 text-center space-y-6">
    
    <!-- Title -->
    <h1 class="text-4xl md:text-5xl font-extrabold">
      <span class="cyber-chrome">En construction</span>
    </h1>

    <!-- Subtitle -->
    <p class="text-sm md:text-xl text-gray-400">
      Finalisation des derniers détails, ça arrive sous peu.
    </p>

    <!-- Progress bar -->
    <div class="w-full h-4 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
      <div
        class="
          h-full
          transition-all duration-300 ease-out
          bg-gradient-to-r
          from-cyan-400
          via-fuchsia-500
          to-emerald-400
        "
        style="width: {progress}%"
      />
    </div>

    <!-- Percentage -->
    <p class="text-base md:text-lg text-gray-500">
      Déploiement… {Math.floor(progress)}%
    </p>

  </div>
</div>
