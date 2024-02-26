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
  2024: {
    'doacoes-unimed': {
      title: 'Doações da Unimed',
      text: 'Hoje a casa da criança agradece a Unimed e seus cooperados pela corrente do bem, que foi feita em dezembro de 2023 para angariar recursos em benefício da instituição. Nós funcionários, diretoria e criança assistidas agradecemos a solidariedade para continuarmos todos os nosso projetos, são pessoas como vocês que fazem a diferença na sociedade, muito obrigado!. @unimedvr @hospitalunimedvr',
      images: [`${basePath}2024/Doações Unimed/image01.webp`, `${basePath}2024/Doações Unimed/image02.webp`],
    },

    'doacoes-construtora-moov': {
      title: 'Doações da Construtora Moov',
      text: 'A casa da criança e adolescente agradece a construtora moov pela iniciativa do projeto solidária de doação de cestas básicas para as instituição de Volta Redonda, onde fomos uma das instituições beneficiadas. Com esse apoio temos a oportunidade de oferecer alimentos as crianças assistidas nos nossos projetos, nosso muito obrigado.  @construtora_polo',
      images: [`${basePath}2024/Doações Moov/image01.webp`],
    },

    'posse-conselheiros-tutelares-volta-redonda': {
      title: 'Posse dos Conselheiros Tutelares - Volta Redonda',
      text: 'No dia 10/01/2024, a Casa da Criança e do Adolescente esteve presente na Posse dos novos conselheiros tutelares de Volta Redonda para o quadriênio 2024-2028. Contamos com a presença das coordenações técnicas dos Programas Curumim 249, Cuidar, NACA e Projeto Fiocruz.',
      images: [`${basePath}2024/Posse Conselheiros Tutelares/image01.webp`],
    },

    'doacoes-rede-royal-supermecados': {
      title: 'Doações da Rede de Supermecados Royal',
      text: 'A casa da criança e do adolescente, agradece a rede royal supermercados pelo troco solidário que trará condições de alimentos saudáveis para nossas crianças assistidas. NOSSO MUITO OBRIGADO! 🤍 @royalsupervoce @karolbabadeira',
      images: [`${basePath}2024/Doações Royal/image01.webp`],
    },
  },

  2023: {
    'passeio-sicoob-curumim-unidade-249': {
      title: 'Passeio Sicoob - Curumim Unidade 249',
      text: 'Em parceria com o @sicoob na 2°feira dia 13/11, os adolescentes do Programa Curumim Unidade 249 participaram do passeio ao Banco com roda de bate papo e palestra sobre educação financeira e empreendedorismo, com direito a um belo café da manhã. Atitudes assim fazem reais mudanças na realidade dos adolescentes das favelas de Volta Redonda. Nossa gratidão ao parceiro @sicoob por acreditar em nossos adolescentes.',
      images: [
        `${basePath}2023/Passeio Sicoob - Curumim Unidade 249/image01.webp`,
        `${basePath}2023/Passeio Sicoob - Curumim Unidade 249/image02.webp`,
        `${basePath}2023/Passeio Sicoob - Curumim Unidade 249/image03.webp`,
        `${basePath}2023/Passeio Sicoob - Curumim Unidade 249/image04.webp`,
        `${basePath}2023/Passeio Sicoob - Curumim Unidade 249/image05.webp`,
        `${basePath}2023/Passeio Sicoob - Curumim Unidade 249/image06.webp`,
        `${basePath}2023/Passeio Sicoob - Curumim Unidade 249/image07.webp`,
      ],
    },

    'dia-de-circo-curumim-unidade-249': {
      title: 'Dia de Circo - Curumim Unidade 249',
      text: 'No dia 05 de outubro, o grupo azul vespertino, do Programa Curumim Unidade 249, foi convidado, pelo CRÁS do bairro São Carlos, para um passeio ao circo. Foi um momento de muita diversão, as crianças amaram.',
      images: [
        `${basePath}2023/Dia de Circo - Curumim Unidade 249/image01.webp`,
        `${basePath}2023/Dia de Circo - Curumim Unidade 249/image02.webp`,
        `${basePath}2023/Dia de Circo - Curumim Unidade 249/image03.webp`,
        `${basePath}2023/Dia de Circo - Curumim Unidade 249/image04.webp`,
        `${basePath}2023/Dia de Circo - Curumim Unidade 249/image05.webp`,
        `${basePath}2023/Dia de Circo - Curumim Unidade 249/image06.webp`,
        `${basePath}2023/Dia de Circo - Curumim Unidade 249/image07.webp`,
      ],
    },

    'doacoes-da-semana-da-crianca-curumim-unidade-249': {
      title: 'Doações da Semana da Criança - Curumim Unidade 249',
      text: 'O Programa Curumim Unidade 249 gostaria de agradecer aos amigos voluntários, familiares e principalmente aos nossos amigos da @academiabiggang com as doações das caixas de bombons que fizeram a felicidade das crianças e adolescentes na semana da criança. Nosso muiiito obrigado!',
      images: [
        `${basePath}2023/Doações da Semana da Criança - Curumim Unidade 249/image01.webp`,
        `${basePath}2023/Doações da Semana da Criança - Curumim Unidade 249/image02.webp`,
        `${basePath}2023/Doações da Semana da Criança - Curumim Unidade 249/image03.webp`,
        `${basePath}2023/Doações da Semana da Criança - Curumim Unidade 249/image04.webp`,
        `${basePath}2023/Doações da Semana da Criança - Curumim Unidade 249/image05.webp`,
        `${basePath}2023/Doações da Semana da Criança - Curumim Unidade 249/image06.webp`,
        `${basePath}2023/Doações da Semana da Criança - Curumim Unidade 249/image07.webp`,
        `${basePath}2023/Doações da Semana da Criança - Curumim Unidade 249/image08.webp`,
        `${basePath}2023/Doações da Semana da Criança - Curumim Unidade 249/image09.webp`,
        `${basePath}2023/Doações da Semana da Criança - Curumim Unidade 249/image10.webp`,
      ],
    },

    'semana-da-crianca-curumim-unidade-249': {
      title: 'Semana da Criança - Curumim Unidade 249',
      text: 'E a semana da criança não parou por aí. No dia 11/10 foi a festa das crianças e adolescentes do Programa Curumim Unidade 249, foi super divertido e eles amaram esse momento. Nesse evento, contamos com a colaboração do @sicoob e @grupocsn que fizeram a alegria neste dia com os brinquedos, oficinas de empreendedorismo e presentes, além de amigos voluntários como @amandacristina4668 e @francineleribeiro que nos presentiaram com pipoca, algodão doce e picolés. Gostaríamos de agradecer também ao @panela.sem.tampa. Nosso muito obrigado!!',
      images: [
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image01.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image02.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image03.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image04.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image05.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image06.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image07.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image08.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image09.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image10.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image11.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image12.webp`,
        `${basePath}2023/Semana da Criança - Curumim Unidade 249/image13.webp`,
      ],
    },

    'doacoes-catequese-santa-cecilia': {
      title: 'Doações da Catequese Santa Cecília',
      text: 'Essa semana, tivemos a graça de receber Doações de leite em pó, fornecida pela @cate.quesesantacecilia. Obrigada por essa parceria, Deus abençoe vocês.',
      images: [
        `${basePath}2023/Doações da Catequese Santa Cecília/image01.webp`,
        `${basePath}2023/Doações da Catequese Santa Cecília/image02.webp`,
        `${basePath}2023/Doações da Catequese Santa Cecília/image03.webp`,
        `${basePath}2023/Doações da Catequese Santa Cecília/image04.webp`,
        `${basePath}2023/Doações da Catequese Santa Cecília/image05.webp`,
        `${basePath}2023/Doações da Catequese Santa Cecília/image06.webp`,
      ],
    },

    'mural-vozes': {
      title: 'Mural “Vozes”',
      text: 'Hoje construímos o nosso mural “Vozes”. Os adolescentes tiveram oportunidade de escrever sobre o que sentem, sua relação com o curumim e outros aspectos da vida. Experiência sensacional!',
      images: [
        `${basePath}2023/Mural Vozes/image01.webp`,
        `${basePath}2023/Mural Vozes/image02.webp`,
        `${basePath}2023/Mural Vozes/image03.webp`,
        `${basePath}2023/Mural Vozes/image04.webp`,
        `${basePath}2023/Mural Vozes/image05.webp`,
        `${basePath}2023/Mural Vozes/image06.webp`,
        `${basePath}2023/Mural Vozes/image07.webp`,
        `${basePath}2023/Mural Vozes/image08.webp`,
        `${basePath}2023/Mural Vozes/image09.webp`,
      ],
    },

    'arraia-do-curumim-unidade-249': {
      title: 'Arraiá do Curumim - Unidade 249',
      text: 'No dia 11 de agosto foi realizado o nosso "Arraiá do Curumim Unidade 249"... Teve muita brincadeira, diversão, presentes, comida gostosa e lindas apresentações das nossas crianças e adolescentes. Agradecemos aos nossos amigos voluntários que nos ajudaram a realizar essa grande festança... "Um grande beijo sô".',
      images: [
        `${basePath}2023/Arraiá do Curumim Unidade 249/image01.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image02.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image03.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image04.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image05.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image06.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image07.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image08.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image09.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image10.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image11.webp`,
        `${basePath}2023/Arraiá do Curumim Unidade 249/image12.webp`,
      ],
    },

    'arraia-da-cidadania': {
      title: 'Arraiá da Cidadania',
      text: 'Participação da Casa da Criança e do Adolescente no Arraiá da Cidadania.',
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
      title: 'Arraiá Solidário - Shopping Park Sul',
      text: 'Participação da Casa da Criança e do Adolescente no Arraia Solidário do @shoppingparksul ❤️ Queríamos agradecer a oportunidade de participar deste evento pelo segundo ano consecutivo e poder angariar recursos para a continuação dos projetos da instituição. Obrigado a todos deram uma passadinha por lá e prestigiaram esse lindo evento no Shopping Park Sul. 3 dias de muita alegria, diversão, comida boa além de ajudar a nossa instituição e o @gapcgrupodeapoio 🍲🌽.',
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
