from flask import Flask 
app = Flask(__name__)

@app.route('/welcome')
def welcome_page():
    """Return welcome page."""

    html = """<html>
             <body>
               <h1>Welcome</h1>
             </body>
            </html>"""
    return html

@app.route('/welcome/home')
def welcome_home_page():
    """Return welcome home page."""

    html = """<html>
             <body>
               <h1>Welcome Home</h1>
             </body>
            </html>"""
    return html

@app.route('/welcome/back')
def welcome_back_page():
    """Return welcome back page."""

    html = """<html>
             <body>
               <h1>Welcome Back</h1>
             </body>
            </html>"""
    return html

