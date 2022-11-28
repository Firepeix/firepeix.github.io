help:
  @just --list

#Realiza o deploy considerando que ebisu front esta no mesmo diretorio raiz  
deploy message:
    cp -r ../EbisuFront/dist/spa/. .
    git add .
    git commit -m "{{message}}"
    git push origin main

