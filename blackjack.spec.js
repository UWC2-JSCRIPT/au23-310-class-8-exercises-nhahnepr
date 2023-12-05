describe("Testing dealerShoulDraw function", () => {
    it("tests to see if false when 10 and 9 are passed into function", () => {
        const dealerHand = [
            {displayVal: 'ten', val: 10, suit: 'hearts'},
            {displayVal: 'nine', val: 9, suit: 'hearts'}
        ]
        
        const result = dealerShouldDraw(dealerHand);
        expect(result).toEqual(false);
    });
    it("tests to see if true when Ace and 6 are passed into function", () => {
        const dealerHand = [
            {displayVal: 'Ace', val: 11, suit: 'hearts'},
            {displayVal: 'six', val: 6, suit: 'hearts'}
        ]
        
        const result = dealerShouldDraw(dealerHand);
        expect(result).toEqual(true);
    });
    it("tests to see if false when Ace, 6 and 10 are passed into function", () => {
        const dealerHand = [
            {displayVal: 'Ace', val: 11, suit: 'hearts'},
            {displayVal: 'six', val: 6, suit: 'hearts'},
            {displayVal: 'ten', val: 10, suit: 'hearts'}
        ]
        
        const result = dealerShouldDraw(dealerHand);
        expect(result).toEqual(false);
    });
    it("tests to see if true when 2, 4, 2, and 5 are passed into function", () => {
        const dealerHand = [
            {displayVal: 'two', val: 2, suit: 'hearts'},
            {displayVal: 'four', val: 4, suit: 'hearts'},
            {displayVal: 'two', val: 2, suit: 'spades'},
            {displayVal: 'five', val: 5, suit: 'hearts'}
        ]
        
        const result = dealerShouldDraw(dealerHand);
        expect(result).toEqual(true);
    });
});