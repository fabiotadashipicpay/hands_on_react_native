import React from "react";

import { Text } from 'react-native';

export default () => <Text>Hello from component</Text>

function HelloNotDefault() {
    return <Text>Not default</Text>
}
function HelloNotDefault1() {
    return <Text>Not default 1</Text>
}

export { HelloNotDefault, HelloNotDefault1 }