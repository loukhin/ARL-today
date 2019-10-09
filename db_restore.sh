echo "Restoring data from mongodb/dump/"
docker-compose exec db mongorestore /data/db/dump/
