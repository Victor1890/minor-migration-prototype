import type { HierarchyNode } from "@/data";

export function getNodeById(data: HierarchyNode[], id: string, property: keyof HierarchyNode = 'id'): HierarchyNode | undefined {
    if (!property) {
        throw new Error("Property must be specified to search for the node.");
    }
    for (const item of data) {
        if (item[property] === id) {
            return item;
        }
        if (Array.isArray(item.children)) {
            const found = getNodeById(item.children as HierarchyNode[], id, property);
            if (found) {
                return found;
            }
        }
    }
    return undefined;
}