# io_project_front-end
Front-end for io project

Instalacja Windows

1. Zainstaluj node.js, jezeli nie masz
2. Wpisz w cmd: npx create-react-app <nazwa folderu, ktory zostanie stworzony i w nim bedzie aplikacja>
3. Pobierz src i public z gita i zamien je z tymi, ktore sie stworzyly w folderze
4. Wpisz komende: set NODE_OPTIONS=--openssl-legacy-provider (mozliwe, ze bedzie dzialac bez tej komendy)
5. Wpisz "npm start" i powinna sie odpalic aplikacja w przegladarce

Instalacja Linux(Ubuntu)
1. W terminalu wpisz: curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash

1.1 Jeśli pokazuje się powiadomienie nvm not found:  touch ~/.bash_profile i powtórzenie polecenia powyższej komendy
2. Restart terminala
3. Wpisz po kolei w terminalu: 

nvm install 4.2.1

nvm install node

n=$(which node)
n=${n%/bin/node}
chmod -R 755 $n/bin/* 
sudo cp -r $n/{bin,lib,share} /usr/local 

4. npx create-react-app nazwa_aplikacji
5. Pobierz src i public z gita i zamien je z tymi, ktore sie stworzyły w folderze
6. Wpisz "npm start" i powinna sie odpalic aplikacja w przegladarce
