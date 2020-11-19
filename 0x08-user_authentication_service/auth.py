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
