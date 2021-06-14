import {Child, ChildAsFC} from "./Child";

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => {
        console.log('click')
    }
    }/>
}

export default Parent
