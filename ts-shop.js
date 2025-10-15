// 買い物app
// 所持金１０００　（後に１００００）
// 売り物　キャベツ190　にんじん210　ジャガイモ600
// promptでキャベツorにんじんorジャガイモ
// 一致しなければalertでてやんでい！
// 再度繰り返しprompt
// promptのメッセージに残金はいくらと表示
// 何も買えなくなったらalertして終わり
// お釣りを実際の硬貨として払い出すようにする　関数にしちゃう
// 購入履歴を出す 表示としてはキャベツキャベツじゃなくてキャベツ*2のような表示
// productsがconst products = [
//     {name: "キャベツ", price: 190},
//     {name: "にんじん", price: 210},
//     {name: "ジャガイモ", price: 600},
//     {name: "草", price: 50}
// ]
var useMoney = 10000;
var products = {
    "キャベツ": 190,
    "にんじん": 210,
    "ジャガイモ": 600,
    "草": 50,
    "高級メロン": 4000
};
var minPrice = Math.min.apply(Math, Object.values(products));
while (useMoney >= minPrice) {
    var message = prompt("\u6240\u6301\u91D1\u306F".concat(useMoney, "\u3067\u3059\u3001\u4F55\u3092\u8CFC\u5165\u3055\u308C\u307E\u3059\u304B\u3001Q\u3067\u7D42\u4E86"));
    if (message === "Q" || message === "" || message === null) {
        break;
    }
    var auth = products[message];
    if (auth === undefined) {
        alert("てやんでい！");
        continue;
    }
    if (useMoney >= auth) {
        useMoney -= auth;
        alert("".concat(message, "\u306F").concat(auth, "\u5186\u3067\u3059\u304A\u8CB7\u3044\u4E0A\u3052\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01"));
        alert(chanMon(useMoney));
    }
    else {
        alert("".concat(message, "\u306F").concat(auth, "\u5186\u3067\u3059\u3001\u6240\u6301\u91D1\u304C\u8DB3\u308A\u307E\u305B\u3093\u3002"));
    }
}
alert("\u304A\u8CB7\u3044\u4E0A\u3052\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\uFF01\u6B8B\u308A\u306E\u6240\u6301\u91D1\u306F".concat(useMoney, "\u5186\u3067\u3059"));
// function changeing() {
// const moneys = [5000, 1000, 500, 100, 50, 10, 1]
// 9950円から5000円を引いて、配列に5000円を入れる
// もし5000円以上の場合は〜
// 5000円1枚,1000円1枚,1000円2枚,1000円3枚,1000円4枚,100円0枚,100円1枚,100円2枚,100円3枚のお返しですお買い上げありがとうございます！となってる
function chanMon(useMoney) {
    var n = 0;
    var changer = useMoney;
    var changeMoney = [];
    if (changer >= 5000) {
        n++;
        changer -= 5000;
        changeMoney.push("5000\u5186".concat(n, "\u679A"));
        n = n * 0;
    }
    if (changer >= 1000) {
        for (var n_1 = 1; changer >= 1000; n_1++) {
            changer -= 1000;
            if (changer >= 1000) {
                continue;
            }
            changeMoney.push("1000\u5186".concat(n_1, "\u679A"));
        }
    }
    if (changer >= 500) {
        for (var n_2 = 1; changer >= 500; n_2++) {
            changer -= 500;
            if (changer >= 500) {
                continue;
            }
            changeMoney.push("500\u5186".concat(n_2, "\u679A"));
        }
        n = n * 0;
    }
    if (changer >= 100) {
        for (var n_3 = 1; changer >= 100; n_3++) {
            changer -= 100;
            if (changer >= 100) {
                continue;
            }
            changeMoney.push("100\u5186".concat(n_3, "\u679A"));
        }
        n = n * 0;
    }
    if (changer >= 50) {
        for (var n_4 = 1; changer >= 50; n_4++) {
            changer -= 50;
            if (changer >= 50) {
                continue;
            }
            changeMoney.push("50\u5186".concat(n_4, "\u679A"));
        }
        n = n * 0;
    }
    if (changer >= 10) {
        for (var n_5 = 1; changer >= 10; n_5++) {
            changer -= 10;
            if (changer >= 10) {
                continue;
            }
            changeMoney.push("10\u5186".concat(n_5, "\u679A"));
        }
        n = n * 0;
    }
    if (changer >= 5) {
        for (var n_6 = 1; changer >= 5; n_6++) {
            changer -= 5;
            if (changer >= 5) {
                continue;
            }
            changeMoney.push("5\u5186".concat(n_6, "\u679A"));
        }
        n = n * 0;
    }
    if (changer >= 1) {
        for (var n_7 = 1; changer >= 1; n_7++) {
            changer -= 1;
            if (changer >= 1) {
                continue;
            }
            changeMoney.push("1\u5186".concat(n_7, "\u679A"));
        }
        n = n * 0;
    }
    console.log(changeMoney);
    return ("".concat(changeMoney, "\u306E\u304A\u8FD4\u3057\u3067\u3059\u304A\u8CB7\u3044\u4E0A\u3052\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01"));
}
