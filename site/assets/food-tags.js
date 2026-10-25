/* Winter Arc food: the ingredient tags.
   Every ingredient in every dish carries one of these tags (kebab-case id). The "What do you have?" picker is built from this list;
   a tag used by a dish but missing here is shown under "Other". STAPLES are assumed to be at home, so they never block a dish. */
(function () {
  'use strict';
  var WA = window.WA = window.WA || {};

  /* [id, name shown on the chip] */
  var GROUPS = [
    { id: 'protein', name: 'Protein and dairy', tags: [
      ['paneer', 'Paneer'], ['tofu', 'Tofu'], ['soya-chunks', 'Soya chunks'], ['curd', 'Curd'], ['milk', 'Milk'], ['cheese', 'Cheese'],
      ['butter', 'Butter'], ['cream', 'Cream'], ['whey-protein', 'Protein powder'], ['buttermilk', 'Buttermilk'], ['condensed-milk', 'Condensed milk'], ['milk-powder', 'Milk powder']] },
    { id: 'dal', name: 'Dal and legumes', tags: [
      ['moong-dal', 'Moong dal'], ['moong-whole', 'Whole moong'], ['masoor-dal', 'Masoor dal'], ['toor-dal', 'Toor dal'], ['chana-dal', 'Chana dal'],
      ['urad-dal', 'Urad dal'], ['chickpeas', 'Chickpeas'], ['kala-chana', 'Black chana'], ['rajma', 'Rajma'], ['lobia', 'Lobia'], ['moth-beans', 'Moth beans'], ['dried-peas', 'Dried peas'],
      ['sprouts', 'Sprouts'], ['roasted-chana', 'Roasted chana'], ['besan', 'Besan'], ['sattu', 'Sattu']] },
    { id: 'grain', name: 'Grains and flour', tags: [
      ['rice', 'Rice'], ['oats', 'Oats'], ['dalia', 'Dalia'], ['poha', 'Poha'], ['quinoa', 'Quinoa'], ['atta', 'Atta'], ['suji', 'Suji'],
      ['vermicelli', 'Vermicelli'], ['bread', 'Bread'], ['millet', 'Millets'], ['rice-flour', 'Rice flour'], ['corn-flour', 'Corn flour'], ['roti', 'Roti (chapati)'], ['dosa-batter', 'Dosa batter'], ['idli-batter', 'Idli batter'], ['puffed-rice', 'Puffed rice'], ['breadcrumbs', 'Breadcrumbs'], ['sabudana', 'Sabudana'], ['pasta', 'Pasta'], ['pav', 'Pav'], ['all-purpose-flour', 'Maida'], ['rice-paper', 'Rice paper'], ['nachos', 'Nachos']] },
    { id: 'veg', name: 'Vegetables', tags: [
      ['potato', 'Potato'], ['sweet-potato', 'Sweet potato'], ['spinach', 'Spinach'], ['cauliflower', 'Cauliflower'], ['cabbage', 'Cabbage'],
      ['carrot', 'Carrot'], ['peas', 'Peas'], ['capsicum', 'Capsicum'], ['cucumber', 'Cucumber'], ['beetroot', 'Beetroot'], ['broccoli', 'Broccoli'],
      ['mushroom', 'Mushroom'], ['bottle-gourd', 'Bottle gourd'], ['brinjal', 'Brinjal'], ['okra', 'Okra'], ['beans', 'Beans'], ['corn', 'Corn'],
      ['pumpkin', 'Pumpkin'], ['radish', 'Radish'], ['zucchini', 'Zucchini'], ['spring-onion', 'Spring onion'], ['fenugreek-leaves', 'Methi leaves'],
      ['lettuce', 'Lettuce'], ['mixed-vegetables', 'Mixed vegetables'], ['green-garlic', 'Green garlic'], ['drumstick', 'Drumstick'], ['mint', 'Mint'], ['raw-banana', 'Raw banana'], ['olives', 'Olives'], ['jalapeno', 'Jalapeno'], ['dill', 'Dill'], ['baby-corn', 'Baby corn'], ['basil', 'Basil']] },
    { id: 'fruit', name: 'Fruit', tags: [
      ['banana', 'Banana'], ['apple', 'Apple'], ['mango', 'Mango'], ['papaya', 'Papaya'], ['orange', 'Orange'], ['pomegranate', 'Pomegranate'],
      ['berries', 'Berries'], ['grapes', 'Grapes'], ['pineapple', 'Pineapple'], ['avocado', 'Avocado'], ['guava', 'Guava'], ['amla', 'Amla']] },
    { id: 'nuts', name: 'Nuts, seeds and dry fruit', tags: [
      ['almonds', 'Almonds'], ['peanuts', 'Peanuts'], ['cashews', 'Cashews'], ['walnuts', 'Walnuts'], ['pistachios', 'Pistachios'],
      ['chia-seeds', 'Chia seeds'], ['flax-seeds', 'Flax seeds'], ['pumpkin-seeds', 'Pumpkin seeds'], ['sunflower-seeds', 'Sunflower seeds'],
      ['sesame-seeds', 'Sesame seeds'], ['dates', 'Dates'], ['raisins', 'Raisins'], ['makhana', 'Makhana'], ['coconut', 'Coconut'], ['peanut-butter', 'Peanut butter'], ['melon-seeds', 'Melon seeds'], ['poppy-seeds', 'Poppy seeds'], ['fig', 'Figs'], ['cranberry', 'Cranberries'], ['gond-katira', 'Gond katira'], ['basil-seeds', 'Basil seeds'], ['saffron', 'Saffron'], ['tutti-frutti', 'Tutti frutti']] },
    { id: 'extras', name: 'Sauces and extras', tags: [
      ['jaggery', 'Jaggery'], ['honey', 'Honey'], ['coconut-milk', 'Coconut milk'], ['soy-sauce', 'Soy sauce'], ['vinegar', 'Vinegar'],
      ['tamarind', 'Tamarind'], ['tea', 'Tea'], ['coffee', 'Coffee'], ['cocoa', 'Cocoa'], ['chilli-flakes', 'Chilli flakes'], ['oregano', 'Oregano'],
      ['green-chutney', 'Green chutney'], ['chutney', 'Chutney'], ['podi-masala', 'Podi masala'], ['tomato-ketchup', 'Ketchup'],
      ['vanilla-essence', 'Vanilla essence'], ['salad-dressing', 'Salad dressing'], ['baking-powder', 'Baking powder'], ['baking-soda', 'Baking soda'], ['chocolate-chips', 'Chocolate chips'], ['charcoal', 'Charcoal'], ['papdi', 'Papdi'], ['namkeen', 'Namkeen'], ['sev', 'Sev'], ['soda', 'Soda'], ['chipotle-sauce', 'Chipotle sauce'], ['schezwan-sauce', 'Schezwan sauce'], ['tandoori-sauce', 'Tandoori sauce'], ['pizza-sauce', 'Pizza sauce'], ['mayonnaise', 'Eggless mayonnaise'], ['fruit-salt', 'Fruit salt (Eno)'], ['chocolate', 'Chocolate'], ['white-chocolate', 'White chocolate'], ['tamarind-chutney', 'Tamarind chutney'], ['chilli-oil', 'Chilli oil'], ['rose-petals', 'Rose petals'], ['edible-gold', 'Edible gold'], ['chilli-sauce', 'Chilli sauce'], ['schezwan-masala', 'Schezwan masala'], ['seasoning-masala', 'Seasoning masala'], ['peri-peri-masala', 'Peri peri masala'], ['orange-juice', 'Orange juice']] }
  ];

  /* Always at home: never counted as missing, never shown as a chip. */
  var STAPLES = [
    'salt', 'oil', 'ghee', 'sugar', 'water', 'turmeric', 'red-chilli-powder', 'cumin', 'cumin-powder', 'mustard-seeds', 'coriander-powder',
    'garam-masala', 'black-pepper', 'hing', 'chaat-masala', 'black-salt', 'curry-leaves', 'bay-leaf', 'whole-spices', 'ajwain', 'amchur',
    'dry-red-chilli', 'cardamom', 'paprika', 'mixed-herbs', 'garlic-powder', 'biryani-masala', 'dry-ginger-powder', 'coriander-seeds', 'fenugreek-seeds', 'rock-sugar', 'kasuri-methi', 'fennel-seeds', 'nigella-seeds', 'cinnamon',
    'onion', 'tomato', 'ginger', 'garlic', 'green-chilli', 'coriander-leaves', 'lemon', 'ice'
  ];

  var names = {}, groupOf = {}, stap = {};
  GROUPS.forEach(function (g) { g.tags.forEach(function (t) { names[t[0]] = t[1]; groupOf[t[0]] = g.id; }); });
  STAPLES.forEach(function (t) { stap[t] = true; });


  /* Other names people search for (Hindi and everyday English). Only used by the search box. */
  var ALIASES = {
    'curd': ['dahi', 'yogurt', 'yoghurt', 'greek yogurt', 'hung curd'], 'milk': ['doodh'], 'paneer': ['cottage cheese'], 'butter': ['makhan', 'makkhan'], 'cream': ['malai'],
    'cheese': ['mozzarella', 'cheese slice', 'cheddar'], 'whey-protein': ['whey', 'protein'], 'soya-chunks': ['soya', 'soy chunks', 'nutrela', 'meal maker'], 'tofu': ['soya paneer'],
    'moong-dal': ['moong', 'mung', 'yellow lentil'], 'moong-whole': ['moong', 'mung', 'green gram', 'sabut moong'], 'masoor-dal': ['masoor', 'red lentil', 'lentil'], 'toor-dal': ['toor', 'arhar', 'tur'],
    'chana-dal': ['chana', 'bengal gram'], 'urad-dal': ['urad', 'black gram'], 'chickpeas': ['chana', 'chole', 'chhole', 'kabuli', 'garbanzo'], 'kala-chana': ['chana', 'black chickpeas', 'desi chana'],
    'rajma': ['kidney beans'], 'lobia': ['black eyed', 'chawli'], 'sprouts': ['sprout', 'ankurit'], 'roasted-chana': ['bhuna chana', 'bhuna', 'chana'], 'besan': ['gram flour', 'chickpea flour'], 'sattu': ['roasted chana powder', 'chana powder'],
    'rice': ['chawal', 'basmati'], 'oats': ['oat', 'rolled oats'], 'dalia': ['daliya', 'broken wheat', 'cracked wheat'], 'poha': ['flattened rice'], 'atta': ['wheat flour', 'whole wheat', 'gehun'], 'roti': ['chapati', 'phulka', 'chapatti'],
    'suji': ['rava', 'sooji', 'semolina'], 'vermicelli': ['seviyan', 'sevai'], 'bread': ['pav', 'toast'], 'millet': ['ragi', 'jowar', 'bajra', 'nachni'], 'puffed-rice': ['murmura', 'muri', 'mamra'], 'all-purpose-flour': ['maida', 'refined flour'],
    'potato': ['aloo'], 'sweet-potato': ['shakarkandi'], 'spinach': ['palak'], 'cauliflower': ['gobi', 'gobhi'], 'cabbage': ['patta gobi', 'band gobi'], 'carrot': ['gajar'], 'peas': ['matar', 'green peas'],
    'capsicum': ['shimla mirch', 'bell pepper', 'pepper'], 'cucumber': ['kheera', 'kakdi'], 'beetroot': ['chukandar', 'beet'], 'mushroom': ['khumb'], 'bottle-gourd': ['lauki', 'dudhi'], 'brinjal': ['baingan', 'eggplant'],
    'okra': ['bhindi', 'lady finger'], 'corn': ['sweet corn', 'makka', 'bhutta'], 'radish': ['mooli'], 'zucchini': ['courgette'], 'fenugreek-leaves': ['methi', 'fenugreek'], 'beans': ['french beans', 'green beans'],
    'spring-onion': ['green onion', 'scallion'], 'drumstick': ['moringa', 'sahjan'], 'raw-banana': ['kachcha kela', 'plantain'], 'banana': ['kela'], 'apple': ['seb'], 'mango': ['aam'], 'papaya': ['papita'],
    'pomegranate': ['anar'], 'guava': ['amrood'], 'berries': ['strawberry', 'blueberry', 'mulberry'], 'orange': ['santra'], 'almonds': ['badam'], 'cashews': ['kaju'], 'walnuts': ['akhrot'], 'pistachios': ['pista'],
    'peanuts': ['moongphali', 'mungfali', 'groundnut'], 'dates': ['khajoor', 'khajur'], 'raisins': ['kishmish', 'kismis'], 'fig': ['anjeer'], 'makhana': ['fox nuts', 'lotus seeds', 'phool makhana'], 'coconut': ['nariyal', 'khopra'],
    'chia-seeds': ['chia'], 'flax-seeds': ['alsi', 'flax'], 'sesame-seeds': ['til', 'sesame'], 'pumpkin-seeds': ['kaddu', 'pumpkin'], 'poppy-seeds': ['khus khus', 'posto'], 'basil-seeds': ['sabja', 'tukmaria'], 'melon-seeds': ['magaz'],
    'jaggery': ['gur', 'gud'], 'honey': ['shahad'], 'tamarind': ['imli'], 'tea': ['chai'], 'mayonnaise': ['mayo'], 'tomato-ketchup': ['ketchup', 'tomato sauce'], 'sabudana': ['sago', 'tapioca'], 'saffron': ['kesar'], 'amla': ['gooseberry'],
    'salt': ['namak'], 'oil': ['tel'], 'ghee': ['clarified butter'], 'turmeric': ['haldi'], 'cumin': ['jeera'], 'ginger': ['adrak'], 'garlic': ['lahsun'], 'lemon': ['nimbu', 'lime'], 'coriander-leaves': ['dhania', 'cilantro'],
    'green-chilli': ['hari mirch'], 'onion': ['pyaz', 'pyaaz'], 'tomato': ['tamatar'], 'black-pepper': ['kali mirch'], 'fennel-seeds': ['saunf'], 'cinnamon': ['dalchini'], 'cardamom': ['elaichi'], 'ajwain': ['carom'],
    'hing': ['asafoetida'], 'black-salt': ['kala namak'], 'amchur': ['dry mango powder'], 'kasuri-methi': ['dried fenugreek'], 'nigella-seeds': ['kalonji'], 'red-chilli-powder': ['lal mirch', 'chilli powder'],
    'coriander-powder': ['dhania powder'], 'cumin-powder': ['jeera powder'], 'curry-leaves': ['kadi patta'], 'bay-leaf': ['tej patta'], 'mustard-seeds': ['rai', 'sarson']
  };

  function title(tag) { var s = String(tag).replace(/-/g, ' '); return s.charAt(0).toUpperCase() + s.slice(1); }

  WA.foodTags = {
    groups: GROUPS,
    staples: STAPLES,
    isStaple: function (tag) { return !!stap[tag]; },
    name: function (tag) { return names[tag] || title(tag); },
    known: function (tag) { return !!names[tag]; },
    aliases: function (tag) { return ALIASES[tag] || []; }
  };
})();
