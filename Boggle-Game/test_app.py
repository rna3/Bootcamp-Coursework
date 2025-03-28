from unittest import TestCase
from app import app, GAME_BOARD
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):

    # TODO -- write tests for every view function / feature!

    def setUp(self):
        """ set up test client"""
        self.client = app.test_client()
        app.config['TESTING'] = True
        with self.client.session_transaction() as session:
            session.clear()

    def test_home_page(self):
        """Test if the home page sets up the game correctly"""
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Let's Boggle", response.data)

        with self.client.session_transaction() as session:
            self.assertIn(GAME_BOARD, session)
            self.assertIn("score", session)
            self.assertIn("high_score", session)
            self.assertIn("play_count", session)
            self.assertEqual(session["score"], 0)
            self.assertEqual(session["high_score"], 0)
            self.assertEqual(session["play_count"], 1)

    def test_valid_guess_submission(self):
        """ test submitting a guess"""
        with self.client as client: 
            with client.session_transaction() as session:
                session[GAME_BOARD] = [
                ["T", "E", "S", "T", "A"],
                ["A", "R", "A", "E", "T"],
                ["S", "T", "E", "S", "T"],
                ["T", "A", "S", "T", "E"],
                ["E", "S", "T", "A", "R"]
                ]
            session["score"] = 0  
            session["submitted_words"] = []  

            response = client.get("/submit-guess", query_string={"guess":"test"})
            json_data = response.get_json()

            self.assertEqual(response.status_code, 200)
            self.assertIn("is a valid word", json_data["message"])
            self.assertEqual(json_data["score"], 4)

            # Test submitting the same word again
            response = client.get("/submit-guess", query_string={"guess": "test"})
            json_data = response.get_json()
            self.assertIn("has already been submitted", json_data["message"])

    def test_invalid_guess_submission(self):
        """test submitting invalid guess"""

        with self.client as client:
            response = client.get("/submit-guess", query_string={"guess":"kfcuvb"})
            json_data = response.get_json()

            self.assertEqual(response.status_code, 200)
            self.assertIn("is not a valid word", json_data["message"])
            self.assertEqual(json_data["score"], 0)

    def test_new_game(self):
        """Test starting a new game"""

        with self.client as client:
            client.get("/")  
            
            client.get("/submit-guess", query_string={"guess": "test"})
            
            response = client.post("/new-game")
            self.assertEqual(response.status_code, 302)
            
            # Check if the game was reset
            with client.session_transaction() as session:
                self.assertEqual(session["score"], 0)
                self.assertEqual(session["submitted_words"], [])
                self.assertIn(GAME_BOARD, session)