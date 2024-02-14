import React from "react";
import Phoentic from "./Phonetic";
import Meaning from "./Meaning";


export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <h2>{props.results.word}</h2>
                {props.results.phonetics.map(function (phoentic, index) {
                  return (
                        < div key={index}>
                            <Phoentic phoentic={phoentic} />
                        </div>
                );
             })}
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        < div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
            </div>
        );
    } else {
    return null;
    }
}

