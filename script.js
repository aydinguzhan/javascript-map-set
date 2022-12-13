// Map ve Set veri yapıları için örnekler

// Map oluşturmak:

/* let new_map = new Map([
    ["key", "value"],
    ["key", "value"],
    ["key", "value"]
])
*/
let new_map =  new Map();

// key ve value değerlerinden oluşan sıralı bir mp yapısı oluşturduk.

// Veri eklemenin bir değer yöntemi set metotudur.

new_map.set("key1","value1");
new_map.set("key2",function(){console.log("key2 için fonksiyon çalıştı")});
new_map.set("key3",()=>{console.log("key3 için fonksiyon çalıştı")});
new_map.set("key4",["a","b",1,2]);
new_map.set({name : "furkan"},"Derin bir javascript");
new_map.set("furkan",[{"meslek":"Mühendis"},{"hobi":"Somon olan balıkları yakalamak"}])

// consol ekranımızda new_map yapısmızı gözlemleyelim

console.log(new_map);

// Verilerimizi çağırmak
console.log("-------------forEach((key,value)=>{//kodbloğu})------------------")
new_map.forEach((key,value)=>console.log(key+":"+value));

// belirli bir key değerindeki verimizi çağıralım
console.log("--------------Beirli bir değeri çağırmak (key2)------------")
console.log(new_map.get("key2"))

// map içerisinde saladığımız funtion değerini çağırıp çalıştırmak

console.log("--map içerisinde saladığımız funtion değerini çağırıp çalıştırmak--");

new_map.get("key3")();
new_map.get("key2")();

//  Verilen key değerini map yapısınde mülk kontrolünü sağlamak
// True veye false döner
console.log(new_map.has("key2"));
// map eleman sayısı size ile belirlenir
console.log(new_map.size);

// entries ile verilerin içerikleri detaylandırılarak düzenli bir halde sıralanır
console.log(new_map.entries());

for(const x of new_map.entries()){
    console.log(x)
}

// olan elemanın valuesini değiştirme change işlemi
new_map.set("key1","deneme deneme")
console.log(new_map.get("key1"))


//Sets  veri tipi : Her değer sadece birkez olabilir (collection)

let new_sets = new Set();

new_sets.add("a");
new_sets.add({a:1,b:2});
new_sets.add({a:1,b:2});
new_sets.add(["a",1]);
new_sets.add(1);
new_sets.add([{name : "Oguz" , job:"Tırnakçı"},{name:"Aynalı Tahir", job:"Hunter"}])

console.log(new_sets);
// forEach ile iterasyon
console.log("---forEach----");
new_sets.forEach((item)=>console.log(item));

console.log(new_sets.values());

// for of ile iterasyon
console.log("-----for of -----")
for(const x of new_sets.values()){
    console.log(x)
}
console.log("-------------")
new_sets.forEach((item)=>console.log(item));
console.log("-------------------------------")

new_sets.delete(["a",1])

console.log(new_sets.entries())
