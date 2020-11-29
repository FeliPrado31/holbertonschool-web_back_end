#!/usr/bin/env python3
"""
0x0A. i18n
"""
from flask import Flask, render_template, request, g
from os import getenv
from flask_babel import Babel, gettext
import pytz
import datetime


app = Flask(__name__)


@app.route('/')
def index():
    """hello world"""
    return render_template("index.html")


if __name__ == "__main__":
    host = getenv("API_HOST", "0.0.0.0")
    port = getenv("API_PORT", "5000")
    app.run(host=host, port=port)
