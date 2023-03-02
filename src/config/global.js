export default {
  global: {
    componenteFormativo: 'Configuración redes de datos',
    descripcionCurso:
      'En este componente formativo se tratarán conceptos generales sobre métodos de instalación de redes, en especial redes de fibra óptica y las diferentes herramientas disponibles para realizarlo. Además, se encuentran las bases necesarias para implementar con éxito redes de datos, todo como parte de una transición o modernización de una plataforma de tecnologías de información y comunicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Instalación de redes',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Métodos de instalación de redes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Instalación de redes de fibra óptica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas para instalar redes',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Instalación de redes',
      referencia:
        'Ramos, E. A. (s/f). <em>INSTALACIÓN Y MANTENIMIENTO DE REDES INFORMÁTICAS “ASPECTOS FUNDAMENTALES SOBRE REDES”</em>.',
      tipo: 'Artículo',
      link:
        'https://www.trabajosocial.unlp.edu.ar/uploads/docs/instalacion_y_mantenimiento_de_redes_informaticas__aspectos_fundamentales_sobre_redes_.pdf',
    },
    {
      tema: 'Métodos de instalación de redes',
      referencia: '<em>Unidad 2. Instalación física de una red</em>. (s/f).',
      tipo: 'Artículo',
      link: 'https://www.mheducation.es/bcv/guide/capitulo/8448180828.pdf',
    },
    {
      tema: 'Instalación redes de fibra óptica',
      referencia:
        'Conectronica. (s.f.). Tipos de Instalación de Fibra Óptica. Conectrónica.',
      tipo: 'Artículo',
      link:
        'https://www.conectronica.com/fibra-optica/curso-fibra-optica/tipos-de-instalacion-de-fibra-optica',
    },
    {
      tema: 'Herramientas para instalar redes',
      referencia:
        'Sevilla, S. R. (2014). <em>ESTUDIO DE HERRAMIENTAS PARA LA GESTIÓN DE LAS REDES DOMÉSTICAS</em>. Universitat Politècnica de València.',
      tipo: 'Artículo',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/39562/Memoria.pdf?sequence=1',
    },
    {
      tema: 'Dibujo técnico',
      referencia: '<em>Dibujo técnico</em>. (s/f). Wikipedia.',
      tipo: 'Artículo',
      link:
        'https://www.mineduc.gob.gt/DIGECADE/documents/Telesecundaria/Recursos%20Digitales/2o%20Recursos%20Digitales%20TS%20BY-SA%203.0/04%20EXPRESION%20ARTISTICA/U10%20pp%20182%20dibujo%20t%C3%A9cnico.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Backbone</em>',
      significado:
        'línea o serie de conexiones de alta velocidad que forman una ruta dentro de una red. Es el nivel más alto en una red descentralizada. El usuario debe asegurarse de que las redes de terminales y de retransmisión conectadas a la misma red troncal estén conectadas entre sí.',
    },
    {
      termino: 'Dibujo',
      significado:
        'es una representación gráfica de una superficie, generalmente plana, utilizando líneas y formas que representan objetos, ideas o formas abstractas reales o imaginarias.',
    },
    {
      termino: 'Dirección IP',
      significado:
        '(en inglés <i>IP address</i>), es la representación numérica de la localización de un ordenador dentro de una red. Consiste en cuatro números de hasta cuatro cifras separadas por puntos. La dirección del protocolo de un equipo conectado a internet que se suele representar en una notación con puntos o decimal, como en 128.121.4.5',
    },
    {
      termino: 'Inalámbrico',
      significado:
        'cualquiera de las clases de comunicaciones remotas que no utilizan cables, incluidas las comunicaciones por infrarrojos, celulares y por satélite.',
    },
    {
      termino: 'Línea',
      significado:
        'en geometría, un segmento de línea es una serie continua de infinitos puntos.',
    },
    {
      termino: '<em>Packet</em>',
      significado:
        '(paquete), es la unidad de información que se transmite mediante una red. Paquete es un término genérico utilizado para describir una unidad de datos de cualquier nivel de la pila de un protocolo, pero se aplica mejor a la descripción de unidades de datos tratadas por una aplicación.',
    },
    {
      termino: 'Plano',
      significado:
        'es el componente que posee dos dimensiones y está formado por un número infinito de puntos y rectas.',
    },
    {
      termino: 'Protocolo',
      significado:
        'sistema de reglas o estándares para propagarse y entenderse a través de una red, en especial a través de internet. Los equipos y las redes interactúan de acuerdo con los protocolos que determinan el comportamiento que cada lado espera del otro en la transferencia de información.',
    },
    {
      termino: 'Punto',
      significado:
        'este es el rastro mínimo de la herramienta que marca. En geometría es la intersección de dos o tres coordenadas.',
    },
    {
      termino: 'Dato',
      significado:
        'Es la unidad mínima de información que tiene un significado relevante.',
    },
  ],
  referencias: [
    {
      referencia:
        'Mainardi, N. E., y Talay, C. A. (2022). Análisis de factores que generan pérdidas de información en una transmisión de datos con TCP en redes heterogéneas. <em>Informes Científicos - Técnicos UNPA</em>, 14(2), 178-199.',
      link: 'https://doi.org/10.22305/ict-unpa.v14.n2.886',
    },
    {
      referencia:
        'Moreno-Lopez, R., y Arroyo López, C. (2022). Redes, equipos de monitoreo y aplicaciones móvil para combatir los discursos y delitos de odio en Europa. <em>Revista latina de comunicación social</em>, 80, 347-363.',
      link: 'https://doi.org/10.4185/rlcs-2022-1750',
    },
    {
      referencia:
        'Polo Roca, A. (2020). Telecomunicaciones y protección de datos: interconexiones de redes, datos de tráfico y conservación de datos. <em>Revista Vasca de Administración Pública / Herri-Arduralaritzarako Euskal Aldizkaria</em>, 116, 213-245.',
      link: 'https://doi.org/10.47623/ivap-rvap.116.2020.08',
    },
    {
      referencia:
        'Ronceros Morales, C. (2022). Modelado de confiabilidad, disponibilidad y mantenibilidad de la plataforma de telecomunicaciones y transmisión de datos. Revista Tecnológica - ESPOL, 34(2), 84-103.',
      link: 'https://doi.org/10.37815/rte.v34n2.914',
    },
    {
      referencia:
        'Suárez Silva, N., Pérez Rodino, R., y Yelicich Peláez, R. (2019). Red de transporte de datos en formato RTCM, vía protocolo de Internet (Ntrip). Implementación en la región y proyección futura a través de SIRGAS. Revista cartográfica, 89, 165-187.',
      link: 'https://doi.org/10.35424/rcarto.i89.495',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
