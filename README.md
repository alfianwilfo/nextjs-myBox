# How

clone this repo then:

```md
cd api
npm install
```

```md
cd client-admin
npm install
```

```md
cd client-user
npm install
```

Then change database password with your own username and password on `api/config/config.json` (development environment)

**Setup database** :

```md
npx sequelize db:create && npx sequelize db:migrate && npx sequelize db:seed:all
```

**To start API**

```md
nodemon api.js
```

**To start Client-admin**

```md
npm run dev
```

**To start Client-user**

```md
npm run dev
```

**Admin account**

```md
username: admin
passsword: 123456

username: alfian
passsword: 123456
```
