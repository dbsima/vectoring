# vectoring

Play with vectorized B&W images.

## 2016/05/16

The current state has a set of images to which I apply a two 
sets of transformations.

1. .{png,jpeg} -> pnm -> svg -> edgified
2. .{png,jpeg} -> pnm -> svg -> pnm -> edgified -> svg

Conclusions:

* The final state of the initial image is __not__ the 'best' vectorized
result. Depending on the initial image there are some intermidiate results
that are not that bad. (An interesting problem could how to 'guess' the
'best' reulst.)

* I would love a nice (bezier based) function that would 'fix' some
'broken'paths from the SVG.

* I already have too many 'dumb' quotation marks.






