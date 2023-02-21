<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Instalación de redes 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )(data-aos="fade-right")
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        img.img-02.col-lg.d-none.d-lg-flex(src="@/assets/curso/temas/img01.svg")
        p El proceso de instalación de redes para una plataforma de infraestructura tecnológica se estructura en dos pilares fundamentales: la instalación de componentes eléctricos, inicialmente, y el montaje de los componentes que conforman el cableado estructurado.
          br
          br
          |#[b En la instalación eléctrica se desarrollan los pasos correspondientes a la implementación de las piezas eléctricas, como son las tomas, los cables eléctricos, las acometidas, las canaletas y las señales reguladas, cuya función principal es suministrar la corriente y el voltaje necesarios para su correcto funcionamiento.]

    .BG02.p-4.mb-4(data-aos="flip-up")
      p.mb-0 Por otro lado, se encuentra el sistema de cableado estructurado, el cual está formado por los puntos de red, el cableado UTP, la fibra óptica o inalámbrica, los #[em switches] o interruptores, los conectores, los enrutadores, entre otros.
    
    p.mb-5 El cableado estructurado determina el soporte para la implementación de los sistemas integrados de voz, datos, vídeo y multimedia, sin importar el fabricante de cada uno de estos.

    .h4 Aspectos a tener en cuenta antes de comenzar la instalación de una red
    p.mb-5 Para lograr la instalación de un proyecto de cableado estructurado de forma eficiente, confiable y segura, en primera instancia es fundamental tener en cuenta lo siguiente:

    .row.justify-content-start.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2
        .BGR03A.p-4(data-aos="fade-right")
          p.me-5.mb-0 Dominar los lineamientos prácticos que garanticen un trabajo de calidad teniendo en cuenta que se soporten las aplicaciones de telecomunicaciones presentes y futuras.
        .BG04.p-4(data-aos="fade-right")
          p.me-5.mb-0 Conocer los estándares de calidad, los cuales son protocolos internacionales que indican un contexto sólido y confiable para el implemento de un proyecto de cableado.
        .BG03.p-4(data-aos="fade-right")
          p.me-5.mb-0 Tener presente que las normas establecidas tienen un proceso de revisión, monitoreo y actualización que se llevan a cabo por comités interdisciplinarios. Los miembros y no miembros solicitantes de dichos grupos pueden participar de las actualizaciones continuas.
        .BGR04A.p-4(data-aos="fade-right")
          p.me-5.mb-0 La vigencia de dichas normas puede   variar según su naturaleza; por ejemplo, las normas TIA tienen un periodo de cinco años, mientras que las análogas de ISO, aproximadamente tres años de duración.
      .col-lg-4.col-8.img-03.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema1/img02.png")

    p Luego de tener clara la normativa y reglamentación necesarias para la instalación de redes, es necesaria la verificación detallada de cada proceso durante el montaje de una red.
    p.mb-5 Los siguientes son aspectos a revisar antes y durante la instalación de una red: 

    .row.justify-content-start.align-items-center.mb-4(data-aos="zoom-in")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop')
          .BGR05.hg-1.p-4
            p.text-center.mt-5.mb-0 Verificar la conexión y determinar que el cableado está en buenas condiciones, que transmita sin problemas; además, hay que hacer pruebas en la continuidad de atenuación y la impedancia.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
          .BGR05.hg-1.p-4
            p.text-center.mt-5.mb-0 Observar que las conexiones sean las correctas, es decir, que no tengan falsos contactos que puedan afectar al rendimiento.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
          .BGR05.hg-1.p-4
            p.text-center.mt-5.mb-0 Comprobar que los equipos de comunicación como los #[em switches], los #[em routers] y los puntos de acceso inalámbricos (wifi) funcionen correctamente.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          .BGR05.hg-1.p-4
            p.text-center.mt-5.mb-0 Constatar el estado de la tarjeta de red, tanto de los servidores como de las estaciones de trabajo, de tal manera que el funcionamiento sea totalmente correcto.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          .BGR05.hg-1.p-4
            p.text-center.mt-5.mb-0 Cerciorarse de que haya el menor número de colisiones posibles. El técnico podrá usar para ello herramientas como “Sniffer pro o Network inspector”.
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
          .BGR05.hg-1.p-4
            p.text-center.mt-5.mb-0 Confirmar si en la red hay servicios o protocolos innecesarios que puedan estar generando tráfico y, por lo tanto, colapsando las comunicaciones.

    p.mb-5 Como parte de esta construcción, se deben contemplar de una manera complementaria las particularidades de cada uno de los componentes, de tal forma que cumplan con las necesidades de diseño que se han solicitado.

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.cajon.color-acento-contenido.p-4
        p.mb-0 La forma de establecer la infraestructura de soporte de la red correcta es tan importante como el patrón del equipo que se utilice. A menudo, la desemejanza de las redes de cables con las redes inalámbricas es que requieren mayor habilidad y tiempo para diagnosticar los problemas y dar la solución de estos. Por ejemplo, el viento, elementos físicos e interferencias pueden causar fallas en una red que ha funcionado de forma correcta por un largo tiempo.
    h3 Terminales de servicio

    p.mb-5 En todas las redes que se instalan, independiente del objetivo que se establezca en el proyecto o qué función nos lleva a realizar varios tipos de servicios de la red, podemos encontrar las siguientes terminales de servicio:

    .BGIMG01.p-4.mb-4(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Telefonía IP
            p.mb-0 Es conocida como Protocolo de Telefonía por Internet, lo cual incluye las tecnologías que usan el protocolo IP para el intercambio de voz, tales como fueron el fax y otros modos de información que ahora funcionan utilizando la red de internet. Las señales de voz o audio viajan en forma de paquetes de datos a través de una red de área local (LAN) o internet (voz sobre IP).
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/c1.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Circuito cerrado de televisión
            p También denominado #[b CCTV] (#[em Closed Circuit Television]). Es una tecnología de videovigilancia diseñada para inspeccionar diferentes ambientes y los eventos que se presentan en su interior. Se le denomina circuito cerrado debido a que los datos de las imágenes que se generan por cada uno de los componentes son almacenados de forma centralizada en un dispositivo para luego ser consultados y, en caso de requerirse, utilizados.
            p.mb-0 El circuito puede estar compuesto por una o más cámaras de vigilancia conectadas a uno o más monitores de video o televisores que reproducen las imágenes capturadas. Para lograr que el sistema sea más eficiente, actualmente se conectan directamente o se enlazan por red otros componentes como computadores.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/c1.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Servidores
            p.mb-0 Este dispositivo es el cerebro de la trasmisión de la información en una red de datos o computadores debido a que se encarga de gestionar el envío, la recepción y la manipulación de los datos que se generan continuamente en su alcance de validación.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/c2.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4.fst-italic Access point
            p.mb-0 Son definidos inicialmente como #[b AP] o #[b WAP] (#[em access point o wireless access point]), pero también se les conoce como #[b puntos de acceso]. Son dispositivos electrónicos cuya finalidad principal es establecer una conexión inalámbrica entre equipos, sean estos computadores, impresoras o celulares, formando de esta manera una red inalámbrica externa (local o internet) con la que se podría interconectar cualquier tipo de equipo que tenga esta tecnología.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/c3.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 DVR
            p Los sistemas de administración de señales de video y grabación comúnmente se conocen como #[b DVR] (#[em digital video recorder]), y su función principal consiste en grabar y almacenar las señales de videos de las cámaras que están conectadas a sus entradas. Estos equipos vienen provistos y programados a partir de un software especializado para realizar la gestión de dichas señales.
            p.mb-0 El cable coaxial es uno de los medios de transmisión físicos más usados y eficaces para llevar la señal de video análoga entre la cámara y el DVR. Sin embargo, el uso del cable par trenzado (UTP), más la implementación del #[em video-balun] es cada vez más común por el menor costo frente al coaxial.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/c4.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 NVR (#[em networking video recorder])
            p.mb-0 Traducido al español como grabador de video de red, es un dispositivo inteligente y físico que contiene unos programas que permiten operar diferentes cámaras IP o inalámbricas configuradas en un conjunto de elementos de red. Su objetivo es almacenar datos de manera digital gracias a un disco duro que hace posible guardar imágenes de baja y alta resolución.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/c5.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Telemandos
            p.mb-0 Dispositivos que se utilizan para accionar a distancia aparatos electrónicos. Son fundamentales para proteger y conservar elementos como el sistema de alumbrado o los electrodomésticos ante disparos intempestivos de tensión.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema1/c6.png")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
