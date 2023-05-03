import unittest
import guestbook
import json
import os

class TestGuestbook(unittest.TestCase):
    def setUp(self):
        # set up a test file for the guestbook data
        with open("guestbook.json", "w") as f:
            json.dump([], f)
        guestbook.GUESTBOOK_FILE = "guestbook.json"

    def tearDown(self):
        # remove the test file after each test
        os.remove("guestbook.json")

    def test_add_note(self):
        # test adding a note to the guestbook
        guestbook.add_note("test note")
        notes = guestbook.load_notes()
        self.assertEqual(notes, ["test note"])

    
    def test_edit_note(self):
        # test editing a note in the guestbook
        guestbook.add_note("original note")
        guestbook.edit_note(1, "edited note")
        notes = guestbook.load_notes()
        self.assertEqual(notes, ["edited note"])

    def test_delete_note(self):
        # test deleting a note from the guestbook
        guestbook.add_note("note 1")
        guestbook.add_note("note 2")
        guestbook.add_note("note 3")
        guestbook.delete_note(2)
        notes = guestbook.load_notes()
        self.assertEqual(notes, ["note 1", "note 3"])

    