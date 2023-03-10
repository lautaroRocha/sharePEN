import React, {memo} from 'react';
import Editor from "@monaco-editor/react";
import {Spinner} from '../../components'
import {useDispatch, useSelector } from 'react-redux'
import  {setHtml}  from '../../redux/codeSlice'

const HtmlEditor = memo(function HtmlEditor(){

    const dispatch = useDispatch()
    
    const handleEditorChange = (e) => {
        dispatch(setHtml(e))
    }

    const htmlCode = useSelector((state)=>state.code.html)

    return (
        <div className='editor' tabIndex={0}>
            <Editor defaultLanguage='html'className="html" onChange={handleEditorChange}  theme="vs-dark" loading={<Spinner />} defaultValue={htmlCode}/>
        </div>
    );
})

export default HtmlEditor;
