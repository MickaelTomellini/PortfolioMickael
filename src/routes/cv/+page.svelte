<script>
  const cvUrl = '/cv/Mickael.T.CV.pdf';
</script>

<section class="min-h-screen text-white flex flex-col items-center px-4 py-12">

  <!-- Titre -->
  <div class="mb-10 text-center">
    <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight">
       MON <span class="cyber-chrome">CV</span>
    </h1>
    <p class="mt-3 text-gray-400 max-w-xl">
      Consultez mon parcours et téléchargez mon CV au format PDF.
    </p>
  </div>

  <!-- Card CV -->
  <div class="relative w-full max-w-6xl rounded-3xl bg-gray-900/70 backdrop-blur-xl border border-gray-700 shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">

    <!-- Top bar -->
    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-700">
      <span class="font-semibold text-sm text-gray-300">
        CV — PDF
      </span>

      <div class="flex gap-3">
        <a
          href={cvUrl}
          download
          class="px-4 py-2 cyber-chrome border border-gray-600 rounded-lg text-sm font-bold transition"
        >
          Télécharger
        </a>

        <a
          href="/"
          class="px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-gray-800 transition"
        >
          Retour
        </a>
      </div>
    </div>

    <!-- PDF Viewer -->
    <iframe
  src={`${cvUrl}#toolbar=0&navpanes=0&scrollbar=0`}
  class="w-full h-[75vh] bg-white"
></iframe>

  </div>

</section>
