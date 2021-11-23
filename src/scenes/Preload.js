require('phaser');

class Preload extends Phaser.Scene {
	constructor() {
		super('PreloadScene');
	}

	preload() {
		this.load.tilemapTiledJSON('level-1', require('../assets/v2/lv_1.json'));
		this.load.tilemapTiledJSON('level-2', require('../assets/v2/lv_2.json'));
		this.load.tilemapTiledJSON('level-3', require('../assets/v2/lv_3.json'));
		this.load.tilemapTiledJSON('level-4', require('../assets/v2/lv_4.json'));

		this.load.plugin(
			'rexglowfilterpipelineplugin',
			'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexglowfilterpipelineplugin.min.js',
			true
		);

		this.load.image('tiles-1', require('../assets/v2/nhu_tileset.png'));

		this.load.image('logo', require('../assets/v2/logo.png'));
		this.load.image('menuBg', require('../assets/v2/bgMenu.png'));

		this.load.image('gameplay-bg-0', require('../assets/v2/bg/bg_layer 1.png'));
		this.load.image('gameplay-bg-1', require('../assets/v2/bg/bg_layer 2.png'));
		this.load.image('gameplay-bg-2', require('../assets/v2/bg/bg_layer 3.png'));
		this.load.image('gameplay-bg-3', require('../assets/v2/bg/bg_layer 4.png'));
		this.load.image('gameplay-bg-4', require('../assets/v2/bg/bg_layer 5.png'));

		this.load.image('moveText', require('../assets/v2/TEXTS/move.png'));
		this.load.image('jumpText', require('../assets/v2/TEXTS/jump.png'));
		this.load.image('slashText', require('../assets/v2/TEXTS/slash.png'));
		this.load.image('shootText', require('../assets/v2/TEXTS/shoot.png'));
		this.load.image('doubleJumpText', require('../assets/v2/TEXTS/doubleJump.png'));
		this.load.image('twiceText', require('../assets/v2/TEXTS/twice.png'));

		this.load.image('back', require('../assets/back.png'));

		this.load.image('key', require('../assets/v2/nhu_key.png'));

		this.load.spritesheet('battery', require('../assets/v2/battery.png'), {
			frameWidth: 13,
			frameHeight: 24,
		});

		this.load.spritesheet('nhuIdle', require('../assets/v2/Nhu_idle.png'), {
			frameWidth: 32,
			frameHeight: 29,
		});

		this.load.spritesheet('nhuJump', require('../assets/v2/Nhu_jump.png'), {
			frameWidth: 32,
			frameHeight: 29,
		});

		this.load.spritesheet('nhuThrow', require('../assets/v2/Nhu_attack_ranged.png'), {
			frameWidth: 32,
			frameHeight: 29,
		});

		this.load.spritesheet('nhuWalk', require('../assets/v2/Nhu_walk.png'), {
			frameWidth: 32,
			frameHeight: 29,
		});

		this.load.spritesheet('greenProjectile', require('../assets/v2/nhu_projectile.png'), {
			frameWidth: 16,
			frameHeight: 16,
			spacing: 4,
		});

		this.load.spritesheet('birdman', require('../assets/v2/bad_guy_1_walk.png'), {
			frameWidth: 15,
			frameHeight: 32,
		});

		this.load.spritesheet('gunner', require('../assets/v2/bad_guy_2_walk.png'), {
			frameWidth: 24,
			frameHeight: 25,
		});

		this.load.spritesheet('blaster', require('../assets/v2/bad_guy_2_shoot.png'), {
			frameWidth: 57,
			frameHeight: 25,
		});

		this.load.spritesheet('swordDefault', require('../assets/v2/Nhu_attack_close.png'), {
			frameWidth: 76,
			frameHeight: 31,
		});

		this.load.spritesheet('hitSheet', require('../assets/v2/hit_effect_sheet.png'), {
			frameWidth: 32,
			frameHeight: 32,
		});

		this.load.audio('theme', require('../assets/music/new/theme.mp3'));
		this.load.audio('projectile-launch', require('../assets/music/new/projectile.wav'));
		this.load.audio('step', require('../assets/music/new/step.wav'));
		this.load.audio('jump', require('../assets/music/new/jump.wav'));
		this.load.audio('swipe', require('../assets/music/new/swoosh.wav'));
		this.load.audio('collectiblePickup', require('../assets/music/new/pickup.wav'));

		this.load.once('complete', () => {
			this.startGame();
		});
	}

	startGame() {
		this.registry.set('level', 1);
		this.registry.set('unlocked-levels', 1);

		this.scene.start('MenuScene');
	}
}

export default Preload;
