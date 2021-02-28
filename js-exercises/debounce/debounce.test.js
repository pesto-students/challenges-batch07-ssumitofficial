import { debounce } from "./debounce";

describe("debounce", () => {
    it('should return a function', () => {
        expect(typeof debounce(() => { }, 10)).toBe('function');
    });

    it('should call function only once', () => {
        const foo = jest.fn();
        const deouncedFunction = debounce(foo, 100);
        deouncedFunction();
        deouncedFunction();
        deouncedFunction();
        deouncedFunction();
        deouncedFunction();
        deouncedFunction();

        setTimeout(() => {
            expect(foo).toHaveBeenCalledTimes(1);
        }, 105);
    });

    it('should call function after given interval', () => {
        const foo = jest.fn();
        const deouncedFunction = debounce(foo, 100);

        for(let i = 1; i <= 10; i++){
            if(i%2 == 0){
                setTimeout(() => {
                    deouncedFunction();
                }, i * 100);
            }
            else{
                deouncedFunction();
            }
        }

        setTimeout(() => {
            expect(foo).toHaveBeenCalledTimes(5);
        }, 1000);
    })
});
