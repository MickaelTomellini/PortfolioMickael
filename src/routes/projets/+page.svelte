<script>
  import { projects } from "../../lib/data/project";
</script>

<section class="pt-20 px-6 min-h-screen">
<h1 class="text-5xl font-bold mb-12 tracking-tight leading-tight">
  <span class="cyber-chrome inline-block py-[4px]">Projets</span>
</h1>
  <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
    {#each projects as project}
     <a
  href={"/projets/" + project.slug}
  class="group p-6 rounded-xl bg-white/[0.03] border border-white/10 
         backdrop-blur-md shadow-lg shadow-black/30 
         hover:bg-white/[0.06] hover:border-white/20 
         transition duration-300"
>
        <h2 class="text-2xl font-semibold mb-2 
                   group-hover:text-blue-400 transition">
          {project.title}
        </h2>

        <p class="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        <div class="flex gap-2 flex-wrap">
          {#each project.technologies as tech}
            <span class="text-xs px-2 py-1 bg-white/10 border border-white/10 rounded-md">
              {tech}
            </span>
          {/each}
        </div>
      </a>
    {/each}
  </div>
</section>
