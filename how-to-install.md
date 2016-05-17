# Engine

## potrace (http://potrace.sourceforge.net/)
sudo apt-get install potrace

## convert (http://www.imagemagick.org/script/index.php)
sudo apt-get install imagemagick

## SimpleCV

cd ~/vectoring/engine/libs/
sudo apt-get install ipython python-opencv python-scipy python-numpy python-pygame python-setuptools
sudo pip install https://github.com/sightmachine/SimpleCV/zipball/develop
git clone https://github.com/dbsima/SimpleCV
cd SimpleCV/
sudo pip install -r requirements.txt
sudo python setup.py install

## for some reason svgwrite was missing, so I had to install it.
sudo pip install svgwrite

# Web App

$ virtualenv venv
