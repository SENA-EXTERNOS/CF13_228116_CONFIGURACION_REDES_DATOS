<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-5
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-end.align-items-center.p-4.mb-5
      .col-lg-5.col-8.img-01(data-aos="fade-right")
        .row.justify-content-center
          .col-11
            img(src="@/assets/curso/intro/img01.png")
      .col-lg-8.BGR01.p-4(style="z-index: 2" data-aos="fade-left")
        p Estimado aprendiz, en este componente formativo usted desarrollará las competencias necesarias para el montaje de una red de datos, incluidas las eléctricas, como parte de la implementación de una plataforma de tecnologías de información.
          br
          br
          |Se estudiarán también las generalidades relacionadas con la instalación de redes de datos, los métodos existentes, el proceso de montaje de redes de fibra óptica y las herramientas disponibles para la configuración de redes de manera correcta y efectiva; temas de gran importancia ya que la persona encargada del montaje de redes se convierte en uno de los pilares en los proyectos de actualización tecnológica en las empresas.

    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:


    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gcDdQWMbdec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
