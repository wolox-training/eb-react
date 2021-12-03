export const camelize = (obj: Record<string, any>) => {
  const newObj: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const isObject = value !== null && typeof value === 'object' && !Array.isArray(value);
      const isArray = Array.isArray(value);
      const newKey = key.replace(/_./g, x => x[1].toUpperCase());
      if (isObject) {
        newObj[newKey] = camelize(value);
      } else if (isArray) {
        newObj[newKey] = (value as Record<string, any>[]).map(camelize);
      } else {
        newObj[newKey] = obj[key];
      }
    }
  }
  return newObj;
};
