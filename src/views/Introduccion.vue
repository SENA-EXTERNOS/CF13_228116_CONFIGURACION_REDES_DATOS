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
        p Estimado aprendiz: en este componente formativo se desarrollarán las competencias necesarias para que sea un actor principal en el proceso de montaje de una red de datos, incluidas las eléctricas, como parte de la implementación de una plataforma de tecnologías de información. 
        p.mb-0 Se estudiarán también las generalidades de la instalación de redes de datos, sus métodos de desarrollo, el proceso de montaje de la fibra óptica y las herramientas para el establecimiento de las redes de manera correcta y efectiva; temas de gran importancia ya que la persona encargada del montaje de redes se convierte en uno de los pilares en los proyectos de actualización tecnológica en las empresas.

    p A continuación lo invitamos a ver un video que le ilustrará sobre los puntos a tratar.

    figure.mb-4(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
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
