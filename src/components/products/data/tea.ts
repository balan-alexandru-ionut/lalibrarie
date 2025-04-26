import {Tea, TeaCategory} from "@/components/products/tea.ts";
import {
  ALMOND_SLICES,
  ALMONDS,
  ANISE_SEEDS,
  APPLE_PIECES,
  DARK_CHOCOLATE,
  BLACK_PEPPER,
  BLACK_TEA,
  CARAWAY,
  CARDAMOM,
  CHICORY_ROOTS,
  CHOCOLATE_FLAKES,
  CINNAMON,
  CLOVES,
  CORIANDER,
  FLAVORS,
  GINGER,
  GREEN_TEA,
  HAZELNUTS,
  ORANGE_PEEL,
  ORANGE_SLICES,
  PEPPERCORNS,
  PISTACHIOS,
  RED_PEPPER,
  ROSE_BUDS,
  SUGAR_CUBES,
  SUNFLOWER_BUDS,
  VANILLA_COCOA,
  VANILLA_PIECES,
  WHITE_CHOCOLATE,
  COCOA,
  COCONUT_FLAKES,
  FERMENTED_TEA,
  JASMINE_BUDS,
  PINK_ROSE_BUDS, CHAMOMILE
} from "@/components/products/data/ingredients.ts";

export const blackIndianTeas: Tea[] = [
  Tea.blackTea(
    "Assam Kunwal",
    "Proprietatea Kunwal este situatǎ în Jorhat, statul Assam, în sudul râului Brahmaputra. Altitudinea joasǎ de până la 1000 metri deasupra nivelului mǎrii (fapt destul de rar întâlnit pentru Assam), precum și temperaturile destul de reci, garanteazǎ calitǎți foarte bogate si puternice datorate creșterii lente a plantelor.\nAcest ceai este din cea de a doua recoltă, fiind înțepător și tare. Buchetul său rotund are savoare de malț.",
    14,
    TeaCategory.BlackIndia
  ),
  Tea.blackTea(
    "Masala Chai",
    "India este renumită pentru ceaiul aromat, care îți prinde simțurile în mrejele condimentate ale mirodeniilor specific indiene.\nDacă vrei să-ți imaginezi cum se simte India, atunci te provocăm să deguști Masala Chai și să închizi ochii. Arome precum scorțișoară, piper negru, piper roșu, ghimbir, cardamon, anason, lapte și ceai negru te vor transpune direct în spiritul Indiei.",
    12,
    TeaCategory.BlackIndia
  ).withBrewTime(10),
  Tea.blackTea(
    "Butter Truffle",
    "O creație de ceai pentru iubitorii de dulciuri. La fel ca în cazul savurării unei specialități proaspete din cocǎ de prăjituri cu unt și urme de coajă de portocală proaspăt rasă, acesta trebuie savurat pănă la ultima picătură. Melanajul neobișnuit, colorat și abundent de ingrediente savuroase și condimentate face să îți plouă în gură numai privindu-l.",
    14,
    TeaCategory.BlackIndia
  ).withIngredients(BLACK_TEA, PISTACHIOS, CARAWAY, ALMOND_SLICES, CORIANDER, PEPPERCORNS, FLAVORS),
  Tea.blackTea(
    "Caramel Cream",
    "Este pentru cei care iubesc ceaiurile dulci. Conține bucăți de cacao sfǎrâmate și bucǎțele de vanilie ce-i dau un gust divin. Compoziția incomparabilă de arome dulci, cremoase și ușor picante are la bazǎ ceaiurile fǎcute în China - Ceylon și îți dǎ senzația cǎ este un desert tipic franțuzesc.",
    17,
    TeaCategory.BlackIndia
  )
    .withBrewTime(8)
    .withIngredients(BLACK_TEA, SUGAR_CUBES, HAZELNUTS, VANILLA_COCOA),

];

export const blackChinaTeas: Tea[] = [
  Tea.blackTea(
    "Lapsang Souchong",
    "Când se recoltează ceaiul, nu sunt culese cele mai tinere frunze și mugurii, ci frunzele Souchong: frunze mai mature, mai mari, din partea inferioară a arbustilor de ceai.\nDupă fermentație, aceste frunze sunt așezate pe tăvi sau farfurii încinse din fier și prăjite pentru puțin timp, iar apoi ceaiul este afumat cu lemne exotice, bogate în rășini.\nPerioada de afumare este stabilită în funcție de fiecare tip, în mod separat (Lapsang Souchong, Tarry Lapsang Souchong sau Lapsang Souchong Crocodile). Gustul este afumat și condimentat.",
    13,
    TeaCategory.BlackChina
  ),
];

export const blackAromaticTeas: Tea[] = [
  Tea.blackTea(
    "Oriental Spice",
    "Savoarea ușor afumată și aromată a amestecului din China - Ceylon, înnobilată de condimentele din India, întregitǎ de aroma portocalelor alături de gustul cremos de vanilie încântă simțurile oricui.",
    14,
    TeaCategory.BlackAromatic
  ).withIngredients(BLACK_TEA, ORANGE_PEEL, CINNAMON, GINGER, VANILLA_PIECES),
  Tea.blackTea(
    "Vanilla Supremo",
    "Un melanj de frunze atent selecționate de ceai Assam, ușor condimentat și frunze de ceai Ceylon, cu aroma delicată. Un amestec de ceaiuri de cea mai înaltă calitate, înnobilat de aroma fină și tandră a bucățelelor prețioase de vanilie.",
    17,
    TeaCategory.BlackAromatic
  ).withIngredients(BLACK_TEA, VANILLA_PIECES, FLAVORS),
  Tea.blackTea(
    "Emperor's 7 Treasures",
    "Încă din Evul Mediu, numărul 7 a fost un simbol al perfecțiunii și al întregului în lume. Aceste amestec format din cele mai fine ceaiuri verzi și negre este îmbogățit de ingrediente regale și de culorile lor nobile.",
    13,
    TeaCategory.BlackAromatic
  ).withIngredients(BLACK_TEA, GREEN_TEA, ROSE_BUDS, SUNFLOWER_BUDS, FLAVORS),
  Tea.blackTea(
    "Orange Cookies",
    "Acest ceai ne încântă cu bucățele dulci de scorțișoară, coriandru, cardamom, cuișoare și piper roșu, cu mǎiestrie înconjurate de porții generoase de mǎr dulce. Mirosul portocalelor suculente completeazǎ aceastǎ experiențǎ unicǎ a gustului.",
    13,
    TeaCategory.BlackAromatic
  ).withIngredients(BLACK_TEA, APPLE_PIECES, CINNAMON, CORIANDER, FLAVORS, CARDAMOM, ORANGE_SLICES, RED_PEPPER, CLOVES),
  Tea.blackTea(
    "Marzipan Tea",
    "Acest amestec bogat de ceaiuri din Ceylon și China a fost îmbogățit cu felii de migdale și boboci înmiresmați de albăstrele. Cuișoarele și coaja de portocală se armonizează pentru a da un gust perfect. Aroma de nucă definitivează acest amestec aducându-vă căldură în timpul sezonului rece.",
    13,
    TeaCategory.BlackAromatic
  ).withIngredients(BLACK_TEA, ORANGE_PEEL, ALMONDS, CHOCOLATE_FLAKES, RED_PEPPER, FLAVORS),
  Tea.blackTea(
    "Black Tea Spicy Chai",
    "Ceaiul clasic Chai se deosebește printr-o aromă puternic condimentată ce ne poartă direct în India. Gustul intens se datorează ingredientelor aromate precum cuișoare, scorțișoară, ghimbir, cardamom, anason. Pentru a atinge desăvârșirea gustului se adaugă lapte și miere.",
    14,
    TeaCategory.BlackAromatic
  ).withIngredients(BLACK_TEA, ANISE_SEEDS, GINGER, BLACK_PEPPER, CLOVES, CHICORY_ROOTS, FLAVORS),
  Tea.blackTea(
    "Cinnamon Tea",
    "Un clasic, ceaiul negru cu scorțișoară răspunde oricărui standard și este de nelipsit mai ales în preajma sărbătorilor de iarnă. Amestecul puternic de ceaiuri Ceylon-China, asezonat cu scorțișoara de Madagascar creează mixul de arome, pe cât de simplu, pe atât de perfect.",
    13,
    TeaCategory.BlackAromatic
  ).withIngredients(BLACK_TEA, CINNAMON, FLAVORS),
  Tea.blackTea(
    "Bon Tea",
    "Plăcerea gustului ciocolatei și al cocosului ar duce la perfecție imaginea unei vieți perfecte, \"le bon goût de la vie\". Bucurați-vă de această creație cremoasă și fină care poate fi servită cu lapte adăugat savoare ceaiului.",
    14,
    TeaCategory.BlackAromatic
  ).withIngredients(BLACK_TEA, DARK_CHOCOLATE, WHITE_CHOCOLATE, COCOA, COCONUT_FLAKES, FLAVORS),
]

export const fermentedTeas: Tea[] = [
  Tea.baseTea(
    "Fine Jasmine Tea",
    "O variantă mai fină a ceaiului clasic de iasomie, atât în felul în care arată cât și în gust. Frunzele înmiresmate au fost recoltate și procesate mai în profunzime, iar bobocii de iasomie au fost adăugați printr-o sită fină astfel încât ceaiul are un gust mai discret de iasomie. Culoarea este ușor galbenă și băutura împrăștie aroma intensă de iasomie.",
    18,
    TeaCategory.Fermented
  ).withIngredients(FERMENTED_TEA, JASMINE_BUDS),
  Tea.baseTea(
    "Oolong Flower of Asia",
    "Bine cunoscutul ceai chinezesc Oolong fin și ușor picant, alături de notele florale delicate și intense în același timp ale fructului lychee de litchi (litchi) și ale bobocilor de trandafir roz te vor impresiona și purta în visare către relaxare și răsfăț.",
    18,
    TeaCategory.Fermented
  ).withIngredients(FERMENTED_TEA, GREEN_TEA, PINK_ROSE_BUDS, CHAMOMILE, FLAVORS)
]
