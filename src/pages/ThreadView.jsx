import React from 'react';
import Thread from '../components/Thread';


function ThreadView(props) {
    return (
        <Thread onChangeThreadId={(id) => props.onChangeThreadId(id)}/>
    );
}

export default ThreadView;