import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notes from "../notes";


function app(){
    return <div>
        <Header/>
        {notes.map(note => (<Note title={note.title} content={note.content}/>))}
        <Footer/>
    </div>
}

export default app;