# Escolha a imagem base
FROM node:16

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Compile o código TypeScript para JavaScript
RUN npm run build

# Exponha a porta que a aplicação irá utilizar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
