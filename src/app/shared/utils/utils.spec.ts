import { add } from "./utils"

describe('utils', () => {
    describe('add', () => {
        it('should add correspondingly', () => {
            expect(add(1, 2)).toEqual(3)
        })
    })
})