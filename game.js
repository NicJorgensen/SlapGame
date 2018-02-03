var health = 0
var name = " 'Alice' "
var hits = 10

var alice = {
    items: []
}

function cup1() {
    hits--
    this.health += 1 * this.addMods();
    update()
    disableBtns()
}

function cup2() {
    hits--
    this.health += 5 * this.addMods();
    update()
    disableBtns()
}

function cup3() {
    hits--
    this.health += 10 * this.addMods();
    update()
    disableBtns()
}

function update() {
    var newHealth = document.getElementById("health")
    newHealth.innerText = health
    var newHit = document.getElementById("hits")
    newHit.innerText = hits
    var targetName = document.getElementById("name")
    targetName.innerText = name
}

var Item = function (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
}

var items = {
    moveDown: new Item("Move Down", 0.5),
    pourCup: new Item("Pour a Cup", 2.0),
    shakeHands: new Item("Shake Hands", 1.5)
}

function move() {
    alice.items.push(items.moveDown)
}

function pour() {
    alice.items.push(items.pourCup)
}

function shake() {
    alice.items.push(items.shakeHands)
}

function addMods() {
    var modTotal = 1
    for (let i = 0; i < alice.items.length; i++) {
        var total = alice.items[i].modifier;
        modTotal = modTotal * total
    }
    return modTotal
}

function reset() {
    undisableBtns()
    health = 0
    hits = 10
    alice.items = []
    update()
}

//function alert(hits){
//
//}

function disableBtns() {
    if (hits == 0) {
        document.getElementById("button-active").disabled = true
        document.getElementById("button-active2").disabled = true
        document.getElementById("button-active3").disabled = true
        document.getElementById("button-active4").disabled = true
        document.getElementById("button-active5").disabled = true
        document.getElementById("button-active6").disabled = true
    }
}

function undisableBtns() {
    document.getElementById("button-active").disabled = false
    document.getElementById("button-active2").disabled = false
    document.getElementById("button-active3").disabled = false
    document.getElementById("button-active4").disabled = false
    document.getElementById("button-active5").disabled = false
    document.getElementById("button-active6").disabled = false
}
update()