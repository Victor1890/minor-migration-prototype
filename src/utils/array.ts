import { DATA_DUMB, type HierarchyNode } from "@/data";

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


/**
 * Finds a case by its slug path
 * @param slugPath Full slug path to search for
 * @returns The matching case object or undefined if not found
 */
export const findCaseBySlugPath = (slugPath: string): any | undefined => {
    if (!slugPath) return undefined;

    const slugSegments = slugPath.split('/');
    let currentItems = DATA_DUMB.cases as any[];
    let result: any = undefined;

    for (let i = 0; i < slugSegments.length; i++) {
        const currentSlug = slugSegments[i];
        const foundItem = currentItems.find((item: any) => item.slug === currentSlug);

        if (!foundItem) return undefined;

        if (i === slugSegments.length - 1) {
            result = foundItem;
        } else if (foundItem.children && Array.isArray(foundItem.children)) {
            // Filter children to only include objects with ID and slug
            currentItems = foundItem.children.filter((child: any) =>
                typeof child === 'object' && 'id' in child && 'slug' in child
            );
        } else {
            return undefined;
        }
    }

    return result;
};

export function extractNodes(items: HierarchyNode[], parentPath = "") {

    let result: { slug: string, node: HierarchyNode }[] = []

    for (const item of items) {
        if (!item.slug) continue; // Skip items without a slug
        const currentPath = parentPath ? `${parentPath}/${item.slug}` : item.slug;
        result.push({ slug: currentPath, node: item });
        if (item.children && item.children.length > 0) {
            result = result.concat(extractNodes(item.children as HierarchyNode[], currentPath));
        }
    }
    return result;
}