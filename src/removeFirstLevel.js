export default (tree) => {
    const lowerLevel = tree.filter(node => Array.isArray(node));
    return lowerLevel.flat();
}