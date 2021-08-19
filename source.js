const colors = require('colors');
const encryptor = require('file-encryptor');
const listen = require('readline-sync');
const sleep = require("util").promisify(setTimeout);

console.log('▓█████  █    ██  ██▓███   ██░ ██  ▒█████   ██▀███   ██▓ ▄▄▄      \n▓█   ▀  ██  ▓██▒▓██░  ██▒▓██░ ██▒▒██▒  ██▒▓██ ▒ ██▒▓██▒▒████▄    \n▒███   ▓██  ▒██░▓██░ ██▓▒▒██▀▀██░▒██░  ██▒▓██ ░▄█ ▒▒██▒▒██  ▀█▄  \n▒▓█  ▄ ▓▓█  ░██░▒██▄█▓▒ ▒░▓█ ░██ ▒██   ██░▒██▀▀█▄  ░██░░██▄▄▄▄██ \n░▒████▒▒▒█████▓ ▒██▒ ░  ░░▓█▒░██▓░ ████▓▒░░██▓ ▒██▒░██░ ▓█   ▓██▒\n░░ ▒░ ░░▒▓▒ ▒ ▒ ▒▓▒░ ░  ░ ▒ ░░▒░▒░ ▒░▒░▒░ ░ ▒▓ ░▒▓░░▓   ▒▒   ▓▒█░\n ░ ░  ░░░▒░ ░ ░ ░▒ ░      ▒ ░▒░ ░  ░ ▒ ▒░   ░▒ ░ ▒░ ▒ ░  ▒   ▒▒ ░\n   ░    ░░░ ░ ░ ░░        ░  ░░ ░░ ░ ░ ▒    ░░   ░  ▒ ░  ░   ▒   \n   ░  ░   ░               ░  ░  ░    ░ ░     ░      ░        ░  ░'.magenta)
console.log('\n[1] Encrypt a File'.brightMagenta)
const choice = listen.question('\nSelect a Number > '.brightMagenta);

if (choice === "1") {
const filename = listen.question('\nFile Name? Warning: File needs to be in the same Directory. (Only Text Files are supported.) > '.brightMagenta)
sleep(1000)
const key = listen.question('Tell me the key for Encrypt File. > '.brightMagenta)
sleep(1000)
const encryptmode = listen.question('Tell me the Encrypt Mode. Advices: aes-256-cbc, camellia-192-cbc, aria-256-ctr. (Or run "openssl help" and choice.) > '.brightMagenta)
sleep(1000)
var options = { algorithm: `${encryptmode}` };
var keycrypt = key;
sleep(1000)
encryptor.encryptFile(filename, 'encrypted-by-euphoria.dat', keycrypt, options, function(err) {
    sleep(1000)
    console.log('Done.'.brightMagenta)
  });
} else {
    console.log('Select a Valid Option (1).'.brightMagenta)
}
