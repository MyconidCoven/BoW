onEvent('recipes', e => {
	e.shaped('quark:seed_pouch', [' A ', 'BCB', ' B '], {
		A: '#forge:string',
		B: ['minecraft:leather', 'minecraft:rabbit_hide'],
		C: '#quark:seed_pouch_holdable'
	}).id('kubejs:quark/seed_pouch')

	removeRecipeByOutput(e, ['quark:seed_pouch'])
})
