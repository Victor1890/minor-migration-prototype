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

export function getHistoryNodeById(
    data: HierarchyNode[],
    targetId: string,
    property: keyof HierarchyNode = 'id'
): HierarchyNode[] {
    if (!property) {
        throw new Error("Property must be specified to search for the node.");
    }

    function findPath(nodes: HierarchyNode[], id: string): HierarchyNode[] | undefined {
        for (const node of nodes) {
            if (node[property] === id) {
                return [node];
            }
            if (Array.isArray(node.children)) {
                const childPath = findPath(node.children as HierarchyNode[], id);
                if (childPath) {
                    return [node, ...childPath];
                }
            }
        }
        return undefined;
    }

    return findPath(data, targetId) || [];
}