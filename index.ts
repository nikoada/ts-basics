function myForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
    items.reduce((acc, cur) => {
        forEachFunc(cur);
        return undefined;
    }, undefined);
}

myForEach(["a", "b", "c"], (v) => console.log(`forEach ${v}`));


function myFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
    return items.reduce((acc, cur) => filterFunc(cur) ? [...acc, cur] : acc, [] as T[])
}

console.log(myFilter([1,2,3,4,5,6,7,8], (v) => v % 2 === 0))

function myMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
    return items.reduce((acc, cur) => [...acc, mapFunc(cur)], [] as K[])
}

console.log(myMap([1,2,3,4,5,6,7,8], (v) => (v * 10).toString()));