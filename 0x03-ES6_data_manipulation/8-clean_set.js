export default function cleanSet(set, startString) {
  if (startString === '') return '';

  let output = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      if (output === '') output += item.slice(startString.length);
      else output += `-${item.slice(startString.length)}`;
    }
  }

  return output;
}
