#!/bin/sh
python manage.py collectstatic --no-input --clear
python manage.py migrate
gunicorn VogueNation.wsgi:application --bind 0.0.0.0:80 --log-level=debug --timeout 180  --workers 4
