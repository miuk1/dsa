// Tower of Hanoi puzzle 

function towerOfHanoi(n, source, destination, temp) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }
    towerOfHanoi(n - 1, source, temp, destination);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, temp, destination, source);
}

towerOfHanoi(5, 'A', 'C', 'B');
// Time complexity: O(2^n) - exponential time complexity