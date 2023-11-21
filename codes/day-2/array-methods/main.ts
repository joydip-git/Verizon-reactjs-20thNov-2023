//type parameter
//generic function
function add<TInput, TResult>(a: TInput, b: TInput): TResult {

}

add<number, number>(12, 3)
add<string, string>('joy', 'dip')

//generic class
class MyCollection<TElement>{
    private _elements: TElement[];
    constructor() {
        this._elements = new Array<TElement>()
    }
    add(e: TElement) {
        this._elements.push(e)
    }

    get elements(): TElement[] {
        return this._elements
    }

    getElements(): TElement[] {
        return this._elements
    }
}

const collection = new MyCollection<number>()
collection.add(12)
collection.add(1)

// const all = collection.elements
const all = collection.getElements()
for (const element of all) {
    console.log(element)
}

//generic interface
export interface ManagerContract<T> {
    add(item: T): boolean;
    update(id: number, item: T): boolean;
    delete(id: number): boolean;
    get(id: number): T | undefined;
    getAll(): T[];
}

//interface as type
interface BlogPost {
    postId: number;
    postTitle: string;
    postBody: string;
}
const posts: BlogPost[] = [
    {
        postId: 1,
        postTitle: 'title',
        postBody: 'body'
    }
]

