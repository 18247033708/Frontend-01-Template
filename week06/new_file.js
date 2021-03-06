// 作业：使用状态机完成“abababx”的处理

function match(string) {
  let state = start;
  for (const c of string) {
    state = state(c);
  }
  return state === end;
}

function start(c) {
  if (c === 'a') {
    return funB;
  } else {
    return start;
  }
}

function funB(c) {
  if (c === 'b') {
    return funA2;
  } else {
    return start(c);
  }
}
function funA2(c) {
  if (c === 'a') {
    return funB2;
  } else {
    return start(c);
  }
}
function funB2(c) {
  if (c === 'b') {
    return funA3;
  } else {
    return start(c);
  }
}
function funA3(c) {
  if (c === 'a') {
    return funB3;
  } else {
    return start(c);
  }
}
function funB3(c) {
  if (c === 'b') {
    return funX;
  } else {
    return start(c);
  }
}
function end() {
  return end;
}


console.log(match('abababx'));