<script>
const skills = [
  // --- Front-end ---
  "JavaScript / TypeScript",
  "Svelte / SvelteKit",
  "React / React Native",
  "Next.js",
  "Vue.js",
  "TailwindCSS",

  // --- Back-end ---
  "Node.js",
  "Sequelize",
  "MySQL / PostgreSQL",

  // --- Autres ---
  "Git / GitHub",
  "Figma",
  "Adobe",
  "Canva",
  "Docker",
  "Swagger",
  "ApiRest",
  "CRUD",
  "MVC",
];
</script>

<h1 class="text-5xl font-bold mb-12 tracking-tight leading-tight">
  <span class="cyber-chrome inline-block py-[4px]">À propos</span>
</h1>

<div class="space-y-14 max-w-3xl">

<section class="space-y-6 bg-white/[0.03] border border-white/5 p-8 rounded-2xl backdrop-blur-sm shadow-xl shadow-black/20">

 <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
    
    <div class="w-60 h-60 flex-shrink-0">
      <img 
        src="/images/photo.png" 
        alt="Photo de moi"
        class="w-full h-full object-cover"
      />
    </div>

    <p class="text-gray-300 leading-relaxed text-lg text-justify">
      Développeur web originaire de l'Est de la France, j’aime créer des interfaces élégantes, minimalistes, modernes et portées par des animations
      subtiles qui donnent vie à un projet de manière fluide et visuellement soignée. Dès mon adolescence, la programmation m’a attiré : présente dans les jeux vidéo, les films ou même les livres, elle m’a toujours fasciné.
    </p>

  </div>

  <p class="text-gray-300 leading-relaxed text-lg text-justify">
    Cette curiosité est rapidement devenue un véritable moteur, celui qui me pousse encore aujourd’hui
    à apprendre, tester, optimiser et aller toujours un peu plus loin.  
    À part le développement, je suis également un vrai passionné de musique et quand je veux déconnecter, rien de mieux qu’un bon jeu vidéo ou une séance de sport.
  </p>

  <p class="text-gray-400 leading-relaxed text-justify">
    Donner forme à une idée et la rendre agréable à utiliser, c’est ce qui me motive chaque jour.
  </p>

  <div class="flex justify-center gap-4 pt-6">

  <a 
    href="https://github.com/MickaelTomellini" 
    target="_blank"
   class="px-5 py-2.5 rounded-lg text-sm font-medium
       border border-white/20 text-white
       bg-white/[0.04] backdrop-blur
       transition-all duration-300
       hover:bg-white/[0.08] hover:border-white/30"
>
    GitHub
  </a>

  <a 
    href="https://www.linkedin.com/in/mickaeltomellinidev" 
    target="_blank"
     class="px-5 py-2.5 rounded-lg text-sm font-medium
       border border-white/20 text-white
       bg-white/[0.04] backdrop-blur
       transition-all duration-300
       hover:bg-white/[0.08] hover:border-white/30"

>
    LinkedIn
  </a>

</div>


</section>

<!-- COMPÉTENCES -->
<section class="space-y-4">
  <h2 class="text-3xl font-semibold text-white">Compétences</h2>

  <div class="flex flex-wrap gap-3">
    {#each skills as skill}
    <span
      class="px-4 py-2 rounded-xl text-sm text-gray-200 cyber-chrome
        bg-white/[0.06] border border-white/10 
        shadow-md shadow-black/10 backdrop-blur"
    >
      {skill}
    </span>
    {/each}
  </div>

  
</section>

<!-- EXPÉRIENCES -->
<section class="space-y-8">
  <h2 class="text-3xl font-semibold text-white">Expériences</h2>

    <div class="p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur shadow-black/20 shadow-md">
    <h3 class="text-xl font-semibold text-white">Développeur Web Full stack - Ehope</h3>
    <p class="text-gray-500 text-sm mb-3">2025</p>
    <p class="text-gray-300 leading-relaxed text-sm">
      Développement initial de l’application en React, puis migration vers React Native pour une compatibilité multiplateforme (iOS/Android).
Intégration de designs responsives et personnalisés à l’aide de Tailwind CSS (web) et NativeWind (mobile), en optimisant systématiquement la performance et la maintenabilité du code.
Collaboration avec le back-end développé en Nest.js, et mise en place d’environnements de développement et de production avec Docker pour une meilleure scalabilité et cohérence entre les environnements.
    </p>
  </div>

  <div class="p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur shadow-black/20 shadow-md">
    <h3 class="text-xl font-semibold text-white">Développeur Web Full stack - Gamer Challenges</h3>
    <p class="text-gray-500 text-sm mb-3">2025</p>
    <p class="text-gray-300 leading-relaxed text-sm">
      Conception (objectifs, arborescence, design) et développement d’une application de type réseau social dédiée au gaming, 
      bâtie en architecture monolithique avec Node.js/Express et Sequelize (PostgreSQL) pour gérer utilisateurs, jeux et défis (CRUD).
      Mise en place d’une authentification sécurisée via express-session, argon2 pour le chiffrement et Joi pour la validation des données. 
      Configuration du déploiement avec Dotenv, optimisation des performances de la base et ajout de protections XSS.
    </p>
  </div>

  <div class="p-6 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur shadow-black/20 shadow-md">
    <h3 class="text-xl font-semibold text-white">Développeur Web Full stack</h3>
    <p class="text-gray-500 text-sm mb-3">En continu</p>
    <p class="text-gray-300 leading-relaxed text-sm">
      Conception (objectifs, arborescence, design) et réalisation de projets personnels et prototypes en React et React Native, en explorant différentes stacks et approches architecturales. 
      Cette pratique continue me permet de renforcer mes compétences, d’adopter les meilleures méthodologies et d’améliorer la qualité de mon code. 
      J’accorde une attention particulière à la performance,
      à la maintenabilité et aux bonnes pratiques, afin de livrer des applications fiables, optimisées et évolutives.
    </p>
  </div>

</section>
</div>
