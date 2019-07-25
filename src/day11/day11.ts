export function day11(password: string): string {
  let isValid = false;
  do {
    password = generateNewPassword(password);
    isValid = checkPasswordRequirements(password);
  } while (!isValid);

  return password;
}

export function generateNewPassword(oldPassword: string): string {
  const a = 'a';
  const z = 'z';
  const password = [...oldPassword];
  const end = password.pop() || '';
  if (end === z) {
    const tmp = [a];
    while(password.length > 0) {
      const next = password.pop() || '';
      if (next !== z) {
        const c = next.charCodeAt(0) + 1;
        tmp.push(String.fromCharCode(c));
        break;
      } else {
        tmp.push(a);
      }
    }
    while(tmp.length > 0) {
      password.push(tmp.pop() || '');
    }
  } else {
    const c = end.charCodeAt(0) + 1;
    password.push(String.fromCharCode(c));
  }
  return password.join('');
}

export function checkPasswordRequirements(password: string): boolean {
  // straight chars
  const found = checkStraightChars(password);

  if (!found) { return found; }

  // disallowed chars
  const disallowedChars = checkDisallowedChars(password);

  if (!disallowedChars) { return disallowedChars; }

  // overlappping pairs
  const pairs = checkPairs(password);

  return disallowedChars && pairs && found;
}

function checkDisallowedChars(password: string) {
  return [...password].every(c => ['i', 'o', 'l'].indexOf(c) === -1);
}

function checkPairs(password: string): boolean {
  const pairs = new Set<string>();
  let previous = null;
  for (const c of password) {
    if (c === previous) {
      pairs.add(c);
    }
    else {
      previous = c;
    }
  }
  return pairs.size > 1;
}

function checkStraightChars(password: string): boolean {
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
  
  return found;
}