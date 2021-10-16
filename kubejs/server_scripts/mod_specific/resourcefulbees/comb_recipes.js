onEvent('recipes', e => {
  let craftingShapes = [
    //vertical
    ['  C', '  C', '  C'],
    [' C ', ' C ', ' C '],
    ['C  ', 'C  ', 'C  '],
    //horizontal
    ['CCC', '   ', '   '],
    ['   ', 'CCC', '   '],
    ['   ', '   ', 'CCC'],
    //diagonal
    ['  C', ' C ', 'C  '],
    ['C  ', ' C ', '  C'],
    //misc
    ['  C', ' C ', ' C '],
    [' C ', 'C  ', 'C  '],
    ['  C', 'CC ', '   '],
    ['   ', '  C', 'CC '],
    ['  C', '  C', ' C '],
    [' C ', ' C ', 'C  '],
    ['C C', ' C ', '   '],
    ['   ', 'C C', ' C '],
    [' C ', ' C ', '  C'],
    ['C  ', 'C  ', ' C '],
    ['   ', ' C ', 'C C'],
    [' C ', 'C C', '   '],
    ['  C', ' C ', '  C'],
    [' C ', 'C  ', ' C '],
    ['   ', 'CC ', '  C'],
    ['CC ', '  C', '   ']
  ] // 25 now
  let dyes = []
  let honey = ['resourcefulbees:honey', 'create:honey']
  let customHoney = ['resourcefulbees:rainbow_honey', 'resourcefulbees:catnip_honey']

  function shapedRecipe(results, craftingItem, itemCount) {
    let maxLength = Math.min(craftingShapes.length, results.length)
    for (let i = 0; i < maxLength; i++) {
      let recipe = {
        pattern: craftingShapes[i],
        key: { C: { item: craftingItem } },
        result: {
          item: results[i].match(/^([a-z\-_0-9]+:[a-z\-_0-9]+)(?:{[^}]*})?$/)[1],
          count: itemCount
        }
      }

      if (results[i].match(/{.+}/)) recipe.result['nbt'] = results[i].match(/{.+}/)[0]

      e.recipes.cucumber.shaped_no_mirror(recipe)
    }
  }

  colors.forEach(color => {
    dyes.push(`minecraft:${color}_dye`)
  })

  honey.forEach(type => e.recipes.thermal.chiller('minecraft:honey_block', fluid.of(`${type}`, 1000)))
  customHoney.forEach(type => {
    e.recipes.thermal.chiller(`${type}_block`, fluid.of(`${type}`, 1000))
    e.shaped('compressium:honey_1', ['AAA', 'AAA', 'AAA'], { A: `${type}_block` })
  })

  shapedRecipe(dyes, 'resourcefulbees:rainbow_honey_block', 32)
  shapedRecipe(['minecraft:andesite', 'minecraft:diorite', 'minecraft:granite', 'minecraft:basalt', 'create:gabbro', 'create:dolomite', 'create:weathered_limestone', 'create:limestone', 'create:scoria', 'create:dark_scoria', 'quark:brimstone', 'quark:slate', 'quark:jasper', 'quark:limestone', 'quark:basalt', 'astralsorcery:marble_raw'], 'resourcefulbees:stan_honeycomb', 2)
  shapedRecipe(['minecraft:andesite', 'minecraft:diorite', 'minecraft:granite', 'minecraft:basalt', 'create:gabbro', 'create:dolomite', 'create:weathered_limestone', 'create:limestone', 'create:scoria', 'create:dark_scoria', 'quark:brimstone', 'quark:slate', 'quark:jasper', 'quark:limestone', 'quark:basalt', 'astralsorcery:marble_raw'], 'resourcefulbees:stan_honeycomb_block', 18)
  shapedRecipe(['witchery_rewitched:belladonna', 'witchery_rewitched:garlic', 'witchery_rewitched:icy_needle', 'witchery_rewitched:water_artichoke_bulb', 'witchery_rewitched:wolfsbane', 'witchery_rewitched:mandrake_root'], 'resourcefulbees:beewitched_honeycomb', 3)
  shapedRecipe(['witchery_rewitched:belladonna', 'witchery_rewitched:garlic', 'witchery_rewitched:icy_needle', 'witchery_rewitched:water_artichoke_bulb', 'witchery_rewitched:wolfsbane', 'witchery_rewitched:mandrake_root'], 'resourcefulbees:beewitched_honeycomb_block', 27)
  shapedRecipe([
    "minecraft:potion{Potion:'mundane'}",
    "minecraft:potion{Potion:'awkward'}",
    "minecraft:potion{Potion:'thick'}",
    "minecraft:potion{Potion:'regeneration'}",
    "minecraft:potion{Potion:'swiftness'}",
    "minecraft:potion{Potion:'fire_resistance'}",
    "minecraft:potion{Potion:'poison'}",
    "minecraft:potion{Potion:'healing'}",
    "minecraft:potion{Potion:'night_vision'}",
    "minecraft:potion{Potion:'weakness'}",
    "minecraft:potion{Potion:'slowness'}",
    "minecraft:potion{Potion:'harming'}",
    "minecraft:potion{Potion:'turtle_master'}",
    "minecraft:potion{Potion:'slow_falling'}",
    "minecraft:potion{Potion:'invisibility'}"
  ], 'resourcefulbees:alchemist_honeycomb', 1)
  shapedRecipe([
    "minecraft:potion{Potion:'strong_leaping'}",
    "minecraft:potion{Potion:'strong_swiftness'}",
    "minecraft:potion{Potion:'strong_slowness'}",
    "minecraft:potion{Potion:'strong_healing'}",
    "minecraft:potion{Potion:'strong_harming'}",
    "minecraft:potion{Potion:'strong_poison'}",
    "minecraft:potion{Potion:'strong_regeneration'}",
    "minecraft:potion{Potion:'strong_strength'}",
    "minecraft:potion{Potion:'long_turtle_master'}",
  ], 'resourcefulbees:alchemist_honeycomb_block', 1)
})
