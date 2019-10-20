# ts-soundcloud-stats
This is an extremely basic project at this point in time. It queries SoundCloud for the sample username and displays the username/description on the web page. The goal of this project is to gather statistics about a user, such as total number of tracks, total length of time of all public tracks, etc.

## Project setup
```
npm install
```

During this stage of the project, the API Key and a sample username to query are stored in a local file named `.env.local`. To set this file up, perform the following steps:
1. `$ cp .env.local.example .env.local`
2. Add our Client ID after `VUE_APP_SC_CLIENT_ID`

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
