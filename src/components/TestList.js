import React from 'react';

function TestList(){
    const items =['zahid','ahmed','bilal'];
    const listitem = items.map((item)=>({item}));
    return({listitem});
}
export default TestList;