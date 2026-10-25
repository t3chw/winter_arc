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
    },
    {
      "id": "crispy-chickpea-veg-salad",
      "name": "Crispy chickpea veg salad",
      "meal": "Lunch or dinner",
      "minutes": 20,
      "protein": 15,
      "how": "Gas",
      "tools": "Non-stick pan, mixie (blender), gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (160 g), boiled",
          "n": "Chickpeas (kabuli chana), boiled",
          "tag": "chickpeas",
          "img": "i-chickpeas"
        },
        {
          "q": "~1/2 medium",
          "n": "Yellow capsicum",
          "tag": "capsicum",
          "img": "i-yellowcap"
        },
        {
          "q": "~1/2 medium",
          "n": "Red capsicum",
          "tag": "capsicum",
          "img": "i-redcap"
        },
        {
          "q": "~1 medium",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1 medium",
          "n": "Onion, chopped",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1/2 tsp, plus a pinch for the dressing",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp, plus a pinch for the dressing",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chillipowder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin powder (jeera powder, roasted)",
          "tag": "cumin-powder",
          "img": "i-cumin"
        },
        {
          "q": "~1/2 cup (100 g), thick",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~8 to 10",
          "n": "Cashews",
          "tag": "cashews",
          "img": "i-cashews"
        },
        {
          "q": "1 to 2",
          "n": "Dry red chilli",
          "tag": "dry-red-chilli",
          "img": "i-drychilli"
        },
        {
          "q": "3 to 4 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~50 g, crumbled",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~2 tbsp",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "a handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Cut the yellow and red capsicum into small cubes.",
          "imgs": [
            "s-capsicum-1",
            "s-capsicum-2"
          ]
        },
        {
          "t": "Cut the cucumber into small cubes. Chop the onion too.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
          ]
        },
        {
          "t": "Heat a non-stick pan. Add the boiled chickpeas and stir-fry on medium heat.",
          "imgs": [
            "s-pan-1",
            "s-pan-2"
          ]
        },
        {
          "t": "Sprinkle salt, red chilli powder and cumin powder. Toss until the chickpeas turn crisp and golden.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "In the mixie jar, add the curd and the cashews.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
          ]
        },
        {
          "t": "Add dry red chilli, garlic cloves, salt, red chilli powder and cumin powder.",
          "imgs": [
            "s-jar-3",
            "s-jar-4",
            "s-jar-5"
          ]
        },
        {
          "t": "Crumble in the paneer. Pour in a little water.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Close the lid and blend into a smooth, thick dressing.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Spread the crisp chickpeas on a wide plate.",
          "imgs": [
            "s-plate-1"
          ]
        },
        {
          "t": "Add the capsicum, cucumber and onion on top.",
          "imgs": [
            "s-plate-2",
            "s-plate-3",
            "s-plate-4"
          ]
        },
        {
          "t": "Pour the dressing over, add coriander, and mix well.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
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
      "id": "mixed-bean-usal",
      "name": "Mixed bean usal",
      "meal": "Breakfast",
      "minutes": 35,
      "protein": 15,
      "how": "Pressure cooker",
      "tools": "Pressure cooker, gas, big bowl",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tbsp (25 g)",
          "n": "Whole green moong",
          "tag": "moong-whole",
          "img": "i-moong"
        },
        {
          "q": "~2 tbsp (25 g)",
          "n": "Lobia (black-eyed beans)",
          "tag": "lobia",
          "img": "i-lobia"
        },
        {
          "q": "~2 tbsp (25 g)",
          "n": "Moth beans (matki)",
          "tag": "moth-beans",
          "img": "i-moth"
        },
        {
          "q": "~2 tbsp (25 g)",
          "n": "Dried green peas (vatana)",
          "tag": "dried-peas",
          "img": "i-peas"
        },
        {
          "q": "~2 tbsp (25 g)",
          "n": "Brown chana (desi kala chana)",
          "tag": "kala-chana",
          "img": "i-chana"
        },
        {
          "q": "enough to cover, ~2 cups",
          "n": "Water, for soaking",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~2 tsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 tsp",
          "n": "Mustard seeds",
          "tag": "mustard-seeds",
          "img": "i-seeds"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds",
          "tag": "cumin",
          "img": "i-seeds"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chillipowder"
        },
        {
          "q": "~1/2 tsp, to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 lemon",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon",
          "opt": true
        },
        {
          "q": "a few sprigs, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Pour equal parts of all five beans into a big bowl.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Mix the beans well with your hands.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Store the extra mix in a lidded jar for later.",
          "imgs": [
            "s-jar-1",
            "s-jar-2",
            "s-jar-3"
          ]
        },
        {
          "t": "Take 1 katori of the mix into a glass bowl.",
          "imgs": [
            "s-take-1",
            "s-take-2"
          ]
        },
        {
          "t": "Add water and wash the beans with your hand.",
          "imgs": [
            "s-wash-1",
            "s-wash-2"
          ]
        },
        {
          "t": "Cover with fresh water and soak overnight.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Heat oil in the pressure cooker. Add mustard seeds and cumin.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add turmeric and red chilli powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the soaked beans with a little water.",
          "imgs": [
            "s-add-1",
            "s-add-2",
            "s-add-3"
          ]
        },
        {
          "t": "Add salt and stir well.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Close the lid. Pressure cook until the beans are soft.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Spoon the cooked beans onto a plate.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        },
        {
          "t": "Squeeze lemon juice over the top.",
          "imgs": [
            "s-lemon-1",
            "s-lemon-2"
          ]
        },
        {
          "t": "Sprinkle chopped coriander and mix.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        }
      ],
      "tags": [
        "pressure-cooker",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "dahi-capsicum-sabzi",
      "name": "Dahi capsicum sabzi",
      "meal": "Lunch or dinner",
      "minutes": 20,
      "protein": 5,
      "how": "Gas",
      "tools": "Non-stick pan, gas, mortar (or grater)",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 large (~150 g)",
          "n": "Green capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "1 medium",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2 tbsp, in all",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp, crushed",
          "n": "Kasuri methi (dry fenugreek leaves)",
          "tag": "kasuri-methi",
          "img": "i-kasuri"
        },
        {
          "q": "a small handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 tsp, plus ~1 tsp later",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chillipowder"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1 tsp",
          "n": "Sesame seeds",
          "tag": "sesame-seeds",
          "img": "i-sesame"
        },
        {
          "q": "~8 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curryleaves"
        },
        {
          "q": "4 to 5 cloves, crushed",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1/2 tsp, to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/4 tsp",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp",
          "n": "Garam masala",
          "tag": "garam-masala",
          "img": "i-garammasala"
        },
        {
          "q": "~2 tbsp, crushed",
          "n": "Peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "~1/2 cup (100 g)",
          "n": "Thick curd (dahi), whisked",
          "tag": "curd",
          "img": "i-curd"
        }
      ],
      "steps": [
        {
          "t": "Cut the capsicum into long slices.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Slice the onion into long slices too.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Heat oil in a non-stick pan. Add the sliced onion and sauté.",
          "imgs": [
            "s-saute-1",
            "s-saute-2"
          ]
        },
        {
          "t": "Add the capsicum slices and stir.",
          "imgs": [
            "s-caps-1",
            "s-caps-2"
          ]
        },
        {
          "t": "Add crushed kasuri methi and chopped coriander.",
          "imgs": [
            "s-herb-1",
            "s-herb-2",
            "s-herb-3"
          ]
        },
        {
          "t": "Add red chilli powder. Cook, stirring, until the capsicum is soft.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Move the cooked capsicum to a plate.",
          "imgs": [
            "s-plate-1",
            "s-plate-2"
          ]
        },
        {
          "t": "In the same pan, heat a little oil. Add cumin seeds.",
          "imgs": [
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Add sesame seeds.",
          "imgs": [
            "s-sesame-1",
            "s-sesame-2"
          ]
        },
        {
          "t": "Add curry leaves.",
          "imgs": [
            "s-curry-1"
          ]
        },
        {
          "t": "Crush the garlic and add it to the pan.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2",
            "s-garlic-3"
          ]
        },
        {
          "t": "Put the cooked capsicum back in the pan.",
          "imgs": [
            "s-back-1",
            "s-back-2"
          ]
        },
        {
          "t": "Add salt and turmeric.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Add garam masala and a little more red chilli powder.",
          "imgs": [
            "s-masala-1",
            "s-masala-2",
            "s-masala-3"
          ]
        },
        {
          "t": "Crush the peanuts and add them.",
          "imgs": [
            "s-peanut-1",
            "s-peanut-2",
            "s-peanut-3"
          ]
        },
        {
          "t": "Whisk the curd until smooth.",
          "imgs": [
            "s-curd-1"
          ]
        },
        {
          "t": "Add the curd and mix well until combined.",
          "imgs": [
            "s-mixcurd-1",
            "s-mixcurd-2",
            "s-mixcurd-3"
          ]
        },
        {
          "t": "Serve hot in a bowl, with paratha or roti.",
          "imgs": [
            "s-serve-1"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "hyderabadi-veg-paneer-biryani",
      "name": "Hyderabadi veg paneer biryani",
      "meal": "Lunch or dinner",
      "minutes": 70,
      "protein": 15,
      "how": "Gas",
      "tools": "Heavy pan, deep pot with lid, small steel bowl, aluminium foil, gas",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "3 large (~450 g), thinly sliced",
          "n": "Onions",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1/2 cup, for frying (save it)",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 cup (150 g) small florets",
          "n": "Cauliflower",
          "tag": "cauliflower",
          "img": "i-cauliflower"
        },
        {
          "q": "~1/2 cup, small cubes",
          "n": "Potato",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~1/2 cup, chopped",
          "n": "French beans",
          "tag": "beans",
          "img": "i-beans"
        },
        {
          "q": "~1/2 cup (60 g), small cubes",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~1/2 cup",
          "n": "Green peas",
          "tag": "peas",
          "img": "i-peas"
        },
        {
          "q": "~1/2 tbsp",
          "n": "Ginger paste",
          "tag": "ginger",
          "img": "i-paste"
        },
        {
          "q": "~1/2 tbsp",
          "n": "Garlic paste",
          "tag": "garlic",
          "img": "i-paste"
        },
        {
          "q": "~1 cup (200 g), thick",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chillipowder"
        },
        {
          "q": "~2 tbsp, plus a pinch for the top",
          "n": "Biryani masala",
          "tag": "biryani-masala",
          "img": "i-biryanimasala",
          "alt": [
            "garam-masala"
          ]
        },
        {
          "q": "a handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "a handful, plus some for the top",
          "n": "Mint leaves",
          "tag": "mint",
          "img": "i-mint"
        },
        {
          "q": "~1/2 lemon, juiced",
          "n": "Lemon",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "~1 tsp, to taste",
          "n": "Salt",
          "tag": "salt"
        },
        {
          "q": "1 small piece",
          "n": "Charcoal (for smoke)",
          "tag": "charcoal",
          "img": "i-coal",
          "opt": true
        },
        {
          "q": "~2 tsp, plus a little for the smoke",
          "n": "Desi ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~150 g, in cubes",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "a few (cardamom, cinnamon, bay leaf)",
          "n": "Whole spices (khade masala)",
          "tag": "whole-spices",
          "img": "i-wholespices"
        },
        {
          "q": "2 cups (360 g), soaked",
          "n": "Basmati rice",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "~10 strands",
          "n": "Saffron (kesar)",
          "tag": "saffron",
          "img": "i-saffron",
          "opt": true
        },
        {
          "q": "~1/4 cup, warm",
          "n": "Milk, for the saffron",
          "tag": "milk",
          "img": "i-saffron",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Heat oil in a heavy pan. Add thinly sliced onions.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Fry for 8 to 10 minutes, stirring, until deep brown and crisp.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Lift the fried onions (birista) onto paper. Strain and save the oil.",
          "imgs": [
            "s-birista-1",
            "s-birista-2"
          ]
        },
        {
          "t": "Cut cauliflower, potato, beans and carrot into small cubes. Put them in a wide pan with the peas.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
          ]
        },
        {
          "t": "Add some birista and the ginger-garlic paste.",
          "imgs": [
            "s-paste-1"
          ]
        },
        {
          "t": "Add the thick curd.",
          "imgs": [
            "s-curd-1"
          ]
        },
        {
          "t": "Add red chilli powder.",
          "imgs": [
            "s-chilli-1"
          ]
        },
        {
          "t": "Add biryani masala.",
          "imgs": [
            "s-masala-1"
          ]
        },
        {
          "t": "Add chopped coriander and mint. Squeeze in lemon juice.",
          "imgs": [
            "s-herb-1",
            "s-herb-2"
          ]
        },
        {
          "t": "Mix everything well so the vegetables are coated.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "Optional smoke: set a hot coal in a small steel bowl, pour ghee on it, cover for smoke.",
          "imgs": [
            "s-smoke-1",
            "s-smoke-2"
          ]
        },
        {
          "t": "Fry the paneer cubes in a little oil until golden. Keep aside.",
          "imgs": [
            "s-paneer-1"
          ]
        },
        {
          "t": "Boil water in a pot with whole spices (khade masala). Then take the spices out.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the soaked rice and a spoon of ghee. Cook for 6 to 7 minutes.",
          "imgs": [
            "s-rice-1",
            "s-rice-2",
            "s-rice-3"
          ]
        },
        {
          "t": "Heat the saved birista oil in a heavy pot with a lid.",
          "imgs": [
            "s-pot-1"
          ]
        },
        {
          "t": "Add the marinated vegetables, some birista and salt to taste.",
          "imgs": [
            "s-pot-2",
            "s-pot-3"
          ]
        },
        {
          "t": "Cover and cook the vegetables for 8 to 10 minutes.",
          "imgs": [
            "s-cook-1"
          ]
        },
        {
          "t": "Take out half of the vegetables onto a plate.",
          "imgs": [
            "s-half-1"
          ]
        },
        {
          "t": "Spread half of the cooked rice over the vegetables in the pot.",
          "imgs": [
            "s-layer-1"
          ]
        },
        {
          "t": "Spread the rest of the vegetables over the rice.",
          "imgs": [
            "s-layer-2"
          ]
        },
        {
          "t": "Scatter the fried paneer, then cover with the rest of the rice.",
          "imgs": [
            "s-layer-3",
            "s-layer-4"
          ]
        },
        {
          "t": "Pour saffron milk over the rice. Sprinkle birista on top.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Add mint leaves, more fried paneer and a sprinkle of biryani masala.",
          "imgs": [
            "s-top-3",
            "s-top-4"
          ]
        },
        {
          "t": "Seal the pot with foil, put the lid on, and dum cook for 10 minutes.",
          "imgs": [
            "s-dum-1",
            "s-dum-2"
          ]
        },
        {
          "t": "Mix gently from the bottom and serve hot.",
          "imgs": [
            "s-serve-1"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "dahi-wale-chole",
      "name": "Chickpeas in curd gravy",
      "meal": "Lunch or dinner",
      "minutes": 20,
      "protein": 15,
      "how": "Gas",
      "tools": "Mixie (blender), non-stick pan with lid, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3/4 cup (150 g), thick",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~10",
          "n": "Cashews",
          "tag": "cashews",
          "img": "i-cashews"
        },
        {
          "q": "~1 tsp",
          "n": "Ginger paste",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1 tsp",
          "n": "Garlic paste",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "1 to 2",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-greenchilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chillipowder"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder",
          "tag": "coriander-powder",
          "img": "i-corianderpowder"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "a few",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-cumin",
          "opt": true
        },
        {
          "q": "1 medium, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1.5 cups (250 g), boiled",
          "n": "Chickpeas (chole), boiled",
          "tag": "chickpeas",
          "img": "i-chickpeas",
          "alt": [
            "kala-chana"
          ]
        },
        {
          "q": "1 medium, in rings",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "a handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander",
          "opt": true
        },
        {
          "q": "~1/2 tsp",
          "n": "Garam masala",
          "tag": "garam-masala",
          "img": "i-garammasala"
        },
        {
          "q": "~1/2 tsp, to taste",
          "n": "Salt",
          "tag": "salt"
        }
      ],
      "steps": [
        {
          "t": "Put the curd in the mixie jar.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add cashews, ginger-garlic paste and green chillies.",
          "imgs": [
            "s-jar-1",
            "s-jar-2",
            "s-jar-3"
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
          "t": "Blend into a smooth, thick paste.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Heat oil in a pan. Add cumin seeds and curry leaves.",
          "imgs": [
            "s-tadka-1"
          ]
        },
        {
          "t": "Add the chopped tomato. Cook until it turns soft and mushy.",
          "imgs": [
            "s-tomato-1",
            "s-tomato-2",
            "s-tomato-3"
          ]
        },
        {
          "t": "Pour in the curd paste and stir well.",
          "imgs": [
            "s-gravy-1",
            "s-gravy-2",
            "s-gravy-3"
          ]
        },
        {
          "t": "Cover and cook until red oil shows on top.",
          "imgs": [
            "s-cover-1",
            "s-cover-2"
          ]
        },
        {
          "t": "Add the boiled chickpeas.",
          "imgs": [
            "s-chole-1",
            "s-chole-2"
          ]
        },
        {
          "t": "Add sliced onion rings, chopped coriander and garam masala.",
          "imgs": [
            "s-top-1",
            "s-top-2",
            "s-top-3"
          ]
        },
        {
          "t": "Mix everything well.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "Cover and cook for 2 to 3 minutes.",
          "imgs": [
            "s-simmer-1",
            "s-simmer-2"
          ]
        },
        {
          "t": "Serve hot with rice or roti.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-fibre"
      ],
      "credit": "myflavourfuljourney",
      "card": "card"
    },
    {
      "id": "aloo-suji-pancake",
      "name": "Aloo suji pancakes",
      "meal": "Breakfast",
      "minutes": 25,
      "protein": 10,
      "how": "Gas",
      "tools": "Blender (mixie), tawa, small pan, gas",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "2 medium (~300 g)",
          "n": "Potato",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "40 g (~3 tbsp)",
          "n": "Curd",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "90 g (~1/2 cup)",
          "n": "Semolina (suji)",
          "tag": "suji",
          "img": "i-suji"
        },
        {
          "q": "2 tbsp",
          "n": "Gram flour (besan)",
          "tag": "besan",
          "img": "i-besan"
        },
        {
          "q": "1 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "200 ml (+ a splash)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "1 medium",
          "n": "Onion, chopped",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "2 medium",
          "n": "Carrot, finely chopped",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "1 medium",
          "n": "Capsicum, chopped",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "1 medium",
          "n": "Tomato, chopped",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander-leaves"
        },
        {
          "q": "2 tbsp (+ a little for the tawa)",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "1 tsp",
          "n": "Cumin seeds",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "1 tsp",
          "n": "Mustard seeds",
          "tag": "mustard-seeds",
          "img": "i-mustard-seeds"
        },
        {
          "q": "1/2 tsp",
          "n": "Hing (asafoetida)",
          "tag": "hing",
          "img": "i-hing"
        },
        {
          "q": "2 to 3 sprigs",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry-leaves"
        },
        {
          "q": "1/2 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-chilli-flakes"
        }
      ],
      "steps": [
        {
          "t": "Dice 2 potatoes and put them in the blender jar.",
          "imgs": [
            "s1-1",
            "s1-2"
          ]
        },
        {
          "t": "Add a splash of water, close the lid and blend to a thick paste.",
          "imgs": [
            "s2-1",
            "s2-2",
            "s2-3"
          ]
        },
        {
          "t": "Add 40 g curd and 90 g semolina to the jar.",
          "imgs": [
            "s3-1",
            "s3-2",
            "s3-3"
          ]
        },
        {
          "t": "Add 2 tbsp besan and 1 tsp salt.",
          "imgs": [
            "s4-1",
            "s4-2"
          ]
        },
        {
          "t": "Pour in 200 ml water.",
          "imgs": [
            "s5-1"
          ]
        },
        {
          "t": "Close the lid and blend again until smooth.",
          "imgs": [
            "s6-1",
            "s6-2"
          ]
        },
        {
          "t": "Pour the batter into a big bowl.",
          "imgs": [
            "s7-1",
            "s7-2"
          ]
        },
        {
          "t": "Add chopped onion, carrot and capsicum.",
          "imgs": [
            "s8-1",
            "s8-2",
            "s8-3"
          ]
        },
        {
          "t": "Add chopped tomato and coriander. Mix well.",
          "imgs": [
            "s9-1",
            "s9-2",
            "s9-3"
          ]
        },
        {
          "t": "Tadka: heat 2 tbsp oil in a small pan. Add cumin and mustard seeds.",
          "imgs": [
            "s10-1",
            "s10-2",
            "s10-3"
          ]
        },
        {
          "t": "Add hing, curry leaves and chilli flakes.",
          "imgs": [
            "s11-1",
            "s11-2",
            "s11-3"
          ]
        },
        {
          "t": "Pour the hot tadka over the batter and mix.",
          "imgs": [
            "s12-1",
            "s12-2"
          ]
        },
        {
          "t": "Heat a tawa. Wipe it with a little oil on a tissue.",
          "imgs": [
            "s13-1",
            "s13-2"
          ]
        },
        {
          "t": "Pour a ladle of batter on the tawa and spread it a little.",
          "imgs": [
            "s14-1",
            "s14-2"
          ]
        },
        {
          "t": "Cook until golden underneath. Flip and cook the other side.",
          "imgs": [
            "s15-1",
            "s15-2",
            "s15-3"
          ]
        },
        {
          "t": "Stack the pancakes and serve hot.",
          "imgs": [
            "s16-1",
            "s16-2",
            "s16-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "credit": "New Taste of India",
      "card": "card"
    },
    {
      "id": "radish-rice-flour-puri",
      "name": "Radish rice flour puri",
      "meal": "Snack",
      "minutes": 45,
      "protein": 5,
      "how": "Gas",
      "tools": "Pan with lid, kadai for frying, rolling pin, round cutter (or a katori), slotted spoon, gas",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (250 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~2 tbsp (1 for the pan, 1 for the dough)",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~1/2 tsp",
          "n": "Nigella seeds (kalonji)",
          "tag": "nigella-seeds",
          "img": "i-nigella-seeds"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1 tsp",
          "n": "Sesame seeds (til)",
          "tag": "sesame-seeds",
          "img": "i-sesame-seeds"
        },
        {
          "q": "~1/2 tsp, a pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp",
          "n": "Ginger-garlic paste",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1/2 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-chilli-flakes"
        },
        {
          "q": "~1 cup, grated (1 medium)",
          "n": "Radish (mooli), grated",
          "tag": "radish",
          "img": "i-radish"
        },
        {
          "q": "~1 cup (150 g)",
          "n": "Rice flour",
          "tag": "rice-flour",
          "img": "i-rice-flour"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander-leaves"
        },
        {
          "q": "~2 cups, for deep frying",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        }
      ],
      "steps": [
        {
          "t": "Heat water in a pan. Add ghee.",
          "imgs": [
            "s1-1",
            "s1-2"
          ]
        },
        {
          "t": "Add nigella seeds, cumin seeds and sesame seeds.",
          "imgs": [
            "s2-1",
            "s2-2",
            "s2-3"
          ]
        },
        {
          "t": "Add a pinch of salt, ginger-garlic paste and chilli flakes.",
          "imgs": [
            "s3-1",
            "s3-2",
            "s3-3"
          ]
        },
        {
          "t": "Add grated radish. Cook for 4 to 5 minutes.",
          "imgs": [
            "s4-1",
            "s4-2",
            "s4-3"
          ]
        },
        {
          "t": "Add the rice flour and mix well.",
          "imgs": [
            "s5-1",
            "s5-2",
            "s5-3"
          ]
        },
        {
          "t": "Switch off the gas. Cover and keep aside for 10 minutes.",
          "imgs": [
            "s6-1",
            "s6-2"
          ]
        },
        {
          "t": "Open the lid. Tip the crumbly mix into a bowl.",
          "imgs": [
            "s7-1",
            "s7-2"
          ]
        },
        {
          "t": "Move it to a bowl. Add melted ghee and chopped coriander.",
          "imgs": [
            "s8-1",
            "s8-2"
          ]
        },
        {
          "t": "Knead into a smooth, semi-soft dough.",
          "imgs": [
            "s9-1",
            "s9-2",
            "s9-3"
          ]
        },
        {
          "t": "Take a small portion and make a ball. Flatten it.",
          "imgs": [
            "s10-1",
            "s10-2"
          ]
        },
        {
          "t": "Roll it out. Cut a neat round with a ring cutter.",
          "imgs": [
            "s11-1",
            "s11-2",
            "s11-3"
          ]
        },
        {
          "t": "Heat oil in a kadai. Slide the puri in gently.",
          "imgs": [
            "s12-1",
            "s12-2"
          ]
        },
        {
          "t": "Fry until puffed and golden. Turn once.",
          "imgs": [
            "s13-1",
            "s13-2",
            "s13-3"
          ]
        },
        {
          "t": "Lift out with a slotted spoon. Serve hot.",
          "imgs": [
            "s14-1",
            "s14-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "dry-fruit-apple-banana-shake",
      "name": "Dry fruit apple banana shake",
      "meal": "Drink",
      "minutes": 35,
      "protein": 25,
      "how": "No cooking",
      "tools": "Bowl, small blender cup, glass",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~8",
          "n": "Cashews",
          "tag": "cashews",
          "img": "i-cashews"
        },
        {
          "q": "~8",
          "n": "Almonds",
          "tag": "almonds",
          "img": "i-almonds"
        },
        {
          "q": "~5",
          "n": "Dates, pitted",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "~1 tbsp (a few kept for topping)",
          "n": "Pistachios",
          "tag": "pistachios",
          "img": "i-pistachios"
        },
        {
          "q": "a pinch",
          "n": "Saffron (kesar)",
          "tag": "saffron",
          "img": "i-saffron"
        },
        {
          "q": "~2 cups (1 to soak, 1 to blend)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~1/2 small, cubed",
          "n": "Apple",
          "tag": "apple",
          "img": "i-apple"
        },
        {
          "q": "1, sliced",
          "n": "Banana",
          "tag": "banana",
          "img": "i-banana"
        }
      ],
      "steps": [
        {
          "t": "Put cashews, almonds and dates in a bowl.",
          "imgs": [
            "s1-1",
            "s1-2",
            "s1-3"
          ]
        },
        {
          "t": "Add pistachios and a pinch of saffron.",
          "imgs": [
            "s2-1",
            "s2-2"
          ]
        },
        {
          "t": "Pour in about 1 cup of milk.",
          "imgs": [
            "s3-1",
            "s3-2"
          ]
        },
        {
          "t": "Cover the bowl and keep it aside for 30 minutes.",
          "imgs": [
            "s4-1",
            "s4-2",
            "s4-3"
          ]
        },
        {
          "t": "Pour the soaked mix into a blender cup.",
          "imgs": [
            "s5-1",
            "s5-2"
          ]
        },
        {
          "t": "Add chopped apple and sliced banana.",
          "imgs": [
            "s6-1",
            "s6-2",
            "s6-3"
          ]
        },
        {
          "t": "Pour in more milk.",
          "imgs": [
            "s7-1"
          ]
        },
        {
          "t": "Close the lid and blend until smooth.",
          "imgs": [
            "s8-1",
            "s8-2"
          ]
        },
        {
          "t": "Pour the shake into a glass.",
          "imgs": [
            "s9-1",
            "s9-2",
            "s9-3"
          ]
        },
        {
          "t": "Top with pistachio slivers and a few dried rose petals.",
          "imgs": [
            "s10-1",
            "s10-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "high-protein"
      ],
      "credit": "Chinky's Kitchen (@chinkyskitchen)",
      "card": "card"
    },
    {
      "id": "no-cook-bread-dahi-vada",
      "name": "No-cook bread dahi vada",
      "meal": "Snack",
      "minutes": 25,
      "protein": 20,
      "how": "No cooking",
      "tools": "Steel glass (round cutter), whisk, sieve, small grinder, bowls",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "6 slices",
          "n": "Bread, white",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "2 cups",
          "n": "Curd",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "2 tsp",
          "n": "Sugar",
          "tag": "sugar",
          "img": "i-sugar"
        },
        {
          "q": "3 small",
          "n": "Potato, boiled",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "1/2 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat-masala"
        },
        {
          "q": "1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-red-chilli-powder"
        },
        {
          "q": "1/2 tsp",
          "n": "Black salt",
          "tag": "black-salt",
          "img": "i-black-salt"
        },
        {
          "q": "2 big",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "1 cup",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander-leaves"
        },
        {
          "q": "a few drops",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "a pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "1 cube",
          "n": "Ice cube",
          "tag": "ice",
          "img": "i-ice"
        },
        {
          "q": "~1/2 tsp",
          "n": "Roasted cumin powder",
          "tag": "cumin-powder",
          "opt": true,
          "img": "i-cumin-powder"
        },
        {
          "q": "~2 tbsp",
          "n": "Sweet chutney (imli or date)",
          "tag": "chutney",
          "opt": true,
          "img": "i-chutney"
        },
        {
          "q": "~4 pieces",
          "n": "Papdi",
          "tag": "papdi",
          "opt": true,
          "img": "i-papdi"
        },
        {
          "q": "~1/4 cup",
          "n": "Nachos, crushed",
          "tag": "nachos",
          "opt": true,
          "img": "i-nachos"
        },
        {
          "q": "~2 tbsp",
          "n": "Pomegranate seeds",
          "tag": "pomegranate",
          "opt": true,
          "img": "i-pomegranate"
        }
      ],
      "steps": [
        {
          "t": "Cut the bread slices into rounds with a steel glass.",
          "imgs": [
            "s1-1",
            "s1-2",
            "s1-3"
          ]
        },
        {
          "t": "Whisk 2 cups curd with 2 tsp sugar.",
          "imgs": [
            "s2-1",
            "s2-2",
            "s2-3"
          ]
        },
        {
          "t": "Strain the curd through a sieve until smooth. Keep it aside.",
          "imgs": [
            "s3-1",
            "s3-2",
            "s3-3"
          ]
        },
        {
          "t": "Put green chilli and 1 cup coriander in a small grinder jar.",
          "imgs": [
            "s4-1",
            "s4-2"
          ]
        },
        {
          "t": "Add salt, lemon juice and an ice cube.",
          "imgs": [
            "s5-1",
            "s5-2",
            "s5-3"
          ]
        },
        {
          "t": "Grind to a smooth green chutney.",
          "imgs": [
            "s6-1",
            "s6-2"
          ]
        },
        {
          "t": "Mash 3 boiled potatoes in a bowl. Add 1/2 tsp chaat masala.",
          "imgs": [
            "s7-1",
            "s7-2"
          ]
        },
        {
          "t": "Add 1/2 tsp red chilli powder and 1/2 tsp black salt.",
          "imgs": [
            "s8-1",
            "s8-2",
            "s8-3"
          ]
        },
        {
          "t": "Add 2 tsp green chutney. Mix into a smooth green filling.",
          "imgs": [
            "s9-1",
            "s9-2",
            "s9-3"
          ]
        },
        {
          "t": "Spread filling on a bread round. Cover with a second round.",
          "imgs": [
            "s10-1",
            "s10-2",
            "s10-3"
          ]
        },
        {
          "t": "Place the sandwiches on a plate.",
          "imgs": [
            "s11-1"
          ]
        },
        {
          "t": "Spoon the sweet curd over them until they are well covered.",
          "imgs": [
            "s12-1",
            "s12-2",
            "s12-3"
          ]
        },
        {
          "t": "Sprinkle roasted cumin powder on top.",
          "imgs": [
            "s13-1",
            "s13-2"
          ]
        },
        {
          "t": "Dot with green chutney. Drizzle sweet chutney.",
          "imgs": [
            "s14-1",
            "s14-2",
            "s14-3"
          ]
        },
        {
          "t": "Top with crushed papdi, nachos and pomegranate seeds. Serve.",
          "imgs": [
            "s15-1",
            "s15-2",
            "s15-3"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "palak-paneer-pulao",
      "name": "Palak paneer pulao",
      "meal": "Lunch or dinner",
      "minutes": 60,
      "protein": 20,
      "how": "Gas",
      "tools": "Pan, heavy pot with lid, blender cup, gas",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~200 g, one block",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~20",
          "n": "Cashews",
          "tag": "cashews",
          "img": "i-cashews"
        },
        {
          "q": "~300 g (2 bunches)",
          "n": "Spinach (palak)",
          "tag": "spinach",
          "img": "i-spinach"
        },
        {
          "q": "~2 cups (350 g)",
          "n": "Basmati rice",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "~3 cups (for the rice) + water to boil spinach",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1/2 cup (3 tbsp for the pot, rest for frying paneer)",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1 tbsp mixed: cinnamon, cloves, green cardamom, black pepper, star anise",
          "n": "Whole spices",
          "tag": "whole-spices",
          "img": "i-whole-spices"
        },
        {
          "q": "2 leaves",
          "n": "Bay leaf",
          "tag": "bay-leaf",
          "img": "i-bay-leaf"
        },
        {
          "q": "1 to 2",
          "n": "Dry red chilli",
          "tag": "dry-red-chilli",
          "img": "i-dry-red-chilli"
        },
        {
          "q": "2 medium (~250 g)",
          "n": "Onion, sliced",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1/2 cup",
          "n": "Tomato puree",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1 tbsp",
          "n": "Ginger-garlic paste",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1 tbsp",
          "n": "Coriander powder",
          "tag": "coriander-powder",
          "img": "i-coriander-powder"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-red-chilli-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 cup",
          "n": "Green peas",
          "tag": "peas",
          "img": "i-peas"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander-leaves"
        },
        {
          "q": "to taste",
          "n": "Salt",
          "tag": "salt"
        },
        {
          "q": "a few spoons",
          "n": "Curd, to serve",
          "tag": "curd",
          "opt": true,
          "img": "i-curd"
        }
      ],
      "steps": [
        {
          "t": "Heat oil in a pan. Fry the whole paneer block until golden.",
          "imgs": [
            "s1-1",
            "s1-2",
            "s1-3"
          ]
        },
        {
          "t": "Cut the paneer into cubes.",
          "imgs": [
            "s2-1",
            "s2-2",
            "s2-3"
          ]
        },
        {
          "t": "In the same oil, fry the cashews until golden. Keep them with the paneer.",
          "imgs": [
            "s3-1",
            "s3-2",
            "s3-3"
          ]
        },
        {
          "t": "Boil the spinach in hot water until it wilts.",
          "imgs": [
            "s4-1",
            "s4-2",
            "s4-3"
          ]
        },
        {
          "t": "Lift the spinach out with tongs. Put it in a blender cup.",
          "imgs": [
            "s5-1",
            "s5-2"
          ]
        },
        {
          "t": "Blend into a smooth green puree.",
          "imgs": [
            "s6-1",
            "s6-2"
          ]
        },
        {
          "t": "Put the rice in a bowl. Cover with water and soak.",
          "imgs": [
            "s7-1",
            "s7-2",
            "s7-3"
          ]
        },
        {
          "t": "In a heavy pot, heat oil. Add cumin, whole spices, bay leaf and dry red chilli.",
          "imgs": [
            "s8-1",
            "s8-2",
            "s8-3"
          ]
        },
        {
          "t": "Slice the onions.",
          "imgs": [
            "s9-1",
            "s9-2"
          ]
        },
        {
          "t": "Add the onion. Fry until soft and golden.",
          "imgs": [
            "s10-1",
            "s10-2",
            "s10-3"
          ]
        },
        {
          "t": "Add tomato puree and ginger-garlic paste.",
          "imgs": [
            "s11-1",
            "s11-2"
          ]
        },
        {
          "t": "Add coriander powder, red chilli powder and turmeric.",
          "imgs": [
            "s12-1",
            "s12-2",
            "s12-3"
          ]
        },
        {
          "t": "Cook, stirring, until the masala turns dark and thick.",
          "imgs": [
            "s13-1",
            "s13-2"
          ]
        },
        {
          "t": "Pour in the spinach puree. Add salt to taste.",
          "imgs": [
            "s14-1"
          ]
        },
        {
          "t": "Add the green peas and mix well.",
          "imgs": [
            "s15-1",
            "s15-2"
          ]
        },
        {
          "t": "Add the fried paneer and cashews.",
          "imgs": [
            "s16-1"
          ]
        },
        {
          "t": "Add the soaked rice and water. Sprinkle chopped coriander.",
          "imgs": [
            "s17-1",
            "s17-2"
          ]
        },
        {
          "t": "Bring to a boil. Cover with a lid and cook until the rice is done.",
          "imgs": [
            "s18-1",
            "s18-2",
            "s18-3"
          ]
        },
        {
          "t": "Open the lid. Gently mix the rice.",
          "imgs": [
            "s19-1",
            "s19-2",
            "s19-3"
          ]
        },
        {
          "t": "Serve hot with curd.",
          "imgs": [
            "s20-1",
            "s20-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "creamy-zoodles-spicy-paneer",
      "name": "Zucchini noodles with spicy paneer",
      "meal": "Lunch or dinner",
      "minutes": 35,
      "protein": 30,
      "how": "Gas",
      "tools": "Wok or pan, gas, blender, julienne peeler",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 large (~300 g)",
          "n": "Zucchini",
          "tag": "zucchini",
          "img": "i-zucchini"
        },
        {
          "q": "~150 g",
          "n": "Paneer, cut in cubes",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~2 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-chilliflakes"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black pepper",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~3 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 cup (3 colours)",
          "n": "Capsicum, red, yellow and green, cut in pieces",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "1",
          "n": "Dry red chilli",
          "tag": "dry-red-chilli",
          "img": "i-drychilli"
        },
        {
          "q": "~1 tbsp",
          "n": "Garlic, grated",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "1 medium",
          "n": "Onion, cut in petals",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "2 medium (~1 cup chopped)",
          "n": "Tomato, chopped",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chillipowder"
        },
        {
          "q": "~1/2 cup (100 g)",
          "n": "Red lentils (masoor dal)",
          "tag": "masoor-dal",
          "img": "i-dal",
          "alt": [
            "moong-dal"
          ]
        },
        {
          "q": "~10",
          "n": "Cashews",
          "tag": "cashews",
          "img": "i-cashews"
        },
        {
          "q": "~2 cups",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "a pinch",
          "n": "Sesame seeds",
          "tag": "sesame-seeds",
          "img": "i-sesame",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Peel the zucchini into long thin noodles with a julienne peeler. Keep the leftover centre.",
          "imgs": [
            "s-peel-1",
            "s-peel-2",
            "s-peel-3"
          ]
        },
        {
          "t": "Sauce: heat 1 tbsp oil in a pan. Add dry red chilli and grated garlic.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-1b"
          ]
        },
        {
          "t": "Add the onion and tomato. Cook on medium heat until the tomato softens.",
          "imgs": [
            "s-sauce-2",
            "s-sauce-3"
          ]
        },
        {
          "t": "Add turmeric and red chilli powder. Mix well.",
          "imgs": [
            "s-sauce-4",
            "s-sauce-5"
          ]
        },
        {
          "t": "Add the red lentils and cashews.",
          "imgs": [
            "s-sauce-6",
            "s-sauce-7"
          ]
        },
        {
          "t": "Pour in water, cover with a lid and cook until the lentils are soft and mushy.",
          "imgs": [
            "s-sauce-8",
            "s-sauce-9",
            "s-sauce-10"
          ]
        },
        {
          "t": "Move to a blender jar. Add the leftover zucchini pieces and a little water.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Blend until smooth.",
          "imgs": [
            "s-blend-3"
          ]
        },
        {
          "t": "Pour the sauce back into the pan. Add salt and pepper and stir. Keep it warm.",
          "imgs": [
            "s-sauce-11",
            "s-sauce-12",
            "s-sauce-13"
          ]
        },
        {
          "t": "Heat a wok with a little oil. Fry the paneer cubes until golden.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Add the capsicum and stir fry on high heat for 1 to 2 minutes.",
          "imgs": [
            "s-paneer-3",
            "s-paneer-4"
          ]
        },
        {
          "t": "In a clean wok, heat oil. Add chilli flakes and salt.",
          "imgs": [
            "s-noodle-1",
            "s-noodle-2"
          ]
        },
        {
          "t": "Add the zucchini noodles and toss with tongs for about 1 minute.",
          "imgs": [
            "s-noodle-3",
            "s-noodle-4"
          ]
        },
        {
          "t": "In a bowl, add the paneer and capsicum, then the noodles. Pour the sauce beside them.",
          "imgs": [
            "s-plate-1",
            "s-plate-2",
            "s-plate-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "whipped-cold-coffee",
      "name": "Whipped cold coffee",
      "meal": "Drink",
      "minutes": 5,
      "protein": 10,
      "how": "No cooking",
      "tools": "Mixie (grinder jar), tall glass, spoon",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tbsp",
          "n": "Instant coffee powder",
          "tag": "coffee",
          "img": "i-coffee"
        },
        {
          "q": "~3 tbsp",
          "n": "Sugar",
          "tag": "sugar",
          "img": "i-sugar"
        },
        {
          "q": "~7 cubes (3 for the jar, 4 for the glass)",
          "n": "Ice cubes",
          "tag": "ice",
          "img": "i-ice"
        },
        {
          "q": "~1 cup (200 ml)",
          "n": "Cold milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~1 tbsp",
          "n": "Chocolate chips",
          "tag": "chocolate-chips",
          "img": "i-chips",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the coffee powder in a dry mixie jar.",
          "imgs": [
            "s-coffee-1",
            "s-coffee-2"
          ]
        },
        {
          "t": "Add the sugar on top.",
          "imgs": [
            "s-sugar-1",
            "s-sugar-2",
            "s-sugar-3"
          ]
        },
        {
          "t": "Add 3 ice cubes.",
          "imgs": [
            "s-ice-1"
          ]
        },
        {
          "t": "Close the lid and blend until you get a thick, creamy coffee froth.",
          "imgs": [
            "s-blend-1",
            "s-blend-2",
            "s-blend-3"
          ]
        },
        {
          "t": "Put 4 ice cubes in a tall glass.",
          "imgs": [
            "s-glass-1",
            "s-glass-2"
          ]
        },
        {
          "t": "Pour cold milk over the ice.",
          "imgs": [
            "s-milk-1",
            "s-milk-2"
          ]
        },
        {
          "t": "Pour the coffee froth over the milk.",
          "imgs": [
            "s-cream-1",
            "s-cream-2"
          ]
        },
        {
          "t": "Sprinkle chocolate chips on top. Stir with a spoon and drink.",
          "imgs": [
            "s-top-1",
            "s-top-2"
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
      "id": "gond-katira-sharbat",
      "name": "Gond katira sharbat",
      "meal": "Drink",
      "minutes": 20,
      "protein": 0,
      "how": "No cooking",
      "tools": "Mixie (grinder jar), sieve, tall glass, jar",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tbsp (small handful)",
          "n": "Gond katira (edible gum)",
          "tag": "gond-katira",
          "img": "i-gond"
        },
        {
          "q": "~1 1/2 cups (soaking + drink)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1/4 cup",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-saunf"
        },
        {
          "q": "~1/2 cup",
          "n": "Rock sugar (mishri)",
          "tag": "rock-sugar",
          "img": "i-mishri",
          "alt": [
            "sugar"
          ]
        },
        {
          "q": "~1 tsp",
          "n": "Black pepper, whole",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1 tsp",
          "n": "Dry ginger powder (sonth)",
          "tag": "dry-ginger-powder",
          "img": "i-sonth",
          "opt": true
        },
        {
          "q": "~1/2 tsp",
          "n": "Black salt (kala namak)",
          "tag": "black-salt",
          "img": "i-blacksalt"
        },
        {
          "q": "~1 tbsp, soaked",
          "n": "Sabja (basil) seeds",
          "tag": "basil-seeds",
          "img": "i-sabja"
        },
        {
          "q": "~3 cubes",
          "n": "Ice",
          "tag": "ice",
          "img": "i-ice"
        },
        {
          "q": "~8 leaves",
          "n": "Mint leaves",
          "tag": "mint",
          "img": "i-mint"
        },
        {
          "q": "1/2",
          "n": "Lemon",
          "tag": "lemon",
          "img": "i-lemon"
        }
      ],
      "steps": [
        {
          "t": "Put the gond katira in a small glass.",
          "imgs": [
            "s-gond-1",
            "s-gond-2"
          ]
        },
        {
          "t": "Pour in water and stir. Leave to soak for a few hours until it swells into jelly.",
          "imgs": [
            "s-gond-3",
            "s-gond-4",
            "s-gond-5"
          ]
        },
        {
          "t": "Premix: put the fennel seeds in a dry mixie jar.",
          "imgs": [
            "s-saunf-1",
            "s-saunf-2"
          ]
        },
        {
          "t": "Add the rock sugar and the black pepper.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Add the dry ginger powder and the black salt.",
          "imgs": [
            "s-mix-3",
            "s-mix-4"
          ]
        },
        {
          "t": "Grind to a fine powder.",
          "imgs": [
            "s-grind-1",
            "s-grind-2"
          ]
        },
        {
          "t": "Sieve the powder into a bowl.",
          "imgs": [
            "s-sieve-1",
            "s-sieve-2",
            "s-sieve-3"
          ]
        },
        {
          "t": "Tip the coarse bits from the sieve back into the jar and grind again.",
          "imgs": [
            "s-regrind-1"
          ]
        },
        {
          "t": "Fill a dry glass jar with the powder and close the lid.",
          "imgs": [
            "s-jar-1",
            "s-jar-2",
            "s-jar-3"
          ]
        },
        {
          "t": "Sharbat: put 2 spoons of the soaked gond katira in a tall glass.",
          "imgs": [
            "s-glass-1",
            "s-glass-2"
          ]
        },
        {
          "t": "Add the soaked sabja seeds.",
          "imgs": [
            "s-sabja-1"
          ]
        },
        {
          "t": "Add the ice cubes and the mint leaves.",
          "imgs": [
            "s-ice-1",
            "s-ice-2"
          ]
        },
        {
          "t": "Squeeze in the lemon juice.",
          "imgs": [
            "s-lemon-1",
            "s-lemon-2"
          ]
        },
        {
          "t": "Add 2 heaped spoons of the premix.",
          "imgs": [
            "s-premix-1"
          ]
        },
        {
          "t": "Pour in cold water and stir well.",
          "imgs": [
            "s-water-1",
            "s-water-2",
            "s-water-3"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "make-ahead"
      ],
      "credit": "poonamscookery_",
      "card": "card"
    },
    {
      "id": "grilled-roti-samosa",
      "name": "Grilled roti samosa",
      "meal": "Snack",
      "minutes": 15,
      "protein": 20,
      "how": "Gas",
      "tools": "Sandwich griller (or tawa on gas), knife",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "2",
          "n": "Roti (chapati), ready-made",
          "tag": "atta",
          "img": "i-roti"
        },
        {
          "q": "~4 tbsp",
          "n": "Green chutney",
          "tag": "green-chutney",
          "img": "i-chutney"
        },
        {
          "q": "~1/2 cup (50 g)",
          "n": "Cheese, grated (half for filling, half for topping)",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "~100 g",
          "n": "Paneer, small cubes, spiced with a red masala",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~2",
          "n": "Green chilli, sliced",
          "tag": "green-chilli",
          "img": "i-chilli",
          "opt": true
        },
        {
          "q": "a small bowl",
          "n": "Tomato ketchup or red chilli sauce, to dip",
          "tag": "tomato-ketchup",
          "img": "i-ketchup",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Fold a roti in half and cut it along the fold into two halves.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Spread green chutney over one half roti.",
          "imgs": [
            "s-chutney-1",
            "s-chutney-2"
          ]
        },
        {
          "t": "Sprinkle grated cheese on one side of the roti.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2"
          ]
        },
        {
          "t": "Add the spiced paneer cubes next to the cheese.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Fold the roti over the filling to make a cone.",
          "imgs": [
            "s-fold-1",
            "s-fold-2"
          ]
        },
        {
          "t": "Tuck in the open side to close it into a triangle.",
          "imgs": [
            "s-tuck-1",
            "s-tuck-2",
            "s-tuck-3"
          ]
        },
        {
          "t": "Place the triangles on a sandwich griller, close the lid and grill until crisp.",
          "imgs": [
            "s-grill-1",
            "s-grill-2",
            "s-grill-3"
          ]
        },
        {
          "t": "Open the lid. Top each triangle with grated cheese and sliced green chilli.",
          "imgs": [
            "s-top-1",
            "s-top-2",
            "s-top-3"
          ]
        },
        {
          "t": "Close the lid and grill again until the cheese melts.",
          "imgs": [
            "s-regrill-1",
            "s-regrill-2"
          ]
        },
        {
          "t": "Serve hot with ketchup or red chilli sauce.",
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
      "id": "cheesy-veg-roti-garlic-bread",
      "name": "Cheesy veg roti garlic bread",
      "meal": "Snack",
      "minutes": 25,
      "protein": 10,
      "how": "Gas",
      "tools": "Tawa, spatula, spoons, bowls, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "2",
          "n": "Roti (chapati), ready-made",
          "tag": "atta",
          "img": "i-roti"
        },
        {
          "q": "~3 tbsp, soft",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "~4 cloves, grated",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 tsp (for the butter and the filling)",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-chilli-flakes"
        },
        {
          "q": "~3 tbsp, chopped (for the butter and the filling)",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander-leaves"
        },
        {
          "q": "~1/2 cup, mixed colours, diced",
          "n": "Bell peppers (capsicum)",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~1/4 cup",
          "n": "Sweet corn",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Black olives",
          "tag": "olives",
          "img": "i-olives"
        },
        {
          "q": "~1 tbsp, chopped",
          "n": "Jalapeno (pickled)",
          "tag": "jalapeno",
          "img": "i-jalapeno"
        },
        {
          "q": "~1/2 cup, grated",
          "n": "Cheese",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "~1/2 tsp",
          "n": "Mixed herbs (or oregano)",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "to taste",
          "n": "Salt",
          "tag": "salt"
        },
        {
          "q": "~2 tbsp",
          "n": "Tomato ketchup or red chilli sauce",
          "tag": "tomato-ketchup",
          "img": "i-tomato-ketchup"
        }
      ],
      "steps": [
        {
          "t": "Put butter and grated garlic in a small bowl.",
          "imgs": [
            "s1-1",
            "s1-2"
          ]
        },
        {
          "t": "Add chilli flakes and chopped coriander.",
          "imgs": [
            "s2-1",
            "s2-2"
          ]
        },
        {
          "t": "Mix well into a garlic butter. Keep it aside.",
          "imgs": [
            "s3-1",
            "s3-2"
          ]
        },
        {
          "t": "Put diced bell peppers, corn, black olives and jalapeno in another bowl.",
          "imgs": [
            "s4-1",
            "s4-2",
            "s4-3"
          ]
        },
        {
          "t": "Add coriander, mixed herbs, chilli flakes and salt.",
          "imgs": [
            "s5-1",
            "s5-2",
            "s5-3"
          ]
        },
        {
          "t": "Add the grated cheese. Mix well.",
          "imgs": [
            "s6-1",
            "s6-2",
            "s6-3"
          ]
        },
        {
          "t": "Spread garlic butter on a roti.",
          "imgs": [
            "s7-1",
            "s7-2",
            "s7-3"
          ]
        },
        {
          "t": "Spread a little red sauce on top.",
          "imgs": [
            "s8-1",
            "s8-2",
            "s8-3"
          ]
        },
        {
          "t": "Spoon the veg and cheese filling over the roti.",
          "imgs": [
            "s9-1",
            "s9-2",
            "s9-3"
          ]
        },
        {
          "t": "Fold the roti in half.",
          "imgs": [
            "s10-1",
            "s10-2"
          ]
        },
        {
          "t": "Spread garlic butter on top of the folded roti.",
          "imgs": [
            "s11-1",
            "s11-2"
          ]
        },
        {
          "t": "Place on a hot tawa. Press gently.",
          "imgs": [
            "s12-1",
            "s12-2",
            "s12-3"
          ]
        },
        {
          "t": "Spread more garlic butter on top. Press with a spatula.",
          "imgs": [
            "s13-1",
            "s13-2",
            "s13-3"
          ]
        },
        {
          "t": "Flip. Cook until both sides are golden.",
          "imgs": [
            "s14-1",
            "s14-2",
            "s14-3"
          ]
        },
        {
          "t": "Cut into pieces. Serve hot.",
          "imgs": [
            "s15-1",
            "s15-2",
            "s15-3"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "suji-curd-sponge-dosa",
      "name": "Suji curd sponge dosa",
      "meal": "Breakfast",
      "minutes": 40,
      "protein": 10,
      "how": "Gas",
      "tools": "Blender jar (mixie), bowls, small tadka pan, non-stick tawa, ladle, gas",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 cup",
          "n": "Semolina (suji)",
          "tag": "suji",
          "img": "i-suji"
        },
        {
          "q": "3/4 cup (+ 3 tbsp for the chutney)",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "1/2 cup (+ a few spoons for the chutney)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "1/2 tsp",
          "n": "Sugar",
          "tag": "sugar",
          "img": "i-sugar"
        },
        {
          "q": "to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "2 tbsp",
          "n": "Roasted peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "2 tbsp",
          "n": "Roasted chana",
          "tag": "roasted-chana",
          "img": "i-roasted-chana"
        },
        {
          "q": "~3 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 inch piece",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~2",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil, for the tadka",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Mustard seeds",
          "tag": "mustard-seeds",
          "img": "i-mustard-seeds"
        },
        {
          "q": "a pinch",
          "n": "Hing (asafoetida)",
          "tag": "hing",
          "img": "i-hing"
        },
        {
          "q": "~8 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry-leaves"
        },
        {
          "q": "1 sachet (5 g)",
          "n": "Fruit salt (Eno, plain)",
          "tag": "baking-soda",
          "alt": [
            "baking-powder"
          ],
          "img": "i-baking-soda"
        }
      ],
      "steps": [
        {
          "t": "Put 1 cup semolina, 3/4 cup curd and 1/2 cup water in a blender jar.",
          "imgs": [
            "s1-1",
            "s1-2",
            "s1-3"
          ]
        },
        {
          "t": "Add 1/2 tsp sugar and salt to taste.",
          "imgs": [
            "s2-1",
            "s2-2"
          ]
        },
        {
          "t": "Close the lid and blend into a smooth batter.",
          "imgs": [
            "s3-1",
            "s3-2"
          ]
        },
        {
          "t": "Pour the batter into a bowl.",
          "imgs": [
            "s4-1",
            "s4-2"
          ]
        },
        {
          "t": "Mix with a spoon. Cover and rest while you make the chutney.",
          "imgs": [
            "s5-1",
            "s5-2",
            "s5-3"
          ]
        },
        {
          "t": "For the chutney, put roasted peanuts and roasted chana in a jar.",
          "imgs": [
            "s6-1",
            "s6-2",
            "s6-3"
          ]
        },
        {
          "t": "Add garlic, ginger and green chilli.",
          "imgs": [
            "s7-1",
            "s7-2",
            "s7-3"
          ]
        },
        {
          "t": "Add curd, salt and water.",
          "imgs": [
            "s8-1",
            "s8-2",
            "s8-3"
          ]
        },
        {
          "t": "Blend until smooth. Pour it into a bowl.",
          "imgs": [
            "s9-1",
            "s9-2",
            "s9-3"
          ]
        },
        {
          "t": "Tadka: heat oil in a small pan. Add mustard seeds and hing.",
          "imgs": [
            "s10-1",
            "s10-2",
            "s10-3"
          ]
        },
        {
          "t": "Add curry leaves. Pour the hot tadka over the chutney.",
          "imgs": [
            "s11-1",
            "s11-2",
            "s11-3"
          ]
        },
        {
          "t": "Open the batter and stir it gently.",
          "imgs": [
            "s12-1",
            "s12-2",
            "s12-3"
          ]
        },
        {
          "t": "Add 1 sachet fruit salt (Eno) and 1 tsp water.",
          "imgs": [
            "s13-1",
            "s13-2",
            "s13-3"
          ]
        },
        {
          "t": "Stir gently until the batter turns foamy.",
          "imgs": [
            "s14-1",
            "s14-2",
            "s14-3"
          ]
        },
        {
          "t": "Pour a ladle of batter on a hot tawa. Do not spread it.",
          "imgs": [
            "s15-1",
            "s15-2",
            "s15-3"
          ]
        },
        {
          "t": "Cook until holes cover the top. Lift to check the bottom is golden.",
          "imgs": [
            "s16-1",
            "s16-2",
            "s16-3"
          ]
        },
        {
          "t": "Serve the dosa hot with the chutney.",
          "imgs": [
            "s17-1",
            "s17-2",
            "s17-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "credit": "Cook with Deepa (@cookwithdeepa)",
      "card": "card"
    },
    {
      "id": "frozen-dalgona-coffee",
      "name": "Frozen dalgona coffee",
      "meal": "Drink",
      "minutes": 130,
      "protein": 10,
      "how": "No cooking",
      "tools": "Steel bowl, whisk, steel container with lid, spoon, glass",
      "serves": 6,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1/2 cup",
          "n": "Instant coffee powder",
          "tag": "coffee",
          "img": "i-coffee"
        },
        {
          "q": "1/2 cup",
          "n": "Sugar",
          "tag": "sugar",
          "img": "i-sugar"
        },
        {
          "q": "1 cup, lukewarm",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 cup per glass, cold",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        }
      ],
      "steps": [
        {
          "t": "Put 1/2 cup instant coffee powder in a steel bowl.",
          "imgs": [
            "s1-1",
            "s1-2"
          ]
        },
        {
          "t": "Add 1/2 cup sugar.",
          "imgs": [
            "s2-1"
          ]
        },
        {
          "t": "Pour in 1 cup lukewarm water.",
          "imgs": [
            "s3-1"
          ]
        },
        {
          "t": "Whisk until it turns thick, glossy and frothy.",
          "imgs": [
            "s4-1",
            "s4-2",
            "s4-3"
          ]
        },
        {
          "t": "Pour it into a steel container.",
          "imgs": [
            "s5-1",
            "s5-2",
            "s5-3"
          ]
        },
        {
          "t": "Level the top. Keep it in the freezer for 2 hours to set.",
          "imgs": [
            "s6-1",
            "s6-2"
          ]
        },
        {
          "t": "Scoop the set dalgona into a glass.",
          "imgs": [
            "s7-1",
            "s7-2",
            "s7-3"
          ]
        },
        {
          "t": "Pour cold milk over it.",
          "imgs": [
            "s8-1",
            "s8-2"
          ]
        },
        {
          "t": "Stir gently and serve cold.",
          "imgs": [
            "s9-1",
            "s9-2"
          ]
        }
      ],
      "tags": [
        "no-cook"
      ],
      "card": "card"
    },
    {
      "id": "hung-curd-tadka-sandwich",
      "name": "Hung curd tadka sandwich",
      "meal": "Snack",
      "minutes": 15,
      "protein": 15,
      "how": "Gas",
      "tools": "Bowl, spoon, tawa, spatula, gas",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3/4 cup (thick curd, water drained)",
          "n": "Hung curd",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/4 cup, chopped",
          "n": "Red onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander-leaves"
        },
        {
          "q": "~1/4 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-red-chilli-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Mixed herbs (or oregano)",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "2 slices",
          "n": "Bread",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "~2 tbsp",
          "n": "Green chutney",
          "tag": "green-chutney",
          "img": "i-green-chutney"
        },
        {
          "q": "~1 tsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 tsp",
          "n": "Mustard seeds",
          "tag": "mustard-seeds",
          "img": "i-mustard-seeds"
        },
        {
          "q": "~8 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry-leaves"
        }
      ],
      "steps": [
        {
          "t": "Put hung curd in a bowl.",
          "imgs": [
            "s1-1"
          ]
        },
        {
          "t": "Add chopped red onion and coriander.",
          "imgs": [
            "s2-1",
            "s2-2"
          ]
        },
        {
          "t": "Add salt, red chilli powder and mixed herbs.",
          "imgs": [
            "s3-1",
            "s3-2",
            "s3-3"
          ]
        },
        {
          "t": "Mix well.",
          "imgs": [
            "s4-1",
            "s4-2"
          ]
        },
        {
          "t": "Spread the curd mix on one bread slice.",
          "imgs": [
            "s5-1",
            "s5-2",
            "s5-3"
          ]
        },
        {
          "t": "Spread green chutney on the second slice.",
          "imgs": [
            "s6-1",
            "s6-2",
            "s6-3"
          ]
        },
        {
          "t": "Close the sandwich and press it down.",
          "imgs": [
            "s7-1",
            "s7-2"
          ]
        },
        {
          "t": "Tadka: put oil, mustard seeds and curry leaves on a tawa.",
          "imgs": [
            "s8-1",
            "s8-2"
          ]
        },
        {
          "t": "Place the sandwich on the tawa. Press gently.",
          "imgs": [
            "s9-1",
            "s9-2"
          ]
        },
        {
          "t": "Toast until golden. Flip and toast the other side.",
          "imgs": [
            "s10-1",
            "s10-2",
            "s10-3"
          ]
        },
        {
          "t": "Serve hot.",
          "imgs": [
            "s11-1",
            "s11-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "veg-curd-toast-sandwich",
      "name": "Veg curd toast sandwich",
      "meal": "Snack",
      "minutes": 15,
      "protein": 10,
      "how": "Gas",
      "tools": "Bowl, knife, spoon, tawa, spatula, gas",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "3 slices",
          "n": "Bread, white",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "~1/4 cup, chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1/4 cup, chopped",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "1, finely chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "1 small, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander-leaves"
        },
        {
          "q": "~3 tbsp",
          "n": "Thick curd",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder (flakes)",
          "tag": "red-chilli-powder",
          "img": "i-red-chilli-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat-masala"
        },
        {
          "q": "a pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~3 tbsp",
          "n": "Coriander chutney (green chutney)",
          "tag": "green-chutney",
          "img": "i-green-chutney"
        },
        {
          "q": "~1 tbsp",
          "n": "Imli (tamarind) chutney or tomato ketchup",
          "tag": "chutney",
          "alt": [
            "tomato-ketchup"
          ],
          "img": "i-imli-chutney"
        },
        {
          "q": "~1 tsp, melted",
          "n": "Desi ghee",
          "tag": "ghee",
          "img": "i-ghee"
        }
      ],
      "steps": [
        {
          "t": "Put chopped onion, capsicum and green chilli in a bowl.",
          "imgs": [
            "s1-1",
            "s1-2",
            "s1-3"
          ]
        },
        {
          "t": "Add chopped tomato and coriander leaves.",
          "imgs": [
            "s2-1",
            "s2-2",
            "s2-3"
          ]
        },
        {
          "t": "Add thick curd.",
          "imgs": [
            "s3-1",
            "s3-2"
          ]
        },
        {
          "t": "Add red chilli powder, chaat masala and salt.",
          "imgs": [
            "s4-1",
            "s4-2",
            "s4-3"
          ]
        },
        {
          "t": "Mix well.",
          "imgs": [
            "s5-1",
            "s5-2"
          ]
        },
        {
          "t": "Lay out 3 slices of bread.",
          "imgs": [
            "s6-1",
            "s6-2"
          ]
        },
        {
          "t": "Spread coriander chutney on the first slice.",
          "imgs": [
            "s7-1",
            "s7-2"
          ]
        },
        {
          "t": "Spread the veg curd mix over the chutney.",
          "imgs": [
            "s8-1",
            "s8-2",
            "s8-3"
          ]
        },
        {
          "t": "Spread imli chutney or tomato ketchup on the second slice.",
          "imgs": [
            "s9-1",
            "s9-2"
          ]
        },
        {
          "t": "Put the second slice on the mix, sauce side down. Spread chutney on top.",
          "imgs": [
            "s10-1"
          ]
        },
        {
          "t": "Spread the veg curd mix on it.",
          "imgs": [
            "s11-1",
            "s11-2"
          ]
        },
        {
          "t": "Spread sauce on the third slice. Close the sandwich, sauce side down.",
          "imgs": [
            "s12-1",
            "s12-2",
            "s12-3"
          ]
        },
        {
          "t": "Heat a tawa. Melt desi ghee on it.",
          "imgs": [
            "s13-1",
            "s13-2"
          ]
        },
        {
          "t": "Put the sandwich on the tawa. Spread ghee on top.",
          "imgs": [
            "s14-1",
            "s14-2",
            "s14-3"
          ]
        },
        {
          "t": "Toast until golden. Flip and toast the other side until crispy.",
          "imgs": [
            "s15-1",
            "s15-2",
            "s15-3"
          ]
        },
        {
          "t": "Cut in half and serve hot.",
          "imgs": [
            "s16-1",
            "s16-2",
            "s16-3"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "cucumber-paneer-sandwich",
      "name": "Cucumber paneer sandwich",
      "meal": "Snack",
      "minutes": 15,
      "protein": 15,
      "how": "No cooking",
      "tools": "Small blender (or fork), bowl, knife, paper towel, cling film",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup, crumbled (100 g)",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1/4 cup",
          "n": "Curd",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "1 clove",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
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
          "img": "i-black-pepper"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Spring onion (green onion)",
          "tag": "spring-onion",
          "img": "i-spring-onion"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Fresh dill leaves",
          "tag": "dill",
          "img": "i-dill"
        },
        {
          "q": "1 medium",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~4 slices (the video shows 2)",
          "n": "Bread, white",
          "tag": "bread",
          "img": "i-bread"
        }
      ],
      "steps": [
        {
          "t": "Put crumbled paneer in a bowl.",
          "imgs": [
            "s1-1",
            "s1-2"
          ]
        },
        {
          "t": "Add curd and 1 garlic clove.",
          "imgs": [
            "s2-1",
            "s2-2",
            "s2-3"
          ]
        },
        {
          "t": "Blend into a smooth, creamy paste.",
          "imgs": [
            "s3-1",
            "s3-2"
          ]
        },
        {
          "t": "Add salt and black pepper.",
          "imgs": [
            "s4-1",
            "s4-2"
          ]
        },
        {
          "t": "Add chopped spring onion and fresh dill leaves.",
          "imgs": [
            "s5-1",
            "s5-2",
            "s5-3"
          ]
        },
        {
          "t": "Mix well. This is your cream cheese spread.",
          "imgs": [
            "s6-1",
            "s6-2",
            "s6-3"
          ]
        },
        {
          "t": "Slice the cucumber thin.",
          "imgs": [
            "s7-1",
            "s7-2"
          ]
        },
        {
          "t": "Lay the slices on a paper towel.",
          "imgs": [
            "s8-1",
            "s8-2"
          ]
        },
        {
          "t": "Cover with another paper towel. Press to soak up the water.",
          "imgs": [
            "s9-1",
            "s9-2",
            "s9-3"
          ]
        },
        {
          "t": "Optional: cut off the bread crusts.",
          "imgs": [
            "s10-1",
            "s10-2",
            "s10-3"
          ]
        },
        {
          "t": "Spread the cream cheese on one side of each bread slice.",
          "imgs": [
            "s11-1",
            "s11-2",
            "s11-3"
          ]
        },
        {
          "t": "Layer cucumber slices on one slice.",
          "imgs": [
            "s12-1",
            "s12-2",
            "s12-3"
          ]
        },
        {
          "t": "Cover with the other slice, spread side down.",
          "imgs": [
            "s13-1",
            "s13-2"
          ]
        },
        {
          "t": "Cut the sandwich into halves or triangles.",
          "imgs": [
            "s14-1",
            "s14-2",
            "s14-3"
          ]
        },
        {
          "t": "To keep it, wrap each piece in cling film. Store in the fridge up to 2 days.",
          "imgs": [
            "s15-1",
            "s15-2",
            "s15-3"
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
      "id": "masala-nimbu-shikanji",
      "name": "Masala nimbu shikanji",
      "meal": "Drink",
      "minutes": 15,
      "protein": 0,
      "how": "Gas + blender",
      "tools": "Pan, gas, mixie, jar, glass",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tbsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander seeds (sabut dhania)",
          "tag": "coriander-seeds",
          "img": "i-coriander"
        },
        {
          "q": "~2 tbsp",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-fennel"
        },
        {
          "q": "~1 tsp",
          "n": "Black pepper (kali mirch)",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~2 tsp",
          "n": "Dry ginger powder (sonth)",
          "tag": "dry-ginger-powder",
          "img": "i-ginger"
        },
        {
          "q": "~2 tsp",
          "n": "Black salt (kala namak)",
          "tag": "black-salt",
          "img": "i-blacksalt"
        },
        {
          "q": "~4 pods",
          "n": "Green cardamom (elaichi)",
          "tag": "cardamom",
          "img": "i-cardamom"
        },
        {
          "q": "~1/4 cup",
          "n": "Rock sugar (mishri)",
          "tag": "rock-sugar",
          "img": "i-mishri"
        },
        {
          "q": "~6 leaves",
          "n": "Mint leaves (pudina)",
          "tag": "mint",
          "img": "i-mint"
        },
        {
          "q": "~2 tbsp (1 to 2 lemons)",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "~4 cubes",
          "n": "Ice cubes",
          "tag": "ice",
          "img": "i-ice"
        },
        {
          "q": "~1 glass (200 ml)",
          "n": "Soda or chilled water",
          "tag": "soda",
          "alt": [
            "water"
          ],
          "img": "i-soda"
        }
      ],
      "steps": [
        {
          "t": "Dry roast cumin, coriander seeds, fennel seeds and black pepper in a pan. Stir until fragrant.",
          "imgs": [
            "s-roast-1",
            "s-roast-2",
            "s-roast-3"
          ]
        },
        {
          "t": "Tip the roasted spices into the mixie jar.",
          "imgs": [
            "s-jar-1"
          ]
        },
        {
          "t": "Add dry ginger powder, black salt and cardamom.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Add the rock sugar (mishri).",
          "imgs": [
            "s-mishri-1",
            "s-mishri-2"
          ]
        },
        {
          "t": "Grind everything to a fine powder.",
          "imgs": [
            "s-powder-1"
          ]
        },
        {
          "t": "Store the masala in a dry jar with a lid. It makes many glasses.",
          "imgs": [
            "s-store-1",
            "s-store-2"
          ]
        },
        {
          "t": "Put 5 to 6 mint leaves in a glass.",
          "imgs": [
            "s-mint-1",
            "s-mint-2"
          ]
        },
        {
          "t": "Add 1 spoon of the shikanji masala.",
          "imgs": [
            "s-masala-1",
            "s-masala-2"
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
          "t": "Swirl the glass so the masala mixes with the juice.",
          "imgs": [
            "s-swirl-1"
          ]
        },
        {
          "t": "Add ice cubes.",
          "imgs": [
            "s-ice-1"
          ]
        },
        {
          "t": "Top up with soda or chilled water.",
          "imgs": [
            "s-soda-1",
            "s-soda-2"
          ]
        },
        {
          "t": "Stir well with a straw.",
          "imgs": [
            "s-stir-1"
          ]
        },
        {
          "t": "Garnish with a mint sprig and a lemon slice.",
          "imgs": [
            "s-garnish-1"
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
      "id": "drumstick-peanut-pickle",
      "name": "Drumstick peanut pickle",
      "meal": "Side",
      "minutes": 35,
      "protein": 0,
      "how": "Gas",
      "tools": "Pan, gas, mixie, glass jar, thin cloth",
      "serves": 10,
      "cover": "cover",
      "ingredients": [
        {
          "q": "250 g",
          "n": "Drumsticks / moringa pods (sahjan ki fali)",
          "tag": "drumstick",
          "img": "i-drumstick"
        },
        {
          "q": "1/2 cup",
          "n": "Garlic cloves, peeled",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "1/2 cup",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "1/2 cup",
          "n": "Raw peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "2 tbsp",
          "n": "Coriander seeds (sabut dhania)",
          "tag": "coriander-seeds",
          "img": "i-coriander"
        },
        {
          "q": "2 tbsp",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-fennel"
        },
        {
          "q": "1/2 tbsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "1 tbsp",
          "n": "Mustard seeds (rai)",
          "tag": "mustard-seeds",
          "img": "i-mustard"
        },
        {
          "q": "1/2 tbsp",
          "n": "Fenugreek seeds (methi dana)",
          "tag": "fenugreek-seeds",
          "img": "i-fenugreek"
        },
        {
          "q": "1/2 cup",
          "n": "Mustard oil (sarson ka tel)",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "1 tsp",
          "n": "Carom seeds (ajwain)",
          "tag": "ajwain"
        },
        {
          "q": "2 tsp",
          "n": "Asafoetida (hing)",
          "tag": "hing"
        },
        {
          "q": "1/4 tsp",
          "n": "Turmeric powder (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "1 tsp",
          "n": "Kashmiri red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chillipowder"
        },
        {
          "q": "1 tbsp",
          "n": "Vinegar",
          "tag": "vinegar",
          "img": "i-vinegar"
        }
      ],
      "steps": [
        {
          "t": "Peel the tough outer strings off 250 g drumsticks.",
          "imgs": [
            "s-peel-1",
            "s-peel-2"
          ]
        },
        {
          "t": "Cut the drumsticks into small pieces.",
          "imgs": [
            "s-cut-1"
          ]
        },
        {
          "t": "Wash the pieces well, then dry them on a cloth.",
          "imgs": [
            "s-wash-1",
            "s-wash-2"
          ]
        },
        {
          "t": "Crush 1/2 cup garlic and 1/2 cup green chilli roughly.",
          "imgs": [
            "s-crush-1",
            "s-crush-2"
          ]
        },
        {
          "t": "Add the crushed garlic and chilli to the drumstick pieces.",
          "imgs": [
            "s-add-1"
          ]
        },
        {
          "t": "Add salt to taste and mix well.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Dry roast 1/2 cup peanuts on low flame until brown spots show.",
          "imgs": [
            "s-pnut-1",
            "s-pnut-2"
          ]
        },
        {
          "t": "Add coriander seeds 2 tbsp and fennel seeds 2 tbsp to the pan.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add cumin 1/2 tbsp, mustard 1 tbsp and fenugreek 1/2 tbsp. Roast lightly, about 2 minutes.",
          "imgs": [
            "s-spice-3",
            "s-spice-4"
          ]
        },
        {
          "t": "Move the roasted spices to a plate.",
          "imgs": [
            "s-plate-1"
          ]
        },
        {
          "t": "Heat 1/2 cup mustard oil, then switch off the flame. Let it cool to lukewarm.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Grind the cooled spices coarsely in the mixie. Crush the roasted peanuts too.",
          "imgs": [
            "s-grind-1",
            "s-grind-2"
          ]
        },
        {
          "t": "Add the ground masala and crushed peanuts to the drumstick bowl.",
          "imgs": [
            "s-masala-1",
            "s-masala-2"
          ]
        },
        {
          "t": "Add ajwain 1 tsp and hing 2 tsp.",
          "imgs": [
            "s-ajwain-1"
          ]
        },
        {
          "t": "Add turmeric 1/4 tsp and Kashmiri chilli powder 1 tsp.",
          "imgs": [
            "s-powder-1",
            "s-powder-2"
          ]
        },
        {
          "t": "Pour in the lukewarm mustard oil and mix well.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Add vinegar 1 tbsp and mix again.",
          "imgs": [
            "s-vinegar-1",
            "s-vinegar-2"
          ]
        },
        {
          "t": "Fill a clean, dry glass jar with the pickle.",
          "imgs": [
            "s-jar-1"
          ]
        },
        {
          "t": "Cover the jar with a thin cloth. Keep it in strong sun for 7 to 10 days.",
          "imgs": [
            "s-sun-1",
            "s-sun-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "make-ahead"
      ],
      "credit": "Honest Kitchen",
      "card": "card"
    },
    {
      "id": "dahi-tadka-side",
      "name": "Dahi tadka",
      "meal": "Side",
      "minutes": 10,
      "protein": 5,
      "how": "Gas",
      "tools": "Pan, gas, whisk, spatula",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~2 tbsp (5 to 6 cloves)",
          "n": "Garlic, chopped",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "1 medium (~1/2 cup)",
          "n": "Onion, chopped",
          "tag": "onion",
          "img": "i-onion"
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
          "img": "i-chilli"
        },
        {
          "q": "~1 cup (250 g)",
          "n": "Curd (dahi)",
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
          "q": "~2 tbsp",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "to serve",
          "n": "Rice or roti",
          "tag": "rice",
          "alt": [
            "atta"
          ],
          "opt": true,
          "img": "i-rice"
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
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Add the chopped garlic.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
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
          "t": "Stir and cook until the onion turns soft.",
          "imgs": [
            "s-saute-1",
            "s-saute-2"
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
          "t": "Stir for a few seconds.",
          "imgs": [
            "s-spice-3"
          ]
        },
        {
          "t": "Whisk the curd in a bowl until smooth.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2"
          ]
        },
        {
          "t": "Pour the whisked curd into the pan.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add the salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Add the chopped coriander leaves.",
          "imgs": [
            "s-coriander-1"
          ]
        },
        {
          "t": "Mix well until the curd turns evenly yellow.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Serve with rice or roti.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "quick"
      ],
      "card": "card"
    },
    {
      "id": "grated-paneer-wrap",
      "name": "Grated paneer wrap",
      "meal": "Lunch or dinner",
      "minutes": 20,
      "protein": 30,
      "how": "Gas",
      "tools": "Large non-stick tawa, grater, spatula, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "250 g",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1/2 cup (40 g)",
          "n": "Cheese, diced or grated",
          "tag": "cheese",
          "img": "i-cheese"
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
          "img": "i-flakes"
        },
        {
          "q": "2 to 3 leaves",
          "n": "Lettuce",
          "tag": "lettuce",
          "img": "i-lettuce"
        },
        {
          "q": "a small handful",
          "n": "Capsicum, cut in thin strips",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "a small handful",
          "n": "Carrot, cut in thin strips",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "a few slices",
          "n": "Red onion, sliced thin",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2 tbsp",
          "n": "Boiled kidney beans (rajma)",
          "tag": "rajma",
          "img": "i-beans"
        },
        {
          "q": "~1/2 tsp",
          "n": "Peri peri masala",
          "tag": "peri-peri-masala",
          "img": "i-peri"
        },
        {
          "q": "~1 tbsp",
          "n": "Green sauce (mint or herb)",
          "tag": "green-chutney",
          "opt": true,
          "img": "i-green"
        },
        {
          "q": "~1 tbsp",
          "n": "Chipotle sauce",
          "tag": "chipotle-sauce",
          "opt": true,
          "img": "i-chipotle"
        },
        {
          "q": "2 to 3 stalks",
          "n": "Spring onion greens, to tie",
          "tag": "spring-onion",
          "opt": true,
          "img": "i-spring"
        },
        {
          "q": "2 to 3",
          "n": "Black olives, to decorate",
          "tag": "olives",
          "opt": true,
          "img": "i-olive"
        }
      ],
      "steps": [
        {
          "t": "Grate 250 g paneer straight onto a large non-stick tawa.",
          "imgs": [
            "s-grate-1",
            "s-grate-2",
            "s-grate-3"
          ]
        },
        {
          "t": "Spread the grated paneer into a thin round with a spatula.",
          "imgs": [
            "s-spread-1",
            "s-spread-2"
          ]
        },
        {
          "t": "Sprinkle the cheese all over the paneer.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2"
          ]
        },
        {
          "t": "Let the cheese melt.",
          "imgs": [
            "s-melt-1"
          ]
        },
        {
          "t": "Sprinkle oregano and chilli flakes on top.",
          "imgs": [
            "s-season-1",
            "s-season-2"
          ]
        },
        {
          "t": "Place lettuce leaves on top.",
          "imgs": [
            "s-lettuce-1",
            "s-lettuce-2"
          ]
        },
        {
          "t": "Add thin strips of capsicum and carrot, and sliced red onion.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
          ]
        },
        {
          "t": "Add the boiled kidney beans.",
          "imgs": [
            "s-beans-1",
            "s-beans-2"
          ]
        },
        {
          "t": "Sprinkle peri peri masala over everything.",
          "imgs": [
            "s-peri-1",
            "s-peri-2"
          ]
        },
        {
          "t": "Drizzle the green sauce and the chipotle sauce on top.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2"
          ]
        },
        {
          "t": "Lift one side and fold the paneer sheet over the filling.",
          "imgs": [
            "s-fold-1",
            "s-fold-2"
          ]
        },
        {
          "t": "Cook the wrap from both sides until golden and crisp.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Tie with spring onion greens and a black olive, then serve.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
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
      "id": "creamy-green-chutney",
      "name": "Creamy green chutney",
      "meal": "Side",
      "minutes": 10,
      "protein": 0,
      "how": "No cooking",
      "tools": "Mixie, measuring spoons",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 big bunch (50 g)",
          "n": "Coriander leaves (hara dhania)",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/2 cup leaves (20 g)",
          "n": "Mint leaves (pudina)",
          "tag": "mint",
          "img": "i-mint"
        },
        {
          "q": "2",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1 inch piece",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "3 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~2 tbsp",
          "n": "Peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "~1 tsp",
          "n": "Sugar",
          "tag": "sugar",
          "img": "i-sugar"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt (looks like pink or black salt)",
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
          "q": "~1/2 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat"
        },
        {
          "q": "~3 tbsp",
          "n": "Thick curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        }
      ],
      "steps": [
        {
          "t": "Take the coriander leaves.",
          "imgs": [
            "s-herbs-1"
          ]
        },
        {
          "t": "Add the mint leaves.",
          "imgs": [
            "s-herbs-2",
            "s-herbs-3"
          ]
        },
        {
          "t": "Add 2 green chillies.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add the piece of ginger.",
          "imgs": [
            "s-ginger-1",
            "s-ginger-2"
          ]
        },
        {
          "t": "Add 3 garlic cloves.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
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
          "t": "Add the sugar.",
          "imgs": [
            "s-sugar-1",
            "s-sugar-2"
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
          "t": "Add the cumin seeds.",
          "imgs": [
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Add the chaat masala.",
          "imgs": [
            "s-chaat-1",
            "s-chaat-2"
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
          "t": "Put everything in the mixie and blend to a smooth, creamy paste.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Pour into a bowl and top with a mint sprig.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "quick"
      ],
      "credit": "Home Cook Diary",
      "card": "card"
    },
    {
      "id": "makhana-milk-fruit-bowl",
      "name": "Makhana milk fruit bowl",
      "meal": "Breakfast",
      "minutes": 10,
      "protein": 15,
      "how": "No cooking",
      "tools": "Bowl with lid, small steel bowl, spoon",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "20 g (about 1 cup)",
          "n": "Makhana (fox nuts)",
          "tag": "makhana",
          "img": "i-makhana"
        },
        {
          "q": "1 tsp",
          "n": "Chia seeds",
          "tag": "chia-seeds",
          "img": "i-chia"
        },
        {
          "q": "~6",
          "n": "Almonds",
          "tag": "almonds",
          "img": "i-almonds"
        },
        {
          "q": "~6",
          "n": "Cashews",
          "tag": "cashews",
          "img": "i-cashews"
        },
        {
          "q": "~1 tbsp",
          "n": "Pistachios",
          "tag": "pistachios",
          "img": "i-pistachios"
        },
        {
          "q": "~1 tbsp",
          "n": "Raisins (kismis)",
          "tag": "raisins",
          "img": "i-raisins"
        },
        {
          "q": "a few strands",
          "n": "Saffron (kesar)",
          "tag": "saffron",
          "img": "i-saffron"
        },
        {
          "q": "150 ml",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~1/2 apple",
          "n": "Apple, sliced and diced",
          "tag": "apple",
          "img": "i-apple"
        }
      ],
      "steps": [
        {
          "t": "Put 20 g makhana in a bowl.",
          "imgs": [
            "s-makhana-1",
            "s-makhana-2"
          ]
        },
        {
          "t": "Add 1 tsp chia seeds.",
          "imgs": [
            "s-chia-1",
            "s-chia-2"
          ]
        },
        {
          "t": "Add the almonds.",
          "imgs": [
            "s-almonds-1",
            "s-almonds-2"
          ]
        },
        {
          "t": "Add the cashews.",
          "imgs": [
            "s-cashews-1",
            "s-cashews-2"
          ]
        },
        {
          "t": "Add the pistachios.",
          "imgs": [
            "s-pistachios-1"
          ]
        },
        {
          "t": "Add the raisins (kismis).",
          "imgs": [
            "s-raisins-1"
          ]
        },
        {
          "t": "Add a few strands of saffron.",
          "imgs": [
            "s-saffron-1",
            "s-saffron-2"
          ]
        },
        {
          "t": "Pour in 150 ml milk.",
          "imgs": [
            "s-milk-1",
            "s-milk-2",
            "s-milk-3"
          ]
        },
        {
          "t": "Cover with a lid and press a small steel bowl on top.",
          "imgs": [
            "s-lid-1",
            "s-lid-2"
          ]
        },
        {
          "t": "Leave it until the makhana turn soft and soaked.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Place thin apple slices on the side.",
          "imgs": [
            "s-apple-1",
            "s-apple-2",
            "s-apple-3"
          ]
        },
        {
          "t": "Sprinkle diced apple on top and serve.",
          "imgs": [
            "s-dice-1",
            "s-dice-2"
          ]
        }
      ],
      "tags": [
        "no-cook"
      ],
      "credit": "@iamitbaisoya",
      "card": "card"
    },
    {
      "id": "moong-poha-uttapam",
      "name": "Moong poha uttapam",
      "meal": "Breakfast",
      "minutes": 30,
      "protein": 25,
      "how": "Gas + blender",
      "tools": "Mixie, bowl, non-stick tawa, gas, spatula",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 cup (~200 g)",
          "n": "Whole green moong (green gram), soaked overnight",
          "tag": "moong-whole",
          "img": "i-moong"
        },
        {
          "q": "1 cup (~60 g)",
          "n": "Poha (flattened rice)",
          "tag": "poha",
          "img": "i-poha"
        },
        {
          "q": "~1 inch piece",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~2",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 cup",
          "n": "Capsicum, finely chopped",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~1/2 cup",
          "n": "Tomato, finely chopped",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1/2 cup",
          "n": "Onion, finely chopped",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2 tsp",
          "n": "Oil, to grease the tawa",
          "tag": "oil"
        },
        {
          "q": "a small bowl",
          "n": "Orange-red dipping sauce or chutney",
          "tag": "chutney",
          "opt": true,
          "img": "i-sauce"
        }
      ],
      "steps": [
        {
          "t": "Take 1 cup whole green moong in a bowl.",
          "imgs": [
            "s-moong-1",
            "s-moong-2"
          ]
        },
        {
          "t": "Wash the moong twice with water.",
          "imgs": [
            "s-wash-1",
            "s-wash-2",
            "s-wash-3"
          ]
        },
        {
          "t": "Cover the moong with water, put a plate on top and soak overnight.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Next day, drain off the soaking water.",
          "imgs": [
            "s-soak-3",
            "s-soak-4"
          ]
        },
        {
          "t": "Put the soaked moong in the mixie jar.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
          ]
        },
        {
          "t": "Add the ginger and green chillies.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Grind to a thick, slightly coarse batter and pour it into a bowl.",
          "imgs": [
            "s-grind-1",
            "s-grind-2"
          ]
        },
        {
          "t": "Rinse 1 cup poha in water.",
          "imgs": [
            "s-poha-1",
            "s-poha-2",
            "s-poha-3"
          ]
        },
        {
          "t": "Squeeze the poha lightly so it turns soft.",
          "imgs": [
            "s-squeeze-1",
            "s-squeeze-2"
          ]
        },
        {
          "t": "Add the soft poha to the moong batter.",
          "imgs": [
            "s-addpoha-1",
            "s-addpoha-2"
          ]
        },
        {
          "t": "Mix well until the poha blends into the batter.",
          "imgs": [
            "s-mixpoha-1",
            "s-mixpoha-2"
          ]
        },
        {
          "t": "Add chopped capsicum, tomato and onion.",
          "imgs": [
            "s-veg-1",
            "s-veg-2",
            "s-veg-3"
          ]
        },
        {
          "t": "Mix well. The batter should be thick, not runny.",
          "imgs": [
            "s-mixveg-1",
            "s-mixveg-2"
          ]
        },
        {
          "t": "Grease a non-stick tawa and spoon on the batter in small rounds.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Cook until the underside turns golden, then flip.",
          "imgs": [
            "s-flip-1",
            "s-flip-2"
          ]
        },
        {
          "t": "Cook the other side until golden and crisp.",
          "imgs": [
            "s-golden-1",
            "s-golden-2",
            "s-golden-3"
          ]
        },
        {
          "t": "Serve hot with the dipping sauce.",
          "imgs": [
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
      "id": "dahi-chutney-bread-toast",
      "name": "Dahi chutney bread toast",
      "meal": "Snack",
      "minutes": 15,
      "protein": 10,
      "how": "Gas + blender",
      "tools": "Small mixie jar, flat plate, whisk, non-stick pan, gas, spatula",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup (120 g)",
          "n": "Curd (dahi), thick",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black pepper, crushed",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1/2 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~1 tsp in all (curd and chutney)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "3 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "3",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "1 big bunch (~1 cup leaves)",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~4 slices",
          "n": "Bread slices",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "~2 tbsp",
          "n": "Butter, for the pan",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "to serve",
          "n": "Tomato ketchup",
          "tag": "tomato-ketchup",
          "opt": true,
          "img": "i-ketchup"
        }
      ],
      "steps": [
        {
          "t": "Pour the curd onto a flat plate.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add the black pepper.",
          "imgs": [
            "s-pepper-1",
            "s-pepper-2"
          ]
        },
        {
          "t": "Add the chilli flakes.",
          "imgs": [
            "s-flakes-1"
          ]
        },
        {
          "t": "Add a little salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Put the garlic cloves in a small mixie jar.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Add the green chillies.",
          "imgs": [
            "s-chilli-1"
          ]
        },
        {
          "t": "Add a big bunch of coriander leaves.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2",
            "s-coriander-3"
          ]
        },
        {
          "t": "Add a little salt.",
          "imgs": [
            "s-salt-3",
            "s-salt-4"
          ]
        },
        {
          "t": "Grind to a thick green chutney.",
          "imgs": [
            "s-grind-1",
            "s-grind-2",
            "s-grind-3"
          ]
        },
        {
          "t": "Spoon the chutney onto the curd.",
          "imgs": [
            "s-chutney-1",
            "s-chutney-2"
          ]
        },
        {
          "t": "Whisk until the curd and chutney are well mixed.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2",
            "s-whisk-3"
          ]
        },
        {
          "t": "Dip a bread slice in the mix and coat both sides.",
          "imgs": [
            "s-dip-1",
            "s-dip-2",
            "s-dip-3"
          ]
        },
        {
          "t": "Melt a spoon of butter in a non-stick pan.",
          "imgs": [
            "s-butter-1"
          ]
        },
        {
          "t": "Place the coated bread in the pan.",
          "imgs": [
            "s-pan-1",
            "s-pan-2"
          ]
        },
        {
          "t": "Toast until golden, then flip and toast the other side.",
          "imgs": [
            "s-toast-1",
            "s-toast-2",
            "s-toast-3"
          ]
        },
        {
          "t": "Stack the toasts on a plate.",
          "imgs": [
            "s-stack-1",
            "s-stack-2"
          ]
        },
        {
          "t": "Cut each toast into 2 triangles.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Serve hot with tomato ketchup.",
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
        "quick"
      ],
      "credit": "FunFood Corner",
      "card": "card"
    },
    {
      "id": "jhal-muri",
      "name": "Jhal muri spiced puffed rice",
      "meal": "Snack",
      "minutes": 25,
      "protein": 10,
      "how": "Gas",
      "tools": "Small steel pan, gas, spice grinder or mixie, steel tin or big bowl, spoon, paper cone (optional)",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tbsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1 tbsp",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-fennel"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander seeds (sabut dhania)",
          "tag": "coriander-seeds",
          "img": "i-coriander"
        },
        {
          "q": "~5",
          "n": "Dry red chillies",
          "tag": "dry-red-chilli",
          "img": "i-chilli"
        },
        {
          "q": "2",
          "n": "Bay leaves (tej patta)",
          "tag": "bay-leaf",
          "img": "i-bay"
        },
        {
          "q": "~3 cups (45 g)",
          "n": "Puffed rice (muri / murmura)",
          "tag": "puffed-rice",
          "img": "i-muri"
        },
        {
          "q": "~1/4 cup (45 g)",
          "n": "Black chana, boiled",
          "tag": "kala-chana",
          "alt": [
            "chickpeas"
          ],
          "img": "i-bchana"
        },
        {
          "q": "~1/4 cup (45 g)",
          "n": "Yellow dried peas (peela matar), boiled",
          "tag": "dried-peas",
          "alt": [
            "chickpeas"
          ],
          "img": "i-peas"
        },
        {
          "q": "2",
          "n": "Green chillies, chopped",
          "tag": "green-chilli",
          "img": "i-gchilli"
        },
        {
          "q": "~1/4 cup",
          "n": "Onion, finely chopped",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1/4 cup",
          "n": "Tomato, finely chopped",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "1 small",
          "n": "Potato, boiled and cubed",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-corr"
        },
        {
          "q": "~2 tbsp",
          "n": "Roasted peanuts",
          "tag": "peanuts",
          "img": "i-peanut"
        },
        {
          "q": "~4 tbsp",
          "n": "Fried namkeen (orange crisps, yellow chana and green peas)",
          "tag": "namkeen",
          "opt": true,
          "img": "i-namkeen"
        },
        {
          "q": "~2 tbsp",
          "n": "Fresh coconut, small pieces and slices",
          "tag": "coconut",
          "opt": true,
          "img": "i-coconut"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black salt (kala namak)",
          "tag": "black-salt",
          "img": "i-blacksalt"
        },
        {
          "q": "1/2 lemon",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "~1 tsp",
          "n": "Mustard oil (sarson ka tel)",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/4 cup",
          "n": "Bhujia sev",
          "tag": "sev",
          "opt": true,
          "img": "i-sev"
        }
      ],
      "steps": [
        {
          "t": "Heat a small steel pan on the gas.",
          "imgs": [
            "s-heat-1",
            "s-heat-2"
          ]
        },
        {
          "t": "Add the cumin seeds and dry roast them.",
          "imgs": [
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Add the fennel seeds and keep roasting.",
          "imgs": [
            "s-fennel-1",
            "s-fennel-2"
          ]
        },
        {
          "t": "Add the coriander seeds and stir with a spoon.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        },
        {
          "t": "Add the dry red chillies.",
          "imgs": [
            "s-chilli-1"
          ]
        },
        {
          "t": "Add the bay leaves.",
          "imgs": [
            "s-bay-1"
          ]
        },
        {
          "t": "Stir until the spices are lightly roasted.",
          "imgs": [
            "s-roast-1",
            "s-roast-2"
          ]
        },
        {
          "t": "Tip the roasted spices into a small pot.",
          "imgs": [
            "s-pot-1"
          ]
        },
        {
          "t": "Grind them to a fine powder. This is the jhal muri masala.",
          "imgs": [
            "s-powder-1",
            "s-powder-2"
          ]
        },
        {
          "t": "Put the puffed rice in a big steel tin or bowl.",
          "imgs": [
            "s-muri-1",
            "s-muri-2"
          ]
        },
        {
          "t": "Add the boiled black chana.",
          "imgs": [
            "s-bchana-1"
          ]
        },
        {
          "t": "Add the boiled yellow peas.",
          "imgs": [
            "s-peas-1"
          ]
        },
        {
          "t": "Add the chopped green chillies.",
          "imgs": [
            "s-gchilli-1"
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
            "s-tomato-1"
          ]
        },
        {
          "t": "Cut the boiled potato into small cubes and add it.",
          "imgs": [
            "s-potato-1",
            "s-potato-2"
          ]
        },
        {
          "t": "Add the chopped coriander leaves.",
          "imgs": [
            "s-corr-1"
          ]
        },
        {
          "t": "Add the roasted peanuts.",
          "imgs": [
            "s-peanut-1"
          ]
        },
        {
          "t": "Add a handful of the fried orange namkeen crisps.",
          "imgs": [
            "s-crisps-1",
            "s-crisps-2"
          ]
        },
        {
          "t": "Break fresh coconut into small pieces and add them.",
          "imgs": [
            "s-coconut-1",
            "s-coconut-2"
          ]
        },
        {
          "t": "Add the fried yellow chana and green peas namkeen.",
          "imgs": [
            "s-namkeen-1",
            "s-namkeen-2"
          ]
        },
        {
          "t": "Add 1 spoon of the jhal muri masala.",
          "imgs": [
            "s-masala-1",
            "s-masala-2"
          ]
        },
        {
          "t": "Add the black salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Squeeze in the lemon juice.",
          "imgs": [
            "s-lemon-1"
          ]
        },
        {
          "t": "Add 1 spoon of mustard oil.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the bhujia sev.",
          "imgs": [
            "s-sev-1"
          ]
        },
        {
          "t": "Mix everything well with a spoon until the puffed rice turns yellow.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Fold a paper cone and fill it with the jhal muri.",
          "imgs": [
            "s-cone-1",
            "s-cone-2"
          ]
        },
        {
          "t": "Top with coconut slices and chopped coriander.",
          "imgs": [
            "s-top-1"
          ]
        },
        {
          "t": "Serve at once with a spoon.",
          "imgs": [
            "s-serve-1"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-fibre"
      ],
      "credit": "Yumbox",
      "card": "card"
    },
    {
      "id": "soya-potato-cutlets",
      "name": "Air fryer soya potato cutlets",
      "meal": "Snack",
      "minutes": 40,
      "protein": 10,
      "how": "Air fryer",
      "tools": "Mixie, air fryer, grater, brush, glass bowl",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1.5 cups (80 g) dry",
          "n": "Soya chunks",
          "tag": "soya-chunks",
          "img": "i-soya"
        },
        {
          "q": "~1/2 tsp, plus more in the mix",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "enough to cover",
          "n": "Water, for soaking",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "1 medium",
          "n": "Onion, in big pieces",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "2",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "5 to 6 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 inch piece",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "a big handful",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-corr"
        },
        {
          "q": "3 medium",
          "n": "Potatoes, boiled",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-redchilli"
        },
        {
          "q": "~1 tsp",
          "n": "Garam masala or cumin-coriander powder (brown masala)",
          "tag": "garam-masala",
          "alt": [
            "cumin-powder",
            "coriander-powder"
          ],
          "img": "i-masala"
        },
        {
          "q": "~1/4 tsp",
          "n": "Turmeric powder (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~2 tbsp",
          "n": "Breadcrumbs or oat flour (beige powder binder, not named in the video)",
          "tag": "breadcrumbs",
          "alt": [
            "oats",
            "besan"
          ],
          "opt": true,
          "img": "i-binder"
        },
        {
          "q": "~50 g",
          "n": "Paneer, grated (the video says you can add it)",
          "tag": "paneer",
          "opt": true
        },
        {
          "q": "~1 tsp",
          "n": "Oil or ghee, to brush",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "a small bowl",
          "n": "Green chutney, to dip",
          "tag": "green-chutney",
          "opt": true,
          "img": "i-chutney"
        }
      ],
      "steps": [
        {
          "t": "Put the soya chunks in a glass bowl.",
          "imgs": [
            "s-soya-1",
            "s-soya-2"
          ]
        },
        {
          "t": "Add a little salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Pour water over the soya chunks and let them soak until soft.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Squeeze the soaked soya chunks well to remove the water.",
          "imgs": [
            "s-squeeze-1"
          ]
        },
        {
          "t": "Put the squeezed soya chunks in the mixie jar.",
          "imgs": [
            "s-jar-1"
          ]
        },
        {
          "t": "Add the onion and green chillies.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the garlic and ginger.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Add the coriander leaves.",
          "imgs": [
            "s-corr-1"
          ]
        },
        {
          "t": "Grind to a coarse, crumbly mince and tip it into a bowl.",
          "imgs": [
            "s-mince-1",
            "s-mince-2"
          ]
        },
        {
          "t": "Grate the boiled potatoes into the bowl.",
          "imgs": [
            "s-potato-1",
            "s-potato-2",
            "s-potato-3"
          ]
        },
        {
          "t": "Add the red chilli powder and the brown masala.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the turmeric, salt and cumin seeds.",
          "imgs": [
            "s-spice-3",
            "s-spice-4",
            "s-spice-5"
          ]
        },
        {
          "t": "Sprinkle on the breadcrumbs. Add grated paneer too if you like.",
          "imgs": [
            "s-binder-1",
            "s-binder-2"
          ]
        },
        {
          "t": "Mix and mash everything by hand until it holds together.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Press a small portion into a short roll, in any shape you like.",
          "imgs": [
            "s-shape-1",
            "s-shape-2",
            "s-shape-3"
          ]
        },
        {
          "t": "Repeat with the rest of the mix and set the cutlets on a plate.",
          "imgs": [
            "s-plate-1"
          ]
        },
        {
          "t": "Place the cutlets in the air fryer basket with space between them.",
          "imgs": [
            "s-basket-1",
            "s-basket-2"
          ]
        },
        {
          "t": "Brush each cutlet lightly with oil or ghee.",
          "imgs": [
            "s-brush-1",
            "s-brush-2",
            "s-brush-3"
          ]
        },
        {
          "t": "Air fry until golden brown and crisp.",
          "imgs": [
            "s-fry-1",
            "s-fry-2",
            "s-fry-3"
          ]
        },
        {
          "t": "Serve hot with green chutney.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "air-fryer",
        "blender",
        "high-fibre"
      ],
      "credit": "@yummy_tummy25",
      "card": "card"
    },
    {
      "id": "creamy-basil-paneer-veg",
      "name": "Creamy basil paneer veg",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 15,
      "how": "Gas + blender",
      "tools": "Wide pan, gas, mixie, lunchbox",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tbsp (3 cloves)",
          "n": "Garlic, finely chopped",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 cup",
          "n": "Broccoli florets",
          "tag": "broccoli",
          "img": "i-broccoli"
        },
        {
          "q": "~8 pieces",
          "n": "Baby corn, sliced",
          "tag": "baby-corn",
          "img": "i-babycorn"
        },
        {
          "q": "1 small",
          "n": "Red onion, in chunks",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "1/2 each",
          "n": "Yellow and red capsicum, in chunks",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~10 pieces",
          "n": "French beans, chopped",
          "tag": "beans",
          "img": "i-beans"
        },
        {
          "q": "~1/2 cup",
          "n": "Zucchini, cubed",
          "tag": "zucchini",
          "img": "i-zucchini"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp, plus a pinch on top",
          "n": "Oregano or mixed herbs",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "~1 tsp, plus a pinch on top",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "a big handful (~20 leaves)",
          "n": "Fresh basil leaves",
          "tag": "basil",
          "img": "i-basil"
        },
        {
          "q": "~120 g",
          "n": "Paneer, in slabs",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "3 cloves",
          "n": "Garlic, for the sauce",
          "tag": "garlic",
          "img": "i-garlic2"
        },
        {
          "q": "2",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-gchilli"
        },
        {
          "q": "1 slice + 2 tbsp grated",
          "n": "Cheese",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "~1/2 cup (120 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "1 to 2 cups cooked",
          "n": "Rice, plain or with herbs (to pack on the side)",
          "tag": "rice",
          "opt": true,
          "img": "i-rice"
        }
      ],
      "steps": [
        {
          "t": "Heat a wide pan on the gas.",
          "imgs": [
            "s-heat-1"
          ]
        },
        {
          "t": "Add the oil.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add the chopped garlic.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Add the chopped broccoli, baby corn, onion, capsicum, beans and zucchini.",
          "imgs": [
            "s-veg-1",
            "s-veg-2",
            "s-veg-3"
          ]
        },
        {
          "t": "Stir the vegetables.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Sprinkle on the salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Sprinkle on the oregano.",
          "imgs": [
            "s-oregano-1",
            "s-oregano-2"
          ]
        },
        {
          "t": "Sprinkle on the chilli flakes.",
          "imgs": [
            "s-flakes-1",
            "s-flakes-2"
          ]
        },
        {
          "t": "Put the basil leaves in the mixie jar.",
          "imgs": [
            "s-basil-1",
            "s-basil-2"
          ]
        },
        {
          "t": "Add the paneer slabs.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Add the garlic cloves and green chillies.",
          "imgs": [
            "s-gc-1",
            "s-gc-2"
          ]
        },
        {
          "t": "Add the cheese slice.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2"
          ]
        },
        {
          "t": "Pour in the milk.",
          "imgs": [
            "s-milk-1",
            "s-milk-2"
          ]
        },
        {
          "t": "Blend to a smooth, thick green sauce.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Pour the green sauce over the vegetables in the pan.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Stir until every vegetable is coated in sauce.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Pour in a little more of the creamy white liquid and stir.",
          "imgs": [
            "s-more-1",
            "s-more-2"
          ]
        },
        {
          "t": "Sprinkle a pinch of chilli flakes and oregano on top.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Pack rice on one side of the lunchbox.",
          "imgs": [
            "s-rice-1",
            "s-rice-2"
          ]
        },
        {
          "t": "Spoon the creamy veg into the other side.",
          "imgs": [
            "s-spoon-1"
          ]
        },
        {
          "t": "Grate cheese all over the veg.",
          "imgs": [
            "s-grate-1",
            "s-grate-2",
            "s-grate-3"
          ]
        },
        {
          "t": "Finish with a pinch of chilli flakes and close the lid.",
          "imgs": [
            "s-lid-1",
            "s-lid-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-fibre"
      ],
      "credit": "EatWithAishwarya",
      "card": "card"
    },
    {
      "id": "pressure-cooker-veg-paneer-pulao",
      "name": "Pressure cooker paneer veg pulao",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 15,
      "how": "Pressure cooker",
      "tools": "Pressure cooker, gas or induction, spoon",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "1 large (~1 cup)",
          "n": "Onion, sliced",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "1 small (~1/2 cup)",
          "n": "Carrot, small cubes",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~3/4 cup (100 g)",
          "n": "Green peas",
          "tag": "peas",
          "img": "i-peas"
        },
        {
          "q": "2",
          "n": "Green chillies, slit",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1 tsp",
          "n": "Ginger-garlic paste",
          "tag": "ginger",
          "alt": [
            "garlic"
          ],
          "img": "i-gg"
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
          "q": "~1.5 cups (270 g)",
          "n": "Basmati rice, washed",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "~2 cups (500 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tsp",
          "n": "Pulao masala or garam masala",
          "tag": "garam-masala",
          "img": "i-masala"
        },
        {
          "q": "~100 g (8 to 10 cubes)",
          "n": "Paneer, cubed and lightly fried",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 tsp",
          "n": "Ghee, to finish",
          "tag": "ghee",
          "opt": true,
          "img": "i-ghee"
        },
        {
          "q": "a small handful",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "opt": true,
          "img": "i-coriander"
        },
        {
          "q": "1 small bowl",
          "n": "Raita (curd with onion, tomato), to serve",
          "tag": "curd",
          "opt": true,
          "img": "i-raita"
        }
      ],
      "steps": [
        {
          "t": "Heat oil in the pressure cooker.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add the cumin seeds.",
          "imgs": [
            "s-cumin-1"
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
          "t": "Stir until the onion turns soft and light golden.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Add the carrot and green peas.",
          "imgs": [
            "s-carrot-1",
            "s-peas-1",
            "s-peas-2"
          ]
        },
        {
          "t": "Add the slit green chillies and the ginger-garlic paste.",
          "imgs": [
            "s-chilli-1",
            "s-gg-1"
          ]
        },
        {
          "t": "Add the salt and the red chilli powder.",
          "imgs": [
            "s-salt-1",
            "s-redchilli-1",
            "s-redchilli-2"
          ]
        },
        {
          "t": "Stir well and cook the vegetables for a minute or two.",
          "imgs": [
            "s-stir-1",
            "s-stir-2",
            "s-stir-3"
          ]
        },
        {
          "t": "Add the washed rice.",
          "imgs": [
            "s-rice-1",
            "s-rice-2"
          ]
        },
        {
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1",
            "s-water-2",
            "s-water-3"
          ]
        },
        {
          "t": "Add the pulao masala on top.",
          "imgs": [
            "s-masala-1",
            "s-masala-2"
          ]
        },
        {
          "t": "Add the fried paneer cubes.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Mix gently so the rice and water are even.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Close the lid, put on the weight and pressure cook on high flame.",
          "imgs": [
            "s-lid-1",
            "s-lid-2",
            "s-lid-3"
          ]
        },
        {
          "t": "Wait until the pressure goes, then open the lid.",
          "imgs": [
            "s-open-1",
            "s-open-2"
          ]
        },
        {
          "t": "Drizzle ghee over the pulao.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2"
          ]
        },
        {
          "t": "Sprinkle chopped coriander leaves on top.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        },
        {
          "t": "Fluff and mix gently with a spoon.",
          "imgs": [
            "s-fluff-1",
            "s-fluff-2"
          ]
        },
        {
          "t": "Serve hot with raita.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "pressure-cooker",
        "one-pot"
      ],
      "card": "card"
    },
    {
      "id": "soaked-dry-fruit-milk-shake",
      "name": "Soaked dry fruit milk shake",
      "meal": "Drink",
      "minutes": 10,
      "protein": 15,
      "how": "No cooking",
      "tools": "Tall glass, strainer, mixie jar, small bowl",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tall glass (250 ml)",
          "n": "Water, for soaking",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "8",
          "n": "Almonds (badam)",
          "tag": "almonds",
          "img": "i-almonds"
        },
        {
          "q": "4",
          "n": "Cashews (kaju)",
          "tag": "cashews",
          "img": "i-cashews"
        },
        {
          "q": "2",
          "n": "Walnuts (akhrot)",
          "tag": "walnuts",
          "img": "i-walnuts"
        },
        {
          "q": "10 to 12",
          "n": "Raisins (kishmish)",
          "tag": "raisins",
          "img": "i-raisins"
        },
        {
          "q": "2",
          "n": "Dried figs (anjeer)",
          "tag": "fig",
          "img": "i-fig"
        },
        {
          "q": "4",
          "n": "Dates (khajoor)",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "10",
          "n": "Pistachios (pista)",
          "tag": "pistachios",
          "img": "i-pistachios"
        },
        {
          "q": "1 tbsp",
          "n": "Pumpkin seeds (kaddu ke beej)",
          "tag": "pumpkin-seeds",
          "img": "i-pumpkin"
        },
        {
          "q": "~1 cup (250 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~1 tbsp",
          "n": "Honey or syrup",
          "tag": "honey",
          "opt": true,
          "img": "i-honey"
        }
      ],
      "steps": [
        {
          "t": "Fill a tall glass with water.",
          "imgs": [
            "s-water-1"
          ]
        },
        {
          "t": "Add 8 almonds.",
          "imgs": [
            "s-almonds-1",
            "s-almonds-2"
          ]
        },
        {
          "t": "Add 4 cashews.",
          "imgs": [
            "s-cashews-1",
            "s-cashews-2"
          ]
        },
        {
          "t": "Add 2 walnuts.",
          "imgs": [
            "s-walnuts-1",
            "s-walnuts-2"
          ]
        },
        {
          "t": "Add 10 to 12 raisins.",
          "imgs": [
            "s-raisins-1",
            "s-raisins-2"
          ]
        },
        {
          "t": "Add 2 dried figs.",
          "imgs": [
            "s-fig-1",
            "s-fig-2"
          ]
        },
        {
          "t": "Add 4 dates.",
          "imgs": [
            "s-dates-1",
            "s-dates-2"
          ]
        },
        {
          "t": "Add 10 pistachios.",
          "imgs": [
            "s-pistachios-1",
            "s-pistachios-2"
          ]
        },
        {
          "t": "Add 1 tbsp pumpkin seeds.",
          "imgs": [
            "s-pumpkin-1",
            "s-pumpkin-2"
          ]
        },
        {
          "t": "Stir, then leave everything to soak overnight.",
          "imgs": [
            "s-soak-1",
            "s-soak-2",
            "s-soak-3"
          ]
        },
        {
          "t": "Next morning, pour the glass through a strainer.",
          "imgs": [
            "s-strain-1",
            "s-strain-2",
            "s-strain-3"
          ]
        },
        {
          "t": "Let the water drain out and throw it away.",
          "imgs": [
            "s-drain-1",
            "s-drain-2"
          ]
        },
        {
          "t": "Tip the soaked nuts and fruit into the mixie jar.",
          "imgs": [
            "s-jar-1",
            "s-jar-2",
            "s-jar-3"
          ]
        },
        {
          "t": "Pour in the milk.",
          "imgs": [
            "s-milk-1",
            "s-milk-2",
            "s-milk-3"
          ]
        },
        {
          "t": "Add the honey.",
          "imgs": [
            "s-honey-1",
            "s-honey-2",
            "s-honey-3"
          ]
        },
        {
          "t": "Close the lid and blend until smooth and creamy.",
          "imgs": [
            "s-blend-1",
            "s-blend-2",
            "s-blend-3"
          ]
        },
        {
          "t": "Pour the shake into a tall glass.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Drink it fresh.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender"
      ],
      "credit": "ASMR Indian Chef",
      "card": "card"
    },
    {
      "id": "creamy-veggie-herb-rice",
      "name": "Creamy veggie paneer herb rice",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 30,
      "how": "Gas",
      "tools": "Non-stick pan, wok or second pan, gas, spatula, ladle, bowl",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~200 g",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 tbsp, plus 1 tsp for the rice",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 cup (150 g)",
          "n": "Broccoli florets",
          "tag": "broccoli",
          "img": "i-broccoli"
        },
        {
          "q": "~1 cup (150 g)",
          "n": "Capsicum (red, yellow and green), chopped",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~1/2 cup (80 g)",
          "n": "Sweet corn kernels",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~1 tsp, plus a pinch for the rice",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~1 tsp",
          "n": "Dried oregano or mixed herbs",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "~1 tbsp",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "~1.5 tbsp",
          "n": "Maida (plain white flour)",
          "tag": "all-purpose-flour",
          "alt": [
            "corn-flour"
          ],
          "img": "i-flour"
        },
        {
          "q": "~1 cup (250 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~1.5 cups (250 g) cooked",
          "n": "Cooked rice",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "~2 tbsp",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        }
      ],
      "steps": [
        {
          "t": "Cut the broccoli into florets and chop the capsicums into small pieces.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
          ]
        },
        {
          "t": "Cut the paneer into thick slabs.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Light the gas and heat a non-stick pan.",
          "imgs": [
            "s-heat-1",
            "s-heat-2"
          ]
        },
        {
          "t": "Add a little oil and place the paneer slabs in the pan.",
          "imgs": [
            "s-oil-1",
            "s-oil-2",
            "s-oil-3"
          ]
        },
        {
          "t": "Add the broccoli florets next to the paneer.",
          "imgs": [
            "s-broc-1",
            "s-broc-2"
          ]
        },
        {
          "t": "Add the capsicum and sweet corn.",
          "imgs": [
            "s-capsicum-1",
            "s-capsicum-2"
          ]
        },
        {
          "t": "Sprinkle chilli flakes and dried herbs over the paneer and veg.",
          "imgs": [
            "s-season-1",
            "s-season-2"
          ]
        },
        {
          "t": "Flip the paneer and toss the veg until the paneer is golden on both sides.",
          "imgs": [
            "s-flip-1",
            "s-flip-2",
            "s-flip-3"
          ]
        },
        {
          "t": "Take the paneer and veg out onto a plate.",
          "imgs": [
            "s-plate-1",
            "s-plate-2"
          ]
        },
        {
          "t": "Melt the butter in the same pan.",
          "imgs": [
            "s-butter-1",
            "s-butter-2"
          ]
        },
        {
          "t": "Add the maida and stir it into the butter.",
          "imgs": [
            "s-flour-1",
            "s-flour-2"
          ]
        },
        {
          "t": "Pour in the milk and stir until it becomes a thick, creamy sauce.",
          "imgs": [
            "s-milk-1",
            "s-milk-2",
            "s-milk-3"
          ]
        },
        {
          "t": "Sprinkle in the oregano and chilli flakes.",
          "imgs": [
            "s-herbs-1",
            "s-herbs-2"
          ]
        },
        {
          "t": "Add the cooked veggies, keeping the paneer aside.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Mix well until the veggies are coated in the sauce.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2",
            "s-sauce-3"
          ]
        },
        {
          "t": "In a second pan, heat a little oil and add chilli flakes.",
          "imgs": [
            "s-rflakes-1",
            "s-rflakes-2"
          ]
        },
        {
          "t": "Add the chopped coriander leaves.",
          "imgs": [
            "s-rcoriander-1",
            "s-rcoriander-2"
          ]
        },
        {
          "t": "Add the cooked rice.",
          "imgs": [
            "s-rrice-1",
            "s-rrice-2"
          ]
        },
        {
          "t": "Toss until the rice is mixed with the herbs and flakes.",
          "imgs": [
            "s-rtoss-1",
            "s-rtoss-2",
            "s-rtoss-3"
          ]
        },
        {
          "t": "Spoon the herb rice into one side of a bowl.",
          "imgs": [
            "s-bowl-1",
            "s-bowl-2"
          ]
        },
        {
          "t": "Spoon the creamy veggies into the other side.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Place the paneer slabs on top and serve.",
          "imgs": [
            "s-top-1",
            "s-top-2",
            "s-top-3"
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
      "id": "thecha-paneer-pakoda",
      "name": "Thecha paneer pakoda",
      "meal": "Snack",
      "minutes": 40,
      "protein": 30,
      "how": "Gas",
      "tools": "Kadhai, gas, pan, mortar and pestle, strainer",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (100 g)",
          "n": "Besan (gram flour)",
          "tag": "besan",
          "img": "i-besan"
        },
        {
          "q": "~2 tbsp",
          "n": "Rice flour",
          "tag": "rice-flour",
          "img": "i-rice-flour"
        },
        {
          "q": "~1/2 tsp",
          "n": "Ajwain (carom seeds)",
          "tag": "ajwain",
          "img": "i-ajwain"
        },
        {
          "q": "~1 tsp in all (batter and thecha)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 small bunch (~4 tbsp chopped), for the batter and thecha",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~3/4 cup (180 ml), as needed",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~8 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~8",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1/4 cup (35 g)",
          "n": "Roasted peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "~1/2 lemon, juice",
          "n": "Lemon",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "~200 g block",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "enough to deep fry",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        }
      ],
      "steps": [
        {
          "t": "Add besan to a bowl.",
          "imgs": [
            "s-besan-1",
            "s-besan-2"
          ]
        },
        {
          "t": "Add the rice flour.",
          "imgs": [
            "s-rice-1"
          ]
        },
        {
          "t": "Add salt and ajwain.",
          "imgs": [
            "s-dry-1",
            "s-dry-2",
            "s-dry-3"
          ]
        },
        {
          "t": "Add chopped coriander and mix the dry flour with a fork.",
          "imgs": [
            "s-herb-1",
            "s-herb-2"
          ]
        },
        {
          "t": "Add water slowly and whisk to a thick, smooth batter.",
          "imgs": [
            "s-water-1",
            "s-water-2",
            "s-water-3"
          ]
        },
        {
          "t": "For the thecha: put garlic, green chillies, cumin and salt in a dry pan.",
          "imgs": [
            "s-roast-1",
            "s-roast-2",
            "s-roast-3"
          ]
        },
        {
          "t": "Dry roast, stirring, until the garlic gets brown spots.",
          "imgs": [
            "s-toast-1",
            "s-toast-2"
          ]
        },
        {
          "t": "Tip the roasted mix into a mortar.",
          "imgs": [
            "s-mortar-1"
          ]
        },
        {
          "t": "Add coriander leaves and a squeeze of lemon.",
          "imgs": [
            "s-leaf-1",
            "s-leaf-2",
            "s-leaf-3"
          ]
        },
        {
          "t": "Add the roasted peanuts.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2"
          ]
        },
        {
          "t": "Crush everything into a coarse chutney (thecha).",
          "imgs": [
            "s-crush-1",
            "s-crush-2"
          ]
        },
        {
          "t": "Cut the paneer block into thin slices.",
          "imgs": [
            "s-slice-1",
            "s-slice-2",
            "s-slice-3"
          ]
        },
        {
          "t": "Spread thecha on a slice.",
          "imgs": [
            "s-spread-1",
            "s-spread-2"
          ]
        },
        {
          "t": "Cover it with another slice and press.",
          "imgs": [
            "s-cover-1",
            "s-cover-2"
          ]
        },
        {
          "t": "Cut each paneer sandwich into pieces.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Dip each piece in the batter to coat it all over.",
          "imgs": [
            "s-dip-1",
            "s-dip-2",
            "s-dip-3"
          ]
        },
        {
          "t": "Slide the pieces into hot oil.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Deep fry until golden.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Lift out with a strainer and drain.",
          "imgs": [
            "s-drain-1",
            "s-drain-2"
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
      "id": "paneer-veggie-kebabs",
      "name": "Paneer veggie kebabs",
      "meal": "Snack",
      "minutes": 30,
      "protein": 20,
      "how": "Gas",
      "tools": "Mixie, flat griddle (tawa), gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/3 cup (80 g), hung or very thick",
          "n": "Hung curd (thick curd)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "200 g (1 pack)",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1/2 cup, finely chopped",
          "n": "Bell peppers, red, yellow and green (capsicum)",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~1/2 cup, grated",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~2, chopped",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1 tsp, chopped",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1 tsp",
          "n": "Kasuri methi (dried fenugreek leaves)",
          "tag": "kasuri-methi",
          "img": "i-methi"
        },
        {
          "q": "~1 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~3 tbsp",
          "n": "Besan (gram flour)",
          "tag": "besan",
          "img": "i-besan"
        },
        {
          "q": "~1 tsp, to brush the griddle",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~3 tbsp, to serve",
          "n": "Green chutney",
          "tag": "green-chutney",
          "opt": true,
          "img": "i-chutney"
        },
        {
          "q": "1 leaf on each patty",
          "n": "Mint leaves",
          "tag": "mint",
          "opt": true,
          "img": "i-mint"
        }
      ],
      "steps": [
        {
          "t": "Put the hung curd in a large bowl.",
          "imgs": [
            "s-curd"
          ]
        },
        {
          "t": "Grind the paneer cubes in a mixie jar to coarse crumbs.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Add the paneer crumbs to the hung curd.",
          "imgs": [
            "s-crumbs"
          ]
        },
        {
          "t": "Add the chopped bell peppers, grated carrot, green chillies and ginger.",
          "imgs": [
            "s-veg-1",
            "s-veg-2",
            "s-veg-3"
          ]
        },
        {
          "t": "Add chilli flakes, black pepper, kasuri methi, chaat masala and salt.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the chopped coriander and besan.",
          "imgs": [
            "s-herb-1",
            "s-herb-2",
            "s-herb-3"
          ]
        },
        {
          "t": "Mix everything well with your hands.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Shape the mixture into round, flat patties.",
          "imgs": [
            "s-shape-1",
            "s-shape-2",
            "s-shape-3"
          ]
        },
        {
          "t": "Brush a flat griddle with oil.",
          "imgs": [
            "s-brush-1",
            "s-brush-2"
          ]
        },
        {
          "t": "Place the patties on the griddle.",
          "imgs": [
            "s-place-1",
            "s-place-2"
          ]
        },
        {
          "t": "Cook until golden, then flip and cook the other side.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Serve hot with green chutney and a mint leaf on top.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "tags": [
        "blender",
        "gas",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "carrot-cucumber-lime-juice",
      "name": "Carrot cucumber lime juice",
      "meal": "Drink",
      "minutes": 5,
      "protein": 0,
      "how": "No cooking",
      "tools": "Blender (mixie)",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 medium (~80 g), sliced",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "1/2 (~100 g), sliced",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "juice of 2 limes",
          "n": "Lime (nimbu)",
          "tag": "lemon",
          "img": "i-lime"
        },
        {
          "q": "1 glass (~250 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        }
      ],
      "steps": [
        {
          "t": "Put 1 sliced carrot in the blender jar.",
          "imgs": [
            "s-carrot-1",
            "s-carrot-2"
          ]
        },
        {
          "t": "Add half a cucumber, sliced.",
          "imgs": [
            "s-cucumber-1",
            "s-cucumber-2"
          ]
        },
        {
          "t": "Add the juice of 2 limes.",
          "imgs": [
            "s-lime-1"
          ]
        },
        {
          "t": "Pour in 1 glass of water.",
          "imgs": [
            "s-water-1"
          ]
        },
        {
          "t": "Blend everything for 1 minute.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Pour into a glass.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
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
      "id": "aloo-toast",
      "name": "Aloo toast",
      "meal": "Breakfast",
      "minutes": 25,
      "protein": 10,
      "how": "Gas",
      "tools": "Tawa, gas, fork",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~4 small (300 g), boiled",
          "n": "Potatoes (aloo), boiled",
          "tag": "potato",
          "img": "i-potato"
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
          "q": "~2, chopped",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "1 sachet (~6 g)",
          "n": "Seasoning masala (Maggi Masala-ae-Magic)",
          "tag": "seasoning-masala",
          "alt": [
            "chaat-masala",
            "garam-masala"
          ],
          "img": "i-masala"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~4 slices",
          "n": "Bread",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "~1 tbsp",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "to serve",
          "n": "Tomato ketchup",
          "tag": "tomato-ketchup",
          "opt": true,
          "img": "i-ketchup"
        }
      ],
      "steps": [
        {
          "t": "Mash the boiled potatoes on a plate.",
          "imgs": [
            "s-mash-1",
            "s-mash-2"
          ]
        },
        {
          "t": "Add chopped onion and tomato.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add chopped green chillies and coriander.",
          "imgs": [
            "s-green-1",
            "s-green-2"
          ]
        },
        {
          "t": "Add the masala sachet and some salt.",
          "imgs": [
            "s-masala-1",
            "s-masala-2"
          ]
        },
        {
          "t": "Mix everything well by hand.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Spread the mixture thickly on the bread slices.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Melt butter on a tawa.",
          "imgs": [
            "s-butter-1",
            "s-butter-2"
          ]
        },
        {
          "t": "Place the bread on the tawa, spread side down.",
          "imgs": [
            "s-place-1",
            "s-place-2"
          ]
        },
        {
          "t": "Cook until golden, then flip.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Toast the other side until golden too.",
          "imgs": [
            "s-toast-1",
            "s-toast-2"
          ]
        },
        {
          "t": "Serve hot with ketchup.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "credit": "Kitchentipsofalka007",
      "card": "card"
    },
    {
      "id": "gujarati-dal-rice-aloo",
      "name": "Gujarati dal rice aloo sabzi",
      "meal": "Lunch or dinner",
      "minutes": 50,
      "protein": 25,
      "how": "Pressure cooker + gas",
      "tools": "Pressure cooker with stacking containers, saucepan, pan, whisk, gas",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup",
          "n": "Basmati rice",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "~1 cup",
          "n": "Toor dal",
          "tag": "toor-dal",
          "img": "i-dal"
        },
        {
          "q": "~2 tbsp",
          "n": "Raw peanuts (shelled)",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "3 medium",
          "n": "Potatoes",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "as needed",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "to taste (rice, dal, potatoes)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp for the dal, ~1 tsp for the potatoes",
          "n": "Coriander-cumin powder (dhana-jeera)",
          "tag": "coriander-powder",
          "alt": [
            "cumin-powder"
          ],
          "img": "i-cc"
        },
        {
          "q": "~1 tsp for the dal, ~1/2 tsp for the potatoes",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-redchilli"
        },
        {
          "q": "~1 tsp, grated",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~2 tbsp for the tadka, ~2 tbsp for the potatoes",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp for the tadka, ~1/2 tsp for the potatoes",
          "n": "Mustard seeds",
          "tag": "mustard-seeds",
          "img": "i-mustard"
        },
        {
          "q": "~2",
          "n": "Dry red chillies",
          "tag": "dry-red-chilli",
          "img": "i-drychilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Fenugreek seeds (methi dana)",
          "tag": "fenugreek-seeds",
          "img": "i-fenugreek"
        },
        {
          "q": "a pinch",
          "n": "Hing (asafoetida)",
          "tag": "hing",
          "img": "i-hing"
        },
        {
          "q": "a small piece (~1 tbsp, crumbled)",
          "n": "Jaggery (gur)",
          "tag": "jaggery",
          "img": "i-jaggery"
        },
        {
          "q": "~1 tbsp",
          "n": "Tamarind pulp (imli)",
          "tag": "tamarind",
          "img": "i-tamarind"
        },
        {
          "q": "~3 tbsp, chopped (dal and potatoes)",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Sesame seeds",
          "tag": "sesame-seeds",
          "opt": true,
          "img": "i-sesame"
        }
      ],
      "steps": [
        {
          "t": "Add the rice to a steel container.",
          "imgs": [
            "s-rice-1",
            "s-rice-2"
          ]
        },
        {
          "t": "Add water and a pinch of salt, then stir.",
          "imgs": [
            "s-rice-3",
            "s-rice-4"
          ]
        },
        {
          "t": "Add the toor dal to a second container.",
          "imgs": [
            "s-dal-1"
          ]
        },
        {
          "t": "Pour in water, add salt and stir.",
          "imgs": [
            "s-dal-2",
            "s-dal-3"
          ]
        },
        {
          "t": "Place a small bowl of peanuts in the dal and add water to it.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2"
          ]
        },
        {
          "t": "Stack the containers, cover with the lid and put the potatoes on top.",
          "imgs": [
            "s-stack-1",
            "s-stack-2"
          ]
        },
        {
          "t": "Lower the stack into the pressure cooker and close the lid.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Pressure cook until the dal, rice and potatoes are soft.",
          "imgs": [
            "s-cook-3",
            "s-cook-4"
          ]
        },
        {
          "t": "Take out the potatoes and fluff the rice with a fork.",
          "imgs": [
            "s-out-1",
            "s-out-2",
            "s-out-3"
          ]
        },
        {
          "t": "Lift out the peanut bowl and whisk the dal until smooth.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2"
          ]
        },
        {
          "t": "Add coriander-cumin powder, red chilli powder and ginger to the dal.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Add the cooked peanuts and whisk again.",
          "imgs": [
            "s-whisk-3",
            "s-whisk-4"
          ]
        },
        {
          "t": "Heat oil in a saucepan.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add mustard seeds, dry red chillies, fenugreek seeds and hing.",
          "imgs": [
            "s-tadka-1",
            "s-tadka-2",
            "s-tadka-3"
          ]
        },
        {
          "t": "Pour the whisked dal into the saucepan.",
          "imgs": [
            "s-pour-1"
          ]
        },
        {
          "t": "Add a little water, a small piece of jaggery and tamarind pulp.",
          "imgs": [
            "s-sour-1",
            "s-sour-2",
            "s-sour-3"
          ]
        },
        {
          "t": "Stir well and add chopped coriander.",
          "imgs": [
            "s-stir-1",
            "s-stir-2",
            "s-stir-3"
          ]
        },
        {
          "t": "Peel the boiled potatoes and cut them into wedges.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Heat oil in a pan.",
          "imgs": [
            "s-saak-1"
          ]
        },
        {
          "t": "Add mustard seeds and turmeric.",
          "imgs": [
            "s-saak-2",
            "s-saak-3"
          ]
        },
        {
          "t": "Add the potato wedges and stir.",
          "imgs": [
            "s-pot-1",
            "s-pot-2"
          ]
        },
        {
          "t": "Add coriander-cumin powder, red chilli powder, salt and sesame seeds.",
          "imgs": [
            "s-pspice-1",
            "s-pspice-2",
            "s-pspice-3"
          ]
        },
        {
          "t": "Toss well, add a little more salt and chopped coriander.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Put rice, potato sabzi and dal together in a bowl.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "tags": [
        "pressure-cooker",
        "gas",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "paneer-rajma-burrito-bowl",
      "name": "Paneer rajma burrito bowl",
      "meal": "Lunch or dinner",
      "minutes": 45,
      "protein": 35,
      "how": "Gas",
      "tools": "2 pans, gas, knife (video uses a crinkle cutter)",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~200 g",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 tsp",
          "n": "Peri peri masala (piri piri seasoning)",
          "tag": "peri-peri-masala",
          "alt": [
            "red-chilli-powder"
          ],
          "img": "i-piri"
        },
        {
          "q": "~2 tsp in all (paneer, peppers, rice)",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "to taste (paneer, peppers, rice, salsa, yogurt)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tbsp, for frying the paneer",
          "n": "Oil",
          "tag": "oil"
        },
        {
          "q": "~2 tbsp in all",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "~8 cloves, chopped (peppers, rajma, rice)",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~2 medium (peppers, rajma, salsa)",
          "n": "Onions",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2, cut in strips (yellow and green)",
          "n": "Bell peppers (capsicum)",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~3 (peppers and salsa)",
          "n": "Tomatoes",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1 cup, boiled",
          "n": "Rajma (kidney beans)",
          "tag": "rajma",
          "img": "i-rajma"
        },
        {
          "q": "~3 tbsp",
          "n": "Tomato sauce (ketchup)",
          "tag": "tomato-ketchup",
          "img": "i-ketchup"
        },
        {
          "q": "~1.5 cups, cooked",
          "n": "Rice",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "~3 tbsp, chopped (rice, salsa, yogurt)",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/2 cup, boiled",
          "n": "Sweet corn",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~1/2 cup",
          "n": "Greek yogurt (thick curd)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "a pinch",
          "n": "Black pepper",
          "tag": "black-pepper"
        },
        {
          "q": "1, sliced",
          "n": "Avocado",
          "tag": "avocado",
          "opt": true,
          "img": "i-avocado"
        },
        {
          "q": "a handful",
          "n": "Nachos (tortilla chips)",
          "tag": "nachos",
          "opt": true,
          "img": "i-nachos"
        }
      ],
      "steps": [
        {
          "t": "Cut the paneer block into cubes.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Toss the paneer cubes with peri peri masala, chilli flakes and salt.",
          "imgs": [
            "s-season-1",
            "s-season-2"
          ]
        },
        {
          "t": "Pan fry the paneer cubes until golden on all sides.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Melt butter in a pan and add chopped garlic.",
          "imgs": [
            "s-butter-1"
          ]
        },
        {
          "t": "Add bell pepper strips, onion rings and tomato slices.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
          ]
        },
        {
          "t": "Add salt and chilli flakes and toss until just soft.",
          "imgs": [
            "s-veg-3",
            "s-veg-4"
          ]
        },
        {
          "t": "In another pan, fry chopped garlic in butter, then add chopped onions.",
          "imgs": [
            "s-rg-1",
            "s-rg-2",
            "s-rg-3"
          ]
        },
        {
          "t": "Add the boiled rajma and tomato sauce.",
          "imgs": [
            "s-rj-1",
            "s-rj-2"
          ]
        },
        {
          "t": "Stir until the rajma is well coated.",
          "imgs": [
            "s-rj-3"
          ]
        },
        {
          "t": "Fry chopped garlic and chilli flakes in butter.",
          "imgs": [
            "s-rice-1",
            "s-rice-2"
          ]
        },
        {
          "t": "Add the cooked rice, salt and chopped coriander and toss.",
          "imgs": [
            "s-rice-3",
            "s-rice-4",
            "s-rice-5"
          ]
        },
        {
          "t": "Mix chopped onion and tomato with boiled corn.",
          "imgs": [
            "s-salsa-1",
            "s-salsa-2"
          ]
        },
        {
          "t": "Add coriander, salt and tomato sauce and mix.",
          "imgs": [
            "s-salsa-3",
            "s-salsa-4"
          ]
        },
        {
          "t": "Mix Greek yogurt with chopped coriander, salt and pepper.",
          "imgs": [
            "s-dip-1",
            "s-dip-2",
            "s-dip-3"
          ]
        },
        {
          "t": "Put the rice in the middle of a plate, with the paneer and rajma around it.",
          "imgs": [
            "s-plate-1",
            "s-plate-2"
          ]
        },
        {
          "t": "Add the peppers, salsa and yogurt, then top with avocado and nachos if you like.",
          "imgs": [
            "s-top-1"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-protein"
      ],
      "credit": "Foodklick",
      "card": "card"
    },
    {
      "id": "creamy-chickpea-curd-salad",
      "name": "Creamy chickpea curd salad",
      "meal": "Breakfast",
      "minutes": 10,
      "protein": 25,
      "how": "No cooking",
      "tools": "Knife, bowl",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 small (100 g)",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1 small",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~3/4 cup (180 g), thick",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/2 lime, juice",
          "n": "Lime (nimbu)",
          "tag": "lemon",
          "img": "i-lime"
        },
        {
          "q": "~1 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 cup (160 g), boiled",
          "n": "Chickpeas (kabuli chana)",
          "tag": "chickpeas",
          "img": "i-chickpeas"
        }
      ],
      "steps": [
        {
          "t": "Cut the cucumber into long pieces.",
          "imgs": [
            "s-cuc-1",
            "s-cuc-2"
          ]
        },
        {
          "t": "Chop the onion fine.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Put the curd in a bowl.",
          "imgs": [
            "s-curd"
          ]
        },
        {
          "t": "Squeeze in the lime juice.",
          "imgs": [
            "s-lime"
          ]
        },
        {
          "t": "Add the chilli flakes.",
          "imgs": [
            "s-flakes"
          ]
        },
        {
          "t": "Add the chopped coriander and mix.",
          "imgs": [
            "s-herb-1",
            "s-herb-2"
          ]
        },
        {
          "t": "Add the boiled chickpeas.",
          "imgs": [
            "s-chick"
          ]
        },
        {
          "t": "Add the chopped onion and the diced cucumber.",
          "imgs": [
            "s-add-1",
            "s-add-2"
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
          "t": "Serve in a bowl.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "quick",
        "high-protein",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "cheesy-corn-tawa-pizza",
      "name": "Cheesy corn tawa pizza",
      "meal": "Lunch or dinner",
      "minutes": 35,
      "protein": 20,
      "how": "Gas",
      "tools": "Tawa (flat pan) with glass lid, rolling pin, fork, gas",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup (60 g), kneaded to a soft dough",
          "n": "Wheat flour (atta) dough",
          "tag": "atta",
          "img": "i-atta"
        },
        {
          "q": "1",
          "n": "Cheese slice",
          "tag": "cheese",
          "img": "i-cheeseslice"
        },
        {
          "q": "~1/3 cup (40 g), cubes or grated",
          "n": "Mozzarella or pizza cheese",
          "tag": "cheese",
          "img": "i-cheesecubes"
        },
        {
          "q": "1 sachet (~6 g)",
          "n": "Seasoning masala (Maggi Masala-ae-Magic)",
          "tag": "seasoning-masala",
          "alt": [
            "chaat-masala",
            "garam-masala"
          ],
          "img": "i-masala"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1 tsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~3 tbsp, boiled",
          "n": "Sweet corn",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~2 tbsp, diced",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2 tbsp, diced (green and red)",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~1 tsp",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "~1/2 tsp",
          "n": "Oregano",
          "tag": "oregano",
          "opt": true,
          "img": "i-oregano"
        },
        {
          "q": "~1/2 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "opt": true,
          "img": "i-flakes"
        }
      ],
      "steps": [
        {
          "t": "Flatten the dough ball with your palm.",
          "imgs": [
            "s-dough-1",
            "s-dough-2",
            "s-dough-3"
          ]
        },
        {
          "t": "Roll it into a round, thin roti.",
          "imgs": [
            "s-roll-1",
            "s-roll-2"
          ]
        },
        {
          "t": "Place the cheese slice in the middle.",
          "imgs": [
            "s-slice-1",
            "s-slice-2"
          ]
        },
        {
          "t": "Fold the dough over the cheese and press to seal.",
          "imgs": [
            "s-fold-1",
            "s-fold-2"
          ]
        },
        {
          "t": "Roll it into a ball and press flat, then roll out into a round base.",
          "imgs": [
            "s-reroll-1",
            "s-reroll-2",
            "s-reroll-3"
          ]
        },
        {
          "t": "Prick the base all over with a fork.",
          "imgs": [
            "s-prick-1",
            "s-prick-2"
          ]
        },
        {
          "t": "Cook the base on a dry tawa, flipping, until it puffs and lightly browns.",
          "imgs": [
            "s-base-1",
            "s-base-2",
            "s-base-3",
            "s-base-4"
          ]
        },
        {
          "t": "Spread the masala, red chilli powder and a little oil over the base as a sauce.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2",
            "s-sauce-3",
            "s-sauce-4"
          ]
        },
        {
          "t": "Cover the sauce with the cheese.",
          "imgs": [
            "s-cheese-1"
          ]
        },
        {
          "t": "Scatter the corn, onion and capsicum on top.",
          "imgs": [
            "s-top-1",
            "s-top-2",
            "s-top-3"
          ]
        },
        {
          "t": "Melt butter on the tawa.",
          "imgs": [
            "s-butter-1",
            "s-butter-2"
          ]
        },
        {
          "t": "Put the pizza on the tawa and cover with a glass lid.",
          "imgs": [
            "s-pan-1",
            "s-pan-2",
            "s-pan-3",
            "s-pan-4"
          ]
        },
        {
          "t": "Cook until the cheese melts completely.",
          "imgs": [
            "s-melt-1",
            "s-melt-2",
            "s-melt-3"
          ]
        },
        {
          "t": "Move the pizza to a board and sprinkle with oregano.",
          "imgs": [
            "s-board-1",
            "s-herb-1",
            "s-herb-2"
          ]
        },
        {
          "t": "Sprinkle with chilli flakes.",
          "imgs": [
            "s-flakes-1",
            "s-flakes-2"
          ]
        },
        {
          "t": "Cut into slices.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Eat hot while the cheese is stretchy.",
          "imgs": [
            "s-eat-1",
            "s-eat-2",
            "s-eat-3"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "paneer-veg-rice-cucumber-plate",
      "name": "Paneer veg rice cucumber plate",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 25,
      "how": "Gas",
      "tools": "2 pans, gas, knife",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~200 g block",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1 tsp in all (paneer, salad, rice)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~3 tbsp in all, chopped (paneer, salad, rice)",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 tbsp in all (paneer pan, veggie pan)",
          "n": "Oil",
          "tag": "oil"
        },
        {
          "q": "1 medium (~150 g)",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1/3 cup (80 g), thick",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/2 tsp",
          "n": "Peri peri masala",
          "tag": "peri-peri-masala",
          "alt": [
            "chilli-flakes"
          ],
          "img": "i-peri"
        },
        {
          "q": "~1/2 cup (80 g), small cubes",
          "n": "Mixed veggies (corn, carrot, capsicum, beans)",
          "tag": "mixed-vegetables",
          "img": "i-veg"
        },
        {
          "q": "~1.5 cups (225 g), cooked",
          "n": "Rice",
          "tag": "rice",
          "img": "i-rice"
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
          "img": "i-flakes"
        }
      ],
      "steps": [
        {
          "t": "Cut the paneer block into thick sticks.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Sprinkle red chilli powder over the paneer.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add black pepper, salt and chopped coriander.",
          "imgs": [
            "s-pep-1",
            "s-pep-2",
            "s-pep-3"
          ]
        },
        {
          "t": "Pan-roast the paneer sticks, turning, until golden.",
          "imgs": [
            "s-pan-1",
            "s-pan-2",
            "s-pan-3"
          ]
        },
        {
          "t": "Slice the cucumber into rounds and put them in a bowl.",
          "imgs": [
            "s-cuc-1",
            "s-cuc-2",
            "s-cuc-3"
          ]
        },
        {
          "t": "Spoon thick curd on top of the cucumber.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Sprinkle peri peri masala on the curd.",
          "imgs": [
            "s-peri-1",
            "s-peri-2"
          ]
        },
        {
          "t": "Add a pinch of salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Top with chopped coriander.",
          "imgs": [
            "s-cor-1",
            "s-cor-2",
            "s-cor-3"
          ]
        },
        {
          "t": "Heat oil in a pan and tip in the mixed veggies.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
          ]
        },
        {
          "t": "Stir fry the veggies.",
          "imgs": [
            "s-veg-3"
          ]
        },
        {
          "t": "Add the cooked rice.",
          "imgs": [
            "s-rice-1",
            "s-rice-2",
            "s-rice-3"
          ]
        },
        {
          "t": "Sprinkle oregano, chilli flakes and salt over the rice.",
          "imgs": [
            "s-sprinkle-1",
            "s-sprinkle-2",
            "s-sprinkle-3"
          ]
        },
        {
          "t": "Add chopped coriander.",
          "imgs": [
            "s-herb-1",
            "s-herb-2"
          ]
        },
        {
          "t": "Toss until everything is mixed.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Plate the rice with the paneer and the cucumber salad.",
          "imgs": [
            "s-plate-1",
            "s-plate-2",
            "s-plate-3"
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
      "id": "pan-fried-chickpea-salad",
      "name": "Pan-fried chickpea salad",
      "meal": "Breakfast",
      "minutes": 15,
      "protein": 20,
      "how": "Gas",
      "tools": "Non-stick pan, gas, knife",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1.5 cups (250 g), boiled",
          "n": "Chickpeas (kabuli chana), boiled",
          "tag": "chickpeas",
          "img": "i-chickpeas"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "1 small, sliced",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "1 medium, sliced",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "1 small (~100 g), cut in thin strips",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~2, sliced",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~2 tbsp, chopped",
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
          "q": "~1/2 tsp",
          "n": "Roasted cumin powder (or chaat masala)",
          "tag": "cumin-powder",
          "alt": [
            "chaat-masala"
          ],
          "img": "i-cumin"
        },
        {
          "q": "~1/2 lemon, juice",
          "n": "Lemon",
          "tag": "lemon",
          "img": "i-lemon"
        }
      ],
      "steps": [
        {
          "t": "Cut the cucumber into thin strips.",
          "imgs": [
            "s-cuc-1",
            "s-cuc-2",
            "s-cuc-3"
          ]
        },
        {
          "t": "Slice the tomato.",
          "imgs": [
            "s-tom-1",
            "s-tom-2"
          ]
        },
        {
          "t": "Slice the onion.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Heat a pan on the gas and add the oil.",
          "imgs": [
            "s-oil-1",
            "s-oil-2",
            "s-oil-3"
          ]
        },
        {
          "t": "Add the boiled chickpeas and fry, stirring often.",
          "imgs": [
            "s-fry-1",
            "s-fry-2",
            "s-fry-3",
            "s-fry-4"
          ]
        },
        {
          "t": "Add the sliced onion and tomato.",
          "imgs": [
            "s-ot-1",
            "s-ot-2"
          ]
        },
        {
          "t": "Add the cucumber strips.",
          "imgs": [
            "s-cuc2-1"
          ]
        },
        {
          "t": "Add the green chillies and chopped coriander.",
          "imgs": [
            "s-herb-1",
            "s-herb-2"
          ]
        },
        {
          "t": "Add salt and cumin powder, then squeeze in the lemon juice.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-lemon-1",
            "s-lemon-2"
          ]
        },
        {
          "t": "Toss everything together.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Serve on a plate.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-protein",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "guava-walnut-chutney",
      "name": "Roasted guava walnut chutney",
      "meal": "Side",
      "minutes": 20,
      "protein": 5,
      "how": "Gas",
      "tools": "Gas stove with wire rack, mortar and pestle (or mixie), knife, fork, brush",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 medium (~150 g)",
          "n": "Guava (amrood)",
          "tag": "guava",
          "img": "i-guava"
        },
        {
          "q": "~1/2 tsp, to brush the guava",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "1 inch piece, chopped",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "7 to 8 (~20 g), chopped",
          "n": "Walnuts (akhrot)",
          "tag": "walnuts",
          "img": "i-walnuts"
        },
        {
          "q": "2 to 3",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "a few leaves",
          "n": "Mint leaves (pudina)",
          "tag": "mint",
          "img": "i-mint"
        },
        {
          "q": "1 tsp",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-redchilli"
        },
        {
          "q": "1 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat"
        },
        {
          "q": "1 tsp",
          "n": "Roasted cumin powder (bhuna jeera)",
          "tag": "cumin-powder",
          "img": "i-jeera"
        },
        {
          "q": "~1/2 tsp, to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        }
      ],
      "steps": [
        {
          "t": "Prick the whole guava all over with a fork.",
          "imgs": [
            "s-prick-1",
            "s-prick-2",
            "s-prick-3"
          ]
        },
        {
          "t": "Rub a little oil on the guava with a brush.",
          "imgs": [
            "s-oil-1",
            "s-oil-2",
            "s-oil-3"
          ]
        },
        {
          "t": "Roast the guava directly on the gas flame, turning, until charred all over.",
          "imgs": [
            "s-roast-1",
            "s-roast-2",
            "s-roast-3"
          ]
        },
        {
          "t": "Take it off the flame and cut it into small pieces.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Put the guava pieces in a mortar.",
          "imgs": [
            "s-mortar-1",
            "s-mortar-2"
          ]
        },
        {
          "t": "Add the chopped ginger.",
          "imgs": [
            "s-ginger-1",
            "s-ginger-2"
          ]
        },
        {
          "t": "Add the walnuts.",
          "imgs": [
            "s-walnut-1",
            "s-walnut-2"
          ]
        },
        {
          "t": "Add the green chillies.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add the mint leaves.",
          "imgs": [
            "s-mint-1",
            "s-mint-2",
            "s-mint-3"
          ]
        },
        {
          "t": "Pound everything with the pestle into a coarse mash.",
          "imgs": [
            "s-pound-1",
            "s-pound-2",
            "s-pound-3"
          ]
        },
        {
          "t": "Squeeze in the lemon juice.",
          "imgs": [
            "s-lemon-1",
            "s-lemon-2"
          ]
        },
        {
          "t": "Add the red chilli powder.",
          "imgs": [
            "s-red-1",
            "s-red-2"
          ]
        },
        {
          "t": "Add the chaat masala.",
          "imgs": [
            "s-chaat-1",
            "s-chaat-2"
          ]
        },
        {
          "t": "Add the roasted cumin powder.",
          "imgs": [
            "s-jeera-1",
            "s-jeera-2"
          ]
        },
        {
          "t": "Add salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Mix everything well with a spoon.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Spoon the chutney out into a bowl.",
          "imgs": [
            "s-spoon-1",
            "s-spoon-2"
          ]
        },
        {
          "t": "Top with a mint leaf and serve.",
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
      "id": "jodhpuri-aloo-bites",
      "name": "Jodhpuri aloo bites",
      "meal": "Snack",
      "minutes": 40,
      "protein": 5,
      "how": "Gas",
      "tools": "Pan, steel pan, small grinder (mixie), spatula, bowl and plate",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tbsp",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-fennel"
        },
        {
          "q": "~1 tbsp",
          "n": "Coriander seeds (dhania)",
          "tag": "coriander-seeds",
          "img": "i-coriander-seeds"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "3",
          "n": "Dry red chillies",
          "tag": "dry-red-chilli",
          "img": "i-chilli"
        },
        {
          "q": "4 small (~400 g), boiled and peeled",
          "n": "Potatoes",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~1/2 tsp",
          "n": "Pink rock salt (or black salt)",
          "tag": "black-salt",
          "alt": [
            "salt"
          ],
          "img": "i-pinksalt"
        },
        {
          "q": "~2 tbsp",
          "n": "Corn flour",
          "tag": "corn-flour",
          "img": "i-starch"
        },
        {
          "q": "~2 tbsp, for shallow frying",
          "n": "Oil",
          "tag": "oil",
          "alt": [
            "ghee"
          ]
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-redchilli"
        },
        {
          "q": "~1 tsp",
          "n": "Sesame seeds (til)",
          "tag": "sesame-seeds",
          "img": "i-sesame"
        },
        {
          "q": "~1/2 tsp",
          "n": "Dry mango powder (amchur), or chaat masala",
          "tag": "amchur",
          "alt": [
            "chaat-masala"
          ],
          "img": "i-amchur"
        },
        {
          "q": "~2 tbsp, finely chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "1, finely chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-coriander",
          "opt": true
        },
        {
          "q": "~1/2 lemon",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon"
        }
      ],
      "steps": [
        {
          "t": "Dry roast the fennel seeds in a pan.",
          "imgs": [
            "s-roast-1",
            "s-roast-2"
          ]
        },
        {
          "t": "Add the coriander seeds and cumin seeds. Roast, stirring.",
          "imgs": [
            "s-coriander-1",
            "s-cumin-1"
          ]
        },
        {
          "t": "Add the dry red chillies and roast a little more.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Grind the roasted spices to a fine powder in a small grinder.",
          "imgs": [
            "s-grind-1",
            "s-grind-2",
            "s-grind-3"
          ]
        },
        {
          "t": "Put the boiled potatoes in a bowl. Sprinkle pink salt over them.",
          "imgs": [
            "s-potato-1",
            "s-salt-1"
          ]
        },
        {
          "t": "Add the corn flour.",
          "imgs": [
            "s-starch-1",
            "s-starch-2",
            "s-starch-3"
          ]
        },
        {
          "t": "Mash everything into a smooth dough.",
          "imgs": [
            "s-mash-1",
            "s-mash-2",
            "s-mash-3"
          ]
        },
        {
          "t": "Roll small balls from the dough.",
          "imgs": [
            "s-roll-1",
            "s-roll-2",
            "s-roll-3"
          ]
        },
        {
          "t": "Heat some oil in a steel pan. Place the balls in it.",
          "imgs": [
            "s-pan-1",
            "s-pan-2",
            "s-pan-3"
          ]
        },
        {
          "t": "Cook until the bottoms are golden. Flip and press each ball flat.",
          "imgs": [
            "s-flip-1",
            "s-flip-2",
            "s-flip-3"
          ]
        },
        {
          "t": "Fry both sides until golden and crisp.",
          "imgs": [
            "s-gold-1",
            "s-gold-2",
            "s-gold-3"
          ]
        },
        {
          "t": "Move the crisp potato rounds to a bowl.",
          "imgs": [
            "s-bowl-1",
            "s-bowl-2"
          ]
        },
        {
          "t": "Sprinkle the ground spice powder, red chilli powder and pink salt.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Add the sesame seeds and the pale dry mango powder.",
          "imgs": [
            "s-sesame-1",
            "s-sesame-2"
          ]
        },
        {
          "t": "Add the chopped coriander and green chilli.",
          "imgs": [
            "s-herb-1",
            "s-herb-2",
            "s-herb-3"
          ]
        },
        {
          "t": "Squeeze lemon juice over the top.",
          "imgs": [
            "s-lemon-1"
          ]
        },
        {
          "t": "Cover the bowl with a plate and shake well to coat. Serve hot.",
          "imgs": [
            "s-plate-1",
            "s-plate-2",
            "s-plate-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "credit": "Mrs Yum Tum (small watermark on the video)",
      "card": "card"
    },
    {
      "id": "smashed-potatoes-paneer-sauce",
      "name": "Smashed potatoes with paneer sauce",
      "meal": "Snack",
      "minutes": 50,
      "protein": 20,
      "how": "Gas",
      "tools": "Pan with lid, tawa, mixie (blender) jar, sieve, steel bowl, spoon, spatula",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~500 g (about 20 baby potatoes)",
          "n": "Baby potatoes",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "enough to cover the potatoes",
          "n": "Water, for boiling",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tsp in all (boiling water, sauce and batter)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~120 g (about 12 cubes)",
          "n": "Paneer, in cubes",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~3 tbsp",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~5 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~2 tbsp",
          "n": "Rice flour (chawal ka atta)",
          "tag": "rice-flour",
          "img": "i-riceflour"
        },
        {
          "q": "~2 tbsp",
          "n": "Corn flour",
          "tag": "corn-flour",
          "img": "i-cornflour"
        },
        {
          "q": "~1/4 cup, for the batter",
          "n": "Water, for the batter",
          "tag": "water",
          "img": "i-batterwater"
        },
        {
          "q": "~1 tbsp, very little",
          "n": "Oil, for the pan",
          "tag": "oil",
          "alt": [
            "ghee"
          ]
        },
        {
          "q": "~2 tbsp",
          "n": "Red onion, finely chopped",
          "tag": "onion",
          "img": "i-onion",
          "opt": true
        },
        {
          "q": "a small handful",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander",
          "opt": true
        },
        {
          "q": "a pinch",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Cut open the bag of baby potatoes.",
          "imgs": [
            "s-bag-1",
            "s-bag-2"
          ]
        },
        {
          "t": "Put the potatoes in a pan of water.",
          "imgs": [
            "s-water-1",
            "s-pot-1",
            "s-pot-2"
          ]
        },
        {
          "t": "Add salt to the water.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Cover and boil the potatoes until a knife goes in easily.",
          "imgs": [
            "s-boil-1",
            "s-boil-2",
            "s-boil-3"
          ]
        },
        {
          "t": "Drain the potatoes in a sieve.",
          "imgs": [
            "s-drain-1"
          ]
        },
        {
          "t": "For the sauce, put the paneer cubes in a mixie jar.",
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
          "t": "Add salt, garlic cloves and red chilli powder.",
          "imgs": [
            "s-add-1",
            "s-add-2",
            "s-add-3"
          ]
        },
        {
          "t": "Blend to a smooth, thick sauce.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Pour the sauce into a bowl.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Smash each potato flat with the base of a steel bowl.",
          "imgs": [
            "s-smash-1",
            "s-smash-2",
            "s-smash-3"
          ]
        },
        {
          "t": "Check that every potato is smashed flat.",
          "imgs": [
            "s-flat-1",
            "s-flat-2"
          ]
        },
        {
          "t": "In a bowl, put the rice flour and corn flour.",
          "imgs": [
            "s-flour-1",
            "s-flour-2",
            "s-flour-3",
            "s-flour-4"
          ]
        },
        {
          "t": "Add a pinch of salt and some water. Mix to a medium-thick batter.",
          "imgs": [
            "s-batter-1",
            "s-batter-2",
            "s-batter-3",
            "s-batter-4"
          ]
        },
        {
          "t": "Dip each smashed potato in the batter to coat it.",
          "imgs": [
            "s-dip-1",
            "s-dip-2",
            "s-dip-3"
          ]
        },
        {
          "t": "Heat a non-stick tawa with very little oil. Place the coated potatoes on it.",
          "imgs": [
            "s-pan-1",
            "s-pan-2",
            "s-pan-3"
          ]
        },
        {
          "t": "Cook until the bottoms are golden, then flip.",
          "imgs": [
            "s-flip-1",
            "s-flip-2"
          ]
        },
        {
          "t": "Cook until golden and crisp on both sides.",
          "imgs": [
            "s-gold-1",
            "s-gold-2",
            "s-gold-3"
          ]
        },
        {
          "t": "Arrange the crisp potatoes on a plate.",
          "imgs": [
            "s-plate-1"
          ]
        },
        {
          "t": "Pour the sauce over the potatoes.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2",
            "s-sauce-3",
            "s-sauce-4"
          ]
        },
        {
          "t": "Top with chopped onion, coriander and chilli flakes.",
          "imgs": [
            "s-top-1",
            "s-top-2",
            "s-top-3"
          ]
        },
        {
          "t": "Serve right away.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "beetroot-oats-chilla",
      "name": "Beetroot oats chilla",
      "meal": "Lunch or dinner",
      "minutes": 25,
      "protein": 15,
      "how": "Gas",
      "tools": "Mixie (blender), tawa, ladle or spoon, silicone brush, spatula",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup (45 g)",
          "n": "Rolled oats",
          "tag": "oats",
          "img": "i-oats"
        },
        {
          "q": "1 small (~80 g), peeled",
          "n": "Beetroot",
          "tag": "beetroot",
          "img": "i-beetroot"
        },
        {
          "q": "1",
          "n": "Amla (Indian gooseberry)",
          "tag": "amla",
          "img": "i-amla",
          "opt": true
        },
        {
          "q": "2 small pieces",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "2 small pieces",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "1",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-greenchilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 cup",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tsp (white and black)",
          "n": "Sesame seeds (til)",
          "tag": "sesame-seeds",
          "img": "i-sesame"
        },
        {
          "q": "~1 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 tsp",
          "n": "Oil",
          "tag": "oil",
          "alt": [
            "ghee"
          ],
          "img": "i-oil"
        },
        {
          "q": "~50 g (4 small slabs), seared",
          "n": "Paneer, for the lunchbox",
          "tag": "paneer",
          "img": "i-paneer",
          "opt": true
        },
        {
          "q": "~2 tbsp",
          "n": "Green chutney",
          "tag": "green-chutney",
          "img": "i-chutney",
          "opt": true
        },
        {
          "q": "a small handful",
          "n": "Mulberries (shahtoot)",
          "tag": "berries",
          "img": "i-berries",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the oats on a plate.",
          "imgs": [
            "s-oats-1",
            "s-oats-2"
          ]
        },
        {
          "t": "Add the beetroot and the amla.",
          "imgs": [
            "s-beet-1",
            "s-beet-2",
            "s-beet-3"
          ]
        },
        {
          "t": "Add the carrot, ginger, cumin seeds and green chilli.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
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
          "t": "Blend everything in the mixie to a smooth pink batter.",
          "imgs": [
            "s-batter-1"
          ]
        },
        {
          "t": "Pour a spoon of batter on a hot tawa.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Spread it in circles into a thin round.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Sprinkle white and black sesame seeds on top.",
          "imgs": [
            "s-sesame-1",
            "s-sesame-2",
            "s-sesame-3"
          ]
        },
        {
          "t": "Sprinkle the chopped coriander.",
          "imgs": [
            "s-herb-1",
            "s-herb-2"
          ]
        },
        {
          "t": "Drizzle a little oil over the top.",
          "imgs": [
            "s-oil-1",
            "s-oil-2",
            "s-oil-3"
          ]
        },
        {
          "t": "Brush the oil over the chilla.",
          "imgs": [
            "s-brush-1",
            "s-brush-2"
          ]
        },
        {
          "t": "Cook until the batter is set and the edges lift.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Lift the chilla off with a spatula and fold it in half.",
          "imgs": [
            "s-lift-1",
            "s-lift-2",
            "s-lift-3"
          ]
        },
        {
          "t": "Put the chilla in the lunchbox.",
          "imgs": [
            "s-box-1",
            "s-box-2"
          ]
        },
        {
          "t": "Add the seared paneer cubes.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Add a spoon of green chutney.",
          "imgs": [
            "s-chutney-1",
            "s-chutney-2",
            "s-chutney-3"
          ]
        },
        {
          "t": "Add the mulberries.",
          "imgs": [
            "s-berries-1",
            "s-berries-2"
          ]
        },
        {
          "t": "Close the lid.",
          "imgs": [
            "s-lid-1",
            "s-lid-2",
            "s-lid-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "credit": "Thenutricookhouse",
      "card": "card"
    },
    {
      "id": "fermented-ragi-dosa",
      "name": "Fermented ragi dosa",
      "meal": "Breakfast",
      "minutes": 40,
      "protein": 10,
      "how": "Gas",
      "tools": "Blender, cast iron tawa, ladle, spoon, spatula, sieve, glass bowl, plate for covering",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (150 g)",
          "n": "Ragi (finger millet) grains",
          "tag": "millet",
          "img": "i-ragi"
        },
        {
          "q": "~1/2 cup (100 g)",
          "n": "White grain (looks like urad dal or idli rice)",
          "tag": "urad-dal",
          "alt": [
            "rice"
          ],
          "img": "i-urad"
        },
        {
          "q": "~1 tsp",
          "n": "Fenugreek seeds (methi dana)",
          "tag": "fenugreek-seeds",
          "img": "i-methi"
        },
        {
          "q": "for washing, soaking and blending",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tsp, a thin drizzle per dosa",
          "n": "Oil or ghee",
          "tag": "oil",
          "alt": [
            "ghee"
          ],
          "img": "i-oil"
        },
        {
          "q": "a pinch per dosa",
          "n": "Chilli podi (red spice powder)",
          "tag": "podi-masala",
          "alt": [
            "red-chilli-powder"
          ],
          "img": "i-podi",
          "opt": true
        },
        {
          "q": "a small bowl",
          "n": "Green chutney, to serve",
          "tag": "green-chutney",
          "img": "i-chutney",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the ragi in a bowl.",
          "imgs": [
            "s-ragi-1",
            "s-ragi-2"
          ]
        },
        {
          "t": "Add the white grains.",
          "imgs": [
            "s-urad-1",
            "s-urad-2"
          ]
        },
        {
          "t": "Add the fenugreek seeds.",
          "imgs": [
            "s-methi-1",
            "s-methi-2"
          ]
        },
        {
          "t": "Pour in water.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Rub the grains with your hand to wash them.",
          "imgs": [
            "s-wash-1",
            "s-wash-2"
          ]
        },
        {
          "t": "Drain the water through a strainer.",
          "imgs": [
            "s-drain-1",
            "s-drain-2"
          ]
        },
        {
          "t": "Add fresh water to the grains.",
          "imgs": [
            "s-fresh-1",
            "s-fresh-2"
          ]
        },
        {
          "t": "Cover the bowl with a plate and leave the grains to soak.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Put the soaked grains in the blender jar. Add water.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
          ]
        },
        {
          "t": "Close the lid and blend to a smooth batter.",
          "imgs": [
            "s-blend-1",
            "s-blend-2",
            "s-blend-3"
          ]
        },
        {
          "t": "Pour the batter into a glass bowl.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Cover the bowl with a plate and leave the batter to ferment.",
          "imgs": [
            "s-ferment-1",
            "s-ferment-2",
            "s-ferment-3"
          ]
        },
        {
          "t": "Stir the fermented batter well.",
          "imgs": [
            "s-stir-1",
            "s-stir-2",
            "s-stir-3",
            "s-stir-4"
          ]
        },
        {
          "t": "Heat the cast iron tawa. Sprinkle a few drops of water on it.",
          "imgs": [
            "s-heat-1"
          ]
        },
        {
          "t": "Pour a ladle of batter in the middle of the tawa.",
          "imgs": [
            "s-batter-1",
            "s-batter-2"
          ]
        },
        {
          "t": "Spread the batter in circles with the back of the ladle.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3",
            "s-spread-4"
          ]
        },
        {
          "t": "Drizzle a little oil around the dosa.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Sprinkle the chilli podi on top.",
          "imgs": [
            "s-podi-1",
            "s-podi-2"
          ]
        },
        {
          "t": "Cook until crisp and brown. Loosen the dosa with a spatula.",
          "imgs": [
            "s-lift-1",
            "s-lift-2",
            "s-lift-3"
          ]
        },
        {
          "t": "Fold the dosa and serve with green chutney.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "make-ahead"
      ],
      "card": "card"
    },
    {
      "id": "leftover-roti-tacos",
      "name": "Leftover roti tacos",
      "meal": "Snack",
      "minutes": 30,
      "protein": 10,
      "how": "Gas + air fryer",
      "tools": "Pan, gas, air fryer, spatula, silicone brush",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tbsp (1 for the pan, 1 for brushing)",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "~1 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~1/2 tsp",
          "n": "Oregano",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "1 medium, sliced",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "1 medium, in strips",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "1 small, in thin strips",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "1 to 2, sliced",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-greenchilli"
        },
        {
          "q": "1 small, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1/4 cup",
          "n": "Sweet corn kernels",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~60 g (about 10 small cubes)",
          "n": "Paneer, in small cubes",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 tbsp",
          "n": "Tomato ketchup (or red chilli sauce)",
          "tag": "tomato-ketchup",
          "img": "i-sauce"
        },
        {
          "q": "3",
          "n": "Leftover rotis",
          "tag": "atta",
          "img": "i-roti"
        },
        {
          "q": "3 slices",
          "n": "Cheese slices",
          "tag": "cheese",
          "img": "i-cheese"
        }
      ],
      "steps": [
        {
          "t": "Melt the butter in a pan.",
          "imgs": [
            "s-butter-1"
          ]
        },
        {
          "t": "Add the chilli flakes.",
          "imgs": [
            "s-flakes-1",
            "s-flakes-2"
          ]
        },
        {
          "t": "Add the oregano and the black pepper.",
          "imgs": [
            "s-herb-1",
            "s-herb-2",
            "s-herb-3"
          ]
        },
        {
          "t": "Stir the spices in the butter.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Add the sliced onion.",
          "imgs": [
            "s-onion-1"
          ]
        },
        {
          "t": "Add the capsicum, carrot and green chilli.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
          ]
        },
        {
          "t": "Stir-fry the vegetables for a few minutes.",
          "imgs": [
            "s-stir-1",
            "s-stir-2",
            "s-stir-3"
          ]
        },
        {
          "t": "Add the chopped tomato.",
          "imgs": [
            "s-tomato-1"
          ]
        },
        {
          "t": "Add the sweet corn and the paneer cubes.",
          "imgs": [
            "s-corn-1",
            "s-corn-2"
          ]
        },
        {
          "t": "Stir well until everything is mixed.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Add the ketchup.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2",
            "s-sauce-3"
          ]
        },
        {
          "t": "Mix until the filling is coated and thick.",
          "imgs": [
            "s-done-1",
            "s-done-2"
          ]
        },
        {
          "t": "Spoon some filling on one half of a roti.",
          "imgs": [
            "s-fill-1"
          ]
        },
        {
          "t": "Put a cheese slice on the filling. Add a little more filling on top.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2"
          ]
        },
        {
          "t": "Fold the roti over and press it into a taco shape.",
          "imgs": [
            "s-fold-1",
            "s-fold-2",
            "s-fold-3",
            "s-fold-4"
          ]
        },
        {
          "t": "Place the tacos in the air fryer basket.",
          "imgs": [
            "s-basket-1",
            "s-basket-2",
            "s-basket-3"
          ]
        },
        {
          "t": "Brush the tops with melted butter.",
          "imgs": [
            "s-brush-1",
            "s-brush-2",
            "s-brush-3"
          ]
        },
        {
          "t": "Air fry until golden and crisp.",
          "imgs": [
            "s-air-1",
            "s-air-2",
            "s-air-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "air-fryer"
      ],
      "card": "card"
    },
    {
      "id": "spinach-tofu-roti",
      "name": "Spinach tofu roti",
      "meal": "Lunch or dinner",
      "minutes": 40,
      "protein": 10,
      "how": "Gas",
      "tools": "Mixie (blender), tawa, gas, rolling pin, tongs, bowl",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 cups packed (100 g), blanched",
          "n": "Spinach (palak)",
          "tag": "spinach",
          "img": "i-spinach"
        },
        {
          "q": "~100 g (5 to 6 cubes)",
          "n": "Firm tofu (or paneer), in cubes",
          "tag": "tofu",
          "alt": [
            "paneer"
          ],
          "img": "i-tofu"
        },
        {
          "q": "1 to 2",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "a big handful",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/4 cup",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~2 cups (250 g), plus extra to dust",
          "n": "Whole wheat flour (atta)",
          "tag": "atta",
          "img": "i-flour"
        },
        {
          "q": "a little",
          "n": "Ghee, for the cooked rotis",
          "tag": "ghee",
          "img": "i-ghee",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the blanched spinach in ice-cold water.",
          "imgs": [
            "s-ice-1",
            "s-ice-2"
          ]
        },
        {
          "t": "Take the spinach out and put it in the mixie jar.",
          "imgs": [
            "s-jar-1"
          ]
        },
        {
          "t": "Add the tofu cubes, green chilli and coriander leaves.",
          "imgs": [
            "s-add-1",
            "s-add-2",
            "s-add-3"
          ]
        },
        {
          "t": "Add a little water. Close the lid and blend to a smooth purée.",
          "imgs": [
            "s-blend-1",
            "s-blend-2",
            "s-blend-3"
          ]
        },
        {
          "t": "Put the whole wheat flour in a bowl. Pour the purée over it.",
          "imgs": [
            "s-flour-1",
            "s-flour-2"
          ]
        },
        {
          "t": "Mix and knead into a dough.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Roll a small ball of dough. Dip it in dry flour.",
          "imgs": [
            "s-ball-1",
            "s-ball-2"
          ]
        },
        {
          "t": "Roll it into a thin round roti.",
          "imgs": [
            "s-roll-1",
            "s-roll-2",
            "s-roll-3"
          ]
        },
        {
          "t": "Cook the roti on a hot tawa until it starts to bubble.",
          "imgs": [
            "s-tawa-1",
            "s-tawa-2",
            "s-tawa-3"
          ]
        },
        {
          "t": "Lift it with tongs and puff it over the flame.",
          "imgs": [
            "s-puff-1",
            "s-puff-2"
          ]
        },
        {
          "t": "Spread a little ghee on the hot rotis, if you like.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "credit": "Nutritionist_Edition",
      "card": "card"
    },
    {
      "id": "christmas-fruit-cake",
      "name": "Christmas fruit cake",
      "meal": "Snack",
      "minutes": 90,
      "protein": 5,
      "how": "Gas + oven",
      "tools": "Saucepan, non-stick pan, gas, bowl, whisk, sieve, spatula, cake tin, parchment paper, oven",
      "serves": 8,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup (120 ml)",
          "n": "Orange juice",
          "tag": "orange-juice",
          "img": "i-orangejuice"
        },
        {
          "q": "~1/4 cup, for the fruit and the caramel",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tbsp",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "~1/2 cup (75 g)",
          "n": "Raisins, black and golden",
          "tag": "raisins",
          "img": "i-raisins"
        },
        {
          "q": "~1/4 cup (40 g)",
          "n": "Dried cranberries",
          "tag": "cranberry",
          "img": "i-cranberry"
        },
        {
          "q": "~1/4 cup (40 g)",
          "n": "Tutti frutti (candied fruit)",
          "tag": "tutti-frutti",
          "img": "i-tutti"
        },
        {
          "q": "~1/2 cup (100 g)",
          "n": "Sugar, for the caramel",
          "tag": "sugar",
          "img": "i-sugar"
        },
        {
          "q": "~1/2 cup (120 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~1/4 cup (60 ml)",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 cup (100 g)",
          "n": "Brown sugar",
          "tag": "sugar",
          "alt": [
            "sugar"
          ],
          "img": "i-brownsugar"
        },
        {
          "q": "~1 1/2 cups (190 g)",
          "n": "Flour (maida)",
          "tag": "all-purpose-flour",
          "alt": [
            "atta"
          ],
          "img": "i-flour"
        },
        {
          "q": "~2 tbsp",
          "n": "Cocoa powder",
          "tag": "cocoa",
          "img": "i-cocoa"
        },
        {
          "q": "~1 tsp in all",
          "n": "Cake spice powders (cinnamon, nutmeg, ginger, clove)",
          "tag": "cinnamon",
          "img": "i-spices"
        },
        {
          "q": "~1 tsp",
          "n": "Baking powder",
          "tag": "baking-powder",
          "img": "i-bakingpowder",
          "alt": [
            "baking-soda"
          ]
        },
        {
          "q": "~1/4 cup (30 g)",
          "n": "Mixed nuts, chopped (almonds, cashews)",
          "tag": "almonds",
          "alt": [
            "cashews",
            "walnuts"
          ],
          "img": "i-nuts"
        }
      ],
      "steps": [
        {
          "t": "Pour the orange juice into a saucepan.",
          "imgs": [
            "s-juice-1",
            "s-juice-2"
          ]
        },
        {
          "t": "Add the water and the lemon juice.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Add the raisins, cranberries and tutti frutti.",
          "imgs": [
            "s-fruit-1",
            "s-fruit-2",
            "s-fruit-3"
          ]
        },
        {
          "t": "Heat and stir until the fruit has soaked up most of the juice.",
          "imgs": [
            "s-simmer-1",
            "s-simmer-2",
            "s-simmer-3"
          ]
        },
        {
          "t": "Put the sugar in a non-stick pan.",
          "imgs": [
            "s-sugar-1",
            "s-sugar-2"
          ]
        },
        {
          "t": "Heat the sugar until it melts and turns amber.",
          "imgs": [
            "s-melt-1",
            "s-melt-2"
          ]
        },
        {
          "t": "Carefully add water and stir until the caramel is smooth.",
          "imgs": [
            "s-cwater-1",
            "s-cwater-2",
            "s-cstir-1",
            "s-cstir-2"
          ]
        },
        {
          "t": "Pour the milk into a big bowl.",
          "imgs": [
            "s-milk-1"
          ]
        },
        {
          "t": "Add the oil.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add the brown sugar and whisk.",
          "imgs": [
            "s-bsugar-1",
            "s-bsugar-2",
            "s-bsugar-3"
          ]
        },
        {
          "t": "Pour in the caramel and whisk until smooth.",
          "imgs": [
            "s-caramel-1",
            "s-caramel-2",
            "s-caramel-3"
          ]
        },
        {
          "t": "Sift the flour into the bowl.",
          "imgs": [
            "s-flour-1",
            "s-flour-2",
            "s-flour-3"
          ]
        },
        {
          "t": "Add the cocoa powder.",
          "imgs": [
            "s-cocoa-1",
            "s-cocoa-2"
          ]
        },
        {
          "t": "Add the spice powders and the baking powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-bake-p-1",
            "s-bake-p-2"
          ]
        },
        {
          "t": "Mix everything into a smooth batter.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "Fold in the cooked fruit.",
          "imgs": [
            "s-fold-1",
            "s-fold-2",
            "s-fold-3"
          ]
        },
        {
          "t": "Add the chopped nuts and fold gently.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2",
            "s-nuts-3"
          ]
        },
        {
          "t": "Pour the batter into a cake tin lined with parchment paper.",
          "imgs": [
            "s-tin-1",
            "s-tin-2",
            "s-tin-3"
          ]
        },
        {
          "t": "Bake the cake. The video does not show the oven time or heat.",
          "imgs": [
            "s-bake-1"
          ]
        },
        {
          "t": "Let it cool, then peel off the paper.",
          "imgs": [
            "s-cool-1",
            "s-cool-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "air-fryer-soya-tikka",
      "name": "Air fryer soya tikka",
      "meal": "Snack",
      "minutes": 30,
      "protein": 15,
      "how": "Air fryer",
      "tools": "Air fryer, baking paper, tongs, spoons",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (60 g dry), soaked and squeezed",
          "n": "Soya chunks (mini)",
          "tag": "soya-chunks",
          "img": "i-soya"
        },
        {
          "q": "1 medium",
          "n": "Capsicum, cut in squares",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "1 medium",
          "n": "Onion, in petals",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 tbsp",
          "n": "Ginger garlic paste",
          "tag": "ginger",
          "alt": [
            "garlic"
          ],
          "img": "i-gingergarlic"
        },
        {
          "q": "~1/4 cup (60 g)",
          "n": "Curd (dahi), thick",
          "tag": "curd",
          "img": "i-curd"
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
          "q": "~1 tsp",
          "n": "Dried herb (looks like kasuri methi or oregano)",
          "tag": "kasuri-methi",
          "alt": [
            "oregano"
          ],
          "img": "i-herb",
          "opt": true
        },
        {
          "q": "~2 tbsp",
          "n": "Hot oil",
          "tag": "oil",
          "img": "i-oil"
        }
      ],
      "steps": [
        {
          "t": "Line the air fryer basket with baking paper. Put in the soaked soya chunks.",
          "imgs": [
            "s-put-1",
            "s-put-2"
          ]
        },
        {
          "t": "Add the capsicum pieces.",
          "imgs": [
            "s-cap-1",
            "s-cap-2"
          ]
        },
        {
          "t": "Add the onion petals.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the ginger garlic paste.",
          "imgs": [
            "s-gg-1",
            "s-gg-2"
          ]
        },
        {
          "t": "Add the curd.",
          "imgs": [
            "s-curd-1",
            "s-curd-2",
            "s-curd-3"
          ]
        },
        {
          "t": "Add the red chilli powder.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Sprinkle the salt and the dried herb on top.",
          "imgs": [
            "s-dry-1",
            "s-dry-2"
          ]
        },
        {
          "t": "Pour the hot oil over everything.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Toss well with tongs until everything is coated.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Slide the basket into the air fryer and set the timer.",
          "imgs": [
            "s-fryer-1",
            "s-fryer-2"
          ]
        },
        {
          "t": "Air fry until the soya chunks are golden and the edges are crisp.",
          "imgs": [
            "s-done-1",
            "s-done-2"
          ]
        }
      ],
      "tags": [
        "air-fryer"
      ],
      "card": "card"
    },
    {
      "id": "makhana-pomegranate-raita",
      "name": "Makhana pomegranate raita",
      "meal": "Side",
      "minutes": 10,
      "protein": 10,
      "how": "Gas",
      "tools": "Pan, gas, glass bowl, spoon",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 1/2 cups (350 g), thick",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1 cup (30 g)",
          "n": "Makhana (fox nuts)",
          "tag": "makhana",
          "img": "i-makhana"
        },
        {
          "q": "a pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/3 cup (50 g)",
          "n": "Pomegranate seeds",
          "tag": "pomegranate",
          "img": "i-pomegranate"
        },
        {
          "q": "a pinch",
          "n": "Spice mix (looks like black pepper and roasted cumin powder)",
          "tag": "black-pepper",
          "alt": [
            "cumin-powder",
            "chaat-masala"
          ],
          "img": "i-spice"
        }
      ],
      "steps": [
        {
          "t": "Put the thick curd in a glass bowl.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Dry roast the makhana in a pan, stirring, until crisp.",
          "imgs": [
            "s-roast-1",
            "s-roast-2"
          ]
        },
        {
          "t": "Sprinkle a pinch of salt over the roasted makhana.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Add the roasted makhana to the curd.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Add the pomegranate seeds on top.",
          "imgs": [
            "s-pom-1",
            "s-pom-2",
            "s-pom-3"
          ]
        },
        {
          "t": "Spoon a little more curd on top.",
          "imgs": [
            "s-curd2-1",
            "s-curd2-2"
          ]
        },
        {
          "t": "Sprinkle the spice mix over the top.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Mix gently and serve right away.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "quick"
      ],
      "card": "card"
    },
    {
      "id": "mushroom-broccoli-paneer-stir-fry",
      "name": "Mushroom broccoli paneer stir-fry",
      "meal": "Side",
      "minutes": 20,
      "protein": 15,
      "how": "Gas",
      "tools": "Kadhai, gas, spatula",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tsp",
          "n": "Oil or ghee",
          "tag": "oil",
          "alt": [
            "ghee"
          ]
        },
        {
          "q": "~8 small (150 g), halved",
          "n": "Button mushrooms",
          "tag": "mushroom",
          "img": "i-mushroom"
        },
        {
          "q": "1 medium, in cubes",
          "n": "Carrot (red carrot)",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~15 (100 g), cut in pieces",
          "n": "French beans",
          "tag": "beans",
          "img": "i-beans"
        },
        {
          "q": "~1 cup (100 g) florets",
          "n": "Broccoli",
          "tag": "broccoli",
          "img": "i-broccoli"
        },
        {
          "q": "~1 tbsp",
          "n": "Chilli sauce (schezwan chutney sachet)",
          "tag": "chilli-sauce",
          "img": "i-chilli-sauce"
        },
        {
          "q": "~1 tsp",
          "n": "Soy sauce",
          "tag": "soy-sauce",
          "img": "i-soy"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~100 g (8 cubes)",
          "n": "Paneer, in cubes",
          "tag": "paneer",
          "alt": [
            "tofu"
          ],
          "img": "i-paneer"
        }
      ],
      "steps": [
        {
          "t": "In a hot kadhai, add the halved mushrooms and carrot cubes.",
          "imgs": [
            "s-mush-1",
            "s-mush-2"
          ]
        },
        {
          "t": "Add the beans and stir.",
          "imgs": [
            "s-beans-1"
          ]
        },
        {
          "t": "Add the broccoli florets.",
          "imgs": [
            "s-broc-1",
            "s-broc-2"
          ]
        },
        {
          "t": "Squeeze in the chilli sauce.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Pour in the soy sauce.",
          "imgs": [
            "s-soy-1",
            "s-soy-2"
          ]
        },
        {
          "t": "Sprinkle the salt.",
          "imgs": [
            "s-salt-1"
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
          "t": "Toss until the paneer is lightly golden and coated with sauce.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Serve hot.",
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
      "id": "paneer-veggie-rice-paper-parcels",
      "name": "Paneer veggie rice paper parcels",
      "meal": "Lunch or dinner",
      "minutes": 40,
      "protein": 10,
      "how": "Gas",
      "tools": "Chopper, kadhai, tawa, spatula, spoon",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 medium (~80 g)",
          "n": "Carrot (red carrot)",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "1 small",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "1 small",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~4 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 tsp",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~100 g, crumbled",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Spice powder (grey-brown, not named in the video)",
          "tag": "garam-masala",
          "alt": [
            "black-pepper"
          ],
          "img": "i-spice"
        },
        {
          "q": "~1 tbsp",
          "n": "Chilli sauce (schezwan chutney sachet)",
          "tag": "chilli-sauce",
          "img": "i-chilli-sauce"
        },
        {
          "q": "~1 tsp",
          "n": "Soy sauce",
          "tag": "soy-sauce",
          "img": "i-soy"
        },
        {
          "q": "4 sheets",
          "n": "Rice paper sheets",
          "tag": "rice-paper",
          "img": "i-ricepaper"
        },
        {
          "q": "~2 tsp",
          "n": "Butter, for frying",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "~1/2 cup (120 g)",
          "n": "Curd, thick (for the dip)",
          "tag": "curd",
          "img": "i-curd",
          "opt": true
        },
        {
          "q": "~1 tbsp",
          "n": "Chilli sauce, for the dip",
          "tag": "chilli-sauce",
          "img": "i-dipsauce",
          "opt": true
        },
        {
          "q": "a splash",
          "n": "Water, for the dip",
          "tag": "water",
          "img": "i-water",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the carrot, capsicum, onion and garlic in a chopper.",
          "imgs": [
            "s-chop-1",
            "s-chop-2",
            "s-chop-3"
          ]
        },
        {
          "t": "Close the lid and chop everything small.",
          "imgs": [
            "s-chop-4"
          ]
        },
        {
          "t": "Heat a little ghee in a kadhai.",
          "imgs": [
            "s-ghee-1"
          ]
        },
        {
          "t": "Add the chopped vegetables and cook, stirring.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
          ]
        },
        {
          "t": "Crumble the paneer by hand into the kadhai.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Add the salt and the spice powder.",
          "imgs": [
            "s-season-1",
            "s-season-2"
          ]
        },
        {
          "t": "Add the chilli sauce and the soy sauce.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2"
          ]
        },
        {
          "t": "Mix well and cook until the filling is dry and crumbly.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Move the filling to a plate.",
          "imgs": [
            "s-plate-1"
          ]
        },
        {
          "t": "Dip a rice paper sheet in water for 2 seconds.",
          "imgs": [
            "s-paper-1",
            "s-paper-2",
            "s-paper-3"
          ]
        },
        {
          "t": "Put a spoon of filling near one edge of the wet sheet.",
          "imgs": [
            "s-fill-1"
          ]
        },
        {
          "t": "Fold the edges in towards the centre to make a flat parcel.",
          "imgs": [
            "s-fold-1",
            "s-fold-2",
            "s-fold-3"
          ]
        },
        {
          "t": "Repeat with the other sheets to make 4 parcels.",
          "imgs": [
            "s-parcels-1"
          ]
        },
        {
          "t": "Melt a little butter on a tawa. Place the parcels on it.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Shallow fry, flipping, until golden and crisp on both sides.",
          "imgs": [
            "s-flip-1",
            "s-flip-2",
            "s-flip-3"
          ]
        },
        {
          "t": "For the dip, put the curd in a small bowl. Add the chilli sauce.",
          "imgs": [
            "s-dip-1",
            "s-dip-2"
          ]
        },
        {
          "t": "Add a splash of water and stir to a smooth dip.",
          "imgs": [
            "s-dip-3",
            "s-dip-4",
            "s-dip-5"
          ]
        },
        {
          "t": "Serve the hot parcels with the dip.",
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
      "id": "roti-noodles-stir-fry",
      "name": "Roti noodles stir-fry",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 5,
      "how": "Gas",
      "tools": "Pan, kadhai, gas, pizza cutter, spatula, spoon",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "3 (leftover or fresh)",
          "n": "Rotis, wheat (atta)",
          "tag": "atta",
          "img": "i-roti"
        },
        {
          "q": "~1 tsp",
          "n": "Ghee, for the boiling water",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~4 cups, for boiling",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tsp in all",
          "n": "Salt (some for the water, some for the vegetables)",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 1/2 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~4 cloves, chopped",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-aromatics"
        },
        {
          "q": "~1 inch, chopped",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-aromatics"
        },
        {
          "q": "1, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-aromatics"
        },
        {
          "q": "1 medium, sliced",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "1 medium, red and green, in strips",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~2 cups (150 g), shredded",
          "n": "Cabbage",
          "tag": "cabbage",
          "img": "i-cabbage"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~2 tbsp",
          "n": "Schezwan masala (seasoning powder)",
          "tag": "schezwan-masala",
          "img": "i-masala"
        },
        {
          "q": "~1 tbsp",
          "n": "Red chilli sauce",
          "tag": "chilli-sauce",
          "img": "i-chillisauce"
        },
        {
          "q": "~1 tsp",
          "n": "Soy sauce",
          "tag": "soy-sauce",
          "img": "i-soy"
        },
        {
          "q": "~1 tsp",
          "n": "Vinegar",
          "tag": "vinegar",
          "img": "i-vinegar"
        }
      ],
      "steps": [
        {
          "t": "Fill a pan with water. Add the ghee and salt and bring to a boil.",
          "imgs": [
            "s-water-1",
            "s-ghee-1",
            "s-ghee-2"
          ]
        },
        {
          "t": "Put the roti in the boiling water.",
          "imgs": [
            "s-roti-1",
            "s-roti-2",
            "s-roti-3"
          ]
        },
        {
          "t": "Boil the roti for about 5 minutes.",
          "imgs": [
            "s-boil-1",
            "s-boil-2",
            "s-boil-3"
          ]
        },
        {
          "t": "Lift the roti out and let it cool on a board.",
          "imgs": [
            "s-lift-1",
            "s-lift-2",
            "s-lift-3"
          ]
        },
        {
          "t": "Cut the cooled roti into thin strips with a pizza cutter.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Separate the strips. These are your roti noodles.",
          "imgs": [
            "s-strips-1",
            "s-strips-2"
          ]
        },
        {
          "t": "Heat the oil in a kadhai.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the chopped garlic, ginger and green chilli.",
          "imgs": [
            "s-aro-1",
            "s-aro-2"
          ]
        },
        {
          "t": "Add the sliced onion and stir.",
          "imgs": [
            "s-onion-1",
            "s-onion-2",
            "s-onion-3"
          ]
        },
        {
          "t": "Add the red and green capsicum strips.",
          "imgs": [
            "s-cap-1",
            "s-cap-2"
          ]
        },
        {
          "t": "Add the shredded cabbage and stir-fry.",
          "imgs": [
            "s-cab-1",
            "s-cab-2",
            "s-cab-3"
          ]
        },
        {
          "t": "Add the salt and the black pepper.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Add the Schezwan masala.",
          "imgs": [
            "s-mas-1",
            "s-mas-2",
            "s-mas-3"
          ]
        },
        {
          "t": "Add the red chilli sauce.",
          "imgs": [
            "s-chs-1",
            "s-chs-2"
          ]
        },
        {
          "t": "Add the soy sauce.",
          "imgs": [
            "s-soy-1",
            "s-soy-2"
          ]
        },
        {
          "t": "Add the vinegar.",
          "imgs": [
            "s-vin-1"
          ]
        },
        {
          "t": "Toss the vegetables until they are coated with the sauces.",
          "imgs": [
            "s-toss-1",
            "s-toss-2"
          ]
        },
        {
          "t": "Add the roti noodles.",
          "imgs": [
            "s-nood-1",
            "s-nood-2",
            "s-nood-3"
          ]
        },
        {
          "t": "Toss well until the noodles are coated and hot.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Serve hot.",
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
      "id": "cheesy-corn-toast",
      "name": "Cheesy corn toast",
      "meal": "Snack",
      "minutes": 10,
      "protein": 15,
      "how": "Gas",
      "tools": "Pan, gas, grater, fork, knife",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "2 cubes (~50 g)",
          "n": "Cheese cubes",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "1, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1/4 cup (40 g)",
          "n": "Sweet corn kernels",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~1/2 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "a pinch",
          "n": "Black pepper",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1/2 tsp",
          "n": "Oregano",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "a pinch",
          "n": "Black salt",
          "tag": "black-salt",
          "img": "i-blacksalt"
        },
        {
          "q": "2 tbsp",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "1 slice",
          "n": "Bread",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "~1 tsp",
          "n": "Butter, for the pan",
          "tag": "butter",
          "img": "i-butter"
        }
      ],
      "steps": [
        {
          "t": "Unwrap the cheese cubes.",
          "imgs": [
            "s-unwrap-1",
            "s-unwrap-2",
            "s-unwrap-3"
          ]
        },
        {
          "t": "Grate the cheese onto a plate.",
          "imgs": [
            "s-grate-1",
            "s-grate-2"
          ]
        },
        {
          "t": "Add the chopped green chilli.",
          "imgs": [
            "s-chilli-1"
          ]
        },
        {
          "t": "Add the sweet corn.",
          "imgs": [
            "s-corn-1",
            "s-corn-2"
          ]
        },
        {
          "t": "Add the chilli flakes and the black pepper.",
          "imgs": [
            "s-flakes-1",
            "s-pepper-1"
          ]
        },
        {
          "t": "Add the oregano and the black salt.",
          "imgs": [
            "s-herbs-1",
            "s-herbs-2"
          ]
        },
        {
          "t": "Pour in 2 tablespoons of milk.",
          "imgs": [
            "s-milk-1"
          ]
        },
        {
          "t": "Mix well into a thick cheesy mixture.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Spread the mixture over a slice of bread with a fork.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Melt the butter on a pan.",
          "imgs": [
            "s-butter-1",
            "s-butter-2"
          ]
        },
        {
          "t": "Place the bread on the pan, filling side up.",
          "imgs": [
            "s-toast-1"
          ]
        },
        {
          "t": "Toast until the bottom is golden and the cheese melts.",
          "imgs": [
            "s-toast-2"
          ]
        },
        {
          "t": "Lift it onto a board and cut it into triangles.",
          "imgs": [
            "s-done-1",
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Serve hot.",
          "imgs": [
            "s-done-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "quick"
      ],
      "card": "card"
    },
    {
      "id": "makhana-peanut-chaat",
      "name": "Makhana peanut chaat",
      "meal": "Snack",
      "minutes": 20,
      "protein": 10,
      "how": "Gas",
      "tools": "Kadai, gas, steel mixing bowl",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3 cups (50 g)",
          "n": "Makhana (fox nuts)",
          "tag": "makhana",
          "img": "i-makhana"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 small, finely chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 small, finely chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1/2, chopped small",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "~1/3 cup (45 g)",
          "n": "Roasted peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "~2 tbsp",
          "n": "Mint and coriander green chutney",
          "tag": "green-chutney",
          "img": "i-green-chutney"
        },
        {
          "q": "~1 tbsp",
          "n": "Spicy Kashmiri chilli-garlic chutney",
          "tag": "chutney",
          "img": "i-chutney",
          "opt": true
        },
        {
          "q": "~3 tbsp (20 g)",
          "n": "Sev",
          "tag": "sev",
          "img": "i-sev"
        },
        {
          "q": "a handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        }
      ],
      "steps": [
        {
          "t": "Put a kadai on the gas stove.",
          "imgs": [
            "s-stove-1",
            "s-stove-2"
          ]
        },
        {
          "t": "Add the makhana to the kadai.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Dry roast the makhana, stirring all the time.",
          "imgs": [
            "s-roast-1",
            "s-roast-2"
          ]
        },
        {
          "t": "Press one makhana. When it breaks easily, it is crisp.",
          "imgs": [
            "s-test-1",
            "s-test-2"
          ]
        },
        {
          "t": "Take the makhana out. Put a little oil in the empty kadai.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the turmeric.",
          "imgs": [
            "s-turmeric-1",
            "s-turmeric-2"
          ]
        },
        {
          "t": "Add the red chilli powder.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add the chaat masala.",
          "imgs": [
            "s-chaat-1",
            "s-chaat-2"
          ]
        },
        {
          "t": "Mix the spices with the oil into a paste.",
          "imgs": [
            "s-paste-1",
            "s-paste-2",
            "s-paste-3"
          ]
        },
        {
          "t": "Add the salt and mix again.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Add the makhana back. Toss until every piece is coated.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Tip the spiced makhana into a steel bowl.",
          "imgs": [
            "s-bowl-1",
            "s-bowl-2"
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
          "t": "Add the cucumber.",
          "imgs": [
            "s-cucumber-1"
          ]
        },
        {
          "t": "Add the green chilli.",
          "imgs": [
            "s-gchilli-1",
            "s-gchilli-2"
          ]
        },
        {
          "t": "Add the roasted peanuts.",
          "imgs": [
            "s-peanuts-1",
            "s-peanuts-2"
          ]
        },
        {
          "t": "Add the green chutney.",
          "imgs": [
            "s-chutney-1",
            "s-chutney-2",
            "s-chutney-3"
          ]
        },
        {
          "t": "Add the red chilli-garlic chutney.",
          "imgs": [
            "s-rchutney-1",
            "s-rchutney-2"
          ]
        },
        {
          "t": "Heap the sev on top.",
          "imgs": [
            "s-sev-1",
            "s-sev-2"
          ]
        },
        {
          "t": "Toss everything together.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        },
        {
          "t": "Toss again until well mixed.",
          "imgs": [
            "s-toss2-1",
            "s-toss2-2",
            "s-toss2-3"
          ]
        },
        {
          "t": "Heap it in a bowl and eat at once.",
          "imgs": [
            "s-final-1",
            "s-final-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-fibre"
      ],
      "credit": "@shanknagkam_pureveg_food",
      "card": "card"
    },
    {
      "id": "sabudana-fruit-custard",
      "name": "Sabudana fruit custard",
      "meal": "Snack",
      "minutes": 40,
      "protein": 10,
      "how": "Gas",
      "tools": "Pan, gas, glass bowl, fridge",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1/4 cup (45 g), soaked 4 to 5 hours",
          "n": "Sabudana (sago)",
          "tag": "sabudana",
          "img": "i-sabudana"
        },
        {
          "q": "~3 cups (750 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "a pinch (8 to 10 strands)",
          "n": "Saffron (kesar)",
          "tag": "saffron",
          "img": "i-saffron",
          "opt": true
        },
        {
          "q": "a pinch (~1/4 tsp)",
          "n": "Cardamom powder (elaichi)",
          "tag": "cardamom",
          "img": "i-cardamom"
        },
        {
          "q": "~4 tbsp, to taste",
          "n": "Sugar",
          "tag": "sugar",
          "img": "i-sugar"
        },
        {
          "q": "~1 medium",
          "n": "Banana",
          "tag": "banana",
          "img": "i-banana",
          "alt": [
            "apple",
            "grapes"
          ]
        },
        {
          "q": "~1 medium",
          "n": "Apple",
          "tag": "apple",
          "img": "i-apple",
          "alt": [
            "banana",
            "grapes"
          ]
        },
        {
          "q": "~1/2 cup (75 g)",
          "n": "Green grapes",
          "tag": "grapes",
          "img": "i-ggrapes",
          "alt": [
            "apple",
            "banana"
          ]
        },
        {
          "q": "~1/2 cup (75 g)",
          "n": "Black grapes",
          "tag": "grapes",
          "img": "i-bgrapes",
          "alt": [
            "apple",
            "banana"
          ]
        },
        {
          "q": "~1/2 cup",
          "n": "Pomegranate seeds",
          "tag": "pomegranate",
          "img": "i-pom",
          "alt": [
            "grapes"
          ]
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Dry fruits (almonds, cashews)",
          "tag": "almonds",
          "img": "i-nuts",
          "alt": [
            "cashews"
          ],
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Soak the sabudana in water for 4 to 5 hours.",
          "imgs": [
            "s-soak-1"
          ]
        },
        {
          "t": "Pour the milk into a pan on the gas.",
          "imgs": [
            "s-milk-1",
            "s-milk-2",
            "s-milk-3"
          ]
        },
        {
          "t": "Add the soaked sabudana.",
          "imgs": [
            "s-sabu-1",
            "s-sabu-2"
          ]
        },
        {
          "t": "Add the saffron.",
          "imgs": [
            "s-saffron-1",
            "s-saffron-2"
          ]
        },
        {
          "t": "Stir often on the gas until the milk turns thick.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Add the cardamom powder.",
          "imgs": [
            "s-cardamom-1"
          ]
        },
        {
          "t": "Add the sugar and stir until it melts.",
          "imgs": [
            "s-sugar-1",
            "s-sugar-2",
            "s-sugar-3"
          ]
        },
        {
          "t": "Cook, stirring, until the custard is thick and creamy.",
          "imgs": [
            "s-thick-1",
            "s-thick-2"
          ]
        },
        {
          "t": "Pour the custard into a glass bowl.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Chill it in the fridge for 2 hours.",
          "imgs": [
            "s-chill-1"
          ]
        },
        {
          "t": "Peel the banana and cut it into slices.",
          "imgs": [
            "s-banana-1",
            "s-banana-2"
          ]
        },
        {
          "t": "Cut the apple into small cubes.",
          "imgs": [
            "s-apple-1",
            "s-apple-2",
            "s-apple-3"
          ]
        },
        {
          "t": "Cut the green grapes in half.",
          "imgs": [
            "s-ggrapes-1",
            "s-ggrapes-2"
          ]
        },
        {
          "t": "Cut the black grapes in half.",
          "imgs": [
            "s-bgrapes-1"
          ]
        },
        {
          "t": "Break open the pomegranate and take out the seeds.",
          "imgs": [
            "s-pom-1",
            "s-pom-2"
          ]
        },
        {
          "t": "Take the chilled custard out of the fridge.",
          "imgs": [
            "s-chilled-1"
          ]
        },
        {
          "t": "Add the pomegranate seeds on top.",
          "imgs": [
            "s-padd-1"
          ]
        },
        {
          "t": "Add the chopped banana and apple.",
          "imgs": [
            "s-fadd-1",
            "s-fadd-2"
          ]
        },
        {
          "t": "Add the green grapes and black grapes.",
          "imgs": [
            "s-gadd-1",
            "s-gadd-2",
            "s-gadd-3"
          ]
        },
        {
          "t": "Sprinkle the chopped dry fruits on top.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2"
          ]
        },
        {
          "t": "Mix gently. Serve chilled.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
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
      "id": "cheesy-masala-macaroni",
      "name": "Cheesy masala macaroni",
      "meal": "Lunch or dinner",
      "minutes": 20,
      "protein": 10,
      "how": "Gas",
      "tools": "Kadai, gas, spoon",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "3 slices",
          "n": "Cheese slices",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "~1 tbsp (10 g)",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "~2 tbsp",
          "n": "Tomato sauce (ketchup)",
          "tag": "tomato-ketchup",
          "img": "i-ketchup"
        },
        {
          "q": "~1 tbsp",
          "n": "Schezwan sauce",
          "tag": "schezwan-sauce",
          "img": "i-schezwan"
        },
        {
          "q": "~1 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~1 tsp",
          "n": "Oregano",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "1 sachet (~6 g)",
          "n": "Seasoning masala (Maggi Masala-ae-Magic)",
          "tag": "seasoning-masala",
          "img": "i-maggi",
          "alt": [
            "chaat-masala"
          ]
        },
        {
          "q": "~1/4 tsp",
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
          "q": "~1/2 cup",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~1.5 cups, boiled (~75 g dry)",
          "n": "Macaroni pasta, boiled and drained",
          "tag": "pasta",
          "img": "i-macaroni"
        },
        {
          "q": "a few leaves, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put the cheese slices in a kadai. Keep the gas off.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2",
            "s-cheese-3"
          ]
        },
        {
          "t": "Add the butter.",
          "imgs": [
            "s-butter-1",
            "s-butter-2"
          ]
        },
        {
          "t": "Add the tomato sauce.",
          "imgs": [
            "s-ketchup-1",
            "s-ketchup-2"
          ]
        },
        {
          "t": "Add the schezwan sauce.",
          "imgs": [
            "s-schezwan-1",
            "s-schezwan-2"
          ]
        },
        {
          "t": "Sprinkle on the chilli flakes.",
          "imgs": [
            "s-flakes-1",
            "s-flakes-2"
          ]
        },
        {
          "t": "Sprinkle on the oregano.",
          "imgs": [
            "s-oregano-1",
            "s-oregano-2"
          ]
        },
        {
          "t": "Add the Maggi masala.",
          "imgs": [
            "s-maggi-1",
            "s-maggi-2",
            "s-maggi-3"
          ]
        },
        {
          "t": "Add the salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Add the red chilli powder.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Switch the gas on. Stir until the cheese melts into a sauce.",
          "imgs": [
            "s-melt-1",
            "s-melt-2",
            "s-melt-3"
          ]
        },
        {
          "t": "Pour in the milk and stir well.",
          "imgs": [
            "s-milk-1",
            "s-milk-2",
            "s-milk-3"
          ]
        },
        {
          "t": "Keep stirring until the sauce is smooth and creamy.",
          "imgs": [
            "s-creamy-1",
            "s-creamy-2"
          ]
        },
        {
          "t": "Add the boiled macaroni.",
          "imgs": [
            "s-pasta-1",
            "s-pasta-2"
          ]
        },
        {
          "t": "Mix until every piece of macaroni is coated.",
          "imgs": [
            "s-pasta-3",
            "s-pasta-4"
          ]
        },
        {
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        },
        {
          "t": "Stir it in.",
          "imgs": [
            "s-stir-1"
          ]
        },
        {
          "t": "Serve hot.",
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
      "id": "paneer-pizza-toast",
      "name": "Paneer pizza toast",
      "meal": "Snack",
      "minutes": 15,
      "protein": 20,
      "how": "Gas",
      "tools": "Non-stick pan with lid, gas, plate, small steel bowl",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tbsp",
          "n": "Tomato sauce (ketchup)",
          "tag": "tomato-ketchup",
          "img": "i-ketchup"
        },
        {
          "q": "~1 tbsp",
          "n": "Mayonnaise (check for the green dot on the pack)",
          "tag": "mayonnaise",
          "img": "i-mayo"
        },
        {
          "q": "~1 tbsp",
          "n": "Veg mayonnaise (the flavoured orange-brown one)",
          "tag": "mayonnaise",
          "img": "i-vegmayo"
        },
        {
          "q": "~1/2 tsp, plus a pinch for the top",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~1/2 tsp, plus a pinch for the top",
          "n": "Oregano",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "~10 small cubes (60 g)",
          "n": "Paneer, cubed",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "1 slice",
          "n": "Bread",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "~1/3 cup (35 g)",
          "n": "Mozzarella cheese, grated",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "~1 tsp",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        }
      ],
      "steps": [
        {
          "t": "Squeeze the tomato sauce onto a plate.",
          "imgs": [
            "s-ketchup-1",
            "s-ketchup-2"
          ]
        },
        {
          "t": "Squeeze the mayonnaise on top of the sauce.",
          "imgs": [
            "s-mayo-1",
            "s-mayo-2"
          ]
        },
        {
          "t": "Squeeze the veg mayonnaise on top.",
          "imgs": [
            "s-vegmayo-1",
            "s-vegmayo-2"
          ]
        },
        {
          "t": "Sprinkle on the chilli flakes.",
          "imgs": [
            "s-flakes-1",
            "s-flakes-2"
          ]
        },
        {
          "t": "Sprinkle on the oregano.",
          "imgs": [
            "s-oregano-1"
          ]
        },
        {
          "t": "Mix everything into one smooth sauce.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
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
          "t": "Mix until the paneer is covered in sauce.",
          "imgs": [
            "s-coat-1",
            "s-coat-2"
          ]
        },
        {
          "t": "Spread the paneer on a slice of bread.",
          "imgs": [
            "s-bread-1",
            "s-bread-2",
            "s-bread-3"
          ]
        },
        {
          "t": "Cover it with grated mozzarella.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2",
            "s-cheese-3"
          ]
        },
        {
          "t": "Sprinkle oregano and chilli flakes on top.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Melt the butter in a non-stick pan.",
          "imgs": [
            "s-butter-1",
            "s-butter-2"
          ]
        },
        {
          "t": "Lift the toast into the pan.",
          "imgs": [
            "s-pan-1",
            "s-pan-2",
            "s-pan-3"
          ]
        },
        {
          "t": "Put a small steel bowl on the pan. Cover with a lid.",
          "imgs": [
            "s-lid-1",
            "s-lid-2",
            "s-lid-3"
          ]
        },
        {
          "t": "Cook until the cheese melts. Lift the toast onto a board.",
          "imgs": [
            "s-done-1",
            "s-done-2"
          ]
        },
        {
          "t": "Cut it in half and eat hot.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "quick",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "beetroot-dhokla",
      "name": "Beetroot dhokla",
      "meal": "Snack",
      "minutes": 40,
      "protein": 5,
      "how": "Gas",
      "tools": "Mixie, steamer pan with stand, round tin, small pan, gas",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 medium (120 g), chopped",
          "n": "Beetroot",
          "tag": "beetroot",
          "img": "i-beetroot"
        },
        {
          "q": "3/4 cup in all",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 cup (100 g), 2 scoops",
          "n": "Besan (gram flour)",
          "tag": "besan",
          "img": "i-besan"
        },
        {
          "q": "1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "1/2 tsp",
          "n": "Sugar",
          "tag": "sugar",
          "img": "i-sugar"
        },
        {
          "q": "a little",
          "n": "Lime juice",
          "tag": "lemon",
          "img": "i-lime"
        },
        {
          "q": "1 sachet (~5 g)",
          "n": "Eno fruit salt",
          "tag": "fruit-salt",
          "img": "i-eno",
          "alt": [
            "baking-soda"
          ]
        },
        {
          "q": "~1 tbsp",
          "n": "Oil, for the tadka",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp in all",
          "n": "Mustard seeds (black, and pale yellow ones)",
          "tag": "mustard-seeds",
          "img": "i-mustard"
        },
        {
          "q": "~2",
          "n": "Green chillies, sliced",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~8 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry"
        },
        {
          "q": "~1 tsp",
          "n": "Sesame seeds",
          "tag": "sesame-seeds",
          "img": "i-sesame"
        },
        {
          "q": "2 slices",
          "n": "Lime, sliced, to serve",
          "tag": "lemon",
          "opt": true,
          "img": "i-limeslice"
        }
      ],
      "steps": [
        {
          "t": "Put the chopped beetroot in the mixie jar.",
          "imgs": [
            "s-beet-1",
            "s-beet-2"
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
          "t": "Blend to a smooth puree.",
          "imgs": [
            "s-puree-1"
          ]
        },
        {
          "t": "Put the besan in a bowl. Use 2 scoops.",
          "imgs": [
            "s-besan-1",
            "s-besan-2",
            "s-besan-3"
          ]
        },
        {
          "t": "Pour the beetroot puree over the besan.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Whisk to a smooth batter.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2",
            "s-whisk-3"
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
          "t": "Add the sugar.",
          "imgs": [
            "s-sugar-1",
            "s-sugar-2"
          ]
        },
        {
          "t": "Mix well with a fork.",
          "imgs": [
            "s-fork-1",
            "s-fork-2"
          ]
        },
        {
          "t": "Squeeze in the lime juice.",
          "imgs": [
            "s-lime-1"
          ]
        },
        {
          "t": "Sprinkle the Eno on top.",
          "imgs": [
            "s-eno-1",
            "s-eno-2",
            "s-eno-3"
          ]
        },
        {
          "t": "Set a round tin on a stand in a pan of boiling water.",
          "imgs": [
            "s-tin-1"
          ]
        },
        {
          "t": "Pour the batter into the tin.",
          "imgs": [
            "s-batter-1",
            "s-batter-2"
          ]
        },
        {
          "t": "Cover the pan with a lid and steam.",
          "imgs": [
            "s-steam-1",
            "s-steam-2"
          ]
        },
        {
          "t": "Lift the lid. The dhokla has risen and is set.",
          "imgs": [
            "s-done-1",
            "s-done-2"
          ]
        },
        {
          "t": "Take the dhokla out of the tin onto a board.",
          "imgs": [
            "s-out-1",
            "s-out-2",
            "s-out-3"
          ]
        },
        {
          "t": "Heat the oil in a small pan.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the mustard seeds.",
          "imgs": [
            "s-mustard-1",
            "s-mustard-2",
            "s-mustard-3"
          ]
        },
        {
          "t": "Add the sliced green chillies.",
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
          "t": "Add the sesame seeds.",
          "imgs": [
            "s-sesame-1",
            "s-sesame-2"
          ]
        },
        {
          "t": "Pour the hot tadka over the dhokla.",
          "imgs": [
            "s-tadka-1",
            "s-tadka-2"
          ]
        },
        {
          "t": "Cut into pieces. Serve with lime slices.",
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
      "credit": "@curlytales",
      "card": "card"
    },
    {
      "id": "tandoori-paneer-sliders",
      "name": "Tandoori paneer sliders",
      "meal": "Snack",
      "minutes": 35,
      "protein": 20,
      "how": "Air fryer",
      "tools": "Air fryer, plate, silicone brush, fork, knife",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~150 g, in small cubes",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 small, chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1/3 cup",
          "n": "Tandoori sauce (thick, orange)",
          "tag": "tandoori-sauce",
          "img": "i-sauce"
        },
        {
          "q": "1 block of 6 joined buns",
          "n": "Ladi pav (soft buns)",
          "tag": "pav",
          "img": "i-pav",
          "alt": [
            "bread"
          ]
        },
        {
          "q": "~1.5 tbsp, melted",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter",
          "alt": [
            "oil"
          ]
        },
        {
          "q": "~1 medium, in slices",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~4 slices",
          "n": "Cheese slices",
          "tag": "cheese",
          "img": "i-cheese"
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
          "img": "i-flakes"
        },
        {
          "q": "~3 tbsp",
          "n": "Green chutney",
          "tag": "green-chutney",
          "img": "i-chutney"
        }
      ],
      "steps": [
        {
          "t": "Put the paneer cubes on a plate.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
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
          "t": "Pour the tandoori sauce over the paneer.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2"
          ]
        },
        {
          "t": "Mix well so the paneer is coated.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Cut the block of pav in half sideways.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Put the bottom half in the air fryer basket.",
          "imgs": [
            "s-base-1",
            "s-base-2"
          ]
        },
        {
          "t": "Brush the top of it with melted butter.",
          "imgs": [
            "s-butter-1",
            "s-butter-2",
            "s-butter-3"
          ]
        },
        {
          "t": "Air fry the base until golden.",
          "imgs": [
            "s-toast-1",
            "s-toast-2"
          ]
        },
        {
          "t": "Spread the paneer mix on the toasted base.",
          "imgs": [
            "s-spread-1",
            "s-spread-2"
          ]
        },
        {
          "t": "Lay the tomato slices on top.",
          "imgs": [
            "s-tomato-1",
            "s-tomato-2"
          ]
        },
        {
          "t": "Cover with the cheese slices.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2",
            "s-cheese-3"
          ]
        },
        {
          "t": "Sprinkle on the oregano and chilli flakes.",
          "imgs": [
            "s-season-1",
            "s-season-2",
            "s-season-3"
          ]
        },
        {
          "t": "Spread green chutney on the cut side of the top half of pav.",
          "imgs": [
            "s-chutney-1",
            "s-chutney-2",
            "s-chutney-3"
          ]
        },
        {
          "t": "Flip the top half over onto the cheese, chutney side down.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Press down. Mark the lines between the buns with a fork.",
          "imgs": [
            "s-press-1",
            "s-press-2",
            "s-press-3"
          ]
        },
        {
          "t": "Brush the tops of the buns with melted butter.",
          "imgs": [
            "s-brush-1",
            "s-brush-2",
            "s-brush-3"
          ]
        },
        {
          "t": "Air fry again until the buns are golden brown.",
          "imgs": [
            "s-bake-1",
            "s-bake-2"
          ]
        },
        {
          "t": "Cut along the lines into 6 sliders.",
          "imgs": [
            "s-slice-1",
            "s-slice-2",
            "s-slice-3"
          ]
        },
        {
          "t": "Lift out a slider and eat hot.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "air-fryer",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "heart-chocolate-dates",
      "name": "Heart chocolate dates",
      "meal": "Snack",
      "minutes": 30,
      "protein": 5,
      "how": "Gas",
      "tools": "Knife, fork, bowl, lined tray, piping bag, small brush",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~12 large",
          "n": "Dates (Medjool), pitted",
          "tag": "dates",
          "img": "i-dates"
        },
        {
          "q": "~12 whole",
          "n": "Almonds",
          "tag": "almonds",
          "img": "i-almonds"
        },
        {
          "q": "~150 g, melted",
          "n": "Chocolate (milk or dark)",
          "tag": "chocolate",
          "img": "i-chocolate",
          "alt": [
            "chocolate-chips"
          ]
        },
        {
          "q": "~30 g, melted",
          "n": "White chocolate",
          "tag": "white-chocolate",
          "img": "i-white"
        },
        {
          "q": "~2 tbsp",
          "n": "Flaked almonds",
          "tag": "almonds",
          "img": "i-flakes",
          "opt": true
        },
        {
          "q": "a pinch",
          "n": "Edible gold dust",
          "tag": "edible-gold",
          "img": "i-gold",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Cut a date in two.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Put a whole almond between the two pieces.",
          "imgs": [
            "s-almond-1",
            "s-almond-2"
          ]
        },
        {
          "t": "Press the pieces together into a heart shape.",
          "imgs": [
            "s-heart-1",
            "s-heart-2",
            "s-heart-3"
          ]
        },
        {
          "t": "Dip the heart in the melted chocolate.",
          "imgs": [
            "s-dip-1",
            "s-dip-2"
          ]
        },
        {
          "t": "Turn it with a fork until it is fully coated.",
          "imgs": [
            "s-turn-1",
            "s-turn-2",
            "s-turn-3"
          ]
        },
        {
          "t": "Lift it out and let the extra chocolate drip off.",
          "imgs": [
            "s-lift-1",
            "s-lift-2"
          ]
        },
        {
          "t": "Place it on a lined tray.",
          "imgs": [
            "s-tray-1",
            "s-tray-2",
            "s-tray-3"
          ]
        },
        {
          "t": "Drizzle melted white chocolate on top.",
          "imgs": [
            "s-drizzle-1",
            "s-drizzle-2",
            "s-drizzle-3"
          ]
        },
        {
          "t": "Press a few flaked almonds on top.",
          "imgs": [
            "s-flake-1",
            "s-flake-2"
          ]
        },
        {
          "t": "Brush on a little gold dust.",
          "imgs": [
            "s-gold-1",
            "s-gold-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "credit": "chefburcinarda",
      "card": "card"
    },
    {
      "id": "dahi-vada-cake",
      "name": "Dahi vada cake",
      "meal": "Snack",
      "minutes": 120,
      "protein": 15,
      "how": "Gas",
      "tools": "Mixie, hand mixer, steamer, round cake tin with paper, piping bags, palette knife",
      "serves": 6,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup (100 g)",
          "n": "Urad dal (white split)",
          "tag": "urad-dal",
          "img": "i-urad"
        },
        {
          "q": "~1/2 cup (100 g)",
          "n": "Moong dal (yellow split)",
          "tag": "moong-dal",
          "img": "i-moong",
          "alt": [
            "masoor-dal"
          ]
        },
        {
          "q": "1 to 2 cubes",
          "n": "Ice cubes",
          "tag": "ice",
          "img": "i-ice"
        },
        {
          "q": "~1/2 tsp",
          "n": "Roasted cumin powder",
          "tag": "cumin-powder",
          "img": "i-cumin"
        },
        {
          "q": "~1 tsp in all",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "1 sachet (~5 g)",
          "n": "Eno fruit salt",
          "tag": "fruit-salt",
          "img": "i-eno",
          "alt": [
            "baking-soda"
          ]
        },
        {
          "q": "~1/2 cup",
          "n": "Water, for the syrup",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "a pinch",
          "n": "Hing (asafoetida)",
          "tag": "hing",
          "img": "i-hing"
        },
        {
          "q": "~2 tbsp",
          "n": "Jaggery powder",
          "tag": "jaggery",
          "img": "i-jaggery",
          "alt": [
            "sugar"
          ]
        },
        {
          "q": "~2 cups (400 g), thick",
          "n": "Hung curd, whisked smooth",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~3 tbsp",
          "n": "Green chutney",
          "tag": "green-chutney",
          "img": "i-green"
        },
        {
          "q": "~3 tbsp",
          "n": "Sweet tamarind chutney (imli)",
          "tag": "tamarind-chutney",
          "img": "i-tamarind"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/3 cup",
          "n": "Pomegranate seeds",
          "tag": "pomegranate",
          "img": "i-pom"
        },
        {
          "q": "~1/2 cup",
          "n": "Sev",
          "tag": "sev",
          "img": "i-sev"
        },
        {
          "q": "~1/4 cup, whisked",
          "n": "Curd, to pour on the plate",
          "tag": "curd",
          "opt": true,
          "img": "i-curd2"
        }
      ],
      "steps": [
        {
          "t": "Fill a cup with urad dal. Tip it into a bowl.",
          "imgs": [
            "s-urad-1",
            "s-urad-2"
          ]
        },
        {
          "t": "Fill the cup with moong dal. Tip it in.",
          "imgs": [
            "s-moong-1",
            "s-moong-2"
          ]
        },
        {
          "t": "Soak both dals in water for 4 to 5 hours. Drain well.",
          "imgs": [
            "s-soak-1"
          ]
        },
        {
          "t": "Put the dal and the ice cubes in a mixie jar.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
          ]
        },
        {
          "t": "Blend to a thick, smooth batter.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Beat the batter with a hand mixer until light and fluffy.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2"
          ]
        },
        {
          "t": "Add the salt and roasted cumin powder. Fold in.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Drop a little batter in a bowl of water. It should float.",
          "imgs": [
            "s-float-1",
            "s-float-2"
          ]
        },
        {
          "t": "Add the Eno on top of the batter.",
          "imgs": [
            "s-eno-1",
            "s-eno-2"
          ]
        },
        {
          "t": "Pour a little water over the Eno.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Fold gently until the foam mixes in.",
          "imgs": [
            "s-fold-1",
            "s-fold-2"
          ]
        },
        {
          "t": "Pour the batter into a round tin lined with paper. Spread it flat.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Put the tin in a steamer.",
          "imgs": [
            "s-steam-1",
            "s-steam-2"
          ]
        },
        {
          "t": "Cover and steam until the cake is set.",
          "imgs": [
            "s-steam-3",
            "s-steam-4"
          ]
        },
        {
          "t": "Turn the cake out of the tin. Peel off the paper.",
          "imgs": [
            "s-out-1",
            "s-out-3"
          ]
        },
        {
          "t": "Cut the cake in half sideways into 2 layers. Let it cool.",
          "imgs": [
            "s-cake-1",
            "s-cake-2"
          ]
        },
        {
          "t": "Add the salt to a bowl of water.",
          "imgs": [
            "s-syrup-1"
          ]
        },
        {
          "t": "Add the hing.",
          "imgs": [
            "s-syrup-2"
          ]
        },
        {
          "t": "Add the jaggery powder.",
          "imgs": [
            "s-syrup-4"
          ]
        },
        {
          "t": "Stir until the jaggery melts into a thin syrup.",
          "imgs": [
            "s-syrup-6"
          ]
        },
        {
          "t": "Drizzle the syrup over one cake layer.",
          "imgs": [
            "s-soak-l1",
            "s-soak-l2"
          ]
        },
        {
          "t": "Pipe hung curd on the layer.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Spread it smooth with a knife.",
          "imgs": [
            "s-spread-1",
            "s-spread-2"
          ]
        },
        {
          "t": "Dot on the green chutney.",
          "imgs": [
            "s-green-1",
            "s-green-2"
          ]
        },
        {
          "t": "Drizzle on the sweet tamarind chutney.",
          "imgs": [
            "s-tam-1",
            "s-tam-2"
          ]
        },
        {
          "t": "Sprinkle on the red chilli powder.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Pipe more hung curd over the top in a ring.",
          "imgs": [
            "s-ring-1",
            "s-ring-2"
          ]
        },
        {
          "t": "Smooth it flat with a knife.",
          "imgs": [
            "s-smooth-1",
            "s-smooth-2"
          ]
        },
        {
          "t": "Place the second cake layer on top.",
          "imgs": [
            "s-layer-2",
            "s-layer-3"
          ]
        },
        {
          "t": "Drizzle the syrup over the top layer.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Cover the top with hung curd. Smooth it with a knife.",
          "imgs": [
            "s-frost-1",
            "s-frost-2"
          ]
        },
        {
          "t": "Coat the sides with hung curd and smooth them.",
          "imgs": [
            "s-side-1",
            "s-side-2"
          ]
        },
        {
          "t": "Place pomegranate seeds on top in flower shapes.",
          "imgs": [
            "s-pom-1",
            "s-pom-3"
          ]
        },
        {
          "t": "Pipe a dot of green chutney in the middle of each flower.",
          "imgs": [
            "s-dot-1",
            "s-dot-2"
          ]
        },
        {
          "t": "Sprinkle sev on top and press it onto the sides.",
          "imgs": [
            "s-sev-1",
            "s-sev-2"
          ]
        },
        {
          "t": "Pour whisked curd on a plate.",
          "imgs": [
            "s-plate-1"
          ]
        },
        {
          "t": "Cut a slice and set it on the plate.",
          "imgs": [
            "s-slice-1",
            "s-slice-2"
          ]
        },
        {
          "t": "Drizzle the tamarind chutney over the slice.",
          "imgs": [
            "s-drizzle-1",
            "s-drizzle-2"
          ]
        },
        {
          "t": "Top with green chutney, sev, pomegranate and chilli powder.",
          "imgs": [
            "s-garnish-1",
            "s-garnish-2"
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
      "id": "air-fryer-potato-wedges",
      "name": "Air fryer potato wedges",
      "meal": "Side",
      "minutes": 40,
      "protein": 5,
      "how": "Air fryer",
      "tools": "Air fryer, knife, steel bowl, small bowl, tongs",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3 medium (500 g)",
          "n": "Potatoes",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "a bowl, ~4 cups",
          "n": "Ice and cold water, for soaking",
          "tag": "ice",
          "img": "i-ice"
        },
        {
          "q": "~1.5 tbsp",
          "n": "Olive oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Paprika",
          "tag": "paprika",
          "img": "i-paprika",
          "alt": [
            "red-chilli-powder"
          ]
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Garlic powder",
          "tag": "garlic-powder",
          "img": "i-garlic"
        },
        {
          "q": "~1 tsp",
          "n": "Dried oregano or parsley",
          "tag": "oregano",
          "img": "i-herb"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~2 tbsp",
          "n": "Grated cheese, to top",
          "tag": "cheese",
          "img": "i-cheese",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Cut the potatoes into thick wedges.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Put the wedges in a bowl of ice-cold water.",
          "imgs": [
            "s-ice-1",
            "s-ice-2",
            "s-ice-3"
          ]
        },
        {
          "t": "Drain them and tip them into a steel bowl.",
          "imgs": [
            "s-drain-1"
          ]
        },
        {
          "t": "Pat the wedges dry with a paper towel.",
          "imgs": [
            "s-dry-1",
            "s-dry-2"
          ]
        },
        {
          "t": "Drizzle the oil over the wedges.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Mix paprika, chilli powder, garlic powder, dried herbs and salt in a small bowl.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "Sprinkle the spice mix over the wedges.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Toss with your hands until every wedge is coated.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Lay the wedges in the air fryer basket in one layer.",
          "imgs": [
            "s-lay-1",
            "s-lay-2"
          ]
        },
        {
          "t": "Air fry until golden and crisp.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Tip the hot wedges onto a plate.",
          "imgs": [
            "s-tip-1",
            "s-tip-2",
            "s-tip-3"
          ]
        },
        {
          "t": "Sprinkle grated cheese and dried herbs on top. Eat hot.",
          "imgs": [
            "s-top-1",
            "s-top-2",
            "s-top-3"
          ]
        }
      ],
      "tags": [
        "air-fryer",
        "quick"
      ],
      "card": "card"
    },
    {
      "id": "peanut-veg-chaat-salad",
      "name": "Peanut veg chaat salad",
      "meal": "Snack",
      "minutes": 10,
      "protein": 20,
      "how": "No cooking",
      "tools": "Wide plate or bowl, spoon, knife, grater",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (140 g)",
          "n": "Skinless peanuts (roasted or boiled)",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "~1/2, chopped small",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1 medium, chopped small",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1 small, chopped small",
          "n": "Red onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1/3 cup (50 g), boiled",
          "n": "Sweet corn",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~1 small, grated",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
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
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "juice of 1/2",
          "n": "Lemon",
          "tag": "lemon",
          "img": "i-lemon"
        }
      ],
      "steps": [
        {
          "t": "Tip the peanuts onto a wide plate.",
          "imgs": [
            "s-peanuts-1",
            "s-peanuts-2"
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
          "t": "Add the chopped tomato.",
          "imgs": [
            "s-tomato-1",
            "s-tomato-2"
          ]
        },
        {
          "t": "Add the chopped red onion.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the sweet corn.",
          "imgs": [
            "s-corn-1"
          ]
        },
        {
          "t": "Add the grated carrot.",
          "imgs": [
            "s-carrot-1",
            "s-carrot-2"
          ]
        },
        {
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        },
        {
          "t": "Sprinkle on the salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Sprinkle on the red chilli powder.",
          "imgs": [
            "s-chilli-1"
          ]
        },
        {
          "t": "Squeeze the lemon over everything.",
          "imgs": [
            "s-lemon-1",
            "s-lemon-2",
            "s-lemon-3"
          ]
        },
        {
          "t": "Mix everything well with a spoon.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Serve at once.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "quick",
        "high-protein",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "saunf-jaggery-mint-lassi",
      "name": "Saunf jaggery mint lassi",
      "meal": "Drink",
      "minutes": 5,
      "protein": 10,
      "how": "No cooking",
      "tools": "Mixie (blender), tall glass",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tbsp",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-saunf"
        },
        {
          "q": "~2 tbsp",
          "n": "Jaggery powder (gud)",
          "tag": "jaggery",
          "img": "i-jaggery",
          "alt": [
            "sugar"
          ]
        },
        {
          "q": "~1 tsp, in thin slices",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~10 leaves, plus 1 for the top",
          "n": "Mint leaves",
          "tag": "mint",
          "img": "i-mint"
        },
        {
          "q": "~1 cup (240 g)",
          "n": "Thick curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/3 cup",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        }
      ],
      "steps": [
        {
          "t": "Put the fennel seeds in the mixie jar.",
          "imgs": [
            "s-saunf-1",
            "s-saunf-2"
          ]
        },
        {
          "t": "Add the jaggery powder.",
          "imgs": [
            "s-jaggery-1",
            "s-jaggery-2"
          ]
        },
        {
          "t": "Add the ginger slices.",
          "imgs": [
            "s-ginger-1",
            "s-ginger-2"
          ]
        },
        {
          "t": "Add the mint leaves.",
          "imgs": [
            "s-mint-1",
            "s-mint-2",
            "s-mint-3"
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
          "t": "Pour in the water.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Cover with the lid and blend until smooth and frothy.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Open the lid. The lassi should be thick and creamy.",
          "imgs": [
            "s-open-1",
            "s-open-2"
          ]
        },
        {
          "t": "Pour the lassi into a tall glass.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Top with a fresh mint leaf. Serve cold.",
          "imgs": [
            "s-top-1",
            "s-top-2",
            "s-top-3"
          ]
        }
      ],
      "tags": [
        "blender",
        "no-cook",
        "quick"
      ],
      "credit": "@cocos_chatkara",
      "card": "card"
    },
    {
      "id": "chole-tikki-tadka-raita",
      "name": "Chole tikki with tadka raita",
      "meal": "Lunch or dinner",
      "minutes": 35,
      "protein": 20,
      "how": "Gas",
      "tools": "Big bowl, masher, tawa, spatula, whisk",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1.5 cups (250 g), boiled",
          "n": "Chickpeas (chole), boiled",
          "tag": "chickpeas",
          "img": "i-chickpeas"
        },
        {
          "q": "~1 small, chopped fine",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 small, grated",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~1/3 cup (40 g)",
          "n": "Besan (gram flour)",
          "tag": "besan",
          "img": "i-besan",
          "alt": [
            "sattu"
          ]
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black salt (kala namak)",
          "tag": "black-salt",
          "img": "i-bsalt",
          "opt": true
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1 tsp",
          "n": "Garam masala",
          "tag": "garam-masala",
          "img": "i-garam"
        },
        {
          "q": "~1 tsp",
          "n": "Roasted cumin powder",
          "tag": "cumin-powder",
          "img": "i-cumin"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder",
          "tag": "coriander-powder",
          "img": "i-corpow"
        },
        {
          "q": "~1, chopped fine",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-gchilli"
        },
        {
          "q": "a small handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/4 cup",
          "n": "White sesame seeds, to coat",
          "tag": "sesame-seeds",
          "img": "i-sesame"
        },
        {
          "q": "~2 tsp",
          "n": "Oil, for the tawa",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1.5 cups (350 g), thick",
          "n": "Curd (dahi), for the raita",
          "tag": "curd",
          "img": "i-curd"
        }
      ],
      "steps": [
        {
          "t": "Tip the boiled chickpeas into a big bowl.",
          "imgs": [
            "s-chick-1",
            "s-chick-2",
            "s-chick-3"
          ]
        },
        {
          "t": "Mash them coarsely with a masher.",
          "imgs": [
            "s-mash-1",
            "s-mash-2",
            "s-mash-3"
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
          "t": "Add the grated carrot.",
          "imgs": [
            "s-carrot-1",
            "s-carrot-2"
          ]
        },
        {
          "t": "Add the besan.",
          "imgs": [
            "s-besan-1",
            "s-besan-2",
            "s-besan-3"
          ]
        },
        {
          "t": "Add the salt and the black salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Add the red chilli powder.",
          "imgs": [
            "s-chilli-1"
          ]
        },
        {
          "t": "Add the garam masala.",
          "imgs": [
            "s-garam-1"
          ]
        },
        {
          "t": "Add the roasted cumin powder.",
          "imgs": [
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Add the coriander powder.",
          "imgs": [
            "s-corpow-1",
            "s-corpow-2"
          ]
        },
        {
          "t": "Add the chopped green chilli.",
          "imgs": [
            "s-gchilli-1",
            "s-gchilli-2"
          ]
        },
        {
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2",
            "s-coriander-3"
          ]
        },
        {
          "t": "Mix everything well to a thick, sticky mixture.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Take a little mixture and shape it into a flat round tikki.",
          "imgs": [
            "s-shape-1"
          ]
        },
        {
          "t": "Press the tikki into sesame seeds on both sides.",
          "imgs": [
            "s-sesame-1",
            "s-sesame-2",
            "s-sesame-3"
          ]
        },
        {
          "t": "Place the tikkis on a hot oiled tawa.",
          "imgs": [
            "s-tawa-1",
            "s-tawa-2"
          ]
        },
        {
          "t": "Cook until golden. Flip and cook the other side.",
          "imgs": [
            "s-flip-1",
            "s-flip-2",
            "s-flip-3"
          ]
        },
        {
          "t": "Whisk the curd until smooth and creamy.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2"
          ]
        },
        {
          "t": "Spoon the curd onto a plate.",
          "imgs": [
            "s-plate-1",
            "s-plate-2"
          ]
        },
        {
          "t": "Spread it out into a thin layer with the spoon.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Place the hot tikkis on top of the raita.",
          "imgs": [
            "s-place-1",
            "s-place-2"
          ]
        },
        {
          "t": "Sprinkle chopped coriander on top. Serve at once.",
          "imgs": [
            "s-garnish-1",
            "s-garnish-2",
            "s-final"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-protein",
        "high-fibre"
      ],
      "credit": "@hunger_zest",
      "card": "card"
    },
    {
      "id": "fruit-cream-ice-cream",
      "name": "Fruit cream ice cream",
      "meal": "Snack",
      "minutes": 270,
      "protein": 5,
      "how": "No cooking",
      "tools": "Knife, big bowl, whisk, spoon, glass bowl with lid, ice-cream scoop",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 small",
          "n": "Pomegranate",
          "tag": "pomegranate",
          "img": "i-pom"
        },
        {
          "q": "1 small, red",
          "n": "Apple",
          "tag": "apple",
          "img": "i-apple"
        },
        {
          "q": "~6 medium",
          "n": "Strawberries",
          "tag": "berries",
          "img": "i-straw"
        },
        {
          "q": "1 ripe",
          "n": "Mango",
          "tag": "mango",
          "img": "i-mango"
        },
        {
          "q": "~1/2 cup, chopped (black and green)",
          "n": "Grapes",
          "tag": "grapes",
          "img": "i-grapes"
        },
        {
          "q": "~1 cup (250 ml)",
          "n": "Fresh cream",
          "tag": "cream",
          "img": "i-cream"
        },
        {
          "q": "~1/2 cup",
          "n": "Condensed milk",
          "tag": "condensed-milk",
          "img": "i-cm"
        },
        {
          "q": "a few drops (~1/2 tsp)",
          "n": "Vanilla essence",
          "tag": "vanilla-essence",
          "img": "i-vanilla"
        },
        {
          "q": "a pinch",
          "n": "Saffron (kesar)",
          "tag": "saffron",
          "img": "i-saffron"
        },
        {
          "q": "~1/4 cup, chopped",
          "n": "Cashews",
          "tag": "cashews",
          "img": "i-cashew"
        },
        {
          "q": "~2 tbsp",
          "n": "Raisins",
          "tag": "raisins",
          "img": "i-raisin"
        },
        {
          "q": "~2 tbsp, sliced",
          "n": "Almonds",
          "tag": "almonds",
          "img": "i-almond"
        }
      ],
      "tags": [
        "no-cook",
        "make-ahead"
      ],
      "steps": [
        {
          "t": "Cut the pomegranate open and take out the seeds.",
          "imgs": [
            "s-pom-1",
            "s-pom-2",
            "s-pom-3"
          ]
        },
        {
          "t": "Cut the apple and chop it into small pieces.",
          "imgs": [
            "s-apple-1",
            "s-apple-2",
            "s-apple-3"
          ]
        },
        {
          "t": "Chop the strawberries into small pieces.",
          "imgs": [
            "s-straw-1",
            "s-straw-2",
            "s-straw-3"
          ]
        },
        {
          "t": "Cut the mango flesh in a grid and scoop out the cubes.",
          "imgs": [
            "s-mango-1",
            "s-mango-2",
            "s-mango-3"
          ]
        },
        {
          "t": "Pour the fresh cream into a big bowl.",
          "imgs": [
            "s-cream-1",
            "s-cream-2",
            "s-cream-3"
          ]
        },
        {
          "t": "Add the condensed milk.",
          "imgs": [
            "s-cm-1",
            "s-cm-2"
          ]
        },
        {
          "t": "Add a few drops of vanilla essence.",
          "imgs": [
            "s-van-1"
          ]
        },
        {
          "t": "Add the saffron strands.",
          "imgs": [
            "s-saf-1",
            "s-saf-2"
          ]
        },
        {
          "t": "Whisk properly until smooth and thick.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2"
          ]
        },
        {
          "t": "Add the chopped mango, strawberries, apple and pomegranate seeds.",
          "imgs": [
            "s-fruit-1",
            "s-fruit-2"
          ]
        },
        {
          "t": "Add the chopped grapes.",
          "imgs": [
            "s-grape-1",
            "s-grape-2"
          ]
        },
        {
          "t": "Add the chopped cashews.",
          "imgs": [
            "s-cash-1",
            "s-cash-2"
          ]
        },
        {
          "t": "Add the raisins.",
          "imgs": [
            "s-rais-1"
          ]
        },
        {
          "t": "Add the sliced almonds.",
          "imgs": [
            "s-alm-1",
            "s-alm-2"
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
          "t": "Pour the mix into a glass bowl.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Close the lid and freeze for 3 to 4 hours.",
          "imgs": [
            "s-freeze-1",
            "s-freeze-2",
            "s-freeze-3"
          ]
        },
        {
          "t": "Scoop out the ice cream and serve.",
          "imgs": [
            "s-scoop-1",
            "s-scoop-2",
            "s-scoop-3"
          ]
        }
      ],
      "card": "card"
    },
    {
      "id": "paneer-thecha-rice",
      "name": "Paneer thecha rice",
      "meal": "Lunch or dinner",
      "minutes": 20,
      "protein": 55,
      "how": "Gas",
      "tools": "Pan, gas, small mixie jar, wooden spatula",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "2 tsp (1 tsp for the thecha, 1 tsp for the rice)",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp (1/2 tsp each time)",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~6 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~3",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "30 g, plus a few crushed for topping",
          "n": "Peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "~1 big handful, plus a little chopped for topping",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~3 tbsp",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "1 medium, sliced",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "1 medium, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1 small, chopped",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "200 g, low fat, cubed",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "250 g cooked (about 1.5 cups)",
          "n": "Rice, cooked",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "~1/2 lemon",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put a pan on the gas and heat 1 tsp oil.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add the cumin seeds, then the garlic cloves and green chillies.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Add the 30 g peanuts. Fry, stirring, until they turn brown.",
          "imgs": [
            "s-pnut-1",
            "s-pnut-2"
          ]
        },
        {
          "t": "Tip the fried mix into a small mixie jar. Add the coriander and a little water.",
          "imgs": [
            "s-jar-1",
            "s-jar-2",
            "s-jar-3"
          ]
        },
        {
          "t": "Blend to a coarse green paste. This is the thecha.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Heat 1 tsp oil in the same pan and add cumin seeds.",
          "imgs": [
            "s-oil2-1",
            "s-oil2-2"
          ]
        },
        {
          "t": "Add the sliced onion, chopped tomato and chopped capsicum.",
          "imgs": [
            "s-veg-1",
            "s-veg-2",
            "s-veg-3"
          ]
        },
        {
          "t": "Stir until the vegetables soften.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Add the thecha paste and mix well.",
          "imgs": [
            "s-thecha-1",
            "s-thecha-2"
          ]
        },
        {
          "t": "Add the paneer cubes and salt. Stir until the paneer is coated with paste.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2",
            "s-paneer-3"
          ]
        },
        {
          "t": "Add the cooked rice and mix until it turns green and even.",
          "imgs": [
            "s-rice-1",
            "s-rice-2",
            "s-rice-3"
          ]
        },
        {
          "t": "Sprinkle crushed peanuts and chopped coriander on top.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Squeeze a little lemon juice on top and serve.",
          "imgs": [
            "s-lemon-1",
            "s-lemon-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "dibba-rotte",
      "name": "Dibba rotte (idli batter)",
      "meal": "Breakfast",
      "minutes": 20,
      "protein": 5,
      "how": "Gas",
      "tools": "Wide kadhai with lid, small steel cup, tongs, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 cups (about 450 ml)",
          "n": "Idli batter (ready or homemade)",
          "tag": "idli-batter",
          "img": "i-batter",
          "alt": [
            "dosa-batter"
          ]
        },
        {
          "q": "~2 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1/2 cup, for the steel cup",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "to serve",
          "n": "Chutney or pickle (tamarind pachadi, coconut chutney)",
          "tag": "chutney",
          "img": "i-chutney",
          "opt": true,
          "alt": [
            "tamarind-chutney"
          ]
        }
      ],
      "steps": [
        {
          "t": "Pour about 2 tbsp oil into a wide kadhai and heat it on the gas.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add about 2 tsp cumin seeds and let them sizzle in the oil.",
          "imgs": [
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Pour in about 2 cups idli batter so it covers the whole base.",
          "imgs": [
            "s-batter-1",
            "s-batter-2"
          ]
        },
        {
          "t": "Fill a small steel cup with water and press it into the middle of the batter.",
          "imgs": [
            "s-cup-1",
            "s-cup-2"
          ]
        },
        {
          "t": "Put a lid on the kadhai and let it cook.",
          "imgs": [
            "s-lid-1",
            "s-lid-2"
          ]
        },
        {
          "t": "Cook until the top looks fluffy and dry. The water in the cup bubbles and steams the top.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Lift the steel cup out with tongs.",
          "imgs": [
            "s-remove-1",
            "s-remove-2",
            "s-remove-3"
          ]
        },
        {
          "t": "Loosen the edges all around.",
          "imgs": [
            "s-loosen-1",
            "s-loosen-2"
          ]
        },
        {
          "t": "Flip the donut onto a plate, crispy cumin side up.",
          "imgs": [
            "s-flip-1",
            "s-flip-2",
            "s-flip-3"
          ]
        },
        {
          "t": "Cut it into triangle slices.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Serve hot with chutney or pickle.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "one-pot"
      ],
      "card": "card"
    },
    {
      "id": "roasted-makhana-chaat",
      "name": "Roasted makhana chaat",
      "meal": "Snack",
      "minutes": 15,
      "protein": 5,
      "how": "Gas",
      "tools": "Clay kadhai (or any wide pan), spoon, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil",
          "alt": [
            "ghee"
          ]
        },
        {
          "q": "~2 cups (about 25 g)",
          "n": "Makhana (fox nuts)",
          "tag": "makhana",
          "img": "i-makhana"
        },
        {
          "q": "a pinch",
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
          "q": "~1/2 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat-masala"
        },
        {
          "q": "~1/2 small",
          "n": "Onion, finely chopped",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1/2 small",
          "n": "Tomato, finely chopped",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1/4 cup",
          "n": "Cucumber, finely chopped",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1",
          "n": "Green chilli, chopped",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "~1 tbsp",
          "n": "Green chutney (mint-coriander)",
          "tag": "green-chutney",
          "img": "i-chutney"
        },
        {
          "q": "1/2",
          "n": "Lime (nimbu)",
          "tag": "lemon",
          "img": "i-lime"
        },
        {
          "q": "~1 tbsp",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "img": "i-coriander",
          "opt": true
        },
        {
          "q": "~1/4 cup",
          "n": "Sev",
          "tag": "sev",
          "img": "i-sev",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Chop the onion, tomato, cucumber and green chilli into small pieces.",
          "imgs": [
            "s-prep-1"
          ]
        },
        {
          "t": "Pour about 2 tsp oil into a kadhai on the gas.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add about 2 cups makhana.",
          "imgs": [
            "s-makhana-1",
            "s-makhana-2"
          ]
        },
        {
          "t": "Sprinkle on a pinch of salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Sprinkle on about 1/2 tsp red chilli powder.",
          "imgs": [
            "s-redchilli-1",
            "s-redchilli-2"
          ]
        },
        {
          "t": "Stir and roast the makhana on the gas.",
          "imgs": [
            "s-roast-1",
            "s-roast-2",
            "s-roast-3"
          ]
        },
        {
          "t": "Add about 1/2 tsp chaat masala and toss.",
          "imgs": [
            "s-masala-1",
            "s-masala-2"
          ]
        },
        {
          "t": "Keep roasting until the makhana are golden and crisp.",
          "imgs": [
            "s-golden-1",
            "s-golden-2",
            "s-golden-3"
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
            "s-greenchilli-1",
            "s-greenchilli-2"
          ]
        },
        {
          "t": "Add about 1 tbsp green chutney.",
          "imgs": [
            "s-chutney-1",
            "s-chutney-2"
          ]
        },
        {
          "t": "Squeeze half a lime over it.",
          "imgs": [
            "s-lime-1",
            "s-lime-2"
          ]
        },
        {
          "t": "Sprinkle on chopped coriander leaves.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        },
        {
          "t": "Add about 1/4 cup sev.",
          "imgs": [
            "s-sev-1",
            "s-sev-2"
          ]
        },
        {
          "t": "Toss everything well and serve.",
          "imgs": [
            "s-toss-1",
            "s-toss-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "credit": "Raksha's Kitchen",
      "card": "card"
    },
    {
      "id": "mint-coriander-curd-dip",
      "name": "Mint coriander curd dip",
      "meal": "Side",
      "minutes": 10,
      "protein": 5,
      "how": "No cooking",
      "tools": "Mixie (blender), bowl, whisk, spoon",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 big handful (about 40 g)",
          "n": "Coriander leaves (hara dhania)",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/2 cup leaves, plus 3 for the top",
          "n": "Mint leaves (pudina)",
          "tag": "mint",
          "img": "i-mint"
        },
        {
          "q": "3",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~4 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 inch piece, sliced",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1 tsp",
          "n": "Sugar",
          "tag": "sugar",
          "img": "i-sugar"
        },
        {
          "q": "1 small, in 4 pieces",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 cup (250 g)",
          "n": "Thick curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "1/2",
          "n": "Lime (nimbu)",
          "tag": "lemon",
          "img": "i-lime"
        }
      ],
      "steps": [
        {
          "t": "Put a big handful of coriander leaves in the mixie jar.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        },
        {
          "t": "Add about 1/2 cup mint leaves.",
          "imgs": [
            "s-mint-1",
            "s-mint-2"
          ]
        },
        {
          "t": "Add 3 green chillies.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add about 4 garlic cloves.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Add the ginger pieces.",
          "imgs": [
            "s-ginger-1",
            "s-ginger-2"
          ]
        },
        {
          "t": "Add about 1 tsp sugar.",
          "imgs": [
            "s-sugar-1",
            "s-sugar-2"
          ]
        },
        {
          "t": "Add the onion pieces.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add about 1/2 tsp salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Blend into a thick green chutney.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Whisk about 1 cup thick curd in a bowl until smooth.",
          "imgs": [
            "s-curd-1",
            "s-curd-2",
            "s-curd-3"
          ]
        },
        {
          "t": "Add about 3 tbsp of the green chutney to the curd.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Mix well until the dip turns pale green.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Squeeze in half a lime and mix.",
          "imgs": [
            "s-lime-1",
            "s-lime-2"
          ]
        },
        {
          "t": "Top with 3 mint leaves.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "quick"
      ],
      "credit": "sumeras.kitchen",
      "card": "card"
    },
    {
      "id": "mango-cashew-kulfi",
      "name": "Mango cashew kulfi",
      "meal": "Snack",
      "minutes": 400,
      "protein": 5,
      "how": "No cooking",
      "tools": "Mixie, kulfi moulds with sticks, knife, freezer",
      "serves": 6,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1/2 cup (~70 g), soaked in water",
          "n": "Green raisins (kishmish)",
          "tag": "raisins",
          "img": "i-raisins"
        },
        {
          "q": "~3/4 cup (~100 g), soaked in water",
          "n": "Cashews (kaju)",
          "tag": "cashews",
          "img": "i-cashews"
        },
        {
          "q": "~2 ripe",
          "n": "Mango",
          "tag": "mango",
          "img": "i-mango"
        },
        {
          "q": "~1 cup (250 ml)",
          "n": "Milk",
          "tag": "milk",
          "img": "i-milk"
        },
        {
          "q": "~2 tbsp",
          "n": "Jaggery syrup (gud syrup)",
          "tag": "jaggery",
          "img": "i-jaggery",
          "alt": [
            "honey"
          ]
        },
        {
          "q": "~1 tbsp",
          "n": "Honey",
          "tag": "honey",
          "img": "i-honey",
          "alt": [
            "jaggery"
          ]
        },
        {
          "q": "~2 tbsp, sliced",
          "n": "Pistachios",
          "tag": "pistachios",
          "img": "i-pistachios",
          "opt": true,
          "alt": [
            "almonds"
          ]
        }
      ],
      "steps": [
        {
          "t": "Put the soaked green raisins (kishmish) into the mixie jar.",
          "imgs": [
            "s-raisin-1",
            "s-raisin-2",
            "s-raisin-3"
          ]
        },
        {
          "t": "Add the soaked cashews along with their soaking water.",
          "imgs": [
            "s-cashew-1",
            "s-cashew-2",
            "s-cashew-3"
          ]
        },
        {
          "t": "Cut the top off the mango.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Cut the mango into two halves.",
          "imgs": [
            "s-half-1",
            "s-half-2"
          ]
        },
        {
          "t": "Score each half in a grid and scoop out the cubes.",
          "imgs": [
            "s-grid-1",
            "s-grid-2"
          ]
        },
        {
          "t": "Add the mango pulp to the jar.",
          "imgs": [
            "s-pulp-1",
            "s-pulp-2"
          ]
        },
        {
          "t": "Pour in the milk.",
          "imgs": [
            "s-milk-1"
          ]
        },
        {
          "t": "Pour in the jaggery syrup.",
          "imgs": [
            "s-syrup-1",
            "s-syrup-2"
          ]
        },
        {
          "t": "Add a thin stream of honey.",
          "imgs": [
            "s-honey-1"
          ]
        },
        {
          "t": "Blend everything until smooth.",
          "imgs": [
            "s-blend-1"
          ]
        },
        {
          "t": "Pour the mix into kulfi moulds.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Spoon a few mango cubes on top of each mould.",
          "imgs": [
            "s-mango-1",
            "s-mango-2"
          ]
        },
        {
          "t": "Sprinkle sliced pistachios on top.",
          "imgs": [
            "s-nuts-1",
            "s-nuts-2"
          ]
        },
        {
          "t": "Put a stick in each mould and freeze until solid, about 6 hours.",
          "imgs": [
            "s-freeze-1"
          ]
        },
        {
          "t": "Pull each kulfi out of its mould by the stick.",
          "imgs": [
            "s-out-1",
            "s-out-2",
            "s-out-3"
          ]
        },
        {
          "t": "Sprinkle sliced pistachios over the kulfi and set it on ice.",
          "imgs": [
            "s-garnish-1",
            "s-garnish-2"
          ]
        },
        {
          "t": "Serve cold.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "make-ahead"
      ],
      "credit": "Now I Can Cook",
      "card": "card"
    },
    {
      "id": "air-fryer-crispy-aloo-chaat",
      "name": "Air fryer crispy aloo chaat",
      "meal": "Snack",
      "minutes": 45,
      "protein": 5,
      "how": "Air fryer",
      "tools": "Air fryer, paper liner, steel glass, plate, spoon",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~13 small (~300 g)",
          "n": "Baby potatoes, washed",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "a pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~3 tbsp",
          "n": "Green chutney",
          "tag": "green-chutney",
          "img": "i-green-chutney"
        },
        {
          "q": "~2 tbsp",
          "n": "Sweet tamarind chutney (meethi chutney)",
          "tag": "tamarind-chutney",
          "img": "i-chutney"
        },
        {
          "q": "~1/3 cup, boiled or roasted",
          "n": "Chickpeas (chana)",
          "tag": "chickpeas",
          "img": "i-chickpeas"
        },
        {
          "q": "1, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-green-chilli",
          "opt": true
        },
        {
          "q": "1 small, chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~3 tbsp",
          "n": "Sev",
          "tag": "sev",
          "img": "i-sev"
        },
        {
          "q": "a few leaves, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander",
          "opt": true
        }
      ],
      "steps": [
        {
          "t": "Put a paper liner in the air fryer basket.",
          "imgs": [
            "s-line-1",
            "s-line-2"
          ]
        },
        {
          "t": "Add the washed baby potatoes.",
          "imgs": [
            "s-pot-1",
            "s-pot-2"
          ]
        },
        {
          "t": "Sprinkle a pinch of salt over the potatoes.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Drizzle a little oil over the potatoes.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Air fry at 170 C for 18 to 20 minutes.",
          "imgs": [
            "s-fry1-1",
            "s-fry1-2",
            "s-fry1-3"
          ]
        },
        {
          "t": "Take out the golden potatoes.",
          "imgs": [
            "s-out-1",
            "s-out-2"
          ]
        },
        {
          "t": "Press each potato flat with the bottom of a steel glass.",
          "imgs": [
            "s-smash-1",
            "s-smash-2",
            "s-smash-3"
          ]
        },
        {
          "t": "Put the flattened potatoes back in the basket.",
          "imgs": [
            "s-back-1",
            "s-back-2",
            "s-back-3"
          ]
        },
        {
          "t": "Air fry at 180 C for 10 to 12 minutes until crisp.",
          "imgs": [
            "s-fry2-1",
            "s-fry2-2",
            "s-fry2-3"
          ]
        },
        {
          "t": "Move the crisp potatoes to a plate.",
          "imgs": [
            "s-plate-1",
            "s-plate-2"
          ]
        },
        {
          "t": "Put a spoon of green chutney on each one.",
          "imgs": [
            "s-gc-1"
          ]
        },
        {
          "t": "Drizzle the sweet tamarind chutney over them.",
          "imgs": [
            "s-sc-1"
          ]
        },
        {
          "t": "Add the chickpeas.",
          "imgs": [
            "s-ch-1"
          ]
        },
        {
          "t": "Add the chopped green chilli and onion.",
          "imgs": [
            "s-chilli-1",
            "s-onion-1"
          ]
        },
        {
          "t": "Top with sev and chopped coriander.",
          "imgs": [
            "s-sev-1",
            "s-sev-2"
          ]
        }
      ],
      "tags": [
        "air-fryer"
      ],
      "card": "card"
    },
    {
      "id": "makhana-nut-chivda",
      "name": "Makhana nut chivda",
      "meal": "Snack",
      "minutes": 25,
      "protein": 5,
      "how": "Gas",
      "tools": "Steel pan, non-stick pan, spatula, glass jar",
      "serves": 8,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 cups (~50 g)",
          "n": "Thin poha (flattened rice)",
          "tag": "poha",
          "img": "i-poha"
        },
        {
          "q": "~3 cups (~25 g)",
          "n": "Puffed rice (murmura)",
          "tag": "puffed-rice",
          "img": "i-puffed-rice"
        },
        {
          "q": "~1/2 cup (~70 g)",
          "n": "Roasted chana (bhuna chana)",
          "tag": "roasted-chana",
          "img": "i-roasted-chana"
        },
        {
          "q": "~3 cups (~30 g)",
          "n": "Makhana (fox nuts)",
          "tag": "makhana",
          "img": "i-makhana"
        },
        {
          "q": "~2 tbsp",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~1/2 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~3, slit",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "~10 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry-leaves"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric powder (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-red-chilli"
        },
        {
          "q": "~1/2 cup (~65 g)",
          "n": "Almonds (badam)",
          "tag": "almonds",
          "img": "i-almonds"
        },
        {
          "q": "~1/2 cup (~65 g)",
          "n": "Cashews (kaju)",
          "tag": "cashews",
          "img": "i-cashews"
        },
        {
          "q": "~1/4 cup (~20 g)",
          "n": "Dry coconut slices (khopra)",
          "tag": "coconut",
          "img": "i-coconut"
        },
        {
          "q": "~1/2 tsp",
          "n": "Pink salt (or black salt)",
          "tag": "salt",
          "img": "i-salt",
          "alt": [
            "black-salt"
          ]
        }
      ],
      "steps": [
        {
          "t": "Dry roast the poha in a steel pan until light golden.",
          "imgs": [
            "s-poha-1",
            "s-poha-2",
            "s-poha-3"
          ]
        },
        {
          "t": "Add the puffed rice (murmura) and the roasted chana.",
          "imgs": [
            "s-mur-1",
            "s-mur-2"
          ]
        },
        {
          "t": "Stir well until crisp, then set the mix aside.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Dry roast the makhana in the same pan until crisp.",
          "imgs": [
            "s-mak-1",
            "s-mak-2",
            "s-mak-3"
          ]
        },
        {
          "t": "Spoon about 2 tbsp ghee into a non-stick pan.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2",
            "s-ghee-3"
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
          "t": "Add the slit green chillies and the curry leaves.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add the turmeric and red chilli powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Add the almonds.",
          "imgs": [
            "s-alm-1",
            "s-alm-2"
          ]
        },
        {
          "t": "Add the cashews and the dry coconut slices.",
          "imgs": [
            "s-cash-1",
            "s-cash-2"
          ]
        },
        {
          "t": "Roast, stirring, until the nuts turn golden.",
          "imgs": [
            "s-roast-1",
            "s-roast-2",
            "s-roast-3"
          ]
        },
        {
          "t": "Add the roasted poha, puffed rice, chana and makhana.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Sprinkle in the pink salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Toss everything well.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Fill the mix into a glass jar.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
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
      "id": "mint-jaggery-cooler",
      "name": "Mint jaggery cooler",
      "meal": "Drink",
      "minutes": 5,
      "protein": 0,
      "how": "No cooking",
      "tools": "Small blender cup, lemon squeezer, glass",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 handful (2 sprigs)",
          "n": "Mint leaves (pudina)",
          "tag": "mint",
          "img": "i-mint"
        },
        {
          "q": "~3 tbsp pieces (about 40 g)",
          "n": "Jaggery (gur)",
          "tag": "jaggery",
          "img": "i-jaggery"
        },
        {
          "q": "~1/2 lemon",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "a pinch",
          "n": "Black salt (kala namak)",
          "tag": "black-salt",
          "img": "i-black-salt"
        },
        {
          "q": "~5 cubes",
          "n": "Ice",
          "tag": "ice",
          "img": "i-ice"
        },
        {
          "q": "~1 cup (250 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "quick"
      ],
      "credit": "ILearn Lively",
      "steps": [
        {
          "t": "Pluck the mint leaves and put them in the blender cup.",
          "imgs": [
            "s-mint-1",
            "s-mint-2",
            "s-mint-3"
          ]
        },
        {
          "t": "Add the jaggery pieces.",
          "imgs": [
            "s-jag-1",
            "s-jag-2"
          ]
        },
        {
          "t": "Squeeze in the lemon juice.",
          "imgs": [
            "s-lem-1",
            "s-lem-2"
          ]
        },
        {
          "t": "Add a pinch of black salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Add the ice cubes.",
          "imgs": [
            "s-ice-1"
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
          "t": "Blend until smooth.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Pour into a glass and serve cold.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        }
      ],
      "card": "card"
    },
    {
      "id": "dahi-aloo-rice",
      "name": "Dahi aloo rice",
      "meal": "Lunch or dinner",
      "minutes": 25,
      "protein": 10,
      "how": "Gas",
      "tools": "Dry pan, mortar, big bowl, whisk, small ladle (tadka), gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3 medium, boiled",
          "n": "Potatoes",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~1.5 tsp (1 tsp to roast, 1/2 tsp for tadka)",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1.5 cups (300 g), thick",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "1 medium, chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2, chopped",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "1 medium, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "a big handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 tsp (from the roasted cumin)",
          "n": "Roasted cumin powder (bhuna jeera)",
          "tag": "cumin-powder",
          "img": "i-cumin-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black salt (kala namak)",
          "tag": "black-salt",
          "img": "i-black-salt"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder (deggi mirch)",
          "tag": "red-chilli-powder",
          "img": "i-red-chilli"
        },
        {
          "q": "~1.5 cups (about 250 g), cooked",
          "n": "Rice",
          "tag": "rice",
          "img": "i-rice"
        }
      ],
      "tags": [
        "gas",
        "quick"
      ],
      "steps": [
        {
          "t": "Peel the boiled potatoes.",
          "imgs": [
            "s-peel-1",
            "s-peel-2",
            "s-peel-3"
          ]
        },
        {
          "t": "Roast the cumin seeds in a dry pan until they smell good.",
          "imgs": [
            "s-roast-1",
            "s-roast-2"
          ]
        },
        {
          "t": "Crush the roasted cumin in a mortar to a powder.",
          "imgs": [
            "s-crush-1",
            "s-crush-2",
            "s-crush-3"
          ]
        },
        {
          "t": "Pour the thick curd into a big bowl.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Whisk the curd until smooth.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2"
          ]
        },
        {
          "t": "Crumble the boiled potatoes into the curd by hand.",
          "imgs": [
            "s-pot-1",
            "s-pot-2",
            "s-pot-3"
          ]
        },
        {
          "t": "Add the chopped onion and green chillies.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the chopped tomato.",
          "imgs": [
            "s-tom-1",
            "s-tom-2"
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
          "t": "Add the roasted cumin powder.",
          "imgs": [
            "s-cp-1",
            "s-cp-2"
          ]
        },
        {
          "t": "Add the black salt.",
          "imgs": [
            "s-bs-1",
            "s-bs-2"
          ]
        },
        {
          "t": "Mix everything well.",
          "imgs": [
            "s-mix1-1",
            "s-mix1-2",
            "s-mix1-3"
          ]
        },
        {
          "t": "Pour the oil into a small ladle.",
          "imgs": [
            "s-oil-1",
            "s-oil-2",
            "s-oil-3"
          ]
        },
        {
          "t": "Heat it on the gas and add the cumin seeds.",
          "imgs": [
            "s-tcum-1",
            "s-tcum-2"
          ]
        },
        {
          "t": "Add the red chilli powder. Let it sizzle for a moment.",
          "imgs": [
            "s-tchi-1",
            "s-tchi-2",
            "s-tchi-3"
          ]
        },
        {
          "t": "Pour the hot tadka over the curd mix.",
          "imgs": [
            "s-tpour-1",
            "s-tpour-2"
          ]
        },
        {
          "t": "Cover the bowl with its lid.",
          "imgs": [
            "s-lid-1",
            "s-lid-2",
            "s-lid-3"
          ]
        },
        {
          "t": "Open the lid and stir well. The dahi aloo is ready.",
          "imgs": [
            "s-mix2-1",
            "s-mix2-2",
            "s-mix2-3"
          ]
        },
        {
          "t": "Put the cooked rice on a plate.",
          "imgs": [
            "s-rice-1",
            "s-rice-2"
          ]
        },
        {
          "t": "Ladle the dahi aloo over the rice.",
          "imgs": [
            "s-ladle-1",
            "s-ladle-2",
            "s-ladle-3"
          ]
        },
        {
          "t": "Mix the rice and dahi aloo together by hand.",
          "imgs": [
            "s-hand-1",
            "s-hand-2",
            "s-hand-3"
          ]
        },
        {
          "t": "Serve and eat right away.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "card": "card"
    },
    {
      "id": "moong-dal-kachori",
      "name": "Moong dal kachori",
      "meal": "Snack",
      "minutes": 75,
      "protein": 15,
      "how": "Gas",
      "tools": "Mixie, mortar, pan, kadhai, slotted spoon, gas",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 cup (about 120 g)",
          "n": "Maida (refined flour)",
          "tag": "all-purpose-flour",
          "img": "i-maida"
        },
        {
          "q": "1/2 tsp",
          "n": "Ajwain (carom seeds)",
          "tag": "ajwain",
          "img": "i-ajwain"
        },
        {
          "q": "1.5 tsp (1/2 tsp for dough, 1 tsp for filling)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "3 tbsp for dough, ~2 tbsp for filling, ~2 cups for frying",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/4 cup, as needed",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "1 cup (about 200 g), soaked in water",
          "n": "Moong dal (split yellow)",
          "tag": "moong-dal",
          "img": "i-dal"
        },
        {
          "q": "1 to 2",
          "n": "Dry red chilli",
          "tag": "dry-red-chilli",
          "img": "i-red-chilli"
        },
        {
          "q": "1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "1 tsp",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-fennel"
        },
        {
          "q": "1 tsp",
          "n": "Coriander seeds (sabut dhania)",
          "tag": "coriander-seeds",
          "img": "i-coriander-seeds"
        },
        {
          "q": "1/2 tsp",
          "n": "Black pepper",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1 inch piece, cut in thin strips",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~2, sliced",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "1 to 2 tbsp",
          "n": "Besan (gram flour)",
          "tag": "besan",
          "img": "i-besan"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder",
          "tag": "coriander-powder",
          "img": "i-coriander-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Garam masala",
          "tag": "garam-masala",
          "img": "i-garam-masala"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric powder (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp",
          "n": "Amchur (dry mango powder)",
          "tag": "amchur",
          "img": "i-amchur"
        },
        {
          "q": "to serve",
          "n": "Curd, aloo sabzi or chutney",
          "tag": "chutney",
          "img": "i-chutney",
          "opt": true,
          "alt": [
            "curd"
          ]
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "steps": [
        {
          "t": "Put 1 cup maida in a big bowl.",
          "imgs": [
            "s-maida-1",
            "s-maida-2"
          ]
        },
        {
          "t": "Add 1/2 tsp ajwain.",
          "imgs": [
            "s-ajw-1",
            "s-ajw-2"
          ]
        },
        {
          "t": "Add 1/2 tsp salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Add 3 tbsp oil.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Rub the oil into the flour until it looks like crumbs.",
          "imgs": [
            "s-rub-1",
            "s-rub-2",
            "s-rub-3"
          ]
        },
        {
          "t": "Sprinkle in water little by little.",
          "imgs": [
            "s-wat-1",
            "s-wat-2"
          ]
        },
        {
          "t": "Knead into a firm dough and keep it aside.",
          "imgs": [
            "s-knead-1",
            "s-knead-2",
            "s-knead-3"
          ]
        },
        {
          "t": "Take the 1 cup of soaked moong dal.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Grind the dal in the mixie to a thick paste. Add water only if needed.",
          "imgs": [
            "s-grind-1",
            "s-grind-2",
            "s-grind-3"
          ]
        },
        {
          "t": "Dry roast the red chilli, cumin, fennel, coriander seeds and pepper.",
          "imgs": [
            "s-roast-1",
            "s-roast-2",
            "s-roast-3"
          ]
        },
        {
          "t": "Crush the roasted spices in a mortar.",
          "imgs": [
            "s-crush-1",
            "s-crush-2",
            "s-crush-3"
          ]
        },
        {
          "t": "Heat oil in a pan.",
          "imgs": [
            "s-fo-1",
            "s-fo-2"
          ]
        },
        {
          "t": "Add the thin ginger strips and green chillies.",
          "imgs": [
            "s-gin-1",
            "s-gin-2"
          ]
        },
        {
          "t": "Cook them until soft.",
          "imgs": [
            "s-sau-1",
            "s-sau-2"
          ]
        },
        {
          "t": "Add the crushed spice mix.",
          "imgs": [
            "s-mas-1",
            "s-mas-2"
          ]
        },
        {
          "t": "Add 1 to 2 tbsp besan and roast it until fragrant.",
          "imgs": [
            "s-bes-1",
            "s-bes-2",
            "s-bes-3"
          ]
        },
        {
          "t": "Add the dal paste and mix well.",
          "imgs": [
            "s-dal-1",
            "s-dal-2",
            "s-dal-3"
          ]
        },
        {
          "t": "Add the coriander powder and garam masala.",
          "imgs": [
            "s-cp-1",
            "s-cp-2"
          ]
        },
        {
          "t": "Add the red chilli powder and turmeric.",
          "imgs": [
            "s-rc-1",
            "s-rc-2"
          ]
        },
        {
          "t": "Add the amchur and salt.",
          "imgs": [
            "s-am-1",
            "s-am-2"
          ]
        },
        {
          "t": "Cook, stirring, until the filling turns dry and crumbly.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Move the filling to a bowl and let it cool.",
          "imgs": [
            "s-cool-1",
            "s-cool-2"
          ]
        },
        {
          "t": "Shape the cool filling into small balls.",
          "imgs": [
            "s-fball-1",
            "s-fball-2"
          ]
        },
        {
          "t": "Knead the dough once more and take a small ball.",
          "imgs": [
            "s-dball-1"
          ]
        },
        {
          "t": "Press the dough ball into a small cup shape.",
          "imgs": [
            "s-cup-1",
            "s-cup-2",
            "s-cup-3"
          ]
        },
        {
          "t": "Put a ball of filling in the middle.",
          "imgs": [
            "s-fill-1"
          ]
        },
        {
          "t": "Close the dough over the filling and seal it.",
          "imgs": [
            "s-close-1",
            "s-close-2"
          ]
        },
        {
          "t": "Press it gently flat between your palms.",
          "imgs": [
            "s-press-1",
            "s-press-2",
            "s-press-3"
          ]
        },
        {
          "t": "Heat oil in a kadhai. Gently slide in the kachoris.",
          "imgs": [
            "s-heat-1",
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Fry until they puff up and turn golden.",
          "imgs": [
            "s-fry-3",
            "s-fry-4"
          ]
        },
        {
          "t": "Lift them out with a slotted spoon.",
          "imgs": [
            "s-lift-1",
            "s-lift-2",
            "s-lift-3"
          ]
        },
        {
          "t": "Serve hot with curd, aloo sabzi or chutney.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "card": "card"
    },
    {
      "id": "roti-dough-scissor-noodles",
      "name": "Roti dough scissor noodles",
      "meal": "Lunch or dinner",
      "minutes": 20,
      "protein": 10,
      "how": "Gas",
      "tools": "Pot, pan, scissors, strainer, spatula, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 big lump (about 1 cup flour worth)",
          "n": "Leftover roti dough (atta dough)",
          "tag": "atta",
          "img": "i-dough"
        },
        {
          "q": "~4 cups, for boiling",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~100 g, cubed",
          "n": "Tofu",
          "tag": "tofu",
          "img": "i-tofu",
          "alt": [
            "paneer"
          ]
        },
        {
          "q": "1 medium, sliced",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 tsp",
          "n": "Ginger paste",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1 tsp",
          "n": "Garlic paste",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 tbsp",
          "n": "Soy sauce",
          "tag": "soy-sauce",
          "img": "i-soy"
        },
        {
          "q": "~1 tbsp",
          "n": "Vinegar",
          "tag": "vinegar",
          "img": "i-vinegar"
        },
        {
          "q": "~1 tbsp",
          "n": "Chilli oil (chilli crisp)",
          "tag": "chilli-oil",
          "img": "i-chilli-oil"
        },
        {
          "q": "~2 big handfuls (60 g)",
          "n": "Spinach leaves",
          "tag": "spinach",
          "img": "i-spinach"
        },
        {
          "q": "~1 tsp",
          "n": "Sesame seeds",
          "tag": "sesame-seeds",
          "img": "i-sesame",
          "opt": true
        }
      ],
      "tags": [
        "gas",
        "quick"
      ],
      "steps": [
        {
          "t": "Bring a pot of water to a boil.",
          "imgs": [
            "s-boil-1",
            "s-boil-2"
          ]
        },
        {
          "t": "Hold the dough over the pot. Snip small pieces into the water with scissors.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Stir gently and cook until the pieces float.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Lift them out with a strainer and keep aside.",
          "imgs": [
            "s-lift-1",
            "s-lift-2"
          ]
        },
        {
          "t": "Heat oil in a pan.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add the tofu cubes.",
          "imgs": [
            "s-tofu-1",
            "s-tofu-2"
          ]
        },
        {
          "t": "Add the sliced onion and sauté until the tofu turns golden.",
          "imgs": [
            "s-onion-1",
            "s-onion-2",
            "s-onion-3"
          ]
        },
        {
          "t": "Add the ginger and garlic paste.",
          "imgs": [
            "s-gg-1",
            "s-gg-2"
          ]
        },
        {
          "t": "Pour in the soy sauce.",
          "imgs": [
            "s-soy-1",
            "s-soy-2"
          ]
        },
        {
          "t": "Pour in the vinegar.",
          "imgs": [
            "s-vin-1",
            "s-vin-2"
          ]
        },
        {
          "t": "Add the chilli oil and mix.",
          "imgs": [
            "s-crisp-1",
            "s-crisp-2",
            "s-crisp-3"
          ]
        },
        {
          "t": "Add the boiled dough noodles.",
          "imgs": [
            "s-noodle-1",
            "s-noodle-2"
          ]
        },
        {
          "t": "Add the spinach leaves.",
          "imgs": [
            "s-spin-1",
            "s-spin-2",
            "s-spin-3"
          ]
        },
        {
          "t": "Toss everything until the spinach wilts and the noodles are coated.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Spoon it into a bowl and sprinkle sesame seeds on top.",
          "imgs": [
            "s-sesame-1",
            "s-sesame-2",
            "s-sesame-3"
          ]
        },
        {
          "t": "Toss with a fork and eat hot.",
          "imgs": [
            "s-eat-1",
            "s-eat-2"
          ]
        }
      ],
      "card": "card"
    },
    {
      "id": "white-paneer-curd-gravy",
      "name": "White paneer curd gravy",
      "meal": "Lunch or dinner",
      "minutes": 40,
      "protein": 15,
      "how": "Gas",
      "tools": "Pan, mixie, big bowl, whisk, steel spoon, spatula, knife, lid",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "2 medium, cut in big pieces",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~3",
          "n": "Green chillies",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~8 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 inch piece, in 2 to 3 bits",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1/4 cup (about 30 g)",
          "n": "Cashews (kaju)",
          "tag": "cashews",
          "img": "i-cashew"
        },
        {
          "q": "~6 whole for boiling, ~1/2 tsp powder for the curd",
          "n": "Black pepper (kali mirch)",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "200 g, in small cubes",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 cup (about 200 g), fresh",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~3 tbsp",
          "n": "Fresh cream (malai)",
          "tag": "cream",
          "img": "i-cream"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder",
          "tag": "coriander-powder",
          "img": "i-cpow",
          "alt": [
            "cumin-powder"
          ]
        },
        {
          "q": "~1 tsp",
          "n": "Turmeric powder (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tbsp",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~1 tbsp",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "1 small stick",
          "n": "Cinnamon (dalchini)",
          "tag": "cinnamon",
          "img": "i-cinnamon"
        },
        {
          "q": "~3 pods",
          "n": "Green cardamom (choti elaichi)",
          "tag": "cardamom",
          "img": "i-cardamom"
        },
        {
          "q": "2",
          "n": "Bay leaves (tej patta)",
          "tag": "bay-leaf",
          "img": "i-bay"
        },
        {
          "q": "~1 tsp, or to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp",
          "n": "Dried fenugreek leaves (kasuri methi)",
          "tag": "kasuri-methi",
          "img": "i-kasuri"
        },
        {
          "q": "a small handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "to serve",
          "n": "Roti",
          "tag": "atta",
          "img": "i-roti",
          "opt": true
        }
      ],
      "tags": [
        "gas",
        "blender"
      ],
      "steps": [
        {
          "t": "Put water in a pan on the gas.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Add the cut onions and green chillies.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the garlic cloves and ginger.",
          "imgs": [
            "s-gg-1",
            "s-gg-2"
          ]
        },
        {
          "t": "Add the cashews and whole black pepper. Boil a few minutes until the onion softens.",
          "imgs": [
            "s-cash-1",
            "s-cash-2",
            "s-cash-3"
          ]
        },
        {
          "t": "Strain the boiled mix into a mixie jar.",
          "imgs": [
            "s-jar-1",
            "s-jar-2"
          ]
        },
        {
          "t": "Blend to a smooth paste.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Cut the paneer block into small cubes.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Put the fresh curd in a big bowl.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add the fresh cream (malai).",
          "imgs": [
            "s-cream-1",
            "s-cream-2"
          ]
        },
        {
          "t": "Add the black pepper powder.",
          "imgs": [
            "s-bp-1",
            "s-bp-2"
          ]
        },
        {
          "t": "Add the coriander powder.",
          "imgs": [
            "s-cp-1"
          ]
        },
        {
          "t": "Add the turmeric.",
          "imgs": [
            "s-tur-1",
            "s-tur-2"
          ]
        },
        {
          "t": "Whisk until smooth and creamy.",
          "imgs": [
            "s-whisk-1",
            "s-whisk-2",
            "s-whisk-3"
          ]
        },
        {
          "t": "Add the paneer cubes.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Mix gently with your hand so every cube is coated. Keep aside.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Put the ghee in a clean pan on the gas.",
          "imgs": [
            "s-ghee-1"
          ]
        },
        {
          "t": "Add the butter and let both melt.",
          "imgs": [
            "s-butter-1",
            "s-butter-2"
          ]
        },
        {
          "t": "Add the cinnamon stick.",
          "imgs": [
            "s-cin-1",
            "s-cin-2"
          ]
        },
        {
          "t": "Add the cardamom pods.",
          "imgs": [
            "s-car-1",
            "s-car-2"
          ]
        },
        {
          "t": "Add the bay leaves.",
          "imgs": [
            "s-bay-1",
            "s-bay-2"
          ]
        },
        {
          "t": "Pour in the onion paste.",
          "imgs": [
            "s-paste-1",
            "s-paste-2"
          ]
        },
        {
          "t": "Stir and cook the paste for a few minutes.",
          "imgs": [
            "s-cook-1",
            "s-cook-2",
            "s-cook-3"
          ]
        },
        {
          "t": "Cover with a lid and let it cook.",
          "imgs": [
            "s-lid-1",
            "s-lid-2"
          ]
        },
        {
          "t": "Pour in the curd and paneer mix.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Stir gently until the gravy turns smooth and light yellow.",
          "imgs": [
            "s-stir-1",
            "s-stir-2",
            "s-stir-3"
          ]
        },
        {
          "t": "Add salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Rub the kasuri methi between your palms and sprinkle it in.",
          "imgs": [
            "s-km-1",
            "s-km-2"
          ]
        },
        {
          "t": "Cover with the lid and cook a little more.",
          "imgs": [
            "s-lid2-1",
            "s-lid2-2"
          ]
        },
        {
          "t": "Sprinkle chopped coriander leaves on top.",
          "imgs": [
            "s-cor-1",
            "s-cor-2"
          ]
        },
        {
          "t": "Serve hot with roti.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "card": "card"
    },
    {
      "id": "cucumber-cream-cheese-sandwich",
      "name": "Cucumber cream cheese sandwiches",
      "meal": "Breakfast",
      "minutes": 15,
      "protein": 10,
      "how": "No cooking",
      "tools": "Knife, bowl, spoon",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 medium",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~100 g (1 small block)",
          "n": "Cream cheese",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "~2 tbsp",
          "n": "Eggless mayonnaise (check the pack for the green dot)",
          "tag": "mayonnaise",
          "img": "i-mayo"
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
          "q": "~1 tsp juice",
          "n": "Lemon",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "~3 tbsp",
          "n": "Fresh dill (or coriander), finely chopped",
          "tag": "dill",
          "alt": [
            "coriander-leaves"
          ],
          "img": "i-dill"
        },
        {
          "q": "4 slices",
          "n": "White or brown bread",
          "tag": "bread",
          "img": "i-bread"
        }
      ],
      "steps": [
        {
          "t": "Slice the cucumber into thin rounds.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Put the cream cheese in a bowl.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2"
          ]
        },
        {
          "t": "Add the mayonnaise on top.",
          "imgs": [
            "s-mayo-1",
            "s-mayo-2"
          ]
        },
        {
          "t": "Add salt, black pepper and a squeeze of lemon.",
          "imgs": [
            "s-season-1",
            "s-season-2",
            "s-season-3"
          ]
        },
        {
          "t": "Add the chopped dill.",
          "imgs": [
            "s-herb-1",
            "s-herb-2"
          ]
        },
        {
          "t": "Mix well until it is a thick, creamy spread.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Cut the crusts off the bread slices.",
          "imgs": [
            "s-crust-1",
            "s-crust-2"
          ]
        },
        {
          "t": "Spread the filling thickly on a slice.",
          "imgs": [
            "s-spread-1",
            "s-spread-2"
          ]
        },
        {
          "t": "Cover the spread with overlapping cucumber rounds.",
          "imgs": [
            "s-layer-1",
            "s-layer-2"
          ]
        },
        {
          "t": "Close with a second slice of bread.",
          "imgs": [
            "s-top-1"
          ]
        },
        {
          "t": "Cut into finger-sized sandwiches.",
          "imgs": [
            "s-fingers-1",
            "s-fingers-2"
          ]
        },
        {
          "t": "Serve on a plate with a few cucumber rounds.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "quick"
      ],
      "card": "card"
    },
    {
      "id": "saunf-lassi",
      "name": "Saunf lassi",
      "meal": "Drink",
      "minutes": 5,
      "protein": 10,
      "how": "No cooking",
      "tools": "Small blender jar (mixie), glass",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tbsp",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-fennel"
        },
        {
          "q": "~2 tbsp, crumbled",
          "n": "Jaggery (gur)",
          "tag": "jaggery",
          "img": "i-jaggery"
        },
        {
          "q": "~10 leaves",
          "n": "Mint leaves (pudina)",
          "tag": "mint",
          "img": "i-mint"
        },
        {
          "q": "1 small slice (~1 cm)",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~8",
          "n": "Almonds, peeled",
          "tag": "almonds",
          "img": "i-almonds"
        },
        {
          "q": "~1 cup (250 g), thick",
          "n": "Curd (dahi)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1 tsp, chopped",
          "n": "Pistachios",
          "tag": "pistachios",
          "opt": true,
          "img": "i-pistachio"
        },
        {
          "q": "a pinch",
          "n": "Dried rose petals",
          "tag": "rose-petals",
          "opt": true,
          "img": "i-rose"
        }
      ],
      "steps": [
        {
          "t": "Put the fennel seeds in a small blender jar.",
          "imgs": [
            "s-fennel-1",
            "s-fennel-2"
          ]
        },
        {
          "t": "Add the crumbled jaggery.",
          "imgs": [
            "s-jaggery-1"
          ]
        },
        {
          "t": "Add the mint leaves.",
          "imgs": [
            "s-mint-1",
            "s-mint-2"
          ]
        },
        {
          "t": "Add the slice of ginger.",
          "imgs": [
            "s-ginger-1"
          ]
        },
        {
          "t": "Add the peeled almonds.",
          "imgs": [
            "s-almond-1"
          ]
        },
        {
          "t": "Add the curd, about 3 big spoonfuls.",
          "imgs": [
            "s-curd-1",
            "s-curd-2",
            "s-curd-3"
          ]
        },
        {
          "t": "Blend until smooth and frothy.",
          "imgs": [
            "s-blend-1"
          ]
        },
        {
          "t": "Pour into a glass.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Top with pistachios, rose petals and a mint leaf.",
          "imgs": [
            "s-top-1",
            "s-top-2"
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
      "id": "paneer-cheese-cucumber-sandwich",
      "name": "Paneer cheese cucumber sandwiches",
      "meal": "Snack",
      "minutes": 15,
      "protein": 20,
      "how": "No cooking",
      "tools": "Blender jar (mixie), bowl, knife, tissue paper",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 medium",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~100 g (1 small block)",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1/2 cup (100 g)",
          "n": "Thick curd (hung curd)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~4 small cubes (40 g)",
          "n": "Processed cheese cubes",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "4 to 5 cloves",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "a pinch",
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "a pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "4 slices",
          "n": "White bread",
          "tag": "bread",
          "img": "i-bread"
        }
      ],
      "steps": [
        {
          "t": "Slice the cucumber into thin rounds.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Lay the slices in a single layer on tissue paper.",
          "imgs": [
            "s-tissue-1",
            "s-tissue-2",
            "s-tissue-3"
          ]
        },
        {
          "t": "Cover with more tissue paper and press to soak up the water.",
          "imgs": [
            "s-press-1",
            "s-press-2",
            "s-press-3"
          ]
        },
        {
          "t": "Crumble the paneer into a blender jar.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
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
          "t": "Add the cheese cubes.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2"
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
          "t": "Blend until smooth and creamy.",
          "imgs": [
            "s-blend-1",
            "s-blend-2"
          ]
        },
        {
          "t": "Scrape the blended mix out into a bowl.",
          "imgs": [
            "s-pour-1",
            "s-pour-2",
            "s-pour-3"
          ]
        },
        {
          "t": "Mix well with a spoon.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "Sprinkle in the black pepper and salt.",
          "imgs": [
            "s-season-1",
            "s-season-2"
          ]
        },
        {
          "t": "Add the chopped coriander and mix into a thick spread.",
          "imgs": [
            "s-herb-1",
            "s-herb-2",
            "s-herb-3"
          ]
        },
        {
          "t": "Cut the crusts off the bread slices.",
          "imgs": [
            "s-crust-1",
            "s-crust-2",
            "s-crust-3"
          ]
        },
        {
          "t": "Spread the filling thickly on two slices.",
          "imgs": [
            "s-spread-1",
            "s-spread-2",
            "s-spread-3"
          ]
        },
        {
          "t": "Cover the spread with cucumber rounds.",
          "imgs": [
            "s-layer-1",
            "s-layer-2",
            "s-layer-3"
          ]
        },
        {
          "t": "Spread filling on the other two slices and close the sandwiches.",
          "imgs": [
            "s-close-1",
            "s-close-2"
          ]
        },
        {
          "t": "Cut each sandwich diagonally into triangles.",
          "imgs": [
            "s-triangle-1",
            "s-triangle-2",
            "s-triangle-3"
          ]
        },
        {
          "t": "Serve on a plate.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "blender",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "rajma-paneer-roti-tacos",
      "name": "Rajma paneer roti tacos",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 15,
      "how": "Gas",
      "tools": "Non-stick pan, gas, flat press (masher), fork, bowl, brush",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3/4 cup (130 g), boiled",
          "n": "Kidney beans (rajma)",
          "tag": "rajma",
          "img": "i-rajma"
        },
        {
          "q": "~50 g, grated",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "a pinch",
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
          "n": "Cumin powder (jeera)",
          "tag": "cumin-powder",
          "img": "i-cumin"
        },
        {
          "q": "~1 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "opt": true,
          "img": "i-flakes"
        },
        {
          "q": "~2 tbsp",
          "n": "Eggless mayonnaise (or hung curd)",
          "tag": "mayonnaise",
          "alt": [
            "curd"
          ],
          "img": "i-mayo"
        },
        {
          "q": "~1 tbsp",
          "n": "Schezwan sauce",
          "tag": "schezwan-sauce",
          "img": "i-schezwan"
        },
        {
          "q": "~1/2 tsp",
          "n": "Oregano",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Red onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 tsp",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "2 small rotis",
          "n": "Roti (chapati)",
          "tag": "atta",
          "img": "i-roti"
        },
        {
          "q": "2 slices",
          "n": "Cheese slices",
          "tag": "cheese",
          "img": "i-cheese"
        }
      ],
      "steps": [
        {
          "t": "Put the boiled kidney beans on a plate.",
          "imgs": [
            "s-beans-1",
            "s-beans-2"
          ]
        },
        {
          "t": "Mash the beans with a fork.",
          "imgs": [
            "s-mash-1",
            "s-mash-2"
          ]
        },
        {
          "t": "Add the grated paneer.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
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
          "t": "Add the red chilli powder, cumin powder and chilli flakes.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Mix everything well with your hand.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Shape the mix into round, flat patties.",
          "imgs": [
            "s-patty-1",
            "s-patty-2",
            "s-patty-3"
          ]
        },
        {
          "t": "In a small bowl, put the mayo and add the schezwan sauce.",
          "imgs": [
            "s-mayo-1",
            "s-mayo-2"
          ]
        },
        {
          "t": "Add salt, oregano and chilli flakes.",
          "imgs": [
            "s-season-1",
            "s-season-2"
          ]
        },
        {
          "t": "Mix well, then stir in the chopped onion.",
          "imgs": [
            "s-season-3",
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Heat a pan on the gas and brush it with ghee.",
          "imgs": [
            "s-ghee-1",
            "s-ghee-2"
          ]
        },
        {
          "t": "Put one patty on the pan.",
          "imgs": [
            "s-put-1"
          ]
        },
        {
          "t": "Place a roti on top of the patty.",
          "imgs": [
            "s-roti-1"
          ]
        },
        {
          "t": "Press down hard with a flat press to smash it flat.",
          "imgs": [
            "s-press-1",
            "s-press-2",
            "s-press-3"
          ]
        },
        {
          "t": "Sprinkle chilli flakes on the roti.",
          "imgs": [
            "s-flakes-1",
            "s-flakes-2"
          ]
        },
        {
          "t": "Flip it and brush the patty side with ghee until crisp.",
          "imgs": [
            "s-flip-1",
            "s-flip-2",
            "s-flip-3"
          ]
        },
        {
          "t": "Lift it onto a plate with the patty side up.",
          "imgs": [
            "s-plate-1",
            "s-plate-2"
          ]
        },
        {
          "t": "Lay the cheese slices on the patty.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2"
          ]
        },
        {
          "t": "Sprinkle some oregano on the cheese.",
          "imgs": [
            "s-oregano-1"
          ]
        },
        {
          "t": "Spoon the onion mayo mix on top.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2"
          ]
        },
        {
          "t": "Fold the roti over to close the taco.",
          "imgs": [
            "s-fold-1",
            "s-fold-2"
          ]
        },
        {
          "t": "Serve hot. Repeat for the next taco.",
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
      "id": "air-fryer-paneer-veg-roast",
      "name": "Air fryer paneer and veggies",
      "meal": "Lunch or dinner",
      "minutes": 35,
      "protein": 20,
      "how": "Air fryer",
      "tools": "Air fryer with glass pot, parchment paper, spoon or tongs, bowl",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 cup florets (~100 g)",
          "n": "Broccoli",
          "tag": "broccoli",
          "img": "i-broccoli"
        },
        {
          "q": "~8",
          "n": "Baby corn",
          "tag": "baby-corn",
          "img": "i-babycorn"
        },
        {
          "q": "1 medium",
          "n": "Carrot (red carrot), cut in sticks",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~8, halved",
          "n": "Button mushrooms",
          "tag": "mushroom",
          "img": "i-mushroom"
        },
        {
          "q": "~1 cup",
          "n": "Mixed capsicum (red, yellow, green), chopped",
          "tag": "capsicum",
          "img": "i-pepper-veg"
        },
        {
          "q": "~150 g, cubed",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "1 small, in petals",
          "n": "Red onion",
          "tag": "onion",
          "img": "i-onion"
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
          "img": "i-blackpepper"
        },
        {
          "q": "~1 tsp",
          "n": "Mixed herbs",
          "tag": "mixed-herbs",
          "img": "i-herbs"
        },
        {
          "q": "~1 tbsp",
          "n": "Olive oil (or any oil)",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "1/2 lemon",
          "n": "Lemon",
          "tag": "lemon",
          "opt": true,
          "img": "i-lemon"
        },
        {
          "q": "~1/2 cup",
          "n": "Thick curd, for the dip",
          "tag": "curd",
          "opt": true,
          "img": "i-curd"
        },
        {
          "q": "a few slices",
          "n": "Cucumber, for the dip",
          "tag": "cucumber",
          "opt": true,
          "img": "i-cucumber"
        }
      ],
      "steps": [
        {
          "t": "Take the glass pot out of the air fryer and line it with parchment paper.",
          "imgs": [
            "s-liner-1",
            "s-liner-2",
            "s-liner-3"
          ]
        },
        {
          "t": "Add the broccoli.",
          "imgs": [
            "s-broccoli-1",
            "s-broccoli-2",
            "s-broccoli-3"
          ]
        },
        {
          "t": "Add the baby corn.",
          "imgs": [
            "s-corn-1",
            "s-corn-2"
          ]
        },
        {
          "t": "Add the carrot sticks.",
          "imgs": [
            "s-carrot-1",
            "s-carrot-2"
          ]
        },
        {
          "t": "Add the mushrooms.",
          "imgs": [
            "s-mushroom-1",
            "s-mushroom-2"
          ]
        },
        {
          "t": "Add the chopped capsicum.",
          "imgs": [
            "s-pepper-1",
            "s-pepper-2"
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
          "t": "Add the red onion petals.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Sprinkle on the salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Sprinkle on the black pepper.",
          "imgs": [
            "s-blackpepper-1",
            "s-blackpepper-2",
            "s-blackpepper-3"
          ]
        },
        {
          "t": "Sprinkle on the mixed herbs.",
          "imgs": [
            "s-herbs-1",
            "s-herbs-2",
            "s-herbs-3"
          ]
        },
        {
          "t": "Drizzle the olive oil over everything.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Toss well until every piece is coated.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Set the air fryer to 190 C and 15 minutes.",
          "imgs": [
            "s-set-1",
            "s-set-2",
            "s-set-3"
          ]
        },
        {
          "t": "Fit the pot back into the air fryer and start.",
          "imgs": [
            "s-start-1",
            "s-start-2",
            "s-start-3"
          ]
        },
        {
          "t": "When the timer ends, lift out the pot. The veggies look browned.",
          "imgs": [
            "s-done-1",
            "s-done-2"
          ]
        },
        {
          "t": "Put the veggies on a plate.",
          "imgs": [
            "s-plate-1",
            "s-plate-2"
          ]
        },
        {
          "t": "Squeeze a little lemon juice over them.",
          "imgs": [
            "s-lemon-1",
            "s-lemon-2"
          ]
        },
        {
          "t": "Serve with a cucumber curd dip on the side.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "air-fryer",
        "high-protein",
        "high-fibre"
      ],
      "card": "card"
    },
    {
      "id": "peri-peri-corn-paneer-sandwich",
      "name": "Peri peri corn paneer sandwich",
      "meal": "Snack",
      "minutes": 20,
      "protein": 15,
      "how": "Gas",
      "tools": "Big bowl, spoon, pan, gas, knife",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3/4 cup (120 g), boiled",
          "n": "Sweet corn kernels",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~1/2 cup, finely chopped",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~1/4 cup, finely chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~100 g, small cubes",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli-powder"
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
          "img": "i-blackpepper"
        },
        {
          "q": "~1 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~1 tsp",
          "n": "Oregano",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "~2 tbsp",
          "n": "Low fat mayonnaise (eggless)",
          "tag": "mayonnaise",
          "img": "i-mayo"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 tbsp",
          "n": "Red chilli sauce",
          "tag": "chilli-sauce",
          "img": "i-sauce"
        },
        {
          "q": "~1/4 cup (30 g), grated or diced",
          "n": "Cheese",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "6 slices",
          "n": "Bread",
          "tag": "bread",
          "img": "i-bread"
        }
      ],
      "steps": [
        {
          "t": "Put the boiled sweet corn in a big bowl.",
          "imgs": [
            "s-corn-1",
            "s-corn-2"
          ]
        },
        {
          "t": "Add the chopped capsicum.",
          "imgs": [
            "s-capsicum-1",
            "s-capsicum-2"
          ]
        },
        {
          "t": "Add the chopped onion.",
          "imgs": [
            "s-onion-1"
          ]
        },
        {
          "t": "Add the paneer cubes.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2",
            "s-paneer-3"
          ]
        },
        {
          "t": "Add the red chilli powder, salt, black pepper, chilli flakes and oregano.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Add the mayonnaise.",
          "imgs": [
            "s-mayo-1",
            "s-mayo-2"
          ]
        },
        {
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        },
        {
          "t": "Add the red chilli sauce.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2",
            "s-sauce-3"
          ]
        },
        {
          "t": "Add the cheese.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2",
            "s-cheese-3"
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
          "t": "Pile a thick layer of the filling on a slice of bread.",
          "imgs": [
            "s-fill-1",
            "s-fill-2",
            "s-fill-3"
          ]
        },
        {
          "t": "Cover with a second slice of bread.",
          "imgs": [
            "s-close-1",
            "s-close-2"
          ]
        },
        {
          "t": "Place the sandwich on a hot pan and press it down.",
          "imgs": [
            "s-pan-1",
            "s-pan-2"
          ]
        },
        {
          "t": "Toast until golden brown on both sides.",
          "imgs": [
            "s-toast-1",
            "s-toast-3"
          ]
        },
        {
          "t": "Cut the sandwich in half.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Serve hot.",
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
      "id": "spiced-chickpea-paneer-salad",
      "name": "Spiced chickpea paneer salad",
      "meal": "Lunch or dinner",
      "minutes": 20,
      "protein": 15,
      "how": "Gas",
      "tools": "Non-stick pan, gas, spatula, bowl or box",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (165 g), boiled",
          "n": "Chickpeas (kabuli chana)",
          "tag": "chickpeas",
          "img": "i-chickpeas"
        },
        {
          "q": "a pinch",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli-powder"
        },
        {
          "q": "a pinch",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "1 small",
          "n": "Cucumber, cut in half moons",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "1 small",
          "n": "Red onion, chopped",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "1 medium",
          "n": "Tomato, chopped",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~50 g, crumbled",
          "n": "Paneer",
          "tag": "paneer",
          "alt": [
            "cheese"
          ],
          "img": "i-paneer"
        },
        {
          "q": "a handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 tbsp",
          "n": "Salad dressing (olive oil, lemon and herbs)",
          "tag": "salad-dressing",
          "img": "i-dressing"
        }
      ],
      "steps": [
        {
          "t": "Heat a non-stick pan on the gas and add the boiled chickpeas.",
          "imgs": [
            "s-pan-1",
            "s-pan-2"
          ]
        },
        {
          "t": "Sprinkle on a pinch of turmeric.",
          "imgs": [
            "s-turmeric-1",
            "s-turmeric-2"
          ]
        },
        {
          "t": "Add the red chilli powder.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add a pinch of salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Stir and fry until the chickpeas turn golden and crisp.",
          "imgs": [
            "s-fry-1",
            "s-fry-2",
            "s-fry-3"
          ]
        },
        {
          "t": "In a box, add the cucumber half moons.",
          "imgs": [
            "s-cucumber-1",
            "s-cucumber-2"
          ]
        },
        {
          "t": "Add the chopped red onion.",
          "imgs": [
            "s-onion-1"
          ]
        },
        {
          "t": "Add the chopped tomato.",
          "imgs": [
            "s-tomato-1"
          ]
        },
        {
          "t": "Tip in the crisp chickpeas.",
          "imgs": [
            "s-chickpeas-1",
            "s-chickpeas-2"
          ]
        },
        {
          "t": "Crumble the paneer on top.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "Scatter the chopped coriander on top.",
          "imgs": [
            "s-coriander-1",
            "s-coriander-2"
          ]
        },
        {
          "t": "Spoon the dressing over the salad.",
          "imgs": [
            "s-dressing-1",
            "s-dressing-2",
            "s-dressing-3"
          ]
        },
        {
          "t": "Toss well, then shake the box to mix.",
          "imgs": [
            "s-toss-1",
            "s-toss-2"
          ]
        },
        {
          "t": "Serve right away.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
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
      "id": "peri-peri-potato-wedges",
      "name": "Peri peri potato wedges",
      "meal": "Snack",
      "minutes": 40,
      "protein": 5,
      "how": "Gas + air fryer",
      "tools": "Pot, gas, bowl, slotted spoon, air fryer (or oven), baking paper",
      "serves": 3,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~4 medium (600 g)",
          "n": "Potatoes (aloo)",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~2 tbsp",
          "n": "Butter",
          "tag": "butter",
          "img": "i-butter"
        },
        {
          "q": "~1 tsp",
          "n": "Oregano",
          "tag": "oregano",
          "img": "i-oregano"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Chilli flakes",
          "tag": "chilli-flakes",
          "img": "i-flakes"
        },
        {
          "q": "~1/2 tsp",
          "n": "Garlic powder",
          "tag": "garlic-powder",
          "img": "i-garlic-powder"
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
          "q": "~2 tbsp, chopped",
          "n": "Fresh coriander",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1 tsp",
          "n": "Peri peri masala, to finish",
          "tag": "peri-peri-masala",
          "opt": true,
          "img": "i-peri"
        },
        {
          "q": "~3 tbsp",
          "n": "Tandoori mayo dip (ready-made, check it is eggless)",
          "tag": "tandoori-sauce",
          "opt": true,
          "img": "i-mayo"
        }
      ],
      "steps": [
        {
          "t": "Cut each potato lengthwise into thick wedges.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Rinse the wedges in a bowl of water.",
          "imgs": [
            "s-rinse-1",
            "s-rinse-2"
          ]
        },
        {
          "t": "Drop the wedges into a pot of boiling water and boil until 80% cooked.",
          "imgs": [
            "s-boil-1",
            "s-boil-2",
            "s-boil-3",
            "s-boil-4"
          ]
        },
        {
          "t": "Melt the butter in a big bowl.",
          "imgs": [
            "s-butter-1",
            "s-butter-2"
          ]
        },
        {
          "t": "Add oregano, turmeric, chilli flakes, garlic powder, salt and black pepper.",
          "imgs": [
            "s-spice-1"
          ]
        },
        {
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-herb-1",
            "s-herb-2"
          ]
        },
        {
          "t": "Mix into a loose herb butter.",
          "imgs": [
            "s-mixherb-1"
          ]
        },
        {
          "t": "Lift the boiled wedges into the bowl with a slotted spoon.",
          "imgs": [
            "s-lift-1",
            "s-lift-2",
            "s-lift-3"
          ]
        },
        {
          "t": "Toss until every wedge is coated.",
          "imgs": [
            "s-toss-1",
            "s-toss-2"
          ]
        },
        {
          "t": "Bake or air fry until golden and crisp.",
          "imgs": [
            "s-bake-1"
          ]
        },
        {
          "t": "Tip the hot wedges onto baking paper.",
          "imgs": [
            "s-paper-1",
            "s-paper-2"
          ]
        },
        {
          "t": "Sprinkle peri peri masala on top.",
          "imgs": [
            "s-peri-1",
            "s-peri-2"
          ]
        },
        {
          "t": "Serve with tandoori mayo for dipping.",
          "imgs": [
            "s-dip-1",
            "s-dip-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "air-fryer"
      ],
      "card": "card"
    },
    {
      "id": "chilli-soya-bowl",
      "name": "Chilli soya",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 30,
      "how": "Gas",
      "tools": "Pot, wok or deep pan, gas, brush, bowl",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~60 g (1 cup dry)",
          "n": "Soya chunks",
          "tag": "soya-chunks",
          "img": "i-soya"
        },
        {
          "q": "~1 tsp in total",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli-powder"
        },
        {
          "q": "~3 tbsp in total",
          "n": "Corn flour",
          "tag": "corn-flour",
          "img": "i-cornflour"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil, for brushing the pan",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~5 cloves, chopped",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "1 medium, in chunks",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "1 medium, in chunks",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "1, sliced",
          "n": "Green chilli",
          "tag": "green-chilli",
          "opt": true,
          "img": "i-green-chilli"
        },
        {
          "q": "~2 tbsp",
          "n": "Tomato ketchup",
          "tag": "tomato-ketchup",
          "img": "i-ketchup"
        },
        {
          "q": "~1 tbsp",
          "n": "Vinegar",
          "tag": "vinegar",
          "img": "i-vinegar"
        },
        {
          "q": "~1 tbsp",
          "n": "Soy sauce",
          "tag": "soy-sauce",
          "img": "i-soy-sauce"
        },
        {
          "q": "~1/4 cup, plus water for boiling",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1 tsp",
          "n": "Sesame seeds",
          "tag": "sesame-seeds",
          "opt": true,
          "img": "i-sesame"
        }
      ],
      "steps": [
        {
          "t": "Boil water in a pot and add a pinch of salt.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Add the soya chunks and boil until soft.",
          "imgs": [
            "s-boil-1",
            "s-boil-2",
            "s-boil-3"
          ]
        },
        {
          "t": "Lift out the chunks and squeeze out all the water.",
          "imgs": [
            "s-lift-1",
            "s-lift-2",
            "s-lift-3"
          ]
        },
        {
          "t": "Add a pinch of salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Add the red chilli powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
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
          "t": "Mix well until every chunk is coated.",
          "imgs": [
            "s-flour-3"
          ]
        },
        {
          "t": "Brush a wok with oil and heat it on the gas.",
          "imgs": [
            "s-brush-1",
            "s-brush-2"
          ]
        },
        {
          "t": "Spread the chunks in the wok and fry until golden.",
          "imgs": [
            "s-fry-1",
            "s-fry-2",
            "s-fry-3"
          ]
        },
        {
          "t": "Take the fried chunks out into a bowl.",
          "imgs": [
            "s-out-1",
            "s-out-2"
          ]
        },
        {
          "t": "Add a little oil to the same wok.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add the chopped garlic.",
          "imgs": [
            "s-garlic-1",
            "s-garlic-2"
          ]
        },
        {
          "t": "Add the onion chunks and green chilli.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the capsicum chunks.",
          "imgs": [
            "s-capsicum-1",
            "s-capsicum-2"
          ]
        },
        {
          "t": "Add the ketchup, vinegar and soy sauce.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2",
            "s-sauce-3"
          ]
        },
        {
          "t": "Stir well.",
          "imgs": [
            "s-stir-1"
          ]
        },
        {
          "t": "Add a spoon of salt.",
          "imgs": [
            "s-salt2-1",
            "s-salt2-2"
          ]
        },
        {
          "t": "Mix corn flour with water and pour it in.",
          "imgs": [
            "s-slurry-1",
            "s-slurry-2"
          ]
        },
        {
          "t": "Add a splash of water.",
          "imgs": [
            "s-water2-1"
          ]
        },
        {
          "t": "Stir until the sauce turns thick and glossy.",
          "imgs": [
            "s-thicken-1",
            "s-thicken-2"
          ]
        },
        {
          "t": "Add the fried soya chunks.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Toss until every chunk is coated in sauce.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3"
          ]
        },
        {
          "t": "Spoon it into a bowl.",
          "imgs": [
            "s-bowl-1",
            "s-bowl-2",
            "s-bowl-3"
          ]
        },
        {
          "t": "Sprinkle sesame seeds on top and serve hot.",
          "imgs": [
            "s-sesame-1",
            "s-sesame-2",
            "s-sesame-3"
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
      "id": "hung-curd-veg-sandwich",
      "name": "Hung curd veggie sandwich",
      "meal": "Breakfast",
      "minutes": 15,
      "protein": 10,
      "how": "No cooking",
      "tools": "Bowl, spoon, knife",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 cup (200 g)",
          "n": "Hung curd (thick curd, water drained)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/4 cup, grated",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~1/4 cup, finely chopped",
          "n": "Cucumber",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1/4 cup, shredded",
          "n": "Lettuce",
          "tag": "lettuce",
          "img": "i-lettuce"
        },
        {
          "q": "~2 tbsp, finely chopped",
          "n": "Red onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 tbsp, chopped",
          "n": "Coriander leaves",
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
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~3 tbsp",
          "n": "Green chutney (mint-coriander)",
          "tag": "green-chutney",
          "img": "i-chutney"
        },
        {
          "q": "4 slices",
          "n": "White bread, crusts removed",
          "tag": "bread",
          "img": "i-bread"
        }
      ],
      "steps": [
        {
          "t": "Put the hung curd in a wide bowl.",
          "imgs": [
            "s-curd-1",
            "s-curd-2"
          ]
        },
        {
          "t": "Add the grated carrot.",
          "imgs": [
            "s-carrot-1",
            "s-carrot-2"
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
          "t": "Add the shredded lettuce.",
          "imgs": [
            "s-lettuce-1",
            "s-lettuce-2"
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
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-herb-1",
            "s-herb-2"
          ]
        },
        {
          "t": "Add a pinch of salt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Add a pinch of black pepper.",
          "imgs": [
            "s-pepper-1",
            "s-pepper-2"
          ]
        },
        {
          "t": "Mix well until everything is coated in the curd.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Spread green chutney on two slices of bread.",
          "imgs": [
            "s-chutney-1",
            "s-chutney-2"
          ]
        },
        {
          "t": "Pile the curd filling on the chutney.",
          "imgs": [
            "s-fill-1",
            "s-fill-2",
            "s-fill-3"
          ]
        },
        {
          "t": "Spread chutney on two more slices and close the sandwiches, chutney side down.",
          "imgs": [
            "s-close-1",
            "s-close-2"
          ]
        },
        {
          "t": "Press down gently.",
          "imgs": [
            "s-press-1",
            "s-press-2"
          ]
        },
        {
          "t": "Cut each sandwich into slices.",
          "imgs": [
            "s-cut-1",
            "s-cut-2",
            "s-cut-3"
          ]
        },
        {
          "t": "Serve with green chutney on the side.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "no-cook",
        "quick"
      ],
      "card": "card"
    },
    {
      "id": "murmura-bhel-chaat",
      "name": "Murmura bhel chaat",
      "meal": "Snack",
      "minutes": 15,
      "protein": 10,
      "how": "Gas",
      "tools": "Kadhai (wok), gas, wooden spatula, plate",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1/2 cup (70 g)",
          "n": "Peanuts",
          "tag": "peanuts",
          "img": "i-peanuts"
        },
        {
          "q": "a pinch",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli-powder"
        },
        {
          "q": "~8 leaves",
          "n": "Curry leaves",
          "tag": "curry-leaves",
          "img": "i-curry-leaves"
        },
        {
          "q": "~4 cups (60 g)",
          "n": "Puffed rice (murmura)",
          "tag": "puffed-rice",
          "img": "i-murmura"
        },
        {
          "q": "1 medium, chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "1 medium, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1/2 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat-masala"
        },
        {
          "q": "~1/4 cup",
          "n": "Sev (thin gram flour noodles)",
          "tag": "sev",
          "img": "i-sev"
        },
        {
          "q": "~1/4 cup",
          "n": "Namkeen mixture",
          "tag": "namkeen",
          "opt": true,
          "img": "i-namkeen"
        },
        {
          "q": "1 to 2, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-green-chilli"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        }
      ],
      "steps": [
        {
          "t": "Heat the oil in a kadhai on the gas.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Add the peanuts and fry, stirring often.",
          "imgs": [
            "s-peanuts-1",
            "s-peanuts-2",
            "s-peanuts-3"
          ]
        },
        {
          "t": "Add the turmeric.",
          "imgs": [
            "s-turmeric-1"
          ]
        },
        {
          "t": "Add the red chilli powder.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Stir until the peanuts are coated in the spices.",
          "imgs": [
            "s-stir-1",
            "s-stir-2"
          ]
        },
        {
          "t": "Add the curry leaves.",
          "imgs": [
            "s-leaves-1",
            "s-leaves-2"
          ]
        },
        {
          "t": "Add the puffed rice.",
          "imgs": [
            "s-murmura-1",
            "s-murmura-2",
            "s-murmura-3"
          ]
        },
        {
          "t": "Stir until the puffed rice is coated in the spices.",
          "imgs": [
            "s-coat-1",
            "s-coat-2",
            "s-coat-3"
          ]
        },
        {
          "t": "Add the chopped onion.",
          "imgs": [
            "s-onion-1",
            "s-onion-2",
            "s-onion-3"
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
          "t": "Add the salt.",
          "imgs": [
            "s-salt-1",
            "s-salt-2"
          ]
        },
        {
          "t": "Sprinkle on the chaat masala.",
          "imgs": [
            "s-masala-1"
          ]
        },
        {
          "t": "Add the sev.",
          "imgs": [
            "s-sev-1"
          ]
        },
        {
          "t": "Add the namkeen mixture.",
          "imgs": [
            "s-namkeen-1",
            "s-namkeen-2"
          ]
        },
        {
          "t": "Add the chopped green chilli.",
          "imgs": [
            "s-chilli2-1"
          ]
        },
        {
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-herb-1",
            "s-herb-2",
            "s-herb-3"
          ]
        },
        {
          "t": "Toss everything well so it mixes evenly.",
          "imgs": [
            "s-toss-1",
            "s-toss-2",
            "s-toss-3",
            "s-toss-4"
          ]
        },
        {
          "t": "Serve on a plate right away so it stays crisp.",
          "imgs": [
            "s-serve-1",
            "s-serve-2",
            "s-serve-3"
          ]
        }
      ],
      "tags": [
        "gas",
        "quick"
      ],
      "card": "card"
    },
    {
      "id": "aloo-kasa",
      "name": "Aloo kasa (spicy baby potatoes)",
      "meal": "Lunch or dinner",
      "minutes": 10,
      "protein": 5,
      "how": "Gas",
      "tools": "Kadai, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~8 small (350 g), boiled and peeled",
          "n": "Baby potatoes (chhote aloo)",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~2 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~2, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1 tbsp, chopped",
          "n": "Garlic and ginger",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~2 medium, sliced",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2 medium, cut in wedges",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder (dhania)",
          "tag": "coriander-powder",
          "img": "i-coriander-powder"
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
          "img": "i-chilli-powder"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "a handful",
          "n": "Coriander leaves, chopped",
          "tag": "coriander-leaves",
          "opt": true,
          "img": "i-coriander"
        },
        {
          "q": "~1 cup, cooked",
          "n": "Cooked rice, to serve",
          "tag": "rice",
          "opt": true,
          "img": "i-rice"
        }
      ],
      "steps": [
        {
          "t": "Keep the boiled, peeled baby potatoes ready.",
          "imgs": [
            "s-potato-1"
          ]
        },
        {
          "t": "Heat oil in a kadai on medium heat.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add cumin seeds and let them crackle.",
          "imgs": [
            "s-cumin-1",
            "s-cumin-2"
          ]
        },
        {
          "t": "Add chopped green chilli, then chopped garlic and ginger. Fry for a few seconds.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2",
            "s-chilli-3"
          ]
        },
        {
          "t": "Add sliced onion and fry until it softens.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add the tomato wedges and stir.",
          "imgs": [
            "s-tomato-1",
            "s-tomato-2"
          ]
        },
        {
          "t": "Add coriander powder, turmeric, red chilli powder and salt.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Cook, stirring, until the tomato melts and the masala turns thick and dark.",
          "imgs": [
            "s-masala-1",
            "s-masala-2"
          ]
        },
        {
          "t": "Add the boiled potatoes.",
          "imgs": [
            "s-add-1",
            "s-add-2"
          ]
        },
        {
          "t": "Toss for a few minutes until the masala coats every potato.",
          "imgs": [
            "s-toss-1",
            "s-toss-2"
          ]
        },
        {
          "t": "Top with chopped coriander and serve hot with rice.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "quick",
        "one-pot"
      ],
      "card": "card"
    },
    {
      "id": "aloo-corn-paneer-kachori",
      "name": "Aloo corn paneer kachori",
      "meal": "Snack",
      "minutes": 60,
      "protein": 15,
      "how": "Gas",
      "tools": "Non-stick pan, kadai, rolling pin, gas",
      "serves": 4,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~2 tbsp for filling + ~4 tbsp for dough, plus oil for deep frying",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "~1 tsp",
          "n": "Fennel seeds (saunf)",
          "tag": "fennel-seeds",
          "img": "i-fennel"
        },
        {
          "q": "~3, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-chilli"
        },
        {
          "q": "~1 tbsp, grated",
          "n": "Ginger",
          "tag": "ginger",
          "img": "i-ginger"
        },
        {
          "q": "~1 cup (150 g)",
          "n": "Sweet corn",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~1 cup (150 g)",
          "n": "Green peas",
          "tag": "peas",
          "img": "i-peas"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli-powder"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder (dhania)",
          "tag": "coriander-powder",
          "img": "i-coriander-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Garam masala",
          "tag": "garam-masala",
          "img": "i-garam-masala"
        },
        {
          "q": "~1 tsp for filling + ~1/2 tsp for dough",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~3 medium (300 g), boiled and mashed",
          "n": "Potato (aloo)",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~100 g, diced",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~2 cups (250 g)",
          "n": "Refined flour (maida)",
          "tag": "all-purpose-flour",
          "img": "i-flour"
        },
        {
          "q": "~1 tsp",
          "n": "Carom seeds (ajwain)",
          "tag": "ajwain",
          "img": "i-ajwain"
        },
        {
          "q": "~1 tsp",
          "n": "Nigella seeds (kalonji)",
          "tag": "nigella-seeds",
          "img": "i-kalonji"
        },
        {
          "q": "~1/2 cup, as needed",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "a small bowl",
          "n": "Tomato ketchup, to dip",
          "tag": "tomato-ketchup",
          "opt": true,
          "img": "i-ketchup"
        }
      ],
      "steps": [
        {
          "t": "Heat oil in a non-stick pan on the gas.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add cumin seeds and fennel seeds. Let them crackle.",
          "imgs": [
            "s-seeds-1",
            "s-seeds-2"
          ]
        },
        {
          "t": "Add chopped green chilli and grated ginger. Stir.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add the sweet corn and green peas.",
          "imgs": [
            "s-corn-1",
            "s-corn-2"
          ]
        },
        {
          "t": "Add red chilli powder, coriander powder, turmeric and garam masala.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add salt and mix well.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Add the mashed boiled potatoes and mix.",
          "imgs": [
            "s-potato-1",
            "s-potato-2"
          ]
        },
        {
          "t": "Add the diced paneer and mix gently. Keep this filling aside.",
          "imgs": [
            "s-paneer-1",
            "s-paneer-2"
          ]
        },
        {
          "t": "In a big bowl, mix the flour with salt, ajwain and kalonji.",
          "imgs": [
            "s-flour-1",
            "s-flour-2"
          ]
        },
        {
          "t": "Add oil and rub it into the flour with your fingers.",
          "imgs": [
            "s-oilrub-1",
            "s-oilrub-2"
          ]
        },
        {
          "t": "Add water and knead into a firm dough.",
          "imgs": [
            "s-knead-1",
            "s-knead-2"
          ]
        },
        {
          "t": "Take a small ball of dough and roll it into a small disc.",
          "imgs": [
            "s-roll-1",
            "s-roll-2"
          ]
        },
        {
          "t": "Put a spoon of the filling in the centre.",
          "imgs": [
            "s-fill-1"
          ]
        },
        {
          "t": "Pinch the edges together to close it into a ball.",
          "imgs": [
            "s-seal-1",
            "s-seal-2"
          ]
        },
        {
          "t": "Press the ball flat in your palm.",
          "imgs": [
            "s-flat-1"
          ]
        },
        {
          "t": "Slide into oil and deep fry, turning, until golden brown.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Lift out onto a wire rack to drain.",
          "imgs": [
            "s-drain-1"
          ]
        },
        {
          "t": "Serve with ketchup.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "credit": "Deeksha's recipes",
      "card": "card"
    },
    {
      "id": "air-fryer-bread-pizza",
      "name": "Air fryer bread pizza",
      "meal": "Lunch or dinner",
      "minutes": 25,
      "protein": 30,
      "how": "Air fryer",
      "tools": "Air fryer, spoon, spatula",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "8 slices",
          "n": "White bread",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "4 slices",
          "n": "Cheese slices",
          "tag": "cheese",
          "img": "i-cheeseslice"
        },
        {
          "q": "~4 tbsp",
          "n": "Pizza and pasta sauce",
          "tag": "pizza-sauce",
          "alt": [
            "tomato-ketchup"
          ],
          "img": "i-sauce"
        },
        {
          "q": "~1 cup (100 g), diced",
          "n": "Capsicum (green, yellow and red)",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~3 tbsp (40 g), boiled",
          "n": "Sweet corn",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~1/2 medium, diced",
          "n": "Red onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~60 g, small cubes",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1/2 cup (50 g)",
          "n": "Cheese, grated (mozzarella)",
          "tag": "cheese",
          "img": "i-cheese"
        },
        {
          "q": "~1 tsp",
          "n": "Oregano",
          "tag": "oregano",
          "opt": true,
          "img": "i-oregano"
        }
      ],
      "steps": [
        {
          "t": "Place 4 slices of bread in the air fryer basket.",
          "imgs": [
            "s-bread-2"
          ]
        },
        {
          "t": "Lay a cheese slice on each slice of bread.",
          "imgs": [
            "s-cheese-1",
            "s-cheese-2"
          ]
        },
        {
          "t": "Cover each cheese slice with another slice of bread.",
          "imgs": [
            "s-top-1",
            "s-top-2"
          ]
        },
        {
          "t": "Squeeze pizza sauce over the top slices.",
          "imgs": [
            "s-sauce-1",
            "s-sauce-2"
          ]
        },
        {
          "t": "Spread the sauce evenly with a spoon.",
          "imgs": [
            "s-spread-2"
          ]
        },
        {
          "t": "Scatter diced green, yellow and red capsicum on top.",
          "imgs": [
            "s-capsicum-1",
            "s-capsicum-2"
          ]
        },
        {
          "t": "Add the boiled sweet corn.",
          "imgs": [
            "s-corn-2"
          ]
        },
        {
          "t": "Add the red onion pieces.",
          "imgs": [
            "s-onion-2"
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
          "t": "Cover everything with grated cheese.",
          "imgs": [
            "s-cheesetop-2"
          ]
        },
        {
          "t": "Grind or sprinkle oregano over the top.",
          "imgs": [
            "s-oregano-1"
          ]
        },
        {
          "t": "Slide the basket into the air fryer.",
          "imgs": [
            "s-close-1"
          ]
        },
        {
          "t": "Set it to 180 C for 15 minutes and start.",
          "imgs": [
            "s-set-1",
            "s-set-2"
          ]
        },
        {
          "t": "Air fry until the cheese is melted and golden.",
          "imgs": [
            "s-fry-1",
            "s-fry-2",
            "s-fry-3"
          ]
        },
        {
          "t": "Lift the pizza out with a spatula onto a plate.",
          "imgs": [
            "s-lift-1",
            "s-lift-2"
          ]
        },
        {
          "t": "Pull apart into 4 squares and eat hot.",
          "imgs": [
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "air-fryer",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "steamed-veg-paneer-fry",
      "name": "Paneer and steamed veg stir-fry",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 20,
      "how": "Gas",
      "tools": "Non-stick pan, idli stand or steamer, mixie jar, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "180 g (1 pack)",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1 tsp (paneer and dip)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/4 tsp",
          "n": "Black pepper",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1/2 cup (60 g), chopped",
          "n": "Green beans (French beans)",
          "tag": "beans",
          "img": "i-beans"
        },
        {
          "q": "~1/2 cup (60 g), diced",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~1 cup (80 g), florets",
          "n": "Broccoli",
          "tag": "broccoli",
          "img": "i-broccoli"
        },
        {
          "q": "~4 pieces (40 g), sliced",
          "n": "Baby corn",
          "tag": "baby-corn",
          "img": "i-babycorn"
        },
        {
          "q": "~1/3 cup (50 g)",
          "n": "Sweet corn",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~1.5 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~4 cloves, chopped",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "1 medium, in chunks",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 cup (20 g)",
          "n": "Mint leaves",
          "tag": "mint",
          "img": "i-mint"
        },
        {
          "q": "~2",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-greenchilli"
        },
        {
          "q": "~1/2 cup (100 g)",
          "n": "Curd (thick)",
          "tag": "curd",
          "img": "i-curd"
        }
      ],
      "steps": [
        {
          "t": "Cut the paneer into cubes.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Sprinkle red chilli powder, salt and black pepper over the paneer.",
          "imgs": [
            "s-spice-1",
            "s-spice-2",
            "s-spice-3"
          ]
        },
        {
          "t": "Mix until every cube is coated.",
          "imgs": [
            "s-mix-1",
            "s-mix-2"
          ]
        },
        {
          "t": "Put the beans, carrot, broccoli, baby corn and sweet corn in an idli stand.",
          "imgs": [
            "s-stand-1",
            "s-stand-2",
            "s-stand-3"
          ]
        },
        {
          "t": "Steam the vegetables until just tender.",
          "imgs": [
            "s-stand-3"
          ]
        },
        {
          "t": "Heat oil in a non-stick pan.",
          "imgs": [
            "s-oil-2"
          ]
        },
        {
          "t": "Add the chopped garlic.",
          "imgs": [
            "s-garlic-1"
          ]
        },
        {
          "t": "Add the onion chunks and fry for a minute.",
          "imgs": [
            "s-onion-2"
          ]
        },
        {
          "t": "Add the marinated paneer and fry until golden.",
          "imgs": [
            "s-fry-1",
            "s-fry-3"
          ]
        },
        {
          "t": "Tip the steamed vegetables into a bowl.",
          "imgs": [
            "s-tip-1",
            "s-tip-2"
          ]
        },
        {
          "t": "Add the fried paneer and onion. Toss together.",
          "imgs": [
            "s-toss-1",
            "s-toss-2"
          ]
        },
        {
          "t": "Put mint leaves and green chilli in a mixie jar.",
          "imgs": [
            "s-mint-1",
            "s-mint-2"
          ]
        },
        {
          "t": "Add salt and curd, then blend into a smooth dip.",
          "imgs": [
            "s-dip-1",
            "s-dip-2"
          ]
        },
        {
          "t": "Serve the paneer and vegetables with the mint dip.",
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
      "id": "air-fryer-paneer-tikka",
      "name": "Air fryer paneer tikka",
      "meal": "Snack",
      "minutes": 30,
      "protein": 20,
      "how": "Air fryer",
      "tools": "Air fryer, spoon, mixing hands",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~200 g, in big cubes",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 medium, in chunks",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 medium, in chunks",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~1 medium, in chunks",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~4 tbsp",
          "n": "Thick curd (hung curd)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1 tbsp",
          "n": "Ginger-garlic paste",
          "tag": "ginger",
          "alt": [
            "garlic"
          ],
          "img": "i-gg"
        },
        {
          "q": "~2 tbsp",
          "n": "Besan (gram flour)",
          "tag": "besan",
          "img": "i-besan"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Garam masala",
          "tag": "garam-masala",
          "img": "i-garam"
        },
        {
          "q": "~1 tsp",
          "n": "Kasuri methi (dried fenugreek leaves)",
          "tag": "kasuri-methi",
          "img": "i-methi"
        },
        {
          "q": "~1/2 tsp, to taste",
          "n": "Salt",
          "tag": "salt"
        },
        {
          "q": "~1 tbsp, melted",
          "n": "Ghee or butter",
          "tag": "ghee",
          "alt": [
            "butter",
            "oil"
          ],
          "img": "i-ghee"
        },
        {
          "q": "1 small bowl",
          "n": "Green chutney (mint or coriander)",
          "tag": "green-chutney",
          "opt": true,
          "img": "i-chutney"
        },
        {
          "q": "~1/2 onion, in rings",
          "n": "Onion rings",
          "tag": "onion",
          "opt": true,
          "img": "i-rings"
        },
        {
          "q": "a pinch",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "opt": true,
          "img": "i-chaat"
        },
        {
          "q": "1/2",
          "n": "Lemon",
          "tag": "lemon",
          "opt": true,
          "img": "i-lemon"
        },
        {
          "q": "a few leaves, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "opt": true,
          "img": "i-coriander"
        }
      ],
      "steps": [
        {
          "t": "Put the paneer cubes in the air fryer basket.",
          "imgs": [
            "s-paneer-1"
          ]
        },
        {
          "t": "Add the onion, capsicum and tomato chunks.",
          "imgs": [
            "s-veg-1",
            "s-veg-2"
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
          "t": "Add the ginger-garlic paste and besan.",
          "imgs": [
            "s-paste-1",
            "s-paste-2"
          ]
        },
        {
          "t": "Sprinkle on the red chilli powder.",
          "imgs": [
            "s-chilli-1"
          ]
        },
        {
          "t": "Add the turmeric and garam masala.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Sprinkle on the kasuri methi and salt.",
          "imgs": [
            "s-methi-1"
          ]
        },
        {
          "t": "Pour over the melted ghee or butter.",
          "imgs": [
            "s-ghee-1"
          ]
        },
        {
          "t": "Mix well with your hands until everything is coated.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Slide the basket into the air fryer.",
          "imgs": [
            "s-in-1"
          ]
        },
        {
          "t": "Air fry at 200 C for 12 minutes.",
          "imgs": [
            "s-fry-1",
            "s-fry-2",
            "s-fry-3"
          ]
        },
        {
          "t": "Take the basket out when the paneer is browned at the edges.",
          "imgs": [
            "s-out-1",
            "s-out-2"
          ]
        },
        {
          "t": "Move the paneer and vegetables to a plate.",
          "imgs": [
            "s-plate-1"
          ]
        },
        {
          "t": "Add the green chutney and onion rings on the side.",
          "imgs": [
            "s-plate-2"
          ]
        },
        {
          "t": "Sprinkle a pinch of chaat masala over the paneer.",
          "imgs": [
            "s-chaat-1"
          ]
        },
        {
          "t": "Squeeze lemon juice over the top.",
          "imgs": [
            "s-lemon-1"
          ]
        },
        {
          "t": "Garnish with chopped coriander and eat hot.",
          "imgs": [
            "s-garnish-1",
            "s-garnish-2"
          ]
        }
      ],
      "tags": [
        "air-fryer",
        "high-protein"
      ],
      "card": "card"
    },
    {
      "id": "spicy-paneer-rice-bowl",
      "name": "Spicy paneer rice bowl",
      "meal": "Lunch or dinner",
      "minutes": 35,
      "protein": 25,
      "how": "Gas",
      "tools": "2 non-stick pans, tongs, wavy cutter (or knife), gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~200 g (1 block)",
          "n": "Paneer (cottage cheese)",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1 tsp in all (paneer and rice)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp in all (paneer and rice)",
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~2 small (250 g)",
          "n": "Cucumber (kheera)",
          "tag": "cucumber",
          "img": "i-cucumber"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
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
          "img": "i-gchilli"
        },
        {
          "q": "~1/4 cup (40 g), finely chopped",
          "n": "Carrot",
          "tag": "carrot",
          "img": "i-carrot"
        },
        {
          "q": "~1/4 cup (40 g), finely chopped",
          "n": "Green beans",
          "tag": "beans",
          "img": "i-beans"
        },
        {
          "q": "~1/3 cup (50 g), boiled",
          "n": "Sweet corn",
          "tag": "corn",
          "img": "i-corn"
        },
        {
          "q": "~2 cups (300 g), cooked",
          "n": "Rice",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "~1/2 cup (100 g)",
          "n": "Greek yogurt (or thick curd)",
          "tag": "curd",
          "img": "i-yogurt"
        },
        {
          "q": "~1 tsp",
          "n": "Piri piri masala",
          "tag": "peri-peri-masala",
          "img": "i-piri"
        },
        {
          "q": "~2 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "opt": true,
          "img": "i-coriander"
        }
      ],
      "steps": [
        {
          "t": "Cut the paneer block into thick pieces with a wavy cutter.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Sprinkle salt, red chilli powder and black pepper over the paneer.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Rub the spices into the paneer with your hands.",
          "imgs": [
            "s-rub-1"
          ]
        },
        {
          "t": "Cut the paneer into thick sticks.",
          "imgs": [
            "s-sticks-1",
            "s-sticks-2"
          ]
        },
        {
          "t": "Cut the cucumbers into thin rounds.",
          "imgs": [
            "s-cuc-1",
            "s-cuc-2"
          ]
        },
        {
          "t": "Place the paneer sticks in a non-stick pan.",
          "imgs": [
            "s-pan-1"
          ]
        },
        {
          "t": "Roast the paneer, turning with tongs, until golden on all sides.",
          "imgs": [
            "s-roast-1"
          ]
        },
        {
          "t": "Heat oil in a second pan.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add the chopped garlic.",
          "imgs": [
            "s-garlic-1"
          ]
        },
        {
          "t": "Add the chopped green chilli.",
          "imgs": [
            "s-gchilli-1"
          ]
        },
        {
          "t": "Add the chopped carrot and green beans.",
          "imgs": [
            "s-veg-1"
          ]
        },
        {
          "t": "Add the boiled sweet corn.",
          "imgs": [
            "s-corn-1"
          ]
        },
        {
          "t": "Stir fry the vegetables.",
          "imgs": [
            "s-stir-1"
          ]
        },
        {
          "t": "Sprinkle on black pepper and salt.",
          "imgs": [
            "s-season-1",
            "s-season-2"
          ]
        },
        {
          "t": "Add the cooked rice.",
          "imgs": [
            "s-rice-1"
          ]
        },
        {
          "t": "Toss until the rice and vegetables are mixed.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "Put the cucumber rounds in a bowl.",
          "imgs": [
            "s-bowl-1"
          ]
        },
        {
          "t": "Add the Greek yogurt.",
          "imgs": [
            "s-yogurt-1"
          ]
        },
        {
          "t": "Add chopped coriander.",
          "imgs": [
            "s-coriander-1"
          ]
        },
        {
          "t": "Sprinkle on the piri piri masala.",
          "imgs": [
            "s-piri-1"
          ]
        },
        {
          "t": "Mix the salad well.",
          "imgs": [
            "s-salad-1"
          ]
        },
        {
          "t": "Shape the rice into a mound on a plate.",
          "imgs": [
            "s-mound-1"
          ]
        },
        {
          "t": "Lay the paneer sticks beside the rice.",
          "imgs": [
            "s-plate-1"
          ]
        },
        {
          "t": "Spoon the cucumber salad onto the plate and serve.",
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
      "id": "potato-bread-pakoda",
      "name": "Potato bread pakoda",
      "meal": "Snack",
      "minutes": 40,
      "protein": 15,
      "how": "Gas",
      "tools": "Deep pan, slotted spoon, small brush (or hands), gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~3 medium (300 g), boiled",
          "n": "Potato",
          "tag": "potato",
          "img": "i-potato"
        },
        {
          "q": "~1 small, finely chopped",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~2, finely chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-gchilli"
        },
        {
          "q": "~3 tbsp, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-coriander"
        },
        {
          "q": "~1/4 tsp",
          "n": "Turmeric powder",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1/2 tsp, to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~5 slices",
          "n": "White bread",
          "tag": "bread",
          "img": "i-bread"
        },
        {
          "q": "~1/2 cup (50 g)",
          "n": "Bread crumbs",
          "tag": "breadcrumbs",
          "img": "i-crumbs"
        },
        {
          "q": "~2 cups (500 ml), for deep frying",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "1 small bowl",
          "n": "Dip or chutney, for serving",
          "tag": "chutney",
          "opt": true,
          "img": "i-dip"
        }
      ],
      "steps": [
        {
          "t": "Mash the boiled potatoes in a bowl.",
          "imgs": [
            "s-mash-1"
          ]
        },
        {
          "t": "Add the chopped onion.",
          "imgs": [
            "s-onion-1"
          ]
        },
        {
          "t": "Add the chopped green chilli.",
          "imgs": [
            "s-chilli-1"
          ]
        },
        {
          "t": "Add the chopped coriander.",
          "imgs": [
            "s-coriander-1"
          ]
        },
        {
          "t": "Add the turmeric powder and salt.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Mix everything well.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "Shape the mixture into small oblong rolls, not too big.",
          "imgs": [
            "s-shape-1",
            "s-shape-2",
            "s-shape-3"
          ]
        },
        {
          "t": "Brush a slice of bread with water to make it soft.",
          "imgs": [
            "s-brush-1",
            "s-brush-2"
          ]
        },
        {
          "t": "Press the wet bread flat on your palm.",
          "imgs": [
            "s-flat-1"
          ]
        },
        {
          "t": "Place a potato roll on the bread and wrap it.",
          "imgs": [
            "s-wrap-1",
            "s-wrap-2"
          ]
        },
        {
          "t": "Press the bread to seal it all round.",
          "imgs": [
            "s-seal-1",
            "s-seal-2"
          ]
        },
        {
          "t": "Roll it in bread crumbs.",
          "imgs": [
            "s-crumb-1",
            "s-crumb-2"
          ]
        },
        {
          "t": "Slide the rolls into a pan of hot oil.",
          "imgs": [
            "s-oil-1",
            "s-oil-2"
          ]
        },
        {
          "t": "Fry, turning, until golden brown.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Lift out with a slotted spoon.",
          "imgs": [
            "s-lift-1"
          ]
        },
        {
          "t": "Serve hot with a dip.",
          "imgs": [
            "s-serve-1"
          ]
        }
      ],
      "tags": [
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "moong-paneer-soya-khichdi",
      "name": "Moong paneer soya khichdi",
      "meal": "Lunch or dinner",
      "minutes": 30,
      "protein": 50,
      "how": "Pressure cooker",
      "tools": "Pressure cooker, gas, scissors",
      "serves": 1,
      "cover": "cover",
      "ingredients": [
        {
          "q": "50 g (about 1/4 cup), soaked overnight",
          "n": "Whole green moong (sabut moong)",
          "tag": "moong-whole",
          "img": "i-moong"
        },
        {
          "q": "1 medium, chopped",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "2, cut small",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-gchilli"
        },
        {
          "q": "~1/4 cup (40 g)",
          "n": "Green peas",
          "tag": "peas",
          "img": "i-peas"
        },
        {
          "q": "~30 g dry, soaked in water",
          "n": "Soya chunks",
          "tag": "soya-chunks",
          "img": "i-soya"
        },
        {
          "q": "30 g (about 2 tbsp)",
          "n": "Rice",
          "tag": "rice",
          "img": "i-rice"
        },
        {
          "q": "100 g, in cubes",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~1 glass (200 ml)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder",
          "tag": "coriander-powder",
          "img": "i-coriander"
        },
        {
          "q": "to taste (~1/2 tsp)",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "1 small bowl",
          "n": "Curd, on the side",
          "tag": "curd",
          "opt": true,
          "img": "i-curd"
        }
      ],
      "steps": [
        {
          "t": "The night before, wash the moong and soak it in water.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "In the morning, drain the water and put the moong in the cooker.",
          "imgs": [
            "s-drain-1"
          ]
        },
        {
          "t": "Chop the tomato into the cooker.",
          "imgs": [
            "s-tomato-1"
          ]
        },
        {
          "t": "Cut the green chillies into the cooker with scissors.",
          "imgs": [
            "s-chilli-1"
          ]
        },
        {
          "t": "Add the green peas.",
          "imgs": [
            "s-peas-1"
          ]
        },
        {
          "t": "Add the soaked soya chunks.",
          "imgs": [
            "s-soya-1",
            "s-soya-2"
          ]
        },
        {
          "t": "Add the rice.",
          "imgs": [
            "s-rice-1",
            "s-rice-2"
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
          "t": "Pour in about 1 glass of water.",
          "imgs": [
            "s-water-1",
            "s-water-2"
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
          "t": "Add the turmeric and coriander powder.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add salt to taste.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Mix again.",
          "imgs": [
            "s-mix2-1"
          ]
        },
        {
          "t": "Switch on the gas and keep it on a medium flame.",
          "imgs": [
            "s-flame-1",
            "s-flame-2"
          ]
        },
        {
          "t": "Put the cooker on it, close the lid and cook for about 3 whistles.",
          "imgs": [
            "s-lid-1",
            "s-lid-2"
          ]
        },
        {
          "t": "Let the pressure go, then open the lid and stir.",
          "imgs": [
            "s-open-1"
          ]
        },
        {
          "t": "Serve in a bowl, with curd on the side.",
          "imgs": [
            "s-serve-1"
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
      "id": "paneer-tikka-skewers",
      "name": "Paneer tikka skewers",
      "meal": "Snack",
      "minutes": 90,
      "protein": 25,
      "how": "Gas",
      "tools": "Grill pan, skewers, mixing bowl, spatula, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~250 g, in big cubes",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~3/4 cup (150 g), thick",
          "n": "Curd (hung curd)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1/2 tsp, to taste",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric powder",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~2 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder",
          "tag": "coriander-powder",
          "img": "i-coriander"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin powder",
          "tag": "cumin-powder",
          "img": "i-cumin"
        },
        {
          "q": "~1 tsp",
          "n": "Garam masala",
          "tag": "garam-masala",
          "img": "i-garam"
        },
        {
          "q": "~1/2 tsp",
          "n": "Black pepper powder",
          "tag": "black-pepper",
          "img": "i-pepper"
        },
        {
          "q": "~1 tsp",
          "n": "Chaat masala",
          "tag": "chaat-masala",
          "img": "i-chaat"
        },
        {
          "q": "~1 tbsp",
          "n": "Ginger-garlic paste",
          "tag": "ginger",
          "alt": [
            "garlic"
          ],
          "img": "i-gg"
        },
        {
          "q": "~1/2 tsp",
          "n": "Carom seeds (ajwain)",
          "tag": "ajwain",
          "img": "i-ajwain"
        },
        {
          "q": "~1 tsp",
          "n": "Kasuri methi (dried fenugreek leaves)",
          "tag": "kasuri-methi",
          "img": "i-methi"
        },
        {
          "q": "~1 tbsp (juice of 1/2 lemon)",
          "n": "Lemon juice",
          "tag": "lemon",
          "img": "i-lemon"
        },
        {
          "q": "~2 tbsp",
          "n": "Roasted gram flour (besan)",
          "tag": "besan",
          "alt": [
            "sattu"
          ],
          "img": "i-besan"
        },
        {
          "q": "~1 tbsp, hot",
          "n": "Mustard oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 medium, in chunks",
          "n": "Capsicum",
          "tag": "capsicum",
          "img": "i-capsicum"
        },
        {
          "q": "~1 medium, in petals",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1 medium, in chunks",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "1 small bowl",
          "n": "Green chutney, to serve",
          "tag": "green-chutney",
          "opt": true,
          "img": "i-chutney"
        }
      ],
      "steps": [
        {
          "t": "Put the curd in a mixing bowl.",
          "imgs": [
            "s-curd-1"
          ]
        },
        {
          "t": "Add salt, turmeric and red chilli powder.",
          "imgs": [
            "s-spice1-1"
          ]
        },
        {
          "t": "Add coriander powder, cumin powder and garam masala.",
          "imgs": [
            "s-spice2-1"
          ]
        },
        {
          "t": "Add black pepper powder and chaat masala.",
          "imgs": [
            "s-spice3-1"
          ]
        },
        {
          "t": "Add ginger-garlic paste and carom seeds.",
          "imgs": [
            "s-paste-1"
          ]
        },
        {
          "t": "Add kasuri methi and lemon juice.",
          "imgs": [
            "s-methi-1"
          ]
        },
        {
          "t": "Add the roasted gram flour.",
          "imgs": [
            "s-besan-1"
          ]
        },
        {
          "t": "Pour in the hot mustard oil.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Mix everything well into a smooth marinade.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "Add the capsicum, onion and tomato chunks.",
          "imgs": [
            "s-veg-1"
          ]
        },
        {
          "t": "Coat the vegetables well in the marinade.",
          "imgs": [
            "s-coat-1"
          ]
        },
        {
          "t": "Add the paneer cubes.",
          "imgs": [
            "s-paneer-1"
          ]
        },
        {
          "t": "Coat the paneer gently so the cubes do not break.",
          "imgs": [
            "s-gentle-1"
          ]
        },
        {
          "t": "Rest it for 1 hour.",
          "imgs": [
            "s-rest-1"
          ]
        },
        {
          "t": "Thread paneer, capsicum, onion and tomato onto skewers.",
          "imgs": [
            "s-thread-1",
            "s-thread-2"
          ]
        },
        {
          "t": "Place the skewers on a hot grill pan.",
          "imgs": [
            "s-place-1"
          ]
        },
        {
          "t": "Grill on a medium flame.",
          "imgs": [
            "s-grill-1"
          ]
        },
        {
          "t": "Turn the skewers around so they grill evenly on all sides.",
          "imgs": [
            "s-turn-1",
            "s-turn-2"
          ]
        },
        {
          "t": "Serve the paneer tikka hot.",
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
      "id": "soya-chunk-chukauni",
      "name": "Soya chunk chukauni",
      "meal": "Lunch or dinner",
      "minutes": 20,
      "protein": 30,
      "how": "Gas",
      "tools": "Pan, small pan, pot, strainer, whisk, gas",
      "serves": 1,
      "cover": "cover",
      "credit": "Dr Pal's Food Clinic",
      "ingredients": [
        {
          "q": "~40 g dry (about 1 cup)",
          "n": "Soya chunks",
          "tag": "soya-chunks",
          "img": "i-soya"
        },
        {
          "q": "~1/2 tsp, for the boiling water and the yogurt",
          "n": "Salt",
          "tag": "salt"
        },
        {
          "q": "1 tbsp",
          "n": "Ghee",
          "tag": "ghee",
          "img": "i-ghee"
        },
        {
          "q": "~1 tsp in all (sauté and tadka)",
          "n": "Turmeric",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tsp in all (sauté and tadka)",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli"
        },
        {
          "q": "~1 tsp",
          "n": "Coriander powder",
          "tag": "coriander-powder",
          "img": "i-corpowder"
        },
        {
          "q": "~1 tsp",
          "n": "Ginger-garlic paste",
          "tag": "ginger",
          "alt": [
            "garlic"
          ],
          "img": "i-gg"
        },
        {
          "q": "~1/2 medium, sliced",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~1, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-gchilli"
        },
        {
          "q": "a handful, chopped",
          "n": "Coriander leaves",
          "tag": "coriander-leaves",
          "img": "i-corleaf"
        },
        {
          "q": "~1/2 cup (100 g)",
          "n": "Greek yogurt (or thick curd)",
          "tag": "curd",
          "img": "i-curd"
        },
        {
          "q": "~1 clove, finely chopped",
          "n": "Garlic",
          "tag": "garlic",
          "img": "i-garlic"
        },
        {
          "q": "~1 tsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "a pinch",
          "n": "Kasuri methi (dried fenugreek leaves)",
          "tag": "kasuri-methi",
          "img": "i-methi"
        }
      ],
      "steps": [
        {
          "t": "Boil the soya chunks in salted water for 5 minutes.",
          "imgs": [
            "s-boil-1",
            "s-boil-2"
          ]
        },
        {
          "t": "Drain the soya chunks in a strainer.",
          "imgs": [
            "s-drain-1"
          ]
        },
        {
          "t": "Heat 1 tablespoon of ghee in a pan.",
          "imgs": [
            "s-ghee-2",
            "s-ghee-1"
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
          "t": "Add the ginger-garlic paste.",
          "imgs": [
            "s-gg-1"
          ]
        },
        {
          "t": "Add the boiled soya chunks.",
          "imgs": [
            "s-soya-1"
          ]
        },
        {
          "t": "Saute for 2 to 3 minutes.",
          "imgs": [
            "s-saute-1"
          ]
        },
        {
          "t": "Add the sliced onion.",
          "imgs": [
            "s-onion-1"
          ]
        },
        {
          "t": "Add the green chilli.",
          "imgs": [
            "s-gchilli-1"
          ]
        },
        {
          "t": "Add the chopped coriander leaves.",
          "imgs": [
            "s-corleaf-1"
          ]
        },
        {
          "t": "Mix it well.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "In a bowl, put the Greek yogurt.",
          "imgs": [
            "s-curd-1"
          ]
        },
        {
          "t": "Add salt to the yogurt.",
          "imgs": [
            "s-salt-1"
          ]
        },
        {
          "t": "Add the finely chopped garlic.",
          "imgs": [
            "s-garlic-1"
          ]
        },
        {
          "t": "Whisk the yogurt well.",
          "imgs": [
            "s-whisk-1"
          ]
        },
        {
          "t": "Heat a little oil in a small pan.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add turmeric, red chilli powder and kasuri methi to the oil.",
          "imgs": [
            "s-tadka-1",
            "s-tadka-2",
            "s-tadka-3"
          ]
        },
        {
          "t": "Pour this tadka into the yogurt.",
          "imgs": [
            "s-pour-1",
            "s-pour-2"
          ]
        },
        {
          "t": "Whisk it again.",
          "imgs": [
            "s-whisk2-1"
          ]
        },
        {
          "t": "Pour the seasoned yogurt over the soya chunks.",
          "imgs": [
            "s-over-1",
            "s-over-2"
          ]
        },
        {
          "t": "Mix well and serve.",
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
      "id": "air-fryer-gobi-fry",
      "name": "Air fryer gobi fry",
      "meal": "Side",
      "minutes": 35,
      "protein": 5,
      "how": "Gas + air fryer",
      "tools": "Pot, gas, air fryer, parchment paper, mixing bowl",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "1 small (~400 g), cut into florets",
          "n": "Cauliflower (gobi)",
          "tag": "cauliflower",
          "img": "i-cauli"
        },
        {
          "q": "enough to cover the florets",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric powder",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tbsp",
          "n": "Ginger-garlic paste",
          "tag": "ginger",
          "alt": [
            "garlic"
          ],
          "img": "i-gg"
        },
        {
          "q": "~2 tbsp",
          "n": "Spice mix (gobi or tikka masala powder, ready-made)",
          "tag": "seasoning-masala",
          "alt": [
            "garam-masala"
          ],
          "img": "i-spice"
        },
        {
          "q": "~1 tbsp",
          "n": "Oil",
          "tag": "oil",
          "img": "i-oil"
        }
      ],
      "steps": [
        {
          "t": "Cut the cauliflower into florets.",
          "imgs": [
            "s-cut-1"
          ]
        },
        {
          "t": "Put the florets in a steel pot.",
          "imgs": [
            "s-pot-1"
          ]
        },
        {
          "t": "Pour water over the florets.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Add turmeric powder.",
          "imgs": [
            "s-turmeric-1"
          ]
        },
        {
          "t": "Boil until the florets are just tender, then drain the water.",
          "imgs": [
            "s-boil-1"
          ]
        },
        {
          "t": "Add the ginger-garlic paste.",
          "imgs": [
            "s-gg-1"
          ]
        },
        {
          "t": "Add the spice mix.",
          "imgs": [
            "s-spice-1"
          ]
        },
        {
          "t": "Add a little oil.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Mix with your hands until every floret is coated.",
          "imgs": [
            "s-mix-1",
            "s-mix-2",
            "s-mix-3"
          ]
        },
        {
          "t": "Line the air fryer basket with parchment paper.",
          "imgs": [
            "s-paper-1"
          ]
        },
        {
          "t": "Place the florets in a single layer on the paper.",
          "imgs": [
            "s-place-1",
            "s-place-2"
          ]
        },
        {
          "t": "Slide in the basket and air fry until the edges are browned.",
          "imgs": [
            "s-fry-1",
            "s-fry-2"
          ]
        },
        {
          "t": "Take out the basket.",
          "imgs": [
            "s-out-1"
          ]
        },
        {
          "t": "Serve hot in a bowl.",
          "imgs": [
            "s-serve-1"
          ]
        }
      ],
      "tags": [
        "air-fryer",
        "gas"
      ],
      "card": "card"
    },
    {
      "id": "dark-paneer-masala-kaleji",
      "name": "Dark paneer masala (kaleji style)",
      "meal": "Lunch or dinner",
      "minutes": 45,
      "protein": 20,
      "how": "Gas",
      "tools": "Pot, kadai, tongs, gas",
      "serves": 2,
      "cover": "cover",
      "ingredients": [
        {
          "q": "~1 tbsp, tied in a small cloth",
          "n": "Tea leaves (chai patti)",
          "tag": "tea",
          "img": "i-tea"
        },
        {
          "q": "~250 g (1 block)",
          "n": "Paneer",
          "tag": "paneer",
          "img": "i-paneer"
        },
        {
          "q": "~3 tbsp",
          "n": "Oil (mustard oil in the video)",
          "tag": "oil",
          "img": "i-oil"
        },
        {
          "q": "~1 tsp",
          "n": "Cumin seeds (jeera)",
          "tag": "cumin",
          "img": "i-cumin"
        },
        {
          "q": "2 leaves",
          "n": "Bay leaf (tej patta)",
          "tag": "bay-leaf",
          "img": "i-bay"
        },
        {
          "q": "1 small stick",
          "n": "Cinnamon (dalchini)",
          "tag": "cinnamon",
          "img": "i-cinnamon"
        },
        {
          "q": "1",
          "n": "Star anise (chakri phool)",
          "tag": "whole-spices",
          "img": "i-staranise"
        },
        {
          "q": "2",
          "n": "Dry red chilli",
          "tag": "dry-red-chilli",
          "img": "i-drychilli"
        },
        {
          "q": "~2 medium, crushed",
          "n": "Onion",
          "tag": "onion",
          "img": "i-onion"
        },
        {
          "q": "~3, chopped",
          "n": "Green chilli",
          "tag": "green-chilli",
          "img": "i-greenchilli"
        },
        {
          "q": "~1.5 tsp",
          "n": "Red chilli powder",
          "tag": "red-chilli-powder",
          "img": "i-chilli-powder"
        },
        {
          "q": "~1/2 tsp",
          "n": "Turmeric (haldi)",
          "tag": "turmeric",
          "img": "i-turmeric"
        },
        {
          "q": "~1 tbsp",
          "n": "Coriander powder (dhania)",
          "tag": "coriander-powder",
          "img": "i-coriander-powder"
        },
        {
          "q": "~1 tsp",
          "n": "Salt",
          "tag": "salt",
          "img": "i-salt"
        },
        {
          "q": "~2 ladles (1/2 cup)",
          "n": "Water",
          "tag": "water",
          "img": "i-water"
        },
        {
          "q": "~3 medium, pureed",
          "n": "Tomato",
          "tag": "tomato",
          "img": "i-tomato"
        },
        {
          "q": "~1 tbsp",
          "n": "Dried fenugreek leaves (kasuri methi)",
          "tag": "kasuri-methi",
          "img": "i-kasuri"
        },
        {
          "q": "2",
          "n": "Roti, to serve",
          "tag": "atta",
          "opt": true,
          "img": "i-roti"
        }
      ],
      "steps": [
        {
          "t": "Boil water in a pot. Add tea leaves tied in a small cloth.",
          "imgs": [
            "s-tea-1",
            "s-tea-2"
          ]
        },
        {
          "t": "Put the paneer block into the boiling brown water. Leave it for about 10 minutes.",
          "imgs": [
            "s-soak-1",
            "s-soak-2"
          ]
        },
        {
          "t": "Lift the paneer out with tongs.",
          "imgs": [
            "s-lift-1"
          ]
        },
        {
          "t": "Cut the paneer into triangle pieces.",
          "imgs": [
            "s-cut-1",
            "s-cut-2"
          ]
        },
        {
          "t": "Heat oil in a kadai.",
          "imgs": [
            "s-oil-1"
          ]
        },
        {
          "t": "Add cumin seeds, bay leaf, cinnamon, star anise and dry red chilli.",
          "imgs": [
            "s-spice-1",
            "s-spice-2"
          ]
        },
        {
          "t": "Add the crushed onion and cook, stirring.",
          "imgs": [
            "s-onion-1",
            "s-onion-2"
          ]
        },
        {
          "t": "Add chopped green chilli and stir.",
          "imgs": [
            "s-chilli-1",
            "s-chilli-2"
          ]
        },
        {
          "t": "Add red chilli powder, turmeric, coriander powder and salt.",
          "imgs": [
            "s-masala-1",
            "s-masala-2",
            "s-masala-3"
          ]
        },
        {
          "t": "Cook, stirring, until the masala turns thick and dark.",
          "imgs": [
            "s-cook-1",
            "s-cook-2"
          ]
        },
        {
          "t": "Add a ladle of water and mix.",
          "imgs": [
            "s-water-1",
            "s-water-2"
          ]
        },
        {
          "t": "Add the tomato puree and cook, stirring.",
          "imgs": [
            "s-tomato-1",
            "s-tomato-2"
          ]
        },
        {
          "t": "Add another ladle of water.",
          "imgs": [
            "s-water-3"
          ]
        },
        {
          "t": "Cover the kadai with a lid and cook.",
          "imgs": [
            "s-cover-1"
          ]
        },
        {
          "t": "Add the paneer pieces.",
          "imgs": [
            "s-paneer-1"
          ]
        },
        {
          "t": "Sprinkle kasuri methi on top.",
          "imgs": [
            "s-methi-1",
            "s-methi-2"
          ]
        },
        {
          "t": "Mix gently until the paneer is coated with masala.",
          "imgs": [
            "s-mix-1"
          ]
        },
        {
          "t": "Serve hot with roti.",
          "imgs": [
            "s-serve-1",
            "s-serve-2"
          ]
        }
      ],
      "tags": [
        "gas",
        "high-protein"
      ],
      "card": "card"
    }
  ];
})();
