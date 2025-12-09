<script>
  import { onMount } from "svelte";

  let blob;

  let x = 200;
  let y = 200;

  // vitesse de déplacement
  let dx = 6;
  let dy = 5;

  onMount(() => {
    // Animation du mouvement
    function animate() {
      const w = window.innerWidth;
      const h = window.innerHeight;

      x += dx;
      y += dy;

      if (x < 0 || x > w - 350) dx = -dx;
      if (y < 0 || y > h - 350) dy = -dy;

      blob.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    }

    animate();
  });
</script>

<div bind:this={blob} class="blob"></div>

<style>
  .blob {
    position: fixed;
    top: 0;
    left: 0;
    width: 350px;
    height: 350px;

    /* Base flashy */
    background: radial-gradient(circle at center,
      rgba(0, 255, 255, 0.9),   /* cyan */
      rgba(255, 0, 255, 0.8),   /* magenta */
      rgba(255, 255, 0, 0.7)    /* jaune */
    );

    filter: blur(90px) brightness(1.5) saturate(2);

    border-radius: 50%;

    z-index: -1;
    pointer-events: none;

    opacity: 0.4;

    /* 🌈 L'animation magique */
    animation: hueShift 6s infinite linear;
  }

  /* 🌈 Rotation de teinte infinie → changement de couleurs */
  @keyframes hueShift {
    0% {
      filter: blur(90px) brightness(1.5) saturate(2) hue-rotate(0deg);
    }
    100% {
      filter: blur(90px) brightness(1.5) saturate(2) hue-rotate(360deg);
    }
  }
</style>
