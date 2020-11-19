#!/usr/bin/env python3
""" Database module
"""

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from typing import TypeVar
from user import Base, User


class DB:
    """
        Creates engine, session, adds user object to DB
    """

    def __init__(self):
        self._engine = create_engine("sqlite:///a.db")
        Base.metadata.drop_all(self._engine)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self):
        if self.__session is None:
            DBSession = sessionmaker(bind=self._engine)
            self.__session = DBSession()
        return self.__session

    def add_user(self, email: str, hashed_password: str) -> TypeVar('User'):
        """save the user to the database"""
        user = User(email=email, hashed_password=hashed_password)
        self._session.add(u)
        self._session.commit()
        return user
