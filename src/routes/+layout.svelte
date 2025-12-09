<script>
  import "../app.css";
  import BouncingBlob from "../components/BouncingBlob.svelte";
  import { onMount } from "svelte";

  let showBlob = false;

  onMount(() => {
    showBlob = true;
  });
</script>

<!-- BLOB EN ARRIÈRE-PLAN -->
{#if showBlob}
  <div class="blob-background">
    <BouncingBlob />
  </div>
{/if}

<!-- PAGE -->
<div class="min-h-screen flex flex-col relative z-10">
  
  <!-- HEADER -->
  <header class="w-full border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
    <nav class="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
      <a href="/" class="text-xl font-semibold">Mickael. <span class="text-sm font-normal opacity-70 ml-1">
    Développeur web
  </span></a>

      <div class="flex gap-6 text-sm font-bold">
        <a href="/projets" class="hover:text-gray-300">Projets</a>
        <a href="/about" class="hover:text-gray-300">À propos</a>
        <a href="/contact" class="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  </header>

  <!-- CONTENT -->
  <main class="flex-1 max-w-5xl mx-auto px-4 py-12">
    <slot />
  </main>

  <!-- FOOTER -->
  <footer class="py-8 text-center text-sm text-gray-500">
    © 2025 Mickael – Portfolio développé avec SvelteKit & Tailwind.
  </footer>

</div>

<style>
  .blob-background {
    position: fixed;
    inset: 0;
    z-index: 0; /* derrière tout */
    pointer-events: none; /* ne bloque pas les clics */
    overflow: hidden;
  }
</style>
