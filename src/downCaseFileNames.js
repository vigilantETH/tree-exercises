import * as fsTrees from '@hexlet/immutable-fs-trees';
import _ from 'loadsh';

const downCaseFileNames = (tree) => {
    const name = fsTrees.getName(tree);
    const meta = _.cloneDeep(fsTrees.getMeta(tree));
    const newName = name.toLowerCase();

    if(fsTrees.isFile(tree)) {
        return fsTrees.mkfile(newName, meta);
    }

    const children = fsTrees.getChildren(tree);
    const newChildren = children.map(file => downCaseFileNames(file));
    const newTree = fsTrees.mkdir(name, newChildren, meta);
    return newTree
}

export default downCaseFileNames;