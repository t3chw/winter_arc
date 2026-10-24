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
      "credit": "Nitesh Soni, \"Homemade Protein Shake\" (Celeb Recipe #53)",
      "card": "card"
    },
    {
      "id": "coffee-ice-cube-cold-coffee",
      "name": "Coffee ice cube cold coffee",
      "meal": "Drink",
      "minutes": 15,
      "protein": 5,
      "how": "Gas",
      "tools": "Pan, gas, ice cube tray, freezer, hand frother",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (200 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~2 tbsp",
          "n": "Instant coffee powder",
          "tag": "coffee",
          "img": "i-coffee"
        },
        {
          "q": "~2 tbsp",
          "n": "Sugar",
          "tag": "sugar",
          "img": "i-sugar"
        },
        {
          "q": "~2 cups (400 ml)",
          "n": "Cold milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "a pinch",
          "n": "Coffee powder, to sprinkle on top",
          "tag": "coffee",
          "opt": true,
          "img": "i-coffee-top"
        }
      ],
      "steps": [
        {
          "t": "Heat the water in a pan on the stove.",
          "imgs": [
            "s-heat-1"
          ]
        },
        {
          "t": "Add the coffee powder and sugar to the hot water.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Stir and let it bubble until the sugar melts and the coffee is dark.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Pour the hot coffee into ice cube trays.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Freeze until the coffee cubes are solid.",
          "imgs": [
            "s-freeze-1"
          ]
        },
        {
          "t": "Drop the coffee cubes into a glass.",
          "imgs": [
            "s-cubes-1",
            "s-cubes-2"
          ]
        },
        {
          "t": "Pour cold milk over the cubes.",
          "imgs": [
            "s-milk-1",
            "s-milk-2"
          ]
        },
        {
          "t": "Froth with a hand frother until the top is foamy.",
          "imgs": [
            "s-froth-1",
            "s-froth-2"
          ]
        },
        {
          "t": "Sprinkle a little coffee powder on top and serve.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "make-ahead"
      ],
      "card": "card"
    },
    {
      "id": "no-oil-rajma-chawal",
      "name": "No-oil rajma chawal",
      "meal": "Lunch or dinner",
      "minutes": 50,
      "protein": 15,
      "how": "Pressure cooker",
      "tools": "Pressure cooker, gas, mixie (for tomato puree)",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (185 g), soaked overnight",
          "n": "Rajma (kidney beans)",
          "tag": "rajma",
          "img": "i-rajma"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "1 to 2 leaves",
          "n": "Bay leaf (tej patta)",
          "tag": "bay-leaf",
          "img": "i-bay"
        },
        {
          "q": "~2 medium",
          "n": "Onion, sliced",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 inch piece",
          "n": "Ginger, crushed",
          "tag": "ginger",
          "img": "i-paste"
        },
        {
          "q": "~5 cloves",
          "n": "Garlic, crushed",
          "tag": "garlic",
          "img": "i-paste"
        },
        {
          "q": "~2",
          "n": "Green chilli, crushed",
          "tag": "green-chilli",
          "img": "i-paste"
        },
        {
          "q": "~1 1/2 tsp",
          "n": "Salt, in two parts",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder (dhaniya)",
          "tag": "coriander-powder",
          "img": "i-coriander-powder"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Garam masala",
          "tag": "garam-masala",
          "img": "i-garam"
        },
        {
          "q": "~3 medium (about 1 cup puree)",
          "n": "Tomatoes, blended to a puree",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~3 cups (750 ml), plus a splash",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "a handful",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "opt": true,
          "img": "i-coriander-leaves"
        },
        {
          "q": "~1 cup cooked per person",
          "n": "Cooked rice, to serve",
          "tag": "rice",
          "opt": true,
          "img": "i-rice"
        },
        {
          "q": "a few slices",
          "n": "Raw onion, sliced, to serve",
          "tag": "onion",
          "opt": true,
          "img": "i-onion"
        }
      ],
      "steps": [
        {
          "t": "Put the empty pressure cooker on the stove and heat it.",
          "imgs": [
            "s-heat-1"
          ]
        },
        {
          "t": "Add the bay leaf and cumin seeds. Dry roast for a few seconds, no oil.",
          "imgs": [
            "s-roast-1",
            "s-roast-2",
            "s-roast-3"
          ]
        },
        {
          "t": "Add the sliced onions and stir on medium heat.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the crushed ginger, garlic and green chilli.",
          "imgs": [
            "s-paste-1",
            "s-paste-2"
          ]
        },
        {
          "t": "Cook until the onions turn light golden brown.",
          "imgs": [
            "s-golden-1"
          ]
        },
        {
          "t": "Add the salt and turmeric.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Add the coriander powder, red chilli powder and garam masala.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Stir for 1 minute, until the spices smell good.",
          "imgs": [
            "s-fry-1"
          ]
        },
        {
          "t": "Splash in a little water so the masala does not burn. Stir.",
          "imgs": [
            "s-water-1"
          ]
        },
        {
          "t": "Pour in the tomato puree. Cook 4 to 5 minutes until thick.",
          "imgs": [
            "s-puree-1",
            "s-puree-2",
            "s-puree-3"
          ]
        },
        {
          "t": "Add the soaked rajma.",
          "imgs": [
            "s-rajma-1"
          ]
        },
        {
          "t": "Pour in plenty of water and stir. Add the rest of the salt.",
          "imgs": [
            "s-pour-1",
            "s-pour-3"
          ]
        },
        {
          "t": "Close the lid. Pressure cook for 8 to 9 whistles.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Let the pressure go down, open the lid and stir. The rajma should be soft.",
          "imgs": [
            "s-open-1",
            "s-open-2"
          ]
        },
        {
          "t": "Sprinkle chopped coriander leaves on top.",
          "imgs": [
            "s-garnish-1"
          ]
        },
        {
          "t": "Serve with rice and sliced raw onion.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "pressure-cooker",
        "one-pot",
        "gas",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "paneer-veggie-wrap",
      "name": "Paneer veggie wrap",
      "meal": "Lunch or dinner",
      "minutes": 25,
      "protein": 20,
      "how": "Gas",
      "tools": "Pan, gas, bowl",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "1 tbsp",
          "n": "Ginger, grated",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1 medium",
          "n": "Onion, chopped",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 cup (2 small, red and yellow)",
          "n": "Bell pepper (capsicum), diced",
          "tag": "capsicum",
          "img": "i-pepper"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Oregano",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "~1/2 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-chilli"
        },
        {
          "q": "~150 g",
          "n": "Paneer, cut in cubes",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1/2 cup (120 g)",
          "n": "Hung curd dressing (thick curd, whisked smooth)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "2",
          "n": "Roti (whole wheat)",
          "tag": "atta",
          "img": "i-roti"
        },
        {
          "q": "~1 cup",
          "n": "Cabbage, shredded",
          "tag": "cabbage",
          "img": "i-cabbage"
        },
        {
          "q": "~1/2 medium",
          "n": "Cucumber, cut in thin strips",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1/2 small",
          "n": "Onion, sliced thin, for the wrap",
          "tag": "onion",
          "img": "i-onion-raw"
        }
      ],
      "steps": [
        {
          "t": "Heat the oil in a pan.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the grated ginger and stir for a few seconds.",
          "imgs": [
            "s-ginger-1",
            "s-ginger-2"
          ]
        },
        {
          "t": "Add the chopped onion and cook until soft.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the diced red and yellow bell pepper.",
          "imgs": [
            "s-pepper-1",
            "s-pepper-2"
          ]
        },
        {
          "t": "Sprinkle in the salt, oregano and chilli flakes.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Add the paneer cubes.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Mix well and cook until the paneer gets light golden edges.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Switch off the gas and let the filling cool down.",
          "imgs": [
            "s-cool-1"
          ]
        },
        {
          "t": "Move the filling to a bowl, pour in the dressing and mix.",
          "imgs": [
            "s-dress-1",
            "s-dress-2"
          ]
        },
        {
          "t": "Lay a roti flat on a plate.",
          "imgs": [
            "s-roti-1"
          ]
        },
        {
          "t": "Spread the shredded cabbage on one half of the roti.",
          "imgs": [
            "s-cabbage-1",
            "s-cabbage-2"
          ]
        },
        {
          "t": "Spoon the paneer filling over the cabbage.",
          "imgs": [
            "s-fill-1"
          ]
        },
        {
          "t": "Top with cucumber strips and sliced onion.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Roll the roti up tight into a wrap and serve.",
          "imgs": [
            "s-roll-1"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "overnight-chia-oats-jar",
      "name": "Overnight chia oats jar",
      "meal": "Breakfast",
      "minutes": 10,
      "protein": 15,
      "how": "No cooking",
      "tools": "Small glass jar with lid, spoon, fridge",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tbsp",
          "n": "Chia seeds",
          "tag": "chia-seeds",
          "img": "i-chia"
        },
        {
          "q": "~1/4 cup (25 g)",
          "n": "Rolled oats",
          "tag": "oats",
          "img": "i-oats"
        },
        {
          "q": "~3/4 cup (180 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~1/4 apple, diced",
          "n": "Apple",
          "tag": "apple",
          "img": "i-apple"
        },
        {
          "q": "~1/2 banana, sliced",
          "n": "Banana",
          "tag": "banana",
          "img": "i-banana"
        },
        {
          "q": "~1 tbsp",
          "n": "Pumpkin and melon seeds",
          "tag": "pumpkin-seeds",
          "alt": [
            "sunflower-seeds"
          ],
          "img": "i-seeds"
        },
        {
          "q": "~2, chopped",
          "n": "Dates (khajoor)",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "~4 halves",
          "n": "Walnuts",
          "tag": "walnuts",
          "img": "i-walnuts"
        }
      ],
      "steps": [
        {
          "t": "Put the chia seeds in a clean jar.",
          "imgs": [
            "s-chia-1",
            "s-chia-2"
          ]
        },
        {
          "t": "Add the oats on top.",
          "imgs": [
            "s-oats-1",
            "s-oats-2"
          ]
        },
        {
          "t": "Pour in the milk until the oats are covered.",
          "imgs": [
            "s-milk-1",
            "s-milk-2"
          ]
        },
        {
          "t": "Close the lid and keep the jar in the fridge for 2 to 3 hours or overnight.",
          "imgs": [
            "s-fridge-1",
            "s-fridge-2"
          ]
        },
        {
          "t": "Take the jar out, open the lid and stir well.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Add the diced apple.",
          "imgs": [
            "s-apple-1",
            "s-apple-2"
          ]
        },
        {
          "t": "Add the sliced banana.",
          "imgs": [
            "s-banana-1",
            "s-banana-2"
          ]
        },
        {
          "t": "Add the pumpkin and melon seeds.",
          "imgs": [
            "s-seeds-1",
            "s-seeds-2"
          ]
        },
        {
          "t": "Add the chopped dates.",
          "imgs": [
            "s-dates-1",
            "s-dates-2"
          ]
        },
        {
          "t": "Add the walnuts.",
          "imgs": [
            "s-walnuts-1",
            "s-walnuts-2"
          ]
        },
        {
          "t": "Mix it up with a spoon and eat.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "make-ahead",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "savory-beetroot-chia-curd",
      "name": "Savory beetroot chia curd",
      "meal": "Breakfast",
      "minutes": 45,
      "protein": 10,
      "how": "Gas",
      "tools": "Bowl, whisk, grater, small pan (for the tadka), gas, 2 glass jars",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3 tbsp (30 g)",
          "n": "Chia seeds",
          "tag": "chia-seeds",
          "img": "i-chia"
        },
        {
          "q": "~3/4 cup (180 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 cup (240 g)",
          "n": "Thick curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 small",
          "n": "Carrot, grated",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~1 small",
          "n": "Beetroot, grated",
          "tag": "beetroot",
          "img": "i-beetroot"
        },
        {
          "q": "~1 tsp, chopped",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger-chilli"
        },
        {
          "q": "~1, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-ginger-chilli"
        },
        {
          "q": "a small handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 tsp",
          "n": "Oil, for the tadka",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tbsp",
          "n": "Peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "~1/2 tsp",
          "n": "Mustard seeds (rai)",
          "tag": "mustard-seeds",
          "img": "i-mustard-urad"
        },
        {
          "q": "~1/2 tsp",
          "n": "Urad dal",
          "tag": "urad-dal",
          "img": "i-mustard-urad"
        },
        {
          "q": "a pinch",
          "n": "Hing (asafoetida)",
          "tag": "hing",
          "img": "i-hing"
        },
        {
          "q": "1 to 2",
          "n": "Dry red chilli",
          "tag": "dry-red-chilli",
          "img": "i-dry-chilli"
        },
        {
          "q": "a few",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry-leaves"
        }
      ],
      "steps": [
        {
          "t": "Add the chia seeds to a bowl.",
          "imgs": [
            "s-chia-1"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1"
          ]
        },
        {
          "t": "Whisk well so no lumps form.",
          "imgs": [
            "s-whisk-1"
          ]
        },
        {
          "t": "Let it soak for 30 minutes.",
          "imgs": [
            "s-soak-1"
          ]
        },
        {
          "t": "Add the curd and whisk until smooth.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Sprinkle in the salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Grate in the carrot.",
          "imgs": [
            "s-carrot-1"
          ]
        },
        {
          "t": "Grate in the beetroot.",
          "imgs": [
            "s-beet-1"
          ]
        },
        {
          "t": "Add the chopped ginger and green chilli.",
          "imgs": [
            "s-ginger-1"
          ]
        },
        {
          "t": "Add the chopped coriander leaves.",
          "imgs": [
            "s-coriander-1"
          ]
        },
        {
          "t": "Mix well, then spoon the mix into two jars.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-fill-1"
          ]
        },
        {
          "t": "For the tadka, heat the oil in a small pan.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the peanuts and roast until dark.",
          "imgs": [
            "s-peanuts-1",
            "s-peanuts-2"
          ]
        },
        {
          "t": "Add the mustard seeds, urad dal and a pinch of hing.",
          "imgs": [
            "s-mustard-1",
            "s-mustard-2"
          ]
        },
        {
          "t": "Add the dry red chilli and curry leaves.",
          "imgs": [
            "s-leaves-1",
            "s-leaves-2"
          ]
        },
        {
          "t": "Spoon the tadka over each jar.",
          "imgs": [
            "s-tadka-1",
            "s-tadka-2"
          ]
        },
        {
          "t": "Mix well and enjoy.",
          "imgs": [
            "s-eat-1",
            "s-eat-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-fibre"
      ],
      "credit": "The Spicy Story",
      "card": "card"
    },
    {
      "id": "butter-paneer-cashew-gravy",
      "name": "Butter paneer",
      "meal": "Lunch or dinner",
      "minutes": 40,
      "protein": 20,
      "how": "Gas + blender",
      "tools": "Pan, gas, mixie (blender), bowl, knife",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~200 g (1 block)",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~2 tbsp, in two parts",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "~1/2 tsp, in two parts",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp, in two parts",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli-powder"
        },
        {
          "q": "~1 tsp, in two parts",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~10 (15 g)",
          "n": "Cashews (kaju)",
          "tag": "cashews",
          "img": "i-cashews"
        },
        {
          "q": "~1/2 cup (120 ml), warm",
          "n": "Water, to soak the cashews",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~3 medium",
          "n": "Tomatoes",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~2",
          "n": "Dry red chilli",
          "tag": "dry-red-chilli",
          "img": "i-chillies"
        },
        {
          "q": "~1",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-chillies"
        },
        {
          "q": "~1 medium, chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 tsp, crushed",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-paste"
        },
        {
          "q": "~3 cloves, crushed",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-paste"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder (dhaniya)",
          "tag": "coriander-powder",
          "img": "i-coriander-powder"
        },
        {
          "q": "a small handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "opt": true,
          "img": "i-coriander-leaves"
        },
        {
          "q": "~1 tsp",
          "n": "Kasuri methi (dried fenugreek leaves)",
          "tag": "kasuri-methi",
          "opt": true,
          "img": "i-kasuri"
        }
      ],
      "steps": [
        {
          "t": "Cut the paneer into cubes.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Melt some butter in a pan.",
          "imgs": [
            "s-butter-1"
          ]
        },
        {
          "t": "Add some turmeric, red chilli powder and salt to the butter. Stir.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the paneer cubes and coat them in the spice butter.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Fry until golden brown on the sides, then set the paneer aside.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Soak the cashews in warm water.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Put the cashews and tomatoes in the mixie and blend to a smooth puree.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Melt butter in the pan. Add the cumin seeds.",
          "imgs": [
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Add the dry red chillies and green chilli.",
          "imgs": [
            "s-chilli-1"
          ]
        },
        {
          "t": "Add the chopped onion and fry until soft.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the ginger and garlic and fry for a minute.",
          "imgs": [
            "s-paste-1"
          ]
        },
        {
          "t": "Add salt, turmeric, red chilli powder and coriander powder. Fry well.",
          "imgs": [
            "s-masala-1",
            "s-masala-2",
            "s-masala-3",
            "s-masala-4"
          ]
        },
        {
          "t": "Pour in the tomato and cashew puree and stir until thick.",
          "imgs": [
            "s-puree-1",
            "s-puree-2"
          ]
        },
        {
          "t": "Add the fried paneer cubes and mix gently.",
          "imgs": [
            "s-paneer2-1",
            "s-paneer2-2"
          ]
        },
        {
          "t": "Garnish with chopped coriander leaves and kasuri methi.",
          "imgs": [
            "s-garnish-1",
            "s-garnish-2"
          ]
        },
        {
          "t": "Serve hot.",
          "imgs": [
            "s-serve-1"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-protein"
      ],
      "credit": "food and frolic",
      "card": "card"
    },
    {
      "id": "masala-paneer-buddha-bowl",
      "name": "Masala paneer buddha bowl",
      "meal": "Lunch or dinner",
      "minutes": 45,
      "protein": 25,
      "how": "Gas",
      "tools": "Pan, gas, mixie (small jar), bowls, spoons",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~150 g (8 cubes)",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~3 tbsp, in parts",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/4 tsp",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/4 tsp",
          "n": "Pale spice powder (looks like chaat masala or amchur)",
          "tag": "chaat-masala",
          "alt": [
            "amchur"
          ],
          "img": "i-pale"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Brown spice powder (looks like cumin or garam masala)",
          "tag": "cumin-powder",
          "alt": [
            "garam-masala"
          ],
          "img": "i-brown"
        },
        {
          "q": "~2 tsp, in parts",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~10 cloves, chopped, in parts",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "a small handful, chopped",
          "n": "Green garlic (seasonal)",
          "tag": "green-garlic",
          "opt": true,
          "img": "i-green-garlic"
        },
        {
          "q": "~3",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "~1 cup, loosely packed",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 cup, loosely packed",
          "n": "Spinach",
          "tag": "spinach",
          "img": "i-spinach"
        },
        {
          "q": "1 (about 2 tbsp juice)",
          "n": "Lemon",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "~1 1/2 medium (1 for the rice, 1/2 for the salad)",
          "n": "Onion, sliced",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2 cups (300 g)",
          "n": "Cooked rice, basmati",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "a pinch",
          "n": "Hing (asafoetida)",
          "tag": "hing"
        },
        {
          "q": "~1 medium, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato",
          "alt": [
            "carrot"
          ]
        },
        {
          "q": "~1 cup (100 g)",
          "n": "Cauliflower, small florets",
          "tag": "cauliflower",
          "img": "i-cauli"
        },
        {
          "q": "~1/2 cup (75 g)",
          "n": "Green peas",
          "tag": "peas",
          "img": "i-peas"
        },
        {
          "q": "~1 cup (240 g)",
          "n": "Thick curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/2 medium, grated",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1 small, grated",
          "n": "Beetroot",
          "tag": "beetroot",
          "img": "i-beet"
        }
      ],
      "steps": [
        {
          "t": "Cut the paneer into cubes and put them in a bowl.",
          "imgs": [
            "s-cut-2"
          ]
        },
        {
          "t": "Drizzle some oil over the paneer.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the turmeric and the pale spice powder.",
          "imgs": [
            "s-spice-1"
          ]
        },
        {
          "t": "Add the red chilli powder and the brown spice powder.",
          "imgs": [
            "s-spice-3",
            "s-spice-4"
          ]
        },
        {
          "t": "Add the salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Toss gently until every cube is coated. Keep aside.",
          "imgs": [
            "s-toss-2"
          ]
        },
        {
          "t": "Heat oil in a pan on medium heat.",
          "imgs": [
            "s-heat-1"
          ]
        },
        {
          "t": "Add the chopped garlic and green garlic. Stir for a few seconds.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Add the marinated paneer.",
          "imgs": [
            "s-fry-1"
          ]
        },
        {
          "t": "Fry, turning, until golden on all sides. Take it out.",
          "imgs": [
            "s-fry-4"
          ]
        },
        {
          "t": "Put the green chillies in a small mixie jar.",
          "imgs": [
            "s-chutney-1"
          ]
        },
        {
          "t": "Add the coriander leaves.",
          "imgs": [
            "s-chutney-3"
          ]
        },
        {
          "t": "Press in the spinach leaves.",
          "imgs": [
            "s-chutney-5"
          ]
        },
        {
          "t": "Add the salt, a squeeze of lemon and the chopped garlic.",
          "imgs": [
            "s-chutney-7",
            "s-chutney-9"
          ]
        },
        {
          "t": "Blend to a smooth green chutney.",
          "imgs": [
            "s-blend-2"
          ]
        },
        {
          "t": "Heat oil in a pan.",
          "imgs": [
            "s-rice-oil-1"
          ]
        },
        {
          "t": "Add the sliced onion and cook until soft.",
          "imgs": [
            "s-rice-onion-1"
          ]
        },
        {
          "t": "Add the chopped garlic and green chilli. Stir.",
          "imgs": [
            "s-rice-garlic-1",
            "s-rice-garlic-2"
          ]
        },
        {
          "t": "Pour in the green chutney and cook until thick.",
          "imgs": [
            "s-rice-chutney-1"
          ]
        },
        {
          "t": "Add the cooked rice.",
          "imgs": [
            "s-rice-add-1"
          ]
        },
        {
          "t": "Add salt and mix well until every grain is green.",
          "imgs": [
            "s-rice-mix-1",
            "s-rice-mix-2"
          ]
        },
        {
          "t": "Put sliced onion in a bowl.",
          "imgs": [
            "s-onion-2"
          ]
        },
        {
          "t": "Squeeze lemon juice over the onion, add salt and mix.",
          "imgs": [
            "s-onion-3",
            "s-onion-4"
          ]
        },
        {
          "t": "Heat oil in a pan. Add the chopped garlic and a pinch of hing.",
          "imgs": [
            "s-veg-garlic-1"
          ]
        },
        {
          "t": "Add the tomato and stir.",
          "imgs": [
            "s-veg-tomato-1"
          ]
        },
        {
          "t": "Add the cauliflower florets.",
          "imgs": [
            "s-veg-cauli-1"
          ]
        },
        {
          "t": "Add the green peas.",
          "imgs": [
            "s-veg-peas-1"
          ]
        },
        {
          "t": "Sprinkle a little salt and stir for 1 to 2 minutes.",
          "imgs": [
            "s-veg-salt-1"
          ]
        },
        {
          "t": "Put thick curd in a bowl.",
          "imgs": [
            "s-raita-1"
          ]
        },
        {
          "t": "Add the grated cucumber.",
          "imgs": [
            "s-raita-3"
          ]
        },
        {
          "t": "Add the grated beetroot.",
          "imgs": [
            "s-raita-4"
          ]
        },
        {
          "t": "Add a pinch of salt and the chopped coriander leaves.",
          "imgs": [
            "s-raita-6",
            "s-raita-7"
          ]
        },
        {
          "t": "Mix well until the raita turns pink.",
          "imgs": [
            "s-raita-8"
          ]
        },
        {
          "t": "Put the fried paneer in a wide bowl.",
          "imgs": [
            "s-bowl-1"
          ]
        },
        {
          "t": "Add the sauteed vegetables next to the paneer.",
          "imgs": [
            "s-bowl-3"
          ]
        },
        {
          "t": "Add the lemon-onion salad and the chutney rice.",
          "imgs": [
            "s-bowl-5",
            "s-bowl-6"
          ]
        },
        {
          "t": "Serve with a bowl of beetroot raita and a lemon wedge.",
          "imgs": [
            "s-serve-1"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-protein"
      ],
      "credit": "The Pink Apron (Jalpa Gada)",
      "card": "card"
    },
    {
      "id": "oats-poha-makhana-namkeen",
      "name": "Oats poha makhana namkeen",
      "meal": "Snack",
      "minutes": 25,
      "protein": 10,
      "how": "Gas",
      "tools": "Wide pan, gas, spatula, airtight tin",
      "serves": 6,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 1/2 cups (~120 g)",
          "n": "Rolled oats",
          "tag": "oats",
          "img": "i-oats"
        },
        {
          "q": "1 cup (~60 g)",
          "n": "Poha (thin flattened rice)",
          "tag": "poha",
          "img": "i-poha"
        },
        {
          "q": "2 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Mustard seeds (rai)",
          "tag": "mustard-seeds",
          "img": "i-mustard"
        },
        {
          "q": "~1 tsp",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-fennel"
        },
        {
          "q": "a pinch",
          "n": "Hing (asafoetida)",
          "tag": "hing",
          "img": "i-hing"
        },
        {
          "q": "a small handful",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry"
        },
        {
          "q": "~2 cups (30 g)",
          "n": "Makhana (fox nuts)",
          "tag": "makhana",
          "img": "i-makhana"
        },
        {
          "q": "~1/4 cup",
          "n": "Roasted chana dal (bhuna chana)",
          "tag": "roasted-chana",
          "img": "i-chana"
        },
        {
          "q": "~1/4 cup (35 g)",
          "n": "Peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "~10",
          "n": "Almonds",
          "tag": "almonds",
          "img": "i-almonds"
        },
        {
          "q": "~8 halves",
          "n": "Walnuts",
          "tag": "walnuts",
          "img": "i-walnuts"
        },
        {
          "q": "~2 tbsp",
          "n": "Pumpkin seeds",
          "tag": "pumpkin-seeds",
          "img": "i-pumpkin"
        },
        {
          "q": "~1 tbsp",
          "n": "Sesame seeds (til)",
          "tag": "sesame-seeds",
          "img": "i-sesame"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Amchur (dry mango powder)",
          "tag": "amchur",
          "img": "i-amchur"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        }
      ],
      "steps": [
        {
          "t": "Add the oats to a dry wide pan.",
          "imgs": [
            "s-oats-1",
            "s-oats-2"
          ]
        },
        {
          "t": "Dry roast the oats on low heat, stirring, until light golden. Set aside.",
          "imgs": [
            "s-oats-3",
            "s-oats-4"
          ]
        },
        {
          "t": "Add the poha to the dry pan.",
          "imgs": [
            "s-poha-1"
          ]
        },
        {
          "t": "Roast the poha on low heat until crisp. Set it aside with the oats.",
          "imgs": [
            "s-poha-2",
            "s-poha-3",
            "s-poha-4"
          ]
        },
        {
          "t": "Heat 2 tbsp oil in the pan.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the mustard seeds, fennel seeds and a pinch of hing.",
          "imgs": [
            "s-tadka-1",
            "s-tadka-2"
          ]
        },
        {
          "t": "Add the curry leaves.",
          "imgs": [
            "s-curry-1",
            "s-curry-2"
          ]
        },
        {
          "t": "Add the makhana.",
          "imgs": [
            "s-makhana-1",
            "s-makhana-2"
          ]
        },
        {
          "t": "Add the roasted chana dal and peanuts.",
          "imgs": [
            "s-chana-1",
            "s-chana-2"
          ]
        },
        {
          "t": "Roast on low heat, stirring, until the makhana turns crisp.",
          "imgs": [
            "s-roast-1"
          ]
        },
        {
          "t": "Add the almonds and walnuts.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2"
          ]
        },
        {
          "t": "Add the pumpkin seeds and sesame seeds.",
          "imgs": [
            "s-seeds-1",
            "s-seeds-2"
          ]
        },
        {
          "t": "Add the turmeric and red chilli powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the amchur (dry mango powder) and the salt.",
          "imgs": [
            "s-spice-3",
            "s-spice-4"
          ]
        },
        {
          "t": "Stir well so every piece is coated.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Add the roasted oats and poha back to the pan.",
          "imgs": [
            "s-back-1",
            "s-back-2"
          ]
        },
        {
          "t": "Mix everything well on low heat.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Let it cool, then pour it into an airtight tin.",
          "imgs": [
            "s-tin-1",
            "s-tin-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "make-ahead",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "paneer-corn-spinach-sandwich",
      "name": "Paneer corn spinach sandwich",
      "meal": "Breakfast",
      "minutes": 20,
      "protein": 30,
      "how": "Gas",
      "tools": "Pan, tawa (flat griddle), gas, spatula",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tbsp, plus a little for the tawa",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~4 cloves, chopped",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~2, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~1 cup, loosely packed",
          "n": "Spinach, chopped (the leaves look like lettuce, either works)",
          "tag": "spinach",
          "img": "i-spinach",
          "alt": [
            "lettuce"
          ]
        },
        {
          "q": "~1/4 cup",
          "n": "Sweet corn kernels",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~100 g, grated",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1/4 tsp",
          "n": "Salt",
          "tag": "salt"
        },
        {
          "q": "3 slices",
          "n": "Bread",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "~2 tbsp",
          "n": "Green chutney (mint-coriander)",
          "tag": "green-chutney",
          "img": "i-chutney"
        },
        {
          "q": "~2 tbsp",
          "n": "White spread (looks like cheese spread or thick curd)",
          "tag": "cheese",
          "alt": [
            "curd"
          ],
          "opt": true,
          "img": "i-spread"
        },
        {
          "q": "a few rings",
          "n": "Onion, sliced in rings",
          "tag": "onion",
          "opt": true,
          "img": "i-onion"
        },
        {
          "q": "2 slices",
          "n": "Tomato, sliced",
          "tag": "tomato",
          "opt": true,
          "img": "i-tomato"
        }
      ],
      "steps": [
        {
          "t": "Heat the oil in a pan.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the cumin seeds.",
          "imgs": [
            "s-cumin-1"
          ]
        },
        {
          "t": "Add the chopped garlic and green chilli.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Add the chilli flakes and stir for a few seconds.",
          "imgs": [
            "s-flakes-1",
            "s-flakes-2"
          ]
        },
        {
          "t": "Add the spinach.",
          "imgs": [
            "s-spinach-1"
          ]
        },
        {
          "t": "Add the sweet corn.",
          "imgs": [
            "s-corn-1"
          ]
        },
        {
          "t": "Add the grated paneer and the salt.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Mix well on medium heat. The stuffing is ready.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Put a bread slice on a plate.",
          "imgs": [
            "s-bread-1"
          ]
        },
        {
          "t": "Spread green chutney on the bread.",
          "imgs": [
            "s-chutney-1"
          ]
        },
        {
          "t": "Spoon the paneer stuffing on top.",
          "imgs": [
            "s-fill-1",
            "s-fill-2"
          ]
        },
        {
          "t": "Cover with a second bread slice.",
          "imgs": [
            "s-bread-2"
          ]
        },
        {
          "t": "Spread the white spread on the second slice.",
          "imgs": [
            "s-spread-1"
          ]
        },
        {
          "t": "Add more stuffing on top.",
          "imgs": [
            "s-fill-3",
            "s-fill-4"
          ]
        },
        {
          "t": "Add an onion ring and a tomato slice.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
          ]
        },
        {
          "t": "Close with the third bread slice.",
          "imgs": [
            "s-top-1"
          ]
        },
        {
          "t": "Heat a tawa and brush it with oil.",
          "imgs": [
            "s-tawa-1"
          ]
        },
        {
          "t": "Place the sandwich on the tawa.",
          "imgs": [
            "s-tawa-2"
          ]
        },
        {
          "t": "Cook on both sides until golden and crisp. Press with a spatula.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Cut into triangles and serve with green chutney.",
          "imgs": [
            "s-serve-1"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "chickpea-rajma-moong-curd-salad",
      "name": "Chickpea rajma moong curd salad",
      "meal": "Lunch or dinner",
      "minutes": 10,
      "protein": 15,
      "how": "No cooking",
      "tools": "Big bowl, spoon",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3/4 cup (120 g), boiled",
          "n": "White chickpeas (kabuli chana)",
          "tag": "chickpeas",
          "img": "i-chickpeas"
        },
        {
          "q": "~3/4 cup (120 g), boiled",
          "n": "Rajma (kidney beans)",
          "tag": "rajma",
          "img": "i-rajma"
        },
        {
          "q": "~3/4 cup (120 g), boiled",
          "n": "Whole green moong",
          "tag": "moong-whole",
          "img": "i-moong"
        },
        {
          "q": "~1/2 cup (120 g)",
          "n": "Thick curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1 medium, chopped",
          "n": "Onion (red)",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 medium, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "a small handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/4 tsp",
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        }
      ],
      "steps": [
        {
          "t": "Put the boiled white chickpeas in a big bowl.",
          "imgs": [
            "s-chana-1",
            "s-chana-2"
          ]
        },
        {
          "t": "Add the boiled rajma.",
          "imgs": [
            "s-rajma-1",
            "s-rajma-2"
          ]
        },
        {
          "t": "Add the boiled whole moong.",
          "imgs": [
            "s-moong-1",
            "s-moong-2"
          ]
        },
        {
          "t": "Add the thick curd on top.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add the chopped onion.",
          "imgs": [
            "s-onion-1"
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
          "t": "Add the chopped coriander leaves.",
          "imgs": [
            "s-coriander-1"
          ]
        },
        {
          "t": "Sprinkle in the salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Add the black pepper.",
          "imgs": [
            "s-pepper-1"
          ]
        },
        {
          "t": "Mix well with a spoon and serve.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "quick",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "aloo-katliyan",
      "name": "Aloo katliyan",
      "meal": "Side",
      "minutes": 20,
      "protein": 5,
      "how": "Gas",
      "tools": "Kadhai (wok), gas, spoon, knife",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "2 tbsp",
          "n": "Mustard oil",
          "tag": "oil",
          "alt": [
            "ghee"
          ],
          "img": "i-oil"
        },
        {
          "q": "1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "1 tsp",
          "n": "Nigella seeds (kalonji)",
          "tag": "nigella-seeds",
          "img": "i-nigella"
        },
        {
          "q": "1/2 tsp",
          "n": "Hing (asafoetida)",
          "tag": "hing",
          "img": "i-hing"
        },
        {
          "q": "~3 medium (350 g)",
          "n": "Potatoes, sliced into thin rounds",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "to taste (~1 tsp)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "2 to 3 pinches",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "2, crushed",
          "n": "Dry red chilli",
          "tag": "dry-red-chilli",
          "alt": [
            "chilli-flakes"
          ],
          "img": "i-chilli"
        },
        {
          "q": "2 medium",
          "n": "Onion, sliced",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "2, cut in strips",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "1 tbsp",
          "n": "Dry fenugreek leaves (kasuri methi)",
          "tag": "kasuri-methi",
          "opt": true,
          "img": "i-kasuri"
        },
        {
          "q": "~1/4 cup, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        }
      ],
      "steps": [
        {
          "t": "Peel the potatoes and cut them into thin round slices.",
          "imgs": [
            "s-slice-1"
          ]
        },
        {
          "t": "Heat 2 tbsp mustard oil in a kadhai on the gas.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add 1 tsp cumin seeds.",
          "imgs": [
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Add 1 tsp nigella seeds (kalonji).",
          "imgs": [
            "s-nigella-1",
            "s-nigella-2"
          ]
        },
        {
          "t": "Add 1/2 tsp hing.",
          "imgs": [
            "s-hing-1",
            "s-hing-2"
          ]
        },
        {
          "t": "Add the potato slices.",
          "imgs": [
            "s-potato-1",
            "s-potato-2"
          ]
        },
        {
          "t": "Spread the slices out and shallow fry them.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Sprinkle salt over the potatoes.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Add 2 to 3 pinches of turmeric.",
          "imgs": [
            "s-turmeric-1",
            "s-turmeric-2"
          ]
        },
        {
          "t": "Add the 2 crushed dry red chillies.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Stir often on medium to high heat.",
          "imgs": [
            "s-stir-1",
            "s-stir-2",
            "s-stir-3"
          ]
        },
        {
          "t": "Cook until the potato is about half cooked, with golden edges.",
          "imgs": [
            "s-half-1",
            "s-half-2"
          ]
        },
        {
          "t": "Add the sliced onion.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the 2 green chillies, cut in strips.",
          "imgs": [
            "s-greenchilli-1"
          ]
        },
        {
          "t": "Cook for 5 to 6 minutes, stirring, until the potato is golden and soft.",
          "imgs": [
            "s-golden-1",
            "s-golden-2"
          ]
        },
        {
          "t": "Sprinkle 1 tbsp dry fenugreek leaves (kasuri methi) on top.",
          "imgs": [
            "s-kasuri-1",
            "s-kasuri-2"
          ]
        },
        {
          "t": "Add the chopped coriander leaves.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        },
        {
          "t": "Toss everything together and serve hot.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "credit": "Honest Kitchen",
      "card": "card"
    },
    {
      "id": "eggless-suji-chocolate-cake",
      "name": "Eggless suji chocolate cake",
      "meal": "Snack",
      "minutes": 120,
      "protein": 5,
      "how": "Gas",
      "tools": "Kadhai (big pot with lid and stand), round cake tin, baking paper, mixie, sieve, whisk",
      "serves": 6,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1/2 cup (120 g), chopped",
          "n": "Jaggery (gud)",
          "tag": "jaggery",
          "img": "i-jaggery"
        },
        {
          "q": "2 tbsp",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "1/4 cup",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "1/3 cup",
          "n": "Curd (dahi), or buttermilk",
          "tag": "curd",
          "alt": [
            "buttermilk"
          ],
          "img": "i-curd"
        },
        {
          "q": "~3/4 cup (120 g), ground fine",
          "n": "Suji (rava)",
          "tag": "suji",
          "img": "i-suji"
        },
        {
          "q": "1/4 cup + 2 tbsp, in two parts",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "3 tbsp",
          "n": "Milk powder",
          "tag": "milk-powder",
          "img": "i-milkpowder"
        },
        {
          "q": "1/4 cup",
          "n": "Cocoa powder",
          "tag": "cocoa",
          "img": "i-cocoa"
        },
        {
          "q": "1 tsp",
          "n": "Baking powder",
          "tag": "baking-powder",
          "img": "i-bpowder"
        },
        {
          "q": "1/2 tsp",
          "n": "Baking soda",
          "tag": "baking-soda",
          "img": "i-bsoda"
        },
        {
          "q": "1 pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/4 cup, chopped",
          "n": "Mixed dry fruits (almonds, pistachios, walnuts)",
          "tag": "almonds",
          "alt": [
            "walnuts",
            "pistachios"
          ],
          "opt": true,
          "img": "i-nuts"
        }
      ],
      "steps": [
        {
          "t": "Chop the jaggery into small pieces.",
          "imgs": [
            "s-jag-1",
            "s-jag-2"
          ]
        },
        {
          "t": "Put the jaggery in a steel pan with 2 tbsp water.",
          "imgs": [
            "s-pan-1",
            "s-pan-2"
          ]
        },
        {
          "t": "Melt it on low flame, stirring, until it turns into syrup.",
          "imgs": [
            "s-melt-1",
            "s-melt-2"
          ]
        },
        {
          "t": "Strain the jaggery syrup into a bowl.",
          "imgs": [
            "s-strain-1",
            "s-strain-2"
          ]
        },
        {
          "t": "Keep the syrup aside to cool.",
          "imgs": [
            "s-cool-1"
          ]
        },
        {
          "t": "Grind the suji (rava) to a fine powder in the mixie.",
          "imgs": [
            "s-suji-1",
            "s-suji-2",
            "s-suji-3"
          ]
        },
        {
          "t": "Add the oil to the cooled jaggery syrup.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the curd and whisk well.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add the suji powder and mix.",
          "imgs": [
            "s-powder-1",
            "s-powder-2"
          ]
        },
        {
          "t": "Add the milk and mix to a smooth batter.",
          "imgs": [
            "s-milk-1",
            "s-milk-2"
          ]
        },
        {
          "t": "Cover the bowl with a plate. Keep it aside for 30 minutes to 1 hour.",
          "imgs": [
            "s-rest-1",
            "s-rest-2"
          ]
        },
        {
          "t": "Add the milk powder and cocoa powder to a sieve.",
          "imgs": [
            "s-dry-1",
            "s-dry-2"
          ]
        },
        {
          "t": "Add the baking powder, baking soda and salt to the sieve.",
          "imgs": [
            "s-dry-3",
            "s-dry-4",
            "s-dry-5"
          ]
        },
        {
          "t": "Sift the dry mix over the batter.",
          "imgs": [
            "s-sift-1",
            "s-sift-2"
          ]
        },
        {
          "t": "Fold the dry mix into the batter.",
          "imgs": [
            "s-fold-1",
            "s-fold-2"
          ]
        },
        {
          "t": "Add 2 tbsp milk and mix to a smooth batter.",
          "imgs": [
            "s-milk2-1",
            "s-milk2-2"
          ]
        },
        {
          "t": "Line a round cake tin with baking paper.",
          "imgs": [
            "s-line-1"
          ]
        },
        {
          "t": "Pour the batter into the tin.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Sprinkle the chopped dry fruits over the top.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2"
          ]
        },
        {
          "t": "Put the tin on the stand inside the kadhai.",
          "imgs": [
            "s-kadhai-1",
            "s-kadhai-2",
            "s-kadhai-3"
          ]
        },
        {
          "t": "Cover with the lid and bake for about 45 minutes.",
          "imgs": [
            "s-bake-1",
            "s-bake-2"
          ]
        },
        {
          "t": "Check with a toothpick.",
          "imgs": [
            "s-check-1",
            "s-check-2"
          ]
        },
        {
          "t": "Take the tin out with a mitt. Keep aside to cool.",
          "imgs": [
            "s-cool-2",
            "s-cool-3"
          ]
        },
        {
          "t": "Take the cake out of the tin.",
          "imgs": [
            "s-unmould-1",
            "s-unmould-2"
          ]
        },
        {
          "t": "Cut the cake into slices and serve.",
          "imgs": [
            "s-slice-1",
            "s-slice-2",
            "s-slice-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "credit": "anyonecancookwithdr.alisha",
      "card": "card"
    },
    {
      "id": "paneer-besan-chilla",
      "name": "Paneer besan chilla",
      "meal": "Breakfast",
      "minutes": 20,
      "protein": 25,
      "how": "Gas",
      "tools": "Non-stick pan, gas, bowl, whisk, grater, ladle, spatula",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "100 g (~1 cup)",
          "n": "Besan (gram flour)",
          "tag": "besan",
          "img": "i-besan"
        },
        {
          "q": "100 g",
          "n": "Paneer, grated",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~½ medium, chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 small, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~½ cup, chopped",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~1 handful, chopped",
          "n": "Methi (fenugreek) leaves",
          "tag": "fenugreek-leaves",
          "img": "i-leaves",
          "alt": [
            "spinach",
            "coriander-leaves"
          ]
        },
        {
          "q": "~½ tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~½ tsp",
          "n": "Garlic powder (beige powder)",
          "tag": "garlic-powder",
          "img": "i-spice",
          "opt": true
        },
        {
          "q": "~½ tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~⅔ cup (150 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tsp, for the pan",
          "n": "Oil",
          "tag": "oil"
        },
        {
          "q": "~½ cup, to dip",
          "n": "Curd",
          "tag": "curd",
          "img": "i-curd",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put 100 g besan in a big bowl.",
          "imgs": [
            "s-besan-1",
            "s-besan-2",
            "s-besan-3"
          ]
        },
        {
          "t": "Grate 100 g paneer over the besan.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2",
            "s-paneer-3"
          ]
        },
        {
          "t": "Add chopped onion.",
          "imgs": [
            "s-onion-1"
          ]
        },
        {
          "t": "Add chopped tomato.",
          "imgs": [
            "s-tomato-1"
          ]
        },
        {
          "t": "Add chopped capsicum.",
          "imgs": [
            "s-capsicum-1",
            "s-capsicum-2"
          ]
        },
        {
          "t": "Add the chopped leaves (methi).",
          "imgs": [
            "s-leaves-1",
            "s-leaves-2"
          ]
        },
        {
          "t": "Add salt, garlic powder and red chilli powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Whisk to a thick, smooth batter.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2",
            "s-whisk-3"
          ]
        },
        {
          "t": "Heat a non-stick pan on gas. Pour a ladle of batter.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Spread the batter round with the back of the ladle.",
          "imgs": [
            "s-spread-1"
          ]
        },
        {
          "t": "Cook until the underside turns golden brown.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Flip it and cook the other side until golden.",
          "imgs": [
            "s-flip-1",
            "s-flip-2"
          ]
        },
        {
          "t": "Serve hot with a bowl of curd.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "roasted-seven-seed-mix",
      "name": "Roasted seven seed mix",
      "meal": "Snack",
      "minutes": 25,
      "protein": 0,
      "how": "Gas",
      "tools": "Pan, gas, plate, airtight jar, spoon",
      "serves": 14,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tbsp (20 g)",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-fennel"
        },
        {
          "q": "~2 tbsp (20 g)",
          "n": "Flax seeds (alsi)",
          "tag": "flax-seeds",
          "img": "i-flax"
        },
        {
          "q": "~2 tbsp (20 g)",
          "n": "White sesame seeds (til)",
          "tag": "sesame-seeds",
          "img": "i-sesame"
        },
        {
          "q": "~2 tbsp (20 g)",
          "n": "Pumpkin seeds",
          "tag": "pumpkin-seeds",
          "img": "i-pumpkin"
        },
        {
          "q": "~2 tbsp (20 g)",
          "n": "Melon seeds (magaz)",
          "tag": "melon-seeds",
          "img": "i-melon"
        },
        {
          "q": "~2 tbsp (20 g)",
          "n": "Sunflower seeds",
          "tag": "sunflower-seeds",
          "img": "i-sunflower"
        },
        {
          "q": "~2 tbsp (20 g)",
          "n": "Ajwain (carom seeds)",
          "tag": "ajwain",
          "img": "i-ajwain"
        }
      ],
      "steps": [
        {
          "t": "Put one kind of seed in a dry pan on the gas.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Roast it until it looks lightly golden.",
          "imgs": [
            "s-roast-1",
            "s-roast-2",
            "s-roast-3"
          ]
        },
        {
          "t": "Roast each of the other seeds the same way, one kind at a time.",
          "imgs": [
            "s-each-1",
            "s-each-2",
            "s-each-3"
          ]
        },
        {
          "t": "Spread all the roasted seeds on a plate and let them cool.",
          "imgs": [
            "s-cool-1",
            "s-cool-2",
            "s-cool-3"
          ]
        },
        {
          "t": "Mix all the seeds together by hand.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Fill an airtight jar with the mix.",
          "imgs": [
            "s-store-1",
            "s-store-2"
          ]
        },
        {
          "t": "Take 1 tbsp of the mix after a meal.",
          "imgs": [
            "s-eat-1"
          ]
        }
      ],
      "tags": [
        "gas",
        "make-ahead"
      ],
      "card": "card"
    },
    {
      "id": "simple-paneer-besan-chilla",
      "name": "Simple paneer besan chilla",
      "meal": "Breakfast",
      "minutes": 20,
      "protein": 25,
      "how": "Gas",
      "tools": "Non-stick tawa, gas, bowl, spoon, grater, spatula",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "100 g (~1 cup)",
          "n": "Besan (gram flour)",
          "tag": "besan",
          "img": "i-besan"
        },
        {
          "q": "100 g",
          "n": "Paneer, grated",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~½ cup, chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~¼ cup, chopped",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~2, sliced",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-gchilli"
        },
        {
          "q": "~1 handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~½ cup (100 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~½ tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "a little, to dip",
          "n": "Tomato ketchup",
          "tag": "tomato-ketchup",
          "img": "i-ketchup",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put 100 g besan in a bowl.",
          "imgs": [
            "s-besan-1",
            "s-besan-2",
            "s-besan-3"
          ]
        },
        {
          "t": "Add 100 g grated paneer.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2",
            "s-paneer-3"
          ]
        },
        {
          "t": "Add chopped onion.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add chopped capsicum.",
          "imgs": [
            "s-capsicum-1",
            "s-capsicum-2"
          ]
        },
        {
          "t": "Add sliced green chilli.",
          "imgs": [
            "s-gchilli-1",
            "s-gchilli-2"
          ]
        },
        {
          "t": "Add chopped coriander.",
          "imgs": [
            "s-cori-1",
            "s-cori-2"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Add the salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Mix well with a spoon into a thick batter.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Heat a non-stick tawa on gas. Pour the batter on it.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Spread the batter into a thin round.",
          "imgs": [
            "s-spread-1",
            "s-spread-2"
          ]
        },
        {
          "t": "Cook until golden, then flip with a spatula and cook the other side.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Serve hot. Dip in ketchup if you like.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-protein"
      ],
      "credit": "Myfunfoodgallery (watermark on the food footage)",
      "card": "card"
    },
    {
      "id": "moong-spinach-pancake",
      "name": "Moong spinach pancake",
      "meal": "Breakfast",
      "minutes": 30,
      "protein": 15,
      "how": "Gas",
      "tools": "Mixie (blender), non-stick pan, gas, ladle, spatula, strainer",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~¾ cup (150 g)",
          "n": "Whole green moong",
          "tag": "moong-whole",
          "img": "i-moong",
          "alt": [
            "moong-dal"
          ]
        },
        {
          "q": "~¼ cup (50 g)",
          "n": "Rice",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "enough to cover",
          "n": "Water, for washing and soaking",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~2 big handfuls (60 g)",
          "n": "Spinach (palak)",
          "tag": "spinach",
          "img": "i-spinach"
        },
        {
          "q": "~1 inch (10 g)",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~½ tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp, for the pan",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 medium (150 g), boiled and mashed with spices",
          "n": "Potato filling",
          "tag": "potato",
          "img": "i-potato",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the moong and rice in a bowl.",
          "imgs": [
            "s-bowl-1",
            "s-bowl-2"
          ]
        },
        {
          "t": "Pour in water and rub the grains with your hand to wash them.",
          "imgs": [
            "s-wash-1",
            "s-wash-2"
          ]
        },
        {
          "t": "Drain them in a strainer.",
          "imgs": [
            "s-drain-1",
            "s-drain-2"
          ]
        },
        {
          "t": "Cover with water again and soak for 4 to 5 hours.",
          "imgs": [
            "s-soak-1"
          ]
        },
        {
          "t": "Put the soaked grains in the blender with spinach and ginger.",
          "imgs": [
            "s-ginger-1",
            "i-spinach"
          ]
        },
        {
          "t": "Add salt and the other spices.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Blend to a smooth, pourable green batter.",
          "imgs": [
            "s-batter-1",
            "s-batter-2"
          ]
        },
        {
          "t": "Heat a non-stick pan on gas. Add a little oil.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Pour a ladle of batter and spread it round.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Cook until set, then flip it over.",
          "imgs": [
            "s-flip-1",
            "s-flip-2"
          ]
        },
        {
          "t": "Put the pancake on a plate. Spread the potato filling on top, if using.",
          "imgs": [
            "s-plate-1",
            "s-fill-1",
            "s-fill-2",
            "s-fill-3"
          ]
        },
        {
          "t": "Roll it up.",
          "imgs": [
            "s-roll-1"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "card": "card"
    },
    {
      "id": "date-nut-seed-roll",
      "name": "Date nut seed roll",
      "meal": "Snack",
      "minutes": 45,
      "protein": 5,
      "how": "Gas",
      "tools": "Non-stick pan, gas, small mixie jar, knife, board, baking paper",
      "serves": 8,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tbsp (20 g)",
          "n": "Pumpkin seeds",
          "tag": "pumpkin-seeds",
          "img": "i-pumpkin"
        },
        {
          "q": "~1 tbsp (10 g)",
          "n": "Flax seeds (alsi)",
          "tag": "flax-seeds",
          "img": "i-flax"
        },
        {
          "q": "~2 tbsp (20 g)",
          "n": "Sunflower seeds",
          "tag": "sunflower-seeds",
          "img": "i-sunflower"
        },
        {
          "q": "~20 (about 250 g)",
          "n": "Dates (khajur), seeds removed",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "~1 tbsp",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~⅓ cup (40 g)",
          "n": "Cashews",
          "tag": "cashews",
          "img": "i-cashew"
        },
        {
          "q": "~⅓ cup (45 g)",
          "n": "Almonds",
          "tag": "almonds",
          "img": "i-almond"
        },
        {
          "q": "~¼ cup (30 g)",
          "n": "Pistachios",
          "tag": "pistachios",
          "img": "i-pistachio"
        },
        {
          "q": "~⅓ cup (50 g)",
          "n": "White sesame seeds (til), for coating",
          "tag": "sesame-seeds",
          "img": "i-sesame"
        }
      ],
      "steps": [
        {
          "t": "Roast the pumpkin, flax and sunflower seeds in a dry pan. Keep aside.",
          "imgs": [
            "s-seeds-1",
            "s-seeds-2",
            "s-seeds-3"
          ]
        },
        {
          "t": "Take the seeds out of the dates.",
          "imgs": [
            "s-dates-1",
            "s-dates-2"
          ]
        },
        {
          "t": "Blend the dates to a thick paste in a mixie.",
          "imgs": [
            "s-blend-1",
            "s-blend-2",
            "s-blend-3"
          ]
        },
        {
          "t": "Put a spoon of ghee in a pan on the gas.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2"
          ]
        },
        {
          "t": "Add the date paste and cook it, stirring.",
          "imgs": [
            "s-paste-1",
            "s-paste-2",
            "s-paste-3"
          ]
        },
        {
          "t": "In a dry pan, roast the cashews, almonds and pistachios.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2",
            "s-nuts-3",
            "s-roast-1",
            "s-roast-2"
          ]
        },
        {
          "t": "Chop the roasted nuts.",
          "imgs": [
            "s-chop-1",
            "s-chop-2",
            "s-chop-3"
          ]
        },
        {
          "t": "Add the chopped nuts and roasted seeds to the date paste.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Mix everything well.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Lay baking paper on a board.",
          "imgs": [
            "s-paper-1",
            "s-paper-2"
          ]
        },
        {
          "t": "Put the mixture on the paper and roll it into a log.",
          "imgs": [
            "s-roll-1",
            "s-roll-2"
          ]
        },
        {
          "t": "Roast the white sesame seeds in a dry pan.",
          "imgs": [
            "s-sesame-1",
            "s-sesame-2",
            "s-sesame-3"
          ]
        },
        {
          "t": "Spread the sesame on the board.",
          "imgs": [
            "s-board-1",
            "s-board-2",
            "s-board-3"
          ]
        },
        {
          "t": "Roll the log in the sesame until it is coated.",
          "imgs": [
            "s-coat-1",
            "s-coat-2",
            "s-coat-3"
          ]
        },
        {
          "t": "Cut the log into slices.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Put the slices on a plate and serve.",
          "imgs": [
            "s-serve-1"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "make-ahead"
      ],
      "credit": "Mysterious Fooding (watermark on the video)",
      "card": "card"
    },
    {
      "id": "soaked-sprouts-dry-fruit-bowl",
      "name": "Soaked chana moong dry fruit bowl",
      "meal": "Breakfast",
      "minutes": 10,
      "protein": 15,
      "how": "No cooking",
      "tools": "4 small bowls, 1 big bowl, water",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "25 g (~2 tbsp)",
          "n": "Black chana (kala chana)",
          "tag": "kala-chana",
          "img": "i-chana"
        },
        {
          "q": "25 g (~2 tbsp)",
          "n": "Whole green moong",
          "tag": "moong-whole",
          "img": "i-moong"
        },
        {
          "q": "25",
          "n": "Raisins (kismis)",
          "tag": "raisins",
          "img": "i-raisins"
        },
        {
          "q": "10 to 12",
          "n": "Almonds",
          "tag": "almonds",
          "img": "i-almonds"
        },
        {
          "q": "3",
          "n": "Figs (anjeer), dried",
          "tag": "fig",
          "img": "i-anjeer"
        },
        {
          "q": "4",
          "n": "Dates (khajur)",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "enough to cover each bowl",
          "n": "Water, for soaking",
          "tag": "water"
        }
      ],
      "steps": [
        {
          "t": "Put 25 g black chana in a small bowl.",
          "imgs": [
            "s-chana-1",
            "s-chana-2"
          ]
        },
        {
          "t": "Put 25 g whole moong in another small bowl.",
          "imgs": [
            "s-moong-1",
            "s-moong-2"
          ]
        },
        {
          "t": "Put 25 raisins and 10 to 12 almonds in a third bowl.",
          "imgs": [
            "s-dry-1"
          ]
        },
        {
          "t": "Put 3 figs and 4 dates in a fourth bowl.",
          "imgs": [
            "s-dry-2"
          ]
        },
        {
          "t": "Pour water into every bowl until the food is covered.",
          "imgs": [
            "s-water-1",
            "s-water-2",
            "s-water-3"
          ]
        },
        {
          "t": "Leave all the bowls to soak overnight.",
          "imgs": [
            "s-soak-1"
          ]
        },
        {
          "t": "Next morning, drain the water. Tip the chana into a big bowl.",
          "imgs": [
            "s-chana-3",
            "s-chana-4"
          ]
        },
        {
          "t": "Add the moong.",
          "imgs": [
            "s-moong-3",
            "s-moong-4"
          ]
        },
        {
          "t": "Add the soaked almonds and raisins.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2"
          ]
        },
        {
          "t": "Add the soaked figs.",
          "imgs": [
            "s-fig-1",
            "s-fig-2"
          ]
        },
        {
          "t": "Add the dates and eat.",
          "imgs": [
            "s-date-1",
            "s-date-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "make-ahead"
      ],
      "credit": "Big Broz Body (watermark on the video)",
      "card": "card"
    },
    {
      "id": "jaggery-wheat-fruit-cupcakes",
      "name": "Jaggery wheat fruit cupcakes",
      "meal": "Snack",
      "minutes": 45,
      "protein": 5,
      "how": "Gas + pressure cooker",
      "tools": "Pan, big bowl, sieve, whisk, spatula, paper muffin cups, pressure cooker (steamer plate), gas",
      "serves": 5,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~½ cup (100 g)",
          "n": "Jaggery (gud), broken up",
          "tag": "jaggery",
          "img": "i-jaggery"
        },
        {
          "q": "~¼ cup (60 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 cup (120 g)",
          "n": "Wheat flour (atta)",
          "tag": "atta",
          "img": "i-atta"
        },
        {
          "q": "½ tsp",
          "n": "Baking powder",
          "tag": "baking-powder",
          "img": "i-baking-powder"
        },
        {
          "q": "½ tsp",
          "n": "Baking soda",
          "tag": "baking-soda",
          "img": "i-baking-soda"
        },
        {
          "q": "1 pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~¼ cup (60 ml)",
          "n": "Refined oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Vanilla essence",
          "tag": "vanilla-essence",
          "img": "i-vanilla",
          "opt": true
        },
        {
          "q": "~¼ cup (60 g)",
          "n": "Curd",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~¼ cup (60 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~2 tbsp",
          "n": "Dried blueberries",
          "tag": "berries",
          "img": "i-blueberry",
          "alt": [
            "raisins",
            "cranberry"
          ]
        },
        {
          "q": "~2 tbsp",
          "n": "Dried cranberries",
          "tag": "cranberry",
          "img": "i-cranberry",
          "alt": [
            "berries",
            "raisins"
          ]
        }
      ],
      "steps": [
        {
          "t": "Put the jaggery in a steel pan.",
          "imgs": [
            "s-jag-1"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1"
          ]
        },
        {
          "t": "Heat on gas and stir until the jaggery melts.",
          "imgs": [
            "s-melt-1",
            "s-melt-3"
          ]
        },
        {
          "t": "Boil until it becomes a thick, dark, bubbling syrup.",
          "imgs": [
            "s-boil-1",
            "s-boil-3"
          ]
        },
        {
          "t": "Switch off the gas. Let the syrup cool.",
          "imgs": [
            "s-off-1"
          ]
        },
        {
          "t": "Put a sieve over a big bowl.",
          "imgs": [
            "s-sieve-1"
          ]
        },
        {
          "t": "Add the wheat flour to the sieve.",
          "imgs": [
            "s-flour-1",
            "s-flour-2"
          ]
        },
        {
          "t": "Add the baking powder, baking soda and a pinch of salt.",
          "imgs": [
            "s-powder-2",
            "s-powder-4"
          ]
        },
        {
          "t": "Sift everything into the bowl.",
          "imgs": [
            "s-sift-2",
            "s-sift-3"
          ]
        },
        {
          "t": "Pour the cooled syrup through the sieve into the flour.",
          "imgs": [
            "s-syrup-2",
            "s-syrup-3"
          ]
        },
        {
          "t": "Add the oil.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the vanilla essence.",
          "imgs": [
            "s-van-1"
          ]
        },
        {
          "t": "Add the curd.",
          "imgs": [
            "s-curd-1"
          ]
        },
        {
          "t": "Whisk, adding the milk slowly, until the batter is thick and smooth.",
          "imgs": [
            "s-milk-1",
            "s-milk-4"
          ]
        },
        {
          "t": "Add the dried blueberries and cranberries.",
          "imgs": [
            "s-blue-1",
            "s-cran-1"
          ]
        },
        {
          "t": "Fold them in gently with a spatula.",
          "imgs": [
            "s-fold-1",
            "s-fold-3"
          ]
        },
        {
          "t": "Set paper muffin cups out and fill each with batter.",
          "imgs": [
            "s-cups-1",
            "s-fill-2"
          ]
        },
        {
          "t": "Press a few more berries on top of each cup.",
          "imgs": [
            "s-top-1",
            "s-top-3"
          ]
        },
        {
          "t": "Place the cups in the cooker, on the steamer plate.",
          "imgs": [
            "s-cooker-1"
          ]
        },
        {
          "t": "Put the lid on. Bake for 20 minutes on a low flame.",
          "imgs": [
            "s-lid-1",
            "s-done-1"
          ]
        },
        {
          "t": "Poke a stick in the middle to check they are cooked.",
          "imgs": [
            "s-stick-1"
          ]
        },
        {
          "t": "Peel off the paper and eat.",
          "imgs": [
            "s-eat-1",
            "s-eat-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "pressure-cooker"
      ],
      "card": "card"
    },
    {
      "id": "chia-curd-kala-chana-bowl",
      "name": "Chia curd black chana bowl",
      "meal": "Snack",
      "minutes": 25,
      "protein": 15,
      "how": "Gas",
      "tools": "Glass box with lid, spoon, small pan (tadka), gas, grater",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1½ cups (300 g), thick",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~¼ cup (60 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~2 tbsp (25 g)",
          "n": "Chia seeds",
          "tag": "chia-seeds",
          "img": "i-chia"
        },
        {
          "q": "~¾ cup (120 g), boiled",
          "n": "Black chana (kala chana), boiled",
          "tag": "kala-chana",
          "img": "i-chana",
          "alt": [
            "chickpeas"
          ]
        },
        {
          "q": "~½ medium, grated",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~½ medium (60 g), chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~2 tbsp",
          "n": "Roasted peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "~½ tsp",
          "n": "Black salt (kala namak)",
          "tag": "black-salt",
          "img": "i-blacksalt"
        },
        {
          "q": "~½ tsp",
          "n": "Cumin powder (jeera)",
          "tag": "cumin-powder",
          "img": "i-cumin"
        },
        {
          "q": "~½ tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1 tsp",
          "n": "Oil, for the tadka",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~½ tsp",
          "n": "Mustard seeds (rai)",
          "tag": "mustard-seeds",
          "img": "i-mustard"
        },
        {
          "q": "~2 cloves, chopped",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1, sliced",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-gchilli"
        },
        {
          "q": "~10 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curryleaf"
        }
      ],
      "steps": [
        {
          "t": "Pour the thick curd into a glass box.",
          "imgs": [
            "s-curd-1"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1"
          ]
        },
        {
          "t": "Sprinkle the chia seeds over the curd.",
          "imgs": [
            "s-chia-1",
            "s-chia-2"
          ]
        },
        {
          "t": "Stir well so the chia mixes in.",
          "imgs": [
            "s-stir-1"
          ]
        },
        {
          "t": "Close the lid. Keep it in the fridge for 3 to 4 hours.",
          "imgs": [
            "s-lid-1"
          ]
        },
        {
          "t": "Open the box and stir. The curd is now thick.",
          "imgs": [
            "s-thick-1"
          ]
        },
        {
          "t": "Add the boiled black chana.",
          "imgs": [
            "s-chana-1"
          ]
        },
        {
          "t": "Add the grated cucumber.",
          "imgs": [
            "s-cuc-1"
          ]
        },
        {
          "t": "Add the chopped onion.",
          "imgs": [
            "s-onion-1"
          ]
        },
        {
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-cori-1"
          ]
        },
        {
          "t": "Add the roasted peanuts.",
          "imgs": [
            "s-pea-1"
          ]
        },
        {
          "t": "Add black salt, cumin powder and red chilli powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Mix everything well.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Heat oil in a small pan on gas. Add mustard seeds and let them pop.",
          "imgs": [
            "s-mus-1",
            "s-mus-2"
          ]
        },
        {
          "t": "Add the chopped garlic.",
          "imgs": [
            "s-gar-1"
          ]
        },
        {
          "t": "Add the sliced green chilli.",
          "imgs": [
            "s-chi-1"
          ]
        },
        {
          "t": "Add the curry leaves and stir once.",
          "imgs": [
            "s-cur-1"
          ]
        },
        {
          "t": "Pour the hot tadka over the curd.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Mix the tadka in.",
          "imgs": [
            "s-tmix-1",
            "s-tmix-2"
          ]
        },
        {
          "t": "Scoop into a bowl and eat. Close the lid to keep the rest.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-fibre",
        "make-ahead"
      ],
      "card": "card"
    },
    {
      "id": "poppy-date-nut-roll",
      "name": "Poppy seed date nut roll",
      "meal": "Snack",
      "minutes": 35,
      "protein": 5,
      "how": "Gas",
      "tools": "Knife, board, steel pan, wooden spatula, gas, plastic gloves, plate",
      "serves": 10,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~½ cup (60 g)",
          "n": "Cashews",
          "tag": "cashews",
          "img": "i-cashew"
        },
        {
          "q": "~½ cup (70 g)",
          "n": "Almonds",
          "tag": "almonds",
          "img": "i-almond"
        },
        {
          "q": "~½ cup (50 g)",
          "n": "Walnuts",
          "tag": "walnuts",
          "img": "i-walnut"
        },
        {
          "q": "~¼ cup (35 g)",
          "n": "Pistachios, shelled",
          "tag": "pistachios",
          "img": "i-pistachio"
        },
        {
          "q": "~¼ cup (30 g)",
          "n": "Pumpkin seeds",
          "tag": "pumpkin-seeds",
          "img": "i-pumpkin"
        },
        {
          "q": "~¼ cup (30 g)",
          "n": "Melon seeds (magaz)",
          "tag": "melon-seeds",
          "img": "i-melon"
        },
        {
          "q": "~2 tsp",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~½ cup (60 g)",
          "n": "Poppy seeds (khus khus)",
          "tag": "poppy-seeds",
          "img": "i-poppy"
        },
        {
          "q": "~15 (150 g), seeds out",
          "n": "Dates (khajur)",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "~6 (50 g)",
          "n": "Dried figs (anjeer)",
          "tag": "fig",
          "img": "i-fig"
        }
      ],
      "steps": [
        {
          "t": "Chop the cashews and almonds into small pieces.",
          "imgs": [
            "s-chop-1",
            "s-chop-2",
            "s-chop-3"
          ]
        },
        {
          "t": "Chop the pistachios and walnuts the same way.",
          "imgs": [
            "s-chop-4",
            "s-chop-5",
            "s-chop-6",
            "s-chop-7"
          ]
        },
        {
          "t": "Heat a steel pan on gas. Pour in the ghee.",
          "imgs": [
            "s-heat-1",
            "s-heat-2"
          ]
        },
        {
          "t": "Add all the chopped nuts, the pumpkin seeds and the melon seeds.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2",
            "s-nuts-3"
          ]
        },
        {
          "t": "Roast, stirring, until lightly golden. Take them out into a bowl.",
          "imgs": [
            "s-roast-1",
            "s-roast-2"
          ]
        },
        {
          "t": "Roast the poppy seeds in the dry pan for a few seconds. Keep aside.",
          "imgs": [
            "s-poppy-1",
            "s-poppy-2",
            "s-poppy-3"
          ]
        },
        {
          "t": "Add a little ghee to the same pan.",
          "imgs": [
            "s-ghee-1"
          ]
        },
        {
          "t": "Mash the dates and figs into a thick, sticky paste.",
          "imgs": [
            "s-paste-1",
            "s-paste-2",
            "s-paste-3"
          ]
        },
        {
          "t": "Put the date and fig paste in the pan.",
          "imgs": [
            "s-add-1"
          ]
        },
        {
          "t": "Cook on low heat, stirring, until it turns dark and sticky.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Add the roasted nuts and seeds.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Mix well until everything sticks together. Scoop it onto a board.",
          "imgs": [
            "s-board-1"
          ]
        },
        {
          "t": "Wear gloves. Press the mix together by hand.",
          "imgs": [
            "s-board-2"
          ]
        },
        {
          "t": "Roll it into a long, even log.",
          "imgs": [
            "s-roll-1",
            "s-roll-2",
            "s-roll-3"
          ]
        },
        {
          "t": "Roll the log in the poppy seeds until it is fully coated.",
          "imgs": [
            "s-coat-1",
            "s-coat-2"
          ]
        },
        {
          "t": "Cut the log into round slices.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Put the slices on a plate and serve.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "make-ahead"
      ],
      "card": "card"
    },
    {
      "id": "black-chana-dosa",
      "name": "Black chana dosa",
      "meal": "Breakfast",
      "minutes": 25,
      "protein": 10,
      "how": "Gas",
      "tools": "Mixie (blender), non-stick tawa, gas, ladle, spatula, spoon",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1½ cups (250 g), soaked",
          "n": "Black chana (kala chana), soaked overnight",
          "tag": "kala-chana",
          "img": "i-chana",
          "alt": [
            "chickpeas"
          ]
        },
        {
          "q": "~¼ cup (40 g)",
          "n": "Suji (rava)",
          "tag": "suji",
          "img": "i-suji"
        },
        {
          "q": "~½ cup (100 g)",
          "n": "Thick curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1 big handful",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-gchilli"
        },
        {
          "q": "~1 inch (2 chunks)",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~½ tsp",
          "n": "Salt (pink salt in video)",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~½ cup (120 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tsp, for the tawa",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "a small bowl, to serve",
          "n": "Chutney (orange and green shown)",
          "tag": "chutney",
          "img": "i-chutney",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Tip the soaked black chana into a big bowl.",
          "imgs": [
            "s-chana-1",
            "s-chana-2",
            "s-chana-3"
          ]
        },
        {
          "t": "Add the suji.",
          "imgs": [
            "s-suji-1",
            "s-suji-2"
          ]
        },
        {
          "t": "Add the thick curd.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add a big handful of coriander and the green chilli.",
          "imgs": [
            "s-green-1",
            "s-green-2"
          ]
        },
        {
          "t": "Add the ginger.",
          "imgs": [
            "s-green-3"
          ]
        },
        {
          "t": "Add the salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Blend everything to a thick, smooth batter.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Stir the batter with a spoon.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Heat a non-stick tawa on gas. Pour a ladle of batter in the middle.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Spread the batter in a round spiral with the back of the ladle.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Drizzle a little oil over the top.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Cook until the underside turns golden brown.",
          "imgs": [
            "s-cook-1"
          ]
        },
        {
          "t": "Flip it over with a spatula.",
          "imgs": [
            "s-flip-1",
            "s-flip-2"
          ]
        },
        {
          "t": "Cook the other side until golden.",
          "imgs": [
            "s-cook-2"
          ]
        },
        {
          "t": "Fold the dosa in half.",
          "imgs": [
            "s-fold-1",
            "s-fold-2"
          ]
        },
        {
          "t": "Slide it onto a plate.",
          "imgs": [
            "s-plate-1",
            "s-plate-2"
          ]
        },
        {
          "t": "Serve hot with chutneys.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "credit": "Thenutricookhouse (watermark on the video)",
      "card": "card"
    },
    {
      "id": "dahi-tadka-kala-chana-salad",
      "name": "Dahi tadka kala chana salad",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 15,
      "how": "Gas",
      "tools": "Small tadka pan, gas, knife, peeler, wooden bowl, white serving bowl",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 medium",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "1 medium",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "1 small",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "1 small",
          "n": "Red onion, sliced",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~3/4 cup (150 g)",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1 tsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1/2 tsp",
          "n": "Mustard seeds (rai)",
          "tag": "mustard-seeds",
          "img": "i-mustard"
        },
        {
          "q": "~8 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curryleaf"
        },
        {
          "q": "~1",
          "n": "Green chilli, chopped",
          "tag": "green-chilli",
          "img": "i-greenchilli"
        },
        {
          "q": "~4 cloves",
          "n": "Garlic, chopped",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1/4 tsp",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Coriander powder (dhania)",
          "tag": "coriander-powder",
          "img": "i-corpowder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~3 tbsp",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-corleaf"
        },
        {
          "q": "~3/4 cup (130 g), boiled",
          "n": "Black chana (kala chana)",
          "tag": "kala-chana",
          "img": "i-chana"
        },
        {
          "q": "~75 g, cut in strips and pan-cooked",
          "n": "Paneer or tofu",
          "tag": "paneer",
          "alt": [
            "tofu"
          ],
          "img": "i-paneer"
        },
        {
          "q": "~1/4 tsp",
          "n": "Black pepper",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1/2 tsp",
          "n": "Roasted cumin powder",
          "tag": "cumin-powder",
          "alt": [
            "chaat-masala"
          ],
          "img": "i-cuminpowder"
        },
        {
          "q": "~1/2",
          "n": "Lemon",
          "tag": "lemon",
          "img": "i-lemon"
        }
      ],
      "steps": [
        {
          "t": "Peel the carrot. Cut it into thin sticks.",
          "imgs": [
            "s-carrot-1",
            "s-carrot-2",
            "s-carrot-3"
          ]
        },
        {
          "t": "Slice the tomato.",
          "imgs": [
            "s-tomato-1",
            "s-tomato-2"
          ]
        },
        {
          "t": "Peel the cucumber. Cut it into small pieces.",
          "imgs": [
            "s-cuc-1",
            "s-cuc-2",
            "s-cuc-3"
          ]
        },
        {
          "t": "For the tadka, heat the oil in a small pan on the gas.",
          "imgs": [
            "s-oil"
          ]
        },
        {
          "t": "Add cumin seeds and mustard seeds. Let them sizzle.",
          "imgs": [
            "s-seeds-1",
            "s-seeds-2"
          ]
        },
        {
          "t": "Add curry leaves and chopped green chilli.",
          "imgs": [
            "s-leaf-1",
            "s-leaf-2"
          ]
        },
        {
          "t": "Add chopped garlic. Stir.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Add turmeric, red chilli powder and coriander powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Pour the hot tadka over the curd in a white bowl.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Add salt and chopped coriander leaves.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Mix until smooth and creamy.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Put the boiled black chana in a wooden bowl.",
          "imgs": [
            "s-chana-1",
            "s-chana-2"
          ]
        },
        {
          "t": "Add the carrot sticks, sliced onion, tomato and cucumber.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
          ]
        },
        {
          "t": "Add the pan-cooked paneer or tofu strips.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Sprinkle salt, black pepper, roasted cumin powder and red chilli powder.",
          "imgs": [
            "s-season-1",
            "s-season-2",
            "s-chilli"
          ]
        },
        {
          "t": "Add chopped coriander leaves. Squeeze lemon juice over it.",
          "imgs": [
            "s-lime-1",
            "s-lime-2",
            "s-lime-3"
          ]
        },
        {
          "t": "Toss everything well with your hand.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Pour the spiced curd into a wide bowl.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Heap the salad on top of the curd and serve.",
          "imgs": [
            "s-plate-1",
            "s-plate-2",
            "s-plate-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-fibre"
      ],
      "credit": "Oh,Cheat Day!",
      "card": "card"
    },
    {
      "id": "dahi-tadka-paneer-sandwich",
      "name": "Dahi tadka paneer sandwich",
      "meal": "Breakfast",
      "minutes": 15,
      "protein": 30,
      "how": "Gas",
      "tools": "Non-stick pan, gas, whisk, wooden bowl, small tadka pan, spatula",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3/4 cup (150 g)",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/2 tsp",
          "n": "Pink salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp",
          "n": "Garam masala (brown powder)",
          "tag": "garam-masala",
          "img": "i-brown"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin powder (tan powder)",
          "tag": "cumin-powder",
          "alt": [
            "coriander-powder"
          ],
          "img": "i-tan"
        },
        {
          "q": "~2 tsp, for the tadka and the pan",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 tsp",
          "n": "Mustard seeds (rai)",
          "tag": "mustard-seeds",
          "img": "i-tadka"
        },
        {
          "q": "~10 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-tadka"
        },
        {
          "q": "~1/2 medium",
          "n": "Red onion, sliced thin",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "2 slices",
          "n": "Bread",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "~2 tbsp",
          "n": "Green chutney (coriander and mint)",
          "tag": "green-chutney",
          "img": "i-chutney"
        },
        {
          "q": "~100 g (4 slabs)",
          "n": "Paneer, cut in thin slabs",
          "tag": "paneer",
          "img": "i-paneer"
        }
      ],
      "steps": [
        {
          "t": "Put the curd in a wooden bowl.",
          "imgs": [
            "s-curd"
          ]
        },
        {
          "t": "Add salt, red chilli powder, turmeric and the other masala powders.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Whisk until smooth.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2"
          ]
        },
        {
          "t": "Pour the tadka of oil, mustard seeds and curry leaves into the curd.",
          "imgs": [
            "s-tadka"
          ]
        },
        {
          "t": "Add thin slices of red onion.",
          "imgs": [
            "s-onion-1"
          ]
        },
        {
          "t": "Whisk it all together into a thick batter.",
          "imgs": [
            "s-onion-2",
            "s-onion-3"
          ]
        },
        {
          "t": "Dip a bread slice in the batter. Coat both sides well.",
          "imgs": [
            "s-dip-1",
            "s-dip-2",
            "s-dip-3"
          ]
        },
        {
          "t": "Heat a little oil in a non-stick pan.",
          "imgs": [
            "s-oil"
          ]
        },
        {
          "t": "Cook the coated slice until golden on both sides. Do the same for the second slice.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Spread green chutney on one toast.",
          "imgs": [
            "s-chutney-1",
            "s-chutney-2"
          ]
        },
        {
          "t": "Lay the paneer slabs on the chutney.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2",
            "s-paneer-3"
          ]
        },
        {
          "t": "Spoon more chutney over the paneer.",
          "imgs": [
            "s-more-1",
            "s-more-2"
          ]
        },
        {
          "t": "Cover with the second toast.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Press the sandwich down with the spatula to toast it.",
          "imgs": [
            "s-press-1",
            "s-press-2"
          ]
        },
        {
          "t": "Cut into 2 triangles and serve.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-protein"
      ],
      "credit": "Oh,Cheat Day!",
      "card": "card"
    },
    {
      "id": "raw-banana-pakora",
      "name": "Raw banana pakora",
      "meal": "Snack",
      "minutes": 30,
      "protein": 10,
      "how": "Gas",
      "tools": "Kadhai, gas, knife, whisk, 2 bowls",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3 large",
          "n": "Raw banana (kachcha kela)",
          "tag": "raw-banana",
          "img": "i-banana"
        },
        {
          "q": "~1 cup (90 g)",
          "n": "Besan (gram flour)",
          "tag": "besan",
          "img": "i-besan"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin powder (jeera)",
          "tag": "cumin-powder",
          "img": "i-cumin"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder (dhania)",
          "tag": "coriander-powder",
          "img": "i-corpowder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Ajwain (carom seeds)",
          "tag": "ajwain",
          "img": "i-ajwain"
        },
        {
          "q": "1 big handful",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-corleaf"
        },
        {
          "q": "~3/4 cup (180 ml), to make the batter",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~2 cups (500 ml), for deep frying",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        }
      ],
      "steps": [
        {
          "t": "Cut off the ends of the raw bananas and peel them.",
          "imgs": [
            "s-peel-1",
            "s-peel-2",
            "s-peel-3"
          ]
        },
        {
          "t": "Slice each banana lengthwise into long, thin pieces.",
          "imgs": [
            "s-slice-1",
            "s-slice-2",
            "s-slice-3"
          ]
        },
        {
          "t": "Put the slices in a bowl of water.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Put besan in a wide bowl.",
          "imgs": [
            "s-besan"
          ]
        },
        {
          "t": "Add salt, turmeric, cumin powder, coriander powder and ajwain.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add a big handful of chopped coriander leaves.",
          "imgs": [
            "s-cor-1",
            "s-cor-2"
          ]
        },
        {
          "t": "Pour in water and whisk to a thick, smooth batter.",
          "imgs": [
            "s-batter-1",
            "s-batter-2",
            "s-batter-3"
          ]
        },
        {
          "t": "Dip each banana slice in the batter to coat it.",
          "imgs": [
            "s-dip-1",
            "s-dip-2"
          ]
        },
        {
          "t": "Heat plenty of oil in a kadhai. Slide in the coated slices.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Fry, turning now and then, until golden.",
          "imgs": [
            "s-fry-3",
            "s-fry-4",
            "s-fry-5"
          ]
        },
        {
          "t": "Lift them out with a slotted spoon.",
          "imgs": [
            "s-lift"
          ]
        },
        {
          "t": "Drain on kitchen tissue and serve hot.",
          "imgs": [
            "s-drain-1",
            "s-drain-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "credit": "me_haay_foodie",
      "card": "card"
    },
    {
      "id": "chickpea-cucumber-jar-salad",
      "name": "Chickpea cucumber jar salad",
      "meal": "Lunch or dinner",
      "minutes": 10,
      "protein": 15,
      "how": "Gas",
      "tools": "Small pan, gas, slicer or knife, glass jar",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 medium",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1 cup (160 g), boiled",
          "n": "Chickpeas (kabuli chana)",
          "tag": "chickpeas",
          "img": "i-chickpeas"
        },
        {
          "q": "~1 tsp",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~1/2 tsp",
          "n": "Coriander powder (dhania)",
          "tag": "coriander-powder",
          "img": "i-corpowder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin powder (jeera)",
          "tag": "cumin-powder",
          "img": "i-cumin"
        },
        {
          "q": "~1/4 tsp",
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~3 tbsp",
          "n": "Chilli lime dressing (recipe is in the creator's caption)",
          "tag": "salad-dressing",
          "opt": true,
          "img": "i-dressing"
        }
      ],
      "steps": [
        {
          "t": "Wash the cucumber well in water.",
          "imgs": [
            "s-wash-1",
            "s-wash-2"
          ]
        },
        {
          "t": "Slice the cucumber into a glass jar.",
          "imgs": [
            "s-slice-1",
            "s-slice-2"
          ]
        },
        {
          "t": "Heat ghee in a pan. Add the boiled chickpeas.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2"
          ]
        },
        {
          "t": "Add coriander, red chilli, cumin and black pepper powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Stir until the chickpeas are coated and lightly browned.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Tip the chickpeas into the jar, over the cucumber.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
          ]
        },
        {
          "t": "Pour the chilli lime dressing over the top.",
          "imgs": [
            "s-dress-1",
            "s-dress-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "quick",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "cucumber-lime-curd-salad",
      "name": "Cucumber lime curd salad",
      "meal": "Side",
      "minutes": 10,
      "protein": 5,
      "how": "Gas",
      "tools": "Bowl, fork, grater, peeler, gas flame",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "100 g (about 1/2 cup)",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "1 small",
          "n": "Lime (nimbu), zest and juice",
          "tag": "lemon",
          "img": "i-lime"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander leaves, finely chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "a pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "a pinch",
          "n": "Black pepper",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "1 small",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~2 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        }
      ],
      "steps": [
        {
          "t": "Pour 100 g curd into a bowl.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Grate the lime zest into the curd.",
          "imgs": [
            "s-zest-1",
            "s-zest-2"
          ]
        },
        {
          "t": "Squeeze in the lime juice.",
          "imgs": [
            "s-juice-1",
            "s-juice-2"
          ]
        },
        {
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-cor-1",
            "s-cor-2"
          ]
        },
        {
          "t": "Sprinkle in salt and black pepper.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Peel the cucumber into thin ribbons, straight into the bowl.",
          "imgs": [
            "s-cuc-1",
            "s-cuc-2",
            "s-cuc-3"
          ]
        },
        {
          "t": "Hold the garlic on a fork over the gas flame to roast it.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Chop the roasted garlic and add it to the bowl.",
          "imgs": [
            "s-chop-1",
            "s-chop-2"
          ]
        },
        {
          "t": "Mix well with a fork.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        }
      ],
      "tags": [
        "quick",
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "creamy-cauliflower-chickpea-bowl",
      "name": "Creamy cauliflower chickpea bowl",
      "meal": "Lunch or dinner",
      "minutes": 20,
      "protein": 30,
      "how": "Gas + blender",
      "tools": "Non-stick pan, gas, small blender jar, wide bowl",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 cups (250 g)",
          "n": "Cauliflower florets (phool gobhi)",
          "tag": "cauliflower",
          "img": "i-cauli"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 cup (160 g), boiled",
          "n": "Chickpeas (kabuli chana)",
          "tag": "chickpeas",
          "img": "i-chickpeas"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-redchilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin powder (jeera)",
          "tag": "cumin-powder",
          "img": "i-cuminpowder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Dried oregano",
          "tag": "oregano",
          "opt": true,
          "img": "i-oregano"
        },
        {
          "q": "1 cube (~50 g)",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1/4 cup (60 g)",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~4 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~3",
          "n": "Dried red chillies (sabut lal mirch)",
          "tag": "dry-red-chilli",
          "img": "i-chillies"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~2 tbsp",
          "n": "Red onion, chopped",
          "tag": "onion",
          "opt": true,
          "img": "i-onion"
        },
        {
          "q": "a few leaves",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "opt": true,
          "img": "i-coriander"
        },
        {
          "q": "1 wedge",
          "n": "Lime (nimbu)",
          "tag": "lemon",
          "opt": true,
          "img": "i-lime"
        }
      ],
      "steps": [
        {
          "t": "Heat oil in a non-stick pan on the gas.",
          "imgs": [
            "s-oil"
          ]
        },
        {
          "t": "Add the cauliflower florets. Stir until the edges brown.",
          "imgs": [
            "s-cauli-1",
            "s-cauli-2",
            "s-cauli-3"
          ]
        },
        {
          "t": "Add the boiled chickpeas.",
          "imgs": [
            "s-chick-1",
            "s-chick-2"
          ]
        },
        {
          "t": "Add red chilli powder, cumin powder and the dried herb.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Toss well until the cauliflower and chickpeas are coated and golden.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "For the sauce, put the paneer in a blender jar.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Add the curd.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add the garlic cloves.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Add the dried red chillies.",
          "imgs": [
            "s-chilli"
          ]
        },
        {
          "t": "Add salt and cumin seeds.",
          "imgs": [
            "s-salt",
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Blend until the sauce is smooth and creamy. Pour it into a wide bowl.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Spoon the hot cauliflower and chickpeas on top of the sauce.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Top with chopped red onion and coriander. Squeeze lime over it.",
          "imgs": [
            "s-garnish-1",
            "s-garnish-2",
            "s-garnish-3"
          ]
        },
        {
          "t": "Scoop up some sauce with every bite and enjoy.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-protein",
        "high-fibre"
      ],
      "credit": "Nidslid",
      "card": "card"
    },
    {
      "id": "beetroot-paneer-bowl",
      "name": "Beetroot paneer bowl",
      "meal": "Lunch or dinner",
      "minutes": 35,
      "protein": 20,
      "how": "Gas",
      "tools": "Non-stick pan, small tadka pan, gas, grater, whisk, bowl",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 block (~200 g)",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-redchilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~5 cloves",
          "n": "Garlic, chopped",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "1 small",
          "n": "Lime (nimbu), zest and juice",
          "tag": "lemon",
          "img": "i-lime"
        },
        {
          "q": "~1 cup (250 g)",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "1 medium",
          "n": "Beetroot",
          "tag": "beetroot",
          "img": "i-beet"
        },
        {
          "q": "1 small piece (~1 inch)",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "1/2 tsp",
          "n": "Roasted cumin powder (bhuna jeera)",
          "tag": "cumin-powder",
          "img": "i-cumin"
        },
        {
          "q": "1/2 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat"
        },
        {
          "q": "1/2 tsp",
          "n": "Black salt (kala namak)",
          "tag": "black-salt",
          "img": "i-blacksalt"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 tbsp, for tadka and pan",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~1/2 tsp",
          "n": "Mustard seeds (rai)",
          "tag": "mustard-seeds",
          "img": "i-mustard"
        },
        {
          "q": "~1/2 tsp",
          "n": "Urad dal",
          "tag": "urad-dal",
          "img": "i-urad"
        },
        {
          "q": "~3",
          "n": "Dried red chillies",
          "tag": "dry-red-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~10 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curryleaf"
        },
        {
          "q": "~1/2 cup",
          "n": "Cabbage, shredded",
          "tag": "cabbage",
          "opt": true,
          "img": "i-cabbage"
        },
        {
          "q": "~1/2",
          "n": "Avocado, cubed",
          "tag": "avocado",
          "opt": true,
          "img": "i-avocado"
        },
        {
          "q": "~1/2",
          "n": "Cucumber, sliced",
          "tag": "cucumber",
          "opt": true,
          "img": "i-cucumber"
        }
      ],
      "steps": [
        {
          "t": "Score the top of the paneer block with shallow criss-cross cuts.",
          "imgs": [
            "s-score-1",
            "s-score-2"
          ]
        },
        {
          "t": "Sprinkle red chilli powder, salt and black pepper over the paneer.",
          "imgs": [
            "s-powder-1",
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Add chilli flakes and chopped garlic on top.",
          "imgs": [
            "s-flakes-1",
            "s-flakes-2",
            "s-garlic"
          ]
        },
        {
          "t": "Grate lime zest over it, then squeeze in the lime juice.",
          "imgs": [
            "s-zest-1",
            "s-zest-2",
            "s-juice"
          ]
        },
        {
          "t": "Rub the masala into the paneer. Let it rest for 10 minutes.",
          "imgs": [
            "s-rub-1",
            "s-rub-2",
            "s-rub-3"
          ]
        },
        {
          "t": "Whisk the curd in a bowl until creamy.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2"
          ]
        },
        {
          "t": "Peel the beetroot.",
          "imgs": [
            "s-peel-1",
            "s-peel-2"
          ]
        },
        {
          "t": "Grate the beetroot straight into the curd.",
          "imgs": [
            "s-grate-1",
            "s-grate-2",
            "s-grate-3"
          ]
        },
        {
          "t": "Grate in the ginger.",
          "imgs": [
            "s-ginger-1",
            "s-ginger-2"
          ]
        },
        {
          "t": "Add roasted cumin powder, chaat masala and black salt, 1/2 tsp each.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Add chopped coriander.",
          "imgs": [
            "s-cor-1",
            "s-cor-2"
          ]
        },
        {
          "t": "Mix well until the curd turns pink.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "For the tadka, heat ghee in a small pan on the gas.",
          "imgs": [
            "s-ghee-1"
          ]
        },
        {
          "t": "Add mustard seeds and urad dal. Let them crackle.",
          "imgs": [
            "s-mustard",
            "s-urad"
          ]
        },
        {
          "t": "Add dried red chillies and curry leaves. Fry for a few seconds.",
          "imgs": [
            "s-chilli",
            "s-curry",
            "s-tadka"
          ]
        },
        {
          "t": "Pour the hot tadka into the beetroot curd.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Heat a piece of ghee in a non-stick pan.",
          "imgs": [
            "s-pan"
          ]
        },
        {
          "t": "Grill the marinated paneer until crisp and golden on each side.",
          "imgs": [
            "s-grill-1",
            "s-grill-2",
            "s-grill-3"
          ]
        },
        {
          "t": "Spread the beetroot curd on a plate. Place the paneer on it.",
          "imgs": [
            "s-plate-1",
            "s-plate-2"
          ]
        },
        {
          "t": "Add shredded cabbage, avocado and cucumber on the side.",
          "imgs": [
            "s-top",
            "s-salad"
          ]
        },
        {
          "t": "Spoon the spiced ghee from the pan over the top and serve.",
          "imgs": [
            "s-drizzle-1",
            "s-drizzle-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "cabbage-apple-tadka-salad",
      "name": "Cabbage apple tadka salad",
      "meal": "Side",
      "minutes": 30,
      "protein": 5,
      "how": "Gas",
      "tools": "Knife, peeler, wooden or large bowl, whisk, small pan, gas, tongs",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 small head (300 g)",
          "n": "Cabbage (patta gobhi)",
          "tag": "cabbage",
          "img": "i-cabbage"
        },
        {
          "q": "1 medium",
          "n": "Red apple",
          "tag": "apple",
          "img": "i-apple"
        },
        {
          "q": "~3/4 tsp (1/2 tsp in apple water, a pinch in curd)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "1 medium",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "1 small",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "1 medium",
          "n": "Red onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~3/4 cup (150 g), thick",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Mustard seeds (rai)",
          "tag": "mustard-seeds",
          "img": "i-mustard"
        },
        {
          "q": "~2",
          "n": "Dried red chillies",
          "tag": "dry-red-chilli",
          "img": "i-dchilli"
        },
        {
          "q": "~1 tsp",
          "n": "Urad dal (split, white)",
          "tag": "urad-dal",
          "alt": [
            "chana-dal"
          ],
          "img": "i-urad"
        },
        {
          "q": "~2",
          "n": "Green chillies, slit",
          "tag": "green-chilli",
          "img": "i-greenchilli"
        },
        {
          "q": "~10 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curryleaf"
        }
      ],
      "steps": [
        {
          "t": "Cut the cabbage in half.",
          "imgs": [
            "s-cab-1",
            "s-cab-2"
          ]
        },
        {
          "t": "Shred the cabbage thin.",
          "imgs": [
            "s-shred-1",
            "s-shred-2"
          ]
        },
        {
          "t": "Put the shredded cabbage in a bowl of cold water. Swish it around.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Lift it out and drain it in a strainer lined with kitchen paper.",
          "imgs": [
            "s-drain"
          ]
        },
        {
          "t": "Cover it with a lid and set it aside.",
          "imgs": [
            "s-lid"
          ]
        },
        {
          "t": "Cut the apple into thin slices, then into thin sticks.",
          "imgs": [
            "s-apple-1",
            "s-apple-2"
          ]
        },
        {
          "t": "Add a spoon of salt to a bowl of water. Put the apple sticks in.",
          "imgs": [
            "s-asoak-1",
            "s-asoak-2"
          ]
        },
        {
          "t": "Peel the carrot into thin strands.",
          "imgs": [
            "s-carrot-1",
            "s-carrot-2"
          ]
        },
        {
          "t": "Chop the cucumber into small pieces.",
          "imgs": [
            "s-cuc-1",
            "s-cuc-2"
          ]
        },
        {
          "t": "Slice the red onion thin.",
          "imgs": [
            "s-onion"
          ]
        },
        {
          "t": "Pour the curd into a big bowl and sprinkle a pinch of salt.",
          "imgs": [
            "s-curd-1",
            "s-curd-2",
            "s-curd-3"
          ]
        },
        {
          "t": "Whisk the curd until smooth and creamy.",
          "imgs": [
            "s-whisk"
          ]
        },
        {
          "t": "Layer the cabbage, carrot, onion, cucumber and drained apple on the curd.",
          "imgs": [
            "s-layer-1",
            "s-layer-2",
            "s-layer-3"
          ]
        },
        {
          "t": "Heat the oil in a pan on the gas.",
          "imgs": [
            "s-oil"
          ]
        },
        {
          "t": "Add the mustard seeds. Let them pop.",
          "imgs": [
            "s-mustard-1",
            "s-mustard-2"
          ]
        },
        {
          "t": "Add the dried red chillies and urad dal.",
          "imgs": [
            "s-dal"
          ]
        },
        {
          "t": "Add the slit green chillies and curry leaves.",
          "imgs": [
            "s-green-1",
            "s-green-2"
          ]
        },
        {
          "t": "Stir for a few seconds.",
          "imgs": [
            "s-stir"
          ]
        },
        {
          "t": "Pour the hot tadka over the salad.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Toss everything well until coated with curd.",
          "imgs": [
            "s-toss-1",
            "s-toss-2"
          ]
        },
        {
          "t": "Pile it on a plate and serve.",
          "imgs": [
            "s-plate-1",
            "s-plate-2",
            "s-plate-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "date-fig-nut-roll",
      "name": "Date fig nut roll",
      "meal": "Snack",
      "minutes": 90,
      "protein": 5,
      "how": "Gas + blender",
      "tools": "Kadhai, gas, mixie jar, sharp knife, glass bowls, butter paper (baking paper)",
      "serves": 12,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~15 (about 200 g)",
          "n": "Dates (khajoor)",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "~8 (about 100 g)",
          "n": "Dried figs (anjeer)",
          "tag": "fig",
          "img": "i-figs"
        },
        {
          "q": "enough to cover, for soaking",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1/2 cup (70 g)",
          "n": "Almonds (badam)",
          "tag": "almonds",
          "img": "i-almond"
        },
        {
          "q": "~1/2 cup (65 g)",
          "n": "Cashews (kaju)",
          "tag": "cashews",
          "img": "i-cashew"
        },
        {
          "q": "~1/2 cup (50 g)",
          "n": "Walnuts (akhrot)",
          "tag": "walnuts",
          "img": "i-walnut"
        },
        {
          "q": "~1/4 cup (35 g)",
          "n": "Pumpkin seeds",
          "tag": "pumpkin-seeds",
          "img": "i-pumpkin"
        },
        {
          "q": "~1/4 cup (35 g)",
          "n": "Sunflower seeds",
          "tag": "sunflower-seeds",
          "img": "i-sunflower"
        },
        {
          "q": "1/2 cup (45 g)",
          "n": "Coconut powder (dry, grated)",
          "tag": "coconut",
          "img": "i-coconut"
        },
        {
          "q": "1 tbsp",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~2 tbsp",
          "n": "Roasted poppy seeds (khus khus), for coating",
          "tag": "poppy-seeds",
          "opt": true,
          "img": "i-poppy"
        },
        {
          "q": "~2 tbsp",
          "n": "Pistachios, chopped, for coating",
          "tag": "pistachios",
          "opt": true,
          "img": "i-pistachio"
        }
      ],
      "steps": [
        {
          "t": "Put the dates and dried figs (anjeer) in a glass bowl.",
          "imgs": [
            "s-dates",
            "s-figs"
          ]
        },
        {
          "t": "Pour in water to cover them. Soak for 30 minutes.",
          "imgs": [
            "s-pour",
            "s-soak"
          ]
        },
        {
          "t": "Chop the almonds, cashews and walnuts into small pieces.",
          "imgs": [
            "s-chop-1",
            "s-chop-2",
            "s-chop-3"
          ]
        },
        {
          "t": "Take the soaked dates and figs out of the water. Put them in the mixie jar.",
          "imgs": [
            "s-grind-1",
            "s-grind-2"
          ]
        },
        {
          "t": "Grind them to a soft paste.",
          "imgs": [
            "s-grind-3"
          ]
        },
        {
          "t": "Put the chopped nuts in a kadhai. Dry roast on low flame.",
          "imgs": [
            "s-roast-1",
            "s-roast-2"
          ]
        },
        {
          "t": "Add the pumpkin seeds and sunflower seeds.",
          "imgs": [
            "s-seeds-1",
            "s-seeds-2"
          ]
        },
        {
          "t": "Keep roasting and stirring for 5 to 6 minutes.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Add 1/2 cup coconut powder.",
          "imgs": [
            "s-coco-1",
            "s-coco-2"
          ]
        },
        {
          "t": "Stir on low flame to mix it in.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Tip the roasted mix into a glass bowl.",
          "imgs": [
            "s-transfer-1",
            "s-transfer-2"
          ]
        },
        {
          "t": "Melt 1 tbsp ghee in the kadhai.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2"
          ]
        },
        {
          "t": "Add the date and fig paste.",
          "imgs": [
            "s-paste-1",
            "s-paste-2",
            "s-paste-3"
          ]
        },
        {
          "t": "Stir on low flame for 5 to 6 minutes, until it gathers into one lump.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Add the cooked paste to the roasted nuts and seeds.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Mix well with a spatula.",
          "imgs": [
            "s-mixwell-1",
            "s-mixwell-2",
            "s-mixwell-3"
          ]
        },
        {
          "t": "Let it cool a little, then press it together with your hand.",
          "imgs": [
            "s-cool-1",
            "s-cool-2"
          ]
        },
        {
          "t": "Lay a sheet of butter paper. Roll the mix into a long log on it.",
          "imgs": [
            "s-shape-1",
            "s-shape-2",
            "s-shape-3"
          ]
        },
        {
          "t": "Scatter the roasted poppy seeds on the paper.",
          "imgs": [
            "s-poppy-1",
            "s-poppy-2"
          ]
        },
        {
          "t": "Scatter the chopped pistachios next to them.",
          "imgs": [
            "s-pista-1",
            "s-pista-2"
          ]
        },
        {
          "t": "Roll the log in the seeds and pistachios until coated all over.",
          "imgs": [
            "s-roll-1",
            "s-roll-2",
            "s-roll-3"
          ]
        },
        {
          "t": "Leave it for 30 minutes to set.",
          "imgs": [
            "s-rest-1",
            "s-rest-2"
          ]
        },
        {
          "t": "Cut the log into pieces with a sharp knife.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "make-ahead",
        "high-fibre"
      ],
      "credit": "Honest Kitchen",
      "card": "card"
    },
    {
      "id": "green-moong-dal-dosa",
      "name": "Green moong dal dosa",
      "meal": "Breakfast",
      "minutes": 25,
      "protein": 20,
      "how": "Gas",
      "tools": "Mixie (blender), tawa, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (~180 g)",
          "n": "Moong dal (split yellow), soaked overnight",
          "tag": "moong-dal",
          "img": "i-moong",
          "alt": [
            "masoor-dal"
          ]
        },
        {
          "q": "~2 handfuls (~60 g)",
          "n": "Spinach (palak)",
          "tag": "spinach",
          "img": "i-spinach"
        },
        {
          "q": "~1 handful",
          "n": "Coriander leaves (dhania)",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 inch piece",
          "n": "Ginger (adrak)",
          "tag": "ginger",
          "img": "i-gingerchilli"
        },
        {
          "q": "~2",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-gingerchilli"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt"
        },
        {
          "q": "~1/2 cup (120 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~2 tbsp",
          "n": "Onion, finely chopped",
          "tag": "onion",
          "img": "i-onion",
          "opt": true
        },
        {
          "q": "~2 tbsp",
          "n": "Carrot, grated",
          "tag": "carrot",
          "img": "i-onion",
          "opt": true
        },
        {
          "q": "~1/2 tsp per dosa",
          "n": "Podi masala (gunpowder)",
          "tag": "podi-masala",
          "opt": true
        },
        {
          "q": "~1 tsp per dosa",
          "n": "Oil or ghee",
          "tag": "oil",
          "alt": [
            "ghee"
          ]
        },
        {
          "q": "to serve",
          "n": "Chutney",
          "tag": "chutney",
          "img": "i-chutney",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Soak the moong dal in water overnight.",
          "imgs": [
            "s-soak-1",
            "s-soak-2",
            "s-soak-3"
          ]
        },
        {
          "t": "Drain the soaked dal and put it in the mixie jar.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
          ]
        },
        {
          "t": "Add the spinach and coriander leaves.",
          "imgs": [
            "s-greens-1"
          ]
        },
        {
          "t": "Add ginger and green chillies.",
          "imgs": [
            "s-ginger-1",
            "s-ginger-2"
          ]
        },
        {
          "t": "Add salt and cumin seeds.",
          "imgs": [
            "s-spice-1"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1"
          ]
        },
        {
          "t": "Grind to a smooth, pourable batter.",
          "imgs": [
            "s-grind-1",
            "s-grind-2",
            "s-grind-3"
          ]
        },
        {
          "t": "Pour a ladle of batter onto a hot tawa.",
          "imgs": [
            "s-pour-1"
          ]
        },
        {
          "t": "Spread the batter in circles into a thin dosa.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Drizzle oil or ghee on the dosa.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Sprinkle chopped onion and grated carrot on top.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Sprinkle a little podi masala over it.",
          "imgs": [
            "s-podi-1"
          ]
        },
        {
          "t": "Cook until the bottom is crisp.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Fold the dosa and serve hot with chutney.",
          "imgs": [
            "s-fold-1",
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-protein",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "oats-masoor-dal-dosa",
      "name": "Oats masoor dal beetroot dosa",
      "meal": "Breakfast",
      "minutes": 20,
      "protein": 15,
      "how": "Gas",
      "tools": "Mixie (blender), tawa, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup (~45 g)",
          "n": "Oats",
          "tag": "oats",
          "img": "i-oats"
        },
        {
          "q": "~1/4 cup (~50 g)",
          "n": "Masoor dal (red lentils)",
          "tag": "masoor-dal",
          "img": "i-masoor"
        },
        {
          "q": "~1/4 cup (~50 g)",
          "n": "Toor dal (arhar)",
          "tag": "toor-dal",
          "img": "i-toor"
        },
        {
          "q": "~1 medium (~100 g), in cubes",
          "n": "Beetroot",
          "tag": "beetroot",
          "img": "i-beet"
        },
        {
          "q": "~2",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1 inch piece",
          "n": "Ginger (adrak)",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 cup (240 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tsp per dosa",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "to serve",
          "n": "Green coconut chutney",
          "tag": "chutney",
          "img": "i-chutney",
          "opt": true
        },
        {
          "q": "to serve",
          "n": "Podi (chilli-lentil powder)",
          "tag": "podi-masala",
          "img": "i-podi",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the oats in the mixie jar.",
          "imgs": [
            "s-oats-1",
            "s-oats-2"
          ]
        },
        {
          "t": "Add the masoor dal and toor dal.",
          "imgs": [
            "s-dal-1",
            "s-dal-2"
          ]
        },
        {
          "t": "Add the beetroot cubes and green chillies.",
          "imgs": [
            "s-beet-1",
            "s-beet-2"
          ]
        },
        {
          "t": "Add the ginger and cumin seeds.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1"
          ]
        },
        {
          "t": "Grind to a smooth, pink batter.",
          "imgs": [
            "s-grind-1",
            "s-grind-2",
            "s-grind-3"
          ]
        },
        {
          "t": "Pour a ladle of batter onto a hot tawa.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Spread the batter in circles into a thin dosa.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Drizzle oil over the dosa.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Cook until the dosa is crisp, then fold it.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Serve hot with green chutney and podi.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "quinoa-moong-red-cabbage-dosa",
      "name": "Quinoa moong red cabbage dosa",
      "meal": "Breakfast",
      "minutes": 20,
      "protein": 20,
      "how": "Gas",
      "tools": "Mixie (blender), tawa, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup (~90 g)",
          "n": "Quinoa",
          "tag": "quinoa",
          "img": "i-quinoa"
        },
        {
          "q": "~1/2 cup (~90 g)",
          "n": "Moong dal (split yellow)",
          "tag": "moong-dal",
          "img": "i-moong"
        },
        {
          "q": "~1 cup (~10 g)",
          "n": "Makhana (fox nuts)",
          "tag": "makhana",
          "img": "i-makhana"
        },
        {
          "q": "~1 cup shredded (~70 g)",
          "n": "Red cabbage",
          "tag": "cabbage",
          "img": "i-cabbage"
        },
        {
          "q": "~2",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1 inch piece",
          "n": "Ginger (adrak)",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 cup (240 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tsp per dosa",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "to serve",
          "n": "Coconut chutney",
          "tag": "chutney",
          "img": "i-chutney",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the quinoa and moong dal in the mixie jar.",
          "imgs": [
            "s-quinoa-1",
            "s-quinoa-2"
          ]
        },
        {
          "t": "Add the makhana.",
          "imgs": [
            "s-makhana-1",
            "s-makhana-2"
          ]
        },
        {
          "t": "Add the shredded red cabbage.",
          "imgs": [
            "s-cabbage-1"
          ]
        },
        {
          "t": "Add the green chillies and ginger.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add the cumin seeds and salt.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1"
          ]
        },
        {
          "t": "Grind to a smooth paste.",
          "imgs": [
            "s-grind-1",
            "s-grind-2",
            "s-grind-3"
          ]
        },
        {
          "t": "Pour a ladle of batter onto a hot tawa.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Spread the batter in circles into a thin dosa.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Drizzle oil over the dosa.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Cook until the dosa turns golden and crisp.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Fold the dosa with a spatula.",
          "imgs": [
            "s-fold-1",
            "s-fold-2"
          ]
        },
        {
          "t": "Serve hot with chutney.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-protein",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "masala-dosa-red-chutney",
      "name": "Masala dosa with red chutney",
      "meal": "Breakfast",
      "minutes": 40,
      "protein": 10,
      "how": "Gas",
      "tools": "Mixie (blender), tawa, kadhai or pan, gas",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~8 (6 for chutney, 2 for masala)",
          "n": "Dry red chillies",
          "tag": "dry-red-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~4 cloves",
          "n": "Garlic (lahsun)",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1/4 cup",
          "n": "Grated coconut (nariyal)",
          "tag": "coconut",
          "img": "i-coconut"
        },
        {
          "q": "~1/4 cup",
          "n": "Roasted chana dal (bhuna chana)",
          "tag": "roasted-chana",
          "img": "i-roasted"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1 1/2 tsp (1/2 for chutney, 1 for masala)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~3 tbsp (for chutney)",
          "n": "Water",
          "tag": "water"
        },
        {
          "q": "~1 tbsp for masala, plus ~1 tsp per dosa",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Mustard seeds (rai)",
          "tag": "mustard-seeds",
          "img": "i-mustard"
        },
        {
          "q": "~1 tsp",
          "n": "Urad dal (split black gram)",
          "tag": "urad-dal",
          "img": "i-mustard"
        },
        {
          "q": "~1 tsp",
          "n": "Chana dal",
          "tag": "chana-dal",
          "img": "i-chanadal"
        },
        {
          "q": "~10 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric powder (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~3 medium (~300 g), boiled",
          "n": "Potatoes (aloo)",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~1/2",
          "n": "Lemon, juice",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~2 cups (~450 ml)",
          "n": "Dosa batter (ready or homemade)",
          "tag": "dosa-batter",
          "img": "i-batter"
        },
        {
          "q": "~1/2 cup, finely chopped",
          "n": "Raw veg for topping (onion, carrot, tomato)",
          "tag": "mixed-vegetables",
          "img": "i-veg",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put dry red chillies and garlic in a bowl.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add the grated coconut.",
          "imgs": [
            "s-coconut-1"
          ]
        },
        {
          "t": "Add the roasted chana dal.",
          "imgs": [
            "s-roasted-1"
          ]
        },
        {
          "t": "Add cumin seeds, salt and a little water.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Grind to a thick, fine paste. This is the red chutney.",
          "imgs": [
            "s-grind-1",
            "s-grind-2"
          ]
        },
        {
          "t": "Heat oil in a pan for the potato masala.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add mustard seeds and urad dal.",
          "imgs": [
            "s-seeds-1",
            "s-seeds-2"
          ]
        },
        {
          "t": "Add the chana dal and fry.",
          "imgs": [
            "s-chana-1"
          ]
        },
        {
          "t": "Add dry red chillies and curry leaves.",
          "imgs": [
            "s-leaf-1",
            "s-leaf-2"
          ]
        },
        {
          "t": "Add the turmeric powder.",
          "imgs": [
            "s-turmeric-1",
            "s-turmeric-2",
            "s-turmeric-3"
          ]
        },
        {
          "t": "Add the boiled potatoes and mash them in.",
          "imgs": [
            "s-potato-1",
            "s-potato-2"
          ]
        },
        {
          "t": "Add salt and squeeze in the lemon juice.",
          "imgs": [
            "s-lemon-1",
            "s-lemon-2"
          ]
        },
        {
          "t": "Add chopped coriander and mix well.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Pour a ladle of dosa batter onto a hot tawa.",
          "imgs": [
            "s-batter-1",
            "s-batter-2"
          ]
        },
        {
          "t": "Spread the batter in circles into a thin dosa.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Drizzle a little oil on the dosa.",
          "imgs": [
            "s-dosaoil-1"
          ]
        },
        {
          "t": "Spread a layer of red chutney over the dosa.",
          "imgs": [
            "s-red-1",
            "s-red-2"
          ]
        },
        {
          "t": "Put a scoop of potato masala in the middle.",
          "imgs": [
            "s-fill-1",
            "s-fill-2"
          ]
        },
        {
          "t": "Top with the chopped raw vegetables.",
          "imgs": [
            "s-top-1",
            "s-top-2",
            "s-top-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "card": "card"
    },
    {
      "id": "multigrain-ragi-oats-dosa",
      "name": "Multigrain ragi oats dosa",
      "meal": "Breakfast",
      "minutes": 30,
      "protein": 5,
      "how": "Gas",
      "tools": "Bowl, whisk, tawa, gas",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3 cups (~700 ml)",
          "n": "Ready dosa batter",
          "tag": "dosa-batter",
          "img": "i-batter"
        },
        {
          "q": "~3 tbsp",
          "n": "Ragi flour (nachni atta)",
          "tag": "millet",
          "img": "i-ragi"
        },
        {
          "q": "~3 tbsp",
          "n": "Oats, ground to powder",
          "tag": "oats",
          "img": "i-oats"
        },
        {
          "q": "~1 tbsp",
          "n": "Flax seeds, ground (alsi)",
          "tag": "flax-seeds",
          "img": "i-flax"
        },
        {
          "q": "~3 tbsp",
          "n": "Whole wheat flour (atta)",
          "tag": "atta",
          "img": "i-wheat"
        },
        {
          "q": "a pinch",
          "n": "Hing (asafoetida)",
          "tag": "hing"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 cup (120 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1/2 cup",
          "n": "Coriander leaves (for the paste)",
          "tag": "coriander-leaves",
          "img": "i-paste"
        },
        {
          "q": "~10 leaves",
          "n": "Curry leaves (for the paste)",
          "tag": "curry-leaves",
          "img": "i-paste"
        },
        {
          "q": "~1 inch piece",
          "n": "Ginger (for the paste)",
          "tag": "ginger",
          "img": "i-paste"
        },
        {
          "q": "~2",
          "n": "Green chillies (for the paste)",
          "tag": "green-chilli",
          "img": "i-paste"
        },
        {
          "q": "~1 tsp per dosa",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "to serve",
          "n": "Chutney",
          "tag": "chutney",
          "img": "i-chutney",
          "opt": true
        },
        {
          "q": "to serve",
          "n": "Podi (chilli-lentil powder)",
          "tag": "podi-masala",
          "img": "i-podi",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the dosa batter in a large bowl.",
          "imgs": [
            "s-batter-1",
            "s-batter-2",
            "s-batter-3"
          ]
        },
        {
          "t": "Add the ragi flour and ground oats.",
          "imgs": [
            "s-flour-1",
            "s-flour-2",
            "s-flour-3"
          ]
        },
        {
          "t": "Add the ground flax seeds and whole wheat flour.",
          "imgs": [
            "s-flax-1",
            "s-flax-2"
          ]
        },
        {
          "t": "Add hing and salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1"
          ]
        },
        {
          "t": "Whisk well until there are no lumps.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Pour in the green paste and whisk until the batter is even.",
          "imgs": [
            "s-paste-1",
            "s-paste-2",
            "s-paste-3"
          ]
        },
        {
          "t": "Heat a tawa on the gas until it is very hot.",
          "imgs": [
            "s-heat-1",
            "s-heat-2"
          ]
        },
        {
          "t": "Pour a ladle of batter in the middle of the tawa.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Spread the batter in circles into a thin dosa.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Drizzle oil over the dosa.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Cook until the dosa turns crisp and golden.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Fold the dosa with a spatula.",
          "imgs": [
            "s-fold-1",
            "s-fold-2"
          ]
        },
        {
          "t": "Serve hot with chutney and podi.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "ghee-roasted-snack-mix",
      "name": "Roasted nut seed snack mix",
      "meal": "Snack",
      "minutes": 15,
      "protein": 5,
      "how": "Gas",
      "tools": "Kadhai, gas, airtight container",
      "serves": 6,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tbsp",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~1/2 tsp",
          "n": "Mustard seeds (rai)",
          "tag": "mustard-seeds",
          "img": "i-mustard"
        },
        {
          "q": "~1, finely chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~10 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric powder (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-redchilli"
        },
        {
          "q": "~1/4 cup (~35 g)",
          "n": "Almonds (badam)",
          "tag": "almonds",
          "img": "i-almond"
        },
        {
          "q": "~1/4 cup (~35 g)",
          "n": "Cashews (kaju)",
          "tag": "cashews",
          "img": "i-cashew"
        },
        {
          "q": "~2 tbsp (~20 g)",
          "n": "Sunflower seeds",
          "tag": "sunflower-seeds",
          "img": "i-sunflower"
        },
        {
          "q": "~1/4 cup (~15 g)",
          "n": "Dry coconut slices (khopra)",
          "tag": "coconut",
          "img": "i-coconut"
        },
        {
          "q": "~2 tbsp (~20 g)",
          "n": "Raisins (kishmish)",
          "tag": "raisins",
          "img": "i-raisin"
        },
        {
          "q": "~1/4 cup (~35 g)",
          "n": "Roasted chana (bhuna chana)",
          "tag": "roasted-chana",
          "img": "i-chana"
        },
        {
          "q": "~1/2 cup (~25 g)",
          "n": "Thick poha (flattened rice)",
          "tag": "poha",
          "img": "i-poha"
        },
        {
          "q": "~2 cups (~25 g)",
          "n": "Makhana (fox nuts)",
          "tag": "makhana",
          "img": "i-makhana"
        }
      ],
      "steps": [
        {
          "t": "Heat the ghee in a kadhai on the gas.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2",
            "s-ghee-3"
          ]
        },
        {
          "t": "Add the mustard seeds and let them pop.",
          "imgs": [
            "s-mustard-1",
            "s-mustard-2"
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
          "t": "Add the curry leaves.",
          "imgs": [
            "s-curry-1",
            "s-curry-2"
          ]
        },
        {
          "t": "Add the turmeric and red chilli powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the almonds and stir.",
          "imgs": [
            "s-almond-1",
            "s-almond-2"
          ]
        },
        {
          "t": "Add the cashews.",
          "imgs": [
            "s-cashew-1"
          ]
        },
        {
          "t": "Add the sunflower seeds.",
          "imgs": [
            "s-sun-1",
            "s-sun-2"
          ]
        },
        {
          "t": "Add the coconut slices.",
          "imgs": [
            "s-coco-1",
            "s-coco-2"
          ]
        },
        {
          "t": "Add the raisins.",
          "imgs": [
            "s-raisin-1"
          ]
        },
        {
          "t": "Add the roasted chana.",
          "imgs": [
            "s-chana-1"
          ]
        },
        {
          "t": "Add the poha.",
          "imgs": [
            "s-poha-1"
          ]
        },
        {
          "t": "Add the makhana.",
          "imgs": [
            "s-makhana-1"
          ]
        },
        {
          "t": "Mix everything well and roast until crisp.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Let it cool fully, then store in an airtight container.",
          "imgs": [
            "s-store-1",
            "s-store-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-fibre",
        "make-ahead"
      ],
      "card": "card"
    },
    {
      "id": "homemade-coconut-milk",
      "name": "Homemade coconut milk",
      "meal": "Drink",
      "minutes": 20,
      "protein": 0,
      "how": "No cooking",
      "tools": "Mixer jar, cloth, sieve, bottle",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 coconuts, shells cracked",
          "n": "Fresh coconut (nariyal)",
          "tag": "coconut",
          "img": "i-coconut"
        },
        {
          "q": "~1 cup (240 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        }
      ],
      "steps": [
        {
          "t": "Scrape the coconut meat out of the shells with a spoon.",
          "imgs": [
            "s-scrape-1",
            "s-scrape-2"
          ]
        },
        {
          "t": "Put the scraped coconut in a mixer jar.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
          ]
        },
        {
          "t": "Pour in a little water.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Close the lid and grind.",
          "imgs": [
            "s-grind-1",
            "s-grind-2"
          ]
        },
        {
          "t": "Pour the paste onto a cloth over a bowl.",
          "imgs": [
            "s-strain-1",
            "s-strain-2"
          ]
        },
        {
          "t": "Squeeze the cloth well to get all the milk out.",
          "imgs": [
            "s-squeeze-1",
            "s-squeeze-2"
          ]
        },
        {
          "t": "Pour the milk into a bottle through a funnel.",
          "imgs": [
            "s-bottle-1",
            "s-bottle-2"
          ]
        },
        {
          "t": "Close the bottle and keep it in the fridge for up to a week.",
          "imgs": [
            "s-store-1",
            "s-store-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "make-ahead"
      ],
      "card": "card"
    },
    {
      "id": "baked-coconut-chips",
      "name": "Baked coconut chips",
      "meal": "Snack",
      "minutes": 45,
      "protein": 0,
      "how": "Gas + air fryer",
      "tools": "Mandoline, baking tray with baking paper, gas, air fryer or oven",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 whole coconut (hard, brown)",
          "n": "Fresh coconut (nariyal)",
          "tag": "coconut",
          "img": "i-coconut"
        },
        {
          "q": "~1 tsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tbsp",
          "n": "Powdered sugar",
          "tag": "sugar"
        },
        {
          "q": "a pinch",
          "n": "Salt",
          "tag": "salt"
        }
      ],
      "steps": [
        {
          "t": "Crack the coconut open and drain the water into a bowl.",
          "imgs": [
            "s-break-1",
            "s-break-2",
            "s-break-3"
          ]
        },
        {
          "t": "Heat each coconut half, shell side down, over the gas flame.",
          "imgs": [
            "s-heat-1",
            "s-heat-2"
          ]
        },
        {
          "t": "Put the hot half in a bowl of water. Repeat until the brown shell comes off.",
          "imgs": [
            "s-dip-1",
            "s-dip-2",
            "s-dip-3"
          ]
        },
        {
          "t": "Slice the white coconut very thin on a mandoline, onto a lined baking tray.",
          "imgs": [
            "s-slice-1",
            "s-slice-2"
          ]
        },
        {
          "t": "Spread the slices out in a single layer.",
          "imgs": [
            "s-spread-1",
            "s-spread-2"
          ]
        },
        {
          "t": "Drizzle a little oil over the slices.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Sprinkle on the powdered sugar and salt.",
          "imgs": [
            "s-sugar-1",
            "s-sugar-2",
            "s-sugar-3"
          ]
        },
        {
          "t": "Mix with your hands so every slice is coated.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Bake until golden brown.",
          "imgs": [
            "s-bake-1",
            "s-bake-2",
            "s-bake-3"
          ]
        },
        {
          "t": "Let the chips cool, then store in an airtight jar for up to 10 days.",
          "imgs": [
            "s-store-1",
            "s-store-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "air-fryer",
        "make-ahead"
      ],
      "card": "card"
    },
    {
      "id": "chocolate-makhana-mousse",
      "name": "Chocolate makhana mousse",
      "meal": "Snack",
      "minutes": 10,
      "protein": 5,
      "how": "No cooking",
      "tools": "Blender (mixie), small bowls, sieve, cling film, fridge",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (~25 g)",
          "n": "Roasted makhana (fox nuts)",
          "tag": "makhana",
          "img": "i-makhana"
        },
        {
          "q": "~1/2 cup (120 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~4, soaked in the milk",
          "n": "Dates (khajoor)",
          "tag": "dates",
          "img": "i-milk"
        },
        {
          "q": "~3 tbsp (extra for dusting)",
          "n": "Cocoa powder",
          "tag": "cocoa",
          "img": "i-cocoa"
        },
        {
          "q": "a pinch",
          "n": "Cinnamon powder (dalchini)",
          "tag": "cinnamon",
          "img": "i-cinnamon",
          "opt": true
        },
        {
          "q": "~1 tbsp",
          "n": "Sliced almonds (badam)",
          "tag": "almonds",
          "img": "i-almond",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Grind the roasted makhana to a fine powder.",
          "imgs": [
            "s-grind-1",
            "s-grind-2"
          ]
        },
        {
          "t": "Put the makhana powder in the blender jar.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
          ]
        },
        {
          "t": "Pour in the milk with the soaked dates.",
          "imgs": [
            "s-milk-1",
            "s-milk-2"
          ]
        },
        {
          "t": "Add the cocoa powder.",
          "imgs": [
            "s-cocoa-1",
            "s-cocoa-2",
            "s-cocoa-3"
          ]
        },
        {
          "t": "Add a pinch of cinnamon powder.",
          "imgs": [
            "s-cin-1",
            "s-cin-2"
          ]
        },
        {
          "t": "Blend until thick and smooth.",
          "imgs": [
            "s-blend-1"
          ]
        },
        {
          "t": "Pour the mousse into small bowls.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Top with sliced almonds.",
          "imgs": [
            "s-almond-1",
            "s-almond-2"
          ]
        },
        {
          "t": "Dust cocoa powder on top through a sieve.",
          "imgs": [
            "s-dust-1",
            "s-dust-2"
          ]
        },
        {
          "t": "Cover the bowls with cling film and chill in the fridge about 5 hours.",
          "imgs": [
            "s-chill-1",
            "s-chill-2",
            "s-chill-3"
          ]
        }
      ],
      "tags": [
        "blender"
      ],
      "card": "card"
    },
    {
      "id": "palak-paneer-roti",
      "name": "Palak paneer roti",
      "meal": "Lunch or dinner",
      "minutes": 35,
      "protein": 15,
      "how": "Gas",
      "tools": "Blender (mixie), tawa, gas",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3 big handfuls (~150 g)",
          "n": "Spinach (palak)",
          "tag": "spinach",
          "img": "i-spinach"
        },
        {
          "q": "~1/2 cup cubes (~80 g)",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 inch piece",
          "n": "Ginger (adrak)",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~2",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-ginger"
        },
        {
          "q": "~2 cups (~250 g)",
          "n": "Whole wheat flour (atta)",
          "tag": "atta",
          "img": "i-atta"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "a little",
          "n": "Ghee, to brush on top",
          "tag": "ghee",
          "img": "i-ghee",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the spinach in a bowl.",
          "imgs": [
            "s-spinach-1",
            "s-spinach-2"
          ]
        },
        {
          "t": "Add the paneer cubes.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Add the ginger and green chillies.",
          "imgs": [
            "s-ginger-1",
            "s-ginger-2"
          ]
        },
        {
          "t": "Blend everything into a smooth green puree.",
          "imgs": [
            "s-puree-1",
            "s-puree-2"
          ]
        },
        {
          "t": "Put the whole wheat flour in a big bowl.",
          "imgs": [
            "s-flour-1",
            "s-flour-2"
          ]
        },
        {
          "t": "Pour the spinach paneer puree over the flour.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Add the salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Knead into a soft dough. Stand mixer or hands both work.",
          "imgs": [
            "s-knead-1",
            "s-knead-2",
            "s-knead-3"
          ]
        },
        {
          "t": "Roll a small ball of dough into a thin round roti.",
          "imgs": [
            "s-roll-1",
            "s-roll-2"
          ]
        },
        {
          "t": "Cook the roti on a hot tawa, then flip it.",
          "imgs": [
            "s-tawa-1"
          ]
        },
        {
          "t": "Puff the roti over the open flame.",
          "imgs": [
            "s-flame-1",
            "s-flame-2",
            "s-flame-3"
          ]
        },
        {
          "t": "Spoon a little ghee on the hot rotis and stack them.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2",
            "s-ghee-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "credit": "@yumfood_artz",
      "card": "card"
    },
    {
      "id": "ragi-date-walnut-cake",
      "name": "Ragi date walnut cake",
      "meal": "Snack",
      "minutes": 60,
      "protein": 5,
      "how": "Air fryer",
      "tools": "Small blender jar, whisk, 6-inch cake tin, air fryer or oven",
      "serves": 6,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (~150 g)",
          "n": "Pitted dates (khajoor)",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "~1 cup (240 ml), warm",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~1/4 cup (~50 g), melted",
          "n": "Butter (or oil)",
          "tag": "butter",
          "alt": [
            "oil",
            "ghee"
          ],
          "img": "i-butter"
        },
        {
          "q": "~1 cup (~120 g)",
          "n": "Ragi flour (nachni atta)",
          "tag": "millet",
          "img": "i-ragi"
        },
        {
          "q": "~1/2 cup (~60 g)",
          "n": "Whole wheat flour (atta)",
          "tag": "atta",
          "img": "i-wheat"
        },
        {
          "q": "~1 tsp",
          "n": "Baking powder",
          "tag": "baking-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Baking soda",
          "tag": "baking-soda"
        },
        {
          "q": "~1/4 cup",
          "n": "Walnuts, chopped (akhrot)",
          "tag": "walnuts",
          "img": "i-walnut",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Split the dates open and take out the seeds.",
          "imgs": [
            "s-seed-1",
            "s-seed-2",
            "s-seed-3"
          ]
        },
        {
          "t": "Soak the pitted dates in warm milk until soft.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Put the soft dates and the milk in a small blender jar.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
          ]
        },
        {
          "t": "Blend until smooth.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Pour the date mix into a bowl.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Add the melted butter or oil and whisk.",
          "imgs": [
            "s-butter-1",
            "s-butter-2",
            "s-butter-3"
          ]
        },
        {
          "t": "In another bowl, mix the ragi flour and whole wheat flour with baking powder and soda.",
          "imgs": [
            "s-dry-1",
            "s-dry-2"
          ]
        },
        {
          "t": "Add the flour mix to the date mix.",
          "imgs": [
            "s-add-1",
            "s-add-2",
            "s-add-3"
          ]
        },
        {
          "t": "Whisk into a smooth, thick batter.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2",
            "s-whisk-3"
          ]
        },
        {
          "t": "Pour the batter into a cake tin.",
          "imgs": [
            "s-tin-1",
            "s-tin-2"
          ]
        },
        {
          "t": "Sprinkle chopped walnuts on top.",
          "imgs": [
            "s-top-1",
            "s-top-2",
            "s-top-3"
          ]
        },
        {
          "t": "Bake the cake.",
          "imgs": [
            "s-bake-1",
            "s-bake-2"
          ]
        },
        {
          "t": "Cut a slice and serve.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "air-fryer",
        "blender",
        "make-ahead"
      ],
      "card": "card"
    },
    {
      "id": "aloo-peanut-salad",
      "name": "Aloo peanut curd salad",
      "meal": "Snack",
      "minutes": 25,
      "protein": 15,
      "how": "Gas",
      "tools": "Non-stick pan with lid, mixing bowl, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup (~70 g)",
          "n": "Peanuts (moongphali)",
          "tag": "peanuts",
          "img": "i-peanut"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~2 medium (~200 g), diced small",
          "n": "Potatoes (aloo)",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~8 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1 1/2 cups (~350 g)",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/2 medium, chopped",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1 small, chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 medium, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1/2 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat"
        }
      ],
      "steps": [
        {
          "t": "Dry roast the peanuts in a pan, then keep them aside.",
          "imgs": [
            "s-peanut-1"
          ]
        },
        {
          "t": "Heat oil in a non-stick pan.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add the cumin seeds.",
          "imgs": [
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Add the diced potatoes.",
          "imgs": [
            "s-potato-1",
            "s-potato-2"
          ]
        },
        {
          "t": "Add the curry leaves and stir.",
          "imgs": [
            "s-leaf-1",
            "s-leaf-2",
            "s-leaf-3"
          ]
        },
        {
          "t": "Stir the potatoes for a minute.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Add the salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Cover with a lid and cook until the potatoes are soft.",
          "imgs": [
            "s-lid-1",
            "s-lid-2"
          ]
        },
        {
          "t": "Stir until the potatoes turn golden and crisp.",
          "imgs": [
            "s-gold-1",
            "s-gold-2"
          ]
        },
        {
          "t": "Add the roasted peanuts.",
          "imgs": [
            "s-pnut-1",
            "s-pnut-2"
          ]
        },
        {
          "t": "Add the red chilli powder and mix well.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Put the curd in a bowl and spread it out.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add chopped cucumber, tomato and onion.",
          "imgs": [
            "s-veg-1",
            "s-veg-2",
            "s-veg-3"
          ]
        },
        {
          "t": "Sprinkle chaat masala on the vegetables.",
          "imgs": [
            "s-chaat-1",
            "s-chaat-2"
          ]
        },
        {
          "t": "Mix everything well into the curd.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Top with the potato peanut mix and a little more masala.",
          "imgs": [
            "s-top-1",
            "s-top-2",
            "s-top-3",
            "s-top-4"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
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
      ],
      "card": "card"
    },
    {
      "id": "crispy-ragi-veg-dosa",
      "name": "Crispy ragi veg dosa",
      "meal": "Breakfast",
      "minutes": 40,
      "protein": 5,
      "how": "Gas",
      "tools": "Tawa, gas, big bowl, sieve, whisk, ladle",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (~120 g)",
          "n": "Ragi flour (nachni atta)",
          "tag": "millet",
          "img": "i-ragi"
        },
        {
          "q": "~1 tsp",
          "n": "Ginger, grated",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~10 leaves, chopped",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry"
        },
        {
          "q": "~1, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 cup, grated",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~1/2 cup, chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt"
        },
        {
          "q": "~3 cups (~700 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1/4 cup, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/2 tsp",
          "n": "Oil, to wipe the tawa",
          "tag": "oil"
        },
        {
          "q": "~2 tsp",
          "n": "Ghee, for the top",
          "tag": "ghee",
          "img": "i-ghee"
        }
      ],
      "steps": [
        {
          "t": "Sieve the ragi flour into a large bowl.",
          "imgs": [
            "s-sieve-1",
            "s-sieve-2"
          ]
        },
        {
          "t": "Add grated ginger, cumin seeds and chopped curry leaves.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add chopped green chilli, grated carrot and chopped onion.",
          "imgs": [
            "s-veg-1",
            "s-veg-2",
            "s-veg-3"
          ]
        },
        {
          "t": "Sprinkle in the salt and mix everything with a spoon.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Pour in water a little at a time, whisking well after each pour.",
          "imgs": [
            "s-water-1",
            "s-water-2",
            "s-water-3"
          ]
        },
        {
          "t": "Keep adding water and whisking until the batter is thin and runny, with no lumps.",
          "imgs": [
            "s-thin-1",
            "s-thin-2",
            "s-thin-3"
          ]
        },
        {
          "t": "Cover the bowl with a plate and let the batter rest.",
          "imgs": [
            "s-cover-1",
            "s-cover-2"
          ]
        },
        {
          "t": "Take off the plate, add the chopped coriander and mix well with a ladle.",
          "imgs": [
            "s-corn-1",
            "s-corn-2",
            "s-corn-3"
          ]
        },
        {
          "t": "Stir the batter again just before cooking. It should pour thin, like water.",
          "imgs": [
            "s-stir-1"
          ]
        },
        {
          "t": "Heat the tawa on the gas and wipe it with a little oil.",
          "imgs": [
            "s-tawa-1",
            "s-tawa-2"
          ]
        },
        {
          "t": "Pour batter from the edge inwards, filling the gaps, to make a thin lacy dosa.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Drizzle ghee over the top.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2"
          ]
        },
        {
          "t": "Cook on a low flame for 7 to 8 minutes until crisp.",
          "imgs": [
            "s-cook-1"
          ]
        },
        {
          "t": "Lift the crisp dosa off the tawa with a spatula.",
          "imgs": [
            "s-lift-1",
            "s-lift-2"
          ]
        },
        {
          "t": "Serve hot with chutney.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "strawberry-chia-curd-pudding",
      "name": "Strawberry chia curd pudding",
      "meal": "Breakfast",
      "minutes": 10,
      "protein": 10,
      "how": "No cooking",
      "tools": "Bowl, spoon, fridge",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (~250 g)",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~2 tbsp dry seeds, already soaked in water",
          "n": "Chia seeds, soaked",
          "tag": "chia-seeds",
          "img": "i-chia"
        },
        {
          "q": "~1 tbsp",
          "n": "Honey",
          "tag": "honey",
          "img": "i-honey"
        },
        {
          "q": "~1 cup, chopped (~150 g)",
          "n": "Strawberries",
          "tag": "berries",
          "img": "i-strawberry"
        },
        {
          "q": "~1 tbsp",
          "n": "Almonds, sliced (badam)",
          "tag": "almonds",
          "img": "i-almond"
        },
        {
          "q": "~1 tbsp",
          "n": "Pumpkin seeds",
          "tag": "pumpkin-seeds",
          "img": "i-pumpkin"
        },
        {
          "q": "~4, chopped",
          "n": "Dates (khajoor)",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "~1 tbsp",
          "n": "Raisins (kishmish)",
          "tag": "raisins",
          "img": "i-raisins"
        },
        {
          "q": "a few, chopped",
          "n": "Walnuts (akhrot), for the top",
          "tag": "walnuts",
          "img": "i-walnut",
          "opt": true
        },
        {
          "q": "a few",
          "n": "Pistachios, for the top",
          "tag": "pistachios",
          "img": "i-pistachio",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Pour the curd into a large bowl.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add the soaked chia seeds.",
          "imgs": [
            "s-chia-1",
            "s-chia-2"
          ]
        },
        {
          "t": "Drizzle honey over the chia seeds.",
          "imgs": [
            "s-honey-1",
            "s-honey-2"
          ]
        },
        {
          "t": "Mix well until the chia and curd are smooth and creamy.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Add the chopped strawberries.",
          "imgs": [
            "s-straw-1",
            "s-straw-2"
          ]
        },
        {
          "t": "Add the sliced almonds and pumpkin seeds.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2"
          ]
        },
        {
          "t": "Add the chopped dates.",
          "imgs": [
            "s-dates-1"
          ]
        },
        {
          "t": "Add the raisins.",
          "imgs": [
            "s-raisin-1",
            "s-raisin-2"
          ]
        },
        {
          "t": "Mix everything well until the pudding turns light pink.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Refrigerate for 1 to 2 hours to set.",
          "imgs": [
            "s-chill-1"
          ]
        },
        {
          "t": "Top with strawberries, nuts and raisins. Serve chilled.",
          "imgs": [
            "s-top-1"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "high-fibre"
      ],
      "credit": "@Mumbaifoodiz",
      "card": "card"
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
      "credit": "@fitnesswithnidhi",
      "card": "card"
    },
    {
      "id": "nut-date-banana-smoothie",
      "name": "Nut, date and banana smoothie",
      "meal": "Drink",
      "minutes": 10,
      "protein": 15,
      "how": "No cooking",
      "tools": "Small blender (mixie) jar, bowl, glass",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~6, plus a few sliced for the top",
          "n": "Almonds (badam)",
          "tag": "almonds",
          "img": "i-almond"
        },
        {
          "q": "~5",
          "n": "Cashews (kaju)",
          "tag": "cashews",
          "img": "i-cashew"
        },
        {
          "q": "~4 halves",
          "n": "Walnuts (akhrot)",
          "tag": "walnuts",
          "img": "i-walnut"
        },
        {
          "q": "~2, seeds out",
          "n": "Dates (khajoor)",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "~1 tbsp, plus a few for the top",
          "n": "Pumpkin seeds",
          "tag": "pumpkin-seeds",
          "img": "i-pumpkin"
        },
        {
          "q": "~1 cup (~250 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "1 medium",
          "n": "Banana",
          "tag": "banana",
          "img": "i-banana"
        }
      ],
      "steps": [
        {
          "t": "Put the almonds, cashews and walnuts in a bowl.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2"
          ]
        },
        {
          "t": "Add the dates and pumpkin seeds.",
          "imgs": [
            "s-dates-1",
            "s-dates-2"
          ]
        },
        {
          "t": "Pour some of the milk over the nuts and dates.",
          "imgs": [
            "s-milk-1",
            "s-milk-2"
          ]
        },
        {
          "t": "Stir, then leave the nuts and dates to soak in the milk.",
          "imgs": [
            "s-soak-1",
            "s-soak-2",
            "s-soak-3"
          ]
        },
        {
          "t": "Tip the soaked nuts, dates and milk into the blender cup.",
          "imgs": [
            "s-tip-1",
            "s-tip-2",
            "s-tip-3"
          ]
        },
        {
          "t": "Add the banana pieces.",
          "imgs": [
            "s-banana-1",
            "s-banana-2"
          ]
        },
        {
          "t": "Pour in the rest of the milk.",
          "imgs": [
            "s-more-1",
            "s-more-2"
          ]
        },
        {
          "t": "Fit the blade lid on the cup and screw it tight.",
          "imgs": [
            "s-lid-1",
            "s-lid-2"
          ]
        },
        {
          "t": "Turn the cup upside down onto the blender base.",
          "imgs": [
            "s-base-1"
          ]
        },
        {
          "t": "Blend until smooth and creamy.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Pour the smoothie into a glass.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Top with sliced almonds and pumpkin seeds.",
          "imgs": [
            "s-top-1"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "quick"
      ],
      "card": "card"
    },
    {
      "id": "pomegranate-corn-peanut-salad",
      "name": "Pomegranate corn peanut salad",
      "meal": "Snack",
      "minutes": 5,
      "protein": 10,
      "how": "No cooking",
      "tools": "Big bowl, small bowl, spoon",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (~150 g)",
          "n": "Pomegranate seeds (anar)",
          "tag": "pomegranate",
          "img": "i-pom"
        },
        {
          "q": "~1/2 cup (~80 g), boiled",
          "n": "Sweet corn",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~1/2 cup (~70 g), boiled",
          "n": "Peanuts (moongphali)",
          "tag": "peanuts",
          "img": "i-peanut"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Walnuts (akhrot)",
          "tag": "walnuts",
          "img": "i-walnut"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Almonds (badam)",
          "tag": "almonds",
          "img": "i-almond"
        },
        {
          "q": "~1 tbsp",
          "n": "Flax seeds (alsi)",
          "tag": "flax-seeds",
          "img": "i-flax"
        },
        {
          "q": "juice of 1/2 lemon (~1 tbsp)",
          "n": "Lemon",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "1 pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/4 tsp, crushed",
          "n": "Black pepper",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1 tsp",
          "n": "Honey",
          "tag": "honey",
          "img": "i-honey"
        }
      ],
      "steps": [
        {
          "t": "Put the pomegranate seeds in a big mixing bowl.",
          "imgs": [
            "s-pom-1",
            "s-pom-2"
          ]
        },
        {
          "t": "Add the boiled sweet corn.",
          "imgs": [
            "s-corn-1",
            "s-corn-2"
          ]
        },
        {
          "t": "Add the boiled peanuts.",
          "imgs": [
            "s-peanut-1",
            "s-peanut-2"
          ]
        },
        {
          "t": "Add the chopped walnuts and almonds and the flax seeds.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2",
            "s-nuts-3"
          ]
        },
        {
          "t": "For the dressing, squeeze the lemon juice into a small bowl.",
          "imgs": [
            "s-lemon-1",
            "s-lemon-2"
          ]
        },
        {
          "t": "Add a pinch of salt and the crushed black pepper.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the honey and mix well with a spoon.",
          "imgs": [
            "s-honey-1",
            "s-honey-2",
            "s-honey-3"
          ]
        },
        {
          "t": "Pour the dressing over the salad.",
          "imgs": [
            "s-dress-1",
            "s-dress-2"
          ]
        },
        {
          "t": "Toss well so everything is coated.",
          "imgs": [
            "s-toss-1",
            "s-toss-2"
          ]
        },
        {
          "t": "Spoon into a glass or bowl and serve.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "quick",
        "high-fibre"
      ],
      "credit": "EatWithAishwarya",
      "card": "card"
    },
    {
      "id": "drumstick-tomato-soup",
      "name": "Drumstick tomato soup",
      "meal": "Drink",
      "minutes": 35,
      "protein": 5,
      "how": "Gas + pressure cooker",
      "tools": "Pressure cooker, blender (mixie) cup, sieve, kadhai, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3 pods, cut in ~2 inch pieces",
          "n": "Drumsticks (sahjan)",
          "tag": "drumstick",
          "img": "i-drumstick"
        },
        {
          "q": "~2 medium, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1 inch piece, chopped",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~2 cups (~500 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/4 tsp",
          "n": "Turmeric powder",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Ghee",
          "tag": "ghee",
          "alt": [
            "butter",
            "oil"
          ],
          "img": "i-ghee"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "1 pinch",
          "n": "Hing (asafoetida)",
          "tag": "hing",
          "img": "i-hing"
        },
        {
          "q": "juice of 1/2 lime",
          "n": "Lemon or lime",
          "tag": "lemon",
          "img": "i-lemon",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Cut the drumsticks into 2 inch pieces.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Chop the tomatoes and the ginger.",
          "imgs": [
            "s-chop-1",
            "s-chop-2"
          ]
        },
        {
          "t": "Put the drumsticks, tomatoes and ginger in a pressure cooker.",
          "imgs": [
            "s-pot-1",
            "s-pot-2"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Add the salt and turmeric.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Close the lid and pressure cook on the gas.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Let the steam go, then open the lid.",
          "imgs": [
            "s-open-1",
            "s-open-2"
          ]
        },
        {
          "t": "Lift the cooked drumsticks, tomato and ginger into a blender cup.",
          "imgs": [
            "s-lift-1",
            "s-lift-2"
          ]
        },
        {
          "t": "Fit the blade lid, turn it onto the base and blend until smooth.",
          "imgs": [
            "s-blend-1",
            "s-blend-2",
            "s-blend-3"
          ]
        },
        {
          "t": "Set a sieve over a bowl and pour in the blended mix.",
          "imgs": [
            "s-sieve-1",
            "s-sieve-2"
          ]
        },
        {
          "t": "Press the pulp with a spoon, then pour the cooking water through.",
          "imgs": [
            "s-press-1",
            "s-press-2",
            "s-press-3"
          ]
        },
        {
          "t": "Stir the strained soup well.",
          "imgs": [
            "s-stir-1"
          ]
        },
        {
          "t": "Heat the ghee in a kadhai.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2"
          ]
        },
        {
          "t": "Add the cumin seeds and a pinch of hing.",
          "imgs": [
            "s-tadka-1",
            "s-tadka-2",
            "s-tadka-3"
          ]
        },
        {
          "t": "Pour in the strained soup.",
          "imgs": [
            "s-soup-1",
            "s-soup-2",
            "s-soup-3"
          ]
        },
        {
          "t": "Stir and cook until the soup is hot.",
          "imgs": [
            "s-heat-1",
            "s-heat-2",
            "s-heat-3"
          ]
        },
        {
          "t": "Ladle the soup into glasses.",
          "imgs": [
            "s-glass-1",
            "s-glass-2"
          ]
        },
        {
          "t": "Squeeze a little lime juice on top.",
          "imgs": [
            "s-lime-1",
            "s-lime-2"
          ]
        }
      ],
      "tags": [
        "pressure-cooker",
        "gas",
        "blender"
      ],
      "credit": "मिथिला ASMR (Mithila ASMR)",
      "card": "card"
    },
    {
      "id": "cheesy-oats-poha-tikki-wrap",
      "name": "Cheesy oats poha tikki wrap",
      "meal": "Lunch or dinner",
      "minutes": 45,
      "protein": 15,
      "how": "Gas",
      "tools": "Frying pan with lid, grill pan, bowl, plate, spatula",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup (~40 g)",
          "n": "Poha (flattened rice)",
          "tag": "poha",
          "img": "i-poha"
        },
        {
          "q": "~1/2 cup (~45 g)",
          "n": "Rolled oats",
          "tag": "oats",
          "img": "i-oats"
        },
        {
          "q": "~1/3 cup (~80 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~3 small (~200 g), boiled",
          "n": "Potatoes (aloo)",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~3/4 cup (~120 g), boiled",
          "n": "Sweet corn kernels (1/2 cup for the tikki, a little for the wraps)",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~1 small, chopped",
          "n": "Onion (for the tikki)",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/2 tsp",
          "n": "Brown spice powder (looks like chaat masala or roasted cumin powder)",
          "tag": "chaat-masala",
          "alt": [
            "cumin-powder",
            "garam-masala"
          ],
          "img": "i-spice"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp, to taste",
          "n": "Salt",
          "tag": "salt",
          "opt": true
        },
        {
          "q": "~2 tbsp",
          "n": "Corn flour (white powder)",
          "tag": "corn-flour",
          "alt": [
            "rice-flour"
          ],
          "img": "i-cornflour"
        },
        {
          "q": "~3 tbsp, for shallow frying",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 cup, grated (~40 g)",
          "n": "Cheese",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "2",
          "n": "Roti (whole wheat chapati)",
          "tag": "atta",
          "img": "i-roti"
        },
        {
          "q": "~2 tbsp",
          "n": "Tomato ketchup",
          "tag": "tomato-ketchup",
          "img": "i-ketchup"
        },
        {
          "q": "~1/2, sliced in rounds",
          "n": "Tomato (for the wraps)",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1/2, sliced in thin rings",
          "n": "Onion (for the wraps)",
          "tag": "onion",
          "img": "i-onion2"
        },
        {
          "q": "~1/4, sliced thin",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        }
      ],
      "steps": [
        {
          "t": "Put the poha in a bowl.",
          "imgs": [
            "s-poha-1"
          ]
        },
        {
          "t": "Add the oats and pour in a little water.",
          "imgs": [
            "s-oats-1",
            "s-oats-2"
          ]
        },
        {
          "t": "Mix until the poha and oats turn soft and sticky.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Tip the mix into a wide plate and add the boiled potatoes.",
          "imgs": [
            "s-plate-1",
            "s-plate-2"
          ]
        },
        {
          "t": "Add the sweet corn, chopped onion and coriander.",
          "imgs": [
            "s-veg-1",
            "s-veg-2",
            "s-veg-3"
          ]
        },
        {
          "t": "Add the brown spice powder and the red chilli powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Add the corn flour.",
          "imgs": [
            "s-flour-1",
            "s-flour-2"
          ]
        },
        {
          "t": "Mix and mash everything by hand into a soft dough.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Shape the dough into flat round tikkis.",
          "imgs": [
            "s-shape-1",
            "s-shape-2"
          ]
        },
        {
          "t": "Heat plenty of oil in a pan and lay the tikkis in it.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Fry, spooning oil over them, and flip until golden on both sides.",
          "imgs": [
            "s-fry-3",
            "s-fry-4"
          ]
        },
        {
          "t": "Sprinkle grated cheese on top of each tikki.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2"
          ]
        },
        {
          "t": "Cover the pan with a lid until the cheese melts.",
          "imgs": [
            "s-lid-1",
            "s-lid-2"
          ]
        },
        {
          "t": "Spread tomato ketchup on a roti.",
          "imgs": [
            "s-roti-1"
          ]
        },
        {
          "t": "Layer on sliced onion, tomato, cucumber and a little sweet corn.",
          "imgs": [
            "s-fill-1"
          ]
        },
        {
          "t": "Place a cheesy tikki on the roti.",
          "imgs": [
            "s-fill-2"
          ]
        },
        {
          "t": "Fold in the sides and roll up tightly.",
          "imgs": [
            "s-roll-1",
            "s-roll-2",
            "s-roll-3"
          ]
        },
        {
          "t": "Heat a grill pan and place the wrap on it.",
          "imgs": [
            "s-grill-1",
            "s-grill-2"
          ]
        },
        {
          "t": "Press with your hand and cook, flipping once, until golden with grill marks.",
          "imgs": [
            "s-press-1",
            "s-press-2",
            "s-press-3"
          ]
        },
        {
          "t": "Lift off the pan and serve hot or pack in a lunchbox.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "asian-cucumber-sesame-salad",
      "name": "Asian cucumber sesame salad",
      "meal": "Side",
      "minutes": 15,
      "protein": 5,
      "how": "Gas",
      "tools": "Knife, small pan, 2 bowls, spoon",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 small (~250 g)",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~2 tbsp",
          "n": "Sesame seeds (til)",
          "tag": "sesame-seeds",
          "img": "i-sesame"
        },
        {
          "q": "~2 tbsp, roasted and crushed",
          "n": "Peanuts (moongphali)",
          "tag": "peanuts",
          "img": "i-peanut"
        },
        {
          "q": "~4 cloves, chopped",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-chilli"
        },
        {
          "q": "~1/4 tsp",
          "n": "Pink salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~2 tbsp, hot",
          "n": "Olive oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Honey",
          "tag": "honey",
          "img": "i-honey"
        }
      ],
      "steps": [
        {
          "t": "Cut the cucumber in half lengthwise.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Cut each half into thin long sticks.",
          "imgs": [
            "s-stick-1",
            "s-stick-2"
          ]
        },
        {
          "t": "Add the crushed peanuts on top of the cucumber sticks.",
          "imgs": [
            "s-peanut-1",
            "s-peanut-2",
            "s-peanut-3"
          ]
        },
        {
          "t": "Toast the sesame seeds in a dry pan on the gas, shaking the pan.",
          "imgs": [
            "s-toast-1",
            "s-toast-2",
            "s-toast-3"
          ]
        },
        {
          "t": "Tip the toasted sesame seeds into the cucumber bowl.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "For the dressing, put the chopped garlic in a small bowl.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Add the chilli flakes.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add the salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Pour the hot olive oil over the garlic and chilli.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add the honey.",
          "imgs": [
            "s-honey-1",
            "s-honey-2"
          ]
        },
        {
          "t": "Mix the dressing well.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "Pour the dressing over the cucumber.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Toss well and serve.",
          "imgs": [
            "s-toss-1",
            "s-toss-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "credit": "@Mumbaifoodiz",
      "card": "card"
    }
  ];
})();
