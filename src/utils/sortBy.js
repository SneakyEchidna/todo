export default (list, order) => {
  if (!order) {
    return list;
  }
  let ret = [...list];
  let fieldName = order.replace(/^-/, '');

  ret.sort((a, b) => {
    let ao = a[fieldName];
    let bo = b[fieldName];
    return ao > bo ? 1 : ao === bo ? 0 : -1;
  });

  return order[0] === '-' ? ret.reverse() : ret;
};
