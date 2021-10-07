type MyFlecibleDogInfo = {
    name: string;
    [key: string]: string | number;
};

const dog: MyFlecibleDogInfo = {
    name: "LG",
    breed: "Mutt"
}

interface DogInfo {
    name: string;
    age: number;
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
}

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void;
} & {
    [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: (newValue: Property) => void;
}

function listenToObjec<T>(obj: T, listeners: Listeners<T>): void {
    throw "Needs to be implemented";
}

const lg: DogInfo = {
    name: "LG",
    age: 13
}

type DogInfoListeners = Listeners<DogInfo>;

listenToObjec(lg, {
    onNameChange: (v: string) => {},
    onAgeChange: (v: number) => {},
    onAgeDelete: () => {},
})