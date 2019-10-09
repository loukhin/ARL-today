echo "Backing up Database to mongodb/dump/"
docker-compose exec db mongodump -o /data/db/dump/
docker-compose down
