import * as fsTrees from "@hexlet/immutable-fs-trees";
import _ from "loadsh";

export const compressImages = (node) => {
    const children = fsTrees.getChildren(node);
    const newChildren = children.map((child) => {
        const name = fsTrees.getName(child);
        if (!fsTrees.isFile(child) || !name.endsWith('.jpg')) {
            return child;
        }
        const meta = fsTrees.getMeta(child);
        const newMeta = _.cloneDeep(meta);
        newMeta.size /= 2;
        return fsTrees.mkfile(name, newMeta);
    });
    const newMeta = _.cloneDeep(fsTrees.getMeta(node));
    return fsTrees.mkdir(fsTrees.getName(node), newChildren, newMeta);
};