/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import goldenSculpture from './assets/images/golden_sculpture_1779274970771.png';
import goldLeafMural from './assets/images/gold_leaf_mural_1779274992858.png';
import texturalWall from './assets/images/textural_wall_1779275011930.png';
import luxuryConcept from './assets/images/luxury_concept_1779275035138.png';

import lippanMural from './assets/images/lippan_mural_art_1779276007490.png';
import siporexStone from './assets/images/siporex_stone_carving_1779276043417.png';
import fiberMural from './assets/images/fiber_wall_mural_1779276072868.png';

import fiberPdf from './assets/pdf/FIBER WALL MURAL.pdf';
import lippanPdf from './assets/pdf/Lippan_Work.pdf';
import sculpturesPdf from './assets/pdf/Sculptures_art.pdf';
import siporexPdf from './assets/pdf/Siporex_Wall.pdf';
import wallSculpturePdf from './assets/pdf/Wall_Sculpture.pdf';
import woodenKitchenWearPdf from './assets/pdf/Wooden kitchenware_GlobalArtCreation.pdf';

import { SignatureCategory, ServiceDetail, ArchiveItem } from './types';

export { 
  goldenSculpture, 
  goldLeafMural, 
  texturalWall, 
  luxuryConcept,
  lippanMural,
  siporexStone,
  fiberMural
};

export const SIGNATURE_CATEGORIES: SignatureCategory[] = [
  {
    id: 'lippan-kaam',
    num: '01',
    title: 'LIPPAN WORK',
    description: 'A traditional masterpiece of Kutch, known as \"Lippan Kaam\" or \"Chittar Kaam\". Exquisitely handcrafted with mud, clay wash, and inlaid mirror glasses.',
    year: '2009',
    image: lippanMural,
    location: 'Gandhidham Atelier, Kutch'
  },
  {
    id: 'siporex-carving',
    num: '02',
    title: 'SIPOREX WALL ART',
    description: 'Custom three-dimensional stone carving or mural hand-carved into lightweight aerated concrete blocks. Mimics ancient cave sculpture with timeless elegance.',
    year: '2015',
    image: siporexStone,
    location: 'Sienna Residences, UK'
  },
  {
    id: 'fiber-mural',
    num: '03',
    title: 'FIBER WALL MURAL',
    description: 'Decorative, three-dimensional artworks and heavy-duty coverings crafted from advanced glass-reinforced plastic (FRP) and multi-tonal custom metallic finishes.',
    year: '2018',
    image: fiberMural,
    location: 'Atrium Heights, UAE'
  },
  {
    id: 'metal-sculpture',
    num: '04',
    title: 'METAL SCULPTURE',
    description: 'Bespoke hand-hammered brass, copper, and bronze organic structures that command focus and define architectural spaces.',
    year: '2021',
    image: goldenSculpture,
    location: 'Corporate Lobby, IN'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    num: '01',
    title: 'Wall Sculptures',
    description: 'We can find the reference to wall sculpture in ancient buildings during the rule of Egyptian Pharaohs. Even in Greek classics, we can reference to wall sculptures.',
    tags: ['MURAL', 'RELIEF', '3D WALL'],
    image: goldLeafMural,
    pdf: wallSculpturePdf
  },
  {
    num: '02',
    title: 'Sculptures',
    description: 'Sculpture is the branch of the visual arts that operates in three dimensions. Sculpture is the three-dimensional art work which is physically presented in the dimensions of height, width and depth. It is one of the plastic arts.',
    tags: ['FIBER', 'METAL', 'WOOD', 'STONE'],
    image: goldenSculpture,
    pdf: sculpturesPdf
  },
  {
    num: '03',
    title: 'Fiber Wall Mural',
    description: 'Fiber wall murals are decorative, three-dimensional artworks and heavy-duty coverings crafted from glass-reinforced plastic (FRP) or woven fabrics.',
    tags: ['COATING', 'FRP', 'DECORATIVE'],
    image: fiberMural,
    pdf: fiberPdf
  },
  {
    num: '04',
    title: 'Lippan Work',
    description: 'Mud and mirror work is known as "Lippan Kaam". History of Lippan Kaam: It is a traditional mural craft of Kutch. It is also called "Chittar Kaam".',
    tags: ['TRADITIONAL PILLARS', 'MDF PANEL', 'WALL'],
    image: lippanMural,
    pdf: lippanPdf
  },
  {
    num: '05',
    title: 'Siporex Wall',
    description: 'Siporex wall art is a custom, three-dimension stone carving or mural hand-carved into lightweight aerated concrete blocks (Siporex). It mimics the look and feel of ancient cave paintings or heavy stone sculptures but remains lightweight, easy to install, and fully washable.',
    tags: ['STONE CARVING', 'LIGHTWEIGHT', 'WASHABLE'],
    image: siporexStone,
    pdf: siporexPdf
  },
  {
    num: '06',
    title: 'Natural Elegant Sustainable',
    description: 'Eco-conscious artistic creations that blend sustainability with elegant design. Our natural materials and sustainable practices ensure that every artwork contributes to a healthier environment while maintaining the highest standards of aesthetic beauty and craftsmanship.',
    tags: ['ECO-FRIENDLY', 'SUSTAINABLE', 'NATURAL'],
    image: luxuryConcept,
    pdf: woodenKitchenWearPdf
  }
];

export const ARCHIVE_COLLECTIONS: ArchiveItem[] = [
  {
    id: 'lippan-arch',
    title: 'Lippan Mud-Mirror Art',
    series: 'SERIES 24 / 01',
    image: lippanMural,
    description: 'A dedicated exploration of authentic Kutchi heritage art using specialized clay modeling, fine lines, and hand-cut mirrors designed for focal pillars and rooms.',
    materials: ['Natural Clay', 'Traditional Mirrors', 'Premium Binder coating'],
    dimensions: 'Custom sizing to fit structural columns & panels',
    specSection: 'Best suited for main living room features, traditional lounges, and structural pillars.'
  },
  {
    id: 'siporex-arch',
    title: 'Siporex Stone Carvings',
    series: 'SERIES 24 / 02',
    image: siporexStone,
    description: 'Lightweight stone carving detailing complex organic patterns reminiscent of heritage cave relief models, built to be lightweight and completely washable.',
    materials: ['Aerated Autoclaved Concrete', 'Premium Stone sealers', 'Mineral Wash pigments'],
    dimensions: 'Variable blocks tailored to your blueprint requirements',
    specSection: 'Designed for double-height entrances, patio screens, and wellness rooms.'
  },
  {
    id: 'fiber-mural-arch',
    title: 'Fiberglass Murals',
    series: 'SERIES 24 / 03',
    image: fiberMural,
    description: 'Highly resilient fiber wall murals with striking three-dimensional geometry, heavy duty layers, and fluid high-gloss gradients.',
    materials: ['Glass-Reinforced Plastic (FRP)', 'High-shine Metallic pigments', 'Fibre mesh backing'],
    dimensions: 'Modular sections for easy mounting on drywall setups',
    specSection: 'Ideal for premium commercial reception backdrops, hotel spaces, and high-density hallways.'
  }
];

export const TESTIMONIAL_CRAFT = {
  visionTitle: 'Where Heritage Meets Architectural Luxury',
  visionSub: 'GLOBAL ART CREATION is a premium art and sculpture studio based in Gandhidham, Kutch, Gujarat, specializing in handcrafted artistic installations that blend traditional craftsmanship with modern architectural aesthetics. From luxury wall sculptures and fiber murals to intricate Lippan art and textured Siporex wall canvases, every artwork is designed to bring depth, elegance, and artistic identity into contemporary spaces.',
  visionSub2: 'Our creations are inspired by the rich artistic heritage of Kutch while embracing modern design sensibilities to craft immersive visual experiences for residential, commercial, hospitality, and interior environments. With a strong focus on detail, texture, and craftsmanship, we transform ordinary walls and spaces into timeless artistic statements that leave a lasting impression.',
  quote: '\"Crafted with passion, inspired by heritage, and designed to elevate every space through art.\"',
  stats: [
    { value: '500+', label: 'GLOBAL PROJECTS' },
    { value: '100%', label: 'HANDCRAFTED' }
  ]
};
