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
      ['vermicelli', 'Vermicelli'], ['bread', 'Bread'], ['millet', 'Millets'], ['rice-flour', 'Rice flour'], ['corn-flour', 'Corn flour'], ['dosa-batter', 'Dosa batter'], ['puffed-rice', 'Puffed rice'], ['breadcrumbs', 'Breadcrumbs'], ['sabudana', 'Sabudana'], ['pasta', 'Pasta'], ['pav', 'Pav'], ['all-purpose-flour', 'Maida'], ['rice-paper', 'Rice paper'], ['nachos', 'Nachos']] },
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

  function title(tag) { var s = String(tag).replace(/-/g, ' '); return s.charAt(0).toUpperCase() + s.slice(1); }

  WA.foodTags = {
    groups: GROUPS,
    staples: STAPLES,
    isStaple: function (tag) { return !!stap[tag]; },
    name: function (tag) { return names[tag] || title(tag); },
    known: function (tag) { return !!names[tag]; }
  };
})();
