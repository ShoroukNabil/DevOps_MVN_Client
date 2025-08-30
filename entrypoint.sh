#!/bin/sh
set -e

echo "🔧 Substituting environment variables in config.json..."
envsubst < /usr/share/nginx/html/assets/config.json > /usr/share/nginx/html/assets/config.json.tmp
mv /usr/share/nginx/html/assets/config.json.tmp /usr/share/nginx/html/assets/config.json

echo "✅ Config.json updated with API_URL=${API_URL}"

exec "$@"
