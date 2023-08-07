const basePath = '/images/news/';

type News = {
  [index: string]: {
    [index: string]: {
      title: string;
      text: string;
      images: string[];
    };
  };
};

export const news: News = {
  2023: {
    'arraia-da-cidadania': {
      title: 'Arraiá da Cidadania',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas sed. Mi proin sed libero enim sed faucibus turpis in eu. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Mi bibendum neque egestas congue quisque egestas. Ultrices sagittis orci a scelerisque purus semper. Ac turpis egestas maecenas pharetra convallis posuere morbi. Risus nec feugiat in fermentum posuere urna nec tincidunt. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Suspendisse potenti nullam ac tortor.',
      images: [
        `${basePath}2023/Arraiá da Cidadania/image01.webp`,
        `${basePath}2023/Arraiá da Cidadania/image02.webp`,
        `${basePath}2023/Arraiá da Cidadania/image03.webp`,
        `${basePath}2023/Arraiá da Cidadania/image04.webp`,
        `${basePath}2023/Arraiá da Cidadania/image05.webp`,
        `${basePath}2023/Arraiá da Cidadania/image06.webp`,
      ],
    },

    'arraia-solidario-shopping-park-sul': {
      title: 'Arraiá Solidário Shopping Park Sul',
      text: 'Participação da Casa da Criança e do Adolescente no Arraia Solidário do @shoppingparksul ❤️ Queríamos agradecer a oportunidade de participar deste evento pelo segundo ano consecutivo e poder angariar recursos para a continuação dos projetos da instituição. Obrigado a todos deram uma passadinha por lá e prestigiaram esse lindo evento no Shopping Park Sul. 3 dias de muita alegria, diversão,comida boa além de ajudar a nossa instituição e o @gapcgrupodeapoio 🍲🌽',
      images: [
        `${basePath}2023/Arraiá Solidário Shopping Park Sul/image01.webp`,
        `${basePath}2023/Arraiá Solidário Shopping Park Sul/image02.webp`,
        `${basePath}2023/Arraiá Solidário Shopping Park Sul/image03.webp`,
        `${basePath}2023/Arraiá Solidário Shopping Park Sul/image04.webp`,
        `${basePath}2023/Arraiá Solidário Shopping Park Sul/image05.webp`,
        `${basePath}2023/Arraiá Solidário Shopping Park Sul/image06.webp`,
      ],
    },

    'curso-sobre-violencia-e-abuso-contra-crianca-e-adolescente': {
      title:
        'Curso sobre Violência e Abuso contra Criança e Adolescente – Professor Antônio Carlos Oliveira (PUC/RJ)',
      text: 'Curso Sobre Abuso Sexual de Crianças: Identificação, Notificação, Avaliação e Encaminhamentos Ministrado pelo Professor Antônio Carlos - PUC Rio @antoniocarlospucrio Agradecemos ao @antoniocarlospucrio pela solidariedade do curso proporcionado a rede e também gostaríamos de agradecer ao @teatrogacemss pelo espaço cedido, ao @cafefaraooficial pelo delicioso café servido no evento, @editoravozes @diadorimlivraria pelo material gráfico distribuído a todos os participantes, @rw.produtora pela fotografia e claro a todos que participaram conosco deste dia se capacitando ainda mais para acolhermos da melhor forma todos que necessitam de ajuda.',
      images: [
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image01.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image02.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image03.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image04.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image05.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image06.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image07.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image08.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image09.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image10.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image11.webp`,
        `${basePath}2023/Curso sobre Violência e Abuso contra Criança e  Adolescente/image12.webp`,
      ],
    },

    'liquida-vr': {
      title: 'Liquida VR',
      text: 'A Casa da Criança e do Adolescente agradece a solidariedade e parceria de todos que participaram o @feiraliquidavr.',
      images: [
        `${basePath}2023/Liquida VR/image01.webp`,
        `${basePath}2023/Liquida VR/image02.webp`,
        `${basePath}2023/Liquida VR/image03.webp`,
        `${basePath}2023/Liquida VR/image04.webp`,
        `${basePath}2023/Liquida VR/image05.webp`,
        `${basePath}2023/Liquida VR/image06.webp`,
        `${basePath}2023/Liquida VR/image07.webp`,
      ],
    },

    'festa-junina-hotel-bela-vista': {
      title: 'Festa Junina - Hotel Bela Vista',
      text: 'A Festa do @hotelbelavistavr foi maravilhosa, muito organizada, profissionalismo e alegria. E a Equipe do Cuurmim com garra, alegria e amor sempre demonstrando o seu empenho. Vcs são demais Equipe. Hotel Bela Vista, gratidão pela oportunidade dada ao Programa Curumim da Casa da Criança e do Adolescente estar participando junto às outras Instituições beneficentes. Deus abençoe a todos. Agradeço também, as pessoas amigas do Curumim que nos ajudaram, doando os ingredientes para prepararmos os caldos. São parceiros maravilhosos que jamais esqueceremos a grandeza no ❤️.',
      images: [
        `${basePath}2023/Festa Junina Hotel Bela Vista/image01.webp`,
        `${basePath}2023/Festa Junina Hotel Bela Vista/image02.webp`,
        `${basePath}2023/Festa Junina Hotel Bela Vista/image03.webp`,
        `${basePath}2023/Festa Junina Hotel Bela Vista/image04.webp`,
        `${basePath}2023/Festa Junina Hotel Bela Vista/image05.webp`,
        `${basePath}2023/Festa Junina Hotel Bela Vista/image06.webp`,
      ],
    },
  },

  2022: {
    'troca-de-faixa-taekwondo-curumim-volta-grande-3': {
      title: 'Troca de Faixa - Programa Curumim Volta Grande III',
      text: 'No dia 10/08/22 aconteceu a Troca de Faixa no Programa Curumim Volta Grande III. O Taekwondo tem como objetivo, trabalhar a disciplina, coordenação motora, concentração e habilidade dos movimentos com as crianças e adolescentes. A certeza é que em muito eles tem se elevado no processo de ensino aprendizagem nessa linda luta no Taekwondo. Sob a orientação e avaliação do Mestre Ronaldo Luis.',
      images: [
        `${basePath}2022/Troca de Faixa Taekwondo/image01.webp`,
        `${basePath}2022/Troca de Faixa Taekwondo/image02.webp`,
        `${basePath}2022/Troca de Faixa Taekwondo/image03.webp`,
        `${basePath}2022/Troca de Faixa Taekwondo/image04.webp`,
        `${basePath}2022/Troca de Faixa Taekwondo/image05.webp`,
        `${basePath}2022/Troca de Faixa Taekwondo/image06.webp`,
        `${basePath}2022/Troca de Faixa Taekwondo/image07.webp`,
      ],
    },
  },
};
