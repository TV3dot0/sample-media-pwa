#### BUILD

docker build  -f ./Dockerfile -t enchaint/pwa ./


#### RUN

docker run -it --rm -w '/app' -e PORT=8180 -p '8180:8180' enchaint/pwa npm run dev
