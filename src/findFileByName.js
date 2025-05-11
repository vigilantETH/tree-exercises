import path from 'path'
import * as fsTrees from '@hexlet/immutable-fs-trees'

// Агрегация по дереву

const findFilesByName = (tree, substr) => {
    const iter = (node, ancestry) => {
        const name = fsTrees.getName(node);
        if (fsTrees.isFile(node)) {
            if (name.includes(substr)) {
                return path.join(ancestry, name);
            } return [];
        }
        ancestry = path.join(ancestry, name);
        const children = fsTrees.getChildren(node);
        return children.flatMap(child => iter(child, ancestry))
    }
    return iter(tree, '');
};

export default findFilesByName;
