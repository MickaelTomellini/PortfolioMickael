<script>
  import emailjs from "@emailjs/browser";

  let name = "";
  let email = "";
  let message = "";

  let sending = false;
  let success = false;
  let error = false;

  async function sendMail(e) {
    e.preventDefault();

    if (!name || !email || !message) return;

    sending = true;
    success = false;
    error = false;

    try {
   
     await emailjs.send(
  "service_rojoba3",          // ✔ ton Service ID
  "template_esjjesp",         // ✔ ton Template ID (à remplacer)
  {
    from_name: name,
    reply_to: email,
    message: message
  },
  "5IEfCfL3Diveqwwd3"         // ✔ ta Public Key
);


      success = true;

      name = "";
      email = "";
      message = "";

    } catch (err) {
      console.error(err);
      error = true;
    }

    sending = false;
  }
</script>

<section class="min-h-screen flex items-center justify-center px-6 pt-20">
  <div class="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl">
    
     <h1 class="text-5xl font-bold mb-12 tracking-tight">
  <span class="cyber-chrome">Contact</span>
</h1>

    <p class="text-gray-300 text-center mb-10">
      Une question, un projet, une demande ? Écris-moi, je te répondrai rapidement.
    </p>

    <form class="flex flex-col gap-6" on:submit={sendMail}>
      
      <div class="flex flex-col">
        <label class="text-gray-300 mb-1">Nom</label>
        <input bind:value={name} type="text" required
          class="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-100 focus:border-blue-500" />
      </div>

      <div class="flex flex-col">
        <label class="text-gray-300 mb-1">Email</label>
        <input bind:value={email} type="email" required
          class="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-100 focus:border-blue-500" />
      </div>

      <div class="flex flex-col">
        <label class="text-gray-300 mb-1">Message</label>
        <textarea bind:value={message} rows="5" required
          class="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-gray-100 resize-none focus:border-blue-500"></textarea>
      </div>

      <button type="submit"
        class="mt-4 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg shadow-blue-600/20 disabled:opacity-50"
        disabled={sending}>
        {sending ? "Envoi..." : "Envoyer"}
      </button>
    </form>

    {#if success}
      <p class="text-green-400 text-center mt-4">
        Message envoyé avec succès ! ✔️
      </p>
    {/if}

    {#if error}
      <p class="text-red-400 text-center mt-4">
        Une erreur est survenue. Réessaie plus tard.
      </p>
    {/if}

  </div>
</section>
