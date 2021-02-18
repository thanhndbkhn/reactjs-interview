const diff = (large: number[], small: number[]) => {
  return large.filter(e => !small.includes(e));
}

type Item = {
  itemId: number,
  itemLabel: string,
  parentCode: number
}

export const reCheckChilds = (beforeParents: Item[], afterParents: Item[], childs: Item[], checkedChilds: Item[]) => {
  let newChecks = [];
  const newIds = afterParents.map(e => e.itemId);
  const oldIds = beforeParents.map(e => e.itemId);
  if (newIds.length > oldIds.length) {
    const newParents = diff(newIds, oldIds);
    newChecks = childs.filter(e => newParents.includes(e.parentCode)).concat(checkedChilds);
  } else {
    const lostParents = diff(oldIds, newIds);
    newChecks = checkedChilds.filter(e => !lostParents.includes(e.parentCode));
  }
  return newChecks;
}