# --- ETAPA 1: Build da Aplicação React ---
# Usamos uma imagem oficial do Node.js (versão 18, Alpine, que é bem leve)
# Damos um "apelido" de 'build' para esta etapa
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json primeiro. Isso otimiza o cache do Docker.
COPY package*.json ./

# Instala todas as dependências do projeto
RUN npm install

# Copia todo o resto do código do projeto para o container
COPY . .

# Roda o comando de build do Vite para gerar a pasta /dist com o site otimizado
RUN npm run build


# --- ETAPA 2: Servidor Web de Produção ---
# Agora, usamos uma imagem super leve do Nginx para servir os arquivos finais
FROM nginx:stable-alpine

# Copia APENAS o conteúdo da pasta /dist (gerada na etapa anterior) 
# para a pasta padrão do Nginx que serve sites.
COPY --from=build /app/dist /usr/share/nginx/html

# Informa que o container vai rodar na porta 80 (padrão do Nginx)
EXPOSE 80

# Comando para iniciar o Nginx quando o container for executado
CMD ["nginx", "-g", "daemon off;"]