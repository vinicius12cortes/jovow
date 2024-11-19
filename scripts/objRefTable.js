const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.EightDir,
		C3.Plugins.Keyboard,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnimSpeed,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy
	];
};
self.C3_JsPropNameTable = [
	{Mosaico: 0},
	{direcao: 0},
	{CentrarEm: 0},
	{"8Direções": 0},
	{jogador1: 0},
	{inimigo: 0},
	{moeda: 0},
	{Teclado: 0},
	{bala: 0},
	{vida: 0}
];

self.InstanceType = {
	Mosaico: class extends self.ITilemapInstance {},
	jogador1: class extends self.ISpriteInstance {},
	inimigo: class extends self.ISpriteInstance {},
	moeda: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	bala: class extends self.ISpriteInstance {}
}