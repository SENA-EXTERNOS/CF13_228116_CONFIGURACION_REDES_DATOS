<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos de instalación de redes
    
    p En los procesos de instalación de redes de computadores uno de los aspectos principales, quizá el más importante de todos, es seleccionar el tipo de cableado que se va a utilizar teniendo en cuenta que siempre cumpla con los requerimientos establecidos durante la planeación y ejecución del proyecto. Siendo así, los cables se dividen en las siguientes categorías:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      TabsC.color-acento-botones
        .BGR06.py-md-5.py-4(titulo="Fibra óptica")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img01.jpg')
            .col-lg-6
              p Su estructura interna está compuesta por numerosas fibras de vidrio sumamente delgadas, cuyo espesor es semejante al de un cabello humano. Además de esto, son muy flexibles, lo que les permite transmitir información, en forma de haces de luz, de manera sumamente segura y rápida.
                br
                br
                |La fibra óptica está constituida por un núcleo de cristal o plástico que tiene un índice de refracción muy elevado; a su vez, el núcleo se encuentra recubierto por una capa de material similar, pero con índice de refracción menor.
        .BGR06.py-md-5.py-4(titulo="DROP")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img02.jpg')
            .col-lg-6
              p Tiene la estructura de un cable de fibra óptica, pero se diferencia de este porque está específicamente diseñado para las instalaciones FTTH de plataformas de internet, video y datos sobre tecnología GPON, EPON y Metro #[em Ethernet]. Es usado en instalaciones interiores (#[em indoor]) como exteriores (#[em outdoor]).
                br
                br
                |Este tipo de cable permite la instalación del punto de conexión de la calle hacia al interior del recinto o casa y hace posibles curvas muy cerradas, con un diámetro de hasta 10 mm sin que el enlace óptico sufra grandes pérdidas.
        .BGR06.py-md-5.py-4(titulo="Par trenzado")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img03.jpg')
            .col-lg-6
              p.mb-0 Este tipo de cable de red está compuesto por un par de hilos de cobre que se encuentran aislados y enlazados. Puede ser clasificado en dos grandes grupos: por un lado se encuentran aquellos que son sin apantallar, también denominados UTP y por el otro, los que se caracterizan por tener una extensión máxima de cien metros y suelen ser utilizados en las redes LAN.
        .BGR06.py-md-5.py-4(titulo="Coaxial")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img04.jpg')
            .col-lg-6
              p Está formado por un hilo conductor central #[b a través del cual se envían datos] y por la malla o conductor exterior, que realiza el retorno de la corriente. En medio de ambos elementos se encuentra una capa aislante de metal conocida con el nombre de dieléctrico.
        .BGR06.py-md-5.py-4(titulo="Multipar telefónico")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src='@/assets/curso/tema2/img05.jpg')
            .col-lg-6
              p Más conocido como manguera multipar, está conformado por un conjunto de filamentos de cobre con un diámetro de entre 0,4 y 0,6 mm agrupados por pares y trenzados.
              p La capa aislante que cubre los filamentos suele ser de PVC o polietileno.
              p Por el costo actual de los otros tipos de cables se está utilizando en muchas ocasiones para transportar video, lo que reduce el costo de su instalación.
    h4 Planificación de la instalación de una red LAN
    .row.justify-content-center.mb-4
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema2/img06.png")
      .col-lg-7
        .BG07.p-4.mb-4(data-aos="flip-up")
          p.mb-0 Al organizar la planificación de la instalación de una red LAN se deben tener en cuenta las siguientes áreas físicas: 
        ul.lista-ul--color.ms-3
          li
            i.fas.fa-check(style="color:#FD9927")
            | Área de trabajo.
          li
            i.fas.fa-check(style="color:#FD9927")
            | Cuarto de telecomunicaciones, también denominado servicio de distribución.
          li
            i.fas.fa-check(style="color:#FD9927")
            p.mb-0 Cableado #[em backbone], también denominado cableado vertical.
          li
            i.fas.fa-check(style="color:#FD9927")
            | Cableado de distribución, también denominado cableado horizontal.
          li
            i.fas.fa-check(style="color:#FD9927")
            | Áreas físicas de instalación de redes.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10          
        .cajon.color-primario.p-4.mb-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La facilidad en el proceso de instalación de una red está determinada por aspectos como los tipos de cables, la estructura del acceso al piso y a sus espacios, las propiedades y el tamaño físico del cable. Estos cables generalmente se instalan en canales para conductores eléctricos, que son como recintos en los que están protegidos.  

    h4 Componentes adicionales en la instalación de redes
    p.mb-5(data-aos='fade-right') Se deben realizar las instalaciones y configuraciones complementarias para poner en funcionamiento la red, haciendo uso de los siguientes componentes, los cuales se deben situar y dejar listos durante esta parte del proceso:
    .row.justify-content-center.mb-5
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-azul")
          div(titulo="Dispositivo de comunicación de datos (DCE)")
            p Es el que suministra los servicios de temporización a otro dispositivo. Habitualmente se encuentra en el extremo del enlace que proporciona el acceso WAN.
          div(titulo="Dispositivo terminal de datos (DTE)")
            p Su funcionalidad radica en que recibe los servicios de temporización desde otro equipo, ajustándose al final. Por lo general este dispositivo se encuentra en el extremo del enlace del cliente WAN o del usuario.
      .col-lg-5.col-8: img(src='@/assets/curso/tema2/c1.png', alt='')
            

</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass">
.tarjeta-azul
  background-color: #0b5999
  p, h3
    color: white
.acordion__activo
  background-color: #e9eef4
  p, h3
    color: $color-sistema-texto
</style>
