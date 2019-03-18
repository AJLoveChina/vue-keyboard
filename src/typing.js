export default {
  modifier: {
    " ": {
      left: "neutral-left",
      right: "neutral-right"
    },
    shift: {
      left: "shift-left",
      right: "shift-right"
    },
    opt: {
      left: "option-left",
      right: "option-right"
    },
    "shift+opt": {
      left: "shift-option-left",
      right: "shift-option-right"
    },
    "no-hand": {
      left: "no-hand",
      right: "no-hand"
    }
  },
  rows: [
    [{
    key_id: "tilda",
    qchar: "`",
    qchartop: "~",
    code: 192,
    fin: 1,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left pinky up two keys from {{a}} and one to the left.",
    iso_key_id: "shift-left",
    iso_hint: "move your left pinky down one key from {{a}} and one to the left."
  }, {
    key_id: "key-1",
    qchar: "1",
    qchartop: "!",
    code: 49,
    fin: 1,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left pinky up two keys from {{a}}."
  }, {
    key_id: "key-2",
    qchar: "2",
    qchartop: "@",
    code: 50,
    fin: 2,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left ring finger up two keys from {{s}}."
  }, {
    key_id: "key-3",
    qchar: "3",
    qchartop: "#",
    code: 51,
    fin: 3,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left middle finger up two keys from {{d}}."
  }, {
    key_id: "key-4",
    qchar: "4",
    qchartop: "$",
    code: 52,
    fin: 4,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left index finger up to two keys from the {f}."
  }, {
    key_id: "key-5",
    qchar: "5",
    qchartop: "%",
    code: 53,
    fin: 4,
    lfin: 2,
    rfin: 8,
    hand: 1,
    hint: "move your left index finger up to two keys from the {f}."
  }, {
    key_id: "key-6",
    qchar: "6",
    qchartop: "^",
    code: 54,
    fin: 7,
    lfin: 3,
    rfin: 9,
    hand: 2,
    hint: "move your left index finger up to two keys from {{f}} and one to the right."
  }, {
    key_id: "key-7",
    qchar: "7",
    qchartop: "&",
    code: 55,
    fin: 7,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right index finger up to two keys from {{j}} and two to the left."
  }, {
    key_id: "key-8",
    qchar: "8",
    qchartop: "*",
    code: 56,
    fin: 8,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right middle finger up two keys from {{k}} and to the left."
  }, {
    key_id: "key-9",
    qchar: "9",
    qchartop: "(",
    code: 57,
    fin: 9,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right ring finger up two keys from {{l}} and to the left."
  }, {
    key_id: "key-0",
    qchar: "0",
    qchartop: ")",
    code: 48,
    fin: 10,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right pinky up two keys from {{;}} and to the left."
  }, {
    key_id: "minus",
    qchar: "-",
    qchartop: "_",
    code: 189,
    fin: 10,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right pinky up two keys from {{;}}."
  }, {
    key_id: "equal",
    qchar: "=",
    qchartop: "+",
    code: 187,
    fin: 10,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right pinky up two keys from {{;}} and to the right."
  }, {
    key_id: "iso-key",
    iso_key_id: "tilda",
    qchar: "§",
    qchartop: "±",
    lfin: 1,
    rfin: 7,
    fin: 1,
    hand: 1,
    hint: "move your left pinky up two keys from {{a}} and one to the left."
  }],
    [{
    key_id: "tab",
    special_key: !0,
    qchar: "\t",
    code: 9,
    fin: 1,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left pinky up one key from {{a}} and one key to the left."
  }, {
    key_id: "q",
    qchar: "q",
    code: 81,
    fin: 1,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left pinky up one key from {{a}}."
  }, {
    key_id: "w",
    qchar: "w",
    code: 87,
    fin: 2,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left ring finger up one key from {{s}}."
  }, {
    key_id: "e",
    qchar: "e",
    code: 69,
    fin: 3,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left middle finger up one key from {{d}}."
  }, {
    key_id: "r",
    qchar: "r",
    code: 82,
    fin: 4,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left index finger up one key from {{f}}."
  }, {
    key_id: "t",
    qchar: "t",
    code: 84,
    fin: 4,
    lfin: 2,
    rfin: 8,
    hand: 1,
    hint: "move your left index finger up one key from {{f}} and to the right."
  }, {
    key_id: "y",
    qchar: "y",
    code: 89,
    fin: 7,
    lfin: 3,
    rfin: 9,
    hand: 2,
    hint: "move your right index finger up one key from {{j}} and to the left."
  }, {
    key_id: "u",
    qchar: "u",
    code: 85,
    fin: 7,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right index finger up one key from {{j}}."
  }, {
    key_id: "i",
    qchar: "i",
    code: 73,
    fin: 8,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right middle finger up one key from {{k}}."
  }, {
    key_id: "o",
    qchar: "o",
    code: 79,
    fin: 9,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right ring finger up one key from {{l}}."
  }, {
    key_id: "p",
    qchar: "p",
    code: 80,
    fin: 10,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right pinky up one key from {{;}}."
  }, {
    key_id: "open-bracket",
    qchar: "[",
    qchartop: "{",
    code: 219,
    fin: 10,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right pinky up one key from {{;}} and to the right."
  }, {
    key_id: "close-bracket",
    qchar: "]",
    qchartop: "}",
    code: 221,
    fin: 10,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right pinky up one key from {{;}} and two to the right."
  }, {
    key_id: "backslash",
    qchar: "\\",
    qchartop: "|",
    code: 220,
    fin: 10,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right pinky up one key from {{;}} and three keys to the right.",
    iso_key_id: "enter",
    iso_hint: "move your right pinky two keys to the right."
  }],
    [{
    key_id: "capslock",
    special_key: !0,
    code: 0,
    fin: 1,
    lfin: 1,
    rfin: 7,
    hand: 1
  }, {
    key_id: "a",
    qchar: "a",
    code: 65,
    fin: 1,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "press down with your left pinky."
  }, {
    key_id: "s",
    qchar: "s",
    code: 83,
    fin: 2,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "press down with your left ring finger."
  }, {
    key_id: "d",
    qchar: "d",
    code: 68,
    fin: 3,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "press down with your left middle finger."
  }, {
    key_id: "f",
    qchar: "f",
    code: 70,
    fin: 4,
    lfin: 1,
    rfin: 7,
    hand: 1,
    bump: !0,
    hint: "press down with your left index finger."
  }, {
    key_id: "g",
    qchar: "g",
    code: 71,
    fin: 4,
    lfin: 2,
    rfin: 8,
    hand: 1,
    hint: "move your left index finger one key to the right."
  }, {
    key_id: "h",
    qchar: "h",
    code: 72,
    fin: 7,
    lfin: 3,
    rfin: 9,
    hand: 2,
    hint: "move your right index finger one key to the left."
  }, {
    key_id: "j",
    qchar: "j",
    code: 74,
    fin: 7,
    lfin: 4,
    rfin: 10,
    hand: 2,
    bump: !0,
    hint: "press down with your right index finger."
  }, {
    key_id: "k",
    qchar: "k",
    code: 75,
    fin: 8,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "press down with your right middle finger."
  }, {
    key_id: "l",
    qchar: "l",
    code: 76,
    fin: 9,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "press down with your right ring finger."
  }, {
    key_id: "semicolon",
    qchar: ";",
    qchartop: ":",
    code: 186,
    fin: 10,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "press down with your right pinky."
  }, {
    key_id: "quote",
    qchar: "'",
    qchartop: '"',
    code: 222,
    fin: 10,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right pinky one key to the right."
  }],
    [{
    key_id: "shift-left",
    special_key: !0,
    code: 16,
    fin: 1,
    lfin: 1,
    rfin: 7,
    hand: 1
  }, {
    key_id: "z",
    qchar: "z",
    code: 90,
    fin: 1,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left pinky down one key from {{a}} and to the right."
  }, {
    key_id: "x",
    qchar: "x",
    code: 88,
    fin: 2,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left ring finger down one key from {{s}} and to the right."
  }, {
    key_id: "c",
    qchar: "c",
    code: 67,
    fin: 3,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left middle finger down one key from {{d}} and to the right."
  }, {
    key_id: "v",
    qchar: "v",
    code: 86,
    fin: 4,
    lfin: 1,
    rfin: 7,
    hand: 1,
    hint: "move your left index finger down one key from {{f}} and to the right."
  }, {
    key_id: "b",
    qchar: "b",
    code: 66,
    fin: 4,
    lfin: 2,
    rfin: 8,
    hand: 1,
    hint: "move your left index finger down one key from {{f}} and two keys to the right."
  }, {
    key_id: "n",
    qchar: "n",
    code: 78,
    fin: 7,
    lfin: 3,
    rfin: 9,
    hand: 2,
    hint: "move your right index finger down one key from {{j}} and to the left."
  }, {
    key_id: "m",
    qchar: "m",
    code: 77,
    fin: 7,
    lfin: 4,
    rfin: 10,
    hand: 2,
    hint: "move your right index finger down one key from {{j}} and to the right."
  }, {
    key_id: "comma",
    qchar: ",",
    qchartop: "<",
    code: 188,
    lfin: 4,
    rfin: 10,
    fin: 8,
    hand: 2,
    hint: "move your right middle finger down one key from {{k}} and to the right."
  }, {
    key_id: "dot",
    qchar: ".",
    qchartop: ">",
    code: 190,
    lfin: 4,
    rfin: 10,
    fin: 9,
    hand: 2,
    hint: "move your right ring finger down one key from {{l}} and to the to the right."
  }, {
    key_id: "slash",
    qchar: "/",
    qchartop: "?",
    code: 191,
    lfin: 4,
    rfin: 10,
    fin: 10,
    hand: 2,
    hint: "move your right pinky down one key from {{;}} and to the right."
  }, {
    key_id: "shift-right",
    special_key: !0,
    code: 16,
    lfin: 4,
    rfin: 10,
    fin: 10,
    hand: 2
  }],
    [{
    key_id: "control",
    special_key: !0,
    fin: 1,
    lfin: 1,
    rfin: 7,
    hand: 1
  }, {
    key_id: "option-left",
    special_key: !0,
    fin: 1,
    lfin: 1,
    rfin: 7,
    hand: 1
  }, {
    key_id: "space",
    special_key: !0,
    code: 32,
    fin: 5,
    lfin: 5,
    rfin: 6,
    hand: 2,
    qchar: " ",
    hint: "use either thumb."
  }, {
    key_id: "option-right",
    special_key: !0,
    fin: 10,
    lfin: 4,
    rfin: 10,
    hand: 2
  }]]
}
