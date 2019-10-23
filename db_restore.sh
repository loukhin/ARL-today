echo "Restoring data from mongodb/dump/arl"
docker-compose exec db mongorestore --uri="mongodb://arl:ARL3141@db:27017/arl" /data/db/dump/
