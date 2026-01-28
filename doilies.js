src(o0)
	.scale(1.03)
	.blend(
  		osc(
          () => 5, 0.03, 5%(time)
        )
  		.color(
          ()=> Math.sin(time/30)+1, 
          Math.cos(time/20)+1, 
          Math.atan(time/40)
        )
  	.kaleid(5)
  
  	.modulate(
      noise()
      .kaleid(7)
      .modulate(
        osc(1,0.33,1)
      )
      .repeat(4,3,0.5)
    ),
  	0.2)
	.invert(0.1)
.scale(0.75).luma(-0.12).rotate(()=> (Math.PI/24))
//.brightness(()=Math.cos(time/15) *0.03 +0.06)
.sub(osc(0.44,1.1,2).modulate(voronoi(6)).kaleid(7).scale(0.5), 0.1051).scale(0.9495)
  
.out(o0)
