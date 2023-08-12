<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Instalación redes de fibra óptica
    p.mb-5(data-aos='fade-right') El siguiente video amplía información sobre la importancia de la correcta instalación de redes de fibra óptica y sus particularidades:
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/RBa6CSZDwaQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.cajon.color-secundario.p-4
        p Continuando con lo planteado en el video, el funcionamiento de la comunicación por fibra óptica o la transmisión bloques de datos, se da de la siguiente manera: la luz se transporta por un cable de fibra óptica rebotando repetidamente en sus paredes; luego, cada partícula de luz se desliza en el tubo como un trineo que se arrastra por una pista de hielo.
          br
          br
          |Si la luz rebota en el vidrio en un ángulo pequeño y poco profundo, se refleja de nuevo, como si el vidrio fuese un espejo. Este fenómeno se llama reflexión interna total, el cual es uno de los eventos que mantiene a la luz dentro de la tubería, lo que evita que haya pérdidas de datos en las transmisiones.

    .h4 Otras consideraciones a tener en cuenta durante la instalación de una red eléctrica
    p.mb-5 Aparte de lo ya indicado, los siguientes puntos también deben hacer parte de la lista de chequeo:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-5.col-10.mb-lg-0.mb-4
        img(src="@/assets/curso/tema3/img01.png")
      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="BGR09")
          div(titulo="Punto 1")
            p.mb-0 Los cables de fibra óptica pueden sumergirse en el agua, o esta les puede caer sin afectarlos directamente. Tal condición hace que se utilicen en entornos de mayor riesgo y en condiciones de humedad, como sucede con los cables submarinos. Estos cables también tienen mayor resistencia, son más delgados y ligeros que los de alambre, propiedades que permiten que su mantenimiento no sea tan frecuente; y su reemplazo, muy esporádico.
          div(titulo="Punto 2")
            p.mb-0 Otro de los factores que mantiene la luz dentro del cable de fibra óptica, es que su estructura se forma por dos componentes separados. El módulo principal del cable es el núcleo (por donde viaja la luz); el secundario, la cubierta del núcleo, que es la capa de vidrio que se conoce como el revestimiento y que es un elemento que tiene por objetivo, mantener las señales de luz dentro del núcleo para que estas se puedan desplazar y llegar a su destino.
          div(titulo="Punto 3")
            p.mb-0 Mediante un protocolo conocido como reflexión interna total, los rayos de luz transmitidos a la fibra se propagan dentro del núcleo alcanzando grandes distancias, con una atenuación o reducción de la intensidad notablemente pequeña. El grado de atenuación depende de los valores de la longitud de onda de la luz y de la composición de la fibra.
          div(titulo="Punto 4")
            p.mb-0 Debido a las capas de vidrio más densas estas señales de luz no se transmiten, como conocemos, a la velocidad de la luz. En este tipo de material la velocidad se reduce en un 30 % respecto a su valor normal.
          div(titulo="Punto 5")
            p.mb-0 Si se quiere incrementar la señal en la transmisión por fibra óptica se deben utilizar repetidores a intervalos distantes que amplifican y convierten en señal eléctrica la señal óptica con el fin de procesarla y retransmitirla en señal óptica.
    h3 Aspectos a considerar previos a la instalación de una red de fibra óptica
    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema3/img02.jpg")
      .col-lg-7
        .BG07.p-4.mb-4(data-aos="flip-up")
          p.mb-0 Antes de empezar el proceso de montaje de una red de fibra óptica debemos tomar en consideración varios aspectos sensibles que nos garanticen con mayor seguridad el éxito del proyecto. Estos puntos a tener en cuenta son: 
        ul.lista-ul--color.ms-3
          li
            i.fas.fa-share-alt(style="color:#FD9927")
            | Establecer un módulo de comunicaciones o convertidor que permita el uso del formato de datos que se desean transmitir.
          li
            i.fas.fa-share-alt(style="color:#FD9927")
            | Escoger el tipo de cable de fibra óptica que se precise, de tal forma que cumpla con el rango solicitado.
          li
            i.fas.fa-share-alt(style="color:#FD9927")
            | Definir el tipo de fibra de los componentes complementarios, tales como los conectores que se necesitan para lograr las conexiones y el alcance del producto determinado
    
    p Ahora transitaremos por los pasos para realizar el procedimiento de instalación exitoso de una red de fibra óptica interna y conectada con acceso a una red externa, como es el caso internet:

    .row.justify-content-start.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        .BGR03A.p-4(data-aos="fade-right")
          p.me-5.mb-0 Validar la disponibilidad de redes en el área de influencia de la instalación de la red debido a que el servicio de fibra óptica es usualmente ofrecido por compañías y depende de que las redes públicas tengan esta tecnología, que casi siempre es obligatorio para poder conectar la red interna a una red externa. En el caso de que existan las redes externas instaladas, debe haber una caja de distribución de fibra óptica en un lugar de fácil acceso. Después de esto, se requiere construir otra caja que contenga el cable de la caja de distribución en un poste, a pocos metros de la casa, oficina o industria.
        .BG04.p-4(data-aos="fade-right")
          p.me-5.mb-0 Tender el cable desde la entrada a donde se va a realizar la instalación.
        .BG03.p-4(data-aos="fade-right")
          p.me-5.mb-0 Realizar las pruebas correspondientes con el objetivo de validar que la señal se emita correctamente.
        .BGR04A.p-4(data-aos="fade-right")
          p.me-5.mb-0 Instalar un terminal de red óptica en el lugar de la instalación o en el interior. Se recomienda que se localice en la planta baja del edificio o en el sótano.
      .col-lg-4.col-8.img-03.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img03.png")

    .h4 Ventajas y desventajas de la fibra óptica 

    p.mb-5 Exploremos las ventajas y desventajas que existen en el uso del cable de fibra óptica con relación al cable de cobre en el siguiente esquema, según sus características físicas y de velocidad: 

    .row.justify-content-center.mb-4
      .col-lg-11(data-aos="zoom-in")
        img(src="@/assets/curso/tema3/img04.svg")

</template>

<script>
export default {
  name: 'Tema3',
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
