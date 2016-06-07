import os
import imghdr
import string
import random
import numpy

from SimpleCV import Image

PATH_TO_PROJECT = os.path.expanduser('~/vectoring')
INPUT_DIR = os.sep.join([PATH_TO_PROJECT, 'engine/in'])
OUTPUT_DIR = os.sep.join([PATH_TO_PROJECT, 'engine/out'])
TMP_DIR = '/tmp'
ALLOWED_IMAGE_FILE_FORMATS = ['png', 'jpeg']

OPTIONS = {
    ##'turnpolicy': ['black', 'white', 'right', 'left', 'minority', 'majority', 'random'],
    #'--turdsize': random.sample(xrange(30), 5), # 2
    #'--alphamax': [0.0, 0.5, 1.0, 1.3334], # 1.0
    #'--longcurve': None,
    #'--unit': random.sample(xrange(10, 100), 5), # 10
    '--debug': [1, 2, 3],
    '--invert': None,
    #'--blacklevel': numpy.arange(0, 1.1, 0.1)
}

def get_random_string(length=16):
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(length))


def edgify(in_full_path):
    (root, ext) = os.path.splitext(in_full_path)
    out_full_path = root + '_edgified' + ext

    img = Image(in_full_path)
    # create an edge image using the Canny edge detector
    # set the first threshold to 160
    output = img.edges(t1=50, t2=50)
    # invert white on black image
    output = output.invert()
    # save the output images. 
    output.save(out_full_path)
    return out_full_path


def copy(in_full_path, out_dir):
    (root, ext) = os.path.splitext(in_full_path)
    new_file_name = get_random_string() + ext
    out_full_path = os.sep.join([TMP_DIR, new_file_name])
    os.system("cp %s %s" % (in_full_path, out_dir))
    return out_full_path


def clear_dir(dir_name):
    if dir_name and dir_name.strip != '/':
        os.system('rm -rf %s/*.* ' % dir_name)
    else:
        print 'this is dangerous my friend.'


def remove_intermediates():
    os.system('find %s -name "*.pnm" -type f -delete' % TMP_DIR)


def to_pnm(in_full_path, out_full_path=None):
    (root, ext) = os.path.splitext(in_full_path)
    if not out_full_path:
        out_full_path = root + '_pnm.pnm'
    os.system("convert %s %s" % (in_full_path, out_full_path))
    return out_full_path


def to_svg(in_full_path, algorithm_options=''):
    (root, ext) = os.path.splitext(in_full_path)
    out_full_path = root + algorithm_options.replace(' ', '_') + '.svg'
    command = "potrace -s -o {out_full_path} {in_full_path} {algorithm_options} --tight --width 384pt".format(
        out_full_path=out_full_path,
        in_full_path=in_full_path,
        algorithm_options=algorithm_options
    )
    print 'executing', command
    os.system(command)

    copy(out_full_path, OUTPUT_DIR)
    return out_full_path


def get_files(path):
    list_of_files = []
    for (dirpath, dirnames, filenames) in os.walk(path):
        for filename in filenames:
            split_by_dot = filename.split('.')
            extension = split_by_dot[-1]
            path_to_file = os.sep.join([dirpath, filename])
            if imghdr.what(path_to_file) in ALLOWED_IMAGE_FILE_FORMATS:
                list_of_files.append(path_to_file)
    return list_of_files


def compute_1(pnm_full_path):
    # .{png,jpeg} -> pnm -> svg -> edgified
    edg_full_path = edgify(pnm_full_path)
    svg_full_path = to_svg(edg_full_path)
    return svg_full_path
    

def compute_2(pnm_full_path):
    # .{png,jpeg} -> pnm -> svg -> pnm -> edgified -> svg
    svg_full_path = to_svg(pnm_full_path)
    pnm_full_path = to_pnm(svg_full_path)
    edg_full_path = edgify(pnm_full_path)
    svg_full_path = to_svg(edg_full_path)
    return svg_full_path


def compute_3(pnm_full_path):
    # .{png,jpeg} -> pnm
    svg_full_path = to_svg(pnm_full_path)
    return svg_full_path


def send_files_to_processor():
    # remove old assets
    clear_dir(TMP_DIR)
    clear_dir(OUTPUT_DIR)
    # generate assets
    list_of_images = get_files(INPUT_DIR)
    for in_full_path in list_of_images:

        (root, ext) = os.path.splitext(in_full_path)
        new_file_name = get_random_string() + '.pnm'
        out_full_path = os.sep.join([TMP_DIR, new_file_name])

        pnm_full_path = to_pnm(in_full_path, out_full_path)
        copy(pnm_full_path, OUTPUT_DIR)
        for option in OPTIONS:
            values = OPTIONS[option]
            if values is None:
                algorithm_option = '{option}'.format(
                    option=option,
                )
                svg_full_path = to_svg(pnm_full_path, algorithm_option)
            else:
                for value in values:
                    algorithm_option = '{option} {value}'.format(
                        option=option,
                        value=value
                    )
                    svg_full_path = to_svg(pnm_full_path, algorithm_option)

        #remove_intermediates()

send_files_to_processor()
