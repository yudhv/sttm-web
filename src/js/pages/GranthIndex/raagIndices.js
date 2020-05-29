export default {
  SGGS: {
    name: 'Sri Guru Granth Sahib Jee',
    source: 'G',
    description:
      "Guru Granth is the central spiritual text that is revered by Sikhs unanimously. The 10th Guru of the Sikhs - Guru Gobind Singh, declared that the need for more human teachers for Sikhs had ended, and ceremoniously handed over the spiritual throne to Guru Granth Sahib. Hence, this text's importance is undisputed in the Sikh community. It is the default source for knowledge about unity with the Truth and the way of life for a spiritual seeker.\n\nEven though primarily revered by the Sikhs, it is remarkably religion-agnostic and contains universal messages of social equality, justice, gender indifference, etc that we take for granted today, but were borderline revolutionary in 15th century India that was predominantly orthodox in it's communal belief system.\n\nDue to the voluminous nature of the text, it is important for the reader to understand how it is architected. What follows is turn-by-turn bried summary of the structure of this poetic and spiritual guide. ",
    indices: [
      {
        name: 'Pre Raag Section',
        pages: [1, 13],
        description:
          'Guru Granth Sahib in its default font/page size has a total of 1430 pages. Of those, nearly 1340 pages are given a musical framework based on the Raag (described below). The first 13 pages of the holy book have no musical framework, which may signify their role as an introduction/summary or the central idea of the text that follows. This section is comprised of 3 core hymms.',
        subSets: [
          {
            name: 'Mul Mantra',
            pages: [1],
            description:
              "Mul Mantra (literally 'BASE STATEMENT') is the first and foremost idea shared by the Granth. It is highly recommended that the reader go through it owing to its incredibly succint definition of the Truth.",
          },
          {
            name: 'Jap',
            pages: [1, 8],
            description:
              "Jap is the first hymm of Guru Granth Sahib. It has 38 stanzas that introduce some of the core concepts in Guru Granth's spiritual vernacular. Terms like HUKAM (command), NAAM (name), Sabad (word) are expounded here. This hymm is the first of several hymms recited by Sikhs everyday (signifying its importance). Among other themes, it introduces the reader to the message of a deterministic universe, the importance of love, and the path to enlightenment.",
          },
          {
            name: 'Rehras',
            pages: [8, 12],
            description:
              "Rehras is the second hymm. It speaks of the greatness of the universal Truth and the ways in which one's actions assist in attaining spiritual enlightenment. It elevates the reader's mental outlook, leaving him/her with a fresh and positive view - something we tend to need when the day is about to end. Rehras is recited by Sikhs in the evening.",
          },
          {
            name: 'Sohila',
            pages: [12, 13],
            description:
              'Sohila is the night hymm. It is composed of five stanzas that gradually progress the reader from 1: visualization of the union with Truth, 2 and 3: the singularity of the Universal Reality despite the endless diversity in human philosophies, 4: the importance of NAAM (name), and 5: a celebration of life and the opportunity of union it provides.',
          },
        ],
      },
      {
        name: 'Raag Section',
        pages: [14, 1352],
        description:
          "Music is a first class citizen in Guru Granth Sahib. It is used as a tool to add emotion to the poetic lyrics. With this union of logic (from lyrics) and emotion (from music) the listener goes through a much richer and fulfilling spiritual experience. It must be noted that lyrics are more important than the musical notation, since they hold the message. However, music serves the purpose of a necessary companion to the logical word. Music as an art form has had a very rich history in the Indian subcontinent. It's nature as an emotion influencer was understood early on. Subsets of the ancient Rigveda (c 1500-1200 BC) were set to musical notations.\n\nIn general, the Indian classical music has two foundational elements, RAAG and TALA: \nRAAG is based on notes (including microtones) and forms the fabric of the melodic structure.\nTALA provides the rhythm (improvisation using time).\n\nGuru Granth Sahib is predominantly structure using RAAG. Each RAAG is meant to elicit certain emotions in the listener. What follows is a brief description of each RAAG and the emotions it portrays. The hymms within these RAAGs tend to signify similar logical meaning as the RAAG they are situated in.",
        subSets: [
          {
            name: 'Raag Sri',
            pages: [14, 94],
            description:
              'The basis of this Raag is steeped in the traditions of mainstream Indian Classical music. Sri Raag is serious and thought provoking in its nature and creates an atmosphere where the listener is led to heed the advice given therein. The listener (the mind) is made aware of the truth of the message is given a sense of humility and gained knowledge.',
            subSets: [
              {
                name: 'Sri Raag Ki Vaar',
                pages: [83, 91],
              },
            ],
          },
          {
            name: 'Raag Maajh',
            pages: [94, 151],
            description:
              "Raag Majh was composed by the Fifth Sikh Guru (Guru Arjun Dev). The Raag’s origins are based in Punjabi Folk Music and its essence: the game of waiting and yearning for the return of a loved one.\n\nThe feelings evoked by this Raag have often been compared to that of a mother waiting for her child's return after a long period of separation. While she hopes for the child’s return, she is also painfully aware of the uncertainty that the child may not come back. This Raag brings to life the emotion of extreme love, combined with the sorrow and anguish of separation from the beloved.",
            subSets: [
              {
                name: 'Vaar Manjh Ki',
                pages: [137, 150],
                highlight: 5589,
              },
            ],
          },
          {
            name: 'Raag Gauri',
            pages: [151, 347],
            description:
              'Gauri creates a mood where the listener is encouraged to strive harder in order to achieve an objective. Despite this encouragement, the Raag tries to prevent the ego from increasing. This creates an atmosphere where the listener is encouraged toward humble action.',
            subSets: [
              {
                name: 'Gauri Ki Vaar M4',
                pages: [300, 317],
                highlight: 13721,
              },
              {
                name: 'Gauri Ki Vaar M5',
                pages: [318, 323],
              },
            ],
          },
          {
            name: 'Raag Aasa',
            pages: [347, 489],
            description:
              'Aasa has strong emotions of inspiration. A very important Raag, Aasa gives the listener a determination to ignore any excuses and continue down the path of necessary action. Feelings of passion and zeal are felt - which are incredibly useful when the listener is on a difficult path (often the case for spiritual seekers).',
            subSets: [
              {
                name: 'Aasa Ki Vaar',
                pages: [462, 475],
                highlight: 20756,
              },
            ],
          },

          {
            name: 'Raag Gujari',
            pages: [489, 527],
            description:
              'Gujari instills a feeling of desperation. It is often used to make the listener realise the incessant passing of time and thereby realise the value of it. Such a mood brings the listener to an awareness of their own death, making them utilize their remaining ‘life time’ more wisely. Yet another way of pushing the listener toward action.',
            subSets: [
              {
                name: 'Gujari Ki Vaar',
                pages: [508, 517],
                highlight: 22620,
              },
            ],
          },
          {
            name: 'Raag Devagandhari',
            pages: [527, 537],
            description:
              'Devgandhari conveys the feeling of satisfaction. The incredible peace and tranquility observed by the saint authors of Guru Granth Sahib after their union with the beloved is conveyed in Devagandhari. Depiction of this state of mind makes the listener feel empowered and passionate toward the Truth.',
          },
          {
            name: 'Raag Bihagara',
            pages: [537, 557],
            description:
              'Bihagara elicits pangs of separation and the need to find peace and understanding. It also conveys the beauty of the eventual union which helps eradicate the sense of yearning and desolation due to separation from the beloved.',
            subSets: [
              {
                name: 'Bihagare Ki Vaar',
                pages: [548, 556],
                highlight: 24137,
              },
            ],
          },
          {
            name: 'Raag Vadhans',
            pages: [557, 594],
            descriptions:
              "Vadhans Raag houses extreme spritual romanticism. The self is compared to a bride and the Truth/God the husband. The bride must leave her birth home (materialism) to join with her husband. The bride's bodily ornaments are symbolic of a love-imbued virtuous mind that is ready for union with the husband - the beloved. The sad state of a bride who never meets her true husband is also depicted in Raag Vadhans.",
            subSets: [
              {
                name: 'Vadahans Ki Vaar',
                pages: [585, 594],
                highlight: 25541,
              },
            ],
          },
          {
            name: 'Raag Sorath',
            pages: [595, 660],
            description:
              'Sorath is devotional in nature. It is used to expound the various features of the Truth and make the listener aware of the myriad methods of meditating on the beloved. The merits of God and His rememberance through these merits is a common theme in Sorath. Guru Granth puts great importance in the repetitve remembrance of God, through which one is supposed to inherit His merits.',
            subSets: [
              {
                name: 'Raag Sorath Vaar',
                pages: [642, 654],
                highlight: 27772,
              },
            ],
          },
          {
            name: 'Raag Dhanasari',
            pages: [660, 696],
            description:
              'Dhanasari has a sense of sacrifice. The wealth and power of the Truth is shown as much bigger than the self, thus encouraging the listener to entertain the idea of selflessness, contentment and sacrificial humility. It is no wonder that the `Aarti` hymms are in this Raag. Aarti in Guru Granth is an adornment of the Creator using the vast nature as the ornaments',
          },
          {
            name: 'Raag Jaitsri',
            pages: [696, 711],
            description:
              'Jaitsri conveys the heartfelt emotion of not being able to live without someone. Its mood is that of dependence and an overwhelming sense of desperately reaching out to be with that person.',
            subSets: [
              {
                name: 'Jaitsri M5 Vaar Saloka Naal',
                pages: [705, 710],
                highlight: 30297,
              },
            ],
          },
          {
            name: 'Raag Todi',
            pages: [711, 719],
            description:
              'Todi Raag is used to convey wise messages in a serious tone. The falsehood of materialism (Maya) is a recurrning theme in this Raag.',
          },
          {
            name: 'Raag Bairari',
            pages: [719, 721],
            description:
              'Bairari is a motivational Raag. It stimulates the listener to continue with the task of loving devotion toward God. There is a sense of achievement, but no vanity. Accomplishment, but also the desire to keep going.',
          },
          {
            name: 'Raag Tilang',
            pages: [721, 728],
            description:
              "Tilang has a brooding tone. It takes the listener to a sad, but beautiful state. In this bittersweet nature of Tilang, a listener feels detachment from the 'bitter' materialism and attachment to the 'sweet' Truth.",
          },
          {
            name: 'Raag Suhi',
            pages: [728, 795],
            subSets: [
              {
                name: 'Vaar Suhi Ki',
                pages: [785, 792],
                highlight: 33325,
              },
            ],
          },
          {
            name: 'Raag Bilaval',
            pages: [795, 859],
            subSets: [
              {
                name: 'Bilaval Ki Vaar',
                pages: [849, 855],
              },
            ],
          },
          {
            name: 'Raag Gond',
            pages: [859, 876],
          },
          {
            name: 'Raag Ramkali',
            pages: [876, 975],
            subSets: [
              {
                name: 'Ramkali Ki Vaar M3',
                pages: [947, 956],
              },
              {
                name: 'Ramkali Ki Vaar M5',
                pages: [957, 966],
              },
              {
                name: 'Ramkali Ki Vaar Rai Balvand',
                pages: [966, 968],
                highlight: 41341,
              },
            ],
          },
          {
            name: 'Raag Nat Narain',
            pages: [975, 984],
          },
          {
            name: 'Raag Mali Gaura',
            pages: [984, 989],
          },
          {
            name: 'Raag Maru',
            pages: [989, 1107],
            subSets: [
              {
                name: 'Maru Vaar M3',
                pages: [1086, 1094],
                highlight: 46419,
              },
            ],
          },
          {
            name: 'Raag Tukhari',
            pages: [1107, 1118],
          },
          {
            name: 'Raag Kedara',
            pages: [1118, 1125],
          },
          {
            name: 'Raag Bhairon',
            pages: [1125, 1168],
          },
          {
            name: 'Raag Basant',
            pages: [1168, 1197],
            subSets: [
              {
                name: 'Basant Ki Vaar',
                pages: [1193, 1193],
                highlight: 51311,
              },
            ],
          },
          {
            name: 'Raag Sarang',
            pages: [1197, 1254],
            subSets: [
              {
                name: 'Sarang Ki Vaar',
                pages: [1237, 1251],
                highlight: 52956,
              },
            ],
          },
          {
            name: 'Raag Mallar',
            pages: [1254, 1294],
            subSets: [
              {
                name: 'Vaar Mallar Ki',
                pages: [1278, 1291],
                highlight: 54666,
              },
            ],
          },
          {
            name: 'Raag Kanara',
            pages: [1294, 1319],
            subSets: [
              {
                name: 'Kanare Ki Vaar',
                pages: [1312, 1318],
                highlight: 56001,
              },
            ],
          },
          {
            name: 'Raag Kalian',
            pages: [1319, 1327],
          },
          {
            name: 'Raag Prabhati',
            pages: [1327, 1352],
          },
          {
            name: 'Raag Jaijavanti',
            pages: [1352, 1352],
          },
        ],
      },
      {
        name: 'Post Raag Section',
        pages: [1353, 1430],
        subSets: [
          {
            name: 'Salok Sehaskriti Mahalla 1',
            pages: [1353, 1353],
          },
          {
            name: 'Salok Sehaskriti Mahalla 5',
            pages: [1353, 1360],
          },
          {
            name: 'Mahalla 5 Gaatha',
            pages: [1360, 1361],
          },
          {
            name: 'Funehe Mahalla 5',
            pages: [1361, 1363],
          },
          {
            name: 'Choubole Mahalla 5',
            pages: [1363, 1364],
          },
          {
            name: 'Salok Bhagat Kabir Jio Ke',
            pages: [1364, 1377],
          },
          {
            name: 'Salok Seikh Farid Ke',
            pages: [1377, 1385],
          },
          {
            name: 'Swayyee Sri Mukh Baak Mahalla 5',
            pages: [1385, 1410],
          },
          {
            name: 'Salok Vaaran Te Vadeek',
            pages: [1410, 1426],
          },
          {
            name: 'Salok Mahalla 9',
            pages: [1426, 1429],
            highlight: 60214,
          },
          {
            name: 'Raag Maala',
            pages: [1429, 1430],
            highlight: 60342,
          },
        ],
      },
    ],
  },
  DG: {
    name: 'Sri Dasam Granth Sahib',
    source: 'D',
    indices: [
      { name: 'Jaap Sahib', pages: [1, 10] },
      { name: 'Akal Ustat', pages: [11, 38] },
      { name: 'Bachittar Natak', pages: [39, 73] },
      { name: 'Chandi Charitar Ukti Bilas', pages: [74, 100] },
      { name: 'Chandi Charitar II', pages: [100, 119], highlight: 78950 },
      {
        name: 'Vaar Sri Bhagouti Jee kee',
        pages: [119, 127],
        highlight: 80052,
      },
      { name: 'Gyan Prabodh', pages: [127, 155], highlight: 80410 },
      { name: 'Ath Chaubis Avtar', pages: [155, 611], highlight: 81827 },
      { name: 'Brahma Avtar', pages: [611, 635], highlight: 100482 },
      { name: 'Rudra Avtar', pages: [635, 709], highlight: 101932 },
      { name: 'Shabad Patshahi 10', pages: [709, 712], highlight: 105804 },
      { name: '33 Swayyee', pages: [712, 716], highlight: 105892 },
      { name: 'Khalsa Mahima', pages: [716, 717], highlight: 106028 },
      {
        name: 'Ath Sri Shastar Naam Mala Purana Likhyate',
        pages: [717, 809],
        highlight: 106046,
      },
      { name: 'Sri Charitropakhyan', pages: [809, 1386] },
      { name: 'Chaupai', pages: [1386, 1388], highlight: 140033 },
      { name: 'Zafarnamah', pages: [1389, 1389] },
      { name: 'Hikayat', pages: [1394, 1428], highlight: 140380 },
    ],
  },
};
