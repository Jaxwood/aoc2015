"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sut {
    day1(input) {
        let cnt = 0;
        for (const s of input) {
            if (s === '(') {
                cnt = cnt + 1;
            }
            else {
                cnt = cnt - 1;
            }
        }
        return cnt;
    }
}
exports.Sut = Sut;
//# sourceMappingURL=day1.js.map