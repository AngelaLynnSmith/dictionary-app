import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
     <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index) {
                //if (index > 0) {
                  //  return []
               // }
                return (
                 <div key={index}>
                  <p>
                   {definition.definition && (
                    <>
                     <strong> Definition:</strong>
                     {definition.definition}
                     <br />
                    </>
                   )}
                   {definition.example && (
                    <>
                     <strong> Example:</strong>
                     <em>{definition.example}</em>
                    </>
                   )}
                   <Synonyms synonyms={definition.synonyms} />
                  </p>
                 </div>
                );
        })}
     </div>
    );
}