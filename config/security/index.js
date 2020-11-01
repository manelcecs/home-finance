const dbURI ='bW9uZ29kYitzcnY6Ly9hZG1pbjphZG1pbkBzYW5kYm94LWNsdXN0ZXIuZHZvdXkubW9uZ29kYi5uZXQvaG9tZS1maW5hbmNlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eQ==';
const dbURItest = 'bW9uZ29kYitzcnY6Ly9hZG1pbjphZG1pbkBzYW5kYm94LWNsdXN0ZXIuZHZvdXkubW9uZ29kYi5uZXQvaG9tZS1maW5hbmNlLXRlc3Q_cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5==';
const JWTkey = 'primary@$ecurty';
const JWTcad = '48h';

const profile = 'dev';

process.env.profile = profile;

process.env.dbURI = dbURI;
process.env.dbURItest = dbURItest;
process.env.JWTkey = JWTkey;
process.env.JWTcad = JWTcad;

