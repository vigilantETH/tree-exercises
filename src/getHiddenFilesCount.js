import * as fsTrees from "@hexlet/immutable-fs-trees";
import _ from "loadsh";

const getHiddenFilesCount = (tree) => {
    const name = fsTrees.getName(tree);
    if (!fsTrees.isFile(tree)) {
        const children = fsTrees.getChildren(tree);
        const count = children.map(el => getHiddenFilesCount(el));
        return _.sum(count);
    }
    return _.startsWith(name, '.') ? 1: 0;
}

export default getHiddenFilesCount;