import os
import sys

sys.path.append(os.path.expanduser('~/vectoring/'))

from flask import Flask, request, jsonify    
from werkzeug.utils import secure_filename

from engine import compute

app = Flask(__name__, static_url_path='', static_folder='public')
app.add_url_rule('/', 'root', lambda: app.send_static_file('index.html'))


ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'svg'])


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS



@app.route('/api/1.0/files/upload', methods=['POST'])
def upload_file():
    """
    Returns a json with 3 values:

    success (bool)
    message (None or string)
    data (None or string)
    """
    if request.method == 'POST':
        file = request.files.get('file', None)
        if not file or file.filename == '':
            return jsonify(
                success = False,
                message = 'No file selected.',
                data = None
            )

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename) 
            
            if file.mimetype == 'image/svg+xml':
                # No need to SVG, just sent it.
                svg_content = file.read()
                new_svg_content = compute.resize_svg(svg_content)

                return jsonify(
                    success = True,
                    message = 'File computed.',
                    data = new_svg_content
                )

        return jsonify(
            success = False,
            message = 'File type not supported. Please use one of the following extensions: {0}'.format(", ".join(ALLOWED_EXTENSIONS)),
            data = None
        )

    return jsonify(
        success = False,
        message = 'Method not allowed',
        data = None
    )


if __name__ == '__main__':
    app.run(port=int(os.environ.get("PORT", 3000)), debug=True)
