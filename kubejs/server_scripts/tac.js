onEvent('recipes', event => {
	let remove = (name) => {
		event.remove({ id: name })
	}

	remove('tac:762x25')

	let tacRecipes = (item, input) => {
		let inputList = []
		remove(item)

		input.forEach(list => {
			let material = { item: { tag: list[0].substring(1) }, count: list[1] }
			inputList.push(material)
		})
		event.custom({
			type: 'tac:workbench',
			materials: inputList,
			result: { item: item }
		}).id('atlanabyss:tac_workbench_' + item.replace(":", "_"))
	}

	tacRecipes('tac:deagle_357', [
		['#forge:materials/ultimate', 16],
	])
	tacRecipes('tac:colt_python', [
		['#forge:materials/ultimate', 8],
		['#forge:materials/legendary', 3]
	])
	tacRecipes('tac:timeless_50', [
		['#forge:materials/ultimate', 4],
		['#forge:materials/legendary', 16]
	])
	tacRecipes('tac:m60', [
		['#forge:materials/ultimate', 1],
		['#forge:materials/legendary', 10],
		['#forge:materials/epic', 20],
	])

	// //绿材料
	// remove('tac:uncommon_material')
	// event.shaped('tac:uncommon_material', [
	// 	'ABA',
	// 	'BCB',
	// 	'ABA'
	// ], {
	// 	A: 'thermal:cured_rubber',
	// 	B: 'create:iron_sheet',
	// 	C: 'minecraft:iron_ingot'
	// }).id("atlanabyss:uncommon_material")
	// //蓝材料
	// remove('tac:rare_material')
	// event.shaped('tac:rare_material', [
	// 	'ABA',
	// 	'BCB',
	// 	'ABA'
	// ], {
	// 	A: 'thermal:steel_plate',
	// 	B: 'thermal:steel_ingot',
	// 	C: 'tac:uncommon_material'
	// }).id("atlanabyss:rare_material")
	// //紫材料
	// remove('tac:epic_material')
	// event.shaped('tac:epic_material', [
	// 	'ABA',
	// 	'BCB',
	// 	'ABA'
	// ], {
	// 	A: 'minecraft:amethyst_shard',
	// 	B: 'minecraft:obsidian',
	// 	C: 'tac:rare_material'
	// }).id("atlanabyss:epic_material")
	// //黄材料
	// remove('tac:legendary_material')
	// event.shaped('tac:legendary_material', [
	// 	'ABA',
	// 	'BCB',
	// 	'ABA'
	// ], {
	// 	A: 'kubejs:platinum_nugget',
	// 	B: 'kubejs:aluminum_ingot',
	// 	C: 'tac:epic_material'
	// }).id("atlanabyss:legendary_material")
	// //红材料
	// remove('tac:ultimate_material')
	// event.shaped('tac:ultimate_material', [
	// 	'ABA',
	// 	'BCB',
	// 	'ABA'
	// ], {
	// 	A: 'thermal:signalum_block',
	// 	B: 'kubejs:charged_soulsteel_ingot',
	// 	C: 'tac:legendary_material'
	// }).id("atlanabyss:ultimate_material")

	remove('tac:9mm_round')
	remove('tac:round45')
	remove('tac:10_gauge_round')
	remove('tac:nato_556_bullet')
	remove('tac:bullet68')
	remove('tac:win_30-30')
	remove('tac:lapua338')
	remove('tac:58x42')
	remove('tac:762x39')
	remove('tac:bullet_308')
	remove('tac:762x54')
	remove('tac:50bmg')
	remove('tac:ae50')
	remove('tac:46x30')
	remove('tac:57x28')
	//子弹
	let pa = ('kubejs:pistol_shell')
	event.recipes.createSequencedAssembly([
		'30x kubejs:pistol_ammo'
	],
		'create:copper_sheet',
		[
			event.recipes.createCutting(pa, pa).processingTime(40),
			event.recipes.createDeploying(pa, [pa, 'minecraft:gunpowder']),
			event.recipes.createPressing(pa, pa).processingTime(40),
		]).transitionalItem(pa).loops(3).id("atlanabyss:pistol_ammo")//手枪子弹

	let sa = ('kubejs:shotgun_shell')
	event.recipes.createSequencedAssembly([
		'6x kubejs:shotgun_ammo'
	],
		'create:brass_sheet',
		[
			event.recipes.createCutting(sa, sa).processingTime(40),
			event.recipes.createDeploying(sa, [sa, 'minecraft:gunpowder']),
			event.recipes.createDeploying(sa, [sa, 'minecraft:gunpowder']),
			event.recipes.createDeploying(sa, [sa, 'thermal:steel_nugget']),
			event.recipes.createPressing(sa, sa).processingTime(40),
		]).transitionalItem(sa).loops(5).id("atlanabyss:shotgun_ammo")//霰弹枪子弹

	let ra = ('kubejs:rifle_shell')
	event.recipes.createSequencedAssembly([
		'10x kubejs:rifle_ammo'
	],
		'thermal:steel_plate',
		[
			event.recipes.createCutting(ra, ra).processingTime(40),
			event.recipes.createDeploying(ra, [ra, 'tconstruct:efln_ball']),
			event.recipes.createPressing(ra, ra).processingTime(40),
		]).transitionalItem(ra).loops(3).id("atlanabyss:rifle_ammo")//步枪子弹

	let smg = ('kubejs:smg_shell')
	event.recipes.createSequencedAssembly([
		'30x kubejs:smg_ammo'
	],
		'thermal:nickel_plate',
		[
			event.recipes.createCutting(smg, smg,).processingTime(40),
			event.recipes.createDeploying(smg, [smg, 'minecraft:gunpowder']),
			event.recipes.createDeploying(smg, [smg, 'minecraft:gunpowder']),
			event.recipes.createPressing(smg, smg).processingTime(40),
		]).transitionalItem(smg).loops(3).id("atlanabyss:smg_ammo")//冲锋枪子弹


	let ma = ('kubejs:magnum_shell')
	event.recipes.createSequencedAssembly([
		'3x kubejs:magnum_ammo'
	],
		'kubejs:charged_constantan_sheet',
		[
			event.recipes.createFilling(ma, [ma, Fluid.of('thermal:glowstone', 1000)]),
			event.recipes.createDeploying(ma, [ma, 'tconstruct:efln_ball']),
			event.recipes.createDeploying(ma, [ma, 'biggerreactors:uranium_dust']),
			event.recipes.createPressing(ma, ma).processingTime(200),
			event.recipes.createPressing(ma, ma).processingTime(200),
		]).transitionalItem(ma).loops(10).id("atlanabyss:magnum_ammo")//马格南子弹

	//手雷
	remove('tac:light_grenade')
	event.shaped('4x tac:light_grenade', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'create:iron_sheet',
		B: 'minecraft:gunpowder'
	}).id("atlanabyss:light_grenade")

	remove('tac:baseball_grenade')
	event.shaped('4x tac:baseball_grenade', [
		' A ',
		'ABA',
		' A '
	], {
		A: 'thermal:steel_plate',
		B: 'minecraft:gunpowder'
	}).id("atlanabyss:baseball_grenade")
	//火箭弹
	remove('tac:rpg7_missile')
	event.shaped('tac:rpg7_missile', [
		'A',
		'B',
		'B'
	], {
		A: 'minecraft:tnt',
		B: 'createaddition:iron_rod'
	}).id("atlanabyss:rpg7_missile")
})