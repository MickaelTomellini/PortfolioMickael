<script>
  export let data;
  const project = data.project;
</script>

<section class="pt-24 px-6 min-h-screen flex justify-center">
  <div class="w-full max-w-3xl bg-white/[0.03] border border-white/10 
              backdrop-blur-lg rounded-2xl p-10 shadow-xl shadow-black/30">

    <h1 class="text-4xl font-bold mb-6 leading-tight">
      <span class="cyber-chrome">{project.title}</span>
    </h1>

    <img 
  src={project.image} 
  alt={project.title} 
  class="w-full rounded-xl mb-8 shadow-lg"
/>


    <p class="text-gray-300 leading-relaxed mb-10">
      {project.description}
    </p>

    <h3 class="font-semibold text-white mb-3 text-lg">Technologies</h3>
    <div class="flex gap-2 flex-wrap mb-10">
      {#each project.technologies as tech}
        <span class="px-3 py-1 bg-white/10 border border-white/10 rounded-lg text-sm">
          {tech}
        </span>
      {/each}
    </div>

   <a
  href="/projets"> ◁ Retour
</a>


  </div>
</section>
