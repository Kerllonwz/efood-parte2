import { Restaurant } from '../types'

export const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'Bella Tavola Italiana',
    destacado: true,
    tipo: 'italiana',
    avaliacao: 4.7,
    descricao:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos.',
    capa: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana/capa.jpeg',
    cardapio: [
      {
        id: 1,
        foto: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana/1.webp',
        preco: 69.9,
        nome: 'Ravioli al Tartufo Nero',
        descricao:
          'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana.',
        porcao: '1 a 2 pessoas',
      },
      {
        id: 2,
        foto: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana/2.jpg',
        preco: 56.9,
        nome: 'Spaghetti alla Carbonara',
        descricao:
          'O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso.',
        porcao: '1 a 2 pessoas',
      },
      {
        id: 3,
        foto: 'https://api-ebac.vercel.app/efood/bella_tavola_italiana/3.jpg',
        preco: 74.9,
        nome: 'Risotto ai Funghi Porcini',
        descricao:
          'Arroz Arborio cozido lentamente com cogumelos porcini, vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.',
        porcao: '1 a 2 pessoas',
      },
    ],
  },
  {
    id: 2,
    titulo: 'Casa das Delícias Árabes',
    destacado: false,
    tipo: 'árabe',
    avaliacao: 4.8,
    descricao:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe que proporciona uma verdadeira experiência culinária do Oriente Médio.',
    capa: 'https://api-ebac.vercel.app/efood/casa_delicias_arabes/capa.jpeg',
    cardapio: [
      {
        id: 8,
        foto: 'https://api-ebac.vercel.app/efood/casa_delicias_arabes/1.jpg',
        preco: 49.9,
        nome: 'Mezze Platter',
        descricao:
          'Seleção de aperitivos tradicionais árabes: homus, babaganush, tabule, falafel, azeitonas e pão pita fresco.',
        porcao: '2 a 4 pessoas',
      },
      {
        id: 9,
        foto: 'https://api-ebac.vercel.app/efood/casa_delicias_arabes/2.jpg',
        preco: 54.9,
        nome: 'Kebab de Cordeiro',
        descricao:
          'Pedaços de cordeiro marinados em especiarias e ervas, grelhados à perfeição e servidos com arroz basmati.',
        porcao: '1 a 2 pessoas',
      },
      {
        id: 10,
        foto: 'https://api-ebac.vercel.app/efood/casa_delicias_arabes/3.webp',
        preco: 45.9,
        nome: 'Shawarma de Frango',
        descricao:
          'Finas fatias de frango marinadas em especiarias e grelhadas lentamente. Servido com pão pita e molho tahine.',
        porcao: '1 pessoa',
      },
    ],
  },
  {
    id: 3,
    titulo: 'Sakura Sushi House',
    destacado: false,
    tipo: 'japonês',
    avaliacao: 4.9,
    descricao:
      'A Sakura Sushi House é um sofisticado e autêntico restaurante japonês que oferece uma experiência culinária imersiva.',
    capa: 'https://api-ebac.vercel.app/efood/sakura_sushi_house/capa.jpeg',
    cardapio: [
      {
        id: 11,
        foto: 'https://api-ebac.vercel.app/efood/sakura_sushi_house/1.jpg',
        preco: 89.9,
        nome: 'Sushi e Sashimi Combinado',
        descricao:
          'Seleção de peças elaboradas por nossos sushimen, incluindo atum, salmão, peixe branco e camarão frescos.',
        porcao: '1 a 2 pessoas',
      },
      {
        id: 12,
        foto: 'https://api-ebac.vercel.app/efood/sakura_sushi_house/2.jpg',
        preco: 79.9,
        nome: 'Tempura de Legumes e Camarão',
        descricao:
          'Legumes e camarões frescos empanados em uma massa leve e frita à perfeição. Acompanha molho tentsuyu.',
        porcao: '1 a 2 pessoas',
      },
      {
        id: 13,
        foto: 'https://api-ebac.vercel.app/efood/sakura_sushi_house/3.jpg',
        preco: 69.9,
        nome: 'Teishoku de Tonkatsu',
        descricao:
          'Lombo de porco empanado e frito, servido com arroz japonês, misoshiru e tsukemono.',
        porcao: '1 pessoa',
      },
    ],
  },
  {
    id: 4,
    titulo: 'Cantinho Lusitano',
    destacado: false,
    tipo: 'português',
    avaliacao: 4.8,
    descricao:
      'O Cantinho Lusitano é um charmoso e tradicional restaurante português que celebra a rica herança culinária de Portugal.',
    capa: 'https://api-ebac.vercel.app/efood/cantinho_lusitano/capa.jpeg',
    cardapio: [
      {
        id: 14,
        foto: 'https://api-ebac.vercel.app/efood/cantinho_lusitano/1.jpeg',
        preco: 74.9,
        nome: 'Bacalhau à Gomes de Sá',
        descricao:
          'Lascas de bacalhau cozido, batatas, cebola, alho, azeite e azeitonas pretas. Finalizado com salsa e ovos cozidos.',
        porcao: '1 a 2 pessoas',
      },
      {
        id: 15,
        foto: 'https://api-ebac.vercel.app/efood/cantinho_lusitano/2.jpg',
        preco: 64.9,
        nome: 'Arroz de Pato',
        descricao:
          'Arroz, carne de pato desfiada, chouriço e cenoura, cozido lentamente no forno para absorver todos os sabores.',
        porcao: '1 a 2 pessoas',
      },
    ],
  },
  {
    id: 5,
    titulo: 'Piazza del Forno',
    destacado: false,
    tipo: 'pizzaria',
    avaliacao: 4.7,
    descricao:
      'A Piazza del Forno é uma pizzaria acolhedora com pizzas artesanais preparadas com ingredientes frescos e assadas em forno a lenha.',
    capa: 'https://api-ebac.vercel.app/efood/piazza/capa.png',
    cardapio: [
      {
        id: 17,
        foto: 'https://api-ebac.vercel.app/efood/piazza/1.jpg',
        preco: 49.9,
        nome: 'Pizza Margherita',
        descricao:
          'Molho de tomate caseiro, muçarela fresca, folhas de manjericão e um fio de azeite. Simples e deliciosa.',
        porcao: '1 a 2 pessoas',
      },
      {
        id: 18,
        foto: 'https://api-ebac.vercel.app/efood/piazza/2.webp',
        preco: 59.9,
        nome: 'Pizza Quatro Queijos',
        descricao:
          'Muçarela, gorgonzola, parmesão e provolone, derretidos sobre uma massa fina e crocante.',
        porcao: '1 a 2 pessoas',
      },
      {
        id: 19,
        foto: 'https://api-ebac.vercel.app/efood/piazza/3.jpg',
        preco: 64.9,
        nome: 'Pizza Calabresa',
        descricao:
          'Rodelas de calabresa, cebola roxa fatiada, azeitonas pretas e muçarela derretida. Assada em forno a lenha.',
        porcao: '1 a 2 pessoas',
      },
    ],
  },
  {
    id: 6,
    titulo: 'Jardim da Terra',
    destacado: true,
    tipo: 'vegano',
    avaliacao: 4.8,
    descricao:
      'O Jardim da Terra é um restaurante vegano que oferece pratos deliciosos e criativos com ingredientes frescos, orgânicos e sazonais.',
    capa: 'https://api-ebac.vercel.app/efood/jardim_terra/capa.png',
    cardapio: [
      {
        id: 20,
        foto: 'https://api-ebac.vercel.app/efood/jardim_terra/1.webp',
        preco: 38.9,
        nome: 'Hambúrguer de Grão-de-Bico',
        descricao:
          'Grão-de-bico, cenoura, cebola e especiarias, servido em pão vegano com alface, tomate e molho caseiro.',
        porcao: '1 pessoa',
      },
      {
        id: 21,
        foto: 'https://api-ebac.vercel.app/efood/jardim_terra/2.jpeg',
        preco: 42.9,
        nome: 'Lasanha de Berinjela',
        descricao:
          'Camadas de berinjela grelhada, molho de tomate caseiro e creme de castanha-de-caju, assadas até ficar douradas.',
        porcao: '1 a 2 pessoas',
      },
      {
        id: 22,
        foto: 'https://api-ebac.vercel.app/efood/jardim_terra/3.jpg',
        preco: 35.9,
        nome: 'Bowl de Cogumelos e Quinoa',
        descricao:
          'Quinoa cozida, cogumelos salteados, espinafre, abacate e tomates-cereja com molho de ervas frescas.',
        porcao: '1 pessoa',
      },
    ],
  },
]
