import {
    useState
} from 'react';


function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    const reset = () => {
        setValue(initialValue);
    }
    const bindData = {
        value,
        onChange: (event) => {
            setValue(event.target.value);
        }
    }

    return [value, bindData, reset];
}
export default useInput;