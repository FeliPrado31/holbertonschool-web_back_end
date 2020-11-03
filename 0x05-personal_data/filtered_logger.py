#!/usr/bin/env python3
"""0x05. Personal data"""

import re
from typing import List
import logging


def filter_datum(fields: List[str],
                 redaction: str,
                 message: str,
                 separator: str) -> str:
    """Regex-ing"""
    for item in fields:
        message = re.sub(fr'{item}=.+?{separator}',
                         f'{item}={redaction}{separator}', message)
    return message


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """Implement the format method to filter values in incoming log
        records using filter_datum.
        Values for fields in fields should be filtered
        """
        return filter_datum(self.fields, self.REDACTION,
                            super().format(record), self.SEPARATOR)
