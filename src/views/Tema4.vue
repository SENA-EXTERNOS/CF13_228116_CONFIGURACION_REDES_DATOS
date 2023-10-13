<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Herramientas para instalar redes
    
    p Las herramientas que se utilizan para realizar el proceso de instalación de redes eléctricas son:

    .BGIMG01.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Crimpadora
            p.mb-0 Este dispositivo se utiliza para insertar o instalar el plug de RJ-45 en el cable UTP, de tal forma que los filamentos del cable coaxial queden en contacto con los puntos del conector.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img01.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Herramienta de presión (ponchadora)
            p.mb-0 Se utiliza para unir el cable UTP con el conector RJ-45. Su funcionamiento se lleva a cabo de la siguiente manera: se instala una punta metálica y con la herramienta se inserta el cable en el conector, mientras que otra punta se usa para cortar el cable y quitarlo del conector.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/c1.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Generador de tonos
            p.mb-0 Induce en cualquier cable una señal de sonido a través del componente de red. Por medio de la herramienta tipo lápiz se puede escuchar el sonido en el cable y validar que su funcionamiento esté bien. Así mismo, dejando a un lado el procedimiento manual, sirve para identificar o localizar los cables.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img03.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Tester LAN
            p.mb-0 Es un dispositivo que se utiliza para comprobar de forma ágil y eficiente que el punto de red funciona correctamente y que los paquetes viajan sin ninguna interrupción a su destino, por medio del envío de señales y validando si se da el retorno en cada uno de los puntos que se miden.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img04.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Voltímetro
            p.mb-0 Es un instrumento que sirve para medir la diferencia de potencia entre dos puntos de un circuito. Es una alternativa económica como probador de cables UTP.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img05.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            .h4 Sonda metálica
            p.mb-0 No es un elemento indispensable o único en el proceso de instalación; sin embargo, resulta muy útil cuando se instala el cableado en tuberías. Para esto se introduce la guía metálica al tubo hasta que salga, se asegura el cable a la punta de la guía y se comienza a tirar lentamente el cable hasta que atraviese el tramo requerido.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img06.png")
    h3 Dispositivos para la instalación de redes de fibra óptica
    p Las herramientas que se utilizan para realizar el proceso de instalación de redes eléctricas son:

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      TabsC.color-acento-botones
        .BGR06.py-md-5.py-4(titulo="OLTS")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src='@/assets/curso/tema4/img07.jpg')
            .col-lg-6
              p Conjunto de pruebas de pérdida óptica (#[I Optical Loss Test Set]), es un dispositivo de alta precisión que mide las pérdidas totales de atenuación en un tramo de fibra óptica. La fuente de luz se sitúa en uno de los extremos de la fibra de tal forma que se emite una señal continua en una longitud de onda determinada. En el otro extremo un medidor detecta dicha señal y mide su nivel de potencia óptica. Es necesario calibrar el medidor para obtener resultados precisos.
                br
                br
                |La atenuación de la fibra es la diferencia entre la señal emitida y la recibida. Para obtener provecho de la utilización de los OLTS se deben obtener resultados bidireccionales, es decir, hacer las mediciones en ambas direcciones, no obstante, para esto debe haber un técnico en cada extremo del cable.
        .BGR06.py-md-5.py-4(titulo="OTDR")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src='@/assets/curso/tema4/img08.jpg')
            .col-lg-6
              p #[i Optical Time Domain Reflectometer], por sus siglas en inglés, es otro de los elementos que sirve para identificar y localizar con precisión eventos individualizados en un enlace óptico. Es decir, si hay un problema o una sección defectuosa él detecta e informa el sitio exacto donde se encuentra.
                br
                br
                |El OTDR emite una medida reflectométrica, la cual se da en una prueba realizada desde un extremo para validar la calidad del cable de fibra. Este componente emite varias señales en la fibra en cuyo interior tiene lugar una serie de incidencias debidas a conectores, empalmes, irregularidades, curvaturas y defectos. Según lo anterior, se encarga de analizar el retorno de la señal generada por las reflexiones que causan el efecto #[em Fresnel] o #[em Rayleigh].

        .BGR06.py-md-5.py-4(titulo="VFL")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src='@/assets/curso/tema4/img09.jpg')
            .col-lg-6
              p.mb-0 Por su sigla en inglés significa #[i visual fault locator]. Es decir, un localizador visual de fallos. Se utiliza para probar la continuidad del cable de fibra óptica: se coloca en un extremo y se observa con precaución la luz del mismo por el otro extremo.
        .BGR06.py-md-5.py-4(titulo="Microscopio para fibra óptica")
          .row.justify-content-center.align-items-center
            .col-lg-5.col-10.mb-lg-0.mb-4
              img(src='@/assets/curso/tema4/img10.jpg')
            .col-lg-6
              p Está diseñado específicamente para detectar y examinar las anomalías que se presentan en la fibra óptica. Por lo general, un dispositivo de esta clase está compuesto por tres elementos principales: el iluminador, el sistema de lentes del microscopio y la pantalla. El iluminador suele ser un LED o una fuente de luz halógena de cuarzo que se utiliza para transmitir luz a través de la fibra y se puedan ver las fallas o los defectos. 
              p.mb-0 El aumento estándar es de 100 x, 200 x o 400 x, aunque algunos rangos de motas tienen un aumento variable. La imagen se enviará a un monitor, generalmente un monitor LCD. En algunos microscopios se permite que estas imágenes se transfieran a una computadora para fines de archivo.
    
    p Adicionalmente hay otros dispositivos y herramientas que complementan el proceso de instalación de las redes eléctricas y de fibra óptica, los cuales son: medidor de potencia óptica, conector de transferencia SC para medidor de potencia, cortador de fibra, pelador de cable de fibra óptica, pelador de cable FTTH y fijador de longitud de cable.

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/tema4/img11.jpg")
      .col-lg-7
        .BG07.p-4.mb-0(data-aos="flip-up")
          p.mb-0 Para el caso de las redes inalámbricas, dispositivos como tal de instalación no existen, pues las configuraciones se realizan mediante los #[em software] que traen disponibles los equipos ya que las conexiones se establecen de forma virtual y no se ven físicamente como las de cableado de fibra óptica.
        p.mb-0 En este caso, las herramientas son los sistemas de manejo de cada uno de los dispositivos. Por ejemplo, en el computador, el sistema de conexión inalámbrica; en los #[em acces point], el #[em software] que administra los accesos y las conexiones de este a otros dispositivos de la red.
    h3 Herramientas tecnológicas
    p Se han creado herramientas que sirven como complementos de la instalación de las redes inalámbricas, se utilizan luego de que estas se encuentran en funcionamiento y cumplen la función de interconexión.
      br
      br
      |Las herramientas tecnológicas son grandes aliadas en la instalación y se puede describir de la siguiente manera:

    .BGR10.p-4.mb-4
      SlyderA.slyder01(tipo="b")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p A nivel de #[em software] se consideran como un conglomerado de programas que realizan una función determinada dentro de un campo de acción específico. Un ejemplo claro es el correo electrónico, ya que es un conjunto de programas cuya función es lograr que las personas envíen y reciban mensajes mediante una plataforma de comandos establecida. 
              br
              br
              |En sus inicios solo permitía enviar y recibir mensajes de texto plano, después se fueron agregando más funcionalidades, al punto de que hoy en día es uno de los componentes claves de las herramientas colaborativas.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img12.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Están focalizadas según su campo de aplicación. Un aplicativo desarrollado para un celular tiene características livianas porque se ha creado con herramientas visuales de última generación. Así mismo, el #[em software] permite la conexión a bases de datos e integración con el #[em hardware] de otros dispositivos.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img13.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Dentro de este panorama nacen y se desarrollan las plataformas colaborativas, cuyo objetivo principal es que más de una persona pueda participar en el desarrollo de un producto, proceso o lo que se quiera realizar.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img14.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Se pueden desarrollar a partir del concepto de manejo de paquetes integrados, el cual se refiere a que cuando se utiliza un sistema o programa que integre diferentes ambientes, se necesita dar solución a partir del conocimiento de la situación, las interacciones internas y las implicaciones del relacionamiento de estos, ya sea solos o de forma conjunta.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img15.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Este tipo de plataforma ha hecho posible que los trabajos de hoy los puedan hacer personas o usuarios que están ubicados en diferentes partes geográficas, llevando a cabo diferentes actividades en un mismo proyecto.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img16.png")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            p.mb-0 Como parte del desarrollo de las redes, en la actualidad la tendencia es que todas las herramientas se ejecuten en la nube y se trabaje en forma colaborativa, de tal manera que el usuario no necesite instalar nada en su computador y al mismo tiempo no tenga que almacenar cosas de trabajo en sus dispositivos.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src="@/assets/curso/tema4/img17.png")
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4(style="background-color: #e2f8fa ")
          p Estimado aprendiz, ha llegado al final de este componente formativo. Recuerde explorar los demás recursos que se encuentran disponibles en el menú principal como son la síntesis, la actividad didáctica, el material complementario, entre otros.







</template>

<script>
export default {
  name: 'Tema4',
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
