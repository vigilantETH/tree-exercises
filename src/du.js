import * as fsTrees from '@hexlet/immutable-fs-trees';
import _ from 'loadsh';

const getSize = (tree) => {
    if (fsTrees.isFile(tree)) {
        const newMeta = fsTrees.getMeta(tree);
        return newMeta.size;
    }
    const children = fsTrees.getChildren(tree);
    const childrenSize = children.map(getSize);
    return _.sum(childrenSize);
};

const du = (tree) => {
    const children = fsTrees.getChildren(tree);
    return children
        .map((child) => [fsTrees.getName(child), getSize(child)])
        .sort((child1, child2) => child2[1] - child1[1]);
}

export default du;