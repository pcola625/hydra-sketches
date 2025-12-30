await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-wrap.js");

setResolution(1920,1080);
hydraWrap.setMirror();

src(o0)
	.blend(
  		osc(3,0.1,1)
  			.kaleid(6)
  			.rotate(Math.PI*4/7).repeat(4,4)
  			.mask(
              shape(6, 0.951, 0.9))
  )
	.scale(0.33)
	.blend(noise(),0.123).modulateRotate(voronoi(10,0.05).modulate(noise(0.1)))
.out(o0)
                 