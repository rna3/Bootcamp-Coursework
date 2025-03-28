from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import stories

app = Flask(__name__)

app.config['SECRET_KEY'] = "secret"
debug = DebugToolbarExtension(app)


@app.route('/')
def select_page():
    """Return select_page."""

    return render_template("select_page.html", stories=stories.values())

@app.route("/prompt")
def prompt_page():
    """return the prompt for the selected story"""

    story_id = request.args["story_id"]
    story = stories[story_id]

    prompts = story.prompts

    return render_template("prompt_page.html",
                           story_id=story_id,
                           title=story.title,
                           prompts=prompts)

@app.route('/story')
def story_page():
    """Return madlib story_page."""

    story_id = request.args["story_id"]
    story = stories[story_id]
    
    text = story.generate(request.args)
    
    return render_template("story_page.html",
                           text=text)





    