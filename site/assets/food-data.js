/* Winter Arc food: the dish library.
   One entry per dish. `ingredients` come first on the page, then `steps`.
   q: quantity. A leading "~" means the video did not say the amount and it is an estimate.
   tag: the ingredient's tag from food-tags.js (every ingredient has one, staples like salt and oil too).
   opt: true for garnish or "if you like" extras that should not stop you from cooking the dish.
   alt: other tags that can replace this one (for example ['masoor-dal'] on moong dal).
   img: file name (without .jpg) inside assets/food/<id>/, a screenshot taken from the source video.
   steps: each has `imgs`, a list of such pictures (every step has at least one).
   protein: rough grams of protein for one serving (estimated from the ingredients). */
(function () {
  'use strict';
  var WA = window.WA = window.WA || {};

  /* Generated from the recipe videos. Edit the dish JSON files, not this list. */
  WA.dishes = [
    {
      "id": "chana-banana-shake",
      "name": "Chana banana protein shake",
      "meal": "Drink",
      "minutes": 3,
      "protein": 20,
      "how": "No cooking",
      "tools": "Blender (mixie)",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 scoops (50 g)",
          "n": "Roasted chana powder (chana sattu)",
          "tag": "sattu",
          "img": "i-powder"
        },
        {
          "q": "1 glass (250 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "1",
          "n": "Banana",
          "tag": "banana",
          "img": "i-banana"
        },
        {
          "q": "2",
          "n": "Dates (khajoor), seeds out",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "~1 small piece",
          "n": "Jaggery (gur)",
          "tag": "jaggery",
          "opt": true,
          "img": "i-jaggery"
        },
        {
          "q": "~1 small handful",
          "n": "Pistachios and almonds, chopped",
          "tag": "almonds",
          "alt": [
            "pistachios"
          ],
          "opt": true,
          "img": "i-nuts"
        }
      ],
      "steps": [
        {
          "t": "Put 2 scoops of roasted chana powder in the blender jar.",
          "imgs": [
            "s-powder"
          ]
        },
        {
          "t": "Pour in 1 glass of milk.",
          "imgs": [
            "s-milk"
          ]
        },
        {
          "t": "Add the banana, in pieces.",
          "imgs": [
            "s-banana"
          ]
        },
        {
          "t": "Add the 2 dates.",
          "imgs": [
            "s-dates"
          ]
        },
        {
          "t": "Add the jaggery.",
          "imgs": [
            "s-jaggery"
          ]
        },
        {
          "t": "Blend until smooth, about 1 minute.",
          "imgs": [
            "s-blend"
          ]
        },
        {
          "t": "Pour into a glass. Top with the chopped pistachios and almonds.",
          "imgs": [
            "s-serve"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "quick",
        "high-protein"
      ],
      "credit": "Nitesh Soni, \"Homemade Protein Shake\" (Celeb Recipe #53)"
    },
    {
      "id": "soya-paneer-veg-tehri",
      "name": "Soya paneer veg tehri",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 30,
      "how": "Pressure cooker",
      "tools": "Pressure cooker, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (180 g)",
          "n": "Basmati rice, washed and soaked 15 to 20 min",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Ghee (desi ghee)",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "1 small piece each",
          "n": "Whole spices (cinnamon, star anise, cardamom)",
          "tag": "whole-spices",
          "img": "i-wholespice"
        },
        {
          "q": "~1 large (150 g)",
          "n": "Onion, sliced",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-redchilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric powder (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder (dhaniya powder)",
          "tag": "coriander-powder",
          "img": "i-corpowder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Garam masala",
          "tag": "garam-masala"
        },
        {
          "q": "~2",
          "n": "Green chillies, chopped",
          "tag": "green-chilli",
          "img": "i-greenchilli"
        },
        {
          "q": "~2 medium (200 g)",
          "n": "Potato, sliced",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~2 medium",
          "n": "Tomato, cut in wedges",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1/2 (50 g)",
          "n": "Red capsicum, sliced",
          "tag": "capsicum",
          "img": "i-capsicum",
          "alt": [
            "mixed-vegetables"
          ]
        },
        {
          "q": "~1.5 cups (150 g)",
          "n": "Cauliflower florets",
          "tag": "cauliflower",
          "img": "i-cauli",
          "alt": [
            "mixed-vegetables"
          ]
        },
        {
          "q": "~1/2 cup (30 g) dry",
          "n": "Soya chunks (small), soaked in hot water and squeezed",
          "tag": "soya-chunks",
          "img": "i-soya"
        },
        {
          "q": "~1/2 cup (70 g)",
          "n": "Green peas",
          "tag": "peas",
          "img": "i-peas",
          "alt": [
            "mixed-vegetables"
          ]
        },
        {
          "q": "~1.5 cups (300 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~100 g (about 12 cubes)",
          "n": "Paneer, cubed and pan-fried until golden",
          "tag": "paneer",
          "img": "i-paneer",
          "alt": [
            "tofu"
          ]
        },
        {
          "q": "a handful",
          "n": "Coriander leaves (dhania), chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Wash the rice in water, then leave it to soak for 15 to 20 minutes.",
          "imgs": [
            "s-rice-1",
            "s-rice-2",
            "s-rice-3"
          ]
        },
        {
          "t": "Add the oil and ghee to the pressure cooker and let them heat.",
          "imgs": [
            "s-heat-1",
            "s-heat-2"
          ]
        },
        {
          "t": "Add the cumin seeds and whole spices to the hot oil.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the sliced onion and sauté until soft.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add salt, red chilli powder, turmeric, coriander powder and garam masala. Stir well.",
          "imgs": [
            "s-masala-1",
            "s-masala-2",
            "s-masala-3"
          ]
        },
        {
          "t": "Add the chopped green chilli, then the potato slices.",
          "imgs": [
            "s-potato-1",
            "s-potato-2"
          ]
        },
        {
          "t": "Add the tomato wedges and red capsicum.",
          "imgs": [
            "s-tomato-1",
            "s-tomato-2"
          ]
        },
        {
          "t": "Add the cauliflower, soaked soya chunks and green peas.",
          "imgs": [
            "s-veg-1",
            "s-veg-2",
            "s-veg-3"
          ]
        },
        {
          "t": "Stir everything well and sauté for 2 to 3 minutes.",
          "imgs": [
            "s-saute-1",
            "s-saute-2"
          ]
        },
        {
          "t": "Add the soaked rice to the cooker.",
          "imgs": [
            "s-ricein-1",
            "s-ricein-2"
          ]
        },
        {
          "t": "Pour in the water and stir.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Close the lid and cook until the first whistle.",
          "imgs": [
            "s-cook-1"
          ]
        },
        {
          "t": "Switch off the gas and leave the lid closed for 5 minutes.",
          "imgs": [
            "s-rest-1"
          ]
        },
        {
          "t": "Open the lid. The rice should be cooked and the water absorbed.",
          "imgs": [
            "s-open-1",
            "s-open-2"
          ]
        },
        {
          "t": "Add the fried paneer cubes and chopped coriander on top.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Mix gently and serve hot, with raita and green chutney if you like.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        }
      ],
      "tags": [
        "pressure-cooker",
        "one-pot",
        "high-protein",
        "high-fibre"
      ]
    },
    {
      "id": "mixed-bean-salad",
      "name": "Mixed bean salad",
      "meal": "Snack",
      "minutes": 40,
      "protein": 20,
      "how": "Pressure cooker",
      "tools": "Pressure cooker, gas, knife, big bowl",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "25 g (dry weight)",
          "n": "Rajma (kidney beans), dry",
          "tag": "rajma",
          "img": "i-rajma",
          "alt": [
            "lobia"
          ]
        },
        {
          "q": "25 g (dry weight)",
          "n": "Black chana (kala chana), dry",
          "tag": "kala-chana",
          "img": "i-kala-chana",
          "alt": [
            "chickpeas"
          ]
        },
        {
          "q": "25 g (dry weight)",
          "n": "White chana (kabuli chana), dry",
          "tag": "chickpeas",
          "img": "i-white-chana",
          "alt": [
            "kala-chana"
          ]
        },
        {
          "q": "~1/4 cup (~35 g)",
          "n": "Red onion, finely chopped",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1/4 cup (~40 g)",
          "n": "Tomato, finely chopped",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1/4 cup (~35 g)",
          "n": "Cucumber, chopped",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1 small",
          "n": "Green chilli, chopped",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1/4 tsp, to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat-masala"
        },
        {
          "q": "~1/2 tsp",
          "n": "Roasted ajwain (carom seeds)",
          "tag": "ajwain",
          "img": "i-ajwain"
        },
        {
          "q": "~1 tbsp (1/2 lemon)",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "~2 tbsp (~20 g)",
          "n": "Peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander leaves, finely chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Weigh 25 g each of dry rajma, black chana and white chana.",
          "imgs": [
            "s-weigh-1",
            "s-weigh-2",
            "s-weigh-3"
          ]
        },
        {
          "t": "The night before, soak all 3 beans in water. Next day, pressure cook with a pinch of salt for 5 to 6 whistles, until soft.",
          "imgs": [
            "s-boil-1",
            "s-boil-2"
          ]
        },
        {
          "t": "While the beans cook, finely chop the onion, tomato, cucumber and green chilli.",
          "imgs": [
            "s-chop-1"
          ]
        },
        {
          "t": "Tip the boiled beans into a big bowl.",
          "imgs": [
            "s-bowl-1",
            "s-bowl-2",
            "s-bowl-3"
          ]
        },
        {
          "t": "Add the chopped onion.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the chopped tomato.",
          "imgs": [
            "s-tomato-1",
            "s-tomato-2"
          ]
        },
        {
          "t": "Add the chopped cucumber.",
          "imgs": [
            "s-cucumber-1",
            "s-cucumber-2"
          ]
        },
        {
          "t": "Add the chopped green chilli.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Sprinkle on the salt and red chilli powder.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Sprinkle on the chaat masala.",
          "imgs": [
            "s-masala-1",
            "s-masala-2"
          ]
        },
        {
          "t": "Sprinkle on the roasted ajwain.",
          "imgs": [
            "s-ajwain-1",
            "s-ajwain-2"
          ]
        },
        {
          "t": "Pour in the lemon juice.",
          "imgs": [
            "s-lemon-1",
            "s-lemon-2"
          ]
        },
        {
          "t": "Toss everything well with two forks or spoons.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Add the peanuts.",
          "imgs": [
            "s-peanuts-1",
            "s-peanuts-2"
          ]
        },
        {
          "t": "Sprinkle the chopped coriander on top and serve.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2",
            "s-coriander-3"
          ]
        }
      ],
      "tags": [
        "pressure-cooker",
        "gas",
        "high-protein",
        "high-fibre"
      ],
      "credit": "@fitnesswithnidhi"
    }
  ];
})();
