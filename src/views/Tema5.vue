<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Dibujo técnico
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        img.img-02.col-lg.d-none.d-lg-flex(src="@/assets/curso/temas/img01.svg")
        p El dibujo técnico se puede definir como la representación gráfica de un objeto, una abstracción de la realidad o una idea práctica.<br><br>Este concepto se orienta de acuerdo con estándares fijos y predeterminados para que las dimensiones, la forma, las características y el diseño de lo que se reproducirá puedan describirse con precisión y sin ambigüedades. Se utiliza en ingeniería, arquitectura, topografía, mecánica y otras disciplinas.

    p Las características del dibujo técnico son:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema5/img02.svg")
      .col-xl-3.col-lg-4.col-8.mb-lg-0.mb-4(data-aos="flip-up")
        img(src="@/assets/curso/tema5/img03.svg")
      .col-xl-3.col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema5/img04.svg")
    
    p #[b Estimado aprendiz]: hemos llegado al final de este componente formativo. Esperamos que continúe recorriendo este camino lleno de aprendizajes. Recuerde explorar los recursos que se encuentran disponibles. Diríjase al menú principal en donde encontrará la síntesis del tema abordado, una actividad didáctica y material complementario, entre otros recursos.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
