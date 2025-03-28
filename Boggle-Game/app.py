from flask import Flask, render_template, session, request, jsonify, redirect
from boggle import Boggle
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "never-tell!"

debug = DebugToolbarExtension(app)

boggle_game = Boggle()
GAME_BOARD = "board"


@app.route("/")
def gen_game_board():
    """Generate the game board and put it in a session"""

    if GAME_BOARD not in session:
        board = boggle_game.make_board()
        session[GAME_BOARD] = board
        session["submitted_words"] = []
        session["score"] = 0
        
    if "high_score" not in session:
        session["high_score"] = 0 
    if "play_count" not in session:
        session["play_count"] = 0

    session["play_count"] += 1    

    return render_template("game_board.html", board=session[GAME_BOARD], score=session.get("score", 0), high_score= session["high_score"], play_count=session["play_count"])



@app.route("/submit-guess")
def submit_guess():
    """ Handle guess submission and return JSON response"""

    word = request.args["guess"].lower()
    board = session[GAME_BOARD]
    score = session.get("score", 0)
    submitted_words = session.get("submitted_words", [])

    if word in submitted_words:
        return jsonify({"message": f"'{word}' has already been submitted!"})

    result = boggle_game.check_valid_word(board, word)

    response_message = ""

    if result == "ok":
        session["score"] += len(word)  
        submitted_words.append(word)  
        session["submitted_words"] = submitted_words
        response_message = f"'{word}' is a valid word, your score is {session['score']}!"

        if score > session["high_score"]:
            session["high_score"] = score

    elif result == "not-on-board":
        response_message = f"'{word}' is not on the board."
    elif result == "not-word":
        response_message = f"'{word}' is not a valid word."


    return jsonify({"message": response_message, "score" : session["score"]})

@app.route("/new-game", methods=["POST"])
def new_game():
    """ End the game and reset the score"""
    session["score"] = 0

    board = boggle_game.make_board()
    session[GAME_BOARD] = board
        

    
    return redirect("/")