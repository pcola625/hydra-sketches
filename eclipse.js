src(o0)
	.scale(1.03)
	.blend(
  			shape(140,0.25,0.3)
  				.rotate(Math.PI/4)
  				.modulate(noise(8.77)),
  			0.05)
	.color( 1, 
           	()=> Math.sin(time/30) *0.5 +0.5,
            0)
	.mask(shape(140).invert())

.out(o0)

