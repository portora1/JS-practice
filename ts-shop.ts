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

let useMoney = 10000

const products = {
    "キャベツ": 190,
    "にんじん": 210,
    "ジャガイモ": 600,
    "草": 50,
    "高級メロン": 4000
}

const minPrice = Math.min(...Object.values(products))

while (useMoney >= minPrice) {
    const message = prompt(`所持金は${useMoney}です、何を購入されますか、Qで終了`,)

    if (message === "Q" || message === "" || message === null) {
        break
    }

    const auth = products[message as keyof typeof products]
    if (auth === undefined) {
        alert("てやんでい！")
        continue
    }

    if (useMoney >= auth) {
        useMoney -= auth
        alert(`${message}は${auth}円ですお買い上げありがとうございます！`)
        alert(chanMon(useMoney))
    } else {
        alert(`${message}は${auth}円です、所持金が足りません。`)
    }
}
alert(`お買い上げありがとうございました！残りの所持金は${useMoney}円です`)
// function changeing() {


// const moneys = [5000, 1000, 500, 100, 50, 10, 1]
// 9950円から5000円を引いて、配列に5000円を入れる
// もし5000円以上の場合は〜
// 5000円1枚,1000円1枚,1000円2枚,1000円3枚,1000円4枚,100円0枚,100円1枚,100円2枚,100円3枚のお返しですお買い上げありがとうございます！となってる
function chanMon(useMoney:number) {
    let n = 0
    let changer = useMoney
    let changeMoney: string[] = []
    if (changer >= 5000) {
        n++
        changer -= 5000
        changeMoney.push(`5000円${n}枚`)
        n = n * 0
    }
    if (changer >= 1000) {
        for (let n = 1; changer >= 1000; n++) {
            changer -= 1000
            if (changer >= 1000) {
                continue
            }
            changeMoney.push(`1000円${n}枚`)
        }
    }
    if (changer >= 500) {
        for (let n = 1; changer >= 500; n++) {
            changer -= 500
            if (changer >= 500) {
                continue
            }
            changeMoney.push(`500円${n}枚`)
        }
        n = n * 0
    }
    if (changer >= 100) {
        for (let n = 1; changer >= 100; n++) {
            changer -= 100
            if (changer >= 100) {
                continue
            }
            changeMoney.push(`100円${n}枚`)
        }
        n = n * 0
    }
    if (changer >= 50) {
        for (let n = 1; changer >= 50; n++) {
            changer -= 50
            if (changer >= 50) {
                continue
            }
            changeMoney.push(`50円${n}枚`)
        }
        n = n * 0
    }
    if (changer >= 10) {
        for (let n = 1; changer >= 10; n++){
            changer -= 10
            if (changer >= 10) {
                continue
            }
            changeMoney.push(`10円${n}枚`)
        }
        n = n * 0
    }
    if (changer >= 5) {
        for (let n = 1; changer >= 5; n++) {
            changer -= 5
            if (changer >= 5) {
                continue
            }
            changeMoney.push(`5円${n}枚`)
        }
        n = n * 0
    }
    if (changer >= 1) {
        for (let n = 1; changer >= 1; n++) {
            changer -= 1
            if (changer >= 1) {
                continue
            }
            changeMoney.push(`1円${n}枚`)
        }
        n = n * 0
    }
    console.log(changeMoney)
    return (`${changeMoney}のお返しですお買い上げありがとうございます！`)

}