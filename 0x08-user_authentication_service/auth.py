#!/usr/bin/env python3
""" Auth module"""
import bcrypt
from db import DB
from typing import TypeVar
import uuid


def _hash_password(password: str) -> str:
    """ method that takes in a password
        string arguments and returns a string
    """
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


def _generate_uuid() -> str:
    """
    return a string representation of a new UUID
    """
    return str(uuid.uuid4())


class Auth:
    """Auth class to interact with the authentication database.
    """

    def __init__(self):
        self._db = DB()

    def register_user(self, email: str, password: str) -> TypeVar('User'):
        """ hash the password with _hash_password
            save the user to the database using self._db
            return the User object
        """
        user = self._db.find_user_by(email=email)
        if user:
            raise ValueError('User {email} already exists')
        pw = _hash_password(password)
        user = self._db.add_user(email, pw)
        return user

    def valid_login(self, email: str, password: str) -> bool:
        """
        login validation
        """
        user = self._db.find_user_by(email=email)
        if user:
            pw = _hash_password(password)
            return bcrypt.checkpw(password.encode('utf-8'), pw)

    def create_session(self, email: str) -> str:
        """returns the session ID as a string."""
        user = self._db.find_user_by(email=email)
        if user:
            session_id = _generate_uuid()
            self._db.update_user(user.id, session_id=session_id)
            return session_id
