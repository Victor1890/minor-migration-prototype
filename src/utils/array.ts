import type { HierarchyNode } from "@/data";

export function getNodeById(data: HierarchyNode[], id: string): HierarchyNode | undefined {
    for (const item of data) {
        if (item.id === id) {
            return item;
        }
        if (Array.isArray(item.children)) {
            const found = getNodeById(item.children as HierarchyNode[], id);
            if (found) {
                return found;
            }
        }
    }
    return undefined;
}