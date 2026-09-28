// задача 1

const userName: string = "Olga";
const userAge: number = 68;
const hasAccess: boolean = false;

console.log(`
    Имя: ${userName}
    Возраст: ${userAge}
    Доступ разрешён: ${hasAccess}`);

// задача 2

type City = {
    name:string,
    population:number,
    isCapital:boolean,
}

const cities:City[] = [
    {
        name: "Moscow",
        population: 2000000,
        isCapital: true,
    },
    {
        name: "Rostov-on-Don",
        population: 700000,
        isCapital: false,
    },
    {
        name: "Tambov",
        population: 500000,
        isCapital: false,
    }
]

console.log(cities)
console.log(cities[0].name)
console.log(cities[1].population)

// задача 3

function calculateTotal(cost:number, amt:number):number {
    const result = cost * amt
    return result
}
console.log("Общая стоимость:", calculateTotal(750, 4))
