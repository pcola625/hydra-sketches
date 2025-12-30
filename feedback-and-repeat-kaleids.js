

src(o0)
.scale(() => 1.03 +Math.sin(time/50) *0.09)
.blend(
  osc(1,0.1,2)
 
  .diff(voronoi()).modulateScrollX(noise().repeat(4,4,0.5,0.1).mask(noise(2)))
  ,0.1)
.mult(noise(3).kaleid(6).repeat(4,5, 0.3, 0.6).modulateScale(osc(0.01,0.04,2)),0.2)
.scale(()=>0.9 +Math.cos(time/49.9) * 0.05)
.out(o0)
