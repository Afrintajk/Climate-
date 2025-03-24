const messages = { A: 5, B: 3, C: 6 };
const sideInfo = { A: ["B"], B: ["C"], C: ["A"] };

const indexCoding = (msgs, info) => {
    let encoded = {};
    for (let user in msgs) {
        encoded[user] = msgs[user];
        if (info[user]) info[user].forEach(k => encoded[user] ^= msgs[k]); // XOR
    }
    return encoded;
};

console.log(indexCoding(messages, sideInfo));
