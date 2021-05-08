
// console.log('滝澤');
// // console.error('エラーが発生しました。');

// // HTMLのIDを取得する
// let strElem = document.getElementById('str');
// // strElem = "代入したよ";
// console.log(strElem);
// //<p id="str">Hello World</p>と出力されるのはなぜか？
// // ①デバッグで順番に実行すると「空っぽ」で表示される
// // ②リロードで一瞬で実行時は「Hello World」で表示される
// // ③結論　＝＞　リロード時はおそらく処理速度の問題で中身が表示される。
// // そのため、デバッグで順番に処理を進めて内容を確認することが重要になってくる。（次回乞うご期待（＞_＜）/~）




// let str = 'Hello World';

// // HTMLに表示する
// strElem.innerText = str;


// // 変数とは　箱のようなもの
// // なぜ箱か　⇨　なんでも入る（数字でも、文字、変数、関数）
// //  let 名前 = 入れるもの;
// //  const var

// //四則演算
// //  足し算　+
// //  引き算　-
// //  掛け算　*
// //  割り算　/

// let FamiliyName = "滝澤";
// let lastName = "惇";

// console.log(FamiliyName + lastName + FamiliyName); //滝澤淳
// console.log(1 + 1);  //2
// console.log('1' + 1);
// console.log('"1"' + 1);


// // ここまでを自分でやる（課題）



// // 　制御構文（if）

// let number = 1;

// if(number != "1"){
//     // 処理
//     console.log("数字は1です。");
// }



// // 型
// // 　文字型
// // 　数値型
// // 　


// // コーヒーを何かに入れる場合
// // 　入れ物は　マグカップに入れる
// // 　※段ボールにコーヒーは入れない

// // 変数でいうと、上のコーヒーを入れるのはマグカップ　＝＝＞　正しい型
// // 　　　　　　　段ボールに入れるのは　＝＝＞間違った型


// // どういう時に使うのか、なぜ分けるのか
// // 数値型、文字型　でしかできないことがあるため分けている
// // 数値型；計算、　文字型:最初の一文字のみ何か処理を入れる


































// // 課題
// // ①HTMLでフォームでデータの受け渡しをする
// // ②JavaScriptを動かしてみる
// // 　　コンソールに好きな文字を表示する
// // 　　HTMLファイル上に好きな文字を表示する



Promise.resolve()
  .then(task1.bind(null, '123'))
  .then(task2.bind(null, ['aaa', 'bbb'])) // bindでtask2の第1引数を固定
  .then(function(value){
    return new Promise(function (resolve, reject) {
      console.log(value);
      console.log('task3 完了!');
      resolve();
    });
  })


function task1(msg){
    console.log(this);  //Window
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log('task1 処理中...');
      console.log(msg); // => 123
      resolve(['task1 完了!', msg]);
      reject(["失敗"]);
    }, 1000);
  });
}

// thenでtask2を呼び出す時に、第一引数をbindで固定しているため、値の受け取りは以下になる
// 第1引数 args  => ['aaa','bbb']
// 第2引数 value => ['task1 完了!', '123']
function task2(args, value){
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      console.log(value[0]);  // => task1 完了!
      console.log(value[1]);  // => 123
      console.log(args[0]);   // => aaa
      console.log(args[1]);   // => bbb
      console.log('task2 処理中...');
      resolve('task2 完了!');
    reject(["task2 失敗"]);
    }, 3000);
  });
}





let ary = ["key":"aaa"];
