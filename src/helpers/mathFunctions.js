export default class mathFunctions
{
    static ClampInt(min, value, max){
        if (min > value) {
            return min;
        } else if (max < value) {
            return max;
        } else {
            return value;
        }
    }
}

