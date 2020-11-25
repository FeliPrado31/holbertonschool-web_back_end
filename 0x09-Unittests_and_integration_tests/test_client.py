#!/usr/bin/env python3
""" python basic unittest """
import unittest
from parameterized import parameterized
from unittest.mock import patch, Mock, PropertyMock
from client import GithubOrgClient


class TestGithubOrgClient(unittest.TestCase):
    """TestGithubOrgClient"""
    @parameterized.expand([
        ("google"),
        ("abc"),
    ])

    @patch("client.get_json", return_value=[{"payload": True}])
    def test_org(self, org_name, mock_get):
        """test_org"""
        test_client = GithubOrgClient(org_name)
        test_return = test_client.org
        self.assertEqual(test_return, mock_get.return_value)
        mock_get.assert_called_once
