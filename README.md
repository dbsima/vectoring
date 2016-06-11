# web app

## Install Node.js v6
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

## Install npm
curl -L https://www.npmjs.com/install.sh | sh

## Install webpack
npm install webpack -g


# vectoring

Play with vectorized B&W images.

## 2016/05/16

The current state of the engine takes a bunch of images to which it
applies two sets of transformations.

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

* Milestone #1: 10-20 commmits a day.


# Docs

## React
https://facebook.github.io/react/docs/component-specs.html
https://github.com/okonet/react-dropzone

## SVG
https://www.w3.org/TR/SVG/paths.html


