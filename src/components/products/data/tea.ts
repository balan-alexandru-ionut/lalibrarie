import { Tea, TeaCategory } from '@/components/products/tea.ts'
import {
  ALMOND_SLICES,
  ALMONDS,
  ANISE_SEEDS,
  APPLE_PIECES,
  BLACK_PEPPER,
  BLACK_TEA,
  BOURBON_VANILLA,
  CANDIED_STRAWBERRY_SLICES,
  CANE_SUGAR,
  CARAMEL,
  CARAWAY,
  CARDAMOM,
  CHAMOMILE,
  CHICORY_ROOTS,
  CHINA_SENCHA,
  CHOCOLATE_FLAKES,
  CINNAMON,
  CLOVES,
  COCOA,
  COCOA_BITS,
  COCONUT_FLAKES,
  CORIANDER,
  DARK_CHOCOLATE,
  DEHYDRATED_CHERRIES,
  DEHYDRATED_RASPBERRY,
  DEHYDRATED_STRAWBERRY,
  FERMENTED_TEA,
  FLAVORS,
  GINGER,
  GREEN_ROOIBOS,
  GREEN_TEA,
  HAZELNUTS,
  INVERTED_SUGAT,
  JASMINE,
  JASMINE_BUDS,
  KOMBUCHA_POWDER,
  LEMON_FLAVOR,
  LEMON_GRASS,
  LEMON_PEEL,
  LUNG_CHING,
  LYCHEE,
  MALLOW,
  MANGO_FLAKES,
  MANGO_PIECES,
  MARIGOLD,
  MINT,
  NUTMEG,
  ORANGE_FLAVORS,
  ORANGE_PEEL,
  ORANGE_SLICES,
  PAI_MU_TAN,
  PAPAYA_PINEAPPLE_CUBES,
  PEPPERCORNS,
  PINEAPPLE_FLAKES,
  PINEAPPLE_PIECES,
  PINK_PEPPER,
  PINK_ROSE_BUDS,
  PISTACHIOS,
  POMEGRANATE_FLOWERS,
  POMEGRANATE_SEEDS,
  RED_PEPPER,
  ROOIBOS,
  ROSE_BUDS,
  ROSE_PETALS,
  ROSES,
  SAFFRON,
  SMASHED_HAZLENUTS,
  SUGAR,
  SUGAR_CUBES,
  SUNFLOWER_BUDS,
  SUNFLOWER_INFLORESCENCE,
  SUNFLOWER_PETALS,
  VANILLA_COCOA,
  VANILLA_FLAVOR,
  VANILLA_PIECES,
  WHITE_CHOCOLATE,
  WHITE_TEA,
  YUNNAN,
} from '@/components/products/data/ingredients.ts'

export const blackIndianTeas: Tea[] = [
  Tea.blackTea(
    'Assam Kunwal',
    'Proprietatea Kunwal este situatǎ în Jorhat, statul Assam, în sudul râului Brahmaputra. Altitudinea joasǎ de până la 1000 metri deasupra nivelului mǎrii (fapt destul de rar întâlnit pentru Assam), precum și temperaturile destul de reci, garanteazǎ calitǎți foarte bogate si puternice datorate creșterii lente a plantelor.\nAcest ceai este din cea de a doua recoltă, fiind înțepător și tare. Buchetul său rotund are savoare de malț.',
    14,
    TeaCategory.BlackIndia,
  ),
  Tea.blackTea(
    'Masala Chai',
    'India este renumită pentru ceaiul aromat, care îți prinde simțurile în mrejele condimentate ale mirodeniilor specific indiene.\nDacă vrei să-ți imaginezi cum se simte India, atunci te provocăm să deguști Masala Chai și să închizi ochii. Arome precum scorțișoară, piper negru, piper roșu, ghimbir, cardamon, anason, lapte și ceai negru te vor transpune direct în spiritul Indiei.',
    12,
    TeaCategory.BlackIndia,
  ).withBrewTime(10),
  Tea.blackTea(
    'Butter Truffle',
    'O creație de ceai pentru iubitorii de dulciuri. La fel ca în cazul savurării unei specialități proaspete din cocǎ de prăjituri cu unt și urme de coajă de portocală proaspăt rasă, acesta trebuie savurat pănă la ultima picătură. Melanajul neobișnuit, colorat și abundent de ingrediente savuroase și condimentate face să îți plouă în gură numai privindu-l.',
    14,
    TeaCategory.BlackIndia,
  ).withIngredients(BLACK_TEA, PISTACHIOS, CARAWAY, ALMOND_SLICES, CORIANDER, PEPPERCORNS, FLAVORS),
  Tea.blackTea(
    'Caramel Cream',
    'Este pentru cei care iubesc ceaiurile dulci. Conține bucăți de cacao sfǎrâmate și bucǎțele de vanilie ce-i dau un gust divin. Compoziția incomparabilă de arome dulci, cremoase și ușor picante are la bazǎ ceaiurile fǎcute în China - Ceylon și îți dǎ senzația cǎ este un desert tipic franțuzesc.',
    17,
    TeaCategory.BlackIndia,
  )
    .withBrewTime(8)
    .withIngredients(BLACK_TEA, SUGAR_CUBES, HAZELNUTS, VANILLA_COCOA),
]

export const blackChinaTeas: Tea[] = [
  Tea.blackTea(
    'Lapsang Souchong',
    'Când se recoltează ceaiul, nu sunt culese cele mai tinere frunze și mugurii, ci frunzele Souchong: frunze mai mature, mai mari, din partea inferioară a arbustilor de ceai.\nDupă fermentație, aceste frunze sunt așezate pe tăvi sau farfurii încinse din fier și prăjite pentru puțin timp, iar apoi ceaiul este afumat cu lemne exotice, bogate în rășini.\nPerioada de afumare este stabilită în funcție de fiecare tip, în mod separat (Lapsang Souchong, Tarry Lapsang Souchong sau Lapsang Souchong Crocodile). Gustul este afumat și condimentat.',
    13,
    TeaCategory.BlackChina,
  ),
]

export const blackAromaticTeas: Tea[] = [
  Tea.blackTea(
    'Oriental Spice',
    'Savoarea ușor afumată și aromată a amestecului din China - Ceylon, înnobilată de condimentele din India, întregitǎ de aroma portocalelor alături de gustul cremos de vanilie încântă simțurile oricui.',
    14,
    TeaCategory.BlackAromatic,
  ).withIngredients(BLACK_TEA, ORANGE_PEEL, CINNAMON, GINGER, VANILLA_PIECES),
  Tea.blackTea(
    'Vanilla Supremo',
    'Un melanj de frunze atent selecționate de ceai Assam, ușor condimentat și frunze de ceai Ceylon, cu aroma delicată. Un amestec de ceaiuri de cea mai înaltă calitate, înnobilat de aroma fină și tandră a bucățelelor prețioase de vanilie.',
    17,
    TeaCategory.BlackAromatic,
  ).withIngredients(BLACK_TEA, VANILLA_PIECES, FLAVORS),
  Tea.blackTea(
    "Emperor's 7 Treasures",
    'Încă din Evul Mediu, numărul 7 a fost un simbol al perfecțiunii și al întregului în lume. Aceste amestec format din cele mai fine ceaiuri verzi și negre este îmbogățit de ingrediente regale și de culorile lor nobile.',
    13,
    TeaCategory.BlackAromatic,
  ).withIngredients(BLACK_TEA, GREEN_TEA, ROSE_BUDS, SUNFLOWER_BUDS, FLAVORS),
  Tea.blackTea(
    'Orange Cookies',
    'Acest ceai ne încântă cu bucățele dulci de scorțișoară, coriandru, cardamom, cuișoare și piper roșu, cu mǎiestrie înconjurate de porții generoase de mǎr dulce. Mirosul portocalelor suculente completeazǎ aceastǎ experiențǎ unicǎ a gustului.',
    13,
    TeaCategory.BlackAromatic,
  ).withIngredients(
    BLACK_TEA,
    APPLE_PIECES,
    CINNAMON,
    CORIANDER,
    FLAVORS,
    CARDAMOM,
    ORANGE_SLICES,
    RED_PEPPER,
    CLOVES,
  ),
  Tea.blackTea(
    'Marzipan Tea',
    'Acest amestec bogat de ceaiuri din Ceylon și China a fost îmbogățit cu felii de migdale și boboci înmiresmați de albăstrele. Cuișoarele și coaja de portocală se armonizează pentru a da un gust perfect. Aroma de nucă definitivează acest amestec aducându-vă căldură în timpul sezonului rece.',
    13,
    TeaCategory.BlackAromatic,
  ).withIngredients(BLACK_TEA, ORANGE_PEEL, ALMONDS, CHOCOLATE_FLAKES, RED_PEPPER, FLAVORS),
  Tea.blackTea(
    'Black Tea Spicy Chai',
    'Ceaiul clasic Chai se deosebește printr-o aromă puternic condimentată ce ne poartă direct în India. Gustul intens se datorează ingredientelor aromate precum cuișoare, scorțișoară, ghimbir, cardamom, anason. Pentru a atinge desăvârșirea gustului se adaugă lapte și miere.',
    14,
    TeaCategory.BlackAromatic,
  ).withIngredients(BLACK_TEA, ANISE_SEEDS, GINGER, BLACK_PEPPER, CLOVES, CHICORY_ROOTS, FLAVORS),
  Tea.blackTea(
    'Cinnamon Tea',
    'Un clasic, ceaiul negru cu scorțișoară răspunde oricărui standard și este de nelipsit mai ales în preajma sărbătorilor de iarnă. Amestecul puternic de ceaiuri Ceylon-China, asezonat cu scorțișoara de Madagascar creează mixul de arome, pe cât de simplu, pe atât de perfect.',
    13,
    TeaCategory.BlackAromatic,
  ).withIngredients(BLACK_TEA, CINNAMON, FLAVORS),
  Tea.blackTea(
    'Bon Tea',
    'Plăcerea gustului ciocolatei și al cocosului ar duce la perfecție imaginea unei vieți perfecte, "le bon goût de la vie". Bucurați-vă de această creație cremoasă și fină care poate fi servită cu lapte adăugat savoare ceaiului.',
    14,
    TeaCategory.BlackAromatic,
  ).withIngredients(
    BLACK_TEA,
    DARK_CHOCOLATE,
    WHITE_CHOCOLATE,
    COCOA_BITS,
    COCONUT_FLAKES,
    FLAVORS,
  ),
]

export const fermentedTeas: Tea[] = [
  Tea.baseTea(
    'Fine Jasmine Tea',
    'O variantă mai fină a ceaiului clasic de iasomie, atât în felul în care arată cât și în gust. Frunzele înmiresmate au fost recoltate și procesate mai în profunzime, iar bobocii de iasomie au fost adăugați printr-o sită fină astfel încât ceaiul are un gust mai discret de iasomie. Culoarea este ușor galbenă și băutura împrăștie aroma intensă de iasomie.',
    18,
    TeaCategory.Fermented,
  ).withIngredients(FERMENTED_TEA, JASMINE_BUDS),
  Tea.baseTea(
    'Oolong Flower of Asia',
    'Bine cunoscutul ceai chinezesc Oolong fin și ușor picant, alături de notele florale delicate și intense în același timp ale fructului lychee de litchi (litchi) și ale bobocilor de trandafir roz te vor impresiona și purta în visare către relaxare și răsfăț.',
    18,
    TeaCategory.Fermented,
  ).withIngredients(FERMENTED_TEA, GREEN_TEA, PINK_ROSE_BUDS, CHAMOMILE, FLAVORS),
]

export const greenWhiteMixedTeas: Tea[] = [
  Tea.greenTea(
    'Sunny Passion',
    'Acest amestec nobil de diferite ceaiuri albe și verzi captivează simțurile. Boboci de trandafir galben, fulgi de ananas și cuburi de mango dau o notă de prospețime acestei varietăți aromatice. Frunzele de ceai domină gustul cu notele delicate de gust amărui.',
    16,
    TeaCategory.GreenWhiteMix,
  ).withIngredients(
    CHINA_SENCHA,
    LUNG_CHING,
    YUNNAN,
    PAI_MU_TAN,
    MANGO_PIECES,
    PINEAPPLE_FLAKES,
    ROSE_BUDS,
  ),
  Tea.greenTea(
    'Mcabeo Premium',
    'Ceaiuri verzi și albe de cea mai bună calitate, de diferite gusturi și marimi vă vor încânta simțurile. Frunzele de un verde intens, argintii și albe, sunt însoțite de boboci de trandafir galbeni, petale roz și nalbǎ liliac și dau naștere unui gust delicat. Buchetul este compus din fructe exotice, nuanțe de citrice și câteva delicate flori de iasomie.',
    16,
    TeaCategory.GreenWhiteMix,
  ).withIngredients(
    CHINA_SENCHA,
    LUNG_CHING,
    YUNNAN,
    PAI_MU_TAN,
    ROSE_BUDS,
    FLAVORS,
    ROSE_PETALS,
    MALLOW,
  ),
  Tea.greenTea(
    "Angel's Kiss",
    'Melanjul ușor al ceaiurilor verzi de calitate superioară furnizează o bază fantastică și florală unică. Aromele fructului pasiunii și căpșunilor formează o simbioză perfectă cu aroma de bază. Buchetele de fructe și florile se adaugă atractiei. Un ceai făcut pentru îngeri.',
    16,
    TeaCategory.GreenWhiteMix,
  ).withIngredients(
    GREEN_TEA,
    WHITE_TEA,
    PAPAYA_PINEAPPLE_CUBES,
    FLAVORS,
    ROSES,
    DEHYDRATED_STRAWBERRY,
  ),
  Tea.greenTea(
    'Spring Beginnings',
    'Amestecul premium armonios dintre ceaiul verde și cel alb invită simțurile într-o călătorie de primăvară. Culorile vii de galben ale ingredientelor ne amintesc de prima rază caldă și blândă de soare. Combinația dintre diferitele fructe completează gustul fin și proaspăt al acestui ceai.',
    16,
    TeaCategory.GreenWhiteMix,
  ).withIngredients(
    GREEN_TEA,
    CHINA_SENCHA,
    PAI_MU_TAN,
    FLAVORS,
    MANGO_FLAKES,
    ORANGE_SLICES,
    MARIGOLD,
    CANDIED_STRAWBERRY_SLICES,
  ),
]

export const greenTeas: Tea[] = [
  Tea.greenTea(
    'China Sencha Organinc',
    'Sencha este unul dintre cele mai cunoscute tipuri de ceai verde. Pe vremuri era băut de către călugării budiști ca remediu pentru boli și pentru curățare spirituală. În traducere, Sencha înseamnă infuzie: sen = abur, iar cha = ceai. Frunzele de ceai sunt îndoite longitudinal în timp ce sunt puse la uscat pe tǎvi fierbinți și sunt încălzite în tigǎi de lemn pentru a evita fermentația. Veți recunoaște imediat frunzele de ceai verde în această băutură de calitate. Aroma de iarbă proaspăt cosită este o plăcere pentru orice admirator al acestui ceai.',
    13,
    TeaCategory.Green,
  ).withBrewTime(5),
  Tea.greenTea(
    'Gunpowder Organic',
    'Gunpowder (praf de pușcă) este cunoscut de asemenea sub denumirea de Zucha sau „pearl tea” (ceai perlǎ). Ceaiul este uscat încet în butoaie rotative și datorită rotirii permanente plantele capătă formǎ sfericǎ. Templul Raiului este o minge foarte bine strânsă prin care se poate observa calitatea foarte ridicată.\nAcest ceai poate fi bǎut pe parcursul întregii zile. În cazul în care consideri cǎ are un gust prea amar, poți arunca prima infuzie și făcând aceasta, vei fi înlăturat de asemenea, cea mai mare parte din cofeină.',
    13,
    TeaCategory.Green,
  ).withBrewTime(5),
  Tea.greenTea(
    'Sencha Strawberry Smile',
    'Fructul de lychee din China - țara zâmbetului - aduce note florale, dulci fructate și delicate acestui Sencha proaspăt și astringent. Pe lângă petalele nobile de trandafiri și florile de iasomie care vin din țări îndepărtate, căpșunile deshidratate prin înghețare sunt partenerul perfect în această combinație de arome atent echilibrată.',
    14,
    TeaCategory.Green,
  ).withIngredients(GREEN_TEA, LYCHEE, FLAVORS, DEHYDRATED_STRAWBERRY, JASMINE, ROSE_PETALS),
  Tea.greenTea(
    'Sencha Spring Tea',
    'Acest ceai are un aspect viu, ce îți insuflă speranțǎ. Boboci de trandafir de o culoare aprinsă, combinați cu petale multicolore vă vor fermeca și vă vor face să zâmbiți. La acest amestec se adaugă puținǎ vanilie și fructe proaspete.',
    13,
    TeaCategory.Green,
  ).withIngredients(GREEN_TEA, DEHYDRATED_STRAWBERRY, ROSE_BUDS, SUNFLOWER_PETALS, MALLOW),
  Tea.greenTea(
    'Sencha Caramel Superior',
    'Alegeți Sencha cu multe bucăți delicioase de caramel și delicata romanită. Nota de caramel a acestei creații merită denumirea de superioară. Dulce și cremos, gustul îți amintește în mod inconștient de caramele. O compoziție extrem de echilibrată care oferă o adevărată senzație de plăcere.',
    13,
    TeaCategory.Green,
  )
    .withBrewTime(5)
    .withIngredients(GREEN_TEA, CARAMEL, FLAVORS, 'romanițǎ'),
  Tea.greenTea(
    'Sencha Lemon',
    'Aroma infuziei de ceai verde și cea a lămâii proaspete și înțepǎtoare se completează perfect una pe cealaltă. Consumat cald sau rece acest ceai a devenit un clasic în toate sortimentele de ceai verde.',
    13,
    TeaCategory.Green,
  )
    .withBrewTime(5)
    .withIngredients(GREEN_TEA, LEMON_PEEL, LEMON_GRASS, LEMON_FLAVOR),
  Tea.greenTea(
    'Sencha Tropical',
    'Amestecul discret de ceai verde împreună cu aroma de ananas dulce și proaspăt poate fi savurat tot timpul anului. Este un ceai care se servește și rece - îți taie setea în lunile de vară calduroase. În lunile de iarnă, aroma exoticǎ și gustul său îți aduc aminte de regiunile cǎlduroase și-ți ușurează trecerea la iarna la vara.',
    14,
    TeaCategory.Green,
  ).withIngredients(
    GREEN_TEA,
    PINEAPPLE_PIECES,
    SUGAR,
    MANGO_PIECES,
    SUNFLOWER_INFLORESCENCE,
    FLAVORS,
  ),
  Tea.greenTea(
    'Sencha Vanilla',
    'Vanilia este probabil cea mai populară aromă. Dacă este și a ta, atunci trebuie neapǎrat să încerci acest amestec nou! Notele cremoase și dulci de vanilie se găsesc în perfectă armonie cu baza elegantă de ceai verde. O varietate cu adevărat clasică care nu ar trebui să lipsească din gama niciunui pasionat de ceai!',
    13,
    TeaCategory.Green,
  ).withIngredients(GREEN_TEA, BOURBON_VANILLA, VANILLA_FLAVOR),
  Tea.greenTea(
    'Sencha Japanese Cherry',
    'Cireșele joacă un rol important în cultura japoneză. Festivalurile florilor de cireș care au loc în fiecare an sunt încântare pentru ochi. Excelenta bază Sencha a fost rafinată cu bucăți de înnaltă calitate de cireșe amare. Amestecul este fără îndoială un clasic printre ceaiurile verzi aromate.',
    13,
    TeaCategory.Green,
  ).withIngredients(GREEN_TEA, DEHYDRATED_CHERRIES, FLAVORS),
  Tea.greenTea(
    'Sencha Kombucha',
    'Ciuperca Kombucha este o simbioză între diferite microorganisme și se spune că are numeroase caracteristici pozitive și sǎnǎtoase. Se presupune cǎ aceastǎ Kombucha provine din China. Gustul fin și elegant al prunelor și corcodușelor este convingător.',
    13,
    TeaCategory.Green,
  )
    .withBrewTime(10)
    .withIngredients(
      GREEN_TEA,
      KOMBUCHA_POWDER,
      CANE_SUGAR,
      'melanj de plante (frunze de mure, zmeurǎ și cǎpșuni, lemon grass, rǎdǎcini dulci de calmus)',
      MALLOW,
    ),
  Tea.greenTea(
    'Green Tea Chai',
    'Un amestec cu adevărat îmbietor. Aroma condimentată a cuișoarelor și prospețimea mentei înviorătoare sunt cele mai importante componente ale acestei compoziții Chai, de inspirație hindusă. Servit cald sau rece, este la fel de delicios.',
    13,
    TeaCategory.Green,
  ).withIngredients(GREEN_TEA, NUTMEG, GINGER, CLOVES, BLACK_PEPPER, CINNAMON, MINT),
  Tea.greenTea(
    'Sencha Pomegranate Blossom',
    'Nobila rodie încă este fascinantă prezentând noi fețe ascunse ale sale. De data aceasta ne-am focusat pe floarea sa, care îmbină baza de ceai verde cu fermecǎtoarea ei frumusețe, în combinație cu petalele delicate de trandafir.',
    13,
    TeaCategory.Green,
  )
    .withBrewTime(10)
    .withIngredients(GREEN_TEA, POMEGRANATE_SEEDS, POMEGRANATE_FLOWERS, FLAVORS, ROSE_PETALS),
]

export const redTeas: Tea[] = [
  Tea.redTea(
    'Red Bush Fire',
    'Șofrǎnașul deschis la culoare amintește de un apus în savană. Compoziția diferitelor flori portocalii promite un gust proaspăt. Aromele folosite sunt naturale, răspândind un miros de portocale proaspăt stoarse.',
    13,
  ).withIngredients(ROOIBOS, SAFFRON, ORANGE_FLAVORS),
  Tea.redTea(
    'Green Rooibos Lemon Vanilla',
    'Culoarea verde deschis a acestui ceai ne aduce aminte de ceaiul verde proaspăt. Combinația de lămâie și vanilie oferă o aromă ușoară și delicată. Compoziția delicioasă și echilibrată nu lasă nimic la voia întamplării. Lemon grass ușor îmbătătoare dă o prospețime și o eleganțǎ ce ne trimite cu gândul la primǎvarǎ.',
    14,
  )
    .withBrewTime(6)
    .withIngredients(GREEN_ROOIBOS, LEMON_GRASS, LEMON_PEEL, FLAVORS),
  Tea.redTea(
    'Oriental Night',
    'Numele acestui ceai reflectă atât prezentarea fantastică, cât și gustul senzual. Vanilia și scorțișoara cu un pic de iasomie te duc cu gândul la Orientul îndepǎrtat.',
    14,
  ).withIngredients(ROOIBOS, CINNAMON, ANISE_SEEDS, JASMINE + ' din China'),
  Tea.redTea(
    'Sweet Sin',
    'Un coș mare de zmeură aromatǎ și bine coaptǎ, proaspăt culeasă. Un amestec răcoros cu vanilie care înnobilează aceste fructe elocvente. Cele două ingrediente principale, zmeura și vanilia, justifică pe deplin denumirea acestei băuturi senzaționale.',
    14,
  ).withIngredients(ROOIBOS, DEHYDRATED_RASPBERRY, ROSE_PETALS, VANILLA_PIECES),
  Tea.redTea(
    'Toffee Dream',
    'Acest ceai este un vis pentru toți pasionații de caramel. Bucățele cremoase de caramel, scăldate în aroma ceaiului Rooibos și atinse de o ușoară notă de alune, fac ca acest ceai să te cucerească chiar și numai adulmecându-l.',
    14,
  ).withIngredients(ROOIBOS, INVERTED_SUGAT, SMASHED_HAZLENUTS, COCOA, FLAVORS),
  Tea.redTea(
    'Gingerbread Biscuit Orange',
    'Un ceai fascinant care te atrage cu gustul aromelor fine de turǎ dulce proaspǎtǎ si portocale dulci. Ingredientele tropicale de piper și coriandru adaugă un plus de finețe.',
    14,
  ).withIngredients(ROOIBOS, ALMONDS, PISTACHIOS, ORANGE_PEEL, CORIANDER, PINK_PEPPER),
]
