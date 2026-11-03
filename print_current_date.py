#!/usr/bin/env python3
"""打印当前日期（本地时区）。"""

from datetime import date


def main() -> None:
    print(date.today().isoformat())


if __name__ == "__main__":
    main()
