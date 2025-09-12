declare namespace App {
    interface Locals {
        node: {
            slug: string;
            node: HierarchyNode;
        }
    }
}

declare global {
    type Prettify<T> = {
        [K in keyof T]: T[K];
    } & {};
}

export { };