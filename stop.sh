echo "Backing up Database to mongodb/dump/"
docker-compose exec db mongodump -o /data/db/dump/ --uri="mongodb://arl:ARL3141@db:27017/arl"
docker-compose down
