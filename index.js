// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// http://localhost:3000/api/v1/list にアクセスしてきたときに
// TODOリストを返す
app.get('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    const todoList = [
        { title: 'JavaScriptを勉強する', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIを作る', done: false }
    ];

    // JSONを送信する
    res.json(todoList);
});

app.get('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    const todoList = [
        { title: 'JavaScriashihasnhijahninhiahidsni', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIをadsajsdb', done: false }
    ];

app.get('/api/', (req, res) => {
    // クライアントに送るJSONデータ
    const todoList = [
        { title: 'apiができたーーーーーー', done: true },
        { title: 'ウェーーーーい', done: false },
        { title: 'Web APIを作る', done: false }
    ];

    // JSONを送信する
    res.json(todoList);
});

    // JSONを送信する
    res.json(todoList);
});

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));