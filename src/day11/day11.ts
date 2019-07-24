export function day11(password: string): string {
  let isValid = false;
  do {
    password = generateNewPassword(password);
    isValid = checkPasswordRequirements(password);
  } while (!isValid);

  return password;
}

function generateNewPassword(oldPassword: string): string {
  return oldPassword;
}

export function checkPasswordRequirements(password: string): boolean {
  // straight chars
  let nextCharCode = 0;
  let charCodeCount = 0;
  let found = false;
  for (const c of password) {
    if (c.charCodeAt(0) === nextCharCode) {
      nextCharCode += 1;
      charCodeCount += 1;
      found = charCodeCount === 3;
    } else {
      charCodeCount = 1;
      nextCharCode = c.charCodeAt(0) + 1;
    }
    if (found) { break; }
  }
  
  // disallowed chars
  const disallowedChars = [...password].every(c => ['i', 'o', 'l'].indexOf(c) === -1);

  // overlappping pairs
  const pairs = new Set<string>();
  let previous = null;
  for (const c of password) {
    if (c === previous) {
      pairs.add(c);
    } else {
      previous = c;
    }
  }

  return disallowedChars && pairs.size > 1 && found;
}