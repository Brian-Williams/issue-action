function isSuperset(set: Set<string>, subset: Set<string>) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

export const checkLabel = (
  found: string[],
  wanted: string[],
): boolean => {
  return isSuperset(new Set(found), new Set(wanted));
};
